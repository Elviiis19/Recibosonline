import React, { useState, useEffect } from 'react';
import type { ReceiptData, ReceiptType } from '../types';
import { Printer, Share2, DollarSign, Calendar, MapPin, User, FileCheck } from 'lucide-react';

interface Props {
  initialType?: ReceiptType;
  receiptTitle?: string;
}

export const ReceiptGenerator: React.FC<Props> = ({ initialType = 'generico', receiptTitle = 'RECIBO' }) => {
  const [data, setData] = useState<ReceiptData>({
    payerName: '',
    payerDoc: '',
    receiverName: '',
    receiverDoc: '',
    amount: 0,
    amountInWords: '',
    description: '',
    city: 'São Paulo',
    date: new Date().toISOString().split('T')[0],
    receiptType: initialType
  });

  // Atualiza description default quando o tipo muda
  useEffect(() => {
    let defaultDesc = '';
    switch(initialType) {
        case 'aluguel-residencial': defaultDesc = 'Aluguel do imóvel situado à Rua... referente ao mês de...'; break;
        case 'veiculos': defaultDesc = 'Pagamento referente à compra do veículo Modelo... Placa...'; break;
        case 'servicos': defaultDesc = 'Serviços de... prestados no período de...'; break;
        case 'sinal': defaultDesc = 'Sinal de negócio referente à compra de...'; break;
        default: defaultDesc = 'Serviços prestados';
    }
    setData(prev => ({ 
        ...prev, 
        receiptType: initialType,
        description: prev.description === '' || prev.description === 'Serviços prestados' ? defaultDesc : prev.description
    }));
  }, [initialType]);

  const [copied, setCopied] = useState(false);

  // Auto-fill amount in words
  useEffect(() => {
    if (data.amount > 0) {
      const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.amount);
      if (data.amountInWords === '' || data.amountInWords.includes('valor de')) {
        setData(prev => ({ ...prev, amountInWords: `referente ao valor de ${formatted}` }));
      }
    }
  }, [data.amount]);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    const text = `*${receiptTitle}*%0A%0A*Valor:* R$ ${data.amount.toFixed(2)}%0A*Recebi de:* ${data.payerName || '...'}.%0A*Referente a:* ${data.description}.%0A%0AEmitido via RecibosOnline.com.br`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleChange = (field: keyof ReceiptData, value: string | number) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const formattedAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.amount);
  const formattedDate = new Date(data.date).toLocaleDateString('pt-BR');

  // Dynamic Placeholder Labels
  const payerLabel = initialType === 'aluguel-residencial' ? 'Recebi de (Inquilino)' : 
                     initialType === 'veiculos' ? 'Recebi de (Comprador)' : 'Recebi de (Pagador)';
  
  const receiverLabel = initialType === 'aluguel-residencial' ? 'Emitente (Proprietário/Imobiliária)' : 
                        initialType === 'veiculos' ? 'Emitente (Vendedor)' : 'Emitente (Quem recebe)';

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* FORM SECTION (Left/Top) */}
      <div className="w-full lg:w-5/12 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 no-print ring-1 ring-slate-100">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
           <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
             <FileCheck size={24} />
           </div>
           <div>
             <h2 className="font-bold text-xl text-slate-800">Preencha o Recibo</h2>
             <p className="text-xs text-slate-500">Geração instantânea e gratuita</p>
           </div>
        </div>
        
        <div className="space-y-5">
          {/* Valor Highlighted */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 mb-1">Valor do Recibo (R$)</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <DollarSign size={20} />
                </div>
                <input 
                  type="number" 
                  value={data.amount || ''}
                  onChange={(e) => handleChange('amount', parseFloat(e.target.value))}
                  className="pl-10 w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 text-lg font-semibold text-brand-700 border px-3"
                  placeholder="0,00"
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1"><User size={14}/> {payerLabel}</label>
                <input 
                  type="text" 
                  value={data.payerName}
                  onChange={(e) => handleChange('payerName', e.target.value)}
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
                  placeholder="Nome completo"
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">CPF/CNPJ (Opcional)</label>
                <input 
                  type="text" 
                  value={data.payerDoc}
                  onChange={(e) => handleChange('payerDoc', e.target.value)}
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
                  placeholder="000.000.000-00"
                />
             </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Referente a (Descrição)</label>
            <textarea 
              value={data.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
              placeholder="Descreva o serviço, produto ou aluguel..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{receiverLabel}</label>
                <input 
                  type="text" 
                  value={data.receiverName}
                  onChange={(e) => handleChange('receiverName', e.target.value)}
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
                  placeholder="Seu nome"
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">CPF/CNPJ do Emitente</label>
                <input 
                  type="text" 
                  value={data.receiverDoc}
                  onChange={(e) => handleChange('receiverDoc', e.target.value)}
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
                  placeholder="000.000.000-00"
                />
             </div>
          </div>

           <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1"><MapPin size={14}/> Cidade</label>
                <input 
                  type="text" 
                  value={data.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1"><Calendar size={14}/> Data</label>
                <input 
                  type="date" 
                  value={data.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2 border px-3"
                />
              </div>
           </div>
        </div>

        <div className="mt-8 space-y-3">
            <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-lg transition-all shadow-md transform hover:-translate-y-0.5"
            >
                <Share2 size={22} />
                Enviar no WhatsApp
            </button>
            <button 
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3.5 px-4 rounded-lg transition-colors shadow-md"
            >
                <Printer size={20} />
                Imprimir / Baixar PDF
            </button>
        </div>
      </div>

      {/* PREVIEW SECTION (Right/Bottom) */}
      <div className="w-full lg:w-7/12 bg-slate-100 lg:bg-transparent flex flex-col items-center justify-start pt-4">
          <div className="mb-4 text-slate-500 text-sm font-medium no-print flex items-center gap-2">
             <span>Visualização da Folha</span>
             <span className="bg-white border border-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded shadow-sm">Papel A4</span>
          </div>

          {/* THE RECEIPT PAPER */}
          <div className="receipt-container bg-white p-10 md:p-14 shadow-2xl border border-slate-200 w-full max-w-[210mm] min-h-[120mm] relative text-slate-900 mx-auto transform transition-all">
             {/* Receipt Header */}
             <div className="border-b-2 border-slate-900 pb-6 mb-8 flex justify-between items-start">
                 <div className="w-2/3">
                    <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wider">{receiptTitle}</h1>
                    <p className="text-sm text-slate-500 mt-1 font-medium">Comprovante de Pagamento</p>
                 </div>
                 <div className="bg-brand-50 px-6 py-4 rounded-lg border-2 border-brand-100 flex flex-col items-end min-w-[140px]">
                     <span className="block text-xs text-brand-800 uppercase font-bold tracking-widest mb-1">Valor Total</span>
                     <span className="text-3xl font-bold text-brand-700 whitespace-nowrap">{formattedAmount}</span>
                 </div>
             </div>

             {/* Receipt Body */}
             <div className="space-y-8 text-lg leading-loose font-serif text-slate-800">
                 <p>
                    Recebi(emos) de <span className="font-bold border-b-2 border-slate-300 px-2 min-w-[200px] inline-block">{data.payerName || '_______________________'}</span>
                    {data.payerDoc && <span className="text-sm ml-2 text-slate-500 font-sans">(CPF/CNPJ: {data.payerDoc})</span>}
                 </p>
                 
                 <p className="bg-slate-50 p-4 border-l-4 border-brand-500 rounded-r-md italic text-slate-700">
                    A importância de <span className="font-semibold">{data.amountInWords || '_______________________'}</span>.
                 </p>

                 <p>
                    Referente a <span className="font-bold border-b-2 border-slate-300 px-2 min-w-[200px] inline-block">{data.description || '_______________________'}</span>.
                 </p>

                 <p className="text-base text-slate-600">
                    Para clareza e verdade, firmo(amos) o presente recibo dando plena e geral quitação.
                 </p>
             </div>

             {/* Receipt Footer */}
             <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-end gap-12">
                 <div className="text-left">
                     <p className="text-lg font-medium">
                        {data.city}, {formattedDate}
                     </p>
                 </div>

                 <div className="flex-1 max-w-sm text-center">
                     <div className="border-b border-slate-900 mb-2 h-8 w-full"></div>
                     <p className="font-bold text-lg uppercase">{data.receiverName || 'ASSINATURA DO EMITENTE'}</p>
                     {data.receiverDoc && <p className="text-sm text-slate-500">CPF/CNPJ: {data.receiverDoc}</p>}
                 </div>
             </div>

             {/* Watermark/Branding */}
             <div className="absolute bottom-4 left-0 right-0 text-center print:hidden opacity-40 pointer-events-none">
                 <p className="text-[10px] uppercase tracking-widest text-slate-400">Gerado via RecibosOnline.com.br</p>
             </div>
             <div className="hidden print-only absolute bottom-2 right-4 text-[10px] text-gray-400">
                 Emitido gratuitamente em RecibosOnline.com.br
             </div>
          </div>
      </div>
    </div>
  );
};
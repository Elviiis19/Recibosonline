import React, { useState, useEffect } from 'react';
import type { ReceiptData, ReceiptType } from '../types';
import { Printer, Share2, DollarSign, Calendar, MapPin, User, FileCheck, FileSignature } from 'lucide-react';

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
        case 'aluguel-residencial': defaultDesc = 'Pagamento do aluguel do imóvel situado à Rua... referente ao mês de...'; break;
        case 'veiculos': defaultDesc = 'Pagamento referente à compra do veículo Modelo... Placa...'; break;
        case 'servicos': defaultDesc = 'Prestação de serviços de... realizados no período de...'; break;
        case 'sinal': defaultDesc = 'Sinal de negócio referente à compra de...'; break;
        default: defaultDesc = '';
    }
    
    // Só atualiza se o usuário não tiver digitado algo personalizado
    setData(prev => ({ 
        ...prev, 
        receiptType: initialType,
        description: (!prev.description || prev.description === 'Serviços prestados') ? defaultDesc : prev.description
    }));
  }, [initialType]);

  // Auto-fill amount in words logic
  useEffect(() => {
    if (data.amount > 0) {
      const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.amount);
      
      // Simple logic to help user
      const isAutoFillable = data.amountInWords === '' || data.amountInWords.includes('valor de R$');
      
      if (isAutoFillable) {
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

  const formattedAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.amount || 0);
  const formattedDate = new Date(data.date).toLocaleDateString('pt-BR');

  // Dynamic Labels for better UX
  const payerLabel = initialType === 'aluguel-residencial' ? 'Recebi de (Inquilino)' : 
                     initialType === 'veiculos' ? 'Recebi de (Comprador)' : 'Recebi de (Pagador)';
  
  const receiverLabel = initialType === 'aluguel-residencial' ? 'Emitente (Proprietário)' : 
                        initialType === 'veiculos' ? 'Emitente (Vendedor)' : 'Emitente (Quem recebe)';

  return (
    <div className="flex flex-col xl:flex-row gap-8 items-start">
      {/* FORM SECTION (Left) */}
      <div className="w-full xl:w-5/12 bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 no-print">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
           <div className="bg-brand-50 p-2.5 rounded-xl text-brand-600">
             <FileSignature size={28} strokeWidth={1.5} />
           </div>
           <div>
             <h2 className="font-bold text-xl text-slate-800">Preencha os Dados</h2>
             <p className="text-sm text-slate-500">O recibo é gerado automaticamente ao lado</p>
           </div>
        </div>
        
        <div className="space-y-6">
          {/* Valor Highlighted */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 transition-all focus-within:ring-2 focus-within:ring-brand-100 focus-within:border-brand-300">
            <label className="block text-sm font-bold text-slate-700 mb-2">Valor do Recibo</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-600">
                    <DollarSign size={24} />
                </div>
                <input 
                  type="number" 
                  value={data.amount || ''}
                  onChange={(e) => handleChange('amount', parseFloat(e.target.value))}
                  className="pl-12 w-full bg-white rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-4 text-2xl font-bold text-slate-900 placeholder:text-slate-300 border"
                  placeholder="0,00"
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User size={16} className="text-brand-500"/> {payerLabel}
                </label>
                <input 
                  type="text" 
                  value={data.payerName}
                  onChange={(e) => handleChange('payerName', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border transition-colors"
                  placeholder="Nome completo"
                />
             </div>
             <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">CPF/CNPJ (Pagador)</label>
                <input 
                  type="text" 
                  value={data.payerDoc}
                  onChange={(e) => handleChange('payerDoc', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border transition-colors"
                  placeholder="000.000.000-00"
                />
             </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Referente a (Descrição Detalhada)</label>
            <textarea 
              value={data.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-3 border transition-colors resize-none"
              placeholder="Ex: Aluguel referente ao mês de Março/2024..."
            />
          </div>

           <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Valor por extenso (Automático)</label>
                <input 
                  type="text" 
                  value={data.amountInWords}
                  onChange={(e) => handleChange('amountInWords', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border bg-slate-50 text-slate-600"
                  placeholder="Ex: referente ao valor de mil reais"
                />
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">{receiverLabel}</label>
                <input 
                  type="text" 
                  value={data.receiverName}
                  onChange={(e) => handleChange('receiverName', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border transition-colors"
                  placeholder="Seu nome"
                />
             </div>
             <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">CPF/CNPJ (Emitente)</label>
                <input 
                  type="text" 
                  value={data.receiverDoc}
                  onChange={(e) => handleChange('receiverDoc', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border transition-colors"
                  placeholder="000.000.000-00"
                />
             </div>
          </div>

           <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand-500"/> Cidade
                </label>
                <input 
                  type="text" 
                  value={data.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar size={16} className="text-brand-500"/> Data
                </label>
                <input 
                  type="date" 
                  value={data.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3 border transition-colors"
                />
              </div>
           </div>
        </div>

        <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
            <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
                <Share2 size={20} />
                Enviar no WhatsApp
            </button>
            <button 
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-slate-300"
            >
                <Printer size={20} />
                Imprimir / Salvar PDF
            </button>
        </div>
      </div>

      {/* PREVIEW SECTION (Right) */}
      <div className="w-full xl:w-7/12 flex flex-col items-center">
          <div className="mb-4 text-slate-500 text-sm font-medium no-print flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
             <FileCheck size={14} className="text-brand-500"/>
             <span>Visualização em Tempo Real (A4)</span>
          </div>

          {/* THE RECEIPT PAPER */}
          <div className="receipt-container bg-white p-10 md:p-12 shadow-2xl shadow-slate-300/50 border border-slate-200 w-full max-w-[210mm] aspect-[210/120] relative text-slate-900 mx-auto transition-all flex flex-col justify-between min-h-[500px]">
             
             {/* Receipt Header */}
             <div className="border-b-2 border-slate-800 pb-6 mb-8 flex justify-between items-start">
                 <div className="w-2/3 pr-4">
                    <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wider leading-none">{receiptTitle}</h1>
                    <p className="text-sm text-slate-500 mt-2 font-medium tracking-wide">COMPROVANTE DE PAGAMENTO</p>
                 </div>
                 <div className="bg-brand-50 px-5 py-3 rounded-lg border border-brand-200 flex flex-col items-end min-w-[150px]">
                     <span className="block text-[10px] text-brand-800 uppercase font-bold tracking-widest mb-1">Valor Total</span>
                     <span className="text-2xl font-bold text-brand-700 whitespace-nowrap tracking-tight">{formattedAmount}</span>
                 </div>
             </div>

             {/* Receipt Body */}
             <div className="space-y-6 text-lg leading-loose font-serif text-slate-800 flex-grow">
                 <div className="leading-loose">
                    Recebi(emos) de <span className="font-bold border-b border-slate-400 px-2 inline-block min-w-[50px]">{data.payerName || '_________________________________'}</span>
                    {data.payerDoc && <span className="text-sm ml-2 text-slate-500 font-sans whitespace-nowrap">(CPF/CNPJ: {data.payerDoc})</span>}
                 </div>
                 
                 <div className="bg-slate-50 p-4 border-l-4 border-brand-400 italic text-slate-700 my-4 text-base">
                    A importância de <span className="font-bold">{data.amountInWords || '_________________________________'}</span>.
                 </div>

                 <div className="leading-loose">
                    Referente a <span className="font-bold border-b border-slate-400 px-2 inline-block min-w-[100px]">{data.description || '_________________________________'}</span>.
                 </div>

                 <p className="text-base text-slate-600 mt-4">
                    Para clareza e verdade, firmo(amos) o presente recibo dando plena e geral quitação.
                 </p>
             </div>

             {/* Receipt Footer */}
             <div className="mt-16 pt-4 flex flex-col md:flex-row justify-between items-end gap-12">
                 <div className="text-left font-sans">
                     <p className="text-lg text-slate-800">
                        {data.city}, <span className="font-semibold">{formattedDate}</span>
                     </p>
                 </div>

                 <div className="flex-1 max-w-sm text-center">
                     <div className="border-b border-slate-800 mb-2 h-8 w-full"></div>
                     <p className="font-bold text-sm uppercase tracking-wide text-slate-800">{data.receiverName || 'ASSINATURA DO EMITENTE'}</p>
                     {data.receiverDoc && <p className="text-xs text-slate-500 mt-1 font-mono">CPF/CNPJ: {data.receiverDoc}</p>}
                 </div>
             </div>

             {/* Watermark */}
             <div className="absolute bottom-3 left-0 right-0 text-center opacity-30 pointer-events-none">
                 <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">RecibosOnline.com.br</p>
             </div>
             
             {/* Print Only Footer */}
             <div className="hidden print-only absolute bottom-0 right-0 text-[8px] text-gray-400 p-2">
                 Gerado em RecibosOnline.com.br
             </div>
          </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { JsonLd } from './components/JsonLd';
import { PAGE_CONTENT } from './constants';
import type { ReceiptType } from './types';
import { ShieldCheck, Zap, Smartphone, Star, FileText, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  // Inicializa com o hash atual ou '#' padrão
  const [currentHash, setCurrentHash] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash || '#';
    }
    return '#';
  });

  useEffect(() => {
    // Handler seguro para mudanças de hash
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    // Tenta definir hash inicial se vazio, mas falha silenciosamente em sandboxes
    if (!window.location.hash) {
      try {
        // Evita replaceState para não causar SecurityError
        // Apenas definimos o estado interno, sem forçar URL se for bloqueado
        setCurrentHash('#');
      } catch (e) {
        console.warn('Navigation state locked by environment policy.');
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Lógica de Roteamento (Router Simples)
  const getReceiptTypeAndContentKey = (): { type: ReceiptType, key: string } => {
    // Limpa o hash para análise
    const cleanHash = currentHash.replace('#', '').replace('modelo/', '');
    
    if (cleanHash.includes('aluguel-residencial')) return { type: 'aluguel-residencial', key: 'aluguel-residencial' };
    if (cleanHash.includes('veiculos')) return { type: 'veiculos', key: 'veiculos' };
    if (cleanHash.includes('servicos')) return { type: 'servicos', key: 'servicos' };
    
    // Fallback padrão
    return { type: 'generico', key: 'default' };
  };

  const { type, key } = getReceiptTypeAndContentKey();
  const content = PAGE_CONTENT[key] || PAGE_CONTENT['default'];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <JsonLd 
        type={content.schemaType} 
        name={content.title} 
        description={content.description}
        url={`https://recibosonline.com.br/${currentHash}`}
      />
      
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <div className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-12 border-b border-slate-100 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-10 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        {content.heroTitle} <span className="text-brand-600 block md:inline">em PDF e WhatsApp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        {content.heroDescription}
                    </p>
                    
                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                           <Star size={14} className="mr-1.5" /> Grátis
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100">
                           <Zap size={14} className="mr-1.5" /> Sem Cadastro
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-100">
                           <ShieldCheck size={14} className="mr-1.5" /> Seguro
                        </span>
                    </div>
                 </div>

                 {/* APP CONTAINER */}
                 <div className="relative z-10">
                    <ReceiptGenerator initialType={type} receiptTitle={content.receiptTitle} />
                 </div>
            </div>
        </div>

        {/* E-E-A-T VALUE PROPOSITION */}
        <section className="py-16 bg-white no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors">
                        <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-500/20">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Segurança Total</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Seus dados são processados apenas no seu navegador. Nenhuma informação financeira é salva em nossos servidores.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                            <FileText size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Válido em Todo Brasil</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Modelos alinhados com o Código Civil Brasileiro, servindo como comprovante legal de pagamento e quitação.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                        <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20">
                            <Smartphone size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile & WhatsApp</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Gere o recibo no celular e envie direto para o WhatsApp do cliente. PDF otimizado para compartilhamento rápido.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* CONTENT & FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200 no-print">
            <div className="max-w-3xl mx-auto px-4">
                <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                    <h2>Informações sobre {content.heroTitle}</h2>
                    {/* Renderização de HTML Seguro para SEO */}
                    <div 
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: content.richText }}
                    />

                    <h3 className="mt-12 flex items-center gap-2 text-2xl font-bold">
                        Perguntas Frequentes
                    </h3>
                    
                    <div className="space-y-4 not-prose mt-6">
                        {content.faqs && content.faqs.map((faq, index) => (
                            <details key={index} className="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:border-brand-300">
                                <summary className="flex justify-between items-center font-semibold text-slate-800 list-none">
                                    {faq.question}
                                    <ChevronDown className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-brand-500" size={20} />
                                </summary>
                                <div className="text-slate-600 mt-4 leading-relaxed border-t border-slate-100 pt-4 text-base">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ECOSYSTEM CTA */}
        <section className="bg-slate-900 py-16 text-center no-print">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ferramentas Gratuitas Relacionadas</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-slate-900 bg-brand-400 hover:bg-brand-500 transition-all transform hover:scale-105">
                        Gerar Declaração
                    </a>
                    <a href="https://geracontrato.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-bold rounded-xl text-white bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-105">
                        Gerar Contrato
                    </a>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
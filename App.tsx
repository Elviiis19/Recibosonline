import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { JsonLd } from './components/JsonLd';
import { PAGE_CONTENT } from './constants';
import type { ReceiptType } from './types';
import { ShieldCheck, Zap, Smartphone, Star, FileText } from 'lucide-react';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    // Initial load
    if (!window.location.hash) {
        window.history.replaceState(null, '', '#');
        setCurrentHash('#');
    }

    const handleHashChange = () => {
        setCurrentHash(window.location.hash);
        // Scroll to top on route change
        window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Parse Route
  const getReceiptTypeAndContentKey = (): { type: ReceiptType, key: string } => {
    const hash = currentHash.replace('#', '').replace('modelo/', '');
    
    if (hash.includes('aluguel-residencial')) return { type: 'aluguel-residencial', key: 'aluguel-residencial' };
    if (hash.includes('veiculos')) return { type: 'veiculos', key: 'veiculos' };
    if (hash.includes('servicos')) return { type: 'servicos', key: 'servicos' };
    // Add mapping for others or fallback to default content with generic type
    if (hash === '' || hash === 'home') return { type: 'generico', key: 'default' };
    
    return { type: 'generico', key: 'default' };
  };

  const { type, key } = getReceiptTypeAndContentKey();
  // Fallback to default content if specific key not found
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
        {/* HERO SECTION - Changes dynamically */}
        <div className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 border-b border-slate-100 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        {content.heroTitle} <span className="text-brand-600 block md:inline">em PDF e WhatsApp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        {content.heroDescription}
                    </p>
                    
                    {/* SEO Breadcrumbish tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                           <Star size={12} className="mr-1" /> Grátis
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                           <Zap size={12} className="mr-1" /> Sem Cadastro
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                           <ShieldCheck size={12} className="mr-1" /> Seguro
                        </span>
                    </div>
                 </div>

                 {/* APP CONTAINER */}
                 <div className="relative z-10">
                    <ReceiptGenerator initialType={type} receiptTitle={content.receiptTitle} />
                 </div>
            </div>
        </div>

        {/* VALUE PROPOSITION (E-E-A-T) */}
        <section className="py-16 bg-white no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-brand-200">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Segurança Total</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Diferente de outros sites, seus dados são processados apenas no seu navegador. Nenhuma informação financeira é salva em nossos servidores.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Válido em Todo Brasil</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Nossos modelos seguem os padrões do Código Civil Brasileiro, servindo como comprovante legal de pagamento e quitação de dívidas.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-200">
                            <Smartphone size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile & WhatsApp</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Feito para quem trabalha na rua. Gere o recibo no celular e envie direto para o WhatsApp do cliente sem precisar baixar nada.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* RICH SEO CONTENT & FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200 no-print">
            <div className="max-w-3xl mx-auto px-4">
                <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                    <h2>Informações Importantes sobre {content.heroTitle}</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-base">
                        {content.richText}
                    </div>

                    <h3 className="mt-12 flex items-center gap-2">
                        <span className="bg-brand-100 text-brand-600 p-1 rounded">FAQ</span>
                        Perguntas Frequentes
                    </h3>
                    
                    <div className="space-y-4 not-prose mt-6">
                        {content.faqs && content.faqs.map((faq, index) => (
                            <details key={index} className="group bg-white p-4 rounded-lg border border-slate-200 shadow-sm open:ring-2 open:ring-brand-100 cursor-pointer">
                                <summary className="flex justify-between items-center font-semibold text-slate-800 list-none">
                                    {faq.question}
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDownIcon />
                                    </span>
                                </summary>
                                <p className="text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ECOSYSTEM CTA */}
        <section className="bg-slate-900 py-12 text-center no-print">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Precisa de mais documentos jurídicos?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-brand-400 hover:bg-brand-500 transition-colors">
                        Gerar Declaração Grátis
                    </a>
                    <a href="https://geracontrato.com.br" target="_blank" rel="noopener" className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-slate-800 transition-colors">
                        Gerar Contrato de Serviço
                    </a>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
)

export default App;
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
        {/* HERO SECTION - Enhanced Visuals */}
        <div className="relative bg-white pt-12 pb-16 overflow-hidden no-print">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-50/80 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="text-center mb-12 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-semibold mb-6 border border-brand-200">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        Atualizado para 2024
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        {content.heroTitle} <span className="text-brand-600">Grátis</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                        {content.heroDescription}
                    </p>
                    
                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 shadow-sm">
                           <Star size={14} className="mr-1.5 text-yellow-500 fill-yellow-500" /> Sem limites
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 shadow-sm">
                           <Zap size={14} className="mr-1.5 text-blue-500" /> Instantâneo
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 shadow-sm">
                           <ShieldCheck size={14} className="mr-1.5 text-brand-500" /> Dados Privados
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
        <section className="py-16 bg-white border-t border-slate-100 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Segurança e LGPD</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Respeitamos sua privacidade. Seus dados são processados localmente no seu dispositivo e nunca são enviados para a nuvem.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                            <FileText size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Válido Juridicamente</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Modelos formatados conforme o Art. 320 do Código Civil Brasileiro, servindo como prova legal de quitação.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                            <Smartphone size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Otimizado para Mobile</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Interface desenhada para funcionar perfeitamente no seu celular. Gere e envie via WhatsApp em poucos toques.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* CONTENT & FAQs */}
        <section className="py-20 bg-slate-50 border-t border-slate-200 no-print">
            <div className="max-w-3xl mx-auto px-4">
                <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-li:marker:text-brand-400">
                    {/* Renderização de HTML Seguro para SEO */}
                    <div 
                        dangerouslySetInnerHTML={{ __html: content.richText }}
                    />

                    <h2 className="mt-16 flex items-center gap-2 text-3xl font-bold border-t border-slate-200 pt-10">
                        Dúvidas Frequentes
                    </h2>
                    
                    <div className="space-y-4 not-prose mt-8">
                        {content.faqs && content.faqs.map((faq, index) => (
                            <details key={index} className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:border-brand-300">
                                <summary className="flex justify-between items-center font-bold text-lg text-slate-800 list-none">
                                    {faq.question}
                                    <ChevronDown className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-brand-500" size={24} />
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
                    <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-slate-900 bg-brand-400 hover:bg-brand-500 transition-all transform hover:scale-105 shadow-lg shadow-brand-500/20">
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
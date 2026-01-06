import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { JsonLd } from './components/JsonLd';
import { PAGE_CONTENT, AVAILABLE_MODELS } from './constants';
import type { ReceiptType } from './types';
import { ShieldCheck, Zap, Smartphone, Star, FileText, ChevronDown, Check, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  // Inicializa com o hash atual ou '#' padrão
  const [currentHash, setCurrentHash] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash || '#';
    }
    return '#';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top on hash change for better SPA feel
      if (window.scrollY > 100) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (!window.location.hash) {
      try {
        setCurrentHash('#');
      } catch (e) {
        console.warn('Navigation state locked.');
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const getReceiptTypeAndContentKey = (): { type: ReceiptType, key: string } => {
    const cleanHash = currentHash.replace('#', '').replace('modelo/', '');
    
    if (cleanHash.includes('aluguel-residencial')) return { type: 'aluguel-residencial', key: 'aluguel-residencial' };
    if (cleanHash.includes('veiculos')) return { type: 'veiculos', key: 'veiculos' };
    if (cleanHash.includes('servicos')) return { type: 'servicos', key: 'servicos' };
    if (cleanHash.includes('vale')) return { type: 'vale', key: 'default' };
    
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
        {/* HERO SECTION - Professional Portal Look */}
        <div className="relative bg-white pt-12 pb-16 overflow-hidden no-print border-b border-slate-100">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-brand-50/40 blur-3xl opacity-60"></div>
                <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-50/40 blur-3xl opacity-60"></div>
                {/* Dot Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="text-center mb-12 max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider mb-8 border border-slate-200 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Plataforma Gratuita
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        {content.heroTitle} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Profissional e Seguro</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                        {content.heroDescription}
                    </p>
                 </div>

                 {/* MODELS CATALOG GRID (The "Home Page" Feature) */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto">
                    {AVAILABLE_MODELS.map((model) => {
                      const Icon = model.icon;
                      // Highlight active model if one is selected, otherwise default highlighting
                      const isActive = currentHash.includes(model.path.replace('#', '')) || (currentHash === '#' && model.id === 'default');
                      
                      return (
                        <a 
                          key={model.id}
                          href={model.path}
                          className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 p-5 md:p-6 text-left hover:shadow-xl hover:-translate-y-1 ${isActive ? 'bg-white border-brand-500 ring-1 ring-brand-500 shadow-lg shadow-brand-100' : 'bg-white border-slate-200 hover:border-brand-200'}`}
                        >
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-md ${model.color}`}>
                              <Icon size={24} strokeWidth={2} />
                           </div>
                           <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-brand-600 transition-colors">
                             {model.label}
                           </h3>
                           <p className="text-xs text-slate-500 leading-relaxed">
                             {model.description}
                           </p>
                           
                           {/* Decoration */}
                           <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                              <ArrowRight size={16} className="text-brand-500" />
                           </div>
                        </a>
                      )
                    })}
                 </div>

                 {/* APP CONTAINER (The Tool) */}
                 <div id="gerador" className="relative z-10 scroll-mt-24">
                    <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                         <div className="h-px w-12 bg-slate-300"></div>
                         <span className="text-sm uppercase font-bold text-slate-400 tracking-widest">Preencha Abaixo</span>
                         <div className="h-px w-12 bg-slate-300"></div>
                    </div>
                    <ReceiptGenerator initialType={type} receiptTitle={content.receiptTitle} />
                 </div>
            </div>
        </div>

        {/* TRUST BAR */}
        <div className="bg-slate-50 border-y border-slate-200 py-8 no-print">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-slate-400 grayscale opacity-70">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm"><ShieldCheck size={24} className="text-brand-500"/></div>
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Dados Seguros</span>
                        <span className="text-xs">Processamento Local (LGPD)</span>
                    </div>
                 </div>
                 <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm"><FileText size={24} className="text-blue-500"/></div>
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Lei do Inquilinato</span>
                        <span className="text-xs">Modelos Jurídicos</span>
                    </div>
                 </div>
                 <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm"><Zap size={24} className="text-yellow-500"/></div>
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Instantâneo</span>
                        <span className="text-xs">Gerou, Enviou</span>
                    </div>
                 </div>
            </div>
        </div>

        {/* SEO CONTENT & FAQs */}
        <section className="py-20 bg-white no-print">
            <div className="max-w-4xl mx-auto px-4">
                <article className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-li:marker:text-brand-400 mx-auto bg-white">
                    {/* Renderização de HTML Seguro para SEO */}
                    <div 
                        dangerouslySetInnerHTML={{ __html: content.richText }}
                    />
                </article>

                <div className="mt-20 border-t border-slate-100 pt-16">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Perguntas Frequentes sobre Recibos</h2>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                        {content.faqs && content.faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
                                <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                                    <span className="bg-brand-100 text-brand-700 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">?</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ECOSYSTEM CTA */}
        <section className="bg-slate-900 py-20 text-center no-print relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Potencialize sua Produtividade</h2>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto">Conheça nossas outras ferramentas gratuitas desenvolvidas por Elvis Dias para facilitar a burocracia do dia a dia.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 border border-brand-500 text-base font-bold rounded-xl text-brand-400 hover:bg-brand-500/10 transition-all">
                        Visitar ReciboGratis.com.br
                    </a>
                    <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-xl text-slate-900 bg-brand-400 hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20">
                        Gerar Declaração
                    </a>
                    <a href="https://geracontrato.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 border border-slate-700 text-base font-bold rounded-xl text-white bg-slate-800 hover:bg-slate-700 transition-all">
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
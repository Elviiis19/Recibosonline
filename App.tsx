import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { JsonLd } from './components/JsonLd';
import { PAGE_CONTENT, AVAILABLE_MODELS } from './constants';
import type { ReceiptType } from './types';
import { ShieldCheck, Zap, Smartphone, Star, FileText, ChevronRight, Check, ArrowRight, MousePointer2, Lock, Layout } from 'lucide-react';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash || '';
    }
    return '';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (window.scrollY > 50) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determine if we are on the Home Landing Page or a Specific Tool Page
  const isHomePage = currentHash === '' || currentHash === '#';

  const getReceiptTypeAndContentKey = (): { type: ReceiptType, key: string } => {
    const cleanHash = currentHash.replace('#', '').replace('modelo/', '');
    
    if (cleanHash === 'recibo-simples') return { type: 'generico', key: 'recibo-simples' };
    if (cleanHash.includes('aluguel-residencial')) return { type: 'aluguel-residencial', key: 'aluguel-residencial' };
    if (cleanHash.includes('veiculos')) return { type: 'veiculos', key: 'veiculos' };
    if (cleanHash.includes('servicos')) return { type: 'servicos', key: 'servicos' };
    if (cleanHash.includes('vale')) return { type: 'vale', key: 'default' };
    
    return { type: 'generico', key: 'default' }; // Fallback
  };

  const { type, key } = getReceiptTypeAndContentKey();
  // If homepage, use 'home' content, otherwise use specific key or default fallback
  const content = isHomePage ? PAGE_CONTENT['home'] : (PAGE_CONTENT[key] || PAGE_CONTENT['default']);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <JsonLd 
        type={content.schemaType} 
        name={content.title} 
        description={content.description}
        url={`https://recibosonline.com.br/${currentHash}`}
      />
      
      <Header />

      <main className="flex-grow">
        
        {/* =================================================================================
            HOME PAGE LAYOUT (LANDING PAGE - SEO FOCUSED)
           ================================================================================= */}
        {isHomePage && (
          <>
            {/* HERO SECTION - Landing Style */}
            <div className="relative bg-white pt-16 pb-24 overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-bold border border-brand-100 mb-8 animate-fade-in-up">
                      <Star size={16} className="fill-brand-500 text-brand-500" />
                      Mais de 1 milhão de recibos gerados
                  </div>

                  <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-5xl mx-auto">
                      {content.heroTitle} <br className="hidden md:block"/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-600 to-brand-400">
                        Online e Gratuito
                      </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                      {content.heroDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                     <a href="#recibo-simples" className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white text-lg font-bold rounded-xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 hover:shadow-brand-300 transform hover:-translate-y-1">
                        Gerar Recibo Agora <ArrowRight className="ml-2" size={20} />
                     </a>
                     <a href="#modelos" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 text-lg font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                        Ver Modelos
                     </a>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-400 grayscale opacity-80">
                     <span className="flex items-center gap-2"><Check size={18} className="text-green-500" /> Sem Login</span>
                     <span className="flex items-center gap-2"><Check size={18} className="text-green-500" /> 100% Seguro</span>
                     <span className="flex items-center gap-2"><Check size={18} className="text-green-500" /> Compatível Mobile</span>
                  </div>
               </div>
            </div>

            {/* MODEL CATALOG GRID - The Core Navigation */}
            <div id="modelos" className="py-20 bg-slate-50 border-t border-slate-200">
               <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Qual recibo você precisa hoje?</h2>
                     <p className="text-slate-500 max-w-2xl mx-auto">Selecione o modelo ideal para sua necessidade. Nossos formulários já vêm configurados com os campos corretos.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {AVAILABLE_MODELS.map((model) => {
                        const Icon = model.icon;
                        return (
                          <a 
                            key={model.id}
                            href={model.path}
                            className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full"
                          >
                             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg ${model.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                <Icon size={28} strokeWidth={2} />
                             </div>
                             <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                               {model.label}
                             </h3>
                             <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                               {model.description}
                             </p>
                             <div className="flex items-center text-brand-600 font-bold text-sm group-hover:underline underline-offset-4">
                                Começar <ChevronRight size={16} className="ml-1" />
                             </div>
                          </a>
                        )
                      })}
                  </div>
               </div>
            </div>

            {/* FEATURES SECTION - SEO & Trust */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Mais rápido que planilha, <br/>
                                <span className="text-brand-600">mais seguro que papel.</span>
                             </h2>
                             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                O RecibosOnline.com.br foi desenvolvido para substituir o antigo bloco de recibos da papelaria. Oferecemos tecnologia de ponta para garantir que seu comprovante seja profissional.
                             </p>
                             
                             <div className="space-y-6">
                                <div className="flex gap-4">
                                   <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600"><MousePointer2 size={24}/></div>
                                   <div>
                                      <h4 className="font-bold text-slate-900 text-lg">Interface Intuitiva</h4>
                                      <p className="text-slate-500">Preencha apenas o necessário. O valor por extenso é automático.</p>
                                   </div>
                                </div>
                                <div className="flex gap-4">
                                   <div className="bg-emerald-50 p-3 rounded-lg h-fit text-emerald-600"><Lock size={24}/></div>
                                   <div>
                                      <h4 className="font-bold text-slate-900 text-lg">Privacidade Total</h4>
                                      <p className="text-slate-500">Seus dados financeiros não saem do seu dispositivo. Zero rastreamento.</p>
                                   </div>
                                </div>
                                <div className="flex gap-4">
                                   <div className="bg-purple-50 p-3 rounded-lg h-fit text-purple-600"><Layout size={24}/></div>
                                   <div>
                                      <h4 className="font-bold text-slate-900 text-lg">Padrão A4 e Digital</h4>
                                      <p className="text-slate-500">Perfeito para imprimir em folha A4 ou enviar imagem via WhatsApp.</p>
                                   </div>
                                </div>
                             </div>
                        </div>
                        
                        {/* SEO Content Block */}
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
                           <article className="prose prose-slate prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
                              <div dangerouslySetInnerHTML={{ __html: content.richText }} />
                           </article>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )}

        {/* =================================================================================
            TOOL PAGE LAYOUT (THE GENERATOR)
           ================================================================================= */}
        {!isHomePage && (
          <div className="bg-slate-50 min-h-screen">
             <div className="bg-slate-900 text-white pt-10 pb-24 md:pb-32 px-4 no-print">
                <div className="max-w-7xl mx-auto">
                   <a href="#" className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm font-medium transition-colors">
                      <ChevronRight className="rotate-180 mr-1" size={16} /> Voltar para Home
                   </a>
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.heroTitle}</h1>
                        <p className="text-slate-400 text-lg max-w-2xl">{content.heroDescription}</p>
                      </div>
                      <div className="hidden md:block">
                         {/* Placeholder for ad or extra CTA */}
                         <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 max-w-xs">
                            <p className="text-xs text-brand-300 font-bold uppercase mb-1">Dica Pro</p>
                            <p className="text-sm">Não precisa de cadastro. É só preencher e baixar.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-4 -mt-16 md:-mt-24 relative z-10 pb-20">
                 <ReceiptGenerator initialType={type} receiptTitle={content.receiptTitle} />
                 
                 {/* Specific Content below tool */}
                 <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 no-print max-w-4xl mx-auto">
                    <article className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 mx-auto">
                        <div dangerouslySetInnerHTML={{ __html: content.richText }} />
                    </article>
                 </div>
             </div>
          </div>
        )}

        {/* =================================================================================
            SHARED FOOTER SECTIONS (FAQ & ECOSYSTEM)
           ================================================================================= */}
        
        {/* FAQs */}
        <section className="py-20 bg-white border-t border-slate-100 no-print">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Dúvidas Frequentes</h2>
                <div className="grid gap-4">
                    {(isHomePage ? content.faqs : PAGE_CONTENT['home'].faqs).map((faq: any, index: number) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h3>
                            <p className="text-slate-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ECOSYSTEM CTA */}
        <section className="bg-slate-900 py-16 text-center no-print">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-white mb-8">Ferramentas Parceiras</h2>
                <div className="flex flex-wrap justify-center gap-4">
                     <a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 text-brand-400 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
                        ReciboGratis.com.br
                    </a>
                    <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
                        Declaração Online
                    </a>
                    <a href="https://geracontrato.com.br" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
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
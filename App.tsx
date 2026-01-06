import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReceiptGenerator } from './components/ReceiptGenerator';
import { JsonLd } from './components/JsonLd';
import { PAGE_CONTENT, AVAILABLE_MODELS } from './constants';
import type { ReceiptType } from './types';
import { Star, ChevronRight, Check, ArrowRight, MousePointer2, Lock, Layout, ShieldCheck, Scale } from 'lucide-react';

const App: React.FC = () => {
  // SOURCE OF TRUTH: React State (Memória). 
  // Isso garante que a UI funcione mesmo se a URL for bloqueada pelo navegador.
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname === '/' ? '' : window.location.pathname;
      return path;
    }
    return '';
  });

  // Função segura de navegação
  const navigateTo = (path: string) => {
    // 1. Atualiza a UI imediatamente
    const normalizedPath = path === '/' ? '' : path;
    setCurrentPath(normalizedPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Tenta atualizar a URL (Visual apenas). Se falhar (Sandbox/SecurityError), o site NÃO quebra.
    try {
      window.history.pushState({}, '', path);
    } catch (e) {
      console.warn('Atualização de URL bloqueada pelo ambiente (sem impacto na usabilidade).', e);
    }
  };

  // Escuta o botão "Voltar" do navegador
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname === '/' ? '' : window.location.pathname;
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Interceptador Global de Links (SPA)
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement).closest('a');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        if (!href) return;
        
        // Ignora links externos ou ações de sistema
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
        
        // Links com Hash (#) continuam funcionando nativamente (scroll)
        if (href.startsWith('#')) {
             return; 
        }

        // Links Internos (começando com /) usam nossa navegação segura
        if (href.startsWith('/')) {
            e.preventDefault();
            navigateTo(href);
        }
    };
    
    // Adiciona listener com capture false para não quebrar outros eventos
    document.body.addEventListener('click', handleLinkClick);
    return () => document.body.removeEventListener('click', handleLinkClick);
  }, []);

  // Normaliza a chave para buscar o conteúdo
  const pathKey = currentPath.startsWith('/') ? currentPath.substring(1) : currentPath;
  
  // Define se é a Home
  const isHomePage = pathKey === '' || pathKey === 'modelos' || pathKey === 'index.html';

  // Define se é uma página de Texto/Institucional
  const isContentPage = ['quem-somos', 'politica-privacidade', 'termos-uso'].includes(pathKey);

  // Lógica de Roteamento (Seleção do Modelo)
  const getReceiptTypeAndContentKey = (): { type: ReceiptType, key: string } => {
    
    if (isContentPage) return { type: 'generico', key: pathKey };

    // Mapeamento direto (slug da URL -> chave do conteúdo)
    if (pathKey === 'recibo-simples') return { type: 'generico', key: 'recibo-simples' };
    
    if (pathKey === 'recibo-de-aluguel') return { type: 'aluguel-residencial', key: 'aluguel-residencial' };
    if (pathKey === 'recibo-comercial') return { type: 'aluguel-comercial', key: 'aluguel-residencial' }; 
    
    if (pathKey === 'recibo-de-veiculo') return { type: 'veiculos', key: 'veiculos' };
    
    if (pathKey === 'recibo-de-servico') return { type: 'servicos', key: 'servicos' };
    if (pathKey === 'recibo-mao-de-obra') return { type: 'mao-de-obra', key: 'servicos' };
    if (pathKey === 'recibo-diarista') return { type: 'diarista', key: 'servicos' };
    
    if (pathKey === 'recibo-de-vale') return { type: 'vale', key: 'default' };
    
    return { type: 'generico', key: 'default' }; // Fallback
  };

  const { type, key } = getReceiptTypeAndContentKey();
  
  // Seleção de Conteúdo com Fallback Seguro
  // Se a chave não existir, mostra a Home ou Default em vez de tela branca
  const content = isHomePage 
    ? PAGE_CONTENT['home'] 
    : (PAGE_CONTENT[key] || PAGE_CONTENT['default'] || PAGE_CONTENT['home']);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <JsonLd 
        type={content.schemaType} 
        name={content.title} 
        description={content.description}
        url={`https://recibosonline.com.br${currentPath || '/'}`}
      />
      
      <Header />

      <main className="flex-grow">
        
        {/* =================================================================================
            HOME PAGE LAYOUT
           ================================================================================= */}
        {isHomePage && (
          <>
            {/* HERO SECTION */}
            <div className="relative bg-white pt-16 pb-24 overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-bold border border-brand-100 mb-8 animate-fade-in-up">
                      <Star size={16} className="fill-brand-500 text-brand-500" />
                      Mais de 1 milhão de recibos gerados
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-5xl mx-auto">
                      Gerador de Recibo Online: <br className="hidden md:block"/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-600 to-brand-400">
                        Grátis, Seguro e Sem Cadastro
                      </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                      {content.heroDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                     <a href="/recibo-simples" className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white text-lg font-bold rounded-xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 hover:shadow-brand-300 transform hover:-translate-y-1">
                        Gerar Recibo Agora <ArrowRight className="ml-2" size={20} />
                     </a>
                     <a href="#modelos" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 text-lg font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                        Ver Todos os Modelos
                     </a>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-slate-600">
                     <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100"><Check size={18} className="text-brand-500" /> Sem Login / Cadastro</span>
                     <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100"><Check size={18} className="text-brand-500" /> PDF Instantâneo</span>
                     <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100"><Check size={18} className="text-brand-500" /> WhatsApp Direto</span>
                  </div>
               </div>
            </div>

            {/* MODEL CATALOG */}
            <div id="modelos" className="py-20 bg-slate-50 border-t border-slate-200">
               <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Qual recibo você precisa hoje?</h2>
                     <p className="text-slate-500 max-w-2xl mx-auto">Escolha o modelo exato para sua necessidade. Formulários jurídicos prontos.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {AVAILABLE_MODELS.map((model) => {
                        const Icon = model.icon;
                        return (
                          <a 
                            key={model.id}
                            href={model.path}
                            className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
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
                             <div className="flex items-center text-brand-600 font-bold text-sm group-hover:underline underline-offset-4 mt-auto">
                                Preencher Modelo <ChevronRight size={16} className="ml-1" />
                             </div>
                          </a>
                        )
                      })}
                  </div>
               </div>
            </div>

            {/* FEATURES */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="sticky top-24">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                Tecnologia Segura
                             </div>
                             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Mais rápido que planilha, <br/>
                                <span className="text-brand-600">mais seguro que papel.</span>
                             </h2>
                             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                O RecibosOnline.com.br substitui o antigo bloco de papelaria com vantagem jurídica. 
                                Nossos documentos são gerados seguindo padrões aceitos comercialmente.
                             </p>
                             
                             <div className="space-y-6">
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                   <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600"><MousePointer2 size={24}/></div>
                                   <div>
                                      <h4 className="font-bold text-slate-900 text-lg">Sem burocracia</h4>
                                      <p className="text-slate-500 text-sm mt-1">Esqueça logins, senhas ou cadastros de cartão. É entrar, preencher e baixar.</p>
                                   </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                   <div className="bg-emerald-100 p-3 rounded-lg h-fit text-emerald-600"><ShieldCheck size={24}/></div>
                                   <div>
                                      <h4 className="font-bold text-slate-900 text-lg">LGPD & Privacidade</h4>
                                      <p className="text-slate-500 text-sm mt-1">Seus dados são processados localmente no seu dispositivo. Nada fica salvo em nossos servidores.</p>
                                   </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                   <div className="bg-purple-100 p-3 rounded-lg h-fit text-purple-600"><Layout size={24}/></div>
                                   <div>
                                      <h4 className="font-bold text-slate-900 text-lg">Padrão A4 Profissional</h4>
                                      <p className="text-slate-500 text-sm mt-1">Documentos formatados perfeitamente para impressoras comuns ou envio digital.</p>
                                   </div>
                                </div>
                             </div>
                        </div>
                        
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
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
            CONTENT PAGE LAYOUT (About Us, Privacy, Terms) - NO GENERATOR
           ================================================================================= */}
        {!isHomePage && isContentPage && (
          <div className="bg-slate-50 min-h-screen">
             {/* Header Simples */}
             <div className="bg-slate-900 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                   <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.heroTitle}</h1>
                   <p className="text-slate-400 text-lg max-w-2xl mx-auto">{content.heroDescription}</p>
                </div>
             </div>

             <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 pb-20">
                 <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
                    <article className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: content.richText }} />
                    </article>
                 </div>
             </div>
          </div>
        )}

        {/* =================================================================================
            TOOL PAGE LAYOUT (THE GENERATOR)
           ================================================================================= */}
        {!isHomePage && !isContentPage && (
          <div className="bg-slate-50 min-h-screen">
             <div className="bg-slate-900 text-white pt-10 pb-24 md:pb-32 px-4 no-print">
                <div className="max-w-7xl mx-auto">
                   <a href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm font-medium transition-colors">
                      <ChevronRight className="rotate-180 mr-1" size={16} /> Voltar para Home
                   </a>
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.heroTitle}</h1>
                        <p className="text-slate-400 text-lg max-w-2xl">{content.heroDescription}</p>
                      </div>
                      <div className="hidden md:block">
                         <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 max-w-xs">
                            <p className="text-xs text-brand-300 font-bold uppercase mb-1 flex items-center gap-1"><Check size={12}/> Seguro e Gratuito</p>
                            <p className="text-sm">Não pedimos seus dados pessoais. O PDF é gerado no seu navegador.</p>
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
            LEGAL TRUST SIGNAL (SHARED)
           ================================================================================= */}
        {!isContentPage && (
          <section className="bg-slate-50 border-t border-slate-200 py-12 no-print">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                      <Scale size={32} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Validade Jurídica Garantida</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                          Os recibos gerados nesta plataforma seguem estritamente as diretrizes do <strong>Código Civil Brasileiro (Arts. 319 a 326)</strong>, garantindo pleno valor legal como prova de quitação. 
                          Além disso, nossa tecnologia <em>Client-Side</em> está 100% em conformidade com a <strong>LGPD</strong>, pois nenhum dado inserido é armazenado em servidores externos.
                      </p>
                    </div>
                </div>
              </div>
          </section>
        )}
        
        {/* FAQs */}
        {!isContentPage && (
          <section className="py-16 bg-white border-t border-slate-100 no-print">
              <div className="max-w-4xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Dúvidas Frequentes</h2>
                  <div className="grid gap-4">
                      {(isHomePage ? content.faqs : (PAGE_CONTENT['home'].faqs || [])).map((faq: any, index: number) => (
                          <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                              <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h3>
                              <p className="text-slate-600">{faq.answer}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
        )}

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
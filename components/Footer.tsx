import React from 'react';
import { ECOSYSTEM_LINKS } from '../constants';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-400">RecibosOnline.com.br</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plataforma gratuita desenvolvida para facilitar a vida de autônomos, empresários e cidadãos brasileiros. Simplicidade e rapidez na emissão de documentos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-400">Ferramentas Úteis</h3>
            <ul className="space-y-2">
              {ECOSYSTEM_LINKS.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white hover:underline decoration-brand-500 underline-offset-4 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-400">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/politica-privacidade" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="/termos-uso" className="hover:text-white">Termos de Uso</a></li>
              <li><a href="/quem-somos" className="hover:text-white">Quem Somos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} RecibosOnline. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Desenvolvido com</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>por <span className="text-brand-400 font-semibold">Elvis Dias</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
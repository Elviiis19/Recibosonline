import React, { useState } from 'react';
import { MENU_STRUCTURE } from '../constants';
import { Menu, X, CheckCircle, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-brand-500 text-white p-1.5 rounded-lg group-hover:bg-brand-600 transition-colors">
                 <CheckCircle size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Recibos<span className="text-brand-600">Online</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Menu with Dropdowns */}
          <nav className="hidden md:flex space-x-2 items-center">
            {MENU_STRUCTURE.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none">
                  {item.label}
                  {item.subItems && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                </button>
                
                {/* Dropdown Panel */}
                {item.subItems && (
                  <div className={`absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left z-50 ${activeDropdown === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    <div className="py-1" role="menu">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                          role="menuitem"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <a href="/quem-somos" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Quem Somos
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {MENU_STRUCTURE.map((item) => (
              <React.Fragment key={item.label}>
                <div className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-gray-50 mt-2">
                  {item.label}
                </div>
                {item.subItems && (
                  <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-3">
                    {item.subItems.map(sub => (
                      <a 
                        key={sub.label} 
                        href={sub.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-3 rounded-md text-sm font-medium text-gray-600 hover:text-brand-600 border-b border-gray-50 last:border-0"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
             <a href="/quem-somos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 mt-4">
              Quem Somos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
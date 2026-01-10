
import React, { useState } from 'react';
import { SectionId, Language } from '../types.ts';
import { NAVIGATION_ITEMS, LANGUAGES } from '../constants.tsx';

interface HeaderProps {
  activeId: SectionId;
  onNavigate: (id: SectionId) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ activeId, onNavigate, language, setLanguage, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleNavigate = (id: SectionId) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold text-xl">三</div>
          <div>
            <h1 className="text-slate-800 font-bold text-lg leading-tight tracking-tight">{t.brandName}</h1>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase">{t.subTitle}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`flex flex-col items-start group transition-all duration-300`}
            >
              <span className={`text-[10px] sm:text-xs tracking-widest uppercase font-medium ${activeId === item.id ? 'text-red-600' : 'text-slate-400 group-hover:text-slate-800'}`}>
                {item.label[language]}
              </span>
              {activeId === item.id && (
                <div className="h-0.5 w-full bg-red-600 mt-1 animate-in slide-in-from-left duration-300" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-100 text-[10px] uppercase tracking-widest text-slate-500 hover:border-red-200 hover:text-red-600 transition-all"
            >
              {LANGUAGES.find(l => l.id === language)?.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            {isLangOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-slate-100 shadow-xl min-w-[120px] animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => { setLanguage(lang.id as Language); setIsLangOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-colors ${language === lang.id ? 'text-red-600 font-bold bg-red-50/50' : 'text-slate-500'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavigate(SectionId.LeadForm)}
            className="hidden sm:block bg-slate-800 text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-red-600 transition-colors"
          >
            {t.capture}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-6">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="flex items-center justify-between group text-start"
              >
                <span className={`text-sm tracking-widest uppercase font-bold ${activeId === item.id ? 'text-red-600' : 'text-slate-500'}`}>
                  {item.label[language]}
                </span>
                {activeId === item.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                )}
              </button>
            ))}
            <button 
              onClick={() => handleNavigate(SectionId.LeadForm)}
              className="w-full bg-red-600 text-white py-4 text-xs font-bold uppercase tracking-[0.2em]"
            >
              {t.sections.lead.title}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

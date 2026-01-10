
import React, { useState, useEffect } from 'react';
import { SectionId, Language } from './types';
import Header from './components/Header';
import BrandSection from './sections/BrandSection';
import IntelligenceSection from './sections/IntelligenceSection';
import SolutionsSection from './sections/SolutionsSection';
import CasesSection from './sections/CasesSection';
import PitchSection from './sections/PitchSection';
import LeadFormSection from './sections/LeadFormSection';
import { translations } from './translations';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Overview);
  const [language, setLanguage] = useState<Language>('zh');

  const t = translations[language];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Handle RTL for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [activeSection, language]);

  const renderSection = () => {
    const props = { language, t: t.sections };
    switch (activeSection) {
      case SectionId.Overview: return <BrandSection {...props} />;
      case SectionId.Intelligence: return <IntelligenceSection {...props} />;
      case SectionId.Solutions: return <SolutionsSection {...props} />;
      case SectionId.Cases: return <CasesSection {...props} />;
      case SectionId.Pitch: return <PitchSection {...props} />;
      case SectionId.LeadForm: return <LeadFormSection {...props} />;
      default: return <BrandSection {...props} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white ${language === 'ar' ? 'font-[Noto_Sans_Arabic,sans-serif]' : ''}`}>
      <Header 
        activeId={activeSection} 
        onNavigate={setActiveSection} 
        language={language} 
        setLanguage={setLanguage}
        t={t}
      />
      
      <main className="flex-grow pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="animate-in fade-in duration-700">
          {renderSection()}
        </div>
      </main>

      <footer className="py-8 border-t border-slate-100 px-6 text-center text-slate-400 text-[10px] tracking-widest uppercase">
        {t.footer}
      </footer>
    </div>
  );
};

export default App;

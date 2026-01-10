
import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import Header from './components/Header';
import BrandSection from './sections/BrandSection';
import IntelligenceSection from './sections/IntelligenceSection';
import SolutionsSection from './sections/SolutionsSection';
import CasesSection from './sections/CasesSection';
import PitchSection from './sections/PitchSection';
import LeadFormSection from './sections/LeadFormSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Overview);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.Overview: return <BrandSection />;
      case SectionId.Intelligence: return <IntelligenceSection />;
      case SectionId.Solutions: return <SolutionsSection />;
      case SectionId.Cases: return <CasesSection />;
      case SectionId.Pitch: return <PitchSection />;
      case SectionId.LeadForm: return <LeadFormSection />;
      default: return <BrandSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeId={activeSection} onNavigate={setActiveSection} />
      
      <main className="flex-grow pt-20 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="animate-in fade-in duration-700">
          {renderSection()}
        </div>
      </main>

      <footer className="py-8 border-t border-slate-100 px-6 text-center text-slate-400 text-xs tracking-widest uppercase">
        © 2025 SANBEN LIGHTING TECHNOLOGY. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;

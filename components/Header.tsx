
import React from 'react';
import { SectionId } from '../types';
import { NAVIGATION_ITEMS } from '../constants';

interface HeaderProps {
  activeId: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ activeId, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold text-xl">三</div>
          <div>
            <h1 className="text-slate-800 font-bold text-lg leading-tight tracking-tight">SANBEN</h1>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase">Lighting Technology</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-start group transition-all duration-300`}
            >
              <span className={`text-xs tracking-widest uppercase font-medium ${activeId === item.id ? 'text-red-600' : 'text-slate-400 group-hover:text-slate-800'}`}>
                {item.enLabel}
              </span>
              <span className={`text-[10px] ${activeId === item.id ? 'text-red-400' : 'text-slate-300 group-hover:text-slate-500'}`}>
                {item.label}
              </span>
              {activeId === item.id && (
                <div className="h-0.5 w-full bg-red-600 mt-1 animate-in slide-in-from-left duration-300" />
              )}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate(SectionId.LeadForm)}
          className="bg-slate-800 text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-red-600 transition-colors"
        >
          Capture
        </button>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { CLIENT_LOGOS } from '../constants.tsx';

const CasesSection: React.FC<{ t: any }> = ({ t }) => {
  const cases = t.cases;
  const projects = [
    { title: "BIRD'S NEST", location: 'CHINA NATIONAL STADIUM', img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&q=80&w=800' },
    { title: 'ALDI-CHINA', location: 'MODERN RETAIL EXPERIENCE', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800' },
    { title: 'FRESHIPPO-CHINA', location: 'NEW RETAIL HUBS', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800' },
    { title: 'RT-MART-CHINA', location: 'HYPERMARKET SOLUTIONS', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">{cases.title} <span className="text-slate-300">/ {cases.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, idx) => (
          <div key={idx} className="group relative overflow-hidden aspect-video rounded-sm shadow-md bg-slate-100">
            <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-start">
              <h4 className="text-white text-xl font-medium tracking-tight uppercase">{p.title}</h4>
              <p className="text-slate-300 text-xs font-light uppercase tracking-widest mt-1">{p.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-12 text-center font-bold">{cases.serving.toUpperCase()}</p>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale transition-all duration-500 hover:opacity-60 hover:grayscale-0">
          {CLIENT_LOGOS.map((logo, idx) => (
            <span key={idx} className="text-2xl font-black tracking-tighter text-slate-800 italic uppercase">{logo.toUpperCase()}</span>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16 text-start">
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">{cases.commercial.toUpperCase()}</h4>
           <p className="text-xs text-slate-500 font-light leading-relaxed uppercase">{cases.commDesc.toUpperCase()}</p>
        </div>
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">{cases.education.toUpperCase()}</h4>
           <p className="text-xs text-slate-500 font-light leading-relaxed uppercase">{cases.eduDesc.toUpperCase()}</p>
        </div>
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">{cases.outdoor.toUpperCase()}</h4>
           <p className="text-xs text-slate-500 font-light leading-relaxed uppercase">{cases.outDesc.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesSection;

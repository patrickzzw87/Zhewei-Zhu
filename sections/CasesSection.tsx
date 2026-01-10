
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const CasesSection: React.FC<{ t: any }> = ({ t }) => {
  const cases = t.cases;
  const projects = [
    { title: 'RT-Mart', location: 'Shanghai', img: 'https://picsum.photos/seed/case1/600/400' },
    { title: 'ALDI', location: 'International', img: 'https://picsum.photos/seed/case2/600/400' },
    { title: 'Yonghui', location: 'National', img: 'https://picsum.photos/seed/case3/600/400' },
    { title: 'Hema Fresh', location: 'China', img: 'https://picsum.photos/seed/case4/600/400' },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">{cases.title} <span className="text-slate-300">/ {cases.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="group relative overflow-hidden aspect-video">
            <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h4 className="text-white text-xl font-medium">{p.title}</h4>
              <p className="text-slate-300 text-sm">{p.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-12 text-center">{cases.serving}</p>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-40 grayscale">
          {CLIENT_LOGOS.map((logo, idx) => (
            <span key={idx} className="text-2xl font-bold tracking-tighter text-slate-800 italic">{logo}</span>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">{cases.commercial}</h4>
           <p className="text-xs text-slate-500 font-light">{cases.commDesc}</p>
        </div>
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">{cases.education}</h4>
           <p className="text-xs text-slate-500 font-light">{cases.eduDesc}</p>
        </div>
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">{cases.outdoor}</h4>
           <p className="text-xs text-slate-500 font-light">{cases.outDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesSection;


import React from 'react';

const SolutionsSection: React.FC<{ t: any }> = ({ t }) => {
  const sol = t.solutions;
  const patterns = [
    { title: sol.m1, desc: sol.m1d, img: 'https://picsum.photos/seed/s1/400/300' },
    { title: sol.m2, desc: sol.m2d, img: 'https://picsum.photos/seed/s2/400/300' },
    { title: sol.m3, desc: sol.m3d, img: 'https://picsum.photos/seed/s3/400/300' },
    { title: sol.m4, desc: sol.m4d, img: 'https://picsum.photos/seed/s4/400/300' },
    { title: sol.m5, desc: sol.m5d, img: 'https://picsum.photos/seed/s5/400/300' },
    { title: sol.m6, desc: sol.m6d, img: 'https://picsum.photos/seed/s6/400/300' },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">{sol.title} <span className="text-slate-300">/ {sol.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {patterns.map((p, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 text-[10px] tracking-widest px-2 py-1 uppercase text-slate-800 font-bold">Mode {idx + 1}</div>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-medium text-slate-800">{p.title}</h4>
              <p className="text-sm text-slate-500 font-light">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-slate-50 rounded-sm grid md:grid-cols-2 gap-12 items-center border border-slate-100">
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-slate-800">{sol.designTitle}</h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed">{sol.designDesc}</p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-slate-800 font-bold">1200+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{sol.delivered}</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-slate-800 font-bold">200+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{sol.experts}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="h-40 bg-white shadow-sm flex items-center justify-center p-4"><p className="text-[10px] text-slate-300 uppercase tracking-tighter">CAD Planning</p></div>
           <div className="h-40 bg-white shadow-sm flex items-center justify-center p-4"><p className="text-[10px] text-slate-300 uppercase tracking-tighter">Dialux Sim</p></div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;

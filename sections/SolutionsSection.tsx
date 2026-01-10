import React from 'react';

const SolutionsSection: React.FC<{ t: any }> = ({ t }) => {
  const sol = t.solutions;
  const patterns = [
    { title: sol.m1, desc: sol.m1d, img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' }, 
    { title: sol.m2, desc: sol.m2d, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' }, 
    { title: sol.m3, desc: sol.m3d, img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' }, 
    { title: sol.m4, desc: sol.m4d, img: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=1200' }, // 高级感十足的博物馆洗墙光效
    { title: sol.m5, desc: sol.m5d, img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800' }, 
    { title: sol.m6, desc: sol.m6d, img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800' }, 
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">{sol.title} <span className="text-slate-300">/ {sol.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {patterns.map((p, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative overflow-hidden aspect-[4/3] rounded-sm shadow-sm bg-slate-50 border border-slate-100">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-all duration-700 brightness-95 group-hover:brightness-105 group-hover:scale-105" />
              <div className="absolute top-4 left-4 bg-white/90 text-[10px] tracking-widest px-2 py-1 uppercase text-slate-800 font-bold shadow-sm">MODE {idx + 1}</div>
            </div>
            <div className="mt-6 space-y-2 text-start">
              <h4 className="text-lg font-medium text-slate-800 transition-colors group-hover:text-red-600 uppercase tracking-wide">{p.title.toUpperCase()}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed uppercase">{p.desc.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-slate-50 rounded-sm grid md:grid-cols-2 gap-12 items-center border border-slate-100">
        <div className="space-y-6 text-start">
          <h3 className="text-2xl font-light text-slate-800 uppercase tracking-widest">{sol.designTitle.toUpperCase()}</h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed uppercase">{sol.designDesc.toUpperCase()}</p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-slate-800 font-bold text-xl uppercase">1200+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter mt-1 font-bold">{sol.delivered.toUpperCase()}</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-slate-800 font-bold text-xl uppercase">200+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter mt-1 font-bold">{sol.experts.toUpperCase()}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="h-40 bg-white shadow-sm flex flex-col items-center justify-center p-4 group transition-colors hover:border-red-100 border border-transparent">
             <div className="w-8 h-8 text-slate-200 mb-2 group-hover:text-red-200 transition-colors">
               <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/></svg>
             </div>
             <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">CAD PLANNING</p>
           </div>
           <div className="h-40 bg-white shadow-sm flex flex-col items-center justify-center p-4 group transition-colors hover:border-red-100 border border-transparent">
             <div className="w-8 h-8 text-slate-200 mb-2 group-hover:text-red-200 transition-colors">
               <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z"/></svg>
             </div>
             <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">DIALUX SIM</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
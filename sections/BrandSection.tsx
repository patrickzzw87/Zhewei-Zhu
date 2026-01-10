
import React from 'react';

const BrandSection: React.FC<{ t: any }> = ({ t }) => {
  const brand = t.brand;
  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">
          {brand.title} <span className="text-slate-300">/ {brand.subtitle}</span>
        </h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-10 text-slate-600 leading-relaxed font-light text-start">
          <div className="space-y-4">
            <p className="text-2xl text-slate-800 font-medium uppercase tracking-tight">{brand.p1.toUpperCase()}</p>
            <p className="text-sm leading-relaxed uppercase">{brand.p2.toUpperCase()}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[brand.feat1, brand.feat2, brand.feat3].map((f, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-sm border border-slate-100 hover:border-red-200 transition-colors group">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-xs uppercase font-bold text-slate-800 tracking-widest">{f.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{brand.network.toUpperCase()}</p>
              <div className="h-0.5 w-8 bg-slate-200" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{brand.lab.toUpperCase()}</p>
              <div className="h-0.5 w-8 bg-slate-200" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative group">
            <div className="overflow-hidden rounded-sm shadow-2xl border border-slate-100 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&q=80&w=1200" 
                alt="BIRD'S NEST NATIONAL STADIUM" 
                className="w-full aspect-[16/9] object-cover transition-all duration-1000 group-hover:scale-105 opacity-90"
              />
            </div>
            <div className="mt-4 text-[10px] text-slate-400 uppercase tracking-[0.2em] text-center font-medium">
              OFFICIAL SMART LIGHTING SUPPLIER FOR CHINA NATIONAL STADIUM
            </div>
          </div>
          
          {/* 调整后的基地分布布局 */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-900 p-6 rounded-sm text-center border border-slate-800 shadow-lg">
                  <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-1">{brand.bases.sh.toUpperCase()}</p>
                  <p className="text-red-500 text-[9px] font-black uppercase tracking-widest">Global HQ & R&D Center</p>
               </div>
               <div className="bg-white p-6 rounded-sm text-center border-2 border-red-600/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-[7px] px-2 py-0.5 font-bold uppercase tracking-tighter">Smart Tech</div>
                  <p className="text-slate-900 text-sm font-bold uppercase tracking-[0.2em] mb-1">{brand.bases.js.toUpperCase()}</p>
                  <p className="text-slate-500 text-[9px] font-medium uppercase tracking-widest">Smart Production Line</p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-5 rounded-sm text-center border border-slate-100 hover:bg-white transition-colors">
                  <p className="text-slate-800 text-xs font-bold uppercase tracking-widest mb-1">{brand.bases.gd.toUpperCase()}</p>
                  <p className="text-slate-400 text-[8px] uppercase font-medium">Manufacturing Hub</p>
               </div>
               <div className="bg-slate-50 p-5 rounded-sm text-center border border-slate-100 hover:bg-white transition-colors">
                  <p className="text-slate-800 text-xs font-bold uppercase tracking-widest mb-1">{brand.bases.fj.toUpperCase()}</p>
                  <p className="text-slate-400 text-[8px] uppercase font-medium">Manufacturing Hub</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-50">
        <div className="text-center p-8 bg-slate-50 rounded-sm hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
          <p className="text-3xl font-bold text-red-600 transition-transform group-hover:scale-110">13</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 font-bold">{brand.stat1.toUpperCase()}</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
          <p className="text-3xl font-bold text-red-600 transition-transform group-hover:scale-110">49</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 font-bold">{brand.stat2.toUpperCase()}</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
          <p className="text-3xl font-bold text-red-600 transition-transform group-hover:scale-110">16</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 font-bold">{brand.stat3.toUpperCase()}</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
          <p className="text-3xl font-bold text-red-600 transition-transform group-hover:scale-110">04</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 font-bold">{brand.stat4.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;

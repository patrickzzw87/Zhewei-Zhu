
import React from 'react';

const IntelligenceSection: React.FC<{ t: any }> = ({ t }) => {
  const intel = t.intelligence;
  return (
    <div className="space-y-20 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">{intel.title} <span className="text-slate-300">/ {intel.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      {/* Cloud & Spectrum Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group overflow-hidden rounded-sm shadow-xl bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" 
            alt="INTELLIGENT LIGHTING CONTROL" 
            className="w-full transition-transform duration-1000 group-hover:scale-110 object-cover aspect-video opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8 text-start">
            <h3 className="text-white text-2xl font-light uppercase tracking-wider">{intel.v2.toUpperCase()}</h3>
            <p className="text-slate-300 text-sm mt-2 uppercase">{intel.v2desc.toUpperCase()}</p>
          </div>
        </div>
        <div className="space-y-10 text-start">
          <div className="space-y-4">
            <h4 className="text-xl font-medium text-slate-800 uppercase tracking-wide">{intel.hueTitle.toUpperCase()}</h4>
            <p className="text-slate-600 font-light leading-relaxed uppercase">{intel.hueDesc.toUpperCase()}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-red-600 font-bold text-2xl uppercase">1.2X10¹⁸</p>
              <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">{intel.colors.toUpperCase()}</p>
            </div>
            <div className="space-y-2">
              <p className="text-red-600 font-bold text-2xl uppercase">30%+</p>
              <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">{intel.saving.toUpperCase()}</p>
            </div>
          </div>
          <div className="p-6 border border-slate-100 bg-slate-50 space-y-4 rounded-sm shadow-sm">
            <p className="text-sm font-medium text-slate-800 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {intel.cloudTitle.toUpperCase()}
            </p>
            <ul className="grid grid-cols-2 gap-y-3 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <li>• {intel.cloudFeat1.toUpperCase()}</li>
              <li>• {intel.cloudFeat2.toUpperCase()}</li>
              <li>• {intel.cloudFeat3.toUpperCase()}</li>
              <li>• {intel.cloudFeat4.toUpperCase()}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Award-Winning Ultra-Wide Spotlights Section */}
      <section className="bg-red-600 text-white p-8 md:p-16 rounded-sm overflow-hidden relative shadow-2xl">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-1/4 pointer-events-none" />
         
         <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-10 text-start">
              <div className="space-y-4">
                <p className="text-[10px] font-black tracking-[0.4em] text-red-200 uppercase">Featured Innovation</p>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none italic">{intel.productTitle.toUpperCase()}</h3>
                <p className="text-red-50 text-base font-light leading-relaxed uppercase max-w-xl">{intel.productDesc.toUpperCase()}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {intel.awards.map((award: string, i: number) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm flex items-center gap-3 hover:bg-white/20 transition-all group">
                    <div className="w-1.5 h-full bg-white group-hover:bg-yellow-400 transition-colors" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">{award}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 relative group">
              <div className="relative bg-white/5 p-4 rounded-sm border border-white/10 shadow-inner overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800" 
                  alt="ULTRA WIDE BEAM PERFORMANCE" 
                  className="w-full h-auto rounded-sm shadow-2xl transition-all duration-1000 group-hover:scale-110 brightness-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-white/20 pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-white/20 pointer-events-none" />
            </div>
         </div>
         
         <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-12 justify-center lg:justify-start">
            <div className="text-center">
              <p className="text-2xl font-black text-white italic">CRI 95+</p>
              <p className="text-[9px] text-red-200 uppercase tracking-widest font-bold">Museum-Grade Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-white italic">ULTRA-WIDE</p>
              <p className="text-[9px] text-red-200 uppercase tracking-widest font-bold">Beam Performance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-white italic">IoT READY</p>
              <p className="text-[9px] text-red-200 uppercase tracking-widest font-bold">Smart Cloud Control</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default IntelligenceSection;


import React from 'react';

const IntelligenceSection: React.FC<{ t: any }> = ({ t }) => {
  const intel = t.intelligence;
  return (
    <div className="space-y-24 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">
          {intel.title} <span className="text-slate-300">/ {intel.subtitle}</span>
        </h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      {/* Award-Winning Ultra-Wide Spotlights Showcase (Red Theme) */}
      <section className="bg-red-600 text-white rounded-sm overflow-hidden shadow-2xl relative">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-12 translate-x-1/4 pointer-events-none" />
         
         <div className="p-8 md:p-16 space-y-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-start">
                <div className="space-y-2">
                  <p className="text-[10px] font-black tracking-[0.4em] text-red-200 uppercase">Product Core Innovation</p>
                  <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                    ULTRA-WIDE ANGLE SPOTLIGHTS
                  </h3>
                  <p className="text-red-100 text-lg font-light tracking-wide italic mt-2">
                    RECEIVED MULTIPLE INTERNATIONAL AWARDS
                  </p>
                </div>
                
                <p className="text-red-50 text-sm leading-relaxed uppercase max-w-lg font-medium opacity-90">
                  {intel.productDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {intel.awards.map((award: string, i: number) => (
                    <div key={i} className="bg-white/15 backdrop-blur-md border border-white/20 p-4 rounded-sm flex items-center gap-3 hover:bg-white/25 transition-all">
                      <div className="w-1 h-8 bg-yellow-400" />
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest leading-tight">
                        {award}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-square bg-white/5 border border-white/10 rounded-sm p-4 backdrop-blur-sm overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1000" 
                    alt="SANBEN Spotlight" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 text-center">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white">2024 Design Excellence Spotlight</p>
                  </div>
                </div>
                {/* Visual accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-white/20" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-white/20" />
              </div>
            </div>
         </div>

         {/* Technical KSPs Footer inside Red Section */}
         <div className="bg-black/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/10">
            <div>
              <p className="text-2xl font-black italic">CRI 95+</p>
              <p className="text-[9px] text-red-200 font-bold uppercase tracking-widest mt-1">Full Spectrum</p>
            </div>
            <div>
              <p className="text-2xl font-black italic">ULTRA BEAM</p>
              <p className="text-[9px] text-red-200 font-bold uppercase tracking-widest mt-1">Wide Angle Optics</p>
            </div>
            <div>
              <p className="text-2xl font-black italic">Bluetooth</p>
              <p className="text-[9px] text-red-200 font-bold uppercase tracking-widest mt-1">Mesh V2.0 Ready</p>
            </div>
            <div>
              <p className="text-2xl font-black italic">30%+</p>
              <p className="text-[9px] text-red-200 font-bold uppercase tracking-widest mt-1">Energy Saving</p>
            </div>
         </div>
      </section>

      {/* SANBEN V2.0 Smart Platform Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-center border-t border-slate-100 pt-16">
        <div className="space-y-8 text-start order-2 lg:order-1">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight italic">
              SANBEN V2.0 SMART PLATFORM
            </h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed uppercase">
              {intel.v2desc}
            </p>
          </div>
          
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold text-xs">V2</div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-800">Platform Features</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[intel.cloudFeat1, intel.cloudFeat2, intel.cloudFeat3, intel.cloudFeat4].map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
           <div className="bg-white p-8 border border-slate-200 rounded-sm shadow-xl flex items-center justify-center min-h-[400px]">
              {/* Symbolic IoT Diagram */}
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                 <div className="w-24 h-24 bg-red-600 rounded-sm shadow-2xl flex items-center justify-center text-white font-black z-20">CLOUD</div>
                 {/* Decorative rings representing connectivity */}
                 <div className="absolute w-48 h-48 border border-slate-100 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute w-64 h-64 border border-slate-50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                 
                 {/* Edge device nodes */}
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 p-3 text-white rounded-sm text-[8px] font-bold uppercase tracking-widest z-30 shadow-lg">Gateway</div>
                 <div className="absolute bottom-10 right-0 bg-slate-800 p-3 text-white rounded-sm text-[8px] font-bold uppercase tracking-widest z-30 shadow-lg italic">SR-Linker</div>
                 <div className="absolute bottom-10 left-0 bg-slate-800 p-3 text-white rounded-sm text-[8px] font-bold uppercase tracking-widest z-30 shadow-lg italic">OmniHue™</div>
              </div>
           </div>
           <p className="mt-4 text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] text-center">Bluetooth Mesh Communication Protocol specifically developed for lighting</p>
        </div>
      </section>
    </div>
  );
};

export default IntelligenceSection;

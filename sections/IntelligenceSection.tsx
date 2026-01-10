
import React from 'react';

const IntelligenceSection: React.FC<{ t: any }> = ({ t }) => {
  const intel = t.intelligence;
  return (
    <div className="space-y-20 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">{intel.title} <span className="text-slate-300">/ {intel.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

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

      <section className="bg-slate-900 text-white p-12 rounded-sm overflow-hidden relative border border-slate-800">
         <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-start">
              <h3 className="text-3xl font-light uppercase tracking-[0.1em]">{intel.productTitle.toUpperCase()}</h3>
              <p className="text-slate-400 font-light leading-relaxed uppercase">{intel.productDesc.toUpperCase()}</p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-4 py-2 border border-slate-700 text-[10px] tracking-widest uppercase bg-slate-800/50 font-bold">FRENCH DESIGN AWARD</div>
                 <div className="px-4 py-2 border border-slate-700 text-[10px] tracking-widest uppercase bg-slate-800/50 font-bold">IDSA FINALIST</div>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="ULTRA WIDE BEAM PERFORMANCE" 
                className="w-full max-sm mx-auto rounded-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(220,38,38,0.3)] brightness-110" 
              />
            </div>
         </div>
      </section>
    </div>
  );
};

export default IntelligenceSection;

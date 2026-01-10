
import React from 'react';

const StrategySection: React.FC<{ t: any }> = ({ t }) => {
  const strategy = t.strategy;
  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4 text-start">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight uppercase">
          {strategy.title} <span className="text-slate-300">/ {strategy.subtitle}</span>
        </h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="space-y-12">
        {/* Strategic Header Image */}
        <div className="relative overflow-hidden rounded-sm shadow-xl group">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
            alt="Corporate Strategy Vision" 
            className="w-full aspect-[21/9] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
        </div>

        {/* Strategic Positioning */}
        <div className="p-10 bg-slate-50 border border-slate-100 rounded-sm space-y-6 text-start">
          <h4 className="text-[10px] text-red-600 font-bold tracking-[0.3em] uppercase">{strategy.strategyTitle}</h4>
          <h3 className="text-2xl md:text-3xl font-light text-slate-800 leading-tight uppercase">
            {strategy.strategyVision.toUpperCase()}
          </h3>
          <p className="text-sm text-slate-500 font-light leading-relaxed max-w-3xl uppercase">
            {strategy.strategyDesc.toUpperCase()}
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="space-y-8 pt-8">
          <h4 className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase border-b border-slate-100 pb-2 text-start">
            {strategy.valueTitle}
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-white border border-slate-100 shadow-sm hover:border-red-600 transition-all duration-500 text-start">
               <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">01</div>
               <h5 className="text-lg font-bold text-slate-800 uppercase mb-3">{strategy.v1.toUpperCase()}</h5>
               <p className="text-xs text-slate-500 leading-relaxed uppercase">{strategy.v1d.toUpperCase()}</p>
            </div>
            <div className="group p-8 bg-white border border-slate-100 shadow-sm hover:border-red-600 transition-all duration-500 text-start">
               <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">02</div>
               <h5 className="text-lg font-bold text-slate-800 uppercase mb-3">{strategy.v2.toUpperCase()}</h5>
               <p className="text-xs text-slate-500 leading-relaxed uppercase">{strategy.v2d.toUpperCase()}</p>
            </div>
            <div className="group p-8 bg-white border border-slate-100 shadow-sm hover:border-red-600 transition-all duration-500 text-start">
               <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">03</div>
               <h5 className="text-lg font-bold text-slate-800 uppercase mb-3">{strategy.v3.toUpperCase()}</h5>
               <p className="text-xs text-slate-500 leading-relaxed uppercase">{strategy.v3d.toUpperCase()}</p>
            </div>
            <div className="group p-8 bg-white border border-slate-100 shadow-sm hover:border-red-600 transition-all duration-500 text-start">
               <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">04</div>
               <h5 className="text-lg font-bold text-slate-800 uppercase mb-3">{strategy.v4.toUpperCase()}</h5>
               <p className="text-xs text-slate-500 leading-relaxed uppercase">{strategy.v4d.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;

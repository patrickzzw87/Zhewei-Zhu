
import React from 'react';

const BrandSection: React.FC<{ t: any }> = ({ t }) => {
  const brand = t.brand;
  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">
          {brand.title} <span className="text-slate-300">/ {brand.subtitle}</span>
        </h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-600 leading-relaxed font-light">
          <p className="text-xl text-slate-800 font-medium">{brand.p1}</p>
          <p>{brand.p2}</p>
          <ul className="space-y-3 mt-8">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600 flex-shrink-0" />
              <span>{brand.feat1}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600 flex-shrink-0" />
              <span>{brand.feat2}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600 flex-shrink-0" />
              <span>{brand.feat3}</span>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <img 
            src="https://picsum.photos/seed/birdnest/800/600" 
            alt="National Stadium Birds Nest" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 -z-10 group-hover:bg-red-50 transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">13</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">{brand.stat1}</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">49</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">{brand.stat2}</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">1000+</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">{brand.stat3}</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">1200㎡</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">{brand.stat4}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;

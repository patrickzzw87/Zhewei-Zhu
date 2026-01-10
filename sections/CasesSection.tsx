
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const CasesSection: React.FC = () => {
  const projects = [
    { title: 'RT-Mart 会员店', location: 'Shanghai', img: 'https://picsum.photos/seed/case1/600/400' },
    { title: 'ALDI 奥乐齐', location: 'International', img: 'https://picsum.photos/seed/case2/600/400' },
    { title: 'Yonghui 永辉超市', location: 'National', img: 'https://picsum.photos/seed/case3/600/400' },
    { title: 'Hema 盒马鲜生', location: 'Tier 1 Cities', img: 'https://picsum.photos/seed/case4/600/400' },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">企业案例 <span className="text-slate-300">/ Global Success</span></h2>
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
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-12 text-center">Serving Over 1,000 Domestic & International Chain Enterprises</p>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-40 grayscale">
          {CLIENT_LOGOS.map((logo, idx) => (
            <span key={idx} className="text-2xl font-bold tracking-tighter text-slate-800 italic">{logo}</span>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">Commercial</h4>
           <p className="text-xs text-slate-500 font-light">大润发、沃尔玛、山姆会员店等顶尖零售商长期合作伙伴。</p>
        </div>
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">Education</h4>
           <p className="text-xs text-slate-500 font-light">专业护眼教室照明、大学礼堂等教育空间照明方案。</p>
        </div>
        <div className="space-y-4">
           <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800">Outdoor</h4>
           <p className="text-xs text-slate-500 font-light">临港科技城、九江大中路等大型景观亮化工程。</p>
        </div>
      </div>
    </div>
  );
};

export default CasesSection;

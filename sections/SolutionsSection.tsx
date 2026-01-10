
import React from 'react';

const SolutionsSection: React.FC = () => {
  const patterns = [
    { title: '模式一：重点聚焦', desc: '强调商品对比度，营造高端商超氛围。', en: 'Contrast Focused', img: 'https://picsum.photos/seed/s1/400/300' },
    { title: '模式二：线性结合', desc: '线性光结合重点照明，提升空间通透感。', en: 'Linear Hybrid', img: 'https://picsum.photos/seed/s2/400/300' },
    { title: '模式三：极简纯净', desc: '降低光源数量，空间更加整洁有序。', en: 'Minimalist Order', img: 'https://picsum.photos/seed/s3/400/300' },
    { title: '模式四：见光不见灯', desc: '增强立面照明，光影无痕。', en: 'Hidden Source', img: 'https://picsum.photos/seed/s4/400/300' },
    { title: '模式五：均匀照度', desc: '全场照度均衡，适合仓储式会员店。', en: 'Uniform Luminance', img: 'https://picsum.photos/seed/s5/400/300' },
    { title: '模式六：色温统一', desc: '色温全场统一，极致的色彩一致性。', en: 'Unified Temp', img: 'https://picsum.photos/seed/s6/400/300' },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">商场方案 <span className="text-slate-300">/ Retail Lighting Models</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {patterns.map((p, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 text-[10px] tracking-widest px-2 py-1 uppercase text-slate-800 font-bold">Model {idx + 1}</div>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-medium text-slate-800">{p.title}</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">{p.en}</p>
              <p className="text-sm text-slate-500 font-light">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-slate-50 rounded-sm grid md:grid-cols-2 gap-12 items-center border border-slate-100">
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-slate-800">设计咨询与灯光规划</h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            我们不仅提供灯具，更为每一个项目提供定制化的灯光规划方案。从实地调研、理念设计到灯光调试，全流程专业服务确保落地效果。
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-slate-800 font-bold">1200+</p>
              <p className="text-[10px] text-slate-400">Successfully Delivered</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-slate-800 font-bold">200+</p>
              <p className="text-[10px] text-slate-400">Design Experts</p>
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

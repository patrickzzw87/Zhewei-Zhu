
import React, { useState } from 'react';

const PitchSection: React.FC = () => {
  const [lang, setLang] = useState<'CN' | 'EN'>('EN');

  const scripts = {
    CN: [
      { q: "品牌开场", a: "您好！我们是上海三本照明，拥有20年商超照明经验。我们不仅是灯具制造商，还是国家体育场'鸟巢'的官方供应商，服务过沃尔玛、阿尔迪等全球顶级连锁商超。" },
      { q: "智慧控系统", a: "我们最新的云控系统采用全无线Mesh架构，无需重新布线即可实现30%以上的节能。它能根据人流感应和营业时间自动调节，实现真正的低碳高效。" },
      { q: "产品差异化", a: "您可以看这款获奖无数的超广角射灯，它采用了OmniHue™全光谱技术，CRI达到95以上，能极致还原商品本色，提升零售空间的转化率。" },
      { q: "全球合作", a: "我们在全球范围内寻找合作伙伴。目前我们已服务超过1000家连锁品牌，从零售到办公、景观亮化，都有成熟的交付案例。" }
    ],
    EN: [
      { q: "Brand Intro", a: "Hello! We are SANBEN Lighting from Shanghai with 20 years of expertise. As the official supplier for China's National Stadium 'Bird's Nest', we provide premium lighting solutions for giants like Walmart and ALDI." },
      { q: "Smart System", a: "Our V2.0 Cloud Control system uses wireless Mesh tech to save 30%+ on labor and energy costs. It’s fully automated based on occupancy sensors and store schedules." },
      { q: "Core Tech", a: "Our award-winning Ultra-Wide Angle spotlights feature OmniHue™ full-spectrum tech. With CRI Ra>95, it perfectly restores product textures to maximize your retail ROI." },
      { q: "Partnership", a: "We're expanding globally. Having served 1,000+ brands, we offer end-to-end support from planning to installation for supermarkets, offices, and urban landscapes." }
    ]
  };

  return (
    <div className="space-y-16 py-8">
      <header className="flex justify-between items-end">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">展会话术 <span className="text-slate-300">/ Pitch Scripts</span></h2>
          <div className="h-px w-24 bg-red-600" />
        </div>
        <div className="flex border border-slate-200">
           <button onClick={() => setLang('EN')} className={`px-4 py-1 text-xs uppercase tracking-widest ${lang === 'EN' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}>EN</button>
           <button onClick={() => setLang('CN')} className={`px-4 py-1 text-xs uppercase tracking-widest ${lang === 'CN' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}>CN</button>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {scripts[lang].map((item, idx) => (
          <div key={idx} className="p-8 bg-slate-50 border-l-2 border-red-600 space-y-4 hover:shadow-lg transition-all duration-300">
             <h5 className="text-[10px] uppercase tracking-widest text-red-600 font-bold">{item.q}</h5>
             <p className="text-sm text-slate-700 leading-relaxed italic">"{item.a}"</p>
          </div>
        ))}
      </div>

      <div className="bg-red-600 text-white p-12 space-y-8">
         <h3 className="text-2xl font-light uppercase tracking-widest">Key Selling Points (KSPs)</h3>
         <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-3">
               <p className="text-3xl font-bold opacity-30">01</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">20 Years Pedigree</h5>
               <p className="text-xs text-red-100 font-light">Official National Stadium supplier. Trusted by 1000+ top-tier brands.</p>
            </div>
            <div className="space-y-3">
               <p className="text-3xl font-bold opacity-30">02</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">IoT Ready</h5>
               <p className="text-xs text-red-100 font-light">30% Energy savings. Wireless Mesh. No re-wiring required.</p>
            </div>
            <div className="space-y-3">
               <p className="text-3xl font-bold opacity-30">03</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">OmniHue™ Tech</h5>
               <p className="text-xs text-red-100 font-light">Museum-grade color accuracy (CRI 95+). Emotional lighting control.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PitchSection;

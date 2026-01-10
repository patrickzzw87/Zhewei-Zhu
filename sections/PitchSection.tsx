
import React from 'react';

const PitchSection: React.FC<{ t: any, language: string }> = ({ t, language }) => {
  const pitch = t.pitch;
  
  // Note: We use specific language-based scripts for the conversation, 
  // but if the user wants strictly translated ones, we'd add them to translations.ts
  // For now, we'll map them from pitch.scripts if available or use the pitch object
  const scripts = {
    zh: [
      { q: "品牌开场", a: "您好！我们是上海三本照明，拥有20年商超照明经验。我们不仅是灯具制造商，还是国家体育场'鸟巢'的官方供应商，服务过沃尔玛、阿尔迪等全球顶级连锁商超。" },
      { q: "智慧控系统", a: "我们最新的云控系统采用全无线Mesh架构，无需重新布线即可实现30%以上的节能。它能根据人流感应和营业时间自动调节，实现真正的低碳高效。" },
      { q: "产品差异化", a: "您可以看这款获奖无数的超广角射灯，它采用了OmniHue™全光谱技术，CRI达到95以上，能极致还原商品本色，提升零售空间的转化率。" },
      { q: "全球合作", a: "我们在全球范围内寻找合作伙伴。目前我们已服务超过1000家连锁品牌，从零售到办公、景观亮化，都有成熟的交付案例。" }
    ],
    en: [
      { q: "Brand Intro", a: "Hello! We are SANBEN Lighting from Shanghai with 20 years of expertise. As the official supplier for China's National Stadium 'Bird's Nest', we provide premium lighting solutions for giants like Walmart and ALDI." },
      { q: "Smart System", a: "Our V2.0 Cloud Control system uses wireless Mesh tech to save 30%+ on labor and energy costs. It’s fully automated based on occupancy sensors and store schedules." },
      { q: "Core Tech", a: "Our award-winning Ultra-Wide Angle spotlights feature OmniHue™ full-spectrum tech. With CRI Ra>95, it perfectly restores product textures to maximize your retail ROI." },
      { q: "Partnership", a: "We're expanding globally. Having served 1,000+ brands, we offer end-to-end support from planning to installation for supermarkets, offices, and urban landscapes." }
    ],
    de: [
      { q: "Einleitung", a: "Hallo! Wir sind SANBEN Lighting aus Shanghai mit 20 Jahren Erfahrung. Als offizieller Lieferant des 'Vogelnest'-Stadions bieten wir Premium-Lichtlösungen für Giganten wie Walmart und ALDI." },
      { q: "Smarte Steuerung", a: "Unser V2.0 Cloud-Control-System nutzt drahtlose Mesh-Technologie, um über 30% Energie einzusparen. Es ist vollautomatisch basierend auf Sensoren." },
      { q: "Kerntechnologie", a: "Unsere preisgekrönten Strahler nutzen die OmniHue™-Vollspektrum-Technologie (CRI 95+), um Produkttexturen perfekt zur Geltung zu bringen." },
      { q: "Partnerschaft", a: "Wir expandieren weltweit. Wir unterstützen Sie von der Planung bis zur Installation in Supermärkten, Büros und Landschaften." }
    ],
    ar: [
      { q: "مقدمة العلامة التجارية", a: "مرحباً! نحن سانبن للإضاءة من شنغهاي ولدينا 20 عاماً من الخبرة. نحن المورد الرسمي لاستاد 'عش الطائر' الوطني، ونقدم حلول إضاءة متميزة لشركات مثل وول مارت وألدي." },
      { q: "النظام الذكي", a: "يستخدم نظام التحكم السحابي V2.0 تقنية Mesh اللاسلكية لتوفير أكثر من 30% من الطاقة. يعمل تلقائياً بالكامل بناءً على جداول المتجر." },
      { q: "التقنية الأساسية", a: "تتميز كشافاتنا الحائزة على جوائز بتقنية OmniHue™ للطيف الكامل (CRI 95+). إنها تبرز تفاصيل المنتجات بشكل مثالي." },
      { q: "الشراكة", a: "نحن نتوسع عالمياً. نقدم الدعم من التخطيط إلى التركيب لمحلات السوبر ماركت والمكاتب والمناظر الطبيعية." }
    ]
  };

  const activeScripts = scripts[language as keyof typeof scripts] || scripts.en;

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">{pitch.title} <span className="text-slate-300">/ {pitch.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {activeScripts.map((item: any, idx: number) => (
          <div key={idx} className="p-8 bg-slate-50 border-l-2 border-red-600 space-y-4 hover:shadow-lg transition-all duration-300">
             <h5 className="text-[10px] uppercase tracking-widest text-red-600 font-bold">{item.q}</h5>
             <p className="text-sm text-slate-700 leading-relaxed italic">"{item.a}"</p>
          </div>
        ))}
      </div>

      <div className="bg-red-600 text-white p-12 space-y-8">
         <h3 className="text-2xl font-light uppercase tracking-widest">{pitch.ksp} (KSPs)</h3>
         <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-3">
               <p className="text-3xl font-bold opacity-30">01</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">{pitch.k1}</h5>
               <p className="text-xs text-red-100 font-light">{pitch.k1d}</p>
            </div>
            <div className="space-y-3">
               <p className="text-3xl font-bold opacity-30">02</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">{pitch.k2}</h5>
               <p className="text-xs text-red-100 font-light">{pitch.k2d}</p>
            </div>
            <div className="space-y-3">
               <p className="text-3xl font-bold opacity-30">03</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">{pitch.k3}</h5>
               <p className="text-xs text-red-100 font-light">{pitch.k3d}</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PitchSection;


import React from 'react';

const PitchSection: React.FC<{ t: any, language: string }> = ({ t, language }) => {
  const pitch = t.pitch;
  
  const scripts = {
    zh: [
      { q: "品牌开场", a: "您好！我们是上海三本照明科技，拥有20年商超照明经验。我们不仅是灯具制造商，还是国家体育场'鸟巢'的官方供应商，服务过沃尔玛、阿尔迪等全球顶级连锁商超。" },
      { q: "智慧控系统", a: "我们最新的云控系统采用全无线Mesh架构，无需重新布线即可实现30%以上的节能。它能根据人流感应和营业时间自动调节，实现真正的低碳高效。" },
      { q: "产品差异化", a: "您可以看这款获奖无数的超广角射灯，它采用了OmniHue™全光谱技术，CRI达到95以上，能极致还原商品本色，提升零售空间的转化率。" },
      { q: "全球合作", a: "我们在全球范围内寻找合作伙伴。目前我们已服务超过1000家连锁品牌，从零售到办公、景观亮化，都有成熟的交付案例。" }
    ],
    en: [
      { q: "Brand Intro", a: "Hello! We are SANBEN Lighting Tech from Shanghai with 20 years of expertise. As the official supplier for China's National Stadium 'Bird's Nest', we provide premium lighting solutions for giants like Walmart and ALDI." },
      { q: "Smart System", a: "Our V2.0 Cloud Control system uses wireless Mesh tech to save 30%+ on labor and energy costs. It’s fully automated based on occupancy sensors and store schedules." },
      { q: "Core Tech", a: "Our award-winning Ultra-Wide Angle spotlights feature OmniHue™ full-spectrum tech. With CRI Ra>95, it perfectly restores product textures to maximize your retail ROI." },
      { q: "Partnership", a: "We're expanding globally. Having served 1,000+ brands, we offer end-to-end support from planning to installation for supermarkets, offices, and urban landscapes." }
    ],
    de: [
      { q: "Markenintro", a: "Hallo! Wir sind SANBEN Lighting Tech aus Shanghai mit 20 Jahren Erfahrung. Als offizieller Lieferant des 'Vogelnest'-Stadions bieten wir erstklassige Lösungen für Giganten wie Walmart und ALDI." },
      { q: "Smartes System", a: "Unser Cloud-Control-System nutzt Mesh-Technologie, um über 30% Energie einzusparen. Es automatisiert die Beleuchtung basierend auf Sensoren und Zeitplänen." },
      { q: "Kerntechnik", a: "Unsere OmniHue™-Vollspektrum-Technologie (CRI 95+) stellt Texturen perfekt dar, um den ROI im Einzelhandel zu maximieren." },
      { q: "Partnerschaft", a: "Wir expandieren weltweit. Mit über 1.000 Marken bieten wir End-to-End-Support von der Planung bis zur Installation." }
    ],
    fr: [
      { q: "Présentation", a: "Bonjour ! Nous sommes SANBEN Lighting Tech, experts en éclairage depuis 20 ans et fournisseur officiel du stade 'Nid d'Oiseau' de Pékin. Nous servons des leaders mondiaux comme Walmart et ALDI." },
      { q: "Système Intelligent", a: "Notre système Cloud Control V2.0 utilise la technologie Mesh sans fil pour économiser plus de 30% d'énergie. Il s'automatise selon l'affluence et les horaires." },
      { q: "Technologie", a: "Nos spots Ultra-Wide utilisent la technologie OmniHue™ plein spectre. Avec un IRC > 95, ils subliment vos produits pour maximiser vos ventes." },
      { q: "Partenariat", a: "Nous recherchons des partenaires mondiaux. Présents dans plus de 1000 enseignes, nous gérons vos projets de A à Z." }
    ],
    es: [
      { q: "Introducción", a: "¡Hola! Somos SANBEN Lighting Tech, con 20 años de experiencia y proveedores oficiales del estadio 'Nido de Pájaro'. Trabajamos con marcas como Walmart y ALDI." },
      { q: "Sistema Inteligente", a: "Nuestro sistema Cloud Control V2.0 ahorra más del 30% de energía mediante tecnología Mesh inalámbrica y automatización por sensores." },
      { q: "Tecnología", a: "Nuestros focos galardonados cuentan con tecnología OmniHue™ de espectro completo (CRI 95+), restaurando texturas para maximizar el retorno de inversión." },
      { q: "Asociación", a: "Expandimos nuestra red global. Con más de 1,000 marcas servidas, ofrecemos soporte integral desde la planificación hasta la instalación." }
    ],
    nl: [
      { q: "Introductie", a: "Hallo! Wij zijn SANBEN Lighting Tech, met 20 jaar expertise en officieel leverancier van het 'Vogelnest'-stadion. Wij verlichten winkels zoals Walmart en ALDI." },
      { q: "Slim Systeem", a: "Ons V2.0 Cloud Control-systeem bespaart meer dan 30% energie via draadloze Mesh-technologie en slimme sensoren." },
      { q: "Kerntechnologie", a: "Onze Ultra-Wide spots met OmniHue™ volspectrumtechnologie (CRI 95+) laten producten er perfect uitzien om uw verkoop te stimuleren." },
      { q: "Partnerschap", a: "Wij groeien wereldwijd. Met ervaring bij 1.000+ merken bieden wij volledige ondersteuning van ontwerp tot installatie." }
    ],
    pt: [
      { q: "Introdução", a: "Olá! Somos a SANBEN Lighting Tech, com 20 anos de experiência e fornecedores oficiais do estádio 'Ninho de Pássaro'. Servimos marcas como Walmart e ALDI." },
      { q: "Sistema Inteligente", a: "Nosso sistema Cloud Control V2.0 economiza mais de 30% de energia usando tecnologia Mesh sem fio e sensores de ocupação." },
      { q: "Tecnologia", a: "Nossos projetores premiados usam tecnologia OmniHue™ de espectro total (CRI 95+), realçando texturas para maximizar suas vendas." },
      { q: "Parceria", a: "Estamos em expansão global. Com mais de 1.000 marcas atendidas, oferecemos suporte total do planejamento à instalação." }
    ],
    ja: [
      { q: "ブランド紹介", a: "こんにちは！上海三本照明科技です。20年の実績を持ち、北京五輪「鳥の巣」スタジアムの公式サプライヤーとして、ウォルマートやアルディ等の世界的人気店を支援しています。" },
      { q: "スマートシステム", a: "最新のクラウド制御V2.0は、無線Mesh技術で30%以上の省エネを実現。人感センサーとスケジュール管理で自動最適化されます。" },
      { q: "コア技術", a: "受賞歴のあるOmniHue™全スペクトル技術（CRI 95+）により、商品の色味を極限まで再現し、店舗の購買率を向上させます。" },
      { q: "パートナーシップ", a: "グローバルパートナーを募集中です。1,000以上のブランドへの導入実績を元に、企画から施工までトータルサポートします。" }
    ],
    ko: [
      { q: "브랜드 소개", a: "안녕하십니까! 20년 역사의 상하이 산본 조명입니다. '냐오차오' 국가 경기장 공식 공급업체로서 월마트, 알디 등 글로벌 대형 매장에 프리미엄 솔루션을 제공합니다." },
      { q: "스마트 시스템", a: "V2.0 클라우드 제어 시스템은 무선 Mesh 기술을 통해 30% 이상의 에너지를 절감합니다. 센서와 스케줄에 따라 자동 조절됩니다." },
      { q: "핵심 기술", a: "OmniHue™ 풀스펙트럼 기술(CRI 95+)이 적용된 스포트라이트는 제품 본연의 색을 완벽히 재현하여 매출 증대를 돕습니다." },
      { q: "파트너십", a: "글로벌 파트너를 찾고 있습니다. 1,000개 이상의 브랜드 서비스 경험을 바탕으로 기획부터 설치까지 전문적인 지원을 약속드립니다." }
    ],
    ar: [
      { q: "مقدمة العلامة التجارية", a: "مرحباً! نحن سانبن لتكنولوجيا الإضاءة من شنغهاي ولدينا 20 عاماً من الخبرة. نحن المورد الرسمي لاستاد 'عش الطائر' الوطني، ونقدم حلول إضاءة متميزة لشركات مثل وول مارت وألدي." },
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
          <div key={idx} className="p-8 bg-slate-50 border-l-2 border-red-600 space-y-4 hover:shadow-lg transition-all duration-300 rounded-r-sm">
             <h5 className="text-[10px] uppercase tracking-widest text-red-600 font-bold">{item.q}</h5>
             <p className="text-sm text-slate-700 leading-relaxed italic">"{item.a}"</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-12 space-y-8 rounded-sm">
         <h3 className="text-2xl font-light uppercase tracking-widest text-center border-b border-slate-800 pb-8">{pitch.ksp} (KSPs)</h3>
         <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-3 p-6 hover:bg-slate-800/50 transition-colors rounded-sm">
               <p className="text-3xl font-bold opacity-30 text-red-600">01</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">{pitch.k1}</h5>
               <p className="text-xs text-slate-400 font-light leading-relaxed">{pitch.k1d}</p>
            </div>
            <div className="space-y-3 p-6 hover:bg-slate-800/50 transition-colors rounded-sm">
               <p className="text-3xl font-bold opacity-30 text-red-600">02</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">{pitch.k2}</h5>
               <p className="text-xs text-slate-400 font-light leading-relaxed">{pitch.k2d}</p>
            </div>
            <div className="space-y-3 p-6 hover:bg-slate-800/50 transition-colors rounded-sm">
               <p className="text-3xl font-bold opacity-30 text-red-600">03</p>
               <h5 className="font-bold text-sm tracking-widest uppercase">{pitch.k3}</h5>
               <p className="text-xs text-slate-400 font-light leading-relaxed">{pitch.k3d}</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PitchSection;

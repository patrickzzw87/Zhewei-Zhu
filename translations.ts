
import { Language } from './types.ts';

export const translations: Record<Language, any> = {
  zh: {
    brandName: "三本照明科技",
    subTitle: "照明科技",
    capture: "客户登记",
    footer: "© 2025 上海三本照明科技股份有限公司。版权所有。",
    sections: {
      brand: {
        title: "企业介绍",
        subtitle: "大国地标背书",
        p1: "始于2005年，三本照明科技深耕商超照明领域20年。",
        p2: "作为国家体育场“鸟巢”官方智慧照明供应商，三本照明以国家级品质标准赋能全球顶级连锁品牌。依托上海、广东、福建、江苏四大生产基地及20余家全国服务商网络，我们已为全球超过1000个商业连锁品牌提供卓越的照明解决方案，以光影重塑商业空间价值。",
        feat1: "连续10年国家高新技术企业",
        feat2: "国家体育场“鸟巢”官方智慧照明供应商",
        feat3: "国家级科技型中小企业",
        stat1: "核心发明专利",
        stat2: "实用新型专利",
        stat3: "外观设计专利",
        stat4: "生产制造基地",
        network: "20+ 全国服务经销商网络",
        lab: "国家级标准光电实验室",
        bases: { sh: "上海总部基地", gd: "广东生产基地", fj: "福建生产基地", js: "江苏生产基地" }
      },
      strategy: {
        title: "品牌战略",
        subtitle: "2026 全球规模化增长计划",
        strategyTitle: "战略定位",
        strategyVision: "拥有国际视野的智慧零售照明解决方案专家",
        strategyDesc: "2026年是三本照明科技从“项目突破”迈向“全球规模化增长”的战略转型之年。旨在将国内领先优势，系统性地转化为全球市场的核心竞争力。",
        valueTitle: "四大核心价值主张",
        v1: "“鸟巢级”的可靠性", v1d: "具备服务国家级、超大型复杂项目的最高标准交付能力。",
        v2: "“平台级”的智慧能力", v2d: "以V2.0平台与OmniHue™系统为内核，提供超越基础照明的效能。",
        v3: "“伙伴级”的定制服务", v3d: "深刻理解不同零售业态，提供“一店一策”的定制化服务。",
        v4: "“全球化”的设计与品质", v4d: "荣获美、法多项国际设计大奖，审美与品质达到国际一流水平。"
      },
      intelligence: {
        title: "智慧照明",
        subtitle: "智能照明物联网",
        v2: "三本云控 V2.0",
        v2desc: "实时能耗监控、场景智能联动、全无线Mesh架构",
        hueTitle: "OmniHue™ 全光谱色彩系统",
        hueDesc: "基于RGBWC五通道技术，输出无限接近自然光的连续全光谱。CRI Ra ≥ 95。",
        colors: "极致色彩还原",
        saving: "线材与人工成本节约",
        cloudTitle: "云端智控特性",
        cloudFeat1: "去中心化结构", cloudFeat2: "多权限管理", cloudFeat3: "智能跳频抗干扰", cloudFeat4: "无需改线对码",
        productTitle: "核心黑科技：超广角系列射灯",
        productDesc: "横扫多项国际大奖。凭借卓越的控光能力与超宽光束表现力，为现代建筑营造极具透视感的顶级光影体验。",
        awards: ["2024 阿拉丁神灯奖 - 全国优秀产品奖", "2024 美国 IDSA 决赛入围奖", "2024 美国 GOOD DESIGN 银奖", "2024 法国设计奖 (FRENCH DESIGN AWARD)"]
      },
      solutions: {
        title: "商业方案",
        subtitle: "零售照明模式",
        designTitle: "设计咨询与灯光规划",
        designDesc: "我们不仅提供灯具，更为每一个项目提供定制化的灯光规划方案。",
        delivered: "成功交付项目",
        experts: "设计专家团队",
        m1: "重点聚焦", m1d: "强调商品对比度，营造高端商超氛围。",
        m2: "线性结合", m2d: "线性光结合重点照明，提升空间通透感。",
        m3: "极简纯净", m3d: "降低光源数量，空间更加整洁有序。",
        m4: "见光不见灯", m4d: "博物馆级洗墙与隐藏式线形光源方案。",
        m5: "均匀照度", m5d: "全场照度均衡，适合仓储式会员店。",
        m6: "色温统一", m6d: "色温全场统一，极致的色彩一致性。"
      },
      cases: {
        title: "企业案例",
        subtitle: "全球成功印记",
        serving: "为全球超过1,000家连锁企业提供服务",
        commercial: "商业零售", commDesc: "大润发、沃尔玛、山姆会员店等合作伙伴。",
        education: "教育空间", eduDesc: "专业护眼教室照明、大学礼堂等。",
        outdoor: "户外景观", outDesc: "临港科技城、九江大中路等大型景观工程。",
        servingCount: "1000+"
      },
      pitch: {
        title: "展会话术",
        subtitle: "核心卖点",
        ksp: "关键卖点",
        k1: "20年深厚底蕴", k1d: "“鸟巢”供应商，服务千家顶级品牌。",
        k2: "物联网就绪", k2d: "节能30%，无线Mesh，无需重新布线。",
        k3: "OmniHue™ 技术", k3d: "博物馆级色彩精度 (CRI 95+)。"
      },
      lead: {
        title: "客户登记",
        subtitle: "展会信息获取",
        company: "公司名称", contact: "联系人姓名", country: "国家", whatsapp: "WhatsApp / 手机", email: "邮箱", interest: "感兴趣领域", priority: "意向强度", priorityH: "🔥 高优先级 (急需报价)", priorityM: "⚡ 中等 (展会后跟进)", priorityL: "❄️ 低 (未来兴趣)", notes: "备注", submit: "提交客户信息", history: "登记历史", noLeads: "尚未登记任何客户。", tipTitle: "小建议", tipDesc: "记得索要名片并记录具体产品需求。对于迪拜客户，优先记录 WhatsApp。"
      }
    }
  },
  en: {
    brandName: "SANBEN TECH",
    subTitle: "Lighting Technology",
    capture: "Capture",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "Company Introduction",
        subtitle: "National Landmark Endorsement",
        p1: "Founded in 2005, 20 years of expertise in retail lighting.",
        p2: "As the official smart lighting supplier for the 'Bird's Nest' National Stadium, SANBEN empowers top-tier global brands with national-grade quality standards. Supported by four manufacturing bases in Shanghai, Guangdong, Fujian, and Jiangsu, and a network of 20+ service distributors, we provide professional lighting solutions to over 1,000+ brands worldwide.",
        feat1: "National High-Tech Enterprise",
        feat2: "Official Supplier for the 'Bird's Nest' Stadium",
        feat3: "National Tech-based Enterprise",
        stat1: "Invention Patents",
        stat2: "Utility Patents",
        stat3: "Design Patents",
        stat4: "Bases",
        network: "20+ National Service Distributors",
        lab: "National Standard Opto-Lab",
        bases: { sh: "Shanghai HQ", gd: "Guangdong Base", fj: "Fujian Base", js: "Jiangsu Base" }
      },
      strategy: {
        title: "Brand Strategy",
        subtitle: "2026 Global Growth Plan",
        strategyTitle: "Strategic Positioning",
        strategyVision: "Smart Retail Lighting Expert with International Vision",
        strategyDesc: "2026 marks the strategic transition for SANBEN from 'Project Breakthrough' to 'Global Scale Growth'.",
        valueTitle: "4 Core Value Propositions",
        v1: "Bird's Nest-Level Reliability", v1d: "Highest standard delivery for complex national projects.",
        v2: "Platform-Level Intelligence", v2d: "SANBEN V2.0 platform and OmniHue™ tech core.",
        v3: "Partnership-Level Customization", v3d: "Deep understanding of retail scenes with 'One Store One Policy'.",
        v4: "Global-Standard Quality", v4d: "International award-winning designs with world-class quality."
      },
      intelligence: {
        title: "Smart Tech",
        subtitle: "Lighting IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Real-time monitoring, smart scenes, wireless Mesh",
        hueTitle: "OmniHue™ Full Spectrum",
        hueDesc: "Based on RGBWC 5-channel technology. CRI Ra ≥ 95.",
        colors: "Color Reproduction",
        saving: "Labor & Wiring Saving",
        cloudTitle: "Cloud Features",
        cloudFeat1: "Decentralized", cloudFeat2: "Multi-Admin", cloudFeat3: "Anti-Interference", cloudFeat4: "Easy Config",
        productTitle: "Ultra-Wide Angle Spotlight Series",
        productDesc: "Recipient of multiple international awards. Redefining modern architectural light with superior beam performance and perspective.",
        awards: ["2024 ALIGHTING AWARD - NATIONAL EXCELLENT PRODUCT", "2024 IDSA - FEATURED FINALIST", "2024 AMERICAN GOOD DESIGN SILVER AWARD", "2024 FRENCH DESIGN AWARD"]
      },
      solutions: {
        title: "Commercial",
        subtitle: "Retail Models",
        designTitle: "Planning & Design",
        designDesc: "Customized lighting plans for every project.",
        delivered: "Delivered Projects",
        experts: "Design Experts",
        m1: "High Contrast", m1d: "Emphasis on product contrast.",
        m2: "Linear Hybrid", m2d: "Combines linear and focus light.",
        m3: "Minimalist", m3d: "Clean and orderly spaces.",
        m4: "Invisible Source", m4d: "Museum-grade wall-wash and hidden linear schemes.",
        m5: "Uniform", m5d: "Balanced for warehouse stores.",
        m6: "Unified Temp", m6d: "Full-field color consistency."
      },
      cases: {
        title: "Success Cases",
        subtitle: "Global Footprint",
        serving: "Serving Over 1,000 Global Chains",
        commercial: "Commercial Retail", commDesc: "Partner of Walmart, ALDI, and Sam's Club.",
        education: "Education", eduDesc: "Eye-protection classroom lighting.",
        outdoor: "Outdoor", outDesc: "Large scale urban landscape projects."
      },
      pitch: {
        title: "Pitch Scripts",
        subtitle: "Key Selling Points",
        ksp: "KSPs",
        k1: "20 Years Pedigree", k1d: "Stadium supplier. Trusted by 1,000+ brands.",
        k2: "IoT Ready", k2d: "30% Energy savings. Wireless Mesh.",
        k3: "OmniHue™ Tech", k3d: "Museum-grade accuracy (CRI 95+)."
      },
      lead: {
        title: "Lead Capture",
        subtitle: "Exhibition Info",
        company: "Company", contact: "Contact", country: "Country", whatsapp: "WhatsApp", email: "Email", interest: "Interest", priority: "Priority", priorityH: "🔥 High Priority", priorityM: "⚡ Medium", priorityL: "❄️ Low", notes: "Notes", submit: "Submit", history: "Recent Leads", noLeads: "No leads yet.", tipTitle: "Pro Tip", tipDesc: "Ask for business cards and WhatsApp for Dubai clients."
      }
    }
  },
  de: {
    brandName: "SANBEN TECH",
    subTitle: "Lichttechnik",
    capture: "Kontakte",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "Unternehmensvorstellung",
        subtitle: "Nationales Wahrzeichen Endorsement",
        p1: "Gegründet 2005, 20 Jahre Expertise in der Einzelhandelsbeleuchtung.",
        p2: "Als offizieller Lieferant des 'Vogelnest'-Stadions stattet SANBEN globale Ketten mit nationalem Qualitätsstandard aus. Mit 4 Fabriken und 20+ Händlern weltweit.",
        feat1: "Nationales High-Tech-Unternehmen",
        feat2: "Offizieller Lieferant des 'Vogelnest'-Stadions",
        feat3: "Nationales Technik-Unternehmen",
        stat1: "Patente", stat2: "Gebrauchsmuster", stat3: "Design", stat4: "Basen",
        network: "20+ Händler", lab: "Nationales Labor",
        bases: { sh: "Shanghai HQ", gd: "Guangdong", fj: "Fujian", js: "Jiangsu" }
      },
      strategy: {
        title: "Markenstrategie",
        subtitle: "Globales Wachstum 2026",
        strategyTitle: "Positionierung",
        strategyVision: "Experte für smarte Einzelhandelslösungen",
        strategyDesc: "2026 markiert den Übergang zum globalen Wachstum.",
        valueTitle: "4 Kernwerte",
        v1: "Zuverlässigkeit", v1d: "Höchste Standards für Großprojekte.",
        v2: "Plattform-Intelligenz", v2d: "Cloud V2.0 & OmniHue™ Technik.",
        v3: "Anpassung", v3d: "Maßgeschneidert für jedes Geschäft.",
        v4: "Globale Qualität", v4d: "Preisgekrönte Designs."
      },
      intelligence: {
        title: "Smarte Tech",
        subtitle: "Licht-IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Echtzeit-Monitoring, Mesh-Netzwerk",
        hueTitle: "OmniHue™ Vollspektrum",
        hueDesc: "CRI Ra ≥ 95. Nahezu natürliches Licht.",
        colors: "Farbtreue",
        saving: "Energieersparnis",
        cloudTitle: "Cloud-Features",
        cloudFeat1: "Dezentral", cloudFeat2: "Multi-Admin", cloudFeat3: "Störfest", cloudFeat4: "Einfach",
        productTitle: "Ultraweitwinkel-Strahler-Serie",
        productDesc: "Gewinner zahlreicher internationaler Preise. Neudefinition der modernen Lichtgestaltung.",
        awards: ["2024 ALIGHTING AWARD", "2024 IDSA FINALIST", "2024 AMERICAN GOOD DESIGN SILVER", "2024 FRENCH DESIGN AWARD"]
      },
      solutions: {
        title: "Einzelhandel",
        subtitle: "Beleuchtungsmodelle",
        designTitle: "Planung & Design",
        designDesc: "Individuelle Lichtpläne.",
        delivered: "Projekte",
        experts: "Experten",
        m1: "Kontrastreich", m1d: "Fokus auf Produkte.",
        m2: "Linear-Hybrid", m2d: "Kombination aus Linien & Fokus.",
        m3: "Minimalistisch", m3d: "Sauber & geordnet.",
        m4: "Unsichtbar", m4d: "Museum-Standard Wandflutung.",
        m5: "Gleichmäßig", m5d: "Ideal für Lagerhäuser.",
        m6: "Einheitlich", m6d: "Perfekte Konsistenz."
      },
      cases: {
        title: "Referenzen",
        subtitle: "Globaler Fußabdruck",
        serving: "Über 1.000 Ketten weltweit",
        commercial: "Einzelhandel", commDesc: "Partner von Walmart & ALDI.",
        education: "Bildung", eduDesc: "Augenschonende Beleuchtung.",
        outdoor: "Außenbereich", outDesc: "Landschaftsprojekte."
      },
      pitch: {
        title: "Skripte",
        subtitle: "Verkaufsargumente",
        ksp: "USP",
        k1: "20 Jahre", k1d: "Stadion-Lieferant.",
        k2: "IoT Ready", k2d: "30% Ersparnis.",
        k3: "OmniHue™", k3d: "CRI 95+ Genauigkeit."
      },
      lead: {
        title: "Erfassung",
        subtitle: "Messe-Info",
        company: "Firma", contact: "Kontakt", country: "Land", whatsapp: "WhatsApp", email: "E-Mail", interest: "Interesse", priority: "Priorität", priorityH: "Hoch", priorityM: "Mittel", priorityL: "Niedrig", notes: "Notizen", submit: "Senden", history: "Historie", noLeads: "Keine Leads.", tipTitle: "Tipp", tipDesc: "WhatsApp für Dubai-Kunden erfragen."
      }
    }
  },
  ar: {
    brandName: "SANBEN TECH",
    subTitle: "تكنولوجيا الإضاءة",
    capture: "تسجيل",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "مقدمة الشركة",
        subtitle: "اعتماد المعالم الوطنية",
        p1: "تأسست في عام 2005، 20 عاماً من الخبرة في إضاءة التجزئة.",
        p2: "بصفتنا المورد الرسمي لاستاد 'عش الطائر'، نقوم بتجهيز السلاسل العالمية بمعايير الجودة الوطنية. لدينا 4 قواعد تصنيع وشبكة من 20+ موزعاً.",
        feat1: "مؤسسة وطنية للتكنولوجيا الفائقة",
        feat2: "المورد الرسمي لاستاد 'عش الطائر'",
        feat3: "مؤسسة وطنية قائمة على التكنولوجيا",
        stat1: "براءات الاختراع", stat2: "النماذج", stat3: "التصاميم", stat4: "القواعد",
        network: "20+ موزعين", lab: "مختبر وطني",
        bases: { sh: "مقر شنغهاي", gd: "قاعدة قوانغدونغ", fj: "قاعدة فوجيان", js: "قاعدة جيانغسو" }
      },
      strategy: {
        title: "استراتيجية العلامة",
        subtitle: "خطة النمو العالمي 2026",
        strategyTitle: "الموقع الاستراتيجي",
        strategyVision: "خبير حلول إضاءة التجزئة الذكية",
        strategyDesc: "يمثل عام 2026 الانتقال الاستراتيجي نحو النمو العالمي.",
        valueTitle: "4 مقومات قيمة أساسية",
        v1: "موثوقية عالية", v1d: "أعلى معايير التسليم للمشاريع الكبرى.",
        v2: "ذكاء المنصة", v2d: "نظام Cloud V2.0 و OmniHue™.",
        v3: "تخصيص الشراكة", v3d: "فهم عميق لكل متجر.",
        v4: "جودة عالمية", v4d: "تصاميم حائزة على جوائز."
      },
      intelligence: {
        title: "التكنولوجيا الذكية",
        subtitle: "إنترنت الأشياء للإضاءة",
        v2: "SANBEN Cloud V2.0",
        v2desc: "مراقبة مباشرة، شبكة Mesh",
        hueTitle: "طيف OmniHue™ الكامل",
        hueDesc: "CRI Ra ≥ 95. ضوء طبيعي تماماً.",
        colors: "دقة الألوان",
        saving: "توفير الطاقة",
        cloudTitle: "ميزات السحاب",
        cloudFeat1: "لامركزي", cloudFeat2: "إدارة متعددة", cloudFeat3: "مقاوم للتداخل", cloudFeat4: "سهل الضبط",
        productTitle: "سلسلة الأضواء الكاشفة ذات الزاوية العريضة",
        productDesc: "حائز على العديد من الجوائز الدولية. إعادة تعريف الإضاءة المعمارية الحديثة.",
        awards: ["جائزة ALIGHTING 2024", "نهائي IDSA 2024", "جائزة GOOD DESIGN الأمريكية الفضية", "جائزة التصميم الفرنسية 2024"]
      },
      solutions: {
        title: "التجارية",
        subtitle: "نماذج التجزئة",
        designTitle: "التخطيط والتصميم",
        designDesc: "خطط إضاءة مخصصة لكل مشروع.",
        delivered: "مشاريع منجزة",
        experts: "خبراء تصميم",
        m1: "تباين عالٍ", m1d: "التركيز على المنتجات.",
        m2: "هجين خطي", m2d: "يجمع بين الخطوط والتركيز.",
        m3: "بسيط", m3d: "مساحات نظيفة ومنظمة.",
        m4: "مصدر غير مرئي", m4d: "إضاءة جدران بمعايير المتاحف.",
        m5: "موحد", m5d: "متوازن للمتاجر الكبيرة.",
        m6: "لون موحد", m6d: "تناسق كامل للألوان."
      },
      cases: {
        title: "حالات النجاح",
        subtitle: "البصمة العالمية",
        serving: "نخدم أكثر من 1000 سلسلة عالمية",
        commercial: "تجزئة تجارية", commDesc: "شريك وول مارت وألدي.",
        education: "تعليم", eduDesc: "إضاءة فصول حامية للعين.",
        outdoor: "خارجية", outDesc: "مشاريع مناظر حضرية كبرى."
      },
      pitch: {
        title: "نصوص العرض",
        subtitle: "نقاط البيع الأساسية",
        ksp: "الميزات الفريدة",
        k1: "20 عاماً من العراقة", k1d: "مورد ملاعب وطنية.",
        k2: "جاهز لإنترنت الأشياء", k2d: "توفير 30% من الطاقة.",
        k3: "تقنية OmniHue™", k3d: "دقة CRI 95+."
      },
      lead: {
        title: "تسجيل العملاء",
        subtitle: "معلومات المعرض",
        company: "الشركة", contact: "الاتصال", country: "البلد", whatsapp: "واتساب", email: "البريد", interest: "الاهتمام", priority: "الأولوية", priorityH: "عالية", priorityM: "متوسطة", priorityL: "منخفضة", notes: "ملاحظات", submit: "إرسال", history: "السجل", noLeads: "لا يوجد عملاء.", tipTitle: "نصيحة", tipDesc: "اطلب واتساب لعملاء دبي."
      }
    }
  },
  fr: {
    brandName: "SANBEN TECH",
    subTitle: "Technologie d'Éclairage",
    capture: "Capture",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "Introduction",
        subtitle: "Approuvé par des Monuments Nationaux",
        p1: "Fondé en 2005, 20 ans d'expertise en éclairage de détail.",
        p2: "En tant que fournisseur officiel du stade 'Nid d'Oiseau', SANBEN équipe les chaînes mondiales avec un standard de qualité national. Nous possédons 4 bases de production et 20+ distributeurs.",
        feat1: "Entreprise High-Tech Nationale",
        feat2: "Fournisseur Officiel du Stade 'Nid d'Oiseau'",
        feat3: "Entreprise Technologique Nationale",
        stat1: "Brevets d'Invention", stat2: "Brevets d'Utilité", stat3: "Design", stat4: "Bases",
        network: "20+ Distributeurs", lab: "Laboratoire Standard",
        bases: { sh: "Siège Shanghai", gd: "Base Guangdong", fj: "Base Fujian", js: "Base Jiangsu" }
      },
      strategy: {
        title: "Stratégie",
        subtitle: "Croissance Globale 2026",
        strategyTitle: "Positionnement",
        strategyVision: "Expert en solutions intelligentes pour le détail",
        strategyDesc: "2026 marque la transition vers une croissance mondiale.",
        valueTitle: "4 Valeurs Clés",
        v1: "Fiabilité Stade", v1d: "Standards élevés pour projets complexes.",
        v2: "Intelligence Plateforme", v2d: "Cloud V2.0 et technologie OmniHue™.",
        v3: "Personnalisation", v3d: "Compréhension profonde de chaque magasin.",
        v4: "Qualité Globale", v4d: "Designs récompensés internationalement."
      },
      intelligence: {
        title: "Smart Tech",
        subtitle: "IoT d'Éclairage",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Suivi en direct, réseau Mesh sans fil",
        hueTitle: "OmniHue™ Spectre Complet",
        hueDesc: "IRC Ra ≥ 95. Lumière naturelle continue.",
        colors: "Fidélité des Couleurs",
        saving: "Économie d'Énergie",
        cloudTitle: "Fonctions Cloud",
        cloudFeat1: "Décentralisé", cloudFeat2: "Multi-Admin", cloudFeat3: "Anti-Interférence", cloudFeat4: "Simple",
        productTitle: "Série de Projecteurs à Angle Ultra-Large",
        productDesc: "Lauréat de plusieurs prix internationaux. Redéfinit l'éclairage architectural moderne.",
        awards: ["PRIX ALIGHTING 2024", "FINALISTE IDSA 2024", "AMERICAN GOOD DESIGN SILVER", "PRIX DU DESIGN FRANÇAIS 2024"]
      },
      solutions: {
        title: "Solutions",
        subtitle: "Modèles de Détail",
        designTitle: "Design & Planification",
        designDesc: "Plans d'éclairage sur mesure.",
        delivered: "Projets Livrés",
        experts: "Experts Design",
        m1: "Contraste Élevé", m1d: "Accent sur les produits.",
        m2: "Hybride Linéaire", m2d: "Combine lignes et focus.",
        m3: "Minimaliste", m3d: "Espaces propres et ordonnés.",
        m4: "Source Invisible", m4d: "Lavage mural de qualité musée.",
        m5: "Uniforme", m5d: "Équilibré pour entrepôts.",
        m6: "Température Unifiée", m6d: "Consistance parfaite."
      },
      cases: {
        title: "Cas de Succès",
        subtitle: "Empreinte Mondiale",
        serving: "Plus de 1 000 enseignes servies",
        commercial: "Commerce de Détail", commDesc: "Partenaire de Walmart et ALDI.",
        education: "Éducation", eduDesc: "Éclairage scolaire protecteur.",
        outdoor: "Extérieur", outDesc: "Grands projets paysagers."
      },
      pitch: {
        title: "Pitch",
        subtitle: "Arguments Clés",
        ksp: "Points Forts",
        k1: "20 Ans d'Héritage", k1d: "Fournisseur de stades nationaux.",
        k2: "Prêt pour l'IoT", k2d: "Économie d'énergie de 30%.",
        k3: "Techno OmniHue™", k3d: "Précision IRC 95+."
      },
      lead: {
        title: "Capture Leads",
        subtitle: "Infos Salon",
        company: "Société", contact: "Contact", country: "Pays", whatsapp: "WhatsApp", email: "E-mail", interest: "Intérêt", priority: "Priorité", priorityH: "Urgent", priorityM: "Moyen", priorityL: "Faible", notes: "Notes", submit: "Soumettre", history: "Historique", noLeads: "Aucun lead.", tipTitle: "Conseil", tipDesc: "Priorisez WhatsApp pour les clients de Dubaï."
      }
    }
  },
  es: {
    brandName: "SANBEN TECH",
    subTitle: "Tecnología de Iluminación",
    capture: "Captura",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "Introducción",
        subtitle: "Respaldo de Monumentos Nacionales",
        p1: "Fundada en 2005, 20 años de experiencia en iluminación retail.",
        p2: "Como proveedor oficial del estadio 'Nido de Pájaro', SANBEN equipa a cadenas globales con estándares nacionales. Contamos con 4 bases de producción y 20+ distribuidores.",
        feat1: "Empresa de Alta Tecnología Nacional",
        feat2: "Proveedor Oficial del Estadio 'Nido de Pájaro'",
        feat3: "Empresa Tecnológica Nacional",
        stat1: "Patentes Invención", stat2: "Utilidad", stat3: "Diseño", stat4: "Bases",
        network: "20+ Distribuidores", lab: "Lab Estándar",
        bases: { sh: "Sede Shanghái", gd: "Base Guangdong", fj: "Base Fujian", js: "Base Jiangsu" }
      },
      strategy: {
        title: "Estrategia",
        subtitle: "Crecimiento Global 2026",
        strategyTitle: "Posicionamiento",
        strategyVision: "Experto en soluciones retail inteligentes",
        strategyDesc: "2026 marca la transición al crecimiento global.",
        valueTitle: "4 Propuestas de Valor",
        v1: "Fiabilidad de Estadio", v1d: "Máximos estándares para proyectos complejos.",
        v2: "Inteligencia de Plataforma", v2d: "Cloud V2.0 y tecnología OmniHue™.",
        v3: "Personalización", v3d: "Comprensión profunda de cada tienda.",
        v4: "Calidad Global", v4d: "Diseños premiados internacionalmente."
      },
      intelligence: {
        title: "Smart Tech",
        subtitle: "IoT de Iluminación",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Monitoreo en vivo, red Mesh inalámbrica",
        hueTitle: "OmniHue™ Espectro Completo",
        hueDesc: "CRI Ra ≥ 95. Luz natural continua.",
        colors: "Fidelidad de Color",
        saving: "Ahorro de Energía",
        cloudTitle: "Funciones Cloud",
        cloudFeat1: "Descentralizado", cloudFeat2: "Multi-Admin", cloudFeat3: "Anti-Interferencias", cloudFeat4: "Fácil",
        productTitle: "Serie de Focos de Ángulo Ultra-Amplio",
        productDesc: "Ganador de múltiples premios internacionales. Redefiniendo la iluminación arquitectónica.",
        awards: ["PREMIO ALIGHTING 2024", "FINALISTA IDSA 2024", "GOOD DESIGN SILVER", "PREMIO DISEÑO FRANCÉS 2024"]
      },
      solutions: {
        title: "Soluciones",
        subtitle: "Modelos Retail",
        designTitle: "Diseño y Planificación",
        designDesc: "Planes de iluminación a medida.",
        delivered: "Proyectos Entregados",
        experts: "Expertos en Diseño",
        m1: "Alto Contraste", m1d: "Énfasis en productos.",
        m2: "Híbrido Lineal", m2d: "Combina líneas y enfoque.",
        m3: "Minimalista", m3d: "Espacios limpios y ordenados.",
        m4: "Fuente Invisible", m4d: "Bañado de pared nivel museo.",
        m5: "Uniforme", m5d: "Equilibrado para almacenes.",
        m6: "Temp. Unificada", m6d: "Consistencia perfecta."
      },
      cases: {
        title: "Casos de Éxito",
        subtitle: "Huella Global",
        serving: "Sirviendo a más de 1,000 cadenas",
        commercial: "Retail Comercial", commDesc: "Socio de Walmart y ALDI.",
        education: "Educación", eduDesc: "Iluminación escolar protectora.",
        outdoor: "Exterior", outDesc: "Grandes proyectos paisajísticos."
      },
      pitch: {
        title: "Guiones",
        subtitle: "Puntos de Venta",
        ksp: "USP",
        k1: "20 Años de Historia", k1d: "Proveedor de estadios nacionales.",
        k2: "Listo para IoT", k2d: "30% de ahorro energético.",
        k3: "Tecno OmniHue™", k3d: "Precisión CRI 95+."
      },
      lead: {
        title: "Captura",
        subtitle: "Info de Feria",
        company: "Empresa", contact: "Contacto", country: "País", whatsapp: "WhatsApp", email: "E-mail", interest: "Interés", priority: "Prioridad", priorityH: "Alta", priorityM: "Media", priorityL: "Baja", notes: "Notas", submit: "Enviar", history: "Historial", noLeads: "Sin registros.", tipTitle: "Consejo", tipDesc: "Pide WhatsApp para clientes de Dubái."
      }
    }
  },
  nl: {
    brandName: "SANBEN TECH",
    subTitle: "Verlichtingstechnologie",
    capture: "Leads",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "Introductie",
        subtitle: "Nationale Erkenning",
        p1: "Opgericht in 2005, 20 jaar ervaring in retailverlichting.",
        p2: "Als officieel leverancier van het 'Vogelnest'-stadion rust SANBEN wereldwijde ketens uit met nationale kwaliteitsnormen. We hebben 4 fabrieken en 20+ distributeurs.",
        feat1: "Nationaal High-Tech Bedrijf",
        feat2: "Officieel Leverancier van het 'Vogelnest'-Stadion",
        feat3: "Technologisch Bedrijf",
        stat1: "Patenten", stat2: "Modellen", stat3: "Design", stat4: "Bases",
        network: "20+ Dealernetwerk", lab: "Standaard Lab",
        bases: { sh: "Shanghai HQ", gd: "Guangdong", fj: "Fujian", js: "Jiangsu" }
      },
      strategy: {
        title: "Strategie",
        subtitle: "Wereldwijde Groei 2026",
        strategyTitle: "Positionering",
        strategyVision: "Expert in slimme retailverlichting",
        strategyDesc: "2026 markeert de stap naar wereldwijde schaal.",
        valueTitle: "4 Kernwaarden",
        v1: "Stadion-Betrouwbaarheid", v1d: "Hoogste normen voor complexe projecten.",
        v2: "Platform-Intelligentie", v2d: "Cloud V2.0 en OmniHue™ tech.",
        v3: "Maatwerk", v3d: "Diep begrip van elk winkeltype.",
        v4: "Wereldkwaliteit", v4d: "Internationaal bekroonde ontwerpen."
      },
      intelligence: {
        title: "Slimme Tech",
        subtitle: "Verlichting IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Live monitoring, draadloos Mesh",
        hueTitle: "OmniHue™ Volspectrum",
        hueDesc: "CRI Ra ≥ 95. Natuurlijk licht.",
        colors: "Kleurweergave",
        saving: "Energiebesparing",
        cloudTitle: "Cloud-functies",
        cloudFeat1: "Gedecentraliseerd", cloudFeat2: "Multi-Admin", cloudFeat3: "Storingsvrij", cloudFeat4: "Eenvoudig",
        productTitle: "Ultra-Groothoek Spot-Serie",
        productDesc: "Ontvanger van meerdere internationale prijzen. Een nieuwe standaard voor moderne architectuur.",
        awards: ["2024 ALIGHTING AWARD", "2024 IDSA FINALIST", "2024 AMERICAN GOOD DESIGN", "2024 FRENCH DESIGN AWARD"]
      },
      solutions: {
        title: "Oplossingen",
        subtitle: "Retail Modellen",
        designTitle: "Planning & Ontwerp",
        designDesc: "Verlichtingsplannen op maat.",
        delivered: "Projecten",
        experts: "Design Experts",
        m1: "Hoog Contrast", m1d: "Focus op producten.",
        m2: "Lineaire Hybride", m2d: "Combineert lijnen en focus.",
        m3: "Minimalistisch", m3d: "Schone en strakke ruimtes.",
        m4: "Onzichtbare Bron", m4d: "Museum-kwaliteit wall-wash.",
        m5: "Uniform", m5d: "Balans voor magazijnen.",
        m6: "Gelijke Temp", m6d: "Perfecte consistentie."
      },
      cases: {
        title: "Cases",
        subtitle: "Wereldwijde Voetafdruk",
        serving: "Bedient meer dan 1.000 ketens",
        commercial: "Commerciële Retail", commDesc: "Partner van Walmart en ALDI.",
        education: "Educatie", eduDesc: "Oogbeschermende verlichting.",
        outdoor: "Buiten", outDesc: "Grote landschapsprojecten."
      },
      pitch: {
        title: "Scripts",
        subtitle: "Verkoopargumenten",
        ksp: "USP's",
        k1: "20 Jaar Ervaring", k1d: "Stadion leverancier.",
        k2: "IoT Klaar", k2d: "30% Energiebesparing.",
        k3: "OmniHue™ Tech", k3d: "CRI 95+ Precisie."
      },
      lead: {
        title: "Leads",
        subtitle: "Beursinfo",
        company: "Bedrijf", contact: "Contact", country: "Land", whatsapp: "WhatsApp", email: "E-mail", interest: "Interesse", priority: "Prioriteit", priorityH: "Hoog", priorityM: "Gemiddeld", priorityL: "Laag", notes: "Notities", submit: "Senden", history: "Historie", noLeads: "Geen leads.", tipTitle: "Tip", tipDesc: "Vraag om WhatsApp voor Dubai-klanten."
      }
    }
  },
  pt: {
    brandName: "SANBEN TECH",
    subTitle: "Tecnologia de Iluminação",
    capture: "Captura",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "Introdução",
        subtitle: "Aprovado por Marcos Nacionais",
        p1: "Fundada em 2005, 20 anos de experiência em iluminação de retalho.",
        p2: "Como fornecedor oficial do estádio 'Ninho de Pássaro', a SANBEN equipa cadeias globais com padrões nacionais. Contamos com 4 bases de produção e 20+ distribuidores.",
        feat1: "Empresa de Alta Tecnologia Nacional",
        feat2: "Fornecedor Oficial do Estádi o 'Ninho de Pássaro'",
        feat3: "Empresa de Tecnologia Nacional",
        stat1: "Patentes", stat2: "Utilidade", stat3: "Design", stat4: "Bases",
        network: "20+ Distribuidores", lab: "Lab Padrão",
        bases: { sh: "Sede Xangai", gd: "Base Guangdong", fj: "Base Fuji an", js: "Base Jiangsu" }
      },
      strategy: {
        title: "Estratégia",
        subtitle: "Crescimento Global 2026",
        strategyTitle: "Posicionamento",
        strategyVision: "Especialista em soluções inteligentes de retalho",
        strategyDesc: "2026 marca a transição para o crescimento global.",
        valueTitle: "4 Propostas de Valor",
        v1: "Fiabilidade de Estádio", v1d: "Padrões elevados para projetos complexos.",
        v2: "Inteligência de Plataforma", v2d: "Cloud V2.0 e tecnologia OmniHue™.",
        v3: "Personalização", v3d: "Compreensão profunda de cada loja.",
        v4: "Qualidade Global", v4d: "Designs premiados internacionalmente."
      },
      intelligence: {
        title: "Tecnologia",
        subtitle: "IoT de Iluminação",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Monitorização ao vivo, rede Mesh sem fios",
        hueTitle: "OmniHue™ Espectro Total",
        hueDesc: "CRI Ra ≥ 95. Luz natural contínua.",
        colors: "Fidelidade de Cores",
        saving: "Economia de Energia",
        cloudTitle: "Funções Cloud",
        cloudFeat1: "Descentralizado", cloudFeat2: "Multi-Admin", cloudFeat3: "Anti-Interferência", cloudFeat4: "Fácil",
        productTitle: "Série de Projetores de Ângulo Ultra-Largo",
        productDesc: "Vencedor de vários prémios internacionais. Redefinindo a iluminação arquitetónica.",
        awards: ["PRÉMIO ALIGHTING 2024", "FINALISTA IDSA 2024", "AMERICAN GOOD DESIGN", "FRENCH DESIGN AWARD"]
      },
      solutions: {
        title: "Soluções",
        subtitle: "Modelos de Retalho",
        designTitle: "Design & Planeamento",
        designDesc: "Planos de iluminação à medida.",
        delivered: "Projetos",
        experts: "Especialistas",
        m1: "Alto Contraste", m1d: "Foco nos produtos.",
        m2: "Híbrido Linear", m2d: "Combina linhas e foco.",
        m3: "Minimalista", m3d: "Espaços limpos e ordenados.",
        m4: "Fonte Invisível", m4d: "Banhado de parede nível museu.",
        m5: "Uniforme", m5d: "Equilibrado para armazéns.",
        m6: "Temp. Unificada", m6d: "Consistência perfeita."
      },
      cases: {
        title: "Casos de Sucesso",
        subtitle: "Pegada Global",
        serving: "Servindo mais de 1.000 cadeias",
        commercial: "Retalho Comercial", commDesc: "Parceiro da Walmart e ALDI.",
        education: "Educação", eduDesc: "Iluminação escolar protetora.",
        outdoor: "Exterior", outDesc: "Grandes projetos de paisagismo."
      },
      pitch: {
        title: "Roteiros",
        subtitle: "Pontos de Venda",
        ksp: "USP's",
        k1: "20 Anos de História", k1d: "Fornecedor de estádios nacionais.",
        k2: "Pronto para IoT", k2d: "30% de economia energética.",
        k3: "Tecno OmniHue™", k3d: "Precisão CRI 95+."
      },
      lead: {
        title: "Captura",
        subtitle: "Info de Feira",
        company: "Empresa", contact: "Contacto", country: "País", whatsapp: "WhatsApp", email: "E-mail", interest: "Interesse", priority: "Prioridade", priorityH: "Alta", priorityM: "Média", priorityL: "Baixa", notes: "Notas", submit: "Enviar", history: "Histórico", noLeads: "Sem leads.", tipTitle: "Dica", tipDesc: "Peça WhatsApp para clientes de Dubai."
      }
    }
  },
  ja: {
    brandName: "三本照明科技",
    subTitle: "照明技術",
    capture: "顧客登録",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "企业紹介",
        subtitle: "国家プロジェクトの実绩",
        p1: "2005年设立、小売照明分野で20年の専门知识。",
        p2: "「鸟の巣」公式サプライヤーとして、三本照明は国家级の品质でグローバルチェーンを支援します。4つの拠点と20以上の贩売网を保有。",
        feat1: "国家ハイテク企业",
        feat2: "「鸟の巣」スタジアム公式サプライヤー",
        feat3: "国家技术型中小企业",
        stat1: "発明天许", stat2: "実用新案", stat3: "デザイン", stat4: "拠点",
        network: "20+ 贩売网", lab: "国家标准ラボ",
        bases: { sh: "上海本部", gd: "広东拠点", fj: "福建拠点", js: "江苏拠点" }
      },
      strategy: {
        title: "ブランド戦略",
        subtitle: "2026年グローバル成长计画",
        strategyTitle: "戦略的ポジショニング",
        strategyVision: "スマート小売照明の国际的エキスパート",
        strategyDesc: "2026年はグローバル成长への転换点です。",
        valueTitle: "4つの核心的価値",
        v1: "国家级の信頼性", v1d: "複雑な大型プロジェクトへの対応力。",
        v2: "プラットフォーム知能", v2d: "Cloud V2.0とOmniHue™技術。",
        v3: "パートナー型カスタム", v3d: "店舗ごとの最適解を提案。",
        v4: "グローバル品質", v4d: "国際的なデザイン賞を受賞。"
      },
      intelligence: {
        title: "スマート技術",
        subtitle: "照明IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "リアルタイム監視、無線Mesh",
        hueTitle: "OmniHue™ 全スペクトル",
        hueDesc: "CRI Ra ≥ 95。自然光に近い光。",
        colors: "色彩再現性",
        saving: "省エネ効果",
        cloudTitle: "クラウド機能",
        cloudFeat1: "分散型", cloudFeat2: "マルチ管理", cloudFeat3: "耐干渉", cloudFeat4: "簡単設定",
        productTitle: "超広角シリーズ・スポットライト",
        productDesc: "複数の国際的な賞を受賞。現代建築の照明体験を再定義します。",
        awards: ["2024 アラジン・ランプ賞", "2024 IDSAファイナリスト", "2024 AMERICAN GOOD DESIGN", "2024 フランス・デザイン賞"]
      },
      solutions: {
        title: "商業提案",
        subtitle: "小売照明モデル",
        designTitle: "企画とデザイン",
        designDesc: "プロジェクトごとの照明計画。",
        delivered: "導入実績",
        experts: "専門家チーム",
        m1: "高コントラスト", m1d: "商品を強調。",
        m2: "リニアハイブリッド", m2d: "ラインとスポットの融合。",
        m3: "ミニマリスト", m3d: "清潔感のある空間。",
        m4: "不可視光源", m4d: "美術館級のウォールウォッシュ。",
        m5: "均一照度", m5d: "倉庫型店舗に最適。",
        m6: "色温度統一", m6d: "完璧な一貫性。"
      },
      cases: {
        title: "導入事例",
        subtitle: "グローバルな足跡",
        serving: "世界1,000以上のチェーンに導入",
        commercial: "商業小売", commDesc: "ウォールマート、アルディ等の提携先。",
        education: "教育空間", eduDesc: "目に優しい教室照明。",
        outdoor: "屋外景観", outDesc: "大規模な都市景観プロジェクト。"
      },
      pitch: {
        title: "展示会台本",
        subtitle: "セールスポイント",
        ksp: "USP",
        k1: "20年の伝統", k1d: "スタジアム級の品質。",
        k2: "IoT対応", k2d: "30%の省エネを実現。",
        k3: "OmniHue™技術", k3d: "CRI 95+の精度。"
      },
      lead: {
        title: "顧客登録",
        subtitle: "展示会情報",
        company: "会社名", contact: "担当者名", country: "国", whatsapp: "WhatsApp", email: "メール", interest: "関心分野", priority: "優先度", priorityH: "高", priorityM: "中", priorityL: "低", notes: "備考", submit: "登録", history: "登録履歴", noLeads: "登録なし。", tipTitle: "ヒント", tipDesc: "ドバイの顧客はWhatsAppを優先。"
      }
    }
  },
  ko: {
    brandName: "산본 조명",
    subTitle: "조명 기술",
    capture: "고객 등록",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.",
    sections: {
      brand: {
        title: "기업 소개",
        subtitle: "국가 랜드마크 실적",
        p1: "2005년 설립, 리테일 조명 분야 20년 전문성.",
        p2: "국가 경기장 '냐오차오' 공식 공급업체인 산본 조명은 국가급 품질로 글로벌 체인을 지원합니다. 4개 생산 기지와 20개 이상의 유통망을 보유하고 있습니다.",
        feat1: "국가 하이테크 기업",
        feat2: "국가 경기장 '냐오차오' 공식 공급업체",
        feat3: "국가 기술형 중소기업",
        stat1: "발명 특허", stat2: "실용신안", stat3: "디자인", stat4: "기지",
        network: "20+ 유통망", lab: "국가 표준 랩",
        bases: { sh: "상하이 본사", gd: "광둥 기지", fj: "푸젠 기지", js: "장쑤 기지" }
      },
      strategy: {
        title: "브랜드 전략",
        subtitle: "2026 글로벌 성장 계획",
        strategyTitle: "전략적 포지셔닝",
        strategyVision: "스마트 리테일 조명 국제 전문가",
        strategyDesc: "2026년은 글로벌 성장을 향한 도약의 해입니다.",
        valueTitle: "4대 핵심 가치",
        v1: "국가급 신뢰성", v1d: "대형 복합 프로젝트 수행 능력.",
        v2: "플랫폼 지능", v2d: "Cloud V2.0 및 OmniHue™ 기술.",
        v3: "파트너형 맞춤", v3d: "매장별 맞춤형 솔루션 제공.",
        v4: "글로벌 품질", v4d: "국제 디자인 어워드 수상."
      },
      intelligence: {
        title: "스마트 기술",
        subtitle: "조명 IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "실시간 모니터링, 무선 Mesh",
        hueTitle: "OmniHue™ 풀스펙트럼",
        hueDesc: "CRI Ra ≥ 95. 자연광에 근접.",
        colors: "색채 재현력",
        saving: "에너지 절감",
        cloudTitle: "클라우드 기능",
        cloudFeat1: "분산 구조", cloudFeat2: "멀티 관리", cloudFeat3: "간섭 방지", cloudFeat4: "간편 설정",
        productTitle: "초광각 시리즈 스포트라이트",
        productDesc: "다수의 국제 어워드 수상. 현대 건축의 조명 경험을 새롭게 정의합니다.",
        awards: ["2024 알라딘 램프상", "2024 IDSA 파이널리스트", "2024 AMERICAN GOOD DESIGN", "2024 프랑스 디자인 어워드"]
      },
      solutions: {
        title: "상업 솔루션",
        subtitle: "리테일 모델",
        designTitle: "기획 및 디자인",
        designDesc: "프로젝트별 조명 계획.",
        delivered: "수행 프로젝트",
        experts: "디자인 전문가",
        m1: "고대비", m1d: "상품 강조.",
        m2: "리니어 하이브리드", m2d: "라인과 스포트의 결합.",
        m3: "미니멀리즘", m3d: "깔끔한 공간 구성.",
        m4: "비가시 광원", m4d: "박물관급 월 워시.",
        m5: "균일 조도", m5d: "창고형 매장 최적화.",
        m6: "색온도 통일", m6d: "완벽한 일관성."
      },
      cases: {
        title: "기업 사례",
        subtitle: "글로벌 발자취",
        serving: "전 세계 1,000개 이상 체인 공급",
        commercial: "상업 리테일", commDesc: "월마트, 알디 등 파트너.",
        education: "교육 공간", eduDesc: "시력 보호 교실 조명.",
        outdoor: "실외 경관", outDesc: "대규모 도시 경관 프로젝트."
      },
      pitch: {
        title: "전시회 스크립트",
        subtitle: "핵심 셀링 포인트",
        ksp: "USP",
        k1: "20년의 전통", k1d: "경기장급 품질 공급.",
        k2: "IoT 대응", k2d: "30% 에너지 절감.",
        k3: "OmniHue™ 기술", k3d: "CRI 95+ 정밀도."
      },
      lead: {
        title: "고객 등록",
        subtitle: "전시회 정보",
        company: "회사명", contact: "담당자명", country: "국가", whatsapp: "WhatsApp", email: "이메일", interest: "관심 분야", priority: "우선순위", priorityH: "높음", priorityM: "중간", priorityL: "낮음", notes: "비고", submit: "제출", history: "등록 내역", noLeads: "내역 없음.", tipTitle: "팁", tipDesc: "두바이 고객은 WhatsApp을 우선 기록."
      }
    }
  }
};

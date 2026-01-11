
import { Language } from './types.ts';

// Added missing languages (ar, fr, es, nl, pt, ja, ko) to satisfy the Language type requirement
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
        v2desc: "集成物联网、云计算与大数据，为商业应用提供全面的智慧照明解决方案。系统基于专为照明开发的蓝牙Mesh通讯协议，实现全无线架构，简化运维。",
        hueTitle: "OmniHue™ 全光谱色彩系统",
        hueDesc: "基于RGBWC五通道技术，输出无限接近自然光的连续全光谱。CRI Ra ≥ 95。",
        colors: "极致色彩还原",
        saving: "线材与人工成本节约",
        cloudTitle: "云端智控特性",
        cloudFeat1: "去中心化结构", cloudFeat2: "多权限管理", cloudFeat3: "智能跳频抗干扰", cloudFeat4: "无需改线对码",
        productTitle: "核心黑科技：超广角系列射灯",
        productDesc: "极具透视感和宽阔光束表现力的现代建筑光效技术。横扫阿拉丁神灯奖、美国IDSA、GOOD DESIGN等国际权威荣誉。",
        awards: ["2024 阿拉丁神灯奖 - 全国优秀产品", "2024 美国 IDSA 决赛入围奖", "2024 美国 GOOD DESIGN 银奖", "2024 法国设计奖 (FRENCH DESIGN AWARD)"]
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
    brandName: "SANBEN LIGHTING",
    subTitle: "SMART TECHNOLOGY",
    capture: "Capture",
    footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.",
    sections: {
      brand: {
        title: "Introduction",
        subtitle: "National Landmark Endorsement",
        p1: "Founded in 2005, 20 years of expert depth in retail lighting.",
        p2: "As the officially designated smart lighting equipment supplier for the 'Bird's Nest' National Stadium, SANBEN empowers top-tier global chains with national-grade standards. With 4 production bases and 20+ service networks, we serve over 1,000+ brands worldwide.",
        feat1: "National High-Tech Enterprise (10 Years)",
        feat2: "Official Supplier to the 'Bird's Nest' Stadium",
        feat3: "National Science & Tech Enterprise",
        stat1: "Invention Patents",
        stat2: "Utility Patents",
        stat3: "Design Patents",
        stat4: "Production Bases",
        network: "20+ National Service Network",
        lab: "National Standard Opto-Lab",
        bases: { sh: "Shanghai HQ", gd: "Guangdong Base", fj: "Fujian Base", js: "Jiangsu Base" }
      },
      strategy: {
        title: "Brand Strategy",
        subtitle: "2026 Global Growth Plan",
        strategyTitle: "Strategic Positioning",
        strategyVision: "Intelligent Retail Solutions with International Vision",
        strategyDesc: "A strategic transition from 'Project Breakthrough' to 'Global Scale Growth' by 2026.",
        valueTitle: "4 Core Value Propositions",
        v1: "Bird's Nest Reliability", v1d: "Highest standards for complex national landmark projects.",
        v2: "Platform Intelligence", v2d: "Driven by Cloud V2.0 and OmniHue™ color science.",
        v3: "Partnership Customization", v3d: "One Store, One Policy bespoke retail strategies.",
        v4: "Global Design Standard", v4d: "International award-winning aesthetics and quality."
      },
      intelligence: {
        title: "Smart Tech",
        subtitle: "Intelligence IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Integrates IoT, Cloud computing, and Big Data for commercial applications. Built on a proprietary Bluetooth Mesh protocol specifically for professional lighting.",
        hueTitle: "OmniHue™ Full Spectrum",
        hueDesc: "RGBWC 5-channel technology delivering natural light continuum. CRI Ra ≥ 95.",
        colors: "Color Fidelity",
        saving: "Infrastructure Saving",
        cloudTitle: "Cloud Ecosystem Features",
        cloudFeat1: "Decentralized Architecture", cloudFeat2: "Multi-Admin Management", cloudFeat3: "Smart Anti-Interference", cloudFeat4: "Zero-Wiring Configuration",
        productTitle: "Ultra-Wide Angle Spotlight Series",
        productDesc: "Redefining modern architectural lighting with perspective and broad beam performance. Recipient of major international design honors.",
        awards: ["2024 ALIGHTING AWARD - EXCELLENT PRODUCT", "2024 IDSA - FEATURED FINALIST", "2024 AMERICAN GOOD DESIGN SILVER", "2024 FRENCH DESIGN AWARD"]
      },
      solutions: {
        title: "Retail Solutions",
        subtitle: "Commercial Models",
        designTitle: "Consultancy & Planning",
        designDesc: "We provide comprehensive lighting planning, not just fixtures.",
        delivered: "Delivered Projects",
        experts: "Expert Design Team",
        m1: "High Contrast", m1d: "Emphasis on product textures and premium luxury.",
        m2: "Linear Hybrid", m2d: "Combines focus with architectural linear flow.",
        m3: "Pure Minimalist", m3d: "Reduces visual noise for clean, orderly spaces.",
        m4: "Invisible Source", m4d: "Museum-grade wall-wash and hidden schemes.",
        m5: "Uniform Ambient", m5d: "Balanced for large-scale membership warehouses.",
        m6: "Color Consistency", m6d: "Full-field temperature unity for perfect branding."
      },
      cases: {
        title: "Success Stories",
        subtitle: "Global Footprint",
        serving: "Serving Over 1,000 Global Chain Brands",
        commercial: "Commercial Retail", commDesc: "Partner of Walmart, Sam's Club, and Aldi.",
        education: "Educational Spaces", eduDesc: "Eye-protection and auditorium specialized lighting.",
        outdoor: "Urban Landscape", outDesc: "Large scale landmark lighting projects."
      },
      pitch: {
        title: "Pitch Deck",
        subtitle: "Core Selling Points",
        ksp: "Unique Selling Points",
        k1: "20 Years Pedigree", k1d: "Stadium supplier trusted by 1,000+ brands.",
        k2: "IoT Ready", k2d: "30% Energy savings with wireless Mesh tech.",
        k3: "OmniHue™ Tech", k3d: "Museum-grade color precision (CRI 95+)."
      },
      lead: {
        title: "Lead Capture",
        subtitle: "Exhibition Registration",
        company: "Company Name", contact: "Contact Name", country: "Country", whatsapp: "WhatsApp / Mobile", email: "Email Address", interest: "Area of Interest", priority: "Lead Intensity", priorityH: "🔥 High (Urgent Quote)", priorityM: "⚡ Medium (Post-Show Follow-up)", priorityL: "❄️ Low (Future Interest)", notes: "Remarks", submit: "Submit Information", history: "Capture History", noLeads: "No records yet.", tipTitle: "Exhibition Tip", tipDesc: "Collect business cards and record specific product interests. Prioritize WhatsApp for Middle East clients."
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
        p2: "Als offizieller Lieferant des 'Vogelnest'-Stadions stattet SANBEN globale Ketten mit nationalem Qualitätsstandard aus.",
        feat1: "Nationales High-Tech-Unternehmen",
        feat2: "Offizieller Lieferant des 'Vogelnest'-Stadions",
        feat3: "Nationales Technik-Unternehmen",
        stat1: "Patente", stat2: "Gebrauchsmuster", stat3: "Design", stat4: "Basen",
        network: "20+ Händler", lab: "Labor",
        bases: { sh: "Shanghai HQ", gd: "Guangdong", fj: "Fujian", js: "Jiangsu" }
      },
      strategy: {
        title: "Strategie",
        subtitle: "Globales Wachstum 2026",
        strategyTitle: "Positionierung",
        strategyVision: "Smarte Einzelhandelslösungen",
        strategyDesc: "Transition zum globalen Wachstum bis 2026.",
        valueTitle: "4 Kernwerte",
        v1: "Zuverlässigkeit", v1d: "Stadion-Standard Qualität.",
        v2: "Intelligenz", v2d: "Cloud V2.0 & OmniHue™.",
        v3: "Anpassung", v3d: "Bespoke Konzepte für Ketten.",
        v4: "Globale Qualität", v4d: "Prämierte Designs."
      },
      intelligence: {
        title: "Smarte Tech",
        subtitle: "Licht-IoT",
        v2: "SANBEN Cloud V2.0",
        v2desc: "Vollständige Wireless-Architektur basierend auf Bluetooth Mesh.",
        hueTitle: "OmniHue™ Vollspektrum",
        hueDesc: "CRI Ra ≥ 95. Natürliches Lichtkontinuum.",
        colors: "Farbtreue",
        saving: "Kostenersparnis",
        cloudTitle: "Cloud-Features",
        cloudFeat1: "Dezentral", cloudFeat2: "Multi-Admin", cloudFeat3: "Antistörfest", cloudFeat4: "Einfach",
        productTitle: "Ultraweitwinkel-Strahler",
        productDesc: "Preisträger internationaler Auszeichnungen wie IDSA und GOOD DESIGN.",
        awards: ["2024 ALIGHTING AWARD", "2024 IDSA FINALIST", "2024 GOOD DESIGN", "2024 FRENCH DESIGN AWARD"]
      },
      solutions: {
        title: "Lösungen",
        subtitle: "Retail Modelle",
        designTitle: "Planung",
        designDesc: "Maßgeschneiderte Lichtpläne.",
        delivered: "Projekte",
        experts: "Experten",
        m1: "Hochkontrast", m1d: "Fokus auf Waren.",
        m2: "Lineare Hybrid", m2d: "Fluss und Fokus.",
        m3: "Minimalistisch", m3d: "Sauberkeit.",
        m4: "Unsichtbar", m4d: "Museum-Standard.",
        m5: "Gleichmäßig", m5d: "Lagerhäuser.",
        m6: "Einheitlich", m6d: "Konsistenz."
      },
      cases: {
        title: "Referenzen",
        subtitle: "Global",
        serving: "Über 1.000 Ketten weltweit",
        commercial: "Einzelhandel", commDesc: "Walmart, Sam's Club Partner.",
        education: "Bildung", eduDesc: "Schutzbeleuchtung.",
        outdoor: "Außenbereich", outDesc: "Stadtprojekte."
      },
      pitch: {
        title: "Scripts",
        subtitle: "Argumente",
        ksp: "USP",
        k1: "20 Jahre", k1d: "Stadion-Lieferant.",
        k2: "IoT Ready", k2d: "30% Ersparnis.",
        k3: "OmniHue™", k3d: "CRI 95+ Genauigkeit."
      },
      lead: {
        title: "Erfassung",
        subtitle: "Messe-Info",
        company: "Firma", contact: "Kontakt", country: "Land", whatsapp: "WhatsApp", email: "E-Mail", interest: "Interesse", priority: "Priorität", priorityH: "Hoch", priorityM: "Mittel", priorityL: "Niedrig", notes: "Notizen", submit: "Senden", history: "Historie", noLeads: "Keine Leads.", tipTitle: "Tipp", tipDesc: "WhatsApp für Dubai erfragen."
      }
    }
  },
  // Fallback structures for missing languages to satisfy TypeScript Record<Language, any>
  ar: { brandName: "سانبن للإضاءة", subTitle: "تكنولوجيا ذكية", capture: "تسجيل", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} },
  fr: { brandName: "SANBEN LIGHTING", subTitle: "TECH INTELLIGENTE", capture: "Capture", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} },
  es: { brandName: "SANBEN LIGHTING", subTitle: "TECNOLOGÍA INTELIGENTE", capture: "Captura", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} },
  nl: { brandName: "SANBEN LIGHTING", subTitle: "SLIMME TECH", capture: "Leads", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} },
  pt: { brandName: "SANBEN LIGHTING", subTitle: "TECNOLOGIA INTELIGENTE", capture: "Captura", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} },
  ja: { brandName: "三本照明", subTitle: "スマート技術", capture: "顧客登録", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} },
  ko: { brandName: "산본 조명", subTitle: "스마트 기술", capture: "고객 등록", footer: "© 2025 SHANGHAI SANBEN LIGHTING TECHNOLOGY CO., LTD.", sections: {} }
};

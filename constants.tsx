
import { NavItem, SectionId } from './types.ts';

export const NAVIGATION_ITEMS: NavItem[] = [
  { 
    id: SectionId.Overview, 
    label: { 
      zh: '企业介绍', en: 'Introduction', de: 'Einleitung', ar: 'مقدمة', 
      fr: 'Présentation', es: 'Introducción', nl: 'Introductie', pt: 'Introdução', ja: '企業紹介', ko: '기업 소개' 
    } 
  },
  { 
    id: SectionId.Strategy, 
    label: { 
      zh: '品牌战略', en: 'Strategy', de: 'Strategie', ar: 'إستراتيجية', 
      fr: 'Stratégie', es: 'Estrategia', nl: 'Strategie', pt: 'Estratégia', ja: 'ブランド戦略', ko: '브랜드 전략' 
    } 
  },
  { 
    id: SectionId.Intelligence, 
    label: { 
      zh: '智慧照明', en: 'Smart Tech', de: 'Smarte Tech', ar: 'تكنولوجيا ذكية', 
      fr: 'Tech Intelligente', es: 'Tecnología', nl: 'Slimme Tech', pt: 'Tecnologia', ja: 'スマート技術', ko: '스마트 기술' 
    } 
  },
  { 
    id: SectionId.Solutions, 
    label: { 
      zh: '商业方案', en: 'Solutions', de: 'Lösungen', ar: 'حلول', 
      fr: 'Solutions', es: 'Soluciones', nl: 'Oplossingen', pt: 'Soluções', ja: '商業提案', ko: '상업 솔루션' 
    } 
  },
  { 
    id: SectionId.Cases, 
    label: { 
      zh: '企业案例', en: 'Cases', de: 'Fälle', ar: 'حالات', 
      fr: 'Cas', es: 'Casos', nl: 'Cases', pt: 'Casos', ja: '企業事例', ko: '기업 사례' 
    } 
  },
  { 
    id: SectionId.Pitch, 
    label: { 
      zh: '展会话术', en: 'Pitch', de: 'Skripts', ar: 'نصوص', 
      fr: 'Pitch', es: 'Guiones', nl: 'Scripts', pt: 'Roteiros', ja: '展示会台本', ko: '전시회 스크립트' 
    } 
  },
  { 
    id: SectionId.LeadForm, 
    label: { 
      zh: '客户登记', en: 'Leads', de: 'Kontakte', ar: 'تسجيل', 
      fr: 'Leads', es: 'Captura', nl: 'Leads', pt: 'Captura', ja: '顧客登録', ko: '고객 등록' 
    } 
  },
];

export const CLIENT_LOGOS = [
  "Walmart", "Carrefour", "RT-Mart", "Aldi", "Metro", "Lotte", "Tesco", "Yonghui", "Hema Fresh"
];

export const LANGUAGES = [
  { id: 'zh', label: '中文' },
  { id: 'en', label: 'English' },
  { id: 'de', label: 'Deutsch' },
  { id: 'ar', label: 'العربية' },
  { id: 'fr', label: 'Français' },
  { id: 'es', label: 'Español' },
  { id: 'nl', label: 'Nederlands' },
  { id: 'pt', label: 'Português' },
  { id: 'ja', label: '日本語' },
  { id: 'ko', label: '한국어' },
];

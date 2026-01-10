
import { NavItem, SectionId } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { 
    id: SectionId.Overview, 
    label: { zh: '企业品牌', en: 'Brand Identity', de: 'Markenidentität', ar: 'هوية العلامة التجارية' } 
  },
  { 
    id: SectionId.Intelligence, 
    label: { zh: '智慧照明', en: 'Smart Tech', de: 'Smarte Technik', ar: 'التكنولوجيا الذكية' } 
  },
  { 
    id: SectionId.Solutions, 
    label: { zh: '商场方案', en: 'Retail Solutions', de: 'Einzelhandelslösungen', ar: 'حلول التجزئة' } 
  },
  { 
    id: SectionId.Cases, 
    label: { zh: '企业案例', en: 'Project Cases', de: 'Projektfälle', ar: 'حالات المشروع' } 
  },
  { 
    id: SectionId.Pitch, 
    label: { zh: '展会话术', en: 'Pitch Scripts', de: 'Verkaufsgespräche', ar: 'نصوص العرض' } 
  },
  { 
    id: SectionId.LeadForm, 
    label: { zh: '客户登记', en: 'Lead Capture', de: 'Lead-Erfassung', ar: 'تسجيل العملاء' } 
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
];

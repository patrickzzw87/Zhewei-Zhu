
export enum SectionId {
  Overview = 'overview',
  Intelligence = 'intelligence',
  Solutions = 'solutions',
  Cases = 'cases',
  Pitch = 'pitch',
  LeadForm = 'leadform'
}

export type Language = 'zh' | 'en' | 'de' | 'ar';

export interface CustomerLead {
  id: string;
  companyName: string;
  contactName: string;
  country: string;
  whatsapp: string;
  email: string;
  interest: 'High' | 'Medium' | 'Low';
  projectType: string[];
  notes: string;
  timestamp: string;
}

export interface NavItem {
  id: SectionId;
  label: { [key in Language]: string };
}

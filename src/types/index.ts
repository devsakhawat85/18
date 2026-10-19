export type Page = 'home' | 'offerings' | 'about' | 'clinic-owners' | 'faq' | 'contact' | 'privacy' | 'terms';

export type PillarCategory = 'anti-aging' | 'wellness-optimization' | 'longevity';

export interface Modality {
  id: string;
  name: string;
  category: PillarCategory;
  categoryName: string;
  shortDescription: string;
  clinicalFocus: string;
  typicalCadence: string;
  clinicValue: string;
  keyBenefits: string[];
}

export interface Pillar {
  id: PillarCategory;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  modalities: string[];
  clinicalSignificance: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Partnership & Capital' | 'Exit & Retirement' | 'Clinical Operations' | 'Client Experience';
}

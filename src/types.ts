export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'growth' | 'operation' | 'management' | 'cost';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  span?: string;
  details?: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number | 'contact' | 'custom';
  priceLabel: string;
  periodLabel: string;
  badge?: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InscriptionFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  selectedPlan: string;
  notes: string;
}

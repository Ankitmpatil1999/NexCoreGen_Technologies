export interface ProductPipelineItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: 'Flagship Live' | 'Private Alpha' | 'In Development' | 'R&D Concept';
  statusColor: 'emerald' | 'cyan' | 'purple' | 'amber';
  features: string[];
  metrics: string;
  targetMarket: string;
  iconName: string;
}

export interface PitchDeckSlide {
  id: number;
  slideNumber: string;
  title: string;
  subtitle: string;
  category: string;
  bullets: string[];
  highlightMetric: {
    value: string;
    label: string;
  };
  takeaway: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  priceYr: string;
  period: string;
  description: string;
  memberCapacity: string;
  hardwareSupport: string;
  features: string[];
  isPopular?: boolean;
}

export interface LeadSubmission {
  name: string;
  email: string;
  organization: string;
  type: 'investor' | 'enterprise' | 'franchise' | 'partner';
  message: string;
}

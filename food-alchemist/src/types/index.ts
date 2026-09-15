export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  timeframe: string;
  techHighlights: string[];
  badge?: string;
  processSteps?: { step: number; title: string; desc: string }[];
  keyBenefits?: string[];
  heroImage?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  examples: string[];
  keyChallengesSolved: string[];
  image: string;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  icon: string;
  summary: string;
  details: string;
  deliverable: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  projectOverview: string;
  theChallenge: {
    overview: string;
    items: string[];
    subnote?: string;
  };
  rdApproach: {
    overview: string;
    cycleSteps?: string[];
    timeline?: string;
  };
  technicalFocusAreas: string[];
  keyLearning: {
    main: string;
    quote?: string;
  };
  outcome: {
    summary: string;
    items: string[];
  };
  tagline?: string;
  confidentialityNote?: string;
  image: string;
  metric?: string;
  client?: string;
  results?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface TimelineMilestone {
  year: string;
  stage: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirements: string[];
  budget: string;
  message: string;
}

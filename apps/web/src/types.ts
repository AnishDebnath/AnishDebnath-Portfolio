export type PageRoute = 
  | 'coming-soon'
  | 'home'
  | 'about'
  | 'resume'
  | 'case-study'
  | 'case-study-detail'
  | 'journal'
  | 'journal-detail'
  | 'contact'
  | 'privacy-policy'
  | 'terms-of-service'
  | '404';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  subtitle: string;
  category: 'UI/UX' | 'Web Design' | 'Branding' | 'Mobile Apps';
  year: string;
  date?: string;
  iconBg?: string;
  featured: boolean;
  coverImage: string;
  heroImage: string;
  middleImage?: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  solution: string;
  tags?: string[];
  overlayDescription?: string;
  solutionBullets?: string[];
  resultsSubtitle?: string;
  impactMetrics: { label: string; value: string }[];
  services: string[];
  liveUrl?: string;
  nextProjectId?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    heading: string;
    body: string[];
    quote?: string;
    codeSnippet?: string;
  }[];
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

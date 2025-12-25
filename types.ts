export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
}

export interface ServiceItem {
  iconClass: string;
  title: string;
  description: string;
  features?: string[];
}

export interface PricingTier {
  title: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface Project {
  title: string;
  description: string;
  iconClass: string;
  stats?: { label: string; value: string }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  iconClass: string;
}

export interface DetailedProject {
  title: string;
  description: string;
  iconClass: string;
}

export enum PageRoutes {
  HOME = '/',
  SECURITY = '/security-services',
  SERVICES = '/services',
  TOOLS = '/tools', // Cyber Warfare (Default)
  TOOLS_SEO = '/tools/seo',
  TOOLS_TRENDS = '/tools/trends',
  TOOLS_BUSINESS = '/tools/business',
  TOOLS_SOCIAL = '/tools/social',
  TOOLS_CONTENT = '/tools/content',
  TOOLS_NEWS = '/tools/news',
  ABOUT = '/about',
  CONTACT = '/contact',
  BLOG = '/blog',
  BLOG_POST = '/blog/:id',
  DMCA = '/dmca',
  PRIVACY = '/privacy',
  TERMS = '/terms',
}
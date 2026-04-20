export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  link?: string;
  year: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export interface TechCapability {
  name: string;
  level: number; // 0-100
  category: 'Core' | 'AI/ML' | 'Infrastructure' | 'Frontend';
  description: string;
  icons: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  date: string;
  location: string;
  description: string;
}

export enum RoutePath {
  HOME = '/',
  PROJECTS = '/projects',
  ARTICLES = '/articles',
  CONTACT = '/contact',
}
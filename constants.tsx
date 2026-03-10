import { Project, Article, TechCapability } from './types';

export const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'LOGS', path: '/articles' },
  { name: 'COMM', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'RETENTION AI',
    category: 'AI & Machine Learning',
    tags: ['Next.js', 'FastAPI', 'Gemini AI', 'Scikit-learn', 'Docker'],
    description: 'HR Assistant app predicting churn probability using supervised ML and generating retention plans via GenAI.',
    problem: 'HR teams lack data-driven insights to identify at-risk employees and formulate personalized retention strategies.',
    solution: 'Integrated a Scikit-learn churn model with Gemini 2.5 Flash for role-based retention plans, wrapped in a secure FastAPI architecture.',
    impact: 'Streamlined HR decision-making with predictive analytics and automated actionable insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: '2',
    title: 'EMOTION SENSE',
    category: 'Computer Vision',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
    description: 'Real-time computer vision system capable of detecting and classifying human emotions from live video feeds.',
    problem: 'Traditional interaction systems lack emotional intelligence and responsiveness to user sentiment.',
    solution: 'Engineered a Convolutional Neural Network (CNN) for facial landmark recognition and emotion classification (Happy, Sad, Angry).',
    impact: 'Achieved high accuracy in real-time facial expression analysis for potential use in UX testing and accessibility.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2834&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: '3',
    title: 'WILD OASIS ADMIN',
    category: 'SaaS Dashboard',
    tags: ['React', 'Supabase', 'React Query', 'Styled Components'],
    description: 'Internal hotel management system with real-time data caching and optimistic UI updates.',
    problem: 'Hotel staff needed a robust internal tool to manage bookings, cabins, and guests efficiently.',
    solution: 'Built a full-featured dashboard with complex filtering, real-time stats, and a custom UI library using Compound Component Pattern.',
    impact: 'Optimized daily operations with seamless data synchronization and intuitive data visualization.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2574&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: '4',
    title: 'WILD OASIS BOOKING',
    category: 'Consumer Platform',
    tags: ['Next.js', 'Tailwind CSS', 'Auth.js', 'Server Components'],
    description: 'SEO-optimized customer facing booking platform for luxury cabin rentals.',
    problem: 'Customers required a fast, secure, and user-friendly platform to book stays with real-time availability.',
    solution: 'Engineered using Next.js Server Components for performance, integrated Google Auth, and seamless booking flows.',
    impact: 'Delivered a high-performance, accessible booking experience with real-time database synchronization.',
    image: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2667&auto=format&fit=crop',
    year: '2023',
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Bridging Computer Vision and Web Interfaces',
    excerpt: 'How to efficiently stream processed OpenCV video frames to a React frontend via WebSockets.',
    category: 'Engineering',
    readTime: '6 min',
    date: 'OCT 2024',
  },
  {
    id: '2',
    title: 'Optimistic UI in Hotel Management Systems',
    excerpt: 'Leveraging React Query to create seamless user experiences in data-heavy internal dashboards.',
    category: 'Frontend',
    readTime: '8 min',
    date: 'SEP 2024',
  },
  {
    id: '3',
    title: 'The Role of Empathy in AI Models',
    excerpt: 'Fine-tuning LLMs to provide structured, human-centric retention plans in HR tech.',
    category: 'AI Theory',
    readTime: '5 min',
    date: 'AUG 2024',
  },
];

export const TECH_CAPABILITIES: TechCapability[] = [
  { 
    name: 'React / Next.js', 
    level: 95, 
    category: 'Frontend', 
    description: 'Server Components, Hooks, Optimization',
    icons: ['https://cdn.simpleicons.org/react', 'https://cdn.simpleicons.org/nextdotjs']
  },
  { 
    name: 'Python / ML', 
    level: 90, 
    category: 'AI/ML', 
    description: 'TensorFlow, Scikit-learn, Gemini',
    icons: ['https://cdn.simpleicons.org/python', 'https://cdn.simpleicons.org/tensorflow', 'https://cdn.simpleicons.org/scikitlearn']
  },
  { 
    name: 'Computer Vision', 
    level: 85, 
    category: 'AI/ML', 
    description: 'OpenCV, CNNs, Image Processing',
    icons: ['https://cdn.simpleicons.org/opencv']
  },
  { 
    name: 'Backend API', 
    level: 88, 
    category: 'Infrastructure', 
    description: 'FastAPI, Node.js, Express',
    icons: ['https://cdn.simpleicons.org/fastapi', 'https://cdn.simpleicons.org/nodedotjs', 'https://cdn.simpleicons.org/express']
  },
  { 
    name: 'TypeScript', 
    level: 92, 
    category: 'Core', 
    description: 'Strict typing, Design Patterns',
    icons: ['https://cdn.simpleicons.org/typescript']
  },
  { 
    name: 'Database', 
    level: 85, 
    category: 'Core', 
    description: 'PostgreSQL, Supabase, MongoDB',
    icons: ['https://cdn.simpleicons.org/postgresql', 'https://cdn.simpleicons.org/supabase', 'https://cdn.simpleicons.org/mongodb']
  },
  { 
    name: 'DevOps', 
    level: 80, 
    category: 'Infrastructure', 
    description: 'Docker, CI/CD, AWS',
    icons: ['https://cdn.simpleicons.org/docker', 'https://cdn.simpleicons.org/githubactions', 'https://cdn.simpleicons.org/amazonwebservices']
  },
  { 
    name: 'Styling / UI', 
    level: 95, 
    category: 'Frontend', 
    description: 'Tailwind, Shadcn, Styled Comp',
    icons: ['https://cdn.simpleicons.org/tailwindcss']
  },
];
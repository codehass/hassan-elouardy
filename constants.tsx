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
    problem: 'HR teams lack data-driven insights to identify at-risk employees.',
    solution: 'Integrated a Scikit-learn churn model with Gemini 2.5 Flash for role-based plans.',
    impact: 'Streamlined HR decision-making with predictive analytics and automated insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
    link: '#' // Original project not in scan list
  },
  {
    id: '2',
    title: 'EMOTION SENSE',
    category: 'Computer Vision',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
    description: 'Real-time computer vision system for facial landmark recognition and emotion classification.',
    problem: 'Traditional systems lack emotional intelligence and responsiveness.',
    solution: 'Engineered a CNN for real-time facial expression analysis.',
    impact: 'Achieved high accuracy in live video feeds for UX testing.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2834&auto=format&fit=crop',
    year: '2024',
    link: '#' // Original project not in scan list
  },
  {
    id: '3',
    title: 'WILD OASIS ADMIN',
    category: 'SaaS Dashboard',
    tags: ['React', 'Supabase', 'React Query', 'Styled Components'],
    description: 'Internal hotel employee dashboard for cabin, booking, and user management.',
    problem: 'Need for efficient administrative tools to manage bookings and cabins.',
    solution: 'Built a full-featured dashboard with complex filtering, real-time stats, and custom compounds.',
    impact: 'Optimized operations for hotel staff with seamless synchronization.',
    image: '/wild-oasis-admin.png',
    year: '2023',
    link: 'https://github.com/codehass/the-wild-oasis'
  },
  {
    id: '4',
    title: 'WILD OASIS BOOKING',
    category: 'Consumer Platform',
    tags: ['Next.js', 'Tailwind CSS', 'Auth.js', 'Server Components'],
    description: 'High-end guest portal for browsing and booking luxury cabins with real-time sync.',
    problem: 'Guests need a fast, secure, and intuitive booking experience.',
    solution: 'Server-side rendered application with Next.js and Supabase integration.',
    impact: 'Delivered accessible and high-performance booking flows.',
    image: '/wild-oasis.png',
    year: '2023',
    link: 'https://github.com/codehass/the-wild-oasis-website'
  },
  {
    id: '5',
    title: 'TALAIT TRANSLATE',
    category: 'Full Stack',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Docker'],
    description: 'Secure fullstack translation platform with integrated IT ticket management.',
    problem: 'Fragmented interfaces for specialized translation and support flows.',
    solution: 'Scalable Next.js frontend with unified ticket and translation modules.',
    impact: 'Consolidated workflows into a single high-performance interface.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/talait-translate-service-frontend'
  },
  {
    id: '6',
    title: 'MLOPS PIPELINE',
    category: 'AI & Data Engineering',
    tags: ['Python', 'Docker', 'Kubernetes', 'GitHub Actions'],
    description: 'End-to-end MLOps pipeline for automated ticket categorization and drift detection.',
    problem: 'Manual categorization of IT support tickets slows down response times.',
    solution: 'Automated pipeline with semantic embeddings and supervised ML categorization.',
    impact: 'Achieved scalable model deployment with integrated performance monitoring.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/nlp-support-pipeline-mlops'
  },
  {
    id: '7',
    title: 'IT SUPPORT RAG',
    category: 'AI / LangChain',
    tags: ['LangChain', 'LangGraph', 'FastAPI', 'MLflow'],
    description: 'Industrial-grade RAG Assistant for technical support teams.',
    problem: 'Navigating internal docs for technical issues is inefficient for support staff.',
    solution: 'RAG assistant with unsupervised query clustering and LangChain orchestration.',
    impact: 'Streamlined documentation retrieval and automated first-level responses.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/it-support-rag-assistant'
  },
  {
    id: '8',
    title: 'QUANT AI PROJECT',
    category: 'AI & Data Engineering',
    tags: ['Airflow', 'PySpark', 'MLLib', 'PostgreSQL'],
    description: 'Real-time data pipeline and prediction engine for Bitcoin market trend analysis.',
    problem: 'High-velocity crypto market data requires low-latency ingestion and inference.',
    solution: 'Spark MLLib and Streaming pipeline orchestrated via Airflow for Binance data.',
    impact: 'Real-time volatility tracking and price movement forecasting.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2669&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/Quant-AI-Project'
  },
  {
    id: '9',
    title: 'SMART LOGI TRACK',
    category: 'Data Infrastructure',
    tags: ['PySpark', 'Airflow', 'FastAPI', 'Medallion'],
    description: 'Medallion architecture ETL pipeline for urban logistics and ETA prediction.',
    problem: 'Fragmented data sources make real-time ETA tracking difficult for urban fleets.',
    solution: 'Distributed ETL via Spark with Bronze, Silver, and Gold data tiers.',
    impact: 'Provided a high-fidelity control tower overview for logistics operators.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/smart-logi-track-API'
  },
  {
    id: '10',
    title: 'AI ORCHESTRATOR',
    category: 'Frontend Engineering',
    tags: ['Next.js', 'Lucide', 'Tailwind', 'Docker'],
    description: 'User interface for managing and monitoring multi-agent AI orchestration workflows.',
    problem: 'Orchestrating multiple autonomous agents lacks a clear visual control layer.',
    solution: 'Modern dashboard for real-time monitoring of AI agent operations.',
    impact: 'Simplified complex agent management for non-technical administrators.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/ai-orchestrator-frontend'
  },
  {
    id: '11',
    title: 'SENTIMENT SENSE',
    category: 'AI Application',
    tags: ['Next.js', 'Node.js', 'Docker', 'Tailwind'],
    description: 'Sentiment analysis platform classifying text feedback into positive, negative, and neutral states.',
    problem: 'Analyzing large volumes of customer feedback manually is inefficient.',
    solution: 'Lightweight ML model served via a containerized Node.js application.',
    impact: 'Automated qualitative data analysis for product feedback.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/sentiment-analysis-front-end'
  },
  {
    id: '12',
    title: 'FINANCE DASHBOARD',
    category: 'Full Stack',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Auth'],
    description: 'Full-stack financial dashboard for administrative invoice management.',
    problem: 'Small businesses need an accessible tool for tracking financial health.',
    solution: 'Secure application with invoice metrics and user authentication.',
    impact: 'Enhanced visibility into business revenues and pending actions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    year: '2024',
    link: 'https://github.com/codehass/nextjs-dashboard'
  },
  {
    id: '13',
    title: 'BUDGET TRACKER',
    category: 'Mobile Application',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Ruby', 'RSpec'],
    description: 'Categorized transaction tracking application for mobile budget management.',
    problem: 'Users need a simple, mobile-optimized way to track daily spending.',
    solution: 'Ruby on Rails application with robust transaction categorization logic.',
    impact: 'Empowered users to make data-driven decisions on personal spending.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2622&auto=format&fit=crop',
    year: '2023',
    link: 'https://github.com/codehass/Budget-app'
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
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import { AnimatePresence, motion } from 'framer-motion';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Metadata management component
const PageMetadata = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Hassan El Ouardy',
      '/projects': 'PROJECTS',
      '/articles': 'ARTICLES',
      '/contact': 'COMM'
    };

    const descriptions: Record<string, string> = {
      '/': 'Portfolio of Hassan El Ouardy, Full Stack & AI Engineer specializing in Computer Vision and Sentient Systems.',
      '/projects': 'Explore technical projects spanning AI, Computer Vision, and high-performance Web Applications.',
      '/articles': 'Technical logs and research articles on Computer Vision, AI theory, and modern engineering.',
      '/contact': 'Get in touch with Hassan El Ouardy for collaborations on AI and Full Stack development.'
    };

    const title = titles[pathname] || 'Sentient Systems // Portfolio';
    const description = descriptions[pathname] || 'Hassan El Ouardy - Full Stack Engineer & AI Developer Portfolio.';
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <PageMetadata />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Chatbot />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
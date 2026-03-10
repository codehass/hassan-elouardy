import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-lab-gray">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="group flex items-center gap-2">
          <img src="/logo.svg" alt="HE Logo" className="w-8 h-8 rounded-lg" />
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-wide text-lab-text group-hover:text-lab-green transition-colors uppercase">
              Hassan El Ouardy
            </span>
            <span className="font-mono text-[10px] text-gray-400">
              FULL STACK & AI
            </span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-mono text-xs tracking-widest hover:text-lab-green transition-colors relative ${
                  isActive ? 'text-lab-green font-bold' : 'text-gray-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1">
                    {isActive && <span className="w-1.5 h-1.5 bg-lab-yellow rounded-full animate-pulse" />}
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
          <a
            href="https://linkedin.com/in/hassanelouardy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-lab-text text-white font-mono text-xs hover:bg-lab-green transition-colors"
          >
            CONNECT_
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-lab-text" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-lab-gray overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-mono text-lg tracking-widest ${
                      isActive ? 'text-lab-green font-bold pl-4 border-l-2 border-lab-yellow' : 'text-gray-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
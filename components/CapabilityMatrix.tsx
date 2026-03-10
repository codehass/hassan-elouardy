import React, { useState } from 'react';
import { TECH_CAPABILITIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const CapabilityMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Extract all categories
  const categories = Array.from(new Set(TECH_CAPABILITIES.map(c => c.category)));

  // Flatten the structure: get every individual icon from every group
  const allIcons = TECH_CAPABILITIES.flatMap((tech) => 
    tech.icons.map((icon) => ({
      src: icon,
      name: tech.name, // We use the parent group name as the label
      category: tech.category,
    }))
  );

  // Filter based on the individual icon's category
  const filteredIcons = activeCategory 
    ? allIcons.filter(icon => icon.category === activeCategory)
    : allIcons;

  return (
    <div className="w-full bg-white border border-gray-200 p-8 shadow-sm relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#14532d 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="relative z-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          <button 
            onClick={() => setActiveCategory(null)}
            className={`font-mono text-xs px-4 py-2 border transition-all ${activeCategory === null ? 'bg-lab-text text-white border-lab-text' : 'bg-transparent text-gray-500 border-gray-200 hover:border-lab-green'}`}
          >
            ALL_SYSTEMS
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-2 border transition-all ${activeCategory === cat ? 'bg-lab-green text-white border-lab-green' : 'bg-transparent text-gray-500 border-gray-200 hover:border-lab-green'}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Unified Responsive Container */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-6 md:gap-12 px-4"
        >
          <AnimatePresence mode='popLayout'>
            {filteredIcons.map((item, idx) => (
              <motion.div
                layout
                key={`${item.src}-${idx}`} // Use index in key to ensure uniqueness if icons repeat
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col items-center justify-center"
              >
                {/* Icon Image */}
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                />
                
                {/* Floating Tooltip (Visible on Hover) */}
                <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none bg-lab-text text-white px-3 py-1 text-[10px] font-mono rounded shadow-lg whitespace-nowrap">
                    {item.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default CapabilityMatrix;
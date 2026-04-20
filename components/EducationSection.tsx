import React from 'react';
import { EDUCATION } from '../constants';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Dots Pattern as seen in image */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 font-sans">Education</h2>
        
        <div className="relative border-l-2 border-lab-green/20 ml-4 pl-8 space-y-12">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot with Ring */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-2 border-lab-green rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-lab-green rounded-full"></div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 group">
                   <GraduationCap size={18} className="text-lab-green" />
                   <h3 className="text-xl font-bold text-lab-text">
                     {edu.degree}
                   </h3>
                </div>
                
                <p className="text-lab-green font-medium text-sm">
                  {edu.school}
                </p>
                
                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

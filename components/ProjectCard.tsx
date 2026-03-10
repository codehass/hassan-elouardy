import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-200 hover:border-lab-green transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-lg"
    >
      <div className="h-64 overflow-hidden relative border-b border-gray-100">
        <div className="absolute inset-0 bg-lab-green/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
             <span className="bg-white px-4 py-2 font-mono text-xs text-lab-green font-bold">VIEW CASE STUDY</span>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 z-20">
             <span className="bg-white/95 backdrop-blur px-2 py-1 text-[10px] font-mono border border-gray-200 shadow-sm text-lab-text">
               {project.category.toUpperCase()}
             </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-sans font-bold text-xl group-hover:text-lab-green transition-colors">
            {project.title}
          </h3>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="z-30 p-1 hover:bg-lab-gray rounded-full transition-all"
          >
            <ArrowUpRight className="text-gray-300 group-hover:text-lab-yellow transition-colors" size={20} />
          </a>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto">
          {/* Problem -> Solution -> Impact Micro-interaction */}
          <div className="space-y-3 mb-6 font-mono text-xs border-l-2 border-gray-100 pl-3">
             <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="text-gray-400">PROB:</span>
                <span className="text-gray-800 line-clamp-1 group-hover:line-clamp-none transition-all">{project.problem}</span>
             </div>
             <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="text-gray-400">SOLN:</span>
                <span className="text-gray-800 line-clamp-1 group-hover:line-clamp-none transition-all">{project.solution}</span>
             </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] uppercase font-mono text-gray-500 border border-gray-200 px-2 py-1 bg-gray-50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Search } from 'lucide-react';

const AllProjects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filters = ['All', 'AI/ML', 'Full Stack', 'Frontend', 'Infrastructure'];
  
  // Extract unique tags for filtering logic if needed, but simple category filter for now
  const filteredProjects = PROJECTS.filter(project => {
    const matchesFilter = filter === 'All' || 
                          project.category.includes(filter) || 
                          project.tags.some(t => t.includes(filter));
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="bg-lab-gray/30 min-h-screen">
        <div className="bg-white border-b border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Archive</h1>
            <p className="text-gray-600 max-w-2xl mb-10">
              A comprehensive log of deployed systems, experiments, and architectural studies.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 font-mono text-xs border transition-all ${
                      filter === f 
                      ? 'bg-lab-text text-white border-lab-text' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-lab-green'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search protocols..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 focus:outline-none focus:border-lab-green font-mono text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
           {filteredProjects.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredProjects.map(project => (
                 <ProjectCard key={project.id} project={project} />
               ))}
             </div>
           ) : (
             <div className="text-center py-20">
               <div className="font-mono text-gray-400 mb-2">ERROR: 404</div>
               <div className="font-bold text-xl">No projects found matching criteria.</div>
             </div>
           )}
        </div>
      </div>
    </PageTransition>
  );
};

export default AllProjects;
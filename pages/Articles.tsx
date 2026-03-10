import React from 'react';
import PageTransition from '../components/PageTransition';
import { ARTICLES } from '../constants';
import { Clock, Tag } from 'lucide-react';

const Articles: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen">
        <div className="border-b border-gray-200 py-20 bg-lab-gray/20">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory Logs</h1>
              <p className="text-gray-600 font-mono text-sm">
                OBSERVATIONS, THEORIES, AND TECHNICAL BREAKDOWNS
              </p>
           </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-12">
            {ARTICLES.map((article) => (
              <article key={article.id} className="group border-b border-gray-100 pb-12 last:border-0">
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs font-mono text-gray-400 mb-4">
                  <span className="text-lab-green font-bold px-2 py-1 bg-lab-green/5 border border-lab-green/20">
                    {article.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime} READ
                  </div>
                  <span>{article.date}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-lab-green transition-colors cursor-pointer">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <button className="text-sm font-bold border-b-2 border-lab-yellow pb-0.5 hover:text-lab-yellow transition-colors">
                  READ_FULL_LOG
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
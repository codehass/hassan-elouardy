import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lab-gray border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="w-8 h-8 bg-lab-text text-white flex items-center justify-center font-mono font-bold text-sm mb-6">
            HE
          </div>
          <h3 className="font-sans font-bold text-2xl mb-4">
            Building the nervous system of the digital age.
          </h3>
          <p className="text-gray-500 max-w-sm">
            Frontend Web Developer & AI Engineer. Specialized in building production-ready intelligent systems and scalable web applications.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold text-lab-green mb-6 tracking-widest">LINKS</h4>
          <ul className="space-y-4">
            <li><a href="/#/projects" className="text-gray-600 hover:text-lab-green transition-colors">Projects</a></li>
            <li><a href="/#/articles" className="text-gray-600 hover:text-lab-green transition-colors">Lab Logs</a></li>
            <li><a href="/#/contact" className="text-gray-600 hover:text-lab-green transition-colors">Communication</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold text-lab-green mb-6 tracking-widest">NETWORK</h4>
          <ul className="flex gap-4">
            <li>
              <a href="https://github.com/codehass" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-lab-green hover:text-white hover:border-lab-green transition-all">
                <Github size={18} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/hassanelouardy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-lab-green hover:text-white hover:border-lab-green transition-all">
                <Linkedin size={18} />
              </a>
            </li>
            <li>
              <a href="mailto:hassan.elouardy06@gmail.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-lab-green hover:text-white hover:border-lab-green transition-all">
                <Mail size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-mono">
        <p>© 2024 HASSAN EL OUARDY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-lab-green animate-pulse"></span>
          <span>SYSTEM OPERATIONAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
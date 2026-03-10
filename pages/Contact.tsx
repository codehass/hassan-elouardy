import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Send, MapPin, Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: 'Project Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormState({ name: '', email: '', type: 'Project Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-lab-gray/30 grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Context */}
        <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-gray-200 bg-white">
           <h1 className="text-5xl font-bold mb-8">Let's build something <br/>meaningful.</h1>
           <p className="text-gray-600 text-lg mb-12 max-w-md">
             Whether you have a groundbreaking AI idea or need to scale a complex system, I'm ready to engineer the solution.
           </p>

           <div className="space-y-8">
             <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-lab-gray flex items-center justify-center rounded-full">
                  <Mail className="text-lab-green" size={20} />
               </div>
               <div>
                 <h3 className="font-bold mb-1">Direct Line</h3>
                 <a href="mailto:hassan.elouardy06@gmail.com" className="text-gray-500 font-mono text-sm hover:text-lab-green transition-colors">hassan.elouardy06@gmail.com</a>
                 <p className="text-gray-400 text-xs mt-1">Response time: &lt; 24h</p>
               </div>
             </div>
             
             <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-lab-gray flex items-center justify-center rounded-full">
                  <MapPin className="text-lab-yellow" size={20} />
               </div>
               <div>
                 <h3 className="font-bold mb-1">Base of Operations</h3>
                 <p className="text-gray-500 font-mono text-sm">Morocco</p>
                 <p className="text-gray-400 text-xs mt-1">Remote Worldwide</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-lab-gray flex items-center justify-center rounded-full">
                  <Linkedin className="text-lab-dark" size={20} />
               </div>
               <div>
                 <h3 className="font-bold mb-1">Professional Network</h3>
                 <a href="https://linkedin.com/in/hassanelouardy" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-mono text-sm hover:text-lab-green transition-colors">linkedin.com/in/hassanelouardy</a>
               </div>
             </div>
           </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 lg:p-24 flex flex-col justify-center">
           <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto space-y-6">
              <div>
                <label className="block text-xs font-mono font-bold text-gray-500 mb-2 uppercase">Identity</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white border border-gray-300 p-4 focus:outline-none focus:border-lab-green transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-500 mb-2 uppercase">Coordinates (Email)</label>
                <input 
                  type="email" 
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white border border-gray-300 p-4 focus:outline-none focus:border-lab-green transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-500 mb-2 uppercase">Signal Type</label>
                <select 
                  value={formState.type}
                  onChange={e => setFormState({...formState, type: e.target.value})}
                  className="w-full bg-white border border-gray-300 p-4 focus:outline-none focus:border-lab-green transition-colors appearance-none"
                >
                  <option>Project Inquiry</option>
                  <option>Technical Consultation</option>
                  <option>Speaking Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-500 mb-2 uppercase">Transmission</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell me about your project parameters..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white border border-gray-300 p-4 focus:outline-none focus:border-lab-green transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full bg-lab-text text-white font-mono font-bold py-4 hover:bg-lab-green transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'idle' && <>SEND_TRANSMISSION <Send size={16} /></>}
                {status === 'sending' && <>UPLOADING...</>}
                {status === 'sent' && <>TRANSMISSION RECEIVED</>}
              </button>
           </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
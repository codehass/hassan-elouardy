import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, RotateCw, Mic, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Hassan's AI assistant. How can I help you today? Feel free to ask me about Hassan's skills, projects, experience, or how to get in touch with him.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { text: "Tell me about his fron...", icon: <Sparkles size={14} className="text-teal-500" /> },
    { text: "What backend techn...", icon: <Sparkles size={14} className="text-teal-500" /> },
    { text: "Does he have AI expe...", icon: <Sparkles size={14} className="text-teal-500" /> },
    { text: "How to contact him?", icon: <Sparkles size={14} className="text-teal-500" /> },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent | string) => {
    if (typeof e !== 'string') {
      e?.preventDefault();
    }
    
    const messageText = typeof e === 'string' ? e : input;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (typeof e !== 'string') setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const getBotResponse = (text: string): string => {
    const t = text.toLowerCase();
    if (t.includes('skills') || t.includes('frontend') || t.includes('backend')) 
        return "Hassan is highly proficient in React, Next.js, and TypeScript. On the backend, he excels with Python (FastAPI), Ruby on Rails, and Node.js. He also has strong expertise in AI integration, particularly with LLMs and Computer Vision.";
    if (t.includes('contact') || t.includes('touch')) 
        return "You can reach Hassan via LinkedIn at linkedin.com/in/hassanrj or WhatsApp at +923161097202. He typically responds within 30 minutes.";
    if (t.includes('education'))
        return "Hassan is pursuing a Bachelor's in Computer Science at GIAIC (2023-Present), with excellent academic performance. He previously completed his Intermediate education at City College (2020-2022).";
    if (t.includes('ai') || t.includes('experience'))
        return "Hassan has extensive experience in AI, including building RAG systems with LangChain, working with Computer Vision using OpenCV, and fine-tuning models for sentiment analysis and predictive diagnostics.";
    return "I don't have specific information about that. Would you like to know about Hassan's skills, projects, or experience instead? Or perhaps you'd like to know how to contact him?";
  };

  const refreshChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Hello! I'm Hassan's AI assistant. How can I help you today? Feel free to ask me about Hassan's skills, projects, experience, or how to get in touch with him.",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-4 right-0 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-white border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="https://github.com/codehass.png" 
                    alt="Hassan" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-lab-green border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lab-text text-sm leading-tight">Hassan's AI Assistant</h3>
                  <p className="text-[10px] text-gray-400 font-mono tracking-tight">Ask me anything about Hassan</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <button 
                  onClick={refreshChat}
                  className="p-2 hover:text-lab-green transition-colors"
                  title="Refresh Chat"
                >
                  <RotateCw size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:text-lab-green transition-colors"
                  aria-label="Close Chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-5 overflow-y-auto bg-white space-y-6">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0 self-end">
                      {msg.sender === 'bot' ? (
                        <div className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-lab-gray">
                          <img 
                            src="https://github.com/codehass.png" 
                            alt="Bot" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 bg-lab-yellow rounded-full flex items-center justify-center text-white shadow-sm">
                                <User size={14} />
                            </div>
                            <span className="text-[9px] font-mono font-bold text-gray-400 border border-gray-200 px-1 rounded-sm uppercase tracking-tighter">You</span>
                        </div>
                      )}
                    </div>

                    {/* Bubble */}
                    <div className={`p-4 rounded-2xl text-[13px] leading-relaxed relative ${
                      msg.sender === 'user' 
                      ? 'bg-lab-green text-white rounded-br-none shadow-md shadow-lab-green/10' 
                      : 'bg-lab-gray/50 text-lab-text border border-gray-100 rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions & Input Area */}
            <div className="p-4 bg-white border-t border-gray-50 flex flex-col gap-4">
              {/* Suggestions */}
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s.text)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[11px] font-mono font-medium text-gray-500 hover:border-lab-yellow hover:text-lab-yellow transition-all whitespace-nowrap"
                  >
                    {s.icon}
                    {s.text}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form 
                onSubmit={handleSend} 
                className="flex items-center gap-2 p-1.5 bg-lab-gray/30 border border-gray-100 rounded-full focus-within:border-lab-green/30 focus-within:bg-white transition-all duration-300"
              >
                <div className="flex-grow flex items-center px-2">
                   <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-transparent border-none text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0 py-2"
                  />
                  <button type="button" className="p-1.5 text-gray-400 hover:text-lab-green transition-colors">
                    <Mic size={18} />
                  </button>
                </div>
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-lab-text text-white rounded-full flex items-center justify-center hover:bg-lab-green transition-all duration-300 disabled:opacity-40 shadow-lg shadow-black/10"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Only show if CLOSED */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Pill Label */}
            <div className="bg-white px-6 py-3 rounded-full shadow-2xl border border-gray-100 font-sans font-bold text-sm text-lab-text flex items-center gap-2 group-hover:border-lab-green transition-all duration-300">
               <span>👋</span>
               <span>Chat with Hassan</span>
            </div>
            
            {/* Main Icon Button */}
            <div className="w-14 h-14 rounded-full bg-lab-green flex items-center justify-center text-white shadow-lg shadow-lab-green/20 transition-transform duration-300 group-hover:scale-110 active:scale-95">
                <MessageCircle size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;

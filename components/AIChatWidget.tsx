import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { SOCIAL_LINKS } from '../constants';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Fahid is currently busy. Please book a meeting using Calendly or contact him directly on WhatsApp below:",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  // Open chat widget on custom event from VoiceCommander
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpen);
    return () => window.removeEventListener('open-ai-chat', handleOpen);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`transition-all duration-300 origin-bottom-right mb-4 ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        <GlassCard className="w-[350px] h-[450px] flex flex-col p-0 overflow-hidden border-primary-teal/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0F1115]/95">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary-teal/20 to-purple-500/20 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-teal flex items-center justify-center text-black">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">FHD AI Assistant</h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-400">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className="flex justify-start"
              >
                <div className="max-w-[90%] p-3.5 rounded-xl text-sm bg-white/10 text-gray-200 rounded-tl-none border border-white/5 leading-relaxed">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="p-4 border-t border-white/10 bg-black/40 flex flex-col gap-2.5 pointer-events-auto">
            <a 
              href={SOCIAL_LINKS.calendly} 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-gradient-to-r from-primary-teal to-blue-500 hover:from-teal-400 hover:to-blue-400 text-black font-bold text-center rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-calendar-check text-lg"></i> Book Strategy Call
            </a>
            <a 
              href={SOCIAL_LINKS.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/60 text-green-400 font-bold text-center rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-lg"></i> Chat on WhatsApp (+92 348 4103239)
            </a>
          </div>

        </GlassCard>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 bg-gradient-to-tr from-primary-teal to-blue-500 rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform duration-300 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-primary-teal rounded-full blur opacity-40 group-hover:opacity-75 animate-pulse"></div>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-robot'} text-2xl relative z-10 transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
        
        {/* Notification Badge */}
        {!isOpen && (
           <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505]"></span>
        )}
      </button>

    </div>
  );
};
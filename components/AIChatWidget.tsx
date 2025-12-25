import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { SOCIAL_LINKS, SECURITY_PRICING } from '../constants';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Fahid's AI Assistant. I can help you with GHL Automation, WordPress Security, or booking a call. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Simple keyword-based AI logic
  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('package')) {
      return "We have transparent pricing. For WordPress Security, plans start at $150 for emergency cleanup. Maintenance is $50/mo. GHL projects are quoted based on complexity.";
    }
    if (lowerInput.includes('hack') || lowerInput.includes('malware') || lowerInput.includes('virus')) {
      return "If your site is hacked, please choose the 'Emergency Cleanup' service. I can get your site clean and secure within 24 hours.";
    }
    if (lowerInput.includes('ghl') || lowerInput.includes('gohighlevel') || lowerInput.includes('automation')) {
      return "I specialize in GHL Automations, Snapshots, and API integrations (Zapier/Make). Do you need a specific workflow built?";
    }
    if (lowerInput.includes('book') || lowerInput.includes('call') || lowerInput.includes('contact')) {
      return `You can book a strategy call directly via Calendly here: ${SOCIAL_LINKS.calendly} or chat on WhatsApp.`;
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hi there! Ready to automate your business or secure your website?";
    }
    
    return "I'm not sure about that specific detail, but Fahid can definitely answer it. Would you like to book a quick call?";
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateResponse(newUserMsg.text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`transition-all duration-300 origin-bottom-right mb-4 ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        <GlassCard className="w-[350px] h-[500px] flex flex-col p-0 overflow-hidden border-primary-teal/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0F1115]/95">
          
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
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary-teal text-black rounded-tr-none' 
                      : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about pricing, security..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-teal/50"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-lg bg-primary-teal text-black flex items-center justify-center hover:bg-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>

        </GlassCard>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 bg-gradient-to-tr from-primary-teal to-blue-500 rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 bg-primary-teal rounded-full blur opacity-40 group-hover:opacity-75 animate-pulse"></div>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-robot'} text-2xl relative z-10 transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
        
        {/* Notification Badge */}
        {!isOpen && messages.length === 1 && (
           <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505]"></span>
        )}
      </button>

    </div>
  );
};
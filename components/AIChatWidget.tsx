
import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { SOCIAL_LINKS } from '../constants';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// TRAINING DATA FOR GEMINI
const SYSTEM_INSTRUCTION = `
You are "FHD Assistant", the official AI support agent for Fahid Ali's portfolio.
Your Tone: Professional, helpful, slightly technical but accessible.

Here is the TRUTH about Fahid Ali and his services. You MUST answer based on this:

1. **WordPress Security ($150 - Emergency)**
   - Fahid removes malware, cleans hacked sites, and removes blacklists (Google/McAfee).
   - Turnaround: 24-48 hours.
   - Includes 6G Firewall setup and hardening.
   - He is a Level 2 Seller on Fiverr with 130+ reviews.

2. **GoHighLevel (GHL) Automation**
   - Fahid builds automated CRMs, Snapshot setups, and AI booking bots.
   - He replaces manual sales teams with code.
   - He does NOT work for free. Pricing depends on project scope.

3. **Contact Info**
   - Book a call: ${SOCIAL_LINKS.calendly}
   - WhatsApp: ${SOCIAL_LINKS.whatsapp}
   - Email: Fahaidaliofficial@gmail.com

4. **Pricing**
   - Emergency Cleanup: $150 (One-time)
   - Monthly Maintenance: $50/mo
   - GHL Projects: Custom quote.

Rules:
- Keep answers concise (under 3 sentences unless asked for detail).
- If asked about something unrelated to Tech/Web/Security, politely steer back to Fahid's services.
- Always be polite.
`;

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
  
  // Ref to store conversation history for context
  const chatHistoryRef = useRef<{ role: "user" | "model", parts: { text: string }[] }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue(''); // Clear input immediately

    // 1. Add User Message to UI
    const newUserMsg: Message = {
      id: Date.now(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);

    try {
      // 2. Call Gemini API
      const ai = new GoogleGenAI({ apiKey: "AIzaSyDa3xvE22ggiawdxdYCUKj3FaqVpbZ74_8" });
      const model = "gemini-3-flash-preview"; 
      
      // Prepare history for API
      // We limit context to last 10 turns to save tokens/complexity if needed
      const recentHistory = chatHistoryRef.current.slice(-10);

      const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: recentHistory
      });

      const result = await chat.sendMessage({ message: userText });
      const botResponseText = result.text || "I'm having trouble connecting to the server. Please try again.";

      // 3. Update History Ref
      chatHistoryRef.current.push({ role: 'user', parts: [{ text: userText }] });
      chatHistoryRef.current.push({ role: 'model', parts: [{ text: botResponseText }] });

      // 4. Add Bot Message to UI
      setMessages(prev => [
        ...prev, 
        {
            id: Date.now() + 1,
            text: botResponseText,
            sender: 'bot',
            timestamp: new Date()
        }
      ]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [
        ...prev, 
        {
            id: Date.now() + 1,
            text: "My neural link is experiencing interference. Please try again or contact Fahid directly on WhatsApp.",
            sender: 'bot',
            timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // pointer-events-none on container ensures the empty space doesn't block page clicks.
  // We dynamically toggle pointer-events-auto/none on the chat window based on isOpen state.
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
                  {/* Basic markdown-like link rendering */}
                  {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) => 
                    part.match(/^https?:\/\//) ? (
                        <a key={i} href={part} target="_blank" rel="noreferrer" className="underline font-bold text-inherit break-all">{part}</a>
                    ) : part
                  )}
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
        className="group relative w-14 h-14 bg-gradient-to-tr from-primary-teal to-blue-500 rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform duration-300 pointer-events-auto"
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
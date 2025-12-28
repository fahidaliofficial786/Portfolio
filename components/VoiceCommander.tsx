
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI, Type } from "@google/genai";

export const VoiceCommander: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  // UPGRADED CONTEXT (Matches Chat Widget Intelligence)
  const SYSTEM_INSTRUCTION = `
    You are the "Neural Interface" for Fahid Ali's Cyberpunk Portfolio.
    Your persona is JARVIS-like: Intelligent, efficient, slightly robotic but helpful.
    
    CORE DATA:
    1. WordPress Security: Cost $150 (Emergency). Includes Malware Removal, Blacklist Fix, 6G Firewall.
    2. GoHighLevel (GHL): CRM Automation, AI Bots, Snapshots.
    3. Contact: WhatsApp is priority. Calendly for calls.
    
    TASK:
    Analyze the voice transcript. Return JSON:
    { 
      "response": "Short spoken reply (max 12 words). E.g. 'Navigating to Security Sector.'", 
      "route": "/path" (or null if just chatting)
    }

    ROUTES:
    - / (Home)
    - /security-services (Security/Hacked Site)
    - /services (GHL/Ads/SEO)
    - /contact (Book Call)
    - /tools (Lab/Gadgets)
    - /blog (Intel/Logs)
  `;

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US'; 
      recognition.interimResults = false;

      recognition.onstart = () => {
        setStatus('listening');
        setFeedback("Listening... Speak Command.");
      };

      recognition.onend = () => {
        if (status === 'listening') setStatus('idle');
      };

      recognition.onerror = (event: any) => {
        console.error("Speech Error", event.error);
        setStatus('idle');
        setFeedback("Audio Input Failed.");
        setTimeout(() => setFeedback(''), 2000);
      };

      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript;
        setStatus('processing');
        setFeedback(`Analyzing: "${command}"`);
        processWithGemini(command);
      };

      recognitionRef.current = recognition;
    }
  }, [status]);

  const speakResponse = (text: string) => {
    if (!synthesisRef.current) return;
    synthesisRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 0.9; // Slightly deep
    utterance.rate = 1.1; // Efficient speed
    
    const voices = synthesisRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google US English')) || 
                           voices.find(v => v.lang === 'en-US');
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => {
        setStatus('speaking');
        setFeedback(text); 
    };

    utterance.onend = () => {
        setStatus('idle');
        setTimeout(() => setFeedback(''), 3000); 
    };

    synthesisRef.current.speak(utterance);
  };

  const processWithGemini = async (userVoiceText: string) => {
    try {
        const ai = new GoogleGenAI({ apiKey: "AIzaSyDa3xvE22ggiawdxdYCUKj3FaqVpbZ74_8" });
        
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: [{ parts: [{ text: userVoiceText }] }],
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        response: { type: Type.STRING },
                        route: { type: Type.STRING, nullable: true }
                    }
                }
            }
        });

        const result = JSON.parse(response.text || "{}");
        
        if (result.route) {
            navigate(result.route);
        }
        
        if (result.response) {
            speakResponse(result.response);
        } else {
            speakResponse("Command acknowledged.");
        }

    } catch (e) {
        console.error("AI Error", e);
        speakResponse("Neural Link Offline. Try again.");
        setStatus('idle');
    }
  };

  const handleToggle = () => {
    if (!recognitionRef.current) {
        alert("Voice Command requires Chrome/Edge on Desktop or Android.");
        return;
    }

    if (status === 'speaking' || status === 'processing') {
        synthesisRef.current.cancel();
        setStatus('idle');
        setFeedback('');
    } else if (status === 'listening') {
        recognitionRef.current.stop();
        setStatus('idle');
        setFeedback('');
    } else {
        try {
            recognitionRef.current.start();
        } catch (e) {
            console.warn("Restarting mic stream...");
            recognitionRef.current.stop();
            setTimeout(() => recognitionRef.current.start(), 200);
        }
    }
  };

  // Do not render if API is completely missing (e.g. Firefox/iOS Safari older versions)
  if (!(window as any).SpeechRecognition && !(window as any).webkitSpeechRecognition) return null;

  return (
    <>
      {/* 
         FEEDBACK BUBBLE:
         Positioned fixed at top center, high z-index.
      */}
      {feedback && (
        <div className={`
            fixed top-24 left-1/2 -translate-x-1/2 z-[100]
            w-[85vw] max-w-sm
            backdrop-blur-xl border border-primary-teal/50 bg-[#050505]/90 
            px-6 py-4 rounded-xl shadow-[0_0_40px_rgba(0,240,255,0.4)] 
            text-center pointer-events-none transition-all duration-300 animate-in fade-in zoom-in-95
        `}>
           <div className="flex flex-col items-center justify-center gap-2">
               {/* Audio Visualizer */}
               {status === 'speaking' || status === 'processing' ? (
                 <div className="flex gap-1 h-4 items-center">
                    <span className="w-1 bg-primary-teal animate-[bounce_0.4s_infinite] h-2"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.5s_infinite_0.1s] h-4"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.6s_infinite_0.2s] h-3"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.5s_infinite_0.1s] h-4"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.4s_infinite] h-2"></span>
                 </div>
               ) : (
                 <i className="fa-solid fa-microphone-lines text-primary-teal animate-pulse text-xl"></i>
               )}
               
               <div className="text-primary-teal font-mono text-sm font-bold leading-tight uppercase tracking-wide">
                   {status === 'listening' ? <span className="text-white animate-pulse">LISTENING...</span> : feedback}
               </div>
           </div>
        </div>
      )}

      {/* 
         MIC BUTTON:
         Fixed icon class to fa-microchip (Standard Free FA).
      */}
      <button 
        onClick={handleToggle}
        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 border relative group touch-manipulation z-[60]
          ${status === 'listening' 
            ? 'bg-red-500/20 border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] scale-110' 
            : status === 'processing' || status === 'speaking'
                ? 'bg-primary-teal/20 border-primary-teal text-primary-teal shadow-[0_0_20px_rgba(0,240,255,0.6)] animate-pulse'
                : 'bg-black/40 border-white/20 text-gray-400 hover:text-primary-teal hover:border-primary-teal hover:bg-primary-teal/10'
          }
        `}
        title="Neural Interface (Voice Control)"
      >
        {status === 'listening' ? (
            <i className="fa-solid fa-microphone text-lg"></i>
        ) : status === 'speaking' ? (
            <i className="fa-solid fa-wave-square text-lg"></i>
        ) : (
            <i className="fa-solid fa-microchip text-lg"></i>
        )}
        
        {/* Ring Animation when idle */}
        {status === 'idle' && (
            <span className="absolute inset-0 rounded-full border border-primary-teal/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
        )}
      </button>
    </>
  );
};
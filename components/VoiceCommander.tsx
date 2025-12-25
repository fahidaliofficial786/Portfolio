import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const VoiceCommander: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  // CALM & PROFESSIONAL CLOSERS
  const PROFESSIONAL_CLOSERS = [
    "To ensure the best results, I highly recommend hiring Fahid for this project.",
    "Fahid's expertise is exactly what you need to solve this. I suggest booking a call.",
    "For a professional execution of this task, Fahid is the best choice.",
    "I believe Fahid can resolve this issue efficiently. You should hire him.",
    "This is Fahid's specialty. Hiring him would be the logical next step for your growth."
  ];

  useEffect(() => {
    // Initialize SpeechRecognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      
      // Allow browser to detect language automatically (User can speak English, Urdu, etc.)
      recognition.lang = navigator.language || 'en-US'; 
      recognition.interimResults = false;

      recognition.onstart = () => {
        setStatus('listening');
        setFeedback("Listening... You can speak in your preferred language.");
      };

      recognition.onend = () => {
        setStatus((prev) => (prev === 'listening' ? 'idle' : prev));
        if (status === 'listening') setFeedback('');
      };

      recognition.onerror = (event: any) => {
        console.error("Speech Recognition Error", event.error);
        setStatus('idle');
        setFeedback("Microphone Access Required");
        if(event.error === 'not-allowed') {
            alert("Please allow microphone access to speak with the assistant.");
        }
      };

      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        setStatus('processing');
        setFeedback(`Understood: "${command}"`);
        processCommand(command);
      };

      recognitionRef.current = recognition;
    } else {
        setFeedback("Voice Not Supported");
    }
  }, [navigate]);

  const getRandomCloser = () => {
    return PROFESSIONAL_CLOSERS[Math.floor(Math.random() * PROFESSIONAL_CLOSERS.length)];
  };

  const speakResponse = (text: string, isGreeting = false) => {
    if (!synthesisRef.current) return;

    synthesisRef.current.cancel();

    // Only append the "Hire Fahid" hook if it's NOT the initial greeting
    const fullText = isGreeting ? text : `${text} ... ${getRandomCloser()}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    
    // CALM & PROFESSIONAL VOICE SETTINGS
    utterance.pitch = 1.0; // Normal pitch
    utterance.rate = 0.9;  // Slightly slower for clarity and calmness

    // Select a professional voice (Prefer 'Google US English', 'Samantha', or generic English)
    const voices = synthesisRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google US English')) || 
                           voices.find(v => v.name.includes('Samantha')) || 
                           voices.find(v => v.lang === 'en-US') || 
                           voices[0];
    
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => {
        setStatus('speaking');
        setFeedback(text); 
    };

    utterance.onend = () => {
        setStatus('idle');
        setFeedback('');
    };

    synthesisRef.current.speak(utterance);
  };

  const processCommand = (cmd: string) => {
    // 1. Navigation (English + Urdu/Hindi Keywords)
    if (cmd.includes('home') || cmd.includes('mission') || cmd.includes('ghar') || cmd.includes('wapis')) {
      navigate(PageRoutes.HOME);
      speakResponse("Certainly. I am navigating you to the Mission Log now.");
    } 
    else if (cmd.includes('security') || cmd.includes('protocol') || cmd.includes('secure') || cmd.includes('hifazat')) {
      navigate(PageRoutes.SECURITY);
      speakResponse("Accessing the Security Protocols page. Your safety is our priority.");
    } 
    
    // 2. Identity / About
    else if (cmd.includes('who are you') || cmd.includes('fahid') || cmd.includes('intro') || cmd.includes('kaun')) {
      navigate(PageRoutes.HOME);
      speakResponse("I am Fahid Ali's artificial assistant. Fahid is an expert in High Level Automation and WordPress Security.");
    } 
    
    // 3. Pricing / Money (English + Urdu/Hindi)
    else if (cmd.includes('price') || cmd.includes('cost') || cmd.includes('paisa') || cmd.includes('money') || cmd.includes('dollar') || cmd.includes('rate')) {
      navigate(PageRoutes.SECURITY);
      speakResponse("Regarding pricing: Emergency cleanup is one hundred fifty dollars. Monthly maintenance is fifty dollars. It is a worthwhile investment.");
    }
    
    // 4. Contact / Hire (English + Urdu/Hindi)
    else if (cmd.includes('contact') || cmd.includes('hire') || cmd.includes('email') || cmd.includes('rabta') || cmd.includes('call') || cmd.includes('madad')) {
       navigate(PageRoutes.HOME);
       setTimeout(() => {
           document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
       }, 500);
       speakResponse("I have opened the contact section. You can email Fahid or book a strategy call immediately.");
    }
    
    // 5. Skills / Services
    else if (cmd.includes('skill') || cmd.includes('ghl') || cmd.includes('wordpress') || cmd.includes('kaam') || cmd.includes('service')) {
        speakResponse("Fahid specializes in GoHighLevel Automation, Zapier integrations, and robust WordPress Security. He builds systems that scale.");
    }

    // 6. Greetings
    else if (cmd.includes('hello') || cmd.includes('hi') || cmd.includes('salam') || cmd.includes('hey')) {
        speakResponse("Hello. I am here to assist you. You can ask me about Services, Pricing, or how to Contact Fahid.", true);
    }
    
    // Default / Unknown
    else {
      speakResponse("I apologize, I didn't quite catch that. Would you like to know about Fahid's Services or Pricing?", true);
    }
  };

  const handleToggle = () => {
    if (!recognitionRef.current) {
        alert("Voice features require a modern browser like Chrome.");
        return;
    }

    if (status === 'speaking') {
        synthesisRef.current.cancel();
        setStatus('idle');
        setFeedback('');
    } else if (status === 'listening') {
        recognitionRef.current.stop();
        setStatus('idle');
        setFeedback('');
    } else {
        // Initial Greeting logic when button is first clicked
        try {
            recognitionRef.current.start();
            // Optional: Speak a welcome message immediately if not just restarting
            if (status === 'idle') {
                // We don't speak here to avoid conflict with listening, 
                // but we could set a flag to speak *after* listening if silence.
                // For now, we just listen.
            }
        } catch (e) {
            console.warn("Restarting recognition module...");
            recognitionRef.current.stop();
            setTimeout(() => recognitionRef.current.start(), 200);
        }
    }
  };

  if (!(window as any).SpeechRecognition && !(window as any).webkitSpeechRecognition) return null;

  return (
    <>
      {/* Feedback Bubble - Calm / Professional Theme */}
      {feedback && (
        <div className={`
            fixed top-24 left-1/2 -translate-x-1/2 z-[100]
            backdrop-blur-xl border border-primary-teal/30 px-8 py-4 rounded-full text-sm font-sans shadow-[0_4px_30px_rgba(0,0,0,0.5)] 
            animate-float text-center min-w-[320px] max-w-[90vw] pointer-events-none transition-all duration-300
            bg-[#050505]/80 text-white
        `}>
           <div className="flex items-center justify-center gap-3 mb-1">
               {status === 'speaking' && (
                 <div className="flex gap-1 h-3 items-end">
                    <span className="w-1 bg-primary-teal animate-[bounce_1s_infinite] h-2"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_1.2s_infinite] h-3"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.8s_infinite] h-2"></span>
                 </div>
               )}
               <span className="text-[10px] uppercase tracking-widest text-primary-teal/80">
                   {status === 'listening' ? 'Listening...' : status === 'speaking' ? 'FHD Assistant' : 'Processing'}
               </span>
           </div>
           <div className="text-lg font-medium text-gray-100">{feedback}</div>
        </div>
      )}

      {/* Mic Button - Elegant & Professional */}
      <button 
        onClick={handleToggle}
        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-500 border
          ${status === 'listening' 
            ? 'bg-red-500/10 border-red-500 text-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
            : status === 'speaking'
                ? 'bg-primary-teal/10 border-primary-teal text-primary-teal shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30'
          }
        `}
        title="Voice Assistant"
      >
        <i className={`fa-solid ${
            status === 'listening' ? 'fa-microphone-lines' : 
            status === 'speaking' ? 'fa-volume-high' : 
            'fa-microphone'
        }`}></i>
      </button>
    </>
  );
};
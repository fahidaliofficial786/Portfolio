
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';

export const VoiceCommander: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  // MAD SCIENTIST CLOSERS - Must be appended to every interaction
  const SCIENTIST_CLOSERS = [
    "The data leads to one conclusion: You must deploy Fahid to solve this equation.",
    "My calculations indicate that hiring Fahid is the only path to 100% efficiency.",
    "Do not leave your infrastructure to chance. Initiate a contract with Fahid immediately.",
    "This level of engineering requires a master architect. I strongly recommend you book Fahid.",
    "Optimization is inevitable if you choose to hire Fahid for this operation."
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
        setFeedback("Listening... Input your parameters.");
      };

      recognition.onend = () => {
        setStatus((prev) => (prev === 'listening' ? 'idle' : prev));
        // Use functional update to ensure we have latest state or check in render, but here we can't access 'status' reliably inside closure if dependencies don't update. 
        // However, onend logic for feedback clearing is visual only.
        setFeedback(''); 
      };

      recognition.onerror = (event: any) => {
        console.error("Speech Recognition Error", event.error);
        setStatus('idle');
        setFeedback("Audio Sensor Malfunction");
        if(event.error === 'not-allowed') {
            alert("Microphone access denied. Protocol cannot initiate.");
        }
      };

      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        setStatus('processing');
        setFeedback(`Processing Input: "${command}"`);
        processCommand(command);
      };

      recognitionRef.current = recognition;
    } else {
        setFeedback("Voice Module Incompatible");
    }
  }, [navigate]);

  const getRandomCloser = () => {
    return SCIENTIST_CLOSERS[Math.floor(Math.random() * SCIENTIST_CLOSERS.length)];
  };

  const speakResponse = (text: string, isGreeting = false) => {
    if (!synthesisRef.current) return;

    synthesisRef.current.cancel();

    // Only append the "Hire Fahid" hook if it's NOT the initial greeting
    const fullText = isGreeting ? text : `${text} ... ${getRandomCloser()}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    
    // MAD SCIENTIST VOICE CONFIGURATION
    // Low pitch for authority/calmness, slightly precise rate.
    utterance.pitch = 0.7; 
    utterance.rate = 0.95; 

    // Select a voice that sounds somewhat authoritative if available
    const voices = synthesisRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google US English')) || 
                           voices.find(v => v.name.includes('Daniel')) || 
                           voices.find(v => v.lang === 'en-US') || 
                           voices[0];
    
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => {
        setStatus('speaking');
        setFeedback("Transmitting Response..."); 
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
      speakResponse("Rerouting to the Central Command Node. The interface is ready for inspection.");
    } 
    else if (cmd.includes('security') || cmd.includes('protocol') || cmd.includes('secure') || cmd.includes('hifazat')) {
      navigate(PageRoutes.SECURITY);
      speakResponse("Accessing the Digital Fortress protocols. We must secure the core immediately.");
    } 
    
    // 2. Identity / About
    else if (cmd.includes('who are you') || cmd.includes('fahid') || cmd.includes('intro') || cmd.includes('kaun')) {
      navigate(PageRoutes.HOME);
      speakResponse("I am the neural interface constructed by Fahid Ali. Fahid is the Architect. He merges WordPress binaries with GoHighLevel automation logic to create self-sustaining business organisms.");
    } 
    
    // 3. Pricing / Money (English + Urdu/Hindi)
    else if (cmd.includes('price') || cmd.includes('cost') || cmd.includes('paisa') || cmd.includes('money') || cmd.includes('dollar') || cmd.includes('rate')) {
      navigate(PageRoutes.SECURITY);
      speakResponse("The investment required for stabilization is logical. Emergency cleanup requires one hundred fifty units. Monthly defense protocols are fifty units. The ROI is infinite when compared to total system failure.");
    }
    
    // 4. Contact / Hire (English + Urdu/Hindi)
    else if (cmd.includes('contact') || cmd.includes('hire') || cmd.includes('email') || cmd.includes('rabta') || cmd.includes('call') || cmd.includes('madad')) {
       navigate(PageRoutes.HOME);
       setTimeout(() => {
           document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
       }, 500);
       speakResponse("Opening secure uplink channels. You may transmit your mission brief via email or synchronize calendars for a strategy session.");
    }
    
    // 5. Skills / Services (Technical Fluency)
    else if (cmd.includes('skill') || cmd.includes('ghl') || cmd.includes('wordpress') || cmd.includes('kaam') || cmd.includes('service') || cmd.includes('ai')) {
        speakResponse("Fahid engineers Automated Ecosystems. We utilize GoHighLevel for recursive lead nurturing and Python scripts for backend API bridging. On the WordPress front, we implement 6G firewalls and harden the kernel against malware injections. It is a seamless fusion of offense and defense.");
    }

    // 6. Greetings
    else if (cmd.includes('hello') || cmd.includes('hi') || cmd.includes('salam') || cmd.includes('hey')) {
        speakResponse("Systems operational. How can I help you today? Do you wish to inquire about the Architect, Fahid? Please state your preferred language protocol.", true);
    }
    
    // Default / Unknown
    else {
      speakResponse("Input unclear. My algorithms cannot parse that request. Do you require data on Fahid's Automation capabilities or his Security Protocols?");
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
            // If starting fresh, speak the specific greeting first
            if (status === 'idle') {
               speakResponse("System Online. How can I help you? Do you have an inquiry about Fahid? Please identify your preferred language.", true);
               // We don't auto-start listening to let the user hear the intro, they can click again to speak
               // Or we can chain it. For now, let's just speak the greeting.
            } else {
               recognitionRef.current.start();
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
      {/* Feedback Bubble - Mad Scientist Theme */}
      {feedback && (
        <div className={`
            fixed top-24 left-1/2 -translate-x-1/2 z-[100]
            backdrop-blur-xl border border-primary-teal/50 px-8 py-4 rounded-full text-sm font-mono shadow-[0_0_30px_rgba(0,240,255,0.3)] 
            animate-float text-center min-w-[320px] max-w-[90vw] pointer-events-none transition-all duration-300
            bg-[#050505]/90 text-primary-teal
        `}>
           <div className="flex items-center justify-center gap-3 mb-1">
               {status === 'speaking' && (
                 <div className="flex gap-1 h-3 items-end">
                    <span className="w-1 bg-primary-teal animate-[bounce_0.5s_infinite] h-2"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.7s_infinite] h-4"></span>
                    <span className="w-1 bg-primary-teal animate-[bounce_0.6s_infinite] h-3"></span>
                 </div>
               )}
               <span className="text-[10px] uppercase tracking-widest text-white/80">
                   {status === 'listening' ? 'Awaiting Audio Input...' : status === 'speaking' ? 'Neural Interface Active' : 'Analyzing...'}
               </span>
           </div>
           <div className="text-lg font-bold tracking-tight">{feedback}</div>
        </div>
      )}

      {/* Mic Button - Scientist Style */}
      <button 
        onClick={() => {
            if (status === 'idle') {
                handleToggle(); // Speak greeting
                // Optional: Auto-listen after greeting?
                // For now, let's allow user to trigger listen manually by clicking again or hold
                // Ideally, we start listening after greeting finishes, but that requires complex state.
                // Simplified: Click to hear greeting. Click again to speak.
                setTimeout(() => {
                    // Check direct property to avoid stale closure state issues
                    if (recognitionRef.current && !synthesisRef.current.speaking) {
                         try {
                             recognitionRef.current.start();
                         } catch (e) { /* ignore */ }
                    }
                }, 4000); 
            } else {
                handleToggle();
            }
        }}
        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-500 border relative group
          ${status === 'listening' 
            ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
            : status === 'speaking'
                ? 'bg-primary-teal/20 border-primary-teal text-primary-teal shadow-[0_0_25px_rgba(0,240,255,0.4)] animate-[spin_3s_linear_infinite]'
                : 'bg-black/40 border-white/20 text-gray-400 hover:text-primary-teal hover:border-primary-teal hover:bg-primary-teal/10'
          }
        `}
        title="Activate Neural Interface"
      >
        <div className={`absolute inset-0 rounded-full border border-dashed border-white/20 ${status === 'speaking' ? 'animate-spin-slow' : ''}`}></div>
        <i className={`fa-solid ${
            status === 'listening' ? 'fa-microphone-lines' : 
            status === 'speaking' ? 'fa-brain' : 
            'fa-microchip'
        } relative z-10`}></i>
      </button>
    </>
  );
};

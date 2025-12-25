import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootLogs = [
    "INITIALIZING_KERNEL...",
    "LOADING_SECURITY_PROTOCOLS...",
    "MOUNTING_VIRTUAL_DOM...",
    "ESTABLISHING_SECURE_CONNECTION...",
    "VERIFYING_USER_IDENTITY...",
    "ACCESS_GRANTED.",
    "WELCOME_TO_FHD_TECH_V2.0"
  ];

  useEffect(() => {
    let currentLog = 0;
    
    // Log interval
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      }
    }, 400);

    // Progress bar interval
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          setTimeout(onComplete, 800); // Wait a bit before unmounting
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-primary-teal p-4">
      <div className="w-full max-w-md space-y-6">
        
        {/* Logo Glitch */}
        <div className="text-center mb-8">
           <i className="fa-solid fa-layer-group text-6xl animate-pulse mb-4"></i>
           <h1 className="text-2xl font-black tracking-[0.5em] text-white">FHD<span className="text-primary-teal">TECH</span></h1>
        </div>

        {/* Terminal Logs */}
        <div className="h-48 border border-primary-teal/30 bg-[#0F1115] p-4 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
           {logs.map((log, i) => (
             <div key={i} className="text-xs md:text-sm mb-1">
               <span className="text-gray-500 mr-2">{`[${new Date().toLocaleTimeString()}]`}</span>
               <span className={i === logs.length - 1 ? 'text-white font-bold animate-pulse' : 'text-primary-teal'}>
                 {`> ${log}`}
               </span>
             </div>
           ))}
        </div>

        {/* Loading Bar */}
        <div className="space-y-2">
           <div className="flex justify-between text-xs text-gray-400 uppercase">
              <span>System Integrity</span>
              <span>{progress}%</span>
           </div>
           <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800">
              <div 
                className="h-full bg-primary-teal shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
           </div>
        </div>

      </div>
    </div>
  );
};
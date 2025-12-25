import React, { useEffect, useState } from 'react';

export const TerminalHero: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const sequence = [
    { text: "> Initializing System...", delay: 500 },
    { text: "> Connecting to Neural Network...", delay: 1200 },
    { text: "> GHL Automation Protocols: ACTIVE", delay: 2000, color: "text-green-400" },
    { text: "> WordPress Security Firewall: ONLINE", delay: 2800, color: "text-blue-400" },
    { text: "> Accessing Portfolio Database...", delay: 3500 },
    { text: "> Welcome, User.", delay: 4200, color: "text-primary-teal font-bold" },
  ];

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    
    sequence.forEach(({ text, delay, color }, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, `<span class="${color || 'text-gray-300'}">${text}</span>`]);
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-12 rounded-lg overflow-hidden border border-white/10 bg-[#0F1115]/90 backdrop-blur-md shadow-2xl font-mono text-sm md:text-base">
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-500">fhd-tech@server:~</span>
      </div>
      {/* Terminal Body */}
      <div className="p-6 h-48 md:h-64 overflow-y-auto flex flex-col justify-end">
        {lines.map((line, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: line }} className="mb-1" />
        ))}
        <div className="animate-pulse text-primary-teal">_</div>
      </div>
    </div>
  );
};
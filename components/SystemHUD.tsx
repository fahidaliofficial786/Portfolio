import React, { useEffect, useState } from 'react';

export const SystemHUD: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMatrixMode = () => {
    const root = document.documentElement;
    if (!isMatrixMode) {
      // Switch to Neon Overdrive (Pink/Yellow)
      root.style.setProperty('--color-primary-teal', '#FF0099'); // Neon Pink
      root.style.setProperty('--color-primary-purple', '#CCFF00'); // Neon Yellow
      document.body.classList.add('matrix-mode');
    } else {
      // Revert to Default
      root.style.removeProperty('--color-primary-teal');
      root.style.removeProperty('--color-primary-purple');
      document.body.classList.remove('matrix-mode');
    }
    setIsMatrixMode(!isMatrixMode);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-[40] bg-[#050505]/95 backdrop-blur-md border-t border-white/10 hidden md:block shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
       <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center py-3 text-[10px] md:text-xs font-mono text-primary-teal/80 tracking-widest uppercase">
             
             {/* Left Stats */}
             <div className="flex gap-8 items-center">
                <div className="flex items-center gap-2">
                   <span className={`w-2 h-2 rounded-full animate-pulse ${isMatrixMode ? 'bg-[#FF0099]' : 'bg-green-500'}`}></span>
                   <span>System: {isMatrixMode ? 'OVERDRIVE' : 'NORMAL'}</span>
                </div>
                <div>CPU_LOAD: <span className="text-white">12%</span></div>
             </div>

             {/* Center Controls */}
             <div className="flex items-center gap-4">
                <button 
                  onClick={toggleMatrixMode}
                  className={`px-4 py-1.5 border rounded-md transition-all font-bold flex items-center gap-2 ${
                    isMatrixMode 
                      ? 'bg-[#FF0099] border-[#FF0099] text-black shadow-[0_0_15px_rgba(255,0,153,0.8)] hover:bg-white' 
                      : 'bg-white/5 border-white/20 text-gray-400 hover:text-white hover:border-primary-teal hover:bg-white/10'
                  }`}
                >
                  <i className="fa-solid fa-terminal"></i>
                  {isMatrixMode ? 'DEACTIVATE MATRIX' : 'ACTIVATE MATRIX'}
                </button>
             </div>

             {/* Right Stats */}
             <div className="flex gap-8 items-center">
                <div>Loc: <span className="text-white">PAK, 42.0°N</span></div>
                <div className="font-bold text-white">{time}</div>
             </div>

          </div>
       </div>
    </div>
  );
};
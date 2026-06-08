import React, { useEffect, useState } from 'react';
import { ParticleBackground } from './ParticleBackground';

export const DynamicBackground: React.FC = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      // Day is considered 6 AM to 6 PM (18:00)
      setIsDay(hour >= 6 && hour < 18);
    };
    
    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background Color */}
      <div className={`absolute inset-0 transition-colors duration-[5000ms] ${isDay ? 'bg-[#050505]' : 'bg-[#020204]'}`}></div>

      {/* Ambient Gradient */}
      <div 
        className={`absolute inset-0 opacity-40 transition-all duration-[5000ms]
          ${isDay 
            ? 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent' 
            : 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent'
          }
        `}
      ></div>

      {/* Celestial Body (Sun/Moon) */}
      <div 
        className={`absolute top-10 right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-[5000ms]
          ${isDay 
            ? 'bg-yellow-500/30 shadow-[0_0_100px_rgba(234,179,8,0.4)] translate-y-0' 
            : 'bg-indigo-300/20 shadow-[0_0_80px_rgba(165,180,252,0.3)] translate-y-4'
          }
        `}
      ></div>
      
      {/* The Solid Orb */}
      <div 
        className={`absolute top-14 right-14 w-24 h-24 rounded-full transition-all duration-[5000ms]
          ${isDay 
            ? 'bg-gradient-to-br from-yellow-100 to-orange-500 shadow-lg' 
            : 'bg-gradient-to-br from-gray-100 to-slate-600 shadow-lg'
          }
        `}
      >
         {/* Moon Craters (Only visible at night) */}
         {!isDay && (
            <>
               <div className="absolute top-4 left-5 w-4 h-4 bg-slate-400/30 rounded-full"></div>
               <div className="absolute bottom-6 right-6 w-6 h-6 bg-slate-400/30 rounded-full"></div>
            </>
         )}
      </div>

      {/* Particles (Stars/Dust) */}
      <ParticleBackground />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
    </div>
  );
};
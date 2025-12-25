import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        background-blur-md bg-opacity-60 bg-[#161b22] 
        backdrop-filter backdrop-blur-xl border border-[rgba(48,54,61,0.5)] 
        rounded-xl p-6 transition-all duration-300 ease-in-out
        ${hoverEffect ? 'hover:border-teal-400/50 hover:shadow-[0_0_25px_rgba(45,212,191,0.15)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
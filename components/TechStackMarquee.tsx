import React from 'react';
import { TECH_STACK } from '../constants';

export const TechStackMarquee: React.FC = () => {
  // Duplicate the stack 4 times to ensure it covers 2x screen width for the -50% animation loop
  const seamlessStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-8">
       {/* 
          animate-scroll moves translateX from 0 to -50%.
          Since we have 4 sets of items, moving 50% means we move past exactly 2 sets.
          Because Set 3 starts exactly where Set 1 started, the loop is invisible.
       */}
       <div className="flex w-max animate-scroll">
          {seamlessStack.map((tech, i) => (
             <div key={i} className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-opacity mx-12">
                <i className={`${tech.icon} text-3xl md:text-4xl text-gray-400 group-hover:text-primary-teal transition-colors`}></i>
                <span className="text-lg font-mono font-bold text-gray-300 hidden md:block">{tech.name}</span>
             </div>
          ))}
       </div>
    </div>
  );
};
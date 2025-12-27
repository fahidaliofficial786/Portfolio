
import React, { useState, useRef } from 'react';
import { GlassCard } from './GlassCard';

interface AccordionProps {
  question: string;
  answer: string;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GlassCard className="p-0 overflow-hidden transition-all duration-300 mb-4 hover:border-primary-teal/50">
      <button 
        type="button"
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-transparent cursor-pointer select-none group"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-lg text-gray-200 pr-4 leading-snug group-hover:text-white transition-colors">{question}</span>
        <span className={`text-primary-teal transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </button>
      
      <div 
        style={{ 
            height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
            opacity: isOpen ? 1 : 0
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <div ref={contentRef} className="px-6 pb-6">
            <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-primary-teal/30 text-sm md:text-base">
            {answer}
            </p>
        </div>
      </div>
    </GlassCard>
  );
};

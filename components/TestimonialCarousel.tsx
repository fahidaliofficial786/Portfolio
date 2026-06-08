import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { GlassCard } from './GlassCard';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[350px] md:h-[300px]">
      {testimonials.map((t, i) => {
        const isActive = i === activeIndex;
        // Simple opacity transition
        return (
          <div 
            key={i} 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              isActive ? 'opacity-100 translate-x-0 scale-100 z-10' : 'opacity-0 translate-x-10 scale-95 z-0'
            }`}
          >
            <GlassCard className="h-full flex flex-col justify-center items-center text-center p-8 md:p-12 border-primary-teal/20 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                <div className="flex text-yellow-400 text-lg mb-6 gap-1">
                   {[...Array(t.stars)].map((_, si) => <i key={si} className="fa-solid fa-star drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]"></i>)}
                </div>
                <p className="text-xl md:text-2xl text-gray-200 italic mb-8 font-light relative">
                   <span className="text-6xl text-primary-teal/20 absolute -top-8 -left-8 font-serif">"</span>
                   {t.content}
                   <span className="text-6xl text-primary-teal/20 absolute -bottom-12 -right-8 font-serif">"</span>
                </p>
                <div className="flex items-center gap-4 animate-float">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary-teal to-blue-500 flex items-center justify-center font-bold text-black text-xl shadow-lg">
                      {t.name.charAt(0)}
                   </div>
                   <div className="text-left">
                      <div className="font-bold text-white text-lg">{t.name}</div>
                      <div className="text-sm text-primary-teal">{t.role}</div>
                   </div>
                </div>
             </GlassCard>
          </div>
        );
      })}
      
      {/* Indicators */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-primary-teal w-8 shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
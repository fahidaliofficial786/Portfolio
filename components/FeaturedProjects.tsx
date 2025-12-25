import React from 'react';
import { GlassCard } from './GlassCard';
import { DetailedProject } from '../types';
import { SectionTitle } from './SectionTitle';

interface FeaturedProjectsProps {
  projects: DetailedProject[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <section className="py-20 container mx-auto max-w-7xl px-4">
      <SectionTitle 
        title="Classified Project Archives" 
        subtitle="Selected high-impact operations involving GHL Automation and Security Intelligence." 
        align="center" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <GlassCard 
            key={index} 
            className="group hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-primary-teal/40 flex flex-col h-full"
          >
            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-primary-teal/20 group-hover:text-primary-teal transition-all duration-300">
               <i className={`${project.iconClass} bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:text-primary-teal`}></i>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-teal transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-gray-400 leading-relaxed flex-grow">
              {project.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-xs font-mono text-primary-teal">CONFIDENTIAL</span>
               <i className="fa-solid fa-arrow-right -rotate-45 text-gray-500"></i>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
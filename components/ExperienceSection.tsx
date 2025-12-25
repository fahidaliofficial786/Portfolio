import React from 'react';
import { ExperienceItem, CertificationItem } from '../types';
import { GlassCard } from './GlassCard';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  certifications: CertificationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, certifications }) => {
  return (
    <section className="py-20 container mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
           <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <i className="fa-solid fa-briefcase text-primary-purple"></i> Mission History
           </h2>
           <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                   {/* Timeline Dot */}
                   <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-2 border-[#0A0F19] bg-gray-600 group-hover:bg-primary-purple transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                   
                   <GlassCard className="p-6 transition-all hover:border-primary-purple/40">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                         <span className="text-xs font-mono py-1 px-2 rounded bg-white/5 text-primary-purple border border-white/10">
                            {exp.period}
                         </span>
                      </div>
                      <div className="text-sm text-gray-400 font-semibold mb-4">{exp.company}</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300/80">
                         {exp.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                         ))}
                      </ul>
                   </GlassCard>
                </div>
              ))}
           </div>
        </div>

        {/* Certifications & Education Column */}
        <div className="flex flex-col gap-12">
           
           {/* Certifications */}
           <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                 <i className="fa-solid fa-certificate text-primary-teal"></i> Clearances
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {certifications.map((cert, i) => (
                    <GlassCard key={i} className="p-5 flex items-center gap-4 hover:bg-white/5 transition-colors group">
                       <i className={`${cert.iconClass} text-3xl text-gray-500 group-hover:text-primary-teal transition-colors`}></i>
                       <div>
                          <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                          <p className="text-xs text-gray-400">{cert.issuer}</p>
                       </div>
                    </GlassCard>
                 ))}
              </div>
           </div>

           {/* Education (Static from HTML) */}
           <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                 <i className="fa-solid fa-graduation-cap text-green-400"></i> Education
              </h2>
              <GlassCard className="p-6 mb-4">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">BS in Computer Science</h3>
                    <span className="text-xs text-gray-500">2019 - 2023</span>
                 </div>
                 <p className="text-green-400 font-mono text-sm">Govt University</p>
              </GlassCard>
              <GlassCard className="p-6">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">F.sc Engineering</h3>
                    <span className="text-xs text-gray-500">2017 - 2019</span>
                 </div>
                 <p className="text-green-400 font-mono text-sm">Superior College</p>
              </GlassCard>
           </div>

        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { SEO } from '../components/SEO';
import { SOCIAL_LINKS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-5xl px-4">
      <SEO 
        title="About Fahid Ali"
        description="Fahid Ali is a Mad Scientist of Automation and a Guardian of WordPress Security. Learn about his mission to secure and scale businesses."
      />

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image / Stats */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary-teal shadow-[0_0_30px_rgba(0,240,255,0.2)] relative group bg-[#0F1115]">
            <img 
              src="https://fhdtech.com/wp-content/portfoliouploads/fahid.png" 
              alt="Fahid Ali - Automation Expert" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <GlassCard className="p-6 text-center">
             <h3 className="text-4xl font-black text-white mb-1">130+</h3>
             <p className="text-gray-400 text-sm uppercase tracking-widest">Projects Completed</p>
          </GlassCard>
          <div className="flex justify-center gap-4">
             <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:scale-110 transition-transform"><i className="fab fa-github"></i></a>
             <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3">
           <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-500">Architect</span> Behind The Code
           </h1>
           
           <div className="prose prose-invert prose-lg text-gray-300">
              <p>
                 Hello, I'm <strong>Fahid Ali</strong>. In the digital world, I play two very distinct but complementary roles.
              </p>
              <p>
                 By day, I am an <strong>Automation Architect</strong>. I use tools like GoHighLevel, Zapier, and Python to build complex, self-sustaining business systems. I believe that if a task is repeated more than twice, it should be automated. My goal is to buy you back your time.
              </p>
              <p>
                 By night, I am a <strong>Security Specialist</strong>. The internet is a hostile environment. I have spent years studying malware signatures, backdoor exploits, and server hardening. When a WordPress site gets hacked, I am the one you call to extract the infection and fortify the walls.
              </p>
              
              <h3 className="text-white font-bold mt-8 mb-4">My Philosophy</h3>
              <ul className="list-none pl-0 space-y-4">
                 <li className="flex items-start gap-3">
                    <i className="fa-solid fa-bolt text-primary-teal mt-1"></i>
                    <span><strong>Speed is Security:</strong> Bloated code is vulnerable code. I write lean, efficient scripts.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <i className="fa-solid fa-link text-primary-teal mt-1"></i>
                    <span><strong>Everything Connected:</strong> Your CRM should talk to your website, which should talk to your payment gateway.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <i className="fa-solid fa-lock text-primary-teal mt-1"></i>
                    <span><strong>Trust Zero:</strong> I build security systems assuming the breach has already been attempted.</span>
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};
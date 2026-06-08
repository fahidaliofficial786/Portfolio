
import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { PageRoutes } from '../types';

const SERVICE_DIRECTORY = [
  {
    title: 'Websites & Digital Presence',
    desc: 'High-performance React & WordPress builds engineered for speed and conversion.',
    route: PageRoutes.SERVICE_WEB,
    icon: 'fa-solid fa-laptop-code',
    color: 'text-blue-500',
    tags: ['React', 'Next.js', 'WordPress']
  },
  {
    title: 'Paid Advertising',
    desc: 'AI-driven PPC campaigns on Google & Meta that maximize your ROAS.',
    route: PageRoutes.SERVICE_ADS,
    icon: 'fa-solid fa-bullhorn',
    color: 'text-orange-500',
    tags: ['Google Ads', 'Meta', 'TikTok']
  },
  {
    title: 'Content & Creative',
    desc: 'SEO-optimized blogs, video scripts, and visuals that position you as an authority.',
    route: PageRoutes.SERVICE_CONTENT,
    icon: 'fa-solid fa-pen-nib',
    color: 'text-purple-500',
    tags: ['SEO', 'Copywriting', 'Design']
  },
  {
    title: 'Local SEO',
    desc: 'Dominate the Map Pack. Citations, GMB optimization, and review management.',
    route: PageRoutes.SERVICE_SEO,
    icon: 'fa-solid fa-map-location-dot',
    color: 'text-green-500',
    tags: ['GMB', 'Rankings', 'Citations']
  },
  {
    title: 'CRM & Automation',
    desc: 'Full GoHighLevel setup. Automate your sales, follow-ups, and bookings.',
    route: PageRoutes.SERVICE_CRM,
    icon: 'fa-solid fa-robot',
    color: 'text-red-500',
    tags: ['GHL', 'Zapier', 'AI']
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-7xl px-4">
      <SEO 
        title="Services Hub"
        description="Explore comprehensive services including Websites, Paid Ads, Content Strategy, Local SEO, and CRM Automation by Fahid Ali."
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Technical <span className="text-primary-teal">Capabilities</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Select a module below to view detailed specifications, case studies, and pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {SERVICE_DIRECTORY.map((service, i) => (
          <Link key={i} to={service.route} className="block h-full group">
            <GlassCard className="h-full flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary-teal/40">
              <div className="flex justify-between items-start mb-6">
                 <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl ${service.color} group-hover:scale-110 transition-transform`}>
                    <i className={service.icon}></i>
                 </div>
                 <i className="fa-solid fa-arrow-right -rotate-45 text-gray-500 group-hover:text-primary-teal transition-colors"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-teal transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                 {service.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                       {tag}
                    </span>
                 ))}
              </div>
            </GlassCard>
          </Link>
        ))}
        
        {/* Security Special Card */}
        <Link to={PageRoutes.SECURITY} className="block h-full group">
            <GlassCard className="h-full flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 border-red-500/30 bg-red-900/10 hover:bg-red-900/20">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-3xl text-red-500 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-shield-virus"></i>
                 </div>
                 <i className="fa-solid fa-arrow-right -rotate-45 text-red-500"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Emergency Security
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                Hacked WordPress site? Malware removal, blacklist recovery, and security hardening protocols.
              </p>
              
              <div className="flex gap-2 flex-wrap">
                 <span className="text-xs font-mono px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/20">Clean</span>
                 <span className="text-xs font-mono px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/20">Protect</span>
              </div>
            </GlassCard>
        </Link>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Unsure which module you need?</h2>
        <Link to={PageRoutes.CONTACT} className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all inline-block">
          Book a Free Strategy Call
        </Link>
      </div>
    </div>
  );
};

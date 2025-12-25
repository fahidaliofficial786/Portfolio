import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { GHL_SERVICES, WP_SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-7xl px-4">
      <SEO 
        title="Services - GHL Automation & WP Security"
        description="Explore comprehensive services including GoHighLevel automation, SaaS configuration, WordPress malware removal, and security hardening by Fahid Ali."
        keywords="GoHighLevel, GHL Automation, WordPress Security, Malware Removal, SaaS Setup, Zapier Integration"
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Technical <span className="text-primary-teal">Capabilities</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          I provide a dual-specialization that is rare in the industry: Growth infrastructure via Automation and Asset Protection via Cyber Security.
        </p>
      </div>

      {/* GHL Section */}
      <div className="mb-20">
        <SectionTitle title="Automation & Growth (GoHighLevel)" subtitle="Scale your agency or business with systems that run on autopilot." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GHL_SERVICES.map((s, i) => (
            <GlassCard key={i} className="p-8 group hover:border-primary-purple/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-purple/20 flex items-center justify-center text-primary-purple text-2xl group-hover:scale-110 transition-transform">
                  <i className={s.iconClass}></i>
                </div>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* WP Section */}
      <div className="mb-20">
        <SectionTitle title="Security & Defense (WordPress)" subtitle="Military-grade protection for your digital real estate." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WP_SERVICES.map((s, i) => (
            <GlassCard key={i} className="p-8 group hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-4 group-hover:scale-110 transition-transform">
                <i className={s.iconClass}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to Upgrade Your Infrastructure?</h2>
        <a href="/#/contact" className="px-8 py-4 bg-primary-teal text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
          Book a Consultation
        </a>
      </div>
    </div>
  );
};
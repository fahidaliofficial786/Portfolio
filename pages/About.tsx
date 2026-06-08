import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { SEO } from '../components/SEO';
import { SOCIAL_LINKS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-5xl px-4">
      <SEO 
        title="About Fahid Ali - GoHighLevel Specialist & WordPress Security Expert"
        description="Fahid Ali is a systems architect, Director of FHDTECH LTD, and Fiverr Level 2 Seller. Specializing in GoHighLevel (GHL) CRM automation, Zapier, and WordPress security hardening."
      />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="w-full md:w-1/3 space-y-6">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary-teal shadow-[0_0_30px_rgba(0,240,255,0.2)] relative group bg-[#0F1115]">
            <img 
              src="https://fhdtech.com/wp-content/portfoliouploads/fahid.png" 
              alt="Fahid Ali - Systems Architect" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-4 text-center">
              <h3 className="text-3xl font-black text-white mb-1">130+</h3>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest">Projects Done</p>
            </GlassCard>
            <GlassCard className="p-4 text-center">
              <h3 className="text-3xl font-black text-teal-400 mb-1">5+</h3>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest">Years Exp</p>
            </GlassCard>
          </div>
          <div className="flex justify-center gap-4">
             <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:scale-110 transition-transform"><i className="fab fa-github"></i></a>
             <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="w-full md:w-2/3">
           <span className="text-primary-teal font-mono text-xs uppercase tracking-widest block mb-2">Systems Architect & Guardian</span>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Fahid <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-500">Ali</span>
           </h1>
           <div className="prose prose-invert prose-lg text-gray-300 space-y-4">
              <p>
                 I am a **Digital Systems Architect** and the Director of **FHDTECH LTD** (Registered UK Entity #14611440). With over 5 years of engineering experience, I specialize in combining military-grade WordPress security protocols with advanced GoHighLevel (GHL) automation workflows.
              </p>
              <p>
                 As a **Fiverr Level 2 Seller** with more than 130+ positive client evaluations, my job is to build secure, self-driving business systems. By night, I remediate hacked sites and harden server parameters; by day, I configure CRM pipelines that capture, nurture, and close leads on autopilot.
              </p>
              <p>
                 In addition to high-level automation architecture, I provide dedicated, technical **GoHighLevel Virtual Assistant (VA)** and CRM administration services. This includes day-to-day pipeline management, real-time workflow troubleshooting, custom GHL funnel layouts, form integrations, and list segmentation. Having a highly competent VA managing your GoHighLevel instance ensures your marketing campaigns run smoothly and leads never slip through the cracks.
              </p>
              <p className="text-sm font-mono text-gray-400 border-l-2 border-primary-teal/40 pl-4 py-1">
                 "If a business protocol is repeated more than twice manually, it is a liability. Automate the friction, secure the asset."
              </p>
           </div>
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* GoHighLevel Specialist Card */}
        <GlassCard className="p-8 border-t-4 border-t-primary-teal hover:border-primary-teal/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-teal/10 border border-primary-teal/20 flex items-center justify-center text-2xl text-primary-teal">
              <i className="fa-solid fa-network-wired"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">GoHighLevel Automation</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">CRM & Leads Architect</span>
            </div>
          </div>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-primary-teal mt-1"></i>
              <span><strong>Centralized CRMs:</strong> Consolidating pipelines, email templates, landing pages, and Twilio/Mailgun setups to replace bloated, expensive software stacks.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-primary-teal mt-1"></i>
              <span><strong>Database Reactivations (DBR):</strong> Running automated SMS/email sequences to revive old leads and book appointments in under 48 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-primary-teal mt-1"></i>
              <span><strong>API & Webhook Integrations:</strong> Creating complex multi-step bridges connecting GHL, Zapier, Make.com, and custom database servers.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-primary-teal mt-1"></i>
              <span><strong>Missed Call Text Back:</strong> Deploying instant SMS follow-up systems to ensure you never lose a prospect to voicemail.</span>
            </li>
          </ul>
        </GlassCard>

        {/* WordPress Security Guardian Card */}
        <GlassCard className="p-8 border-t-4 border-t-red-500 hover:border-red-500/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl text-red-500">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">WordPress Cyber Security</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Malware & Hardening Expert</span>
            </div>
          </div>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-red-500 mt-1"></i>
              <span><strong>Emergency Malware Cleanup:</strong> Full-site scans, backdoor removals, and redirect sanitization with guaranteed recovery in under 24 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-red-500 mt-1"></i>
              <span><strong>Database Prefix & API Hardening:</strong> Restricting defaults, blocking brute force against XML-RPC, and securing critical WP config parameters.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-red-500 mt-1"></i>
              <span><strong>WAF (Web Application Firewall):</strong> Installing custom-configured application firewalls to block SQLi, XSS, and bot scanning.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-red-500 mt-1"></i>
              <span><strong>Google Blacklist Fixes:</strong> Re-securing compromised files, removing malware warnings, and submitting review requests to restore SEO rankings.</span>
            </li>
          </ul>
        </GlassCard>

      </div>

      {/* Certifications & Badges */}
      <GlassCard className="p-8 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Verified Professional Credentials</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border border-white/5 bg-white/5 rounded-xl">
            <i className="fa-solid fa-graduation-cap text-3xl text-primary-teal mb-3 block"></i>
            <h4 className="text-sm font-bold text-white mb-1">GHL Automation Pro</h4>
            <span className="text-xs text-gray-500 font-mono">GoHighLevel</span>
          </div>
          <div className="text-center p-4 border border-white/5 bg-white/5 rounded-xl">
            <i className="fa-solid fa-shield-halved text-3xl text-red-400 mb-3 block"></i>
            <h4 className="text-sm font-bold text-white mb-1">WP Security Specialist</h4>
            <span className="text-xs text-gray-500 font-mono">Wordfence Academy</span>
          </div>
          <div className="text-center p-4 border border-white/5 bg-white/5 rounded-xl">
            <i className="fa-solid fa-code text-3xl text-purple-400 mb-3 block"></i>
            <h4 className="text-sm font-bold text-white mb-1">Certified WP Developer</h4>
            <span className="text-xs text-gray-500 font-mono">WordPress Foundation</span>
          </div>
          <div className="text-center p-4 border border-white/5 bg-white/5 rounded-xl">
            <i className="fa-solid fa-bolt text-3xl text-yellow-400 mb-3 block"></i>
            <h4 className="text-sm font-bold text-white mb-1">Zapier Expert</h4>
            <span className="text-xs text-gray-500 font-mono">Zapier Inc.</span>
          </div>
        </div>
      </GlassCard>

      {/* Technical Stack HUD */}
      <GlassCard className="p-8 text-center bg-[#050505]/50 border-white/5">
        <span className="text-[10px] font-mono text-primary-teal uppercase tracking-widest block mb-2">Systems Operational Status</span>
        <h3 className="text-2xl font-bold text-white mb-8">Integrated Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-6 text-3xl text-gray-400">
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="GoHighLevel"><i className="fa-solid fa-rocket"></i><span className="text-[10px] font-mono block mt-1">GHL</span></div>
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="WordPress"><i className="fa-brands fa-wordpress"></i><span className="text-[10px] font-mono block mt-1">WordPress</span></div>
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="Zapier"><i className="fa-solid fa-bolt"></i><span className="text-[10px] font-mono block mt-1">Zapier</span></div>
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="React"><i className="fa-brands fa-react"></i><span className="text-[10px] font-mono block mt-1">React</span></div>
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="JavaScript"><i className="fa-brands fa-js"></i><span className="text-[10px] font-mono block mt-1">JS</span></div>
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="Python"><i className="fa-brands fa-python"></i><span className="text-[10px] font-mono block mt-1">Python</span></div>
          <div className="hover:text-primary-teal transition-colors duration-300 cursor-default" title="PHP"><i className="fa-brands fa-php"></i><span className="text-[10px] font-mono block mt-1">PHP</span></div>
        </div>
      </GlassCard>
    </div>
  );
};
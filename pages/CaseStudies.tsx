import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { SOCIAL_LINKS } from '../constants';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "WordPress Malware Emergency Disaster Recovery",
      clientType: "E-Commerce Store (WooCommerce)",
      issue: "Site was injected with malicious redirects, getting flagged by Google Chrome and McAfee security blacklists. Sales dropped to zero within 24 hours.",
      solution: "Performed deep server audit, isolated and destroyed 47 backdoor shell scripts, cleaned infected DB tables, installed 6G Firewall configurations, and submitted delisting requests to Google.",
      metrics: [
        { label: "Cleanup Time", value: "18 Hours" },
        { label: "Malware Cleaned", value: "100%" },
        { label: "Blacklist Status", value: "Fully Restored" }
      ],
      outcome: "The site was fully cleared and back online within 18 hours. Google and McAfee warnings were removed. Security hardening prevented further SQL injections, restoring average daily sales back to normal.",
      tags: ["WP Security", "Malware Cleanup", "Firewall Hardening"],
      icon: "fa-solid fa-virus-slash",
      accent: "border-l-red-500 text-red-400"
    },
    {
      title: "GoHighLevel Lead Pre-Qualification & Booking Bot",
      clientType: "Real Estate & Mortgage Agency",
      issue: "Agents were wasting 15+ hours per week manually calling cold leads. High drop-off rate because of slow response times.",
      solution: "Built a custom GHL snapshot integrating a conversational AI SMS/WhatsApp booking agent. The bot pre-qualifies incoming Facebook ads leads in under 2 minutes and automatically books appointments on Calendly.",
      metrics: [
        { label: "Response Time", value: "< 2 Mins" },
        { label: "Lead-to-Booking", value: "+32%" },
        { label: "Hours Saved", value: "15hr/week" }
      ],
      outcome: "Increased lead-to-appointment booking conversion rates by 32%. Replaced initial sales caller triage with automated logic, allowing agents to focus exclusively on qualified meetings.",
      tags: ["GHL Automation", "AI Booking Bot", "API Integration"],
      icon: "fa-solid fa-robot",
      accent: "border-l-primary-purple text-primary-purple"
    },
    {
      title: "White-Label Snapshot Scaling for Marketing Agencies",
      clientType: "White-Label Partnership (SaaS Agency)",
      issue: "A dental marketing agency was scaling rapidly but struggling to deploy individual GHL accounts manually for new clients, causing onboarding delays.",
      solution: "Engineered a master 'onboarding snapshot' that automatically imports funnel pages, email campaigns, SMS workflows, and review integrations. Built a Zapier script linking sign-ups directly to zero-touch account creation.",
      metrics: [
        { label: "Onboarding Time", value: "Zero Manual" },
        { label: "Deployment", value: "Instant" },
        { label: "Accounts Scaled", value: "50+ Client Sites" }
      ],
      outcome: "Reduced client account setup time from 4 hours to 0 seconds. The agency expanded from 12 clients to over 50 clients without adding operations headcount.",
      tags: ["SaaS snapshot", "Zapier Automation", "Scale Operations"],
      icon: "fa-solid fa-server",
      accent: "border-l-primary-teal text-primary-teal"
    }
  ];

  return (
    <div className="pt-24 pb-12 overflow-x-hidden">
      <SEO 
        title="Case Studies - WordPress Security & GHL Automations" 
        description="Explore real-world case studies demonstrating how Fahid Ali cleans hacked WordPress sites, implements GHL AI booking bots, and automates marketing operations." 
        keywords="WordPress Case Studies, GoHighLevel Case Study, Malware Cleanup Outcomes, Automation Results, Fahid Ali Portfolio"
      />

      <section className="container mx-auto max-w-5xl px-4 text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none">
          REAL RESULTS. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-500">
            PROVEN IMPACT.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Case studies from WordPress security emergencies and GoHighLevel workflow configurations. I focus on execution time, security, and scaling metrics.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="container mx-auto max-w-6xl px-4 mb-20 space-y-12">
        {cases.map((item, index) => (
          <GlassCard key={index} className={`p-6 md:p-10 border-l-4 ${item.accent} relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-white/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Column: Metrics & Info */}
              <div className="w-full lg:w-1/3 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Client Profile</span>
                    <h4 className="text-sm font-bold text-white leading-tight">{item.clientType}</h4>
                  </div>
                </div>

                {/* Stats block */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="text-center bg-black/30 p-3 rounded-lg border border-white/5">
                      <span className="block text-lg md:text-xl font-black text-white">{m.value}</span>
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 font-mono">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-white/5 px-2.5 py-1 rounded-full text-gray-400 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Case Narrative */}
              <div className="w-full lg:w-2/3 space-y-4">
                <h3 className="text-2xl font-black text-white leading-snug group-hover:text-primary-teal transition-colors">
                  {item.title}
                </h3>
                
                <div>
                  <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-1">
                    <i className="fa-solid fa-triangle-exclamation mr-1.5"></i> The Challenge
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.issue}</p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono uppercase text-primary-teal font-bold block mb-1">
                    <i className="fa-solid fa-screwdriver-wrench mr-1.5"></i> The Execution
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.solution}</p>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-mono uppercase text-green-400 font-bold block mb-1">
                    <i className="fa-solid fa-circle-check mr-1.5"></i> The Outcome
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">{item.outcome}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </section>

      {/* Call to Action */}
      <section className="container mx-auto max-w-4xl px-4 text-center">
        <GlassCard className="p-8 md:p-12 border-primary-teal/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/5 to-blue-500/5 opacity-50 blur-3xl pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">WANT SIMILAR RESULTS?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let's build secure infrastructure and automations for your business today. Schedule a strategy call or send a quick WhatsApp message.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={SOCIAL_LINKS.calendly} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-primary-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-calendar-check"></i> Book Strategy Call
            </a>
            <a 
              href={SOCIAL_LINKS.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-green-500/10 border border-green-500/30 text-green-400 font-bold rounded-lg hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

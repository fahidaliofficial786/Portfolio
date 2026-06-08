import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { CONTACT_CONFIG, SOCIAL_LINKS } from '../constants';

export const AgencyPartnership: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(CONTACT_CONFIG.formspreeUrl, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const agencyPillars = [
    {
      title: "White-Label Snapshot Setups",
      desc: "Get your customized snapshots, pipelines, funnels, and workflows deployed instantly for each new client, completely behind the scenes.",
      icon: "fa-solid fa-clone"
    },
    {
      title: "Custom API & Automation Integrations",
      desc: "Need GHL to talk to Stripe, custom portals, or databases? I build secure Zapier/Make logic and raw webhooks that just work.",
      icon: "fa-solid fa-arrows-spin"
    },
    {
      title: "Malware Cleanups & Maintenance",
      desc: "Ensure your client sites stay online. If a site is hacked, I'll step in as your emergency tech, clean the malware, and harden the core.",
      icon: "fa-solid fa-shield-virus"
    }
  ];

  const agencyRetainers = [
    {
      title: "Lite Technical retainer",
      price: "$499",
      period: "/month",
      desc: "Perfect for growing boutique agencies needing on-call technical setup support.",
      features: [
        "Up to 10 hours of custom GHL/WP tasks",
        "Snapshot deployments & QA testing",
        "Basic Zapier/Make.com integrations",
        "48-hour standard response SLA",
        "Slack/WhatsApp support channel",
        "Emergency WP malware backup setup"
      ]
    },
    {
      title: "Pro Operations Retainer",
      price: "$999",
      period: "/month",
      recommended: true,
      desc: "For active marketing agencies requiring a dedicated technical partner to manage operations.",
      features: [
        "Up to 25 hours of custom tasks",
        "Advanced custom API integrations",
        "Complete client account onboarding setup",
        "24-hour priority response SLA",
        "Monthly audit of client workflows & security",
        "Dedicated Slack channel access",
        "Guaranteed 2-hour response on site crashes"
      ]
    },
    {
      title: "Custom Agency Snapshot",
      price: "Custom",
      period: " quote",
      desc: "For agencies wanting a complete custom CRM architecture built from scratch.",
      features: [
        "Complete GHL CRM architecture setup",
        "Custom branded funnel templates",
        "Multi-channel automation snapshots",
        "Custom API backend integrations",
        "Full walkthrough documentation & Loom guides",
        "14-days post-delivery support"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-12 overflow-x-hidden">
      <SEO 
        title="White-Label GoHighLevel & WordPress Agency Partner" 
        description="Outsource your technical operations. Fahid Ali acts as a silent white-label partner to marketing agencies, deploying GHL snapshots, custom APIs, and WP security setups." 
        keywords="White Label GoHighLevel, Agency Partner GHL, Outsource CRM setups, WordPress Agency Support, Back-end Technical VA"
      />

      {/* Hero */}
      <section className="container mx-auto max-w-5xl px-4 text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary-purple/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-block p-2.5 px-4 rounded-full bg-primary-purple/10 text-primary-purple border border-primary-purple/20 mb-6 font-mono text-xs uppercase tracking-wider animate-float">
          <i className="fa-solid fa-handshake-angle mr-2"></i> B2B Technical Partnership
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none">
          YOUR SILENT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-pink-500">
            TECH ARM.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I manage GHL setups, custom integrations, and WordPress emergency tickets under your agency's brand. Focus on closing sales; I'll handle the code.
        </p>
      </section>

      {/* Columns */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
        <SectionTitle title="How I Support Your Agency" align="center" subtitle="Scale your delivery capacity without adding overhead." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agencyPillars.map((item, i) => (
            <GlassCard key={i} className="p-8 hover:bg-white/5 transition-colors border-white/10 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-purple/15 text-primary-purple border border-primary-purple/35 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Retainer Pricing */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
        <SectionTitle title="Agency Retainers & Custom Snapshots" align="center" subtitle="Flexible models designed to slot directly into agency margins." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agencyRetainers.map((tier, i) => (
            <GlassCard 
              key={i} 
              className={`flex flex-col relative p-6 md:p-8 ${tier.recommended ? 'border-primary-purple/50 shadow-[0_0_30px_rgba(189,0,255,0.15)] md:-translate-y-4' : ''}`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-purple text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Agency Favorite
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
              <div className="text-4xl font-black text-primary-purple mb-3">
                {tier.price}<span className="text-sm text-gray-500 font-normal">{tier.period}</span>
              </div>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">{tier.desc}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <i className="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#uplink" className={`w-full py-3.5 text-center rounded-xl font-bold text-sm transition-all ${
                tier.recommended 
                  ? 'bg-gradient-to-r from-primary-purple to-pink-500 text-white hover:shadow-[0_0_20px_rgba(189,0,255,0.4)]' 
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:border-primary-purple hover:text-white'
              }`}>
                Partner Up
              </a>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SLA Details */}
      <section className="w-full bg-white/5 border-y border-white/10 py-16 mb-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
               <h4 className="text-3xl font-black text-white mb-2">NDA Protected</h4>
               <p className="text-sm text-gray-400">Strict non-disclosure. Your clients remain 100% yours.</p>
            </div>
            <div>
               <h4 className="text-3xl font-black text-white mb-2">White-Label Delivery</h4>
               <p className="text-sm text-gray-400">All communications, support, and setups done under your brand name.</p>
            </div>
            <div>
               <h4 className="text-3xl font-black text-white mb-2">Loom Training</h4>
               <p className="text-sm text-gray-400">Every setup includes video documentation, ready to pass to your client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="uplink" className="container mx-auto max-w-6xl px-4">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">ESTABLISH PARTNERSHIP UPLINK</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">Fill out the briefing form below, and I'll call you to discuss integrating into your workflow.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <GlassCard className="p-6 md:p-8">
               <h3 className="text-xl font-bold text-white mb-6">Partnership Briefing</h3>
               {formStatus === 'success' ? (
                  <div className="text-center py-12">
                     <i className="fa-solid fa-check-circle text-5xl text-green-500 mb-4"></i>
                     <h4 className="text-xl font-bold text-white">Transmission Sent!</h4>
                     <p className="text-gray-400">I will reach out within 24 hours. Stand by.</p>
                     <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary-purple hover:underline text-sm">Send New Briefing</button>
                  </div>
               ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                     <input type="hidden" name="form_type" value="Agency Partnership Request" />
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-xs text-gray-400 mb-1">Agency Name</label>
                           <input type="text" name="agency" required className="w-full bg-black/30 border border-white/10 rounded p-3 text-sm text-white focus:border-primary-purple outline-none" placeholder="Digital Force LLC" />
                        </div>
                        <div>
                           <label className="block text-xs text-gray-400 mb-1">Contact Identity</label>
                           <input type="text" name="name" required className="w-full bg-black/30 border border-white/10 rounded p-3 text-sm text-white focus:border-primary-purple outline-none" placeholder="Agent Name" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs text-gray-400 mb-1">Comms (Email)</label>
                        <input type="email" name="email" required className="w-full bg-black/30 border border-white/10 rounded p-3 text-sm text-white focus:border-primary-purple outline-none" placeholder="agent@digitalforce.com" />
                     </div>
                     <div>
                        <label className="block text-xs text-gray-400 mb-1">Partnership Needs</label>
                        <textarea name="message" rows={4} required className="w-full bg-black/30 border border-white/10 rounded p-3 text-sm text-white focus:border-primary-purple outline-none" placeholder="Let me know how many clients you manage, and your specific technical GHL/WP operations bottlenecks..."></textarea>
                     </div>
                     <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-gradient-to-r from-primary-purple to-pink-500 text-white font-bold rounded hover:shadow-[0_0_20px_rgba(189,0,255,0.4)] transition-all">
                        {formStatus === 'submitting' ? 'Transmitting...' : 'Send Partnership Request'}
                     </button>
                  </form>
               )}
            </GlassCard>

            {/* Direct Connect & Calendly */}
            <div className="space-y-6">
                <GlassCard className="p-2 h-[400px] overflow-hidden">
                   <iframe 
                      src={`${CONTACT_CONFIG.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F1115&text_color=ffffff&primary_color=BD00FF`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      title="Calendly Scheduling"
                   ></iframe>
                </GlassCard>
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="block w-full text-center py-4 bg-[#25D366] text-white font-bold rounded-lg hover:shadow-lg transition-all">
                   <i className="fa-brands fa-whatsapp mr-2 text-lg"></i> Direct WhatsApp Partner Hotline
                </a>
            </div>
         </div>
      </section>
    </div>
  );
};

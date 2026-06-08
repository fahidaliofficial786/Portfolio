
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SECURITY_PRICING, BLOG_POSTS, WP_SERVICES, WP_PROCESS_STEPS, WP_TECHNICAL_FEATURES, WP_WHY_CHOOSE_ME, SOCIAL_LINKS, WP_FAQS, CONTACT_CONFIG } from '../constants';
import { Accordion } from '../components/Accordion';

export const WPSecurity: React.FC = () => {
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

  return (
    <div className="pt-24 pb-12 overflow-x-hidden">
      
      {/* Warning Hero */}
      <section className="container mx-auto max-w-5xl px-4 text-center mb-20">
        <div className="inline-block p-3 rounded-full bg-red-500/10 text-red-500 mb-6 border border-red-500/20 animate-pulse text-sm font-bold">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i> Emergency Service Available
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          WordPress Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Hacked?</span><br/>
          Get It Cleaned & Secured Today.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Don't let hackers ruin your reputation. I provide expert malware removal, blacklist recovery, and future-proof security hardening. 
          <span className="text-white font-bold block mt-2">Get your site back online within 24 hours.</span>
        </p>
        <div className="flex justify-center gap-4">
           <a href="#contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition shadow-[0_0_20px_rgba(220,38,38,0.4)]">
             Get Emergency Help
           </a>
        </div>
      </section>

      {/* Symptoms */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
        <SectionTitle title="Is Your Site Showing These Signs?" align="center" subtitle="Act fast if you see any of these red flags." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: "fa-solid fa-ban", label: "Google Blacklist", color: "text-red-500" },
            { icon: "fa-solid fa-shuffle", label: "Strange Redirects", color: "text-orange-500" },
            { icon: "fa-solid fa-lock", label: "Admin Locked Out", color: "text-yellow-500" },
            { icon: "fa-solid fa-bug", label: "Spam Injections", color: "text-red-400" },
          ].map((item, i) => (
            <GlassCard key={i} className="text-center p-4 md:p-6 border-red-500/20">
              <i className={`${item.icon} text-3xl ${item.color} mb-3`}></i>
              <h3 className="font-bold text-gray-200 text-sm md:text-base">{item.label}</h3>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* WP Services Grid */}
      <section id="services" className="container mx-auto max-w-7xl px-4 mb-24">
         <SectionTitle title="My WordPress Security Services" align="center" subtitle="A complete solution to clean, protect, and harden your website." />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WP_SERVICES.map((s, i) => (
               <GlassCard key={i} className="p-8 hover:bg-white/5 transition-colors">
                  <i className={`${s.iconClass} text-3xl text-primary-teal mb-4`}></i>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* 3-Step Process */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <SectionTitle title="My 3-Step Cleanup Process" align="center" subtitle="Systematic approach to ensure your site is secure for the future." />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WP_PROCESS_STEPS.map((step, i) => (
               <GlassCard key={i} className="p-8 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-20 bg-primary-teal/5 rounded-full blur-xl group-hover:bg-primary-teal/10 transition-colors"></div>
                  <div className="relative z-10">
                     <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-teal to-transparent mb-4 opacity-50">
                        {step.number}
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                     <p className="text-gray-400">{step.description}</p>
                  </div>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* Why Choose Me */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <SectionTitle title="Why Choose My Service?" align="center" />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WP_WHY_CHOOSE_ME.map((item, i) => (
               <GlassCard key={i} className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary-teal to-blue-600 flex items-center justify-center text-black text-2xl mb-6 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                     <i className={item.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* Technical Arsenal (Deep Dive) */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <SectionTitle title="Technical Security Arsenal" align="center" subtitle="I go beyond basic scans. Here's the comprehensive firewall and hardening I implement." />
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WP_TECHNICAL_FEATURES.map((tech, i) => (
               <GlassCard key={i} className="p-4 flex items-center gap-3 text-sm">
                  <i className={`${tech.icon} text-primary-teal`}></i>
                  <span className="text-gray-300 font-medium text-xs md:text-sm">{tech.name}</span>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto max-w-6xl px-4 mb-24">
        <SectionTitle title="Transparent Pricing" align="center" subtitle="No hidden fees. 100% Guaranteed cleanup." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECURITY_PRICING.map((tier, i) => (
            <GlassCard 
              key={i} 
              className={`flex flex-col relative ${tier.recommended ? 'border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.15)] transform md:-translate-y-4' : ''}`}
              hoverEffect={true}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
              <div className="text-4xl font-black text-teal-400 mb-6">
                {tier.price}<span className="text-lg text-gray-500 font-normal">{tier.period || ''}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <i className="fa-solid fa-check text-green-500 mt-1 shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full py-4 text-center rounded-lg font-bold transition-all ${
                tier.recommended 
                  ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]' 
                  : 'bg-[#161b22] border border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400'
              }`}>
                {tier.ctaText}
              </a>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* About Me & Video */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <SectionTitle title="Partner in Digital Security" />
               <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-teal shadow-[0_0_20px_rgba(0,240,255,0.3)] bg-[#0F1115]">
                     <img src="https://fhdtech.com/wp-content/portfoliouploads/fahid.png" alt="Fahid Ali" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white">Fahid Ali</h3>
                     <p className="text-primary-teal font-mono">WordPress Security Specialist</p>
                  </div>
               </div>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I'm not just a developer; I'm a problem solver. With a background in Computer Science and years of hands-on experience fighting WordPress malware, I've dedicated my career to helping business owners reclaim their websites from hackers. My approach is meticulous, transparent, and focused on providing you with long-term peace of mind.
               </p>
               <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-primary-teal font-bold flex items-center gap-2">
                  <i className="fa-brands fa-linkedin text-2xl"></i> Connect on LinkedIn
               </a>
            </div>
            
            {/* Video Container */}
            <GlassCard className="p-2 overflow-hidden rounded-xl">
               <div className="relative pb-[56.25%] h-0 bg-black rounded-lg overflow-hidden">
                  <iframe 
                     src="https://drive.google.com/file/d/1RQsz_She5Wh72_M4vTB3Nv4fRdMXT80V/preview" 
                     className="absolute top-0 left-0 w-full h-full"
                     frameBorder="0" 
                     allow="autoplay; encrypted-media" 
                     allowFullScreen
                     title="Intro Video"
                  ></iframe>
               </div>
            </GlassCard>
         </div>
      </section>

      {/* Social Proof (LinkedIn & Fiverr) */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
          <SectionTitle title="Trusted Worldwide" align="center" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 w-full">
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Latest Recommendation</h3>
                  <GlassCard className="p-2 overflow-hidden rounded-xl h-[500px]">
                      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7150979542554214401" className="w-full h-full rounded-lg" frameBorder="0" title="LinkedIn Post"></iframe>
                  </GlassCard>
              </div>
              <div className="lg:col-span-2 w-full">
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Fiverr Track Record</h3>
                  <GlassCard className="p-2 overflow-hidden h-[500px] rounded-xl bg-white">
                      <iframe src="https://www.fiverr.com/users/fahidaliofficia/portfolio/" className="w-full h-full rounded-lg" style={{border: 'none'}} title="Fiverr Portfolio"></iframe>
                  </GlassCard>
              </div>
          </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-4xl px-4 mb-24">
        <SectionTitle title="Frequently Asked Questions" align="center" />
        <div className="space-y-4">
          {WP_FAQS.map((faq, i) => (
            <Accordion key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Blog Snippets */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
        <SectionTitle title="Security Insights" subtitle="Latest advice from the trenches." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <GlassCard key={post.id} className="flex flex-col h-full hover:-translate-y-2 transition-transform">
              <span className="text-xs text-teal-400 mb-2">{post.date}</span>
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{post.summary}</p>
              <button className="text-teal-400 text-sm font-bold hover:underline self-start">Read Article</button>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="container mx-auto max-w-6xl px-4 mb-12">
        <SectionTitle title="Emergency Request" align="center" subtitle="Use the form below for urgent requests. I'll get back to you ASAP." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <GlassCard className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                {formStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fa-solid fa-check text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
                      <p className="text-gray-400">I will analyze your site and reply shortly.</p>
                      <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary-teal hover:underline text-sm">Send another?</button>
                    </div>
                ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                            <input type="text" name="name" className="w-full bg-[#0A0F19] border border-gray-700 rounded p-3 text-white focus:border-teal-400 outline-none" required placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Your Email</label>
                            <input type="email" name="email" className="w-full bg-[#0A0F19] border border-gray-700 rounded p-3 text-white focus:border-teal-400 outline-none" required placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Website URL</label>
                            <input type="url" name="website" className="w-full bg-[#0A0F19] border border-gray-700 rounded p-3 text-white focus:border-teal-400 outline-none" required placeholder="https://yoursite.com" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Issue Description</label>
                            <textarea name="message" rows={4} className="w-full bg-[#0A0F19] border border-gray-700 rounded p-3 text-white focus:border-teal-400 outline-none" required placeholder="Describe the hack or error..."></textarea>
                        </div>
                        <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded hover:shadow-lg transition">
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Emergency Request'}
                        </button>
                    </form>
                )}
            </GlassCard>

            {/* Contact Info & Calendar */}
            <div className="flex flex-col gap-6">
                <GlassCard className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Direct Channels</h3>
                    <ul className="space-y-4">
                        <li>
                            <a href={`mailto:${CONTACT_CONFIG.email}`} className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition">
                                <i className="fa-solid fa-envelope text-xl"></i> {CONTACT_CONFIG.email}
                            </a>
                        </li>
                        <li>
                            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition">
                                <i className="fa-brands fa-whatsapp text-xl"></i> Chat on WhatsApp
                            </a>
                        </li>
                    </ul>
                </GlassCard>
                
                <GlassCard className="p-2 flex-grow overflow-hidden">
                     <iframe 
                        src={`${CONTACT_CONFIG.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F1115&text_color=ffffff&primary_color=EF4444`}
                        width="100%" 
                        height="100%" 
                        frameBorder="0"
                        title="Calendly Scheduling"
                        className="min-h-[400px]"
                     ></iframe>
                </GlassCard>
            </div>
        </div>
      </section>

    </div>
  );
};

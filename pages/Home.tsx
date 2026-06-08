
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { TechStackMarquee } from '../components/TechStackMarquee';
import { TerminalHero } from '../components/TerminalHero';
import { ParticleBackground } from '../components/ParticleBackground';
import { GHL_SERVICES, WP_SERVICES, SOCIAL_LINKS, CONTACT_CONFIG, PROCESS_STEPS, TESTIMONIALS, FAQS, EXPERIENCE_DATA, CERTIFICATIONS_DATA, FEATURED_PROJECTS } from '../constants';
import { SectionTitle } from '../components/SectionTitle';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ExperienceSection } from '../components/ExperienceSection';
import { Accordion } from '../components/Accordion';

export const Home: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isDay, setIsDay] = useState(true);

  // Day/Night Cycle Logic
  useEffect(() => {
    const updateTime = () => {
      const hour = new Date().getHours();
      // 6 AM to 6 PM is Day
      setIsDay(hour >= 6 && hour < 18);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(CONTACT_CONFIG.formspreeUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
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
    <div className="pt-24 md:pt-28 overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        className={`relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pb-12 transition-colors duration-[2000ms] ease-in-out ${
          isDay ? 'bg-gradient-to-b from-orange-500/10 via-blue-400/5 to-transparent' : 'bg-transparent'
        }`}
      >
        {/* Localized Particle Effect (Stars/Dust) */}
        <ParticleBackground className="opacity-60" />

        {/* Dynamic Celestial Body (Sun/Moon) */}
        <div 
           className={`absolute top-0 right-4 md:top-10 md:right-20 w-24 h-24 md:w-40 md:h-40 rounded-full transition-all duration-[2000ms] ease-in-out flex items-center justify-center overflow-hidden z-0
             ${isDay 
               ? 'bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 shadow-[0_0_120px_rgba(253,224,71,0.6)] animate-pulse-glow translate-y-0 scale-100' 
               : 'bg-gradient-to-br from-slate-200 via-slate-400 to-slate-800 shadow-[0_0_60px_rgba(148,163,184,0.3)] translate-y-4 scale-95'
             }`}
        >
             {/* Moon Craters (Only visible at night) */}
             <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${isDay ? 'opacity-0' : 'opacity-100'}`}>
                 <div className="absolute top-8 left-10 w-8 h-8 bg-slate-500/30 rounded-full shadow-inner"></div>
                 <div className="absolute bottom-10 right-8 w-10 h-10 bg-slate-500/30 rounded-full shadow-inner"></div>
                 <div className="absolute top-6 right-8 w-4 h-4 bg-slate-500/30 rounded-full shadow-inner"></div>
                 <div className="absolute top-16 left-6 w-3 h-3 bg-slate-500/30 rounded-full shadow-inner"></div>
             </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2 animate-float">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs md:text-sm font-mono text-primary-teal">System Operational | Open for Projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none drop-shadow-2xl px-2">
            AUTOMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal via-white to-primary-purple animate-pulse-glow">REALITY</span><br />
            SECURE <span className="text-gray-500">THE CORE.</span>
          </h1>
          
          <TerminalHero />
          
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4 px-4">
            Merging High-Level Automation Logic with Military-Grade WordPress Security. 
            I build systems that sleep while you earn, and shields that stay awake while you sleep.
          </p>

          {/* Buttons and Arrow Removed as requested */}
        </div>
      </section>

      {/* Marquee Tech Stack */}
      <TechStackMarquee />

      {/* Social Proof Section (Combined LinkedIn & Fiverr) */}
      <section className="py-20 container mx-auto max-w-7xl px-4">
        <SectionTitle title="Trusted by Businesses Worldwide" align="center" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-12">
          {/* LinkedIn Feed */}
          <div className="lg:col-span-1 w-full">
             <h3 className="text-xl font-bold mb-4 text-white text-center">See What My Clients Say</h3>
             <GlassCard className="p-2 overflow-hidden rounded-xl h-[500px] md:h-[600px] bg-white">
                <iframe 
                   src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7150979542554214401" 
                   className="w-full h-full rounded-lg"
                   frameBorder="0" 
                   allowFullScreen
                   title="LinkedIn Recommendation"
                ></iframe>
             </GlassCard>
          </div>
          
          {/* Fiverr Portfolio */}
          <div className="lg:col-span-2 w-full">
             <h3 className="text-xl font-bold mb-4 text-white text-center">My Proven Track Record on Fiverr</h3>
             <GlassCard className="p-2 overflow-hidden rounded-xl h-[500px] md:h-[600px] bg-white relative">
                <iframe 
                   src="https://www.fiverr.com/users/fahidaliofficia/portfolio/" 
                   className="w-full h-full rounded-lg"
                   style={{ border: 'none' }}
                   title="Fiverr Portfolio"
                ></iframe>
             </GlassCard>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section id="services" className="py-20 md:py-32 container mx-auto max-w-7xl px-4">
        <SectionTitle title="System Modules" subtitle="Select a module to upgrade your business infrastructure." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          <GlassCard className="md:col-span-2 md:row-span-2 p-6 md:p-10 flex flex-col justify-between group overflow-hidden relative border-l-4 border-l-primary-purple">
             <div className="absolute top-0 right-0 p-32 bg-primary-purple/10 blur-[100px] rounded-full"></div>
             <div>
                <div className="w-16 h-16 rounded-2xl bg-primary-purple/20 flex items-center justify-center text-primary-purple text-3xl mb-6">
                   <i className="fa-solid fa-robot"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">GoHighLevel Ecosystems</h3>
                <p className="text-gray-400 text-base md:text-lg mb-6 max-w-lg">
                  I don't just build funnels; I build automated empires. From AI-Booking Bots to multi-channel Reactivation Campaigns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {GHL_SERVICES.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                         <i className={`${s.iconClass} text-primary-purple mt-1`}></i>
                         <div>
                            <h4 className="font-bold text-sm text-gray-200">{s.title}</h4>
                            <p className="text-xs text-gray-500">{s.description}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </GlassCard>
          <GlassCard className="md:col-span-1 md:row-span-2 p-6 md:p-8 border-l-4 border-l-red-500 hover:bg-red-900/10 transition-colors">
             <div className="h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-6">
                   <i className="fa-solid fa-shield-cat"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">WP Fortress</h3>
                <p className="text-gray-400 mb-8 flex-grow text-sm md:text-base">
                   Malware removal is just the start. I implement 6G Firewalls and Hardening protocols that hackers hate.
                </p>
                <ul className="space-y-4 text-sm text-gray-300">
                   {WP_SERVICES.map((s, i) => (
                      <li key={i} className="flex items-center gap-3">
                         <i className="fa-solid fa-check text-green-500"></i> {s.title}
                      </li>
                   ))}
                </ul>
             </div>
          </GlassCard>
          <GlassCard className="md:col-span-3 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-primary-teal/20">
             <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">API & Custom Integrations</h3>
                <p className="text-gray-400">Bridging the gap between GHL, WordPress, and Payment Gateways using Python/Node.js.</p>
             </div>
             <div className="flex gap-4 text-3xl text-gray-500">
                <i className="fa-brands fa-python hover:text-yellow-400 transition-colors"></i>
                <i className="fa-brands fa-js hover:text-yellow-300 transition-colors"></i>
                <i className="fa-brands fa-stripe hover:text-blue-400 transition-colors"></i>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* Featured Projects Grid (New) */}
      <FeaturedProjects projects={FEATURED_PROJECTS} />

      {/* Experience & Certifications (New) */}
      <ExperienceSection experience={EXPERIENCE_DATA} certifications={CERTIFICATIONS_DATA} />

      {/* Process Section */}
      <section className="py-20 container mx-auto max-w-6xl px-4">
        <SectionTitle title="Execution Protocol" subtitle="How I deliver speed and security simultaneously." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative group">
               <div className="absolute inset-0 bg-primary-teal/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative p-6 border border-white/10 rounded-xl bg-dark-card h-full hover:border-primary-teal/50 transition-colors">
                  <div className="text-5xl font-black text-white/5 absolute top-2 right-4 group-hover:text-primary-teal/10 transition-colors select-none">
                     {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 mt-4">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel (Replaced Static Grid) */}
      <section className="py-20 container mx-auto max-w-6xl px-4">
        <SectionTitle title="Client Success Stories" align="center" />
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <Accordion key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 container mx-auto max-w-6xl px-4">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
               ESTABLISH UPLINK
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Secure Line Ready. Select a frequency.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Functional Formspree Form */}
            <div className="space-y-8">
               <GlassCard className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">Encrypted Message</h3>
                  
                  {formStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fa-solid fa-check text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Transmission Received!</h4>
                      <p className="text-gray-400">Stand by for response.</p>
                      <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary-teal hover:underline text-sm">Send another?</button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="text-left space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Identity</label>
                        <div className="relative">
                           <i className="fa-regular fa-user absolute left-4 top-3.5 text-gray-500"></i>
                           <input type="text" name="name" className="w-full bg-dark-bg border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal/50 transition-all" placeholder="Agent Name" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Comms (Email)</label>
                        <div className="relative">
                           <i className="fa-regular fa-envelope absolute left-4 top-3.5 text-gray-500"></i>
                           <input type="email" name="email" className="w-full bg-dark-bg border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal/50 transition-all" placeholder="agent@agency.com" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Mission Details</label>
                        <textarea name="message" rows={4} className="w-full bg-dark-bg border border-white/10 rounded-lg p-3 text-white focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal/50 transition-all" placeholder="Briefing..." required></textarea>
                      </div>
                      <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-gradient-to-r from-primary-teal to-blue-600 text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex justify-center items-center gap-2">
                        {formStatus === 'submitting' ? (
                          <>
                             <i className="fa-solid fa-circle-notch fa-spin"></i> Encrypting & Sending...
                          </>
                        ) : 'Transmit Data'}
                      </button>
                      {formStatus === 'error' && (
                        <p className="text-red-500 text-sm text-center">Transmission Failed. Retry.</p>
                      )}
                    </form>
                  )}
               </GlassCard>
               
               <div className="grid grid-cols-2 gap-4">
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all group">
                     <i className="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
                     <span className="font-bold">WhatsApp</span>
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all group">
                     <i className="fa-brands fa-linkedin text-2xl group-hover:scale-110 transition-transform"></i>
                     <span className="font-bold">LinkedIn</span>
                  </a>
               </div>
            </div>

            {/* Right: Calendly Embed */}
            <GlassCard className="p-2 h-[500px] lg:h-auto overflow-hidden">
               <iframe 
                  src={`${CONTACT_CONFIG.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F1115&text_color=ffffff&primary_color=00F0FF`}
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Calendly Scheduling"
               ></iframe>
            </GlassCard>
         </div>
      </section>

    </div>
  );
};

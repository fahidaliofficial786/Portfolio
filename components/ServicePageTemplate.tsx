
import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { SectionTitle } from './SectionTitle';
import { SEO } from './SEO';
import { CONTACT_CONFIG, SOCIAL_LINKS } from '../constants';
import { ServicePageData } from '../data/services';

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ data }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(CONTACT_CONFIG.formspreeUrl, {
        method: 'POST',
        body: formData,
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
    <div className="pt-24 pb-12 w-full overflow-hidden">
      <SEO title={data.seoTitle} description={data.seoDesc} />

      {/* 1. HERO */}
      <section className="container mx-auto max-w-7xl px-4 mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-teal/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-block p-2 px-4 rounded-full border border-primary-teal/30 bg-primary-teal/10 text-primary-teal mb-6 font-mono text-xs tracking-widest uppercase animate-float">
           {data.id.replace('-', ' ')} MODULE ACTIVE
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
          {data.hero.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-500">
            {data.hero.highlight}
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {data.hero.subtitle}
        </p>
        <div className="mt-8">
            <a href="#uplink" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-primary-teal hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all">
                Initialize Protocol
            </a>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="container mx-auto max-w-5xl px-4 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.stats.map((stat, i) => (
               <GlassCard key={i} className="text-center p-8 border-t-4 border-t-primary-teal">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm font-bold">{stat.label}</div>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <SectionTitle title={data.painPoints.title} align="center" />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.painPoints.items.map((item, i) => (
               <GlassCard key={i} className="p-8 text-center border-red-500/20 bg-red-900/5 group hover:bg-red-900/10 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center text-red-500 text-2xl mb-4 group-hover:scale-110 transition-transform">
                     <i className={item.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* 4. TARGET AUDIENCE */}
      <section className="w-full bg-white/5 border-y border-white/10 py-16 mb-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">{data.targetAudience.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {data.targetAudience.list.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-full border border-white/10">
                        <i className="fa-solid fa-check text-primary-teal"></i>
                        <span className="text-gray-200 font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. SOLUTION */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <SectionTitle title={data.solution.title} />
               <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-primary-teal pl-6">
                  {data.solution.desc}
               </p>
            </div>
            <div className="flex-1 flex justify-center">
               <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-teal to-blue-600 rounded-2xl rotate-3 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                  <i className={`${data.solution.imageIcon} text-9xl text-black opacity-50`}></i>
               </div>
            </div>
         </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <SectionTitle title={data.methodology.title} align="center" />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.methodology.steps.map((step, i) => (
                <div key={i} className="relative pl-8 border-l border-white/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center text-black font-bold text-xs">
                        {i + 1}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
            ))}
         </div>
      </section>

      {/* 7. FEATURES GRID */}
      <section className="container mx-auto max-w-7xl px-4 mb-24">
         <SectionTitle title={data.features.title} align="center" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.features.items.map((feature, i) => (
               <GlassCard key={i} className="p-8 flex items-start gap-4 hover:border-primary-teal/50 transition-colors group">
                  <div className="text-primary-teal text-xl mt-1">
                     <i className="fa-solid fa-check-circle"></i>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-teal transition-colors">{feature.title}</h3>
                     <p className="text-gray-400">{feature.desc}</p>
                  </div>
               </GlassCard>
            ))}
         </div>
      </section>

      {/* 8. DELIVERABLES LIST */}
      <section className="container mx-auto max-w-4xl px-4 mb-24">
        <GlassCard className="p-8 md:p-12 border-primary-teal/30">
            <h3 className="text-2xl font-bold text-center text-white mb-8">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {data.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded">
                        <i className="fa-solid fa-box-open text-primary-teal"></i>
                        <span className="text-gray-200 font-mono text-sm">{item}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
      </section>

      {/* 9. COMPARISON */}
      <section className="container mx-auto max-w-5xl px-4 mb-24">
        <SectionTitle title="The Quality Gap" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/20 rounded-xl overflow-hidden">
            <div className="bg-[#0F1115] p-8">
                <h4 className="text-center text-xl font-bold text-primary-teal mb-6">FHD Tech</h4>
                <ul className="space-y-4">
                    {data.comparison.us.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white">
                            <i className="fa-solid fa-circle-check text-green-500"></i> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white/5 p-8 border-l border-white/10">
                <h4 className="text-center text-xl font-bold text-gray-500 mb-6">Others</h4>
                <ul className="space-y-4">
                    {data.comparison.others.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400">
                            <i className="fa-solid fa-circle-xmark text-red-500"></i> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* 10. TECH STACK */}
      <section className="w-full bg-white/5 border-y border-white/10 py-12 mb-24">
         <div className="container mx-auto text-center">
            <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-8">{data.techStack.title}</h3>
            <div className="flex justify-center gap-8 md:gap-16 flex-wrap px-4">
               {data.techStack.icons.map((icon, i) => (
                  <i key={i} className={`${icon} text-4xl md:text-5xl text-gray-600 hover:text-white transition-colors`}></i>
               ))}
            </div>
         </div>
      </section>

      {/* 11. PROCESS TIMELINE */}
      <section className="container mx-auto max-w-6xl px-4 mb-24">
         <SectionTitle title={data.process.title} align="center" />
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.process.steps.map((step, i) => (
               <div key={i} className="relative p-6 border-l-2 border-white/10 hover:border-primary-teal transition-colors bg-white/5 rounded-r-xl group">
                  <div className="text-4xl font-black text-white/10 absolute top-2 right-4 group-hover:text-primary-teal/20 transition-colors">{step.number}</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 12. CASE STUDY */}
      <section className="container mx-auto max-w-4xl px-4 mb-24">
         <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 p-8 md:p-12 text-center">
            <div className="absolute top-0 right-0 p-32 bg-primary-teal/10 blur-[100px] rounded-full"></div>
            <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-4">Case Study Highlight</h3>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{data.caseStudy.title}</h2>
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-white my-6">
                {data.caseStudy.metric}
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{data.caseStudy.desc}</p>
         </div>
      </section>

      {/* 13. FAQ */}
      <section className="container mx-auto max-w-4xl px-4 mb-24">
        <SectionTitle title="Operational FAQs" align="center" />
        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <GlassCard key={i} className="p-6 cursor-pointer hover:bg-white/5 transition-colors group">
              <details className="group">
                <summary className="list-none flex justify-between items-center font-bold text-lg text-gray-200 cursor-pointer">
                   {faq.question}
                   <span className="text-primary-teal group-open:rotate-180 transition-transform"><i className="fa-solid fa-chevron-down"></i></span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed pl-2 border-l-2 border-primary-teal/30">
                   {faq.answer}
                </p>
              </details>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 14. UPLINK (CONTACT) */}
      <section id="uplink" className="container mx-auto max-w-6xl px-4">
         <div className="text-center mb-12">
            <SectionTitle title="Establish Uplink" align="center" subtitle="Secure Secure connection ready. Initiate project request." />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <GlassCard className="p-8">
               <h3 className="text-2xl font-bold text-white mb-6">Project Request: {data.seoTitle}</h3>
               {formStatus === 'success' ? (
                  <div className="text-center py-12">
                     <i className="fa-solid fa-check-circle text-5xl text-green-500 mb-4"></i>
                     <h4 className="text-xl font-bold text-white">Transmission Received</h4>
                     <p className="text-gray-400">Stand by for response.</p>
                     <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary-teal hover:underline text-sm">Send New Request</button>
                  </div>
               ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                     <input type="hidden" name="service_type" value={data.seoTitle} />
                     <div>
                        <label className="block text-sm text-gray-400 mb-1">Identity</label>
                        <input type="text" name="name" required className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-primary-teal outline-none" placeholder="Name" />
                     </div>
                     <div>
                        <label className="block text-sm text-gray-400 mb-1">Comms (Email)</label>
                        <input type="email" name="email" required className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-primary-teal outline-none" placeholder="Email" />
                     </div>
                     <div>
                        <label className="block text-sm text-gray-400 mb-1">Mission Specs</label>
                        <textarea name="message" rows={4} required className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-primary-teal outline-none" placeholder="Describe your requirements..."></textarea>
                     </div>
                     <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-primary-teal text-black font-bold rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                        {formStatus === 'submitting' ? 'Transmitting...' : 'Send Request'}
                     </button>
                  </form>
               )}
            </GlassCard>

            {/* Calendly */}
            <div className="space-y-6">
                <GlassCard className="p-2 h-[500px] overflow-hidden">
                   <iframe 
                      src={`${CONTACT_CONFIG.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F1115&text_color=ffffff&primary_color=00F0FF`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      title="Calendly Scheduling"
                   ></iframe>
                </GlassCard>
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="block w-full text-center py-4 bg-[#25D366] text-white font-bold rounded-lg hover:shadow-lg transition-all">
                   <i className="fa-brands fa-whatsapp mr-2"></i> Priority Chat on WhatsApp
                </a>
            </div>
         </div>
      </section>

    </div>
  );
};

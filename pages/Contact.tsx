import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { SOCIAL_LINKS, CONTACT_CONFIG } from '../constants';

export const Contact: React.FC = () => {
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
    <div className="pt-24 pb-12 container mx-auto max-w-6xl px-4">
      <SEO 
        title="Contact Fahid Ali"
        description="Get in touch with Fahid Ali for GHL Automation projects or Emergency WordPress Security services. Book a call or send a message."
      />

      <SectionTitle title="Establish Uplink" align="center" subtitle="Ready to start a project? My channels are open." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        
        {/* Contact Form */}
        <GlassCard className="p-8 md:p-12">
           <h3 className="text-2xl font-bold text-white mb-6">Send Transmission</h3>
           {formStatus === 'success' ? (
              <div className="text-center py-20">
                <i className="fa-solid fa-check-circle text-6xl text-green-500 mb-4"></i>
                <h4 className="text-2xl font-bold text-white">Message Received</h4>
                <p className="text-gray-400 mt-2">I will respond to your frequency shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary-teal hover:underline">Send New Message</button>
              </div>
           ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                   <label className="block text-gray-400 mb-2 font-mono text-sm">IDENTITY (Name)</label>
                   <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary-teal outline-none transition-colors" placeholder="Agent Smith" />
                </div>
                <div>
                   <label className="block text-gray-400 mb-2 font-mono text-sm">FREQUENCY (Email)</label>
                   <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary-teal outline-none transition-colors" placeholder="agent@matrix.com" />
                </div>
                <div>
                   <label className="block text-gray-400 mb-2 font-mono text-sm">INTEL (Message)</label>
                   <textarea name="message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary-teal outline-none transition-colors" placeholder="Briefing details..."></textarea>
                </div>
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-primary-teal text-black font-bold text-lg rounded-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all">
                   {formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}
                </button>
              </form>
           )}
        </GlassCard>

        {/* Info & Calendar */}
        <div className="space-y-8">
           {/* Quick Links */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={SOCIAL_LINKS.email} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary-teal transition-all group">
                 <i className="fa-solid fa-envelope text-3xl text-gray-400 group-hover:text-primary-teal mb-4 block"></i>
                 <span className="font-bold text-white">Email Me</span>
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all group">
                 <i className="fa-brands fa-whatsapp text-3xl text-green-500 mb-4 block"></i>
                 <span className="font-bold text-white">WhatsApp</span>
              </a>
           </div>

           {/* Calendar */}
           <GlassCard className="p-2 h-[500px] overflow-hidden">
               <iframe 
                  src={`${CONTACT_CONFIG.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F1115&text_color=ffffff&primary_color=00F0FF`}
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Calendly"
               ></iframe>
           </GlassCard>
        </div>

      </div>
    </div>
  );
};
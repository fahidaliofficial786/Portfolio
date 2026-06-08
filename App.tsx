
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WPSecurity } from './pages/WPSecurity';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Legal } from './pages/Legal';
import { CaseStudies } from './pages/CaseStudies';
import { AgencyPartnership } from './pages/AgencyPartnership';
import { ROICalculator } from './pages/ROICalculator';
import { PageRoutes } from './types';
import { SystemHUD } from './components/SystemHUD';
import { AIChatWidget } from './components/AIChatWidget';
import { RobotsBackground } from './components/RobotsBackground';
import { BootSequence } from './components/BootSequence';
import { NetworkScanner } from './components/NetworkScanner';
import { SOCIAL_LINKS } from './constants';
import { ServicePageTemplate } from './components/ServicePageTemplate';
import { SERVICES_DATA } from './data/services';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- LEGAL CONTENT ---
const DMCA_CONTENT = `
<div class="space-y-6">
  <p><strong>FHD Tech</strong> ("Company", "we", "us", or "our") respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act ("DMCA"), we will respond expeditiously to claims of copyright infringement committed on our website (app.fhdtech.com or fhdtech.com).</p>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">1. Notice of Infringement</h3>
  <p>If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing a Notice of Alleged Infringement containing the following information:</p>
  <ul class="list-disc pl-6 space-y-2 text-gray-300">
    <li>Identify the copyrighted work that you claim has been infringed.</li>
    <li>Identify the material that you claim is infringing, including the URL or link location where the material can be found.</li>
    <li>Provide your contact info, including your mailing address, telephone number, and email address.</li>
    <li>Include a statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
    <li>Include a statement that the information in the notification is accurate, and under penalty of perjury, that you are the copyright owner or authorized to act on behalf of the owner.</li>
    <li>Provide your physical or electronic signature.</li>
  </ul>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">2. Submission</h3>
  <p>Please deliver this Notice, with all items completed, to our designated Copyright Agent at: <strong>Fahaidaliofficial@gmail.com</strong>.</p>
</div>
`;
const PRIVACY_CONTENT = `
<div class="space-y-6">
  <p>This Privacy Policy describes how <strong>FHD Tech</strong> collects, uses, and protects your personal information when you use our website or services.</p>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">1. Information We Collect</h3>
  <p>We may collect information that you directly provide to us, including:</p>
  <ul class="list-disc pl-6 space-y-2 text-gray-300">
    <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
    <li><strong>Project Details:</strong> Information about your website, servers, WordPress credentials, or GHL logins when you request services.</li>
    <li><strong>Communications:</strong> Records of our chat transcripts, voice feedback, or emails.</li>
  </ul>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">2. How We Use Information</h3>
  <p>We use your information to provide, maintain, and secure our services, including:</p>
  <ul class="list-disc pl-6 space-y-2 text-gray-300">
    <li>Removing malware and hardening your WordPress installations.</li>
    <li>Building and configuring custom GoHighLevel CRM workflows and snapshots.</li>
    <li>Communicating with you regarding project status and answering support requests.</li>
  </ul>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">3. Security of Your Information</h3>
  <p>We implement military-grade administrative, technical, and physical security measures to protect your credentials and personal information. We never sell your data to third parties.</p>
</div>
`;
const TERMS_CONTENT = `
<div class="space-y-6">
  <p>Welcome to <strong>FHD Tech</strong>. By accessing our website and using our services, you agree to comply with and be bound by the following Terms of Service.</p>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">1. Services Offered</h3>
  <p>FHD Tech provides GoHighLevel (GHL) automation configurations and WordPress security services (emergency malware removal, firewalls, and hardening). Services are delivered subject to project briefs and agreements.</p>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">2. Client Responsibilities</h3>
  <p>To perform services, you may be required to provide temporary administrator credentials, hosting panel access, or API keys. You are responsible for maintaining backups of your site prior to any malware removal or configuration changes.</p>
  
  <h3 class="text-xl font-bold text-white mt-6 mb-2">3. Limitation of Liability</h3>
  <p>While we apply industry best practices to secure your site, we do not warrant that your website will be 100% immune to future hacking attempts or server downtime. Under no circumstances shall FHD Tech be liable for any lost profits, lost data, or consequential damages.</p>
</div>
`;

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);

  // Safety Unlock: Ensure scrolling is enabled on mount
  useEffect(() => {
    if (isBooted) {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.documentElement.style.overflow = '';
    }
  }, [isBooted]);

  if (!isBooted) {
    return <BootSequence onComplete={() => setIsBooted(true)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      
      {/* LAYER 1: Background (Fixed, lowest z-index) */}
      <RobotsBackground />

      {/* LAYER 2: Fixed Navigation & Tools (Interactive) */}
      <NetworkScanner />
      <Header />

      {/* LAYER 3: Scrollable Content (Relative, z-10) 
          Applied overflow-x-hidden here to protect the layout without locking body scroll. */}
      <div className="relative z-10 w-full flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow w-full">
          <Routes>
            <Route path={PageRoutes.HOME} element={<Home />} />
            <Route path={PageRoutes.SECURITY} element={<WPSecurity />} />
            <Route path={PageRoutes.SERVICES} element={<Services />} />
            <Route path={PageRoutes.SERVICE_WEB} element={<ServicePageTemplate data={SERVICES_DATA['websites']} />} />
            <Route path={PageRoutes.SERVICE_ADS} element={<ServicePageTemplate data={SERVICES_DATA['advertising']} />} />
            <Route path={PageRoutes.SERVICE_CONTENT} element={<ServicePageTemplate data={SERVICES_DATA['content']} />} />
            <Route path={PageRoutes.SERVICE_SEO} element={<ServicePageTemplate data={SERVICES_DATA['local-seo']} />} />
            <Route path={PageRoutes.SERVICE_CRM} element={<ServicePageTemplate data={SERVICES_DATA['crm-automation']} />} />
            <Route path={PageRoutes.CASE_STUDIES} element={<CaseStudies />} />
            <Route path={PageRoutes.AGENCY_PARTNERSHIP} element={<AgencyPartnership />} />
            <Route path={PageRoutes.ROI_CALCULATOR} element={<ROICalculator />} />
            <Route path={PageRoutes.ABOUT} element={<About />} />
            <Route path={PageRoutes.CONTACT} element={<Contact />} />
            <Route path={PageRoutes.BLOG} element={<Blog />} />
            <Route path={PageRoutes.BLOG_POST} element={<BlogPost />} />
            <Route path={PageRoutes.DMCA} element={<Legal title="DMCA Policy" content={DMCA_CONTENT} />} />
            <Route path={PageRoutes.PRIVACY} element={<Legal title="Privacy Policy" content={PRIVACY_CONTENT} />} />
            <Route path={PageRoutes.TERMS} element={<Legal title="Terms of Service" content={TERMS_CONTENT} />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* LAYER 4: Floating Widgets (Individually Fixed to prevent overlay blocking) */}
      
      {/* HUD - Desktop Only (Internal z-40) */}
      <SystemHUD />
      
      {/* WhatsApp Button - High z-index to sit on top */}
      <a 
        href={SOCIAL_LINKS.whatsapp} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] cursor-pointer"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      {/* Chat Widget (Internal z-90) */}
      <AIChatWidget />

    </Router>
  );
};

export const AppRouter = App;
export default App;

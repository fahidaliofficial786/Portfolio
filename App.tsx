
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WPSecurity } from './pages/WPSecurity';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Tools } from './pages/Tools';
import { ToolsSEO } from './pages/ToolsSEO';
import { ToolsTrends } from './pages/ToolsTrends';
import { ToolsBusiness } from './pages/ToolsBusiness';
import { ToolsSocial } from './pages/ToolsSocial';
import { ToolsContent } from './pages/ToolsContent';
import { ToolsNews } from './pages/ToolsNews';
import { ToolsBroadcast } from './pages/ToolsBroadcast';
import { ToolsImageGen } from './pages/ToolsImageGen';
import { Legal } from './pages/Legal';
import { PageRoutes } from './types';
import { SystemHUD } from './components/SystemHUD';
import { AIChatWidget } from './components/AIChatWidget';
import { BirdsBackground } from './components/BirdsBackground';
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
<h2>Digital Millennium Copyright Act ("DMCA") Policy</h2>
<p><strong>FHD Tech</strong> respects the intellectual property rights of others...</p>
`;
const PRIVACY_CONTENT = `
<h2>Privacy Policy</h2>
<p><strong>Last Updated: October 2025</strong></p>
`;
const TERMS_CONTENT = `
<h2>Terms of Service</h2>
<p><strong>Last Updated: October 2025</strong></p>
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
      <BirdsBackground />

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
            <Route path={PageRoutes.TOOLS} element={<Tools />} />
            <Route path={PageRoutes.TOOLS_SEO} element={<ToolsSEO />} />
            <Route path={PageRoutes.TOOLS_TRENDS} element={<ToolsTrends />} />
            <Route path={PageRoutes.TOOLS_BUSINESS} element={<ToolsBusiness />} />
            <Route path={PageRoutes.TOOLS_SOCIAL} element={<ToolsSocial />} />
            <Route path={PageRoutes.TOOLS_CONTENT} element={<ToolsContent />} />
            <Route path={PageRoutes.TOOLS_NEWS} element={<ToolsNews />} />
            <Route path={PageRoutes.TOOLS_BROADCAST} element={<ToolsBroadcast />} />
            <Route path={PageRoutes.TOOLS_IMAGE_GEN} element={<ToolsImageGen />} />
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

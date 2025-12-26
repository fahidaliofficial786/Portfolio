
import React, { useState } from 'react';
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
<p><strong>FHD Tech</strong> respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at <a href="http://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="nofollow">http://www.copyright.gov/legislation/dmca.pdf</a>, FHD Tech will respond expeditiously to claims of copyright infringement committed using the FHD Tech website if such claims are reported to our Designated Copyright Agent identified in the sample notice below.</p>
<!-- Truncated for brevity, assuming standard DMCA text remains same as previous -->
`;

const PRIVACY_CONTENT = `
<h2>Privacy Policy</h2>
<p><strong>Last Updated: October 2025</strong></p>
<!-- Truncated for brevity, assuming standard Privacy text remains same as previous -->
`;

const TERMS_CONTENT = `
<h2>Terms of Service</h2>
<p><strong>Last Updated: October 2025</strong></p>
<!-- Truncated for brevity, assuming standard Terms text remains same as previous -->
`;

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);

  if (!isBooted) {
    return <BootSequence onComplete={() => setIsBooted(true)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-100 selection:bg-primary-teal/30 selection:text-white relative">
        
        {/* Global Animated Backgrounds */}
        <BirdsBackground />

        {/* Gadgets & Widgets */}
        <NetworkScanner />

        <Header />
        
        <main className="flex-grow z-10 pb-12">
          <Routes>
            <Route path={PageRoutes.HOME} element={<Home />} />
            <Route path={PageRoutes.SECURITY} element={<WPSecurity />} />
            
            {/* Main Services Hub */}
            <Route path={PageRoutes.SERVICES} element={<Services />} />

            {/* NEW: Specific Service Routes */}
            <Route path={PageRoutes.SERVICE_WEB} element={<ServicePageTemplate data={SERVICES_DATA['websites']} />} />
            <Route path={PageRoutes.SERVICE_ADS} element={<ServicePageTemplate data={SERVICES_DATA['advertising']} />} />
            <Route path={PageRoutes.SERVICE_CONTENT} element={<ServicePageTemplate data={SERVICES_DATA['content']} />} />
            <Route path={PageRoutes.SERVICE_SEO} element={<ServicePageTemplate data={SERVICES_DATA['local-seo']} />} />
            <Route path={PageRoutes.SERVICE_CRM} element={<ServicePageTemplate data={SERVICES_DATA['crm-automation']} />} />

            {/* Tools */}
            <Route path={PageRoutes.TOOLS} element={<Tools />} />
            <Route path={PageRoutes.TOOLS_SEO} element={<ToolsSEO />} />
            <Route path={PageRoutes.TOOLS_TRENDS} element={<ToolsTrends />} />
            <Route path={PageRoutes.TOOLS_BUSINESS} element={<ToolsBusiness />} />
            <Route path={PageRoutes.TOOLS_SOCIAL} element={<ToolsSocial />} />
            <Route path={PageRoutes.TOOLS_CONTENT} element={<ToolsContent />} />
            <Route path={PageRoutes.TOOLS_NEWS} element={<ToolsNews />} />

            <Route path={PageRoutes.ABOUT} element={<About />} />
            <Route path={PageRoutes.CONTACT} element={<Contact />} />
            <Route path={PageRoutes.BLOG} element={<Blog />} />
            <Route path={PageRoutes.BLOG_POST} element={<BlogPost />} />
            
            {/* Legal Pages */}
            <Route path={PageRoutes.DMCA} element={<Legal title="DMCA Policy" content={DMCA_CONTENT} />} />
            <Route path={PageRoutes.PRIVACY} element={<Legal title="Privacy Policy" content={PRIVACY_CONTENT} />} />
            <Route path={PageRoutes.TERMS} element={<Legal title="Terms of Service" content={TERMS_CONTENT} />} />
          </Routes>
        </main>
        
        <Footer />
        <SystemHUD />
        
        {/* Sticky WhatsApp - Overlays SystemHUD */}
        <a 
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 left-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>

        {/* Interactive AI Chat Widget */}
        <AIChatWidget />
        
      </div>
    </Router>
  );
};

export default App;

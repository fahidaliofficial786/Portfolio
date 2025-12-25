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

<h3>1. Notification of Infringement</h3>
<p>If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.</p>
<p>Upon receipt of Notice as described below, FHD Tech will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged use from the Site and/or termination of the FHD Tech user's account in appropriate circumstances.</p>

<h3>2. DMCA Notice of Alleged Infringement ("Notice")</h3>
<ol>
  <li>Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you may provide a representative list of the copyrighted works that you claim have been infringed.</li>
  <li>Identify the material or link you claim is infringing (or the subject of infringing activity) and that access to which is to be disabled, including at a minimum, if applicable, the URL of the link shown on the Site.</li>
  <li>Provide your mailing address, telephone number, and, if available, email address.</li>
  <li>Include both of the following statements in the body of the Notice:
    <ul>
      <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."</li>
      <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
    </ul>
  </li>
  <li>Provide your full legal name and your electronic or physical signature.</li>
</ol>
<p>Deliver this Notice, with all items completed, to: <strong>Fahaidaliofficial@gmail.com</strong></p>

<h3>3. Counter-Notice</h3>
<p>If you believe that your material that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your content, you may send a Counter-Notice containing the following information to the Copyright Agent:</p>
<ul>
    <li>Your physical or electronic signature;</li>
    <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>
    <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and</li>
    <li>Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in Pakistan, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
</ul>

<h3>4. Repeat Infringers</h3>
<p>It is our policy in appropriate circumstances to disable and/or terminate the accounts of users who are repeat infringers. We reserve the right to define the criteria for what constitutes a repeat infringer.</p>
`;

const PRIVACY_CONTENT = `
<h2>Privacy Policy</h2>
<p><strong>Last Updated: October 2025</strong></p>

<h3>1. Introduction</h3>
<p>Welcome to <strong>FHD Tech</strong> ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

<h3>2. Data We Collect</h3>
<p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
<ul>
  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
  <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
  <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
  <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
</ul>

<h3>3. How We Use Your Data</h3>
<p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
<ul>
  <li><strong>Service Delivery:</strong> To provide the automation and security services you have requested, including managing your GHL sub-accounts and securing your WordPress installations.</li>
  <li><strong>Communication:</strong> To manage our relationship with you which will include notifying you about changes to our terms or privacy policy, or asking you to leave a review.</li>
  <li><strong>Security:</strong> To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</li>
  <li><strong>Improvement:</strong> To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
</ul>

<h3>4. Cookies and Analytics</h3>
<p>We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. We use Google Analytics to measure and report on user activity. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>

<h3>5. Data Security</h3>
<p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
<p>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>

<h3>6. Data Retention</h3>
<p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>

<h3>7. Third-Party Links</h3>
<p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.</p>

<h3>8. Your Legal Rights</h3>
<p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent. If you wish to exercise any of the rights set out above, please contact us at <strong>Fahaidaliofficial@gmail.com</strong>.</p>
`;

const TERMS_CONTENT = `
<h2>Terms of Service</h2>
<p><strong>Last Updated: October 2025</strong></p>

<h3>1. Acceptance of Terms</h3>
<p>By accessing and using this website and the services provided by FHD Tech ("Company"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. All such guidelines or rules are hereby incorporated by reference into the TOS.</p>

<h3>2. Services Provided</h3>
<p>FHD Tech provides digital services including but not limited to:</p>
<ul>
  <li>WordPress Malware Removal and Security Hardening.</li>
  <li>GoHighLevel (GHL) Automation setup, snapshot installation, and management.</li>
  <li>Custom API Integrations (Zapier, Make.com, Python) and Software Development.</li>
  <li>Consultancy and Technical Support.</li>
</ul>
<p>FHD Tech reserves the right to modify or discontinue any aspect of our services at any time.</p>

<h3>3. User Responsibilities & Access</h3>
<p>You agree to provide accurate and complete information when requesting services. For security services, you must provide temporary administrative access to your WordPress site or hosting provider. FHD Tech agrees to keep these credentials confidential and delete them upon project completion.</p>
<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

<h3>4. Intellectual Property Rights</h3>
<p>All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of FHD Tech or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.</p>
<p><strong>Code Ownership:</strong> Upon full payment, the client receives a non-exclusive, perpetual license to use the custom automation scripts and code developed for their project for their own business use. FHD Tech retains the right to reuse generic code snippets, libraries, and automation logic for other projects unless a "Work for Hire" agreement is explicitly signed transferring full intellectual property rights.</p>

<h3>5. Payment and Refunds</h3>
<p>Services are billed as per the invoice provided or via the pricing listed on third-party platforms (Fiverr/Upwork). One-time projects (e.g., Malware Removal) require 100% payment upfront or via escrow. Monthly maintenance plans are billed in advance.</p>
<p><strong>Refund Policy:</strong></p>
<ul>
    <li><strong>Malware Removal:</strong> If we are unable to clean your site, a full refund will be issued.</li>
    <li><strong>Automation Projects:</strong> Refunds are not issued once development has commenced, but we will revise the work until it meets the agreed-upon specifications (up to reasonable limits).</li>
    <li><strong>Maintenance Plans:</strong> You may cancel at any time; however, no refunds are provided for partial months.</li>
</ul>

<h3>6. Limitation of Liability</h3>
<p>In no event shall FHD Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.</p>
<p><strong>Security Disclaimer:</strong> While we implement high-standard security measures (Firewalls, Hardening), we cannot guarantee that a website will never be hacked again, as security is an ongoing race against new threats. We are not liable for future hacks that occur after our service is rendered, though we provide warranties as specified in our specific service agreements.</p>

<h3>7. Indemnification</h3>
<p>You agree to defend, indemnify and hold harmless FHD Tech and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.</p>

<h3>8. Termination</h3>
<p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>

<h3>9. Governing Law</h3>
<p>These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>

<h3>10. Changes to Terms</h3>
<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
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
            
            {/* New SEO Pages */}
            <Route path={PageRoutes.SERVICES} element={<Services />} />
            <Route path={PageRoutes.TOOLS} element={<Tools />} />
            <Route path={PageRoutes.TOOLS_SEO} element={<ToolsSEO />} />
            <Route path={PageRoutes.TOOLS_TRENDS} element={<ToolsTrends />} />
            
            {/* Newly Added Lab Tools */}
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
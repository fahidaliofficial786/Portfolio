
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PageRoutes } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { VoiceCommander } from './VoiceCommander';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false); 
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // New state for mobile services dropdown
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    navigate(PageRoutes.CONTACT);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled 
            ? 'h-20 bg-[#050505]/90 backdrop-blur-xl border-primary-teal/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'h-24 bg-gradient-to-b from-[#050505] to-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto max-w-[1400px] px-6 h-full flex items-center justify-between">
          
          {/* 1. Heavy Logo Section (Flex Shrink 0) */}
          <Link to={PageRoutes.HOME} className="flex items-center gap-3 group relative z-50 flex-shrink-0">
            <div className="relative w-12 h-12 flex items-center justify-center bg-[#0F1115] rounded-xl border border-white/10 group-hover:border-primary-teal/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-primary-teal/50 animate-[scan_2s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
               <i className="fa-solid fa-layer-group text-2xl text-primary-teal"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight leading-none text-white">
                FHD<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-500">TECH</span>
              </span>
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase group-hover:text-primary-teal transition-colors hidden xl:block">
                Systems & Security
              </span>
            </div>
          </Link>

          {/* 2. Nav Island (Centered via Flex) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-4 z-50">
             <div className={`
                flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500
                ${isScrolled 
                  ? 'bg-white/5 border-white/10 backdrop-blur-md shadow-lg' 
                  : 'bg-white/0 border-white/0'
                }
             `}>
                <Link to={PageRoutes.HOME} className={`relative px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${location.pathname === PageRoutes.HOME ? 'text-black bg-primary-teal' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  Home
                </Link>

                {/* SERVICES DROPDOWN */}
                <div className="relative group">
                    <button className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${location.pathname.includes('/services') ? 'text-black bg-primary-teal' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                        Services <i className="fa-solid fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                    </button>
                    
                    {/* Services Mega Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="bg-[#0F1115] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl flex flex-col gap-1">
                            
                            <Link to={PageRoutes.SERVICE_WEB} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/item:text-white group-hover/item:bg-blue-500 transition-colors"><i className="fa-solid fa-laptop-code"></i></div>
                                <span className="text-sm font-bold text-white">Websites & Digital</span>
                            </Link>
                            
                            <Link to={PageRoutes.SERVICE_ADS} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover/item:text-white group-hover/item:bg-orange-500 transition-colors"><i className="fa-solid fa-bullhorn"></i></div>
                                <span className="text-sm font-bold text-white">Paid Advertising</span>
                            </Link>

                            <Link to={PageRoutes.SERVICE_CONTENT} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover/item:text-white group-hover/item:bg-purple-500 transition-colors"><i className="fa-solid fa-pen-nib"></i></div>
                                <span className="text-sm font-bold text-white">Content & Creative</span>
                            </Link>

                            <Link to={PageRoutes.SERVICE_SEO} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500 group-hover/item:text-white group-hover/item:bg-green-500 transition-colors"><i className="fa-solid fa-map-location-dot"></i></div>
                                <span className="text-sm font-bold text-white">Local SEO</span>
                            </Link>

                            <Link to={PageRoutes.SERVICE_CRM} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-500 group-hover/item:text-white group-hover/item:bg-red-500 transition-colors"><i className="fa-solid fa-robot"></i></div>
                                <span className="text-sm font-bold text-white">CRM & Automation</span>
                            </Link>
                            
                            <div className="h-px bg-white/10 my-1"></div>
                            <Link to={PageRoutes.SERVICES} className="text-center text-xs text-gray-500 hover:text-white py-2">View All Services</Link>
                        </div>
                    </div>
                </div>

                {/* Expanded Mega Menu for Tools */}
                <div className="relative group">
                    <button className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${location.pathname.includes('/tools') ? 'text-black bg-primary-teal shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                        Lab Tools <i className="fa-solid fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="bg-[#0F1115] border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-2">
                            
                            <Link to={PageRoutes.TOOLS} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500 group-hover/item:bg-red-500 group-hover/item:text-white transition-colors"><i className="fa-solid fa-shield-virus"></i></div>
                                <div><span className="block text-sm font-bold text-white">Cyber Warfare</span><span className="text-[10px] text-gray-500">Security Gadgets</span></div>
                            </Link>

                            <Link to={PageRoutes.TOOLS_BUSINESS} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors"><i className="fa-solid fa-briefcase"></i></div>
                                <div><span className="block text-sm font-bold text-white">Business & Finance</span><span className="text-[10px] text-gray-500">Calculators & ROI</span></div>
                            </Link>

                            <Link to={PageRoutes.TOOLS_SEO} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
                                <div><span className="block text-sm font-bold text-white">SEO Station</span><span className="text-[10px] text-gray-500">SERP & Analysis</span></div>
                            </Link>

                            <Link to={PageRoutes.TOOLS_SOCIAL} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover/item:bg-pink-500 group-hover/item:text-white transition-colors"><i className="fa-brands fa-youtube"></i></div>
                                <div><span className="block text-sm font-bold text-white">Social HQ</span><span className="text-[10px] text-gray-500">Tags, Titles & Bio</span></div>
                            </Link>

                            <Link to={PageRoutes.TOOLS_CONTENT} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors"><i className="fa-solid fa-pen-nib"></i></div>
                                <div><span className="block text-sm font-bold text-white">Content Forge</span><span className="text-[10px] text-gray-500">AI Blog Generator</span></div>
                            </Link>

                            <Link to={PageRoutes.TOOLS_NEWS} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover/item:bg-teal-500 group-hover/item:text-white transition-colors"><i className="fa-solid fa-globe"></i></div>
                                <div><span className="block text-sm font-bold text-white">Global News</span><span className="text-[10px] text-gray-500">Live RSS Feed</span></div>
                            </Link>

                            <Link to={PageRoutes.TOOLS_BROADCAST} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="w-10 h-10 rounded bg-red-600/10 flex items-center justify-center text-red-600 group-hover/item:bg-red-600 group-hover/item:text-white transition-colors"><i className="fa-solid fa-microphone"></i></div>
                                <div><span className="block text-sm font-bold text-white">Neural Broadcast</span><span className="text-[10px] text-gray-500">Gemini AI TTS</span></div>
                            </Link>

                        </div>
                    </div>
                </div>

                <Link to={PageRoutes.SECURITY} className={`relative px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${location.pathname === PageRoutes.SECURITY ? 'text-black bg-primary-teal' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  Security
                </Link>

                <button onClick={handleContactClick} className={`px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${location.pathname === PageRoutes.CONTACT ? 'text-black bg-primary-teal' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                  Contact
                </button>
             </div>
          </nav>

          {/* 3. Action Area */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <VoiceCommander />
            <div className="hidden md:flex items-center gap-4">
              <a href={SOCIAL_LINKS.calendly} target="_blank" rel="noreferrer" className="group relative px-5 py-2.5 bg-white text-black font-bold text-sm rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] whitespace-nowrap">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-teal via-white to-primary-teal opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  <i className="fa-regular fa-calendar-check"></i>
                  <span className="hidden lg:inline">Book Strategy Call</span>
                  <span className="lg:hidden">Book</span>
                </span>
              </a>
            </div>
            <button className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-primary-teal hover:text-black transition-all" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars-staggered text-lg'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-[#050505] transform transition-transform duration-500 cubic-bezier(0.7, 0, 0.3, 1) ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col pt-32 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-6">
              
              {/* 1. Home */}
              <Link to={PageRoutes.HOME} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-white hover:to-white hover:translate-x-4 transition-all">HOME</Link>
              
              {/* 2. Services Dropdown for Mobile */}
              <div>
                  <button 
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                      className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-white hover:to-white flex items-center gap-4 transition-all w-full text-left"
                  >
                      SERVICES
                      <i className={`fa-solid fa-chevron-down text-xl text-gray-500 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 border-l-2 border-primary-teal/20 space-y-4">
                        <Link to={PageRoutes.SERVICE_WEB} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-blue-500">WEBSITES</Link>
                        <Link to={PageRoutes.SERVICE_ADS} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-orange-500">PAID ADS</Link>
                        <Link to={PageRoutes.SERVICE_CONTENT} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-purple-500">CONTENT</Link>
                        <Link to={PageRoutes.SERVICE_SEO} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-green-500">LOCAL SEO</Link>
                        <Link to={PageRoutes.SERVICE_CRM} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-red-500">CRM AUTOMATION</Link>
                        <Link to={PageRoutes.SERVICES} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-gray-600 hover:text-white mt-2">View All Services</Link>
                      </div>
                  </div>
              </div>

              {/* 3. Lab Tools (Toggleable Dropdown to match Desktop) */}
              <div>
                  <button 
                      onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)} 
                      className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-white hover:to-white flex items-center gap-4 transition-all w-full text-left"
                  >
                      LAB TOOLS
                      <i className={`fa-solid fa-chevron-down text-xl text-gray-500 transition-transform ${isMobileToolsOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {/* Collapsible Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isMobileToolsOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 border-l-2 border-primary-teal/20 space-y-4">
                        <Link to={PageRoutes.TOOLS} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-red-500">CYBER LAB</Link>
                        <Link to={PageRoutes.TOOLS_BUSINESS} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-blue-500">BUSINESS LAB</Link>
                        <Link to={PageRoutes.TOOLS_SOCIAL} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-pink-500">SOCIAL LAB</Link>
                        <Link to={PageRoutes.TOOLS_CONTENT} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-orange-500">CONTENT AI</Link>
                        <Link to={PageRoutes.TOOLS_NEWS} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-teal-500">GLOBAL NEWS</Link>
                        <Link to={PageRoutes.TOOLS_BROADCAST} onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-gray-400 hover:text-red-600">NEURAL BROADCAST</Link>
                      </div>
                  </div>
              </div>

              {/* 4. Security */}
              <Link to={PageRoutes.SECURITY} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-white hover:to-white hover:translate-x-4 transition-all">SECURITY</Link>

              {/* Divider & Contact at Bottom */}
              <div className="mt-8 pt-8 border-t border-white/10">
                   <button onClick={handleContactClick} className="text-left text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-primary-teal hover:to-green-400 hover:translate-x-4 transition-all">ESTABLISH UPLINK</button>
              </div>

          </nav>
        </div>
      </div>
    </>
  );
};

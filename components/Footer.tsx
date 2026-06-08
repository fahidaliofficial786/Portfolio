
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { SOCIAL_LINKS } from '../constants';

const getWeatherIcon = (code: number) => {
  if (code === 0) return 'fa-sun'; 
  if (code >= 1 && code <= 3) return 'fa-cloud-sun'; 
  if (code >= 45 && code <= 48) return 'fa-smog'; 
  if (code >= 51 && code <= 55) return 'fa-cloud-rain'; 
  if (code >= 56 && code <= 57) return 'fa-snowflake'; 
  if (code >= 61 && code <= 65) return 'fa-cloud-showers-heavy'; 
  if (code >= 66 && code <= 67) return 'fa-snowflake'; 
  if (code >= 71 && code <= 77) return 'fa-snowflake'; 
  if (code >= 80 && code <= 82) return 'fa-cloud-showers-heavy'; 
  if (code >= 85 && code <= 86) return 'fa-snowflake'; 
  if (code >= 95 && code <= 99) return 'fa-bolt'; 
  return 'fa-cloud'; 
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  const [localTime, setLocalTime] = useState<string>('');
  const [locationStatus, setLocationStatus] = useState<string>('Locating...');

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`
            );
            if (res.ok) {
              const data = await res.json();
              if (data.current_weather) {
                setWeather({
                  temp: data.current_weather.temperature,
                  code: data.current_weather.weathercode,
                });
                setLocationStatus('Local Weather');
              }
            } else {
              setLocationStatus('Unavailable');
            }
          } catch (e) {
            console.error('Weather fetch failed', e);
            setLocationStatus('Offline');
          }
        },
        (error) => {
          console.error('Geolocation error', error);
          setLocationStatus('Permission Denied');
        }
      );
    } else {
      setLocationStatus('Not Supported');
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-[#30363d] bg-[#0A0F19] pt-16 pb-8 relative z-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">FHDtech</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Merging advanced GoHighLevel automation with robust WordPress security. Your dedicated partner in digital growth and protection.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm max-w-[200px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 uppercase tracking-wider">{locationStatus}</span>
                <span className="text-xs font-mono text-teal-400">{localTime}</span>
              </div>
              {weather ? (
                <div className="flex items-center gap-3">
                  <i className={`fa-solid ${getWeatherIcon(weather.code)} text-2xl text-yellow-400`}></i>
                  <div>
                    <span className="text-2xl font-bold text-white">{weather.temp}°C</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                   <i className="fa-solid fa-circle-notch fa-spin"></i> Data Syncing...
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to={PageRoutes.SERVICE_WEB} className="hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1">
                  Websites & Digital Presence
                </Link>
              </li>
              <li>
                <Link to={PageRoutes.SERVICE_ADS} className="hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1">
                  Paid Advertising
                </Link>
              </li>
              <li>
                <Link to={PageRoutes.SERVICE_CONTENT} className="hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1">
                  Content & Creative
                </Link>
              </li>
              <li>
                <Link to={PageRoutes.SERVICE_SEO} className="hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link to={PageRoutes.SERVICE_CRM} className="hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1">
                  CRM & Automation
                </Link>
              </li>
              <li>
                <Link to={PageRoutes.SECURITY} className="hover:text-red-400 transition-colors duration-300 inline-block hover:translate-x-1">
                  Emergency WP Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to={PageRoutes.ABOUT} className="hover:text-teal-400 transition-colors">About Fahid</Link></li>
              <li><Link to={PageRoutes.CASE_STUDIES} className="hover:text-teal-400 transition-colors">Case Studies</Link></li>
              <li><Link to={PageRoutes.ROI_CALCULATOR} className="hover:text-teal-400 transition-colors">ROI Calculator</Link></li>
              <li><Link to={PageRoutes.AGENCY_PARTNERSHIP} className="hover:text-teal-400 transition-colors">Agency Partnerships</Link></li>
              <li><Link to={PageRoutes.BLOG} className="hover:text-teal-400 transition-colors">Tech Blog</Link></li>
              <li><Link to={PageRoutes.CONTACT} className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
              <li><Link to={PageRoutes.PRIVACY} className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to={PageRoutes.TERMS} className="hover:text-teal-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4 text-xl mb-6">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" title="GitHub"><i className="fab fa-github"></i></a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-colors" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href={SOCIAL_LINKS.email} className="text-gray-400 hover:text-teal-400 transition-colors" title="Email"><i className="fas fa-envelope"></i></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" title="YouTube"><i className="fab fa-youtube"></i></a>
              <a href={SOCIAL_LINKS.fiverr} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" title="Fiverr"><i className="fa-solid fa-briefcase"></i></a>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-4">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">Direct Channels</span>
                <a href={SOCIAL_LINKS.email} className="text-sm text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 mb-2 break-all">
                  <i className="fa-solid fa-envelope text-xs text-teal-400/70"></i>
                  Fahaidaliofficial@gmail.com
                </a>
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-xs text-green-500/70"></i>
                  +92 348 4103239
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">Availability & SLA</span>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="font-mono text-green-400 font-bold uppercase tracking-wider">Online & Active</span>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-2 mb-1">
                  <i className="fa-solid fa-bolt text-xs text-yellow-400/80"></i>
                  <span>Response: <span className="text-white font-mono font-semibold">{"< 24h SLA"}</span></span>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days text-xs text-gray-500"></i>
                  <span>Ops: <span className="text-white font-mono font-semibold">Mon - Sat (9am - 6pm)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#30363d] pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Portfolio FHDtech by Fahid Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

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
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to={PageRoutes.SECURITY} className="hover:text-teal-400 transition-colors">Malware Removal</Link></li>
              <li><Link to={PageRoutes.SERVICES} className="hover:text-teal-400 transition-colors">GHL Automation</Link></li>
              <li><Link to={PageRoutes.SERVICES} className="hover:text-teal-400 transition-colors">WP Security Hardening</Link></li>
              <li><Link to={PageRoutes.SERVICES} className="hover:text-teal-400 transition-colors">API Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to={PageRoutes.ABOUT} className="hover:text-teal-400 transition-colors">About Fahid</Link></li>
              <li><Link to={PageRoutes.BLOG} className="hover:text-teal-400 transition-colors">Tech Blog</Link></li>
              <li><Link to={PageRoutes.CONTACT} className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
              <li><Link to={PageRoutes.PRIVACY} className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to={PageRoutes.TERMS} className="hover:text-teal-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4 text-xl">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><i className="fab fa-github"></i></a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-colors"><i className="fab fa-whatsapp"></i></a>
              <a href={SOCIAL_LINKS.email} className="text-gray-400 hover:text-teal-400 transition-colors"><i className="fas fa-envelope"></i></a>
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

import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';

export const NetworkScanner: React.FC = () => {
  const [ip, setIp] = useState<string>('Scanning...');
  const [status, setStatus] = useState<'scanning' | 'secure' | 'warning'>('scanning');
  const [scanProgress, setScanProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // 1. Fetch Real IP
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp('Unknown Host'));

    // 2. Simulate Scan
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('secure');
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-24 left-6 z-30 hidden xl:flex w-10 h-10 bg-[#050505]/80 border border-white/10 rounded-lg items-center justify-center text-primary-teal hover:border-primary-teal transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
        title="Open Network Diagnostic"
      >
        <i className="fa-solid fa-satellite-dish"></i>
      </button>
    );
  }

  return (
    <div className="fixed top-24 left-6 z-30 hidden xl:block w-64 pointer-events-auto">
       <GlassCard className="p-4 !bg-[#050505]/80 !border-white/5 relative overflow-hidden">
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors z-20 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>

          {/* Scan Line Animation */}
          {status === 'scanning' && (
             <div className="absolute top-0 left-0 w-full h-1 bg-primary-teal/50 shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-[scan_2s_linear_infinite] z-10"></div>
          )}

          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
             <span className="text-[10px] font-mono uppercase text-gray-400">Network Diagnostic</span>
             <i className="fa-solid fa-satellite-dish text-primary-teal animate-pulse"></i>
          </div>

          <div className="space-y-3 font-mono text-xs">
             <div className="flex justify-between">
                <span className="text-gray-500">IP_ADDR:</span>
                <span className="text-white">{ip}</span>
             </div>
             
             <div className="flex justify-between">
                <span className="text-gray-500">ENCRYPTION:</span>
                <span className="text-green-400">TLS 1.3</span>
             </div>

             <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-gray-500">
                   <span>VULNERABILITY_SCAN</span>
                   <span>{scanProgress}%</span>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                   <div 
                      className={`h-full transition-all duration-75 ${status === 'secure' ? 'bg-green-500' : 'bg-yellow-500'}`} 
                      style={{ width: `${scanProgress}%` }}
                   ></div>
                </div>
             </div>

             <div className={`mt-2 p-2 rounded text-center font-bold border ${
                status === 'secure' 
                  ? 'bg-green-500/10 border-green-500/30 text-green-500' 
                  : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
             }`}>
                {status === 'scanning' ? 'ANALYZING TRAFFIC...' : 'CONNECTION SECURE'}
             </div>
          </div>
       </GlassCard>
    </div>
  );
};

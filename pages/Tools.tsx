
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';

// --- SUB COMPONENTS FOR GADGETS ---

// 1. Web Vulnerability Scanner
const WebScanner = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const startScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsScanning(true);
    setLogs([]);
    setScore(null);

    const steps = [
        "Resolving DNS...",
        "Initiating Handshake...",
        "Checking SSL Certificate...",
        "Scanning for SQL Injection points...",
        "Analyzing XSS vulnerabilities...",
        "Checking Headers (CSP, X-Frame-Options)...",
        "Looking for open ports...",
        "Finalizing Report..."
    ];

    let stepCount = 0;
    const interval = setInterval(() => {
        if (stepCount < steps.length) {
            setLogs(prev => [...prev, `> ${steps[stepCount]}`]);
            stepCount++;
        } else {
            clearInterval(interval);
            setIsScanning(false);
            setScore(Math.floor(Math.random() * 30) + 60); // Fake score 60-90
            setLogs(prev => [...prev, `> SCAN COMPLETE. TARGET SECURED.`]);
        }
    }, 800);
  };

  return (
    <GlassCard className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-radar text-2xl text-red-500 animate-pulse"></i>
            <h3 className="text-xl font-bold text-white">Vulnerability Scanner</h3>
        </div>
        <form onSubmit={startScan} className="flex gap-2 mb-4">
            <input 
                type="text" 
                placeholder="https://target-site.com" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-red-500 outline-none font-mono"
            />
            <button type="submit" disabled={isScanning} className="bg-red-500/20 text-red-500 border border-red-500/50 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all disabled:opacity-50 touch-manipulation cursor-pointer">
                SCAN
            </button>
        </form>
        <div className="flex-1 bg-black rounded p-3 font-mono text-xs text-green-500 overflow-y-auto min-h-[150px] border border-white/5">
            {logs.length === 0 && <span className="text-gray-600">Waiting for target input...</span>}
            {logs.map((log, i) => <div key={i}>{log}</div>)}
        </div>
        {score !== null && (
            <div className="mt-4 p-3 bg-white/5 rounded border border-white/10 flex justify-between items-center">
                <span className="text-gray-400 text-sm">Security Score:</span>
                <span className={`text-xl font-bold ${score > 80 ? 'text-green-500' : 'text-yellow-500'}`}>{score}/100</span>
            </div>
        )}
    </GlassCard>
  );
};

// 2. Password Entropy Shield
const PasswordEntropy = () => {
    const [password, setPassword] = useState('');
    const [stats, setStats] = useState({ length: 0, hasUpper: false, hasLower: false, hasNumber: false, hasSpecial: false });
    
    useEffect(() => {
        setStats({
            length: password.length,
            hasUpper: /[A-Z]/.test(password),
            hasLower: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecial: /[^A-Za-z0-9]/.test(password),
        });
    }, [password]);

    const calculateStrength = () => {
        let score = 0;
        if (stats.length > 8) score += 20;
        if (stats.length > 12) score += 20;
        if (stats.hasUpper) score += 15;
        if (stats.hasLower) score += 15;
        if (stats.hasNumber) score += 15;
        if (stats.hasSpecial) score += 15;
        return Math.min(score, 100);
    };

    const strength = calculateStrength();
    const getCrackTime = () => {
        if (strength < 40) return "Instantly";
        if (strength < 60) return "2 Minutes";
        if (strength < 80) return "5 Days";
        return "400 Centuries";
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-shield-halved text-2xl text-primary-teal"></i>
                <h3 className="text-xl font-bold text-white">Password Entropy</h3>
            </div>
            <div className="mb-4">
                <input 
                    type="text" // Visible for demo purposes
                    placeholder="Enter password..." 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white focus:border-primary-teal outline-none"
                />
            </div>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Entropy Strength</span>
                        <span>{strength}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-full transition-all duration-300 ${strength < 50 ? 'bg-red-500' : strength < 80 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${strength}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div className={stats.length >= 8 ? 'text-green-400' : ''}><i className={`fa-solid ${stats.length >= 8 ? 'fa-check' : 'fa-xmark'}`}></i> 8+ Chars</div>
                    <div className={stats.hasUpper ? 'text-green-400' : ''}><i className={`fa-solid ${stats.hasUpper ? 'fa-check' : 'fa-xmark'}`}></i> Uppercase</div>
                    <div className={stats.hasNumber ? 'text-green-400' : ''}><i className={`fa-solid ${stats.hasNumber ? 'fa-check' : 'fa-xmark'}`}></i> Numbers</div>
                    <div className={stats.hasSpecial ? 'text-green-400' : ''}><i className={`fa-solid ${stats.hasSpecial ? 'fa-check' : 'fa-xmark'}`}></i> Symbols</div>
                </div>

                <div className="p-3 bg-white/5 rounded text-center">
                    <div className="text-xs text-gray-500 uppercase">Estimated Crack Time</div>
                    <div className="text-lg font-bold text-white">{password ? getCrackTime() : '---'}</div>
                </div>
            </div>
        </GlassCard>
    );
};

// 3. Secure Messenger (Base64 Encryption)
const SecureMessenger = () => {
    const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const process = () => {
        try {
            if (mode === 'encrypt') {
                // Simple Base64 for demo
                setOutput(btoa(input));
            } else {
                setOutput(atob(input));
            }
        } catch (e) {
            setOutput("Error: Invalid Input Format");
        }
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-key text-2xl text-yellow-400"></i>
                <h3 className="text-xl font-bold text-white">Secure Messenger</h3>
            </div>
            
            <div className="flex gap-2 mb-4 p-1 bg-white/5 rounded-lg">
                <button 
                    onClick={() => setMode('encrypt')}
                    className={`flex-1 py-1 rounded text-sm font-bold touch-manipulation ${mode === 'encrypt' ? 'bg-primary-teal text-black' : 'text-gray-400'}`}
                >
                    Encrypt
                </button>
                <button 
                    onClick={() => setMode('decrypt')}
                    className={`flex-1 py-1 rounded text-sm font-bold touch-manipulation ${mode === 'decrypt' ? 'bg-primary-teal text-black' : 'text-gray-400'}`}
                >
                    Decrypt
                </button>
            </div>

            <textarea 
                className="w-full h-24 bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-yellow-400 outline-none font-mono mb-2"
                placeholder={mode === 'encrypt' ? "Enter secret message..." : "Paste encrypted code..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>

            <button onClick={process} className="w-full py-2 bg-yellow-500/20 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-black transition-all mb-4 touch-manipulation cursor-pointer">
                {mode === 'encrypt' ? 'LOCK MESSAGE' : 'UNLOCK MESSAGE'}
            </button>

            <div className="flex-1 bg-black/50 border border-white/10 rounded p-2">
                <div className="text-xs text-gray-500 mb-1">OUTPUT:</div>
                <div className="text-sm text-green-400 font-mono break-all select-all">{output}</div>
            </div>
        </GlassCard>
    );
};

// 4. Browser Fingerprint
const BrowserIntel = () => {
    const [info, setInfo] = useState<any>({});

    useEffect(() => {
        setInfo({
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            screen: `${window.screen.width}x${window.screen.height}`,
            cores: navigator.hardwareConcurrency || 'Unknown',
            cookieEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
        });
    }, []);

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-fingerprint text-2xl text-purple-500"></i>
                <h3 className="text-xl font-bold text-white">Digital Footprint</h3>
            </div>
            <div className="space-y-3 text-sm font-mono">
                {Object.entries(info).map(([key, value]) => (
                    <div key={key} className="flex flex-col border-b border-white/5 pb-1">
                        <span className="text-gray-500 uppercase text-[10px]">{key}</span>
                        <span className="text-white truncate" title={String(value)}>{String(value)}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 p-2 bg-purple-500/10 border border-purple-500/30 rounded text-center text-xs text-purple-400">
                Data visible to every site you visit.
            </div>
        </GlassCard>
    );
};

export const Tools: React.FC = () => {
  return (
    <div className="pt-28 pb-12 container mx-auto max-w-7xl px-4 relative z-10">
      <SEO 
        title="Cyber Warfare Lab"
        description="Interactive security tools and gadgets by Fahid Ali. Vulnerability scanner, Password entropy checker, and encryption utilities."
      />

      <div className="text-center mb-16">
         <div className="inline-block p-2 px-4 rounded-full border border-primary-teal/30 bg-primary-teal/10 text-primary-teal mb-4 font-mono text-xs tracking-widest">
            RESTRICTED ACCESS // AUTHORIZED PERSONNEL ONLY
         </div>
         <SectionTitle title="Cyber Warfare Lab" align="center" subtitle="A collection of security utilities and functional gadgets." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
         <WebScanner />
         <PasswordEntropy />
         <SecureMessenger />
         <BrowserIntel />
      </div>
    </div>
  );
};

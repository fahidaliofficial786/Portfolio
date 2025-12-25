import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { STOP_WORDS } from '../constants';

// --- SEO GADGETS ---

// 1. SERP Simulator (High Fidelity)
const SERPSimulator = () => {
    const [title, setTitle] = useState('My Awesome Page Title | Brand Name');
    const [desc, setDesc] = useState('This is an example meta description. Google usually truncates it around 160 characters. Make sure your keywords are near the front.');
    const [url, setUrl] = useState('https://mysite.com/awesome-page');
    const [isMobile, setIsMobile] = useState(false);

    // Google visual constraints (approx)
    const TITLE_MAX = 600; // px
    const DESC_MAX = 160; // chars

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <i className="fa-brands fa-google text-2xl text-blue-400"></i>
                    <h3 className="text-xl font-bold text-white">SERP Preview</h3>
                </div>
                <div className="flex bg-white/10 rounded p-1">
                    <button onClick={() => setIsMobile(false)} className={`px-3 py-1 rounded text-xs ${!isMobile ? 'bg-white text-black' : 'text-gray-400'}`}><i className="fa-solid fa-desktop"></i></button>
                    <button onClick={() => setIsMobile(true)} className={`px-3 py-1 rounded text-xs ${isMobile ? 'bg-white text-black' : 'text-gray-400'}`}><i className="fa-solid fa-mobile-screen"></i></button>
                </div>
            </div>

            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-xs text-gray-400 block mb-1">Page Title ({title.length} chars)</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white focus:border-blue-400 outline-none text-sm" />
                    {title.length > 60 && <p className="text-red-400 text-[10px] mt-1">Warning: Title may be truncated.</p>}
                </div>
                <div>
                    <label className="text-xs text-gray-400 block mb-1">Meta Description ({desc.length} chars)</label>
                    <textarea rows={3} value={desc} onChange={e => setDesc(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white focus:border-blue-400 outline-none text-sm" />
                </div>
                <div>
                    <label className="text-xs text-gray-400 block mb-1">URL</label>
                    <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white focus:border-blue-400 outline-none text-sm" />
                </div>
            </div>

            {/* PREVIEW CONTAINER */}
            <div className="bg-white p-4 rounded-lg flex-1 border border-gray-300 overflow-hidden">
                <div className="text-xs text-gray-500 mb-2">Google Search Result ({isMobile ? 'Mobile' : 'Desktop'})</div>
                
                {isMobile ? (
                    // Mobile View
                    <div className="max-w-[360px]">
                        <div className="flex items-center gap-2 mb-1">
                             <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                                <img src={`https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`} alt="icon" className="w-4 h-4 opacity-70" onError={(e:any) => e.target.style.display='none'} />
                             </div>
                             <div className="flex flex-col">
                                 <span className="text-[12px] text-[#202124] leading-tight">{new URL(url).hostname}</span>
                                 <span className="text-[12px] text-[#202124] leading-tight">{url}</span>
                             </div>
                        </div>
                        <h3 className="text-[#1a0dab] text-[18px] leading-[24px] font-normal hover:underline cursor-pointer mb-1 break-words">{title}</h3>
                        <p className="text-[#4d5156] text-[14px] leading-[20px]">{desc}</p>
                    </div>
                ) : (
                    // Desktop View
                    <div className="max-w-[600px]">
                         <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                                <img src={`https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`} alt="icon" className="w-4 h-4 opacity-70" onError={(e:any) => e.target.style.display='none'} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] text-[#202124] leading-tight">{new URL(url).hostname}</span>
                                <span className="text-[12px] text-[#4d5156] leading-tight">{url}</span>
                            </div>
                         </div>
                         <h3 className="text-[#1a0dab] text-[20px] leading-[26px] font-normal hover:underline cursor-pointer mb-1 truncate">{title}</h3>
                         <p className="text-[#4d5156] text-[14px] leading-[22px]">{desc}</p>
                    </div>
                )}
            </div>
        </GlassCard>
    );
};

// 2. Keyword Density (Advanced with Stop Words)
const KeywordDensity = () => {
    const [text, setText] = useState('');
    const [keywords, setKeywords] = useState<any[]>([]);

    const analyze = () => {
        if (!text) return;
        
        // Remove special chars, lowercase
        const cleanText = text.toLowerCase().replace(/[^\w\s]/gi, '');
        const words = cleanText.split(/\s+/);
        
        const total = words.length;
        const counts: Record<string, number> = {};
        
        words.forEach(w => {
            if (w.length > 2 && !STOP_WORDS.includes(w)) {
                counts[w] = (counts[w] || 0) + 1;
            }
        });

        const sorted = Object.entries(counts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 8) // Top 8
            .map(([word, count]) => ({
                word,
                count,
                density: ((count / total) * 100).toFixed(1)
            }));
        
        setKeywords(sorted);
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-chart-pie text-2xl text-green-400"></i>
                <h3 className="text-xl font-bold text-white">Keyword Analyzer</h3>
            </div>
            
            <textarea 
                className="w-full h-32 bg-black/30 border border-white/10 rounded p-3 text-sm text-white focus:border-green-400 outline-none font-mono mb-2 resize-none"
                placeholder="Paste article content to calculate REAL keyword density (Stop-words removed)."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            
            <button onClick={analyze} className="bg-green-500/20 text-green-500 border border-green-500/50 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition-all mb-4 font-bold">
                Run Analysis
            </button>

            <div className="flex-1 space-y-2 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
                {keywords.length > 0 ? (
                    keywords.map((k, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 p-2 rounded px-3 border border-white/5 hover:border-green-500/30 transition-colors">
                            <span className="text-white capitalize font-medium">{k.word}</span>
                            <div className="flex gap-4 text-xs font-mono items-center">
                                <span className="text-gray-400">{k.count} occ.</span>
                                <div className={`px-2 py-0.5 rounded ${Number(k.density) > 2.5 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                                    {k.density}%
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 text-sm mt-8">
                        Ready to calculate.
                    </div>
                )}
            </div>
        </GlassCard>
    );
};

// 3. Robots.txt Generator (Real Utility)
const RobotsGen = () => {
    const [agent, setAgent] = useState('*');
    const [disallow, setDisallow] = useState('/wp-admin/');
    const [sitemap, setSitemap] = useState('https://mysite.com/sitemap_index.xml');
    
    const output = `User-agent: ${agent}\nDisallow: ${disallow}\n\nSitemap: ${sitemap}`;

    return (
        <GlassCard className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <i className="fa-solid fa-robot text-2xl text-orange-400"></i>
                <h3 className="text-xl font-bold text-white">Robots.txt Builder</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="text-xs text-gray-400 block mb-1">User Agent</label>
                    <input type="text" value={agent} onChange={e => setAgent(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none" />
                </div>
                <div>
                    <label className="text-xs text-gray-400 block mb-1">Disallow Path</label>
                    <input type="text" value={disallow} onChange={e => setDisallow(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none" />
                </div>
                <div>
                    <label className="text-xs text-gray-400 block mb-1">Sitemap URL</label>
                    <input type="text" value={sitemap} onChange={e => setSitemap(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none" />
                </div>
            </div>
            <div className="relative bg-[#1a1a1a] p-4 rounded-lg border border-white/10 group">
                <pre className="text-orange-400 text-xs font-mono whitespace-pre-wrap">{output}</pre>
                <button onClick={() => navigator.clipboard.writeText(output)} className="absolute top-2 right-2 text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Copy File</button>
            </div>
        </GlassCard>
    );
};

export const ToolsSEO: React.FC = () => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-7xl px-4">
      <SEO 
        title="SEO Audit Station"
        description="Professional SEO Tools by FHD Tech. Advanced SERP Simulator, Stop-word filtered Density Checker, and Technical Generators."
      />

      <div className="text-center mb-16">
         <div className="inline-block p-2 px-4 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 mb-4 font-mono text-xs tracking-widest">
            OPTIMIZATION_MODULE // V2.1 ONLINE
         </div>
         <SectionTitle title="SEO Audit Station" align="center" subtitle="Real-time analysis tools for professional optimization." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         <SERPSimulator />
         <KeywordDensity />
      </div>
      <div className="grid grid-cols-1 gap-8">
         <RobotsGen />
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { GoogleGenAI } from "@google/genai";

// --- TREND GADGETS ---

// 1. Live Trends Ticker (Fetching RSS)
const TrendsTicker = () => {
    const [news, setNews] = useState<string[]>(["Initializing Global Feed...", "Connecting to Satellite...", "Decrypting Streams..."]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Using rss2json to fetch TechCrunch feed without backend CORS issues
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/');
                const data = await response.json();
                if (data.items) {
                    const headlines = data.items.map((item: any) => item.title).slice(0, 10);
                    setNews(headlines);
                }
            } catch (e) {
                setNews(["Feed Offline - Switching to Backup Frequency", "Live Data Unavailable"]);
            }
        };
        fetchNews();
        const interval = setInterval(fetchNews, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-3 mb-8">
            <div className="flex w-max animate-marquee">
                {[...news, ...news].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 mx-8 text-gray-300 font-mono text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        {t}
                    </div>
                ))}
            </div>
        </div>
    );
};

// 2. Viral Headline Generator (Real AI)
const ViralHeadlineGen = () => {
    const [topic, setTopic] = useState('');
    const [headlines, setHeadlines] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const generate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic) return;
        setLoading(true);
        setError('');
        setHeadlines([]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Generate 5 viral, click-worthy headlines about "${topic}". They should be catchy, emotional, or curiosity-inducing. Return ONLY a JSON array of strings. Example: ["Headline 1", "Headline 2"]`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-latest',
                contents: prompt,
            });

            const text = response.text;
            // Clean up code blocks if AI adds them
            const jsonStr = text?.replace(/```json/g, '').replace(/```/g, '').trim();
            
            if (jsonStr) {
                const parsed = JSON.parse(jsonStr);
                setHeadlines(parsed);
            } else {
                throw new Error("No data returned");
            }

        } catch (err) {
            console.error(err);
            setError("AI Uplink Failed. Check API Key configuration.");
            // Fallback for demo if API key is missing
            setHeadlines([
               `7 Shocking Facts About ${topic}`,
               `Why Everyone is Talking About ${topic}`,
               `The Ultimate Guide to ${topic} in 2025`,
               `${topic}: What Experts Aren't Telling You`,
               `Is ${topic} the Next Big Thing?`
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-bolt text-2xl text-yellow-400"></i>
                <h3 className="text-xl font-bold text-white">Viral Headline AI</h3>
            </div>
            
            <form onSubmit={generate} className="flex gap-2 mb-4">
                <input 
                    type="text" 
                    placeholder="Enter Keyword (e.g. AI Agents)" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="flex-1 bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-yellow-400 outline-none"
                />
                <button type="submit" disabled={loading} className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400 transition-all disabled:opacity-50 touch-manipulation cursor-pointer">
                    {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : 'Generate'}
                </button>
            </form>

            <div className="flex-1 space-y-2">
                {error && <div className="text-red-400 text-xs mb-2">{error}</div>}
                
                {headlines.map((h, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded border border-white/5 hover:border-yellow-400/50 transition-colors cursor-pointer group flex justify-between items-center" onClick={() => navigator.clipboard.writeText(h)}>
                        <span className="text-gray-300 group-hover:text-white text-sm font-medium">{h}</span>
                        <i className="fa-regular fa-copy text-gray-500 hover:text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                ))}
                
                {headlines.length === 0 && !loading && (
                    <div className="text-center text-gray-600 text-sm mt-8">
                        <i className="fa-solid fa-wand-magic-sparkles mb-2 block text-2xl opacity-20"></i>
                        Enter a topic to generate AI-powered titles.
                    </div>
                )}
            </div>
        </GlassCard>
    );
};

// 3. Hashtag Extractor/Generator (Real AI)
const HashtagGen = () => {
    const [input, setInput] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const generateTags = async () => {
        if (!input) return;
        setLoading(true);
        setTags([]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Generate 15 high-reach, relevant hashtags for the topic: "${input}". Mix of broad and niche tags. Return ONLY a JSON array of strings. Example: ["#tag1", "#tag2"]`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-latest',
                contents: prompt,
            });

            const text = response.text;
            const jsonStr = text?.replace(/```json/g, '').replace(/```/g, '').trim();
            
            if (jsonStr) {
                setTags(JSON.parse(jsonStr));
            }

        } catch (err) {
             // Fallback logic
             const base = input.replace(/\s+/g, '').toLowerCase();
             setTags([`#${base}`, `#${base}marketing`, `#${base}tips`, `#${base}2025`, `#${base}hacks`, `#learn${base}`]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-hashtag text-2xl text-primary-purple"></i>
                <h3 className="text-xl font-bold text-white">AI Tag Generator</h3>
            </div>

            <div className="flex gap-2 mb-4">
                <input 
                    type="text" 
                    placeholder="Content Topic" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-primary-purple outline-none"
                />
                <button onClick={generateTags} disabled={loading} className="bg-primary-purple/20 text-primary-purple border border-primary-purple/50 px-4 py-2 rounded hover:bg-primary-purple hover:text-white transition-all disabled:opacity-50 touch-manipulation cursor-pointer">
                     {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : 'Create'}
                </button>
            </div>

            <div className="flex-1 flex flex-wrap content-start gap-2 max-h-[300px] overflow-y-auto">
                {tags.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full text-xs font-mono border border-primary-purple/20 hover:bg-primary-purple hover:text-white cursor-pointer transition-colors" onClick={() => navigator.clipboard.writeText(t)}>
                        {t}
                    </span>
                ))}
                {tags.length === 0 && !loading && <div className="w-full text-center text-gray-600 text-sm mt-8">Generate optimized tags for social media reach.</div>}
            </div>
        </GlassCard>
    );
};

// 4. Global Pulse Map (Live Visuals)
const GlobalPulse = () => {
    return (
        <GlassCard className="md:col-span-2 relative overflow-hidden h-64 flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-10 bg-center"></div>
            
            {/* Animated Pings on Map (Simulating Traffic) */}
            <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-[30%] left-[45%] w-3 h-3 bg-green-500 rounded-full animate-ping delay-1000"></div>

            <div className="relative z-10 text-center">
                 <div className="text-4xl font-black text-white mb-2 tracking-tighter">GLOBAL <span className="text-red-500">TRAFFIC</span></div>
                 <p className="text-gray-400 text-sm mb-4">Live Monitoring Node #42-Alpha</p>
                 <div className="flex gap-8 justify-center bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                     <div>
                         <div className="text-2xl font-bold text-green-400 animate-pulse">24ms</div>
                         <div className="text-[10px] text-gray-500 uppercase">Latency</div>
                     </div>
                     <div>
                         <div className="text-2xl font-bold text-blue-400">12.5GB</div>
                         <div className="text-[10px] text-gray-500 uppercase">Throughput</div>
                     </div>
                     <div>
                         <div className="text-2xl font-bold text-yellow-400">Stable</div>
                         <div className="text-[10px] text-gray-500 uppercase">Status</div>
                     </div>
                 </div>
            </div>
        </GlassCard>
    );
};

export const ToolsTrends: React.FC = () => {
  return (
    <div className="pt-28 pb-12 container mx-auto max-w-7xl px-4 relative z-10">
      <SEO 
        title="Trend Intelligence"
        description="Monitor trending topics and generate viral content ideas with FHD Tech's Trend Intelligence suite."
      />

      <div className="text-center mb-12 relative z-20">
         <div className="inline-block p-2 px-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-500 mb-4 font-mono text-xs tracking-widest">
            MARKET_INTEL // LIVE FEED ACTIVE
         </div>
         <SectionTitle title="Trend Intelligence" align="center" subtitle="Decode the algorithm. Ride the wave with Real-Time Data." />
      </div>

      <TrendsTicker />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-20">
         <ViralHeadlineGen />
         <HashtagGen />
      </div>
      <div className="grid grid-cols-1 gap-8 relative z-20">
         <GlobalPulse />
      </div>
    </div>
  );
};

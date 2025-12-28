
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { GoogleGenAI, Type } from "@google/genai";

const YouTubeGenerator = () => {
    const [topic, setTopic] = useState('');
    const [result, setResult] = useState<{titles: string[], tags: string[]} | null>(null);
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!topic) return;
        setLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: "AIzaSyDa3xvE22ggiawdxdYCUKj3FaqVpbZ74_8" });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-latest',
                contents: `Act as a YouTube Expert. For the video topic "${topic}", generate 5 click-worthy Titles and 10 SEO Tags.`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            titles: { type: Type.ARRAY, items: { type: Type.STRING } },
                            tags: { type: Type.ARRAY, items: { type: Type.STRING } }
                        }
                    }
                }
            });
            
            if (response.text) {
                setResult(JSON.parse(response.text));
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-brands fa-youtube text-2xl text-red-500"></i>
                <h3 className="text-xl font-bold text-white">YouTube Optimizer</h3>
            </div>
            <div className="flex gap-2 mb-6">
                <input 
                    type="text" 
                    placeholder="Video Topic (e.g., iPhone 15 Review)" 
                    value={topic} 
                    onChange={e => setTopic(e.target.value)} 
                    className="flex-1 bg-black/30 border border-white/10 rounded p-3 text-white focus:border-red-500 outline-none transition-colors" 
                    onKeyDown={(e) => e.key === 'Enter' && generate()}
                />
                <button onClick={generate} disabled={loading} className="bg-red-500 text-white px-6 rounded font-bold hover:bg-red-600 disabled:opacity-50 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.4)] touch-manipulation cursor-pointer">
                    {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : 'Generate'}
                </button>
            </div>
            {result && (
                <div className="space-y-6 animate-float">
                    <div>
                        <h4 className="text-gray-400 text-xs uppercase mb-2 tracking-wider">Viral Titles</h4>
                        <ul className="space-y-2">
                            {result.titles.map((t, i) => (
                                <li 
                                    key={i} 
                                    className="bg-white/5 p-3 rounded text-sm text-white border border-white/5 cursor-pointer hover:border-red-500/50 hover:bg-white/10 transition-colors flex justify-between items-center group" 
                                    onClick={() => navigator.clipboard.writeText(t)}
                                    title="Click to Copy"
                                >
                                    <span>{t}</span>
                                    <i className="fa-regular fa-copy text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 text-xs uppercase mb-2 tracking-wider">SEO Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {result.tags.map((t, i) => (
                                <button 
                                    key={i} 
                                    className="bg-red-500/10 text-red-400 text-xs px-3 py-1.5 rounded-full border border-red-500/20 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                                    onClick={() => navigator.clipboard.writeText(t)}
                                >
                                    #{t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </GlassCard>
    );
};

const InstagramBio = () => {
    const [niche, setNiche] = useState('');
    const [bios, setBios] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!niche) return;
        setLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: "AIzaSyDa3xvE22ggiawdxdYCUKj3FaqVpbZ74_8" });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-latest',
                contents: `Generate 5 creative Instagram Bios for a "${niche}" account. Use emojis, line breaks, and call to actions.`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            bios: { type: Type.ARRAY, items: { type: Type.STRING } }
                        }
                    }
                }
            });

            if (response.text) {
                const data = JSON.parse(response.text);
                if (data.bios) setBios(data.bios);
            }
        } catch (e) { console.error(e); } finally { setLoading(false); }
    };

    return (
        <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-brands fa-instagram text-2xl text-pink-500"></i>
                <h3 className="text-xl font-bold text-white">Bio Generator</h3>
            </div>
            <div className="flex gap-2 mb-6">
                <input 
                    type="text" 
                    placeholder="Niche (e.g., Fitness Coach, Crypto Trader)" 
                    value={niche} 
                    onChange={e => setNiche(e.target.value)} 
                    className="flex-1 bg-black/30 border border-white/10 rounded p-3 text-white focus:border-pink-500 outline-none transition-colors" 
                    onKeyDown={(e) => e.key === 'Enter' && generate()}
                />
                <button onClick={generate} disabled={loading} className="bg-pink-500 text-white px-6 rounded font-bold hover:bg-pink-600 disabled:opacity-50 transition-colors shadow-[0_0_15px_rgba(236,72,153,0.4)] touch-manipulation cursor-pointer">
                    {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : 'Create'}
                </button>
            </div>
            <div className="space-y-3">
                {bios.map((b, i) => (
                    <div 
                        key={i} 
                        className="bg-white/5 p-4 rounded-xl text-white border border-white/5 whitespace-pre-wrap font-sans text-sm hover:border-pink-500/30 transition-colors relative group cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(b)}
                    >
                        {b}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded text-xs text-pink-400">
                            Copy
                        </div>
                    </div>
                ))}
                {bios.length === 0 && !loading && (
                    <div className="text-center text-gray-600 py-10">
                        <i className="fa-regular fa-id-card text-4xl mb-3 opacity-20"></i>
                        <p className="text-sm">Enter your niche to generate<br/>professional profiles.</p>
                    </div>
                )}
            </div>
        </GlassCard>
    );
};

export const ToolsSocial: React.FC = () => {
    return (
        <div className="pt-28 pb-12 container mx-auto max-w-7xl px-4 relative z-10">
            <SEO title="Social Media Tools" description="AI Tools for YouTube, Instagram, and Facebook growth." />
            <div className="text-center mb-12 relative z-20">
                 <div className="inline-block p-2 px-4 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 mb-4 font-mono text-xs tracking-widest">SOCIAL_HQ</div>
                 <SectionTitle title="Social Media Headquarters" align="center" subtitle="Optimize your presence with AI-driven metadata." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
                <YouTubeGenerator />
                <InstagramBio />
            </div>
        </div>
    );
};
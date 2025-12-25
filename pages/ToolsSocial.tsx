import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { GoogleGenAI } from "@google/genai";

const YouTubeGenerator = () => {
    const [topic, setTopic] = useState('');
    const [result, setResult] = useState<{titles: string[], tags: string[]} | null>(null);
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!topic) return;
        setLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Act as a YouTube Expert. For the video topic "${topic}", generate 5 click-worthy Titles and 10 SEO Tags. Return JSON format: { "titles": [], "tags": [] }`;
            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-latest', contents: prompt });
            const jsonStr = response.text?.replace(/```json/g, '').replace(/```/g, '').trim();
            if (jsonStr) setResult(JSON.parse(jsonStr));
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
                <input type="text" placeholder="Video Topic (e.g., iPhone 15 Review)" value={topic} onChange={e => setTopic(e.target.value)} className="flex-1 bg-black/30 border border-white/10 rounded p-3 text-white focus:border-red-500 outline-none" />
                <button onClick={generate} disabled={loading} className="bg-red-500 text-white px-6 rounded font-bold hover:bg-red-600 disabled:opacity-50">
                    {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : 'Generate'}
                </button>
            </div>
            {result && (
                <div className="space-y-4 animate-float">
                    <div>
                        <h4 className="text-gray-400 text-xs uppercase mb-2">Viral Titles</h4>
                        <ul className="space-y-2">
                            {result.titles.map((t, i) => (
                                <li key={i} className="bg-white/5 p-2 rounded text-sm text-white border border-white/5 cursor-pointer hover:border-red-500/50" onClick={() => navigator.clipboard.writeText(t)}>{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 text-xs uppercase mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {result.tags.map((t, i) => (
                                <span key={i} className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded border border-red-500/20">{t}</span>
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
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Generate 5 creative Instagram Bios for a "${niche}" account. Use emojis. Return JSON array of strings.`;
            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-latest', contents: prompt });
            const jsonStr = response.text?.replace(/```json/g, '').replace(/```/g, '').trim();
            if (jsonStr) setBios(JSON.parse(jsonStr));
        } catch (e) { console.error(e); } finally { setLoading(false); }
    };

    return (
        <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
                <i className="fa-brands fa-instagram text-2xl text-pink-500"></i>
                <h3 className="text-xl font-bold text-white">Bio Generator</h3>
            </div>
            <div className="flex gap-2 mb-6">
                <input type="text" placeholder="Niche (e.g., Fitness Coach)" value={niche} onChange={e => setNiche(e.target.value)} className="flex-1 bg-black/30 border border-white/10 rounded p-3 text-white focus:border-pink-500 outline-none" />
                <button onClick={generate} disabled={loading} className="bg-pink-500 text-white px-6 rounded font-bold hover:bg-pink-600 disabled:opacity-50">
                    {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : 'Create'}
                </button>
            </div>
            <div className="space-y-2">
                {bios.map((b, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded text-white border border-white/5 whitespace-pre-wrap font-sans text-sm">{b}</div>
                ))}
            </div>
        </GlassCard>
    );
};

export const ToolsSocial: React.FC = () => {
    return (
        <div className="pt-24 pb-12 container mx-auto max-w-7xl px-4">
            <SEO title="Social Media Tools" description="AI Tools for YouTube, Instagram, and Facebook growth." />
            <div className="text-center mb-12">
                 <div className="inline-block p-2 px-4 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 mb-4 font-mono text-xs tracking-widest">SOCIAL_HQ</div>
                 <SectionTitle title="Social Media Headquarters" align="center" subtitle="Optimize your presence with AI-driven metadata." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <YouTubeGenerator />
                <InstagramBio />
            </div>
        </div>
    );
};
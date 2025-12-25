import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { GoogleGenAI } from "@google/genai";

export const ToolsContent: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState('Professional');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const generateBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic) return;
        setLoading(true);
        setContent('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic}". Tone: ${tone}. 
            Structure:
            - Use <h1> for the Main Title.
            - Use <h2> for subheadings.
            - Use <p> for paragraphs.
            - Include a bulleted list <ul><li>.
            - Conclusion.
            Return ONLY the raw HTML body content (no <html> or <body> tags).`;

            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-latest', contents: prompt });
            setContent(response.text || '');
        } catch (e) {
            console.error(e);
            setContent('<p class="text-red-500">Error generating content. Please try again.</p>');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 pb-12 container mx-auto max-w-5xl px-4">
            <SEO title="AI Content Forge" description="Generate full blog posts with structured HTML using AI." />
            
            <div className="text-center mb-12">
                 <div className="inline-block p-2 px-4 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 mb-4 font-mono text-xs tracking-widest">CONTENT_FORGE</div>
                 <SectionTitle title="AI Blog Architect" align="center" subtitle="Generate structured, SEO-ready articles in seconds." />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Controls */}
                <div className="lg:col-span-1">
                    <GlassCard className="sticky top-24">
                        <form onSubmit={generateBlog} className="space-y-4">
                            <div>
                                <label className="block text-xs text-gray-400 mb-1">Topic / Keyword</label>
                                <input type="text" value={topic} onChange={e => setTopic(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-orange-500 outline-none" placeholder="e.g. Future of AI" />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-400 mb-1">Tone of Voice</label>
                                <select value={tone} onChange={e => setTone(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-orange-500 outline-none">
                                    <option>Professional</option>
                                    <option>Casual</option>
                                    <option>Persuasive</option>
                                    <option>Humorous</option>
                                </select>
                            </div>
                            <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded hover:shadow-lg disabled:opacity-50 transition-all">
                                {loading ? <><i className="fa-solid fa-circle-notch fa-spin mr-2"></i> Writing...</> : 'Generate Article'}
                            </button>
                        </form>
                    </GlassCard>
                </div>

                {/* Editor / Output */}
                <div className="lg:col-span-2">
                    <GlassCard className="min-h-[600px] p-8">
                        {content ? (
                            <div className="prose prose-invert max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-50">
                                <i className="fa-solid fa-pen-nib text-6xl mb-4"></i>
                                <p>Waiting for instructions...</p>
                            </div>
                        )}
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};
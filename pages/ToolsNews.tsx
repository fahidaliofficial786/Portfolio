import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';

const FEEDS = {
    world: 'https://feeds.bbci.co.uk/news/world/rss.xml',
    tech: 'https://techcrunch.com/feed/',
    business: 'https://feeds.bbci.co.uk/news/business/rss.xml',
    politics: 'https://feeds.bbci.co.uk/news/politics/rss.xml'
};

export const ToolsNews: React.FC = () => {
    const [category, setCategory] = useState<keyof typeof FEEDS>('world');
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                // Using rss2json to avoid CORS
                const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${FEEDS[category]}`);
                const data = await res.json();
                if (data.items) setNews(data.items);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [category]);

    return (
        <div className="pt-24 pb-12 container mx-auto max-w-7xl px-4">
            <SEO title="Global News Deck" description="Live Real-Time News Aggregator." />
            
            <div className="text-center mb-8">
                 <div className="inline-block p-2 px-4 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 mb-4 font-mono text-xs tracking-widest">LIVE_SATELLITE_FEED</div>
                 <SectionTitle title="Global News Deck" align="center" subtitle="Real-time intelligence from around the world." />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.keys(FEEDS).map((cat) => (
                    <button 
                        key={cat} 
                        onClick={() => setCategory(cat as any)}
                        className={`px-6 py-2 rounded-full font-bold uppercase text-sm border transition-all ${
                            category === cat 
                            ? 'bg-teal-500 text-black border-teal-500' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* News Grid */}
            {loading ? (
                <div className="text-center py-20 text-teal-500">
                    <i className="fa-solid fa-satellite-dish fa-spin text-4xl mb-4"></i>
                    <p>Establishing Uplink...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item, i) => (
                        <GlassCard key={i} className="flex flex-col h-full hover:border-teal-500/30 transition-all hover:-translate-y-1">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                            <div className="text-xs text-teal-500 font-mono mb-3">{new Date(item.pubDate).toLocaleString()}</div>
                            {item.thumbnail && (
                                <img src={item.thumbnail} alt="News" className="w-full h-40 object-cover rounded mb-4 bg-gray-800" />
                            )}
                            <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-grow">{item.description?.replace(/<[^>]*>?/gm, '')}</p>
                            <a href={item.link} target="_blank" rel="noreferrer" className="text-teal-400 text-sm font-bold hover:underline self-start mt-auto">
                                Read Full Report <i className="fa-solid fa-arrow-right ml-1"></i>
                            </a>
                        </GlassCard>
                    ))}
                </div>
            )}
        </div>
    );
};
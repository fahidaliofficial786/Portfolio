import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { SEO } from '../components/SEO';
import { BLOG_POSTS, SOCIAL_LINKS } from '../constants';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynth, setSpeechSynth] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        setSpeechSynth(window.speechSynthesis);
    }
    return () => {
        if (speechSynth) speechSynth.cancel();
    };
  }, []);

  const toggleSpeech = () => {
    if (!speechSynth || !post) return;

    if (isSpeaking) {
        speechSynth.cancel();
        setIsSpeaking(false);
    } else {
        // Strip HTML tags for reading
        const textToRead = `${post.title}. By ${post.author}. ${post.summary}. ${post.content.replace(/<[^>]*>?/gm, '')}`;
        const newUtterance = new SpeechSynthesisUtterance(textToRead);
        
        // Voice selection
        const voices = speechSynth.getVoices();
        // Prefer a Google English voice if available, otherwise default
        const preferredVoice = voices.find(v => v.name.includes('Google US English')) || voices.find(v => v.lang === 'en-US');
        if (preferredVoice) newUtterance.voice = preferredVoice;

        newUtterance.rate = 1;
        newUtterance.pitch = 1;
        
        newUtterance.onend = () => setIsSpeaking(false);
        
        setUtterance(newUtterance);
        speechSynth.speak(newUtterance);
        setIsSpeaking(true);
    }
  };

  if (!post) {
    return (
      <div className="pt-32 text-center container mx-auto px-4">
        <h1 className="text-4xl text-white font-bold mb-4">404 - Log Not Found</h1>
        <Link to="/blog" className="text-primary-teal hover:underline">Return to Archives</Link>
      </div>
    );
  }

  // Generate some dummy content if the constant content is empty/short for visual demo
  const fullContent = post.content && post.content.length > 50 
    ? post.content 
    : `
      <p>This is a simulated detailed view of the article. In a real application, the full Markdown or HTML content of the blog post would be rendered here.</p>
      <h3>Why this matters</h3>
      <p>Security and automation are the two pillars of modern digital business. Without security, you risk losing everything. Without automation, you risk stagnation.</p>
      <h3>Key Takeaways</h3>
      <ul>
        <li>Always keep your plugins updated.</li>
        <li>Use strong, unique passwords.</li>
        <li>Implement a firewall (WAF).</li>
      </ul>
      <p>For more details, feel free to contact me directly.</p>
    `;

  return (
    <div className="pt-24 pb-12 container mx-auto max-w-4xl px-4">
      <SEO 
        title={post.title}
        description={post.summary}
      />

      <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
         <i className="fa-solid fa-arrow-left"></i> Back to Logs
      </Link>

      <GlassCard className="p-8 md:p-12">
         <div className="mb-8 border-b border-white/10 pb-8">
            <span className="text-primary-teal font-mono text-sm mb-4 block">{post.date}</span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{post.title}</h1>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/20 overflow-hidden">
                      <i className="fa-solid fa-user text-gray-400 w-full h-full flex items-center justify-center"></i>
                   </div>
                   <div>
                      <div className="text-white font-bold text-sm">{post.author}</div>
                      <div className="text-gray-500 text-xs">Security Expert</div>
                   </div>
                </div>

                {/* AI Audio Button */}
                <button 
                    onClick={toggleSpeech}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                        isSpeaking 
                            ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse' 
                            : 'bg-white/5 border-white/10 text-primary-teal hover:bg-primary-teal hover:text-black'
                    }`}
                >
                    <i className={`fa-solid ${isSpeaking ? 'fa-stop' : 'fa-headphones'}`}></i>
                    <span className="text-sm font-bold">{isSpeaking ? 'Stop Audio Protocol' : 'Read Protocol'}</span>
                </button>
            </div>
         </div>

         <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: fullContent }} />
         </div>

         {/* Share / Connect */}
         <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-gray-400 font-mono">End of Transmission.</span>
            <div className="flex gap-4">
               <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-teal transition-colors"><i className="fab fa-linkedin fa-lg"></i></a>
               <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-teal transition-colors"><i className="fab fa-twitter fa-lg"></i></a>
               <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} className="text-gray-400 hover:text-primary-teal transition-colors"><i className="fa-solid fa-envelope fa-lg"></i></a>
            </div>
         </div>
      </GlassCard>
    </div>
  );
};
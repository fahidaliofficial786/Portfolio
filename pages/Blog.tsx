import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-6xl px-4">
      <SEO 
        title="Tech Log - Security & Automation Insights"
        description="Read the latest articles on WordPress Security, Malware Removal guides, and GoHighLevel Automation strategies by Fahid Ali."
      />

      <SectionTitle title="Mission Logs" align="center" subtitle="Insights, guides, and updates from the digital frontline." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {BLOG_POSTS.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="block h-full">
            <GlassCard className="h-full flex flex-col hover:-translate-y-2 hover:border-primary-teal/50 transition-all duration-300 group">
              <div className="mb-4">
                 <span className="text-xs font-mono text-primary-teal bg-primary-teal/10 px-2 py-1 rounded border border-primary-teal/20">
                    {post.date}
                 </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-teal transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {post.summary}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                 Read Protocol <i className="fa-solid fa-arrow-right text-primary-teal"></i>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
};
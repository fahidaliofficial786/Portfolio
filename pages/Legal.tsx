import React from 'react';
import { GlassCard } from '../components/GlassCard';

interface LegalPageProps {
  title: string;
  content: string; // HTML string or plain text
}

export const Legal: React.FC<LegalPageProps> = ({ title, content }) => {
  return (
    <div className="pt-24 pb-12 container mx-auto max-w-4xl px-4">
      <GlassCard className="p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-4">{title}</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          {/* Using dangerouslySetInnerHTML assuming content comes from trusted static source */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </GlassCard>
    </div>
  );
};

import React from 'react';
import { GeneratedImage } from '../types';

interface ImageCardProps {
  image: GeneratedImage;
  onDelete: (id: string) => void;
  onPreview: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onDelete, onPreview }) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image.url;
    link.download = `fhdtech_${image.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative bg-[#0F1115] border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all hover:border-primary-teal/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
      <div 
        className="aspect-square w-full cursor-zoom-in overflow-hidden relative"
        onClick={() => onPreview(image.url)}
      >
        <img 
          src={image.url} 
          alt={image.prompt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <span className="text-white font-bold text-sm"><i className="fa-solid fa-eye mr-2"></i> Preview</span>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-gray-400 line-clamp-2 mb-4 font-mono min-h-[2.5em]" title={image.prompt}>
          {image.prompt}
        </p>
        
        <div className="flex gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); downloadImage(); }}
            className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-primary-teal hover:text-black hover:border-primary-teal transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-download"></i> Save
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(image.id); }}
            className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
            title="Delete"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;


import React, { useState } from 'react';
import JSZip from 'jszip';
import { geminiService } from '../services/geminiService';
import { GeneratedImage, GenerationStatus } from '../types';
import ImageCard from '../components/ImageCard';
import { GlassCard } from '../components/GlassCard';
import { SEO } from '../components/SEO';
import { SectionTitle } from '../components/SectionTitle';

export const ToolsImageGen: React.FC = () => {
  const [promptsText, setPromptsText] = useState<string>('');
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [progress, setProgress] = useState<{ current: number; total: number }>({ current: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "3:4" | "4:3" | "9:16" | "16:9">("1:1");

  const generateBulk = async () => {
    const lines = promptsText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    if (lines.length === 0) {
      setError("Please enter at least one prompt.");
      return;
    }

    setError(null);
    setStatus(GenerationStatus.GENERATING);
    setProgress({ current: 0, total: lines.length });

    // Processing sequentially to respect rate limits of free API keys
    for (let i = 0; i < lines.length; i++) {
      try {
        const prompt = lines[i];
        const dataUrl = await geminiService.generateImage(prompt, aspectRatio);
        
        const imgObj: GeneratedImage = {
          id: Math.random().toString(36).substr(2, 9),
          prompt,
          url: dataUrl,
          timestamp: Date.now()
        };
        
        setImages(prev => [imgObj, ...prev]);
        setProgress(p => ({ ...p, current: i + 1 }));
        
        // Slight delay between calls for stability
        if (i < lines.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      } catch (err: any) {
        console.error(`Failed at prompt ${i + 1}:`, err);
        setError(`Failed to generate image for prompt: "${lines[i]}". Continuing...`);
      }
    }

    setStatus(GenerationStatus.COMPLETED);
  };

  const deleteImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all generated images?")) {
      setImages([]);
    }
  };

  const downloadAllAsZip = async () => {
    if (images.length === 0) return;
    
    const zip = new JSZip();
    const folder = zip.folder("generated_images");
    
    images.forEach((img, idx) => {
      // Remove the base64 header
      const base64Data = img.url.split(',')[1];
      folder?.file(`image_${idx + 1}_${img.id.slice(0, 5)}.png`, base64Data, { base64: true });
    });
    
    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `fhdtech_bulk_images_${Date.now()}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-28 pb-12 container mx-auto max-w-7xl px-4 relative z-10">
      <SEO 
        title="AI Batch Image Generator"
        description="Generate multiple images at once using Gemini 2.5 AI. High-speed bulk creation tool for designers and marketers."
      />

      {/* Header */}
      <div className="text-center mb-12 relative z-20">
         <div className="inline-block p-2 px-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-500 mb-4 font-mono text-xs tracking-widest">
            VISUAL_CORE // BATCH PROCESSING
         </div>
         <SectionTitle title="Batch Image Generator" align="center" subtitle="Mass produce visual assets with Gemini 2.5 Flash." />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-end mb-6 gap-3">
        {images.length > 0 && (
          <>
            <button 
              onClick={clearAll}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all border border-red-500/20 text-sm font-bold"
            >
              <i className="fa-solid fa-trash"></i>
              Clear All
            </button>
            <button 
              onClick={downloadAllAsZip}
              className="flex items-center gap-2 px-6 py-2 bg-primary-teal text-black rounded-lg transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] font-bold text-sm"
            >
              <i className="fa-solid fa-file-zipper"></i>
              Download All (.zip)
            </button>
          </>
        )}
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Control Panel */}
        <section className="lg:col-span-4 space-y-6">
          <GlassCard className="p-6 space-y-6 sticky top-28">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <i className="fa-solid fa-wand-magic-sparkles text-purple-400"></i>
                Prompt Batch List
              </label>
              <textarea 
                placeholder="Enter prompts, one per line...&#10;A futuristic city in neon&#10;Cyberpunk cat playing guitar&#10;Vintage robot painting a mural"
                value={promptsText}
                onChange={(e) => setPromptsText(e.target.value)}
                disabled={status === GenerationStatus.GENERATING}
                className="w-full h-48 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-200 focus:border-primary-teal focus:outline-none transition-all resize-none placeholder:text-gray-600 font-mono"
              />
              <p className="text-[10px] text-gray-500 flex items-center gap-1">
                <i className="fa-solid fa-circle-exclamation"></i>
                One prompt per line. The API will process these sequentially.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-white">Aspect Ratio</label>
              <div className="grid grid-cols-3 gap-2">
                {(["1:1", "4:3", "3:4", "16:9", "9:16"] as const).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`py-2 text-xs rounded-lg border transition-all font-bold ${
                      aspectRatio === ratio 
                        ? 'bg-primary-teal border-primary-teal text-black shadow-[0_0_10px_rgba(0,240,255,0.4)]' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={generateBulk}
              disabled={status === GenerationStatus.GENERATING || !promptsText.trim()}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-gray-800 disabled:to-gray-900 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98]"
            >
              {status === GenerationStatus.GENERATING ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin"></i>
                  Generating ({progress.current}/{progress.total})...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-plus"></i>
                  Generate Batch
                </>
              )}
            </button>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-2 text-red-400 text-xs">
                <i className="fa-solid fa-circle-exclamation mt-0.5 flex-shrink-0"></i>
                <span>{error}</span>
              </div>
            )}
          </GlassCard>
        </section>

        {/* Gallery */}
        <section className="lg:col-span-8">
          {images.length === 0 && status !== GenerationStatus.GENERATING ? (
            <div className="h-[500px] border border-white/10 bg-[#0F1115]/50 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-8 border-dashed">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <i className="fa-regular fa-image text-4xl text-gray-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">No Images Generated Yet</h3>
              <p className="text-gray-500 max-w-xs mx-auto text-sm">
                Enter your batch of prompts on the left and hit Generate to start your creative journey.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {status === GenerationStatus.GENERATING && (
                <div className="col-span-full mb-4">
                   <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
                      <div 
                        className="bg-primary-teal h-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                        style={{ width: `${(progress.current / progress.total) * 100}%` }}
                      />
                   </div>
                   <p className="text-[10px] text-primary-teal mt-2 font-mono uppercase tracking-wider text-right animate-pulse">
                     Crafting image {progress.current} of {progress.total}...
                   </p>
                </div>
              )}
              {images.map((img) => (
                <ImageCard 
                  key={img.id} 
                  image={img} 
                  onDelete={deleteImage}
                  onPreview={setPreviewUrl}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Preview Modal */}
      {previewUrl && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setPreviewUrl(null)}
        >
          <button 
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all flex items-center justify-center"
            onClick={() => setPreviewUrl(null)}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

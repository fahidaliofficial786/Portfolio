
import React, { useState, useEffect } from 'react';
import { audioEngine } from '../services/audioEngine';
import { VoiceName } from '../types';
import { SEO } from '../components/SEO';

interface NewsScript {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

const DEFAULT_SCRIPT = "Good evening. This is the National News Brief. Today in Washington, officials have announced a sweeping new initiative aimed at stabilizing the domestic supply chain. \n\nIn international affairs, diplomatic talks in Geneva have reached a pivotal moment. Representatives from fourteen nations are gathered to discuss a landmark environmental treaty. \n\nReporting for FHD Tech, I'm your anchor. We will continue to bring you updates as these stories develop throughout the night.";

const BROADCAST_MODES = [
  { id: 'news', label: 'News Anchor', icon: 'fa-solid fa-newspaper' },
  { id: 'casual', label: 'Casual Chat', icon: 'fa-solid fa-mug-hot' },
  { id: 'urgent', label: 'Breaking Alert', icon: 'fa-solid fa-triangle-exclamation' },
  { id: 'story', label: 'Storyteller', icon: 'fa-solid fa-book-open' },
];

export const ToolsBroadcast: React.FC = () => {
  const [script, setScript] = useState<string>(DEFAULT_SCRIPT);
  const [title, setTitle] = useState<string>("Daily Briefing");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>(VoiceName.ZEPHYR);
  const [selectedMode, setSelectedMode] = useState<string>('news');
  const [history, setHistory] = useState<NewsScript[]>([]);
  const [lastAudioBlob, setLastAudioBlob] = useState<Blob | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('broadcast_history_local');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const saveToHistory = () => {
    const newEntry: NewsScript = {
      id: Date.now().toString(),
      title: title || "New Broadcast",
      content: script,
      createdAt: Date.now()
    };
    const updated = [newEntry, ...history.slice(0, 9)];
    setHistory(updated);
    localStorage.setItem('broadcast_history_local', JSON.stringify(updated));
  };

  const handlePlay = async () => {
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
      setIsSynthesizing(false);
      return;
    }

    if (!script.trim()) return;

    setIsSynthesizing(true);
    saveToHistory();

    // Inject Tone Instruction into the text sent to AI (but don't change visible script)
    const toneInstruction = `[Style: ${BROADCAST_MODES.find(m => m.id === selectedMode)?.label || 'Neutral'}] `;
    const textToSpeak = toneInstruction + script;

    try {
      const blob = await audioEngine.speak(textToSpeak, selectedVoice, () => {
        setIsPlaying(false);
      });

      if (blob) {
        setLastAudioBlob(blob);
        setIsSynthesizing(false);
        setIsPlaying(true);
      } else {
        setIsSynthesizing(false);
        setIsPlaying(false);
      }
    } catch (e) {
      console.error("Playback failed:", e);
      setIsSynthesizing(false);
      setIsPlaying(false);
    }
  };

  const handleTest = async () => {
    if (isSynthesizing || isPlaying) return;
    
    setIsSynthesizing(true);
    const testText = "System Check. FHD Neural Core is online and functioning at 100% efficiency.";
    
    try {
        await audioEngine.speak(testText, selectedVoice, () => {
            setIsPlaying(false);
        });
        setIsPlaying(true);
    } catch (e) {
        console.error(e);
    } finally {
        setIsSynthesizing(false);
    }
  };

  const handleDownloadScript = () => {
    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_script.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAudio = () => {
    if (!lastAudioBlob) return;
    const url = URL.createObjectURL(lastAudioBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_broadcast.pcm`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = script.trim().split(/\s+/).length;
  const isOverLimit = wordCount < 100 || wordCount > 3000;

  return (
    <div className="pt-28 pb-12 min-h-screen flex flex-col bg-[#0b0f1a] text-slate-200 overflow-x-hidden relative z-10">
      <SEO title="FHD Neural Broadcast" description="AI News Anchor System powered by FHD Tech." />

      {/* Header - Relative positioning on mobile to avoid overlay issues */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 mb-6 md:mb-8 relative z-30">
        <header className="bg-[#1e293b]/90 md:bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Branding */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/40 shrink-0">
                <i className="fa-solid fa-tower-broadcast text-white text-2xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white leading-none">
                  NEURAL <span className="text-red-500">BROADCAST</span>
                </h1>
                <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></span>
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150"></span>
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">FHD Tech Audio Core v2.0</p>
                </div>
              </div>
            </div>

            {/* Top Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto relative z-40">
              <button 
                onClick={handleTest}
                disabled={isSynthesizing || isPlaying}
                className="w-full md:w-auto px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-600 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:active:scale-100 touch-manipulation cursor-pointer relative z-50"
              >
                {isSynthesizing ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-wave-square"></i>}
                <span>SYSTEM CHECK</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20 relative z-20">
        
        {/* Left Sidebar: Config */}
        <aside className="lg:col-span-4 space-y-6 order-2 lg:order-1 relative z-20">
          {/* Settings Card */}
          <div className="bg-[#1e293b]/50 border border-white/5 rounded-2xl p-5 md:p-6 backdrop-blur-sm relative z-20">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <i className="fa-solid fa-sliders"></i> Configuration
            </h3>
            
            <div className="space-y-6">
              {/* Voice Selector */}
              <div className="relative z-30">
                <label className="block text-xs font-bold text-white mb-2 ml-1">AI VOICE MODEL</label>
                <div className="relative">
                  <select 
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-all appearance-none cursor-pointer hover:bg-slate-900 relative z-40"
                  >
                    {Object.values(VoiceName).map(v => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none z-50">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Mode Selector */}
              <div className="relative z-20">
                <label className="block text-xs font-bold text-white mb-2 ml-1">TRANSMISSION MODE</label>
                <div className="grid grid-cols-2 gap-2">
                  {BROADCAST_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedMode(mode.id)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all touch-manipulation relative z-30 ${
                        selectedMode === mode.id 
                          ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/20' 
                          : 'bg-[#0f172a] border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      <i className={`${mode.icon} text-lg mb-2`}></i>
                      <span className="text-[10px] font-bold uppercase">{mode.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Word Count Indicator */}
              <div className="pt-2 border-t border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Buffer Usage</span>
                  <span className={`text-xs font-mono ${isOverLimit ? 'text-red-500' : 'text-green-500'}`}>
                    {wordCount} / 3000 Words
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#0f172a] rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${isOverLimit ? 'bg-red-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min((wordCount / 3000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* History Card (Desktop Only) */}
          <div className="bg-[#1e293b]/50 border border-white/5 rounded-2xl p-5 hidden lg:block backdrop-blur-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <i className="fa-solid fa-clock-rotate-left"></i> Recent Logs
            </h3>
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
              {history.length === 0 ? (
                <div className="text-center py-8 opacity-50">
                  <i className="fa-solid fa-folder-open text-2xl mb-2"></i>
                  <p className="text-[10px] uppercase">No archives found</p>
                </div>
              ) : (
                history.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => { setScript(item.content); setTitle(item.title); }}
                    className="w-full text-left p-3 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-red-500/50 transition-all group"
                  >
                    <div className="text-xs font-bold text-slate-300 truncate group-hover:text-white mb-1">{item.title}</div>
                    <div className="text-[10px] text-slate-600 font-mono">{new Date(item.createdAt).toLocaleDateString()}</div>
                  </button>
                ))
              )}
            </div>
          </div>
        </aside>

        {/* Center: Main Editor */}
        <section className="lg:col-span-8 flex flex-col gap-4 order-1 lg:order-2 h-full relative z-20">
          
          {/* Editor Surface */}
          <div className="flex-1 bg-[#1e293b]/80 border border-white/10 rounded-3xl p-6 md:p-8 relative flex flex-col shadow-2xl backdrop-blur-md min-h-[500px] z-20">
            
            {/* Status Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-4 border-b border-white/5 gap-4 relative z-30">
               <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border-none text-xl font-bold text-white focus:outline-none w-full placeholder-slate-600 relative z-40"
                placeholder="ENTER BROADCAST TITLE..."
              />
              <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors shrink-0 ${
                isPlaying 
                  ? 'bg-red-500/20 text-red-500 border-red-500 animate-pulse' 
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}>
                {isPlaying ? 'ON AIR' : isSynthesizing ? 'PROCESSING' : 'STANDBY'}
              </div>
            </div>

            {/* Text Area - High Z-Index for clickability */}
            <textarea 
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="flex-1 bg-transparent border-none text-slate-300 resize-none focus:outline-none font-medium leading-relaxed text-lg custom-scrollbar placeholder-slate-700 font-sans relative z-30"
              placeholder="Enter news script or narrative here..."
              style={{ pointerEvents: 'auto' }}
            />

            {/* Action Bar */}
            <div className="pt-6 mt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 relative z-30">
               
               {/* Play/Stop Button */}
               <button 
                  onClick={handlePlay}
                  disabled={isSynthesizing}
                  className={`flex-grow py-4 rounded-xl font-black text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] touch-manipulation cursor-pointer relative z-40 ${
                    isSynthesizing
                      ? 'bg-slate-700 text-slate-400 cursor-wait'
                      : isPlaying
                        ? 'bg-slate-800 text-red-500 border border-red-500/50 hover:bg-slate-900'
                        : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]'
                  }`}
               >
                  {isSynthesizing ? (
                    <>
                       <i className="fa-solid fa-gear fa-spin text-lg"></i> Initializing Core...
                    </>
                  ) : isPlaying ? (
                    <>
                       <i className="fa-solid fa-square text-lg"></i> Terminate Feed
                    </>
                  ) : (
                    <>
                       <i className="fa-solid fa-play text-lg"></i> Initiate Broadcast
                    </>
                  )}
               </button>

               {/* Downloads */}
               <div className="flex gap-2 relative z-40">
                  <button 
                    onClick={handleDownloadAudio}
                    disabled={!lastAudioBlob}
                    className="h-full px-6 py-4 md:py-0 rounded-xl bg-[#0f172a] border border-slate-700 text-blue-400 hover:bg-slate-800 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation"
                    title="Export Audio"
                  >
                    <i className="fa-solid fa-download text-xl"></i>
                  </button>
                  <button 
                    onClick={handleDownloadScript}
                    className="h-full px-6 py-4 md:py-0 rounded-xl bg-[#0f172a] border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white transition-all touch-manipulation"
                    title="Export Script"
                  >
                    <i className="fa-solid fa-file-lines text-xl"></i>
                  </button>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* Global Style overrides for this page */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
};

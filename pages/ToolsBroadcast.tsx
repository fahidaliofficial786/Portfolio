
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

const DEFAULT_SCRIPT = "PROMPT: [SCENE START] \n\nGood evening. This is the National News Brief. Today in Washington, officials have announced a sweeping new initiative aimed at stabilizing the domestic supply chain. The move comes as economists predict a surge in manufacturing output across the Midwest. \n\nIn international affairs, diplomatic talks in Geneva have reached a pivotal moment. Representatives from fourteen nations are gathered to discuss a landmark environmental treaty that could redefine global energy standards for the next fifty years. \n\nReporting for the network, I'm your anchor. We will continue to bring you updates as these stories develop throughout the night. [SCENE END]";

export const ToolsBroadcast: React.FC = () => {
  const [script, setScript] = useState<string>(DEFAULT_SCRIPT);
  const [title, setTitle] = useState<string>("US National Briefing");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>(VoiceName.ZEPHYR);
  const [history, setHistory] = useState<NewsScript[]>([]);
  const [isVibeActive, setIsVibeActive] = useState<boolean>(true);
  const [lastAudioBlob, setLastAudioBlob] = useState<Blob | null>(null);

  // History persistence
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
      audioEngine?.stop();
      setIsPlaying(false);
    } else {
      if (!script.trim()) return;
      saveToHistory();
      setIsPlaying(true);
      
      const blob = await audioEngine?.speak(script, selectedVoice, () => setIsPlaying(false));
      if (blob) {
        setLastAudioBlob(blob);
      }
    }
  };

  const handleTest = async () => {
    const testText = "Attention. This is a broadcast test of the Gemini neural system. Audio quality check complete.";
    const blob = await audioEngine?.speak(testText, selectedVoice, () => {});
    if (blob) setLastAudioBlob(blob);
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
  const isOverLimit = wordCount < 1500 || wordCount > 2000;

  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col bg-[#0b0f1a] text-slate-200">
      <SEO title="Neural Broadcast" description="AI News Anchor System using Gemini TTS." />

      {/* Header / Toolbar */}
      <header className="border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-md sticky top-20 z-40 rounded-xl mx-4 mb-6">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-2.5 rounded-lg shadow-lg shadow-red-900/30">
              <i className="fa-solid fa-microphone text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-white">NEURAL<span className="text-red-600">BROADCAST</span></h1>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">Gemini Neural Engine • US Region</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-4">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Status</span>
              <span className="text-xs font-mono text-green-400">ENCRYPTED / SECURE</span>
            </div>
            <button 
              onClick={handleTest}
              className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700 flex items-center gap-2"
            >
              <i className="fa-solid fa-volume-high"></i>
              VOICE TEST
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Controls */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <i className="fa-solid fa-sliders"></i> Anchor Settings
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-2 uppercase tracking-widest">Select Gemini Voice</label>
                <select 
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600/50 transition-all appearance-none cursor-pointer"
                >
                  {Object.values(VoiceName).map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Word Count</span>
                  <span className={`text-xs font-mono ${isOverLimit ? 'text-amber-500' : 'text-green-500'}`}>
                    {wordCount}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${isOverLimit ? 'bg-amber-600' : 'bg-red-600'}`}
                    style={{ width: `${Math.min((wordCount / 2000) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-600 mt-2 leading-tight">
                  Target range: 1,500 - 2,000 words for optimal broadcast pacing.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Elastic Vibe</span>
                <button 
                  onClick={() => setIsVibeActive(!isVibeActive)}
                  className={`w-10 h-5 rounded-full transition-all relative ${isVibeActive ? 'bg-red-600' : 'bg-slate-800'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isVibeActive ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-clock-rotate-left"></i> Archive
            </h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {history.length === 0 ? (
                <div className="text-center py-6">
                  <i className="fa-regular fa-file-lines text-2xl text-slate-800 mx-auto mb-2 opacity-20"></i>
                  <p className="text-[10px] text-slate-600 uppercase font-bold">No Records</p>
                </div>
              ) : (
                history.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => { setScript(item.content); setTitle(item.title); }}
                    className="w-full text-left p-3 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-slate-700 transition-all group"
                  >
                    <div className="text-[11px] font-bold text-slate-400 truncate group-hover:text-white">{item.title}</div>
                    <div className="text-[9px] text-slate-600 mt-1 flex justify-between items-center">
                      <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                      <i className="fa-regular fa-clock text-[10px]"></i>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </aside>

        {/* Center: Script Editor */}
        <section className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-inner min-h-[500px]">
            <div className="flex items-center justify-between mb-6">
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border-none text-2xl font-black text-white focus:outline-none w-full placeholder-slate-800 tracking-tight"
                placeholder="REPORT TITLE..."
              />
              <div className="flex gap-2">
                 <div className="px-3 py-1 bg-red-600/10 text-red-500 rounded text-[10px] font-black uppercase tracking-widest border border-red-600/20">LIVE</div>
              </div>
            </div>

            <textarea 
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="flex-1 bg-transparent border-none text-slate-300 resize-none focus:outline-none font-medium leading-relaxed text-lg custom-scrollbar placeholder-slate-800"
              placeholder="Paste news transcript here..."
            />

            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center pointer-events-none opacity-40">
               <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-600">Secure News Terminal V4.0</span>
               <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-3 bg-red-600/50" />)}
               </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handlePlay}
              className={`flex-1 py-5 rounded-2xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] shadow-2xl shadow-red-900/20 font-black text-sm tracking-widest uppercase ${
                isPlaying 
                ? 'bg-slate-800 text-red-500 border border-red-900/50 animate-pulse' 
                : 'bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-red-600/20'
              }`}
            >
              {isPlaying ? <i className="fa-solid fa-pause text-xl"></i> : <i className="fa-solid fa-play text-xl"></i>}
              {isPlaying ? 'ABORT BROADCAST' : 'START BROADCAST'}
            </button>

            <div className="flex gap-2">
              <button 
                onClick={handleDownloadAudio}
                disabled={!lastAudioBlob}
                className="px-6 py-5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-blue-400 transition-all active:scale-95 disabled:opacity-20 disabled:grayscale"
                title="Download Broadcast Voice"
              >
                <i className="fa-solid fa-file-audio text-xl"></i>
              </button>
              
              <button 
                onClick={handleDownloadScript}
                className="px-6 py-5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 transition-all active:scale-95"
                title="Download Script Text"
              >
                <i className="fa-solid fa-file-lines text-xl"></i>
              </button>
            </div>

            <button 
              onClick={() => { setScript(''); setLastAudioBlob(null); }}
              className="px-6 py-5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-red-900/20 hover:text-red-500 transition-all active:scale-95 text-slate-600"
              title="Clear Terminal"
            >
              <i className="fa-solid fa-trash text-xl"></i>
            </button>
          </div>
        </section>

        {/* Right: Monitoring */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-4 border-slate-800 flex items-center justify-center relative mb-6">
              <i className={`fa-solid fa-chart-line text-4xl ${isPlaying ? 'text-red-500 animate-pulse' : 'text-slate-800'}`}></i>
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border-4 border-red-600 animate-ping opacity-20" />
              )}
            </div>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Current Modality</h4>
            <p className="text-sm font-black text-white tracking-tight uppercase">Gemini Neural Engine</p>
            
            <div className="w-full mt-8 space-y-4">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-bold text-slate-600 uppercase">Elasticity</span>
                  <span className="text-[9px] font-mono text-red-500">60Hz</span>
                </div>
                <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                   <div className={`h-full bg-red-600 transition-all duration-1000 ${isPlaying ? 'w-2/3' : 'w-1/4'}`} />
                </div>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-bold text-slate-600 uppercase">Resonance</span>
                  <span className="text-[9px] font-mono text-red-500">HI-FI</span>
                </div>
                <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                   <div className={`h-full bg-red-600 transition-all duration-700 ${isPlaying ? 'w-full' : 'w-1/2'}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-950/10 border border-red-900/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 text-red-500 mb-3">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span className="text-xs font-black uppercase tracking-widest">Network Alert</span>
            </div>
            <p className="text-[11px] leading-relaxed text-red-400/80 font-medium italic">
              "This tool is powered by Gemini 2.5 Flash TTS for professional-grade news broadcasting. All generations are processed securely via Neural Broadcast protocol."
            </p>
          </div>
        </aside>
      </main>

      {/* Ticker Footer */}
      <footer className="bg-red-600 py-1.5 overflow-hidden flex items-center border-t-2 border-slate-900 mt-12">
        <div className="bg-black px-4 py-1 flex items-center shrink-0 z-10 skew-x-[-20deg] -ml-2">
          <span className="text-white text-[10px] font-black italic tracking-tighter uppercase skew-x-[20deg]">NEWS TICKER</span>
        </div>
        <div className="flex gap-12 animate-marquee items-center text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
          <span>• GEMINI NEURAL BROADCAST SYSTEM ENGAGED • HIGH FIDELITY TTS ENABLED • REAL-TIME US NEWS SYNTHESIS • ELASTIC VIBE FREQUENCY STABLE • REPORTING FROM STUDIO 4 • 1500-2000 WORD BUFFER ENABLED • VOICE EXPORT READY •</span>
          <span>• GEMINI NEURAL BROADCAST SYSTEM ENGAGED • HIGH FIDELITY TTS ENABLED • REAL-TIME US NEWS SYNTHESIS • ELASTIC VIBE FREQUENCY STABLE • REPORTING FROM STUDIO 4 • 1500-2000 WORD BUFFER ENABLED • VOICE EXPORT READY •</span>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

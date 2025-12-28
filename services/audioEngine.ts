
import { GoogleGenAI, Modality } from "@google/genai";

let audioContext: AudioContext | null = null;
let source: AudioBufferSourceNode | null = null;

// Helper to decode Base64
function decodeBase64(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper to convert raw PCM to AudioBuffer
function pcmToAudioBuffer(data: Uint8Array, ctx: AudioContext, sampleRate: number = 24000): AudioBuffer {
  // Create a Float32 buffer for the AudioContext
  const pcm16 = new Int16Array(data.buffer, data.byteOffset, data.byteLength / 2);
  const buffer = ctx.createBuffer(1, pcm16.length, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  // Normalize 16-bit PCM to Float32 [-1.0, 1.0]
  for (let i = 0; i < pcm16.length; i++) {
    channelData[i] = pcm16[i] / 32768.0;
  }
  return buffer;
}

export const audioEngine = {
  speak: async (text: string, voice: string, onComplete: () => void): Promise<Blob | null> => {
    try {
      // 1. Initialize AudioContext (Must be inside user gesture flow)
      if (!audioContext) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContext = new AudioContextClass({ sampleRate: 24000 });
      }

      // 2. Resume if suspended (Critical for Chrome/Edge)
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      // 3. Stop previous audio
      if (source) {
        try { source.stop(); } catch (e) {}
        source = null;
      }

      // 4. Call Gemini API
      const ai = new GoogleGenAI({ apiKey: "AIzaSyDa3xvE22ggiawdxdYCUKj3FaqVpbZ74_8" });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voice }
            }
          }
        }
      });

      // 5. Decode Response
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) {
        console.warn("Audio Engine: No audio data returned.");
        onComplete();
        return null;
      }

      // 6. Play Audio
      const pcmBytes = decodeBase64(base64Audio);
      const audioBuffer = pcmToAudioBuffer(pcmBytes, audioContext);

      source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.onended = () => {
        source = null;
        onComplete();
      };
      source.start();

      return new Blob([pcmBytes], { type: 'audio/pcm' });

    } catch (error) {
      console.error("Audio Engine Critical Failure:", error);
      onComplete(); // Ensure UI resets
      return null;
    }
  },

  stop: () => {
    if (source) {
      try {
        source.stop();
        source.onended = null; // Prevent callback if manually stopped
      } catch (e) {
        console.error("Error stopping audio:", e);
      }
      source = null;
    }
  }
};

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
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length;
  const buffer = ctx.createBuffer(1, frameCount, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}

export const audioEngine = {
  speak: async (text: string, voice: string, onComplete: () => void): Promise<Blob | null> => {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      if (source) {
        source.stop();
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) throw new Error("No audio data returned");

      const pcmBytes = decodeBase64(base64Audio);
      const audioBuffer = pcmToAudioBuffer(pcmBytes, audioContext);

      source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.onended = onComplete;
      source.start();

      // Return raw PCM blob (Note: This is raw PCM, not a WAV file. 
      // Players might struggle to play this without a header, but it stores the data.)
      return new Blob([pcmBytes], { type: 'audio/pcm' });

    } catch (error) {
      console.error("TTS Error", error);
      onComplete();
      return null;
    }
  },

  stop: () => {
    if (source) {
      source.stop();
      source = null;
    }
  }
};

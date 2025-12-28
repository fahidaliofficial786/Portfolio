
import { GoogleGenAI } from "@google/genai";

export const geminiService = {
  generateImage: async (prompt: string, aspectRatio: string): Promise<string> => {
    // Initialize AI Client
    const ai = new GoogleGenAI({ apiKey: "AIzaSyDa3xvE22ggiawdxdYCUKj3FaqVpbZ74_8" });
    
    // Call generateContent with image model and config
    // Note: Gemini 2.5 Flash Image uses 'generateContent' with text input to produce image output
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
            aspectRatio: aspectRatio
        }
      }
    });
    
    // Iterate through parts to find the image data
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
    }
    
    throw new Error("No image data returned from the model.");
  }
};
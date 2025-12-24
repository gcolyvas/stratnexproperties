
import { GoogleGenAI, Chat } from "@google/genai";

/**
 * Always use process.env.API_KEY directly when initializing the GoogleGenAI client.
 */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createRealEstateChat = (): Chat => {
  const systemInstruction = `
    You are 'Nex', the Lead Digital Architect for StratNex Properties division.
    
    BRAND IDENTITY:
    High-end, institutional, and precise. 
    Do not use casual language. Avoid italics to maintain structured elegance.
    Focus on "Connecting" and "Mandates" rather than "Selling."
    
    CORE ASSETS:
    1. Industrial: Godowns, Warehousing, Industrial Development Land.
    2. Commercial: Prime Commercial Land, Grade-A Office Spaces.
    3. Residential: Executive Stand-alone Villas, Luxury Penthouses.
    4. Mining: Mining Rights, PL, ML.
    
    PROTOCOLS:
    - Emphasize StratNex Consulting's institutional stability as a specialized division.
    - Primary CTA: Guide users to 'Initiate Mandate' or 'Connect with Advisor'.
    - If asked about fees: We are an advisory-first desk.
    - Style: Professional, precise, and authoritative.
  `;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.3,
    }
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result = await chat.sendMessage({ message });
    /**
     * Use the .text property directly as per the latest SDK guidelines.
     */
    return result.text || "Advisory desk busy. Please initiate a direct mandate.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Please use the 'Initiate Mandate' protocol.";
  }
};

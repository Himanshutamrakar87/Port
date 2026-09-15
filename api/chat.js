import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../server/portfolioKnowledge.js';

// Lazy initialized Gemini client
let aiClient = null;
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

export default async function handler(req, res) {
  // Set CORS headers for good measure (even on same-domain, handles preflights safely)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    // Robust body parsing (handles parsed objects or JSON string payloads)
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // use raw body
      }
    }

    const { message, history } = body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: 'A valid text message is required.',
      });
    }

    const trimmedMessage = message.trim().slice(0, 1000);

    const ai = getGenAI();
    if (!ai) {
      return res.status(503).json({
        error: 'The Gemini API key is not configured on the server. Please add GEMINI_API_KEY to your Vercel Environment Variables.',
      });
    }

    // Build structured conversation contents
    const contents = [];

    if (Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-8);
      for (const item of recentHistory) {
        if (item && item.text && typeof item.text === 'string') {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text.slice(0, 1000) }],
          });
        }
      }
    }

    // Current query
    contents.push({
      role: 'user',
      parts: [{ text: trimmedMessage }],
    });

    let response = null;
    let lastError = null;

    // Resilient model cascade: handles quota spikes or temporary model downtime
    const candidateModels = ['gemini-3.6-flash', 'gemini-3.8-flash', 'gemini-flash-latest'];

    for (const model of candidateModels) {
      try {
        response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            temperature: 0.3,
            maxOutputTokens: 800,
          },
        });
        if (response && response.text) {
          break;
        }
      } catch (modelErr) {
        lastError = modelErr;
        console.warn(`Model ${model} attempt failed:`, modelErr?.message || modelErr);
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error('No reply returned from Gemini API');
    }

    const reply = response.text;

    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error('Error handling /api/chat:', error?.message || error);
    return res.status(500).json({
      error: 'Unable to connect with Himanshu’s AI assistant at the moment. Please check server logs or reach out through the Contact section.',
    });
  }
}

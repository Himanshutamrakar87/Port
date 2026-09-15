import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from './portfolioKnowledge.js';

dotenv.config();

const app = express();

// Middleware: Enable CORS for cross-origin deployment (e.g., React on Vercel + Express on Render/Railway)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware: JSON Body Parser
app.use(express.json({ limit: '1mb' }));

// Lazy GoogleGenAI client singleton
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    assistant: 'ready',
    timestamp: new Date().toISOString(),
  });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: 'A valid text message is required.',
      });
    }

    const trimmedMessage = message.trim().slice(0, 1000); // Safety limit

    const ai = getGenAI();
    if (!ai) {
      return res.status(503).json({
        error: 'The Gemini API key is not configured on the server. Please check GEMINI_API_KEY in your server environment.',
      });
    }

    // Build structured conversation contents
    const contents = [];

    if (Array.isArray(history) && history.length > 0) {
      // Include up to last 8 messages for context continuity
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

    // Add current user query
    contents.push({
      role: 'user',
      parts: [{ text: trimmedMessage }],
    });

    let response = null;
    let lastError = null;

    // Primary model is gemini-3.8-flash with fallback to gemini-3.6-flash if high demand spikes occur
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.6-flash'];

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
      throw lastError || new Error('No text returned from Gemini API');
    }

    const reply = response.text;

    return res.json({
      reply,
    });
  } catch (error) {
    console.error('Error handling /api/chat:', error?.message || error);
    return res.status(500).json({
      error: 'Unable to connect with Himanshu’s AI assistant at the moment. Please try again shortly or use the Contact section.',
    });
  }
});

// Standalone execution runner
const isDirectExecution = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isDirectExecution) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Himanshu Portfolio AI Backend listening on port ${PORT}`);
  });
}

export default app;

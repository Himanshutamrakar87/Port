import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, RotateCcw, Bot, User, ArrowUpRight, MessageSquare } from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  'What does Himanshu specialize in?',
  'Tell me about his projects.',
  'What services does he offer?',
  'Why should I work with Himanshu?',
  'Tell me about his experience.',
];

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi! I'm Himanshu's AI Portfolio Assistant. Ask me about his skills, projects, experience, services or anything you'd like to know.",
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

// Formatter for markdown-like text (bold, lists, linebreaks)
function formatMessageText(text) {
  if (!text) return null;

  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    // Empty line -> spacing
    if (!line.trim()) {
      return <div key={lineIdx} className="h-2" />;
    }

    // Bullet point line
    const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
    const cleanedLine = isBullet ? line.trim().substring(2) : line;

    // Parse bold text **bold**
    const parts = cleanedLine.split(/(\*\*.*?\*\*)/g);
    const renderedParts = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={pIdx} className="font-semibold text-neutral-950 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start space-x-2 my-1 pl-1">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
          <span className="leading-relaxed">{renderedParts}</span>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="leading-relaxed mb-1 last:mb-0">
        {renderedParts}
      </p>
    );
  });
}

export default function AIAssistant({ onOpenContactModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input on open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      // Allow custom backend endpoint via VITE_API_URL (e.g. for standalone Vercel frontend + Render backend)
      const apiBase = import.meta.env.VITE_API_URL || '';
      const chatEndpoint = `${apiBase}/api/chat`;

      // Build conversation history for context continuity
      const historyPayload = messages
        .filter((m) => m.id !== 'welcome' && !m.isError)
        .map((m) => ({
          role: m.role === 'user' ? 'user' : 'model',
          text: m.text,
        }));

      const res = await fetch(chatEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const aiReply = data.reply || "I don't have that information in Himanshu's portfolio yet.";

      const aiMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Chatbot error:', err);
      const errorMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        isError: true,
        text:
          err.message?.includes('API key')
            ? "The Gemini API key is currently not configured on the backend server. You can configure GEMINI_API_KEY in the environment settings, or reach out directly to Himanshu via the Contact section!"
            : "I'm having trouble connecting to Himanshu's AI server right now. Please try again or reach out through the Contact / Let's Talk section.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        ...WELCOME_MESSAGE,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setShowSuggestions(true);
    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close AI Assistant" : "Open Himanshu's AI Assistant"}
          className={`group flex items-center space-x-2.5 px-4 py-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 ring-2 ring-neutral-400 dark:ring-neutral-600'
              : 'bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 text-white hover:shadow-violet-500/25 hover:scale-[1.03] active:scale-[0.98]'
          }`}
        >
          <div className="relative flex items-center justify-center">
            {isOpen ? (
              <X className="w-5 h-5 transition-transform duration-200" />
            ) : (
              <>
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </>
            )}
          </div>
          <span className="text-sm font-semibold tracking-wide">
            {isOpen ? 'Close Chat' : "Ask Himanshu's AI"}
          </span>
        </button>
      </div>

      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="chat-panel-title"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] max-w-[420px] h-[540px] max-h-[calc(100vh-6.5rem)] flex flex-col rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xl overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center border border-violet-500/20 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3
                  id="chat-panel-title"
                  className="text-sm font-bold font-heading text-neutral-950 dark:text-white leading-tight"
                >
                  Ask Himanshu's AI
                </h3>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                    AI Portfolio Assistant
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 scroll-smooth">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-end space-x-2 ${
                    isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-violet-600/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20 mb-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed max-w-[85%] shadow-xs ${
                      isUser
                        ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-br-xs'
                        : msg.isError
                        ? 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/60 rounded-bl-xs'
                        : 'bg-neutral-100/90 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-100 border border-neutral-200/60 dark:border-neutral-700/60 rounded-bl-xs'
                    }`}
                  >
                    {formatMessageText(msg.text)}
                    <div
                      className={`text-[10px] mt-1 text-right select-none ${
                        isUser
                          ? 'text-neutral-400 dark:text-neutral-600'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 mb-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Subtle Typing / Loading Indicator */}
            {isLoading && (
              <div className="flex items-end space-x-2 justify-start">
                <div className="w-7 h-7 rounded-lg bg-violet-600/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20 mb-1">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="rounded-2xl rounded-bl-xs px-4 py-3 bg-neutral-100/90 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60 shadow-xs flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" />
                  <span className="text-[11px] text-neutral-400 ml-1">Himanshu's AI is thinking...</span>
                </div>
              </div>
            )}

            {/* Suggested Questions Section */}
            {showSuggestions && !isLoading && (
              <div className="pt-2 pb-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2 px-1">
                  Suggested Questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((question, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      onClick={() => handleSendMessage(question)}
                      className="text-left text-xs px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700/80 bg-white dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-300 transition-all cursor-pointer shadow-2xs active:scale-[0.98]"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Contact Action Banner */}
          {onOpenContactModal && (
            <div className="px-4 py-1.5 bg-neutral-100/60 dark:bg-neutral-800/40 border-t border-neutral-200/50 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
              <span>Looking to collaborate?</span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenContactModal();
                }}
                className="font-medium text-violet-600 dark:text-violet-400 hover:underline flex items-center space-x-0.5 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Input & Send Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-neutral-50/90 dark:bg-neutral-900/90 border-t border-neutral-200/80 dark:border-neutral-800 shrink-0"
          >
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Himanshu's skills, work..."
                disabled={isLoading}
                className="w-full pl-3.5 pr-12 py-2.5 text-xs rounded-xl bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-hidden focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="absolute right-1.5 p-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-30 disabled:hover:bg-violet-600 transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between px-1 mt-1.5 text-[10px] text-neutral-400 dark:text-neutral-500">
              <span>Answers based on Himanshu's portfolio</span>
              <span>Gemini Powered</span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

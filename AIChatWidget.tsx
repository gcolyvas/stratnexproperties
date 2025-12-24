import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, User, Building } from 'lucide-react';

// THESE ARE THE CRITICAL LINES. Notice there is no "../services/"
import { createRealEstateChat, sendMessageToGemini } from './geminiService';
import { ChatMessage } from './types';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Greetings. I am Nex, your Senior Digital Portfolio Lead. How may I assist you with strategic asset acquisitions or due diligence in Tanzania today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      chatSessionRef.current = createRealEstateChat();
    } catch (e) {
      console.error("Failed to init chat", e);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !chatSessionRef.current) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end pointer-events-none">
      <div 
        className={`bg-white shadow-xl border border-slate-200 w-[350px] md:w-[420px] mb-6 transition-all duration-500 transform origin-bottom-right overflow-hidden pointer-events-auto flex flex-col rounded-none ${
          isOpen ? 'opacity-100 scale-100 translate-y-0 h-[600px]' : 'opacity-0 scale-95 translate-y-12 h-0'
        }`}
      >
        <div className="bg-[#142c40] p-7 flex items-center justify-between flex-shrink-0 border-b-4 border-[#A6A8AB]">
          <div className="flex items-center gap-4">
            <Building className="w-6 h-6 text-[#A6A8AB]" />
            <div>
              <h3 className="font-luxury text-white text-lg tracking-wide">Nex Concierge</h3>
              <p className="text-[#A6A8AB] text-[9px] font-bold uppercase tracking-[0.3em] mt-1">Institutional Portfolio Desk</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[90%] p-5 text-sm leading-relaxed shadow-sm rounded-none border-l-2 ${
                  msg.role === 'user' ? 'bg-[#142c40] text-white border-[#A6A8AB]' : 'bg-white text-slate-700 border-[#142c40]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && <Loader2 className="w-5 h-5 text-[#142c40] animate-spin" />}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="p-6 bg-white border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Inquire about assets..."
              className="w-full bg-slate-50 border border-slate-200 rounded-none pl-6 pr-14 py-5 text-sm"
            />
            <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#142c40] text-white">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="pointer-events-auto p-5 shadow-2xl bg-[#142c40] border-4 border-white rounded-none">
        {isOpen ? <X className="w-7 h-7 text-white" /> : <MessageSquare className="w-7 h-7 text-[#A6A8AB]" />}
      </button>
    </div>
  );
};

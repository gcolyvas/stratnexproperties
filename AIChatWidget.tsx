import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Building } from 'lucide-react';

import { createRealEstateChat, sendMessageToGemini } from './geminiService';
import { ChatMessage, ChatSession } from './types';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Greetings. I am Nex, your Senior Digital Portfolio Lead. How may I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatSessionRef = useRef<ChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSessionRef.current = createRealEstateChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !chatSessionRef.current) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(
        chatSessionRef.current,
        userMsg.text
      );

      const aiMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="bg-white w-[400px] h-[600px] shadow-xl flex flex-col">
          <header className="bg-[#142c40] text-white p-4 flex justify-between">
            <div className="flex items-center gap-2">
              <Building size={18} />
              <span>Nex Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(m => (
              <div
                key={m.id}
                className={m.role === 'user' ? 'text-right' : 'text-left'}
              >
                <div className="inline-block bg-slate-100 p-3">
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <Loader2 className="animate-spin" />}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="w-full border p-2"
              placeholder="Ask about assets..."
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#142c40] p-4 text-white"
      >
        <MessageSquare />
      </button>
    </div>
  );
};

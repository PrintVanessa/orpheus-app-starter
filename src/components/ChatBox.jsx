// src/components/ChatBox.jsx
import React, { useState, useEffect, useRef } from 'react';
import { usePoeticMode } from '../context/PoeticModeContext';
import { callOrpheus } from '../utils/callOrpheus';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);
  const { poeticMode } = usePoeticMode();

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, from: 'user' }]);
      setInput('');
      setLoading(true);

      const reply = await callOrpheus(input, poeticMode);
      setMessages((prev) => [...prev, { text: reply, from: 'echo' }]);
      setLoading(false);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-lg mx-auto mt-10 text-white shadow-xl animate-fade-in animate-scroll-fade">
      <div className="h-60 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`text-sm whitespace-pre-wrap italic transition-opacity duration-700 ${
              msg.from === 'user' ? 'text-echoPink text-right' : 'text-lyreGold text-left animate-typewriter'
            }`}
          >
            {msg.text}
          </p>
        ))}
        {loading && (
          <p className="text-lyreGold italic animate-pulse">Echoing...</p>
        )}
        <div ref={messageEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded bg-white/20 text-white placeholder-gray-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Speak into the underworld..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-lyreGold text-underworldGray font-semibold rounded shadow-md hover:scale-105 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
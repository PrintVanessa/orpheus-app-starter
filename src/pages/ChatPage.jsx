import { useEffect, useRef, useState } from "react";
import { callOrpheusLLM } from "../utils/callOrpheus.js";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: crypto.randomUUID(), role: "assistant", content: "Welcome. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setMessages(m => [...m, { id: crypto.randomUUID(), role: "user", content: text }]);
    setInput("");
    setLoading(true);
    const reply = await callOrpheusLLM(text, { name: "friend" });
    setMessages(m => [...m, { id: crypto.randomUUID(), role: "assistant", content: reply }]);
    setLoading(false);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1>Orpheus — The Lyre Awakens</h1>
      </header>

      <main className="chat-container">
        <section className="messages">
          {messages.map(m => (
            <div key={m.id} className={`bubble ${m.role}`}>
              {m.content}
            </div>
          ))}
          <div ref={bottomRef} />
        </section>

        <div className="input-bar">
          <input
            placeholder={loading ? "Thinking..." : "Type a message"}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={loading}
          />
          <button onClick={send} disabled={loading || !input.trim()}>
            {loading ? "…" : "Send"}
          </button>
        </div>
      </main>
    </div>
  );
}

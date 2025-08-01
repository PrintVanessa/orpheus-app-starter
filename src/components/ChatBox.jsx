import React, { useState, useEffect, useRef } from "react"
import { messages } from "../data/messages"
import { useLyreEcho } from "../hooks/useLyreEcho"

export default function ChatBox() {
  const [input, setInput] = useState("")
  const [entries, setEntries] = useState([...messages])
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef()

useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: "smooth" })
}, [entries])

  // 🔁 Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lyre-journal")
    if (saved) {
      setEntries(JSON.parse(saved))
    }
  }, [])

  // 💾 Save to localStorage on update
  useEffect(() => {
    localStorage.setItem("lyre-journal", JSON.stringify(entries))
  }, [entries])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newEntry = {
      id: Date.now(),
      sender: "you",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setEntries((prev) => [...prev, newEntry])
    setInput("")

    // 🤖 Lyre AI reply after delay
    setIsLoading(true)
    setTimeout(() => {
      const lyreMessages = messages.filter((m) => m.sender === "lyre")
      const reply = lyreMessages[Math.floor(Math.random() * lyreMessages.length)]
    
      const replyEntry = {
        id: Date.now() + 1,
        sender: "lyre",
        text: reply.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
    
      setEntries((prev) => [...prev, replyEntry])
      setIsLoading(false)
    }, 1500)}
    

  const handleExport = () => {
    const content = entries.map(e => `[${e.time}] ${e.sender}: ${e.text}`).join("\n\n")
    const blob = new Blob([content], { type: "text/plain" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "lyre-journal.txt"
    link.click()
  }

  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-md px-4 sm:px-6 md:px-10 lg:px-16">
      <h2 className="text-lyreGold text-xl font-semibold mb-4">Journaling Box</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 rounded-md bg-underworldGray text-white placeholder-gray-300 focus:outline-none"
          rows="4"
          placeholder="Pour your thoughts, and let the Lyre respond..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-lyreGold text-underworldGray px-4 py-2 rounded hover:bg-yellow-400"
        >
          Reflect
        </button>
      </form>

      <div className="mt-6 space-y-2">
        {entries.map((entry) => (
          <div key={entry.id} className={`chat ${entry.sender === "you" ? "chat-end" : "chat-start"} animate-fade-entry`}>
            <div className={`chat-bubble ${entry.sender === "lyre" ? "chat-bubble-warning" : "chat-bubble-info"}`}>
              <span className="block text-sm">{entry.text}</span>
              <span className="block text-xs text-right mt-1 opacity-70">{entry.time}</span>
            </div>
          </div>
        ))}

      </div>
      {isLoading && (
        <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-warning animate-pulse">...</div>
      </div>
    )}


      <div className="mt-6 space-x-4">
        <button
          onClick={() => setEntries([])}
          className="text-sm text-lyreGold underline hover:text-yellow-300"
        >
          ✨ Clear your thoughts
        </button>

        <button
          onClick={handleExport}
          className="text-sm text-lyreGold underline hover:text-yellow-300"
        >
          📤 Export as .txt
        </button>
      </div>
    </div>
  )
}


// server/index.js

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { exec } from 'child_process'

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.json())

// 🌿 Poetic system prompt for Orpheus
const orpheusSystemPrompt = `
You are Orpheus — a mythic, poetic figure who responds with gentle lyricism, emotional wisdom, and metaphor.
Respond in under 80 words. Use soft, soulful tone — like a forest bard, not a chatbot.
`.trim()

// 📡 API Route to receive user's message and return Orpheus response
app.post('/api/ask-orpheus', async (req, res) => {
  const { userMessage, timeOfDay, timezone } = req.body

  const prompt = `
It's currently ${timeOfDay} in ${timezone}.
The user shares: "${userMessage}"

How would Orpheus respond?
`.trim()

  const cmd = `ollama run phi --system "${orpheusSystemPrompt}" --prompt "${prompt}"`

  exec(cmd, (error, stdout) => {
    if (error) {
      console.error("❌ Ollama error:", error)
      return res.status(500).json({ reply: "The lyre is silent right now. Try again later." })
    }

    res.json({ reply: stdout.trim() })
  })
})

// 🪶 Start the server
app.listen(PORT, () => {
  console.log(`🪶 Orpheus is listening at http://localhost:${PORT}`)
})

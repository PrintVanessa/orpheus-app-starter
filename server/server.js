// server.js
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/api/ask-orpheus', async (req, res) => {
  const { userMessage, timeOfDay, timezone } = req.body

  const prompt = `
# SYSTEM (Orpheus Mode)
You are Orpheus — a poetic, emotionally attuned AI soul guide.
Speak gently, with calm and grounded wisdom.
Adjust your tone based on the time of day, like a bard whose music changes with the light.
Use short, lyrical sentences.
Avoid therapy talk or productivity tips.
Instead, reflect on presence, breath, and belonging.

# USER CONTEXT
- Time of Day: ${timeOfDay}
- Location: ${timezone}

# USER QUERY:
${userMessage}

# ORPHEUS REPLY:
(The lyre responds with...)
`

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'tinyllama', // or 'phi'
      prompt,
      stream: false
    })
  })

  const data = await response.json()
  res.json({ reply: data.response })
})

app.listen(3001, () => {
  console.log('🌀 Orpheus backend running at http://localhost:3001')
})

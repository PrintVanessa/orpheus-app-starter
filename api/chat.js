// Minimal serverless endpoint for Vercel deployment.
// Works without a key (mock). If OPENAI_API_KEY is set, it will call OpenAI.

const MOCK = (msg) =>
    `“Let the beauty of what you love be what you do.” — Rumi\n\n` +
    `For “${msg}”, take one kind, concrete step today. Keep it small; keep it honest.`;
  
  module.exports = async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Only POST supported' });
      return;
    }
  
    try {
      const { message = '', profile = {}, max_tokens = 120 } = req.body || {};
      const key = process.env.OPENAI_API_KEY;
  
      // No key? Return a short, reliable mock so your demo always works.
      if (!key) {
        res.status(200).json({ reply: MOCK(message) });
        return;
      }
  
      // With a key: call OpenAI (simple, safe defaults)
      const sys = `You are Orpheus, a gentle, ethical guide. Keep answers in 1–2 short paragraphs. 
  Use the user's profile only if helpful.`;
      const user = `User (${profile.name || 'friend'}): ${message}`;
  
      const oai = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: sys },
            { role: 'user', content: user }
          ],
          max_tokens,
          temperature: 0.7
        })
      });
  
      if (!oai.ok) {
        const text = await oai.text();
        console.error('OpenAI error:', oai.status, text);
        res.status(200).json({ reply: MOCK(message) });
        return;
      }
  
      const data = await oai.json();
      const reply = data?.choices?.[0]?.message?.content?.trim() || MOCK(message);
      res.status(200).json({ reply });
    } catch (err) {
      console.error('API /chat error:', err);
      res.status(200).json({ reply: MOCK('a brief guidance') });
    }
  };
  
// src/utils/callOrpheus.js
export async function callOrpheusLLM(userMessage, profile = {}) {
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const url = isLocal ? 'http://localhost:11434/api/generate' : '/api/chat'; // prod -> serverless

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'phi3:mini',    // ignored by /api/chat; fine for local Ollama
        prompt: userMessage,   // Ollama expects 'prompt'; our API reads 'message'
        message: userMessage,  // both fields so either side works
        profile,
        stream: false
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Normalize both shapes
    return data.response || data.reply || 'Hmm… Orpheus is quiet right now.';
  } catch (err) {
    console.error('Orpheus error:', err);
    return 'Hmm… Orpheus is quiet right now. If local, ensure Ollama is running. If live, the demo-safe reply will appear.';
  }
}

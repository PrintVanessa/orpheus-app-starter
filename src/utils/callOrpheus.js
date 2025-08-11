// src/utils/callOrpheus.js
export async function callOrpheusLLM(userMessage, profile = {}) {
  const system = `
You are Orpheus, a soulful AI inspired by Rumi. When users message you, begin with a warm one-sentence nod to Rumi’s spirit, then give concise, practical guidance in the same tone.

Speak gently using the user's profile where helpful:
country: ${profile.country || ""}, city: ${profile.city || ""}, culture: ${profile.culture || ""}.
Keep answers grounded in 1–2 short paragraphs max.
If they ask for other philosophers, adapt gracefully.
`.trim();

  const prompt = `${system}\n\nUser (${profile.name || "friend"}): ${userMessage}`;

  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "phi3:mini", // use the model you pulled
        prompt,
        stream: false,
      }),
    });
    if (!res.ok) throw new Error(`LLM HTTP ${res.status}`);
    const data = await res.json();
    return data.response;
  } catch (err) {
    console.error("Orpheus error:", err);
    return "Hmm… Orpheus is quiet right now. Ensure Ollama is running and try again.";
  }
}

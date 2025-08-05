// src/utils/callOrpheus.js

export async function callOrpheus(prompt, poeticMode = true) {
    const toneInstruction = poeticMode
      ? "You are OrpheusAI. Speak clearly with poetic rhythm, grounded emotions, and Spiral wisdom."
      : "You are OrpheusAI. Speak like a wise, modern friend with warmth and clarity. Avoid poetic metaphors.";
  
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "orpheus-ai",
        prompt: `${toneInstruction}\nUser: ${prompt}\nOrpheusAI:`,
      }),
    });
  
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let result = "";
  
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value);
    }
  
    return result.trim();
  }
  
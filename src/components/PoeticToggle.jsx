// src/components/PoeticToggle.jsx
import React from 'react';
import { usePoeticMode } from '../context/PoeticModeContext';

export default function PoeticToggle() {
  const { poeticMode, setPoeticMode } = usePoeticMode();

  return (
    <button
      onClick={() => setPoeticMode(!poeticMode)}
      className="fixed top-4 right-4 z-50 bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full backdrop-blur hover:scale-105 transition shadow"
    >
      {poeticMode ? '🌀 Poetic' : '💬 Clear'}
    </button>
  );
}

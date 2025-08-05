// src/components/StartJourney.jsx
import React from 'react';

export default function StartJourney({ onStart }) {
  return (
    <div className="flex items-center justify-center min-h-screen text-center px-4">
      <div className="space-y-6 animate-fade-entry">
        <h1 className="text-4xl sm:text-5xl font-bold text-lyreGold animate-pulse drop-shadow-md">
          Orpheus — The Lyre Awakens
        </h1>
        <p className="text-echoPink text-lg italic tracking-wide max-w-md mx-auto">
          "Only silence dares to speak when the strings are still."
        </p>
        <button
          onClick={onStart}
          className="px-6 py-3 bg-lyreGold text-underworldGray rounded-full font-semibold hover:scale-105 transition transform shadow-lg"
        >
          Start Journey
        </button>
      </div>
    </div>
  );
}
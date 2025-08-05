import React from 'react';

export default function LyreGate() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center animate-fade-in">
      <h1 className="text-2xl font-semibold text-lyreGold animate-typewriter mb-4">
        You have entered the Lyre Gate.
      </h1>
      <p className="italic text-white/80 max-w-md">
        Here, silence meets courage. Every truth spoken here travels deep into the underworld — and returns with light.
      </p>
      <button
        onClick={() => window.location.href = '/echo'}
        className="mt-6 px-5 py-2 bg-lyreGold text-underworldGray font-semibold rounded shadow hover:scale-105 transition"
      >
        Go Deeper →
      </button>
    </div>
  );
}
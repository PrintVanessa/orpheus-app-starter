// src/components/OrpheusScene.jsx
import React, { useEffect, useState } from 'react';
import { useLyreEcho } from '../hooks/useLyreEcho';
import SpiralNav from './SpiralNav.jsx';

export default function OrpheusScene() {
  const presence = useLyreEcho();
  const [sky, setSky] = useState('');

  useEffect(() => {
    // Play audio on presence
    if (presence === 'expanding') {
      const audio = new Audio('/lyre-awakened.mp3');
      audio.volume = 0.6;
      audio.play().catch((err) => {
        console.warn('Audio playback blocked:', err);
      });
    }

    // Choose sky background
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      setSky('/orpheus background (morning).jpeg');
    } else if (hour >= 11 && hour < 17) {
      setSky('/Orpheus background (midday).jpeg');
    } else if (hour >= 17 && hour < 20) {
      setSky('/orpheus background (evening).jpeg');
    } else {
      setSky('/orpheus app background (nighttime).jpeg');
    }
  }, [presence]);

  return (
    <div
      className="mb-10 text-center animate-fade-in bg-cover bg-center min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: `url(${sky})` }}
    >
      <img
        src="/orpheus.png"
        alt="Orpheus"
        className="w-40 h-40 mx-auto mb-4 rounded-full shadow-lg animate-fade-entry"
      />

      {presence === 'rooted' && (
        <p className="text-gray-300 italic transition-opacity duration-1000 opacity-100">
          The air is still... waiting.
        </p>
      )}

      {presence === 'expanding' && (
        <>
          <p className="text-echoPink font-semibold text-xl animate-typewriter border-echoPink mb-4">
            The Lyre has awakened — your words will echo beyond silence.
          </p>
          <button
            onClick={() => window.location.href = "/gate"}
            className="mt-4 px-6 py-2 bg-lyreGold text-underworldGray font-semibold rounded shadow hover:scale-105 transition"
          >
            Speak Your Truth →
          </button>
        </>
      )}

      <SpiralNav />
    </div>
  );
}

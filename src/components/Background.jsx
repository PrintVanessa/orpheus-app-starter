import React from 'react';
import ParticlesBg from './ParticlesBg';
import FloatingOrbs from './FloatingOrbs';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-20">
      <ParticlesBg />
      <FloatingOrbs />
      <div className="absolute inset-0 pointer-events-none border-4 border-lyreGold/10 rounded-xl animate-pulse shadow-inner" />
      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-30 transition-opacity duration-1000 pointer-events-none" />
    </div>
  );
}
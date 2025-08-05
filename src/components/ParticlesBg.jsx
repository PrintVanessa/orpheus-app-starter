import Particles from 'react-tsparticles';
import React from 'react';

export default function ParticlesBg() {
  return (
    <>
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          background: { color: 'transparent' },
          particles: {
            number: { value: 30 },
            size: { value: 2 },
            move: { speed: 1 },
            color: { value: '#F1C16E' },
            opacity: { value: 0.5 },
          },
        }}
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-underworldGray to-black overflow-hidden">
        <div className="absolute w-40 h-40 bg-echoPink opacity-20 rounded-full blur-2xl top-10 left-20 animate-pulse" />
        <div className="absolute w-32 h-32 bg-lyreGold opacity-10 rounded-full blur-xl bottom-16 right-16 animate-bounce" />
      </div>
    </>
  );
}

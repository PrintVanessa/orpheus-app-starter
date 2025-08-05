import React from 'react';

export default function FloatingOrbs() {
  const orbCount = 5;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(orbCount)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-30 animate-pulse blur-3xl mix-blend-screen"
          style={{
            width: `${200 + Math.random() * 100}px`,
            height: `${200 + Math.random() * 100}px`,
            background: `radial-gradient(circle, rgba(255,255,255,0.2), transparent)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
      <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-echoPink rounded-full animate-bounce opacity-70 blur-sm" />
    </div>
  );
}
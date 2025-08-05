// src/pages/SplashPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboard');
    }, 6000); // 6-second splash screen
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-lyreGold">
      {/* Frame 1: Lyre logo and tagline */}
      <motion.img
        src="/assets/lyre-logo-gold.svg"
        alt="Lyre Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="w-28 h-28 mb-4"
      />

      <motion.h1
        className="text-2xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        ORPHEUS
      </motion.h1>

      <motion.p
        className="text-sm text-white/80 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        The Lyre Awakens
      </motion.p>

      {/* Frame 3: Spiral animation */}
      <motion.img
        src="/assets/spiral-loader-white.svg"
        alt="Spiral Loader"
        className="w-20 h-20 mt-10 animate-spin-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      />
    </div>
  );
}

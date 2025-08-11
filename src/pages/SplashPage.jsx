import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboard"), 1800); // quick splash
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#191C1B] text-white flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        <motion.img
          src="/assets/lyre-logo-gold.png"
          alt="Lyre Logo"
          className="w-40 md:w-56 h-auto object-contain mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-3xl md:text-4xl font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ORPHEUS
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-white/80 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          The Lyre Awakens
        </motion.p>

        <motion.img
          src="/assets/spiral-loader.png"
          alt="Loading"
          className="w-10 md:w-12 h-auto mt-6 animate-spin-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
      </div>
    </div>
  );
}

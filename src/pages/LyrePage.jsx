// src/pages/LyrePage.jsx
import React from 'react';
import OrpheusScene from '../components/OrpheusScene';
import ChatBox from '../components/ChatBox';
import LyreGate from '../components/LyreGate';

export default function LyrePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <OrpheusScene />
      <LyreGate />
      <ChatBox />
    </div>
  );
}

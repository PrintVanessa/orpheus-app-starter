// src/components/OrpheusScene.jsx
import React from 'react';

export default function OrpheusScene() {
  const name = localStorage.getItem('orpheus_name');
  const ageGroup = localStorage.getItem('orpheus_ageGroup');
  const country = localStorage.getItem('orpheus_country');
  const city = localStorage.getItem('orpheus_city');
  const race = localStorage.getItem('orpheus_race');

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold text-lyreGold mb-4">Greetings, {name}.</h1>
      <p className="mb-2">You come from <strong>{city}</strong>, <strong>{country}</strong>.</p>
      <p className="mb-2">Age group: {ageGroup}</p>
      <p className="mb-2">Cultural identity: {race || "unspecified"}</p>

      <div className="mt-6 p-4 bg-[#1a1a1a] border border-lyreGold rounded">
        <p>🧙 “Your philosopher has spoken…”</p>
        <p className="italic mt-2">“He who learns but does not think is lost.  
        He who thinks but does not learn is in danger.” — Confucius</p>
        <p className="mt-2">→ What in your life are you being asked to reflect on, {name}?</p>
      </div>
    </div>
  );
}

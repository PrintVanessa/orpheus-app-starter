// src/context/PoeticModeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const PoeticModeContext = createContext();

export function PoeticModeProvider({ children }) {
  const [poeticMode, setPoeticMode] = useState(() => {
    const saved = localStorage.getItem('poeticMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('poeticMode', JSON.stringify(poeticMode));
  }, [poeticMode]);

  return (
    <PoeticModeContext.Provider value={{ poeticMode, setPoeticMode }}>
      {children}
    </PoeticModeContext.Provider>
  );
}

export const usePoeticMode = () => useContext(PoeticModeContext);

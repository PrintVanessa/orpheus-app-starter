// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Create simple wrapper to style echo page
function ChatEchoPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-lyreGold mb-6">Echo Chamber</h2>
      <ChatBox />
    </div>
  );
}

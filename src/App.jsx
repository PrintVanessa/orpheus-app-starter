// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Onboard from "./pages/OnboardPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/onboard" replace />} />
      <Route path="/onboard" element={<Onboard />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

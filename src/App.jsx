// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import OrpheusScene from './components/OrpheusScene';
import LyreGate from './components/LyreGate';
import ChatBox from './components/ChatBox';
import SplashPage from './pages/SplashPage';
import OnboardPage from './pages/OnboardPage'; // You’ll scaffold this next

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboard" element={<OnboardPage />} />
      <Route path="/lyre" element={<OrpheusScene />} />
      <Route path="/gate" element={<LyreGate />} />
      <Route path="/echo" element={<ChatBox />} />
      {/* Fallback: redirect unknown routes to splash */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


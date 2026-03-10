import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import TrendAnalysis from './pages/TrendAnalysis';
import FuturePrediction from './pages/FuturePrediction';
import ClimateClothing from './pages/ClimateClothing';
import AIAssistant from './pages/AIAssistant';
import TrendReports from './pages/TrendReports';
import FashionGallery from './pages/FashionGallery';
import StyleScanner from './pages/StyleScanner';
import SavedTrends from './pages/SavedTrends';
import AboutContact from './pages/AboutContact';
import Settings from './pages/Settings';
import Privacy from './pages/Privacy';
import PredictionHistory from './pages/PredictionHistory';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<TrendAnalysis />} />
          <Route path="/prediction" element={<FuturePrediction />} />
          <Route path="/climate" element={<ClimateClothing />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/reports" element={<TrendReports />} />
          <Route path="/gallery" element={<FashionGallery />} />
          <Route path="/scanner" element={<StyleScanner />} />
          <Route path="/history" element={<PredictionHistory />} />
          <Route path="/saved" element={<SavedTrends />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/contact" element={<AboutContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// src/App.js
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import LiveDataSection from './components/LiveDataSection';
import Marketplace from './components/MarketPlace';
import ContactForm from './components/ContactForm';
import WalletInput from './components/WalletInput';
import ScoreCard from './components/ScoreCard';
import ImpactDashboard from './components/ImpactDashboard';
import ForecastBanner from './components/ForecastBanner';
import MicrogridMap from './components/MicrogridMap';
import 'leaflet/dist/leaflet.css';


function App() {
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <HeroSection />
      <FeaturesSection />

      {/* Wallet Input + Token Stats */}
      <section id="wallet" className="px-6 py-20 max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-2">Connect Your Wallet</h2>
          <p className="text-gray-300">Start tracking your clean energy contributions.</p>
        </div>
        <WalletInput onAddressSubmit={setWalletAddress} />
        {walletAddress && <ScoreCard wallet={walletAddress} />}
        {walletAddress && <ForecastBanner wallet={walletAddress} />}
      </section>

      {walletAddress && <ImpactDashboard wallet={walletAddress} />}
      {walletAddress && <MicrogridMap />}

      <LiveDataSection />
      <Marketplace />
      <ContactForm />
    </div>
  );
}

export default App;

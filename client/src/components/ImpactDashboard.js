// src/components/ImpactDashboard.js
import React, { useEffect, useState } from 'react';

const ImpactDashboard = ({ wallet }) => {
  const [impact, setImpact] = useState(null);

  useEffect(() => {
    if (!wallet) return;

    fetch(`http://localhost:5000/impact/${wallet}`)
      .then(res => res.json())
      .then(data => setImpact(data))
      .catch(err => console.error("Impact dashboard error:", err));
  }, [wallet]);

  if (!impact) return null;

  return (
    <section id="impact-dashboard" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-400 mb-8 text-center animate-fade-in">Your Community Impact</h2>
      <div className="grid md:grid-cols-3 gap-8">

        {/* Generator Card */}
        <div className="bg-gradient-to-br from-green-700 via-gray-900 to-black p-6 rounded-xl shadow-xl hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 animate-fade-in">
          <h3 className="text-xl font-semibold text-white mb-4">You</h3>
          <p className="text-green-300 mb-2">Generated: {impact.generated} kWh</p>
          <p className="text-yellow-300 mb-2">Shared with Company A: {impact.shared} kWh</p>
          <p className="text-blue-400 mb-2">Minted: {impact.tokens} GT</p>
          <p className="text-white">Carbon Offset: {impact.offset} kg CO₂</p>
          <p className="text-white">Credits Earned: {impact.credits} Credits</p>
        </div>

        {/* Company A */}
        <div className="bg-gradient-to-br from-purple-600 via-gray-900 to-black p-6 rounded-xl shadow-xl hover:shadow-purple-400/30 transition-all duration-300 transform hover:scale-105 animate-fade-in">
          <h3 className="text-xl font-semibold text-white mb-4">Company A (Receiver)</h3>
          <p className="text-blue-300 mb-2">Received Energy: {impact.companyA?.energy ?? '...'} kWh</p>
          <p className="text-white">Emissions Reduced: {impact.companyA?.offset ?? '...'} kg CO₂</p>
        </div>

        {/* Company B */}
        <div className="bg-gradient-to-br from-pink-600 via-gray-900 to-black p-6 rounded-xl shadow-xl hover:shadow-pink-400/30 transition-all duration-300 transform hover:scale-105 animate-fade-in">
          <h3 className="text-xl font-semibold text-white mb-4">Company B (Buyer)</h3>
          <p className="text-purple-300 mb-2">Tokens Paid: {impact.companyB?.tokens ?? '...'} GT</p>
          <p className="text-white mb-2">Redistributed to Company A</p>
          <p className="text-white">Net Emissions Benefit: {impact.companyB?.offset ?? '...'} kg CO₂</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;

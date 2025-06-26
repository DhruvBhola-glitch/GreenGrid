// src/components/MicrogridMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const positions = {
  user: [17.444801, 78.348916],        // Microsoft Hyderabad
  companyA: [17.4445, 78.3865],    // TCS
  companyB: [17.4350, 78.3860]     // Infosys
};

const MicrogridMap = ({ wallet }) => {
  const [impact, setImpact] = useState(null);

  useEffect(() => {
    if (!wallet) return;
    axios.get(`http://localhost:5000/impact/${wallet}`)
      .then(res => setImpact(res.data))
      .catch(err => console.error("Map impact fetch error:", err));
  }, [wallet]);

  return (
    <section id="microgrid-map" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">🔗 Microgrid Energy Map</h2>
      <p className="text-gray-300 text-center mb-6">Visualizing energy flow between your wallet and partner companies</p>
      <div className="h-96 rounded-xl overflow-hidden shadow-lg animate-fade-in">
        <MapContainer center={positions.user} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <Circle center={positions.user} radius={200} pathOptions={{ color: 'green' }}>
            <Tooltip direction="top" sticky>
              🧑 Microsoft (You)<br />Shared: {impact?.shared ?? '...'} kWh
            </Tooltip>
          </Circle>

          <Circle center={positions.companyA} radius={200} pathOptions={{ color: 'cyan' }}>
            <Tooltip direction="top" sticky>
              🏢 TCS (Receiver)<br />Received: {impact?.companyA?.energy ?? '...'} kWh
            </Tooltip>
          </Circle>

          <Circle center={positions.companyB} radius={200} pathOptions={{ color: 'purple' }}>
            <Tooltip direction="top" sticky>
              💰 Infosys (Buyer)<br />Paid: {impact?.companyB?.tokens ?? '...'} GT
            </Tooltip>
          </Circle>

          <Polyline positions={[positions.user, positions.companyB]} pathOptions={{ color: 'orange', dashArray: '6' }} />
          <Polyline positions={[positions.companyB, positions.companyA]} pathOptions={{ color: 'orange', dashArray: '6' }} />
        </MapContainer>
      </div>
    </section>
  );
};

export default MicrogridMap;

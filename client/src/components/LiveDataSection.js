import React from 'react';
import EnergyChart from './EnergyChart';
import SimulationLog from './SimulationLog';

const LiveDataSection = () => {
  return (
    <section id="live-data" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-400 mb-2">Live Data and Energy Tracking</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Real-time visualization of your token minting, energy contributions, and carbon offset stats.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <EnergyChart />
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <SimulationLog />
        </div>
      </div>
    </section>
  );
};

export default LiveDataSection;
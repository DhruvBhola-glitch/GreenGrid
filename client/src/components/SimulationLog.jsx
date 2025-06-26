// src/components/SimulationLog.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SimulationLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/logs");
        setLogs(res.data.logs || []);
      } catch (err) {
        console.error("Error fetching logs:", err);
      }
    };

    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-cyan-800 via-gray-900 to-black p-6 rounded-2xl shadow-xl animate-fade-in max-h-64 overflow-y-auto">
      <h2 className="text-2xl font-bold text-white mb-4">🟢 Simulation Log</h2>
      <ul className="space-y-2 text-sm text-green-300 font-mono">
        {logs.map((log, i) => (
          <li key={i} className="border-b border-white/10 pb-1">
            ⚡ Minted {log.kwh} kWh → {log.address.slice(0, 6)}…{log.address.slice(-4)} at {new Date(log.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimulationLog;

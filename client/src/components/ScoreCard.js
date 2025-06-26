// src/components/ScoreCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScoreCard = ({ wallet }) => {
  const [tokens, setTokens] = useState(null);
  const [carbon, setCarbon] = useState(null);

  useEffect(() => {
    if (!wallet) return;

    const fetchScore = async () => {
      try {
        const scoreRes = await axios.get(`http://localhost:5000/score/${wallet}`);
        const carbonRes = await axios.get(`http://localhost:5000/carbon/${wallet}`);
        setTokens(scoreRes.data.green_score || 0);
        setCarbon(carbonRes.data.carbon_offset_kg || 0);
      } catch (err) {
        console.error("Error fetching score:", err);
      }
    };

    fetchScore();
  }, [wallet]);

  if (!wallet) return null;

  return (
    <div className="bg-gradient-to-br from-green-700 via-gray-900 to-black rounded-2xl shadow-xl p-6 w-full flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in transition-all duration-300">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold text-white">Total GreenTokens</h2>
        <p className="text-3xl font-bold text-green-400 mt-2">{tokens ?? '...'}</p>
        <p className="text-sm text-gray-300">Energy shared (kWh)</p>
      </div>

      <div className="border-l border-white/20 h-16 hidden md:block" />

      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold text-white">CO₂ Offset</h2>
        <p className="text-3xl font-bold text-cyan-400 mt-2">{carbon ?? '...'} kg</p>
        <p className="text-sm text-gray-300">Reduced carbon footprint</p>
      </div>
    </div>
  );
};

export default ScoreCard;

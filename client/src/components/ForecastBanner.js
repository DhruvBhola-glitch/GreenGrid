// src/components/ForecastBanner.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ForecastBanner = ({ wallet }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!wallet) return;
    axios.get(`http://localhost:5000/forecast/${wallet}`)
      .then(res => setForecast(res.data))
      .catch(err => console.error("Forecast error:", err));
  }, [wallet]);

  if (!forecast) return null;

  return (
    <div className="bg-gradient-to-r from-blue-900 via-cyan-700 to-green-600 text-white rounded-xl p-4 mt-6 shadow-lg animate-fade-in">
      <h3 className="text-lg font-semibold mb-1">🔮 Forecast Insight</h3>
      <p className="text-sm">Tomorrow, you are predicted to generate <span className="text-green-300 font-bold">{forecast.predicted_kwh} kWh</span>.</p>
      <p className="text-sm italic text-cyan-200 mt-1">{forecast.recommendation}</p>
    </div>
  );
};

export default ForecastBanner;

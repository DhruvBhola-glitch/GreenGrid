// src/components/EnergyChart.js
import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Dummy kWh simulation over time
const timestamps = Array.from({ length: 10 }, (_, i) => `T-${10 - i}`);
const kwhValues = Array.from({ length: 10 }, () => (Math.random() * 5 + 1).toFixed(2));

const data = {
  labels: timestamps,
  datasets: [
    {
      label: 'kWh Minted',
      data: kwhValues,
      borderColor: '#22c55e',
      backgroundColor: 'rgba(34, 197, 94, 0.3)',
      fill: true,
      tension: 0.4,
      pointBorderColor: '#86efac',
      pointBackgroundColor: '#166534',
      pointRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { labels: { color: 'white' } },
  },
  scales: {
    x: { ticks: { color: 'white' }, grid: { color: '#334155' } },
    y: { ticks: { color: 'white' }, grid: { color: '#334155' } },
  },
};

const EnergyChart = () => {
  return (
    <div className="bg-gradient-to-br from-green-800 via-gray-900 to-black p-6 rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-4">📈 Energy Contribution</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergyChart;

// src/components/FeaturesSection.js
import React from 'react';
import { FaWallet, FaCoins, FaStoreAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaWallet className="text-green-400 w-10 h-10" />,
    title: "Wallet Input",
    description: "Connect your wallet to track energy stats and activity.",
    target: "#wallet"
  },
  {
    icon: <FaCoins className="text-yellow-400 w-10 h-10" />,
    title: "Token Stats",
    description: "See your GreenToken balance and carbon offset impact.",
    target: "#wallet"
  },
  {
    icon: <FaStoreAlt className="text-purple-400 w-10 h-10" />,
    title: "Marketplace",
    description: "Redeem tokens for eco-products like solar lights or credits.",
    target: "#marketplace"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="px-6 py-20 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-6">Your Green Dashboard</h2>
      <p className="text-gray-300 mb-12 max-w-xl mx-auto">
        Everything you need to track and redeem your clean energy contributions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <a
            href={feature.target}
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-green-500 focus:outline-none"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

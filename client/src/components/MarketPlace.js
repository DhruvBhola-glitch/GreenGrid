// src/components/Marketplace.js
import React, { useEffect, useState } from 'react';

const Marketplace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/marketplace")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <section id="marketplace" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-400 mb-2">Redeem with Purpose</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Use your GreenTokens to support eco-causes and claim rewards.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">
              {item.item.includes("Bottle") ? "🍼" : item.item.includes("Solar") ? "🔆" : "🧾"}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.item === 'Carbon Offset Badge' ? 'Carbon Credits' : item.item}
            </h3>
            <p className="text-gray-400 mb-4">{item.description || "Eco-friendly item"}</p>
            <div className="text-green-300 font-bold">{item.cost} GT</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;

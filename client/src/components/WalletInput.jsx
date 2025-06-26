// src/components/WalletInput.js
import React, { useState } from 'react';

const WalletInput = ({ onAddressSubmit }) => {
  const [wallet, setWallet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wallet.trim() === '') return;
    onAddressSubmit(wallet.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center animate-fade-in">
      <input
        type="text"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        placeholder="Enter wallet address"
        className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 w-full focus:ring-2 focus:ring-green-400 focus:outline-none transition"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md hover:shadow-green-400 transition-all duration-200"
      >
        Fetch
      </button>
    </form>
  );
};

export default WalletInput;

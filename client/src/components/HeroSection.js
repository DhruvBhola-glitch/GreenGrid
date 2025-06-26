import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-green-800 via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          🌱 Powering a Greener Future
        </h1>
        <p className="text-xl text-gray-100 mb-6 drop-shadow-sm">
          Turn surplus solar energy into tokenized impact with your community.
        </p>
        <a href="#features" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

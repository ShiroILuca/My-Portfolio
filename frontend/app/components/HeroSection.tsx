//トップのヒーローセクション

"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#e8d0d0] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-light italic text-gray-700 mb-6">
        Manami Iida
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
        With six months of experience learning full-stack development, I am
        actively seeking opportunities as an engineer.
      </p>
    </section>
  );
};

export default HeroSection;

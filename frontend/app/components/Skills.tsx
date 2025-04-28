// スキルセクション

"use client";
import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen p-8 md:p-16 bg-[#e8d0d0]">
      <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h3 className="text-2xl font-light text-gray-700 mb-6">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              HTML / CSS
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              React
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Next.js
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-light text-gray-700 mb-6">Backend</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Express.js
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              FastAPI
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Python
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              MySQL
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              PostgreSQL
            </span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-light text-gray-700 mb-6">
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              GitHub
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              CI/CD
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              VS Code
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Figma
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Firebase
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              Redis
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              StripeAPI
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
              AWS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

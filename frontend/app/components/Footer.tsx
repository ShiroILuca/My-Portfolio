// フッター

"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <p className="text-lg">
        © {new Date().getFullYear()} Manami Iida. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/ShiroILuca"
          className="text-white hover:text-gray-300 transition duration-200"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;

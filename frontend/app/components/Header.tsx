//ヘッダーとナビゲーション

import React from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <>
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-[#e8d0d0] bg-opacity-90">
        <div className="text-gray-700 text-2xl italic">Manami Iida</div>
        <button onClick={toggleMenu} className="text-gray-700 z-50">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* サイドメニュー */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#e8d0d0] p-6 pt-20 transform transition-transform duration-300 ease-in-out z-40 shadow-lg ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-8 text-lg uppercase">
          <a
            href="#"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#career"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Career
          </a>
          <a
            href="#strengths"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Strengths
          </a>
          <a
            href="#personal"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Personal
          </a>
          <a
            href="#vision"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Vision
          </a>

          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Contact
          </a>
        </div>
      </div>

      {/* オーバーレイ（メニューオープン時） */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;

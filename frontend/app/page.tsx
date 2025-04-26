"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen font-light">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}

      {/* メインコンテンツ */}
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-[#e8d0d0] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light italic text-gray-700 mb-6">
            Manami Iida
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            With six months of experience learning full-stack development, I am
            actively seeking opportunities as an engineer.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center">
            <div className="h-full w-full bg-gray-800">
              {/* プロフィール画像を表示する部分 */}
              <div className="w-full h-full flex items-center justify-center text-white text-xl">
                <Image
                  src="/api/placeholder/600/800"
                  alt="Profile"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#e8d0d0] p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-light italic text-gray-700 mb-8">
              About
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              プログラミングと医療現場での経験を融合させ、ユーザー視点を大切にした開発に取り組むエンジニアです。Ms.
              Engineerプログラミングスクールを2025年2月に卒業し、複数のチーム開発を通じてフロントエンド・バックエンド両方のスキルを習得しました。調剤薬局での約6年の勤務経験から培った患者様対応力とタスク管理能力を活かし、技術だけでなく実際のユーザーに寄り添った開発を目指しています
            </p>
            <p className="text-lg text-gray-700">
              特にNext.jsとTypeScriptに焦点を当て、モダンなウェブ開発技術の基礎を身につけてきました。
              デザイン性と使いやすさを両立させたウェブサイト制作に情熱を持っています。
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-8 md:p-16 bg-white">
          <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-[#e8d0d0] overflow-hidden rounded-lg shadow-lg">
              <div className="h-64 bg-gray-300">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Todo App"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-gray-700 mb-2">
                  Todo App
                </h3>
                <p className="text-gray-600 mb-4">
                  React HooksとTypeScriptを使用したシンプルなTodoアプリ。
                  タスクの追加、編集、削除機能を実装しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#e8d0d0] overflow-hidden rounded-lg shadow-lg">
              <div className="h-64 bg-gray-300">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Weather App"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-gray-700 mb-2">
                  Weather App
                </h3>
                <p className="text-gray-600 mb-4">
                  Next.jsで実装した天気予報アプリ。
                  外部APIを使用して現在の天気と予報を表示します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen p-8 md:p-16 bg-[#e8d0d0]">
          <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
            Skills
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h3 className="text-2xl font-light text-gray-700 mb-6">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  HTML
                </span>
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  CSS
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
              <h3 className="text-2xl font-light text-gray-700 mb-6">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  Git
                </span>
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  GitHub
                </span>
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  VS Code
                </span>
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  Figma
                </span>
                <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-lg shadow-sm">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen p-8 md:p-16 bg-white flex items-center justify-center"
        >
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl font-light italic text-gray-700 mb-10 text-center">
              Contact
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8 text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

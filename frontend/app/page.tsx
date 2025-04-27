"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen font-light">
      <Head>
        <title>Manami Iida - Portfolio</title>
        <meta name="description" content="Manami Iida's portfolio website" />
      </Head>

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
                  src="/IMG_3597.png"
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
              はじめまして、飯田麻奈美と申します。
              2025年2月にMs.Engineerプログラミングスクールを卒業したばかりのバックエンドエンジニア志望です。
              スクールでの半年間で、フロントエンド、バックエンド、インフラと幅広く学習し、複数のチーム開発プロジェクトに参加してきました。特にPythonやNode.jsを使用したサーバーサイド開発に興味を持ち、バックエンドエンジニアとしてのキャリアを目指しています。
            </p>
            <p className="text-lg text-gray-700">
              チーム開発では、コミュニケーションを大切にしながら、効率的な開発フローの構築にも取り組みました。技術だけでなく、ユーザーにとって価値のあるサービスを作ることを常に意識しています。
              現在は新たな環境でエンジニアとしての一歩を踏み出すべく、転職活動中です。学習意欲が高く、常に新しい技術にチャレンジする姿勢を大切にしています。
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
                  src="/スクリーンショット 2025-04-27 4.11.37.png"
                  alt="WorkShere"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-gray-700 mb-2">
                  WorkShere
                </h3>
                <p className="text-gray-600 mb-4">
                  育休から復職する社員をサポートするためのAIチャットプラットフォーム。キャリアサマリーレポート、復職プランの自動生成、企業向け面談ガイダンスなどの機能を提供します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    FastAPI
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    MySQL
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Firebase
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Redis
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    StripeAPI
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    AWS
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Docker
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    GitHub
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    CI/CD
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#e8d0d0] overflow-hidden rounded-lg shadow-lg">
              <div className="h-64 bg-gray-300">
                <Image
                  src="/IMG_8880.PNG"
                  alt="LINE食材レシピ提案アプリ"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-gray-700 mb-2">
                  LINE食材レシピ提案アプリ
                </h3>
                <p className="text-gray-600 mb-4">
                  LINEを使用して入力した食材のレシピを提案してくれる自動生成アプリです。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    FastAPI
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    LINE Bot
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    PostgeSQL
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    GitHub
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                    CI/CD
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
              <h3 className="text-2xl font-light text-gray-700 mb-6">
                Backend
              </h3>
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

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen p-8 md:p-16 bg-white flex items-center justify-center"
        >
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl font-light italic text-gray-700 mb-10 text-center">
              Contact
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                現在メンテナンス中
              </h3>
              <p className="text-gray-600 mb-4">
                お問い合わせフォームは現在実装中です。ご不便をおかけして申し訳ありません。
              </p>
              <p className="text-gray-600">
                フォームが利用できない間は、こちらにご連絡ください：{" "}
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-800 font-medium hover:underline"
                >
                  manami.iid@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8 text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Manami Iida. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/ShiroILuca"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

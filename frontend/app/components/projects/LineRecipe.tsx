//Line-lecipe詳細コンポーネント

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LineRecipe = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー部分 */}
      <div className="relative h-96 md:h-[500px] bg-gray-200">
        <Image
          src="/IMG_8880.PNG"
          alt="LINE食材レシピ提案アプリ"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white z-10">
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              戻る
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            LINE食材レシピ提案アプリ
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            LINEを使用して入力した食材のレシピを提案してくれる自動生成アプリ
          </p>
        </div>
      </div>

      {/* コンテンツ部分 */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* プロジェクト概要 */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-6 inline-block border-b-2 border-[#e8d0d0] pb-2">
            プロジェクト概要
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              LINEを使用して入力した食材のレシピを提案してくれる自動生成アプリです。ユーザーが冷蔵庫にある食材をLINEで送信すると、AIがそれらの食材を活用したレシピを提案します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  開発期間
                </h3>
                <p className="text-gray-600">2週間</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  チーム構成
                </h3>
                <p className="text-gray-600">3人チーム開発</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  リポジトリ
                </h3>
                <a
                  href="https://github.com/ms-engineer-bc24-09/teamA-section8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                LINE Bot
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                GitHub
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                CI/CD
              </span>
            </div>
          </div>
        </div>

        {/* 担当業務 */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-6 inline-block border-b-2 border-[#e8d0d0] pb-2">
            担当業務
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#e8d0d0]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                バックエンド
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>FastAPIの環境構築</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>OpenAIの接続設定</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>楽天レシピAPIの接続設定</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#e8d0d0]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                LINE連携
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>LINEデベロッパーでチャネル作成</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>ngrok設定</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>webhook接続</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 工夫点・成果 */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-6 inline-block border-b-2 border-[#e8d0d0] pb-2">
            工夫点・成果
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                チームの学習効率を高める設計選択
              </h3>
              <p className="text-gray-700">
                フロントエンドにLINE
                Botを使用することで開発コストを削減し、チーム全員がPython学習に時間を多く費やせるようにしました。これにより、バックエンドの開発に集中でき、短期間でプロジェクトを完成させることができました。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                複数のAPIの連携
              </h3>
              <p className="text-gray-700">
                OpenAIのAPIを使って食材からレシピのアイデアを生成し、さらに楽天レシピAPIを使用して実際の料理レシピを取得するという連携を実現しました。これにより、AIの創造性と実際のレシピデータベースを組み合わせた、より実用的なサービスを提供することができました。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                動作確認の徹底
              </h3>
              <p className="text-gray-700">
                LINEで何かしらの文字を入力するとAPIからレシピが返信されるところまで、チーム全員のLINEアカウントで確認しました。ユーザー体験を最優先に考え、実際のユースケースを想定したテストを行うことで、品質の高いサービスを実現しました。
              </p>
            </div>
          </div>
        </div>

        {/* チーム開発エピソード */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-6 inline-block border-b-2 border-[#e8d0d0] pb-2">
            チーム開発でのエピソード
          </h2>
          <div className="bg-[#f8f0f0] p-8 rounded-lg shadow-md border-l-4 border-[#e8d0d0]">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              新しい技術への挑戦と協力体制
            </h3>
            <div className="text-gray-700 space-y-4">
              <p>
                このプロジェクトでは、チーム全員がPythonとFastAPIの学習を始めたばかりという状況でした。特にLINE
                BotとAPIの連携部分では、多くの技術的な壁にぶつかりましたが、毎日のミーティングで問題を共有し、それぞれが調べた情報を持ち寄ることで解決していきました。
              </p>
              <p>
                私はAPIの接続部分を担当していましたが、ngrokの設定でエラーが発生した際、チームメンバーが自分の過去のプロジェクトの経験から解決策を提案してくれました。また、私自身もOpenAI
                APIの接続で得た知識をチームに共有し、他のメンバーの実装をサポートしました。短期間のプロジェクトでしたが、チーム全員が「教え合い、学び合う」姿勢を大切にしたことで、効率的に開発を進めることができました。
              </p>
            </div>
          </div>
        </div>

        {/* フッター部分 - プロジェクトへのリンク */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/projects/workshere"
            className="inline-flex items-center px-4 py-2 bg-[#e8d0d0] text-gray-700 rounded-lg hover:bg-[#e0c0c0] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            前のプロジェクト
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            プロジェクト一覧に戻る
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LineRecipe;

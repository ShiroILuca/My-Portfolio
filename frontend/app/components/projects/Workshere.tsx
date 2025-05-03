//Workshere詳細コンポーネント

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Workshere = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー部分 */}
      <div className="relative h-96 md:h-[500px] bg-gray-200">
        <Image
          src="/スクリーンショット 2025-04-27 4.11.37.png"
          alt="WorkShere プロジェクト"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-2">WorkShere</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            育休から復職する社員をサポートするためのAIチャットプラットフォーム
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
              育休から復職する社員をサポートするためのAIチャットプラットフォームです。キャリアサマリーレポート、復職プランの自動生成、企業向け面談ガイダンスなどの機能を提供します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  開発期間
                </h3>
                <p className="text-gray-600">2ヶ月間</p>
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
                  href="https://github.com/ms-engineer-bc24-09/teamA-section9"
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
                Next.js
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                MySQL
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                Redis
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                StripeAPI
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-[#e8d0d0] text-gray-700 rounded-full text-sm">
                Docker
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                フロントエンド
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
                  <span>UIデザインおよびコンポーネント実装</span>
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
                  <span>企業向けダッシュボード画面の設計・実装</span>
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
                  <span>Firebaseを使用した認証画面の設計・機能の実装</span>
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                CI/CD設計と導入
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
                  <span>GitHub Actionsを用いたCI/CD環境の構築</span>
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
                  <span>
                    ESlint、自動テストを含む包括的なワークフローの実装
                  </span>
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
                  <span>GitHub Flowに基づくブランチ戦略の導入</span>
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
                レスポンシブデザインの実装
              </h3>
              <p className="text-gray-700">
                Tailwind
                CSSを活用して、スマートフォン、タブレット、デスクトップなど、様々なデバイスで最適な表示となるUIを実現しました。特に、育休中のユーザーがモバイルデバイスからアクセスすることを想定し、モバイルファーストの設計にこだわりました。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                GitHub Flowの導入
              </h3>
              <p className="text-gray-700">
                チーム開発の効率化のため、GitHub
                Flowに基づくブランチ戦略を導入しました。各機能ごとにブランチを作成し、Pull
                Requestを通じてコードレビューを行うことで、コード品質の向上とチーム内での知識共有を促進しました。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                継続的インテグレーション
              </h3>
              <p className="text-gray-700">
                GitHub Actionsを用いて、コミットごとにESlintによる静的解析とUnit
                Testを自動実行するCI/CD環境を構築しました。これにより、バグの早期発見とコードの品質維持が可能となり、チーム全体の開発効率が向上しました。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                ユーザー中心の機能設計
              </h3>
              <p className="text-gray-700">
                チーム内で育休復職者が直面する課題について議論し、実際のニーズに基づいた機能の優先順位付けと仕様決定を行いました。特に、育休中の情報格差を埋めるためのキャリアサマリー機能や、復職後のキャリアプラン提案機能は、ユーザーの声に基づいて設計しました。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                テスト駆動開発の実践
              </h3>
              <p className="text-gray-700">
                Jestを使用したフロントエンドのユニットテスト実装により、コンポーネントの品質と安定性を確保しました。特に認証機能やフォーム処理などの重要な部分には、優先的にテストケースを作成し、信頼性の高い実装を目指しました。
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
              臨機応変な役割分担と支援体制
            </h3>
            <div className="text-gray-700 space-y-4">
              <p>
                当初は主にCI/CD担当として参加しましたが、プロジェクト途中でフロントエンド実装のスケジュールが遅れていることが判明した際、迅速に役割を調整し、フロントエンド開発のサポートに入りました。日々のスタンドアップミーティングで各メンバーの進捗状況を把握し、チーム全体としての進捗を最優先に考えた柔軟な対応を心がけました。
              </p>
              <p>
                また、チームメンバーの一人がFirebaseの認証機能実装で困っていた際には、自ら調査・学習を行い、ペアプログラミングを通じて問題解決をサポートしました。この経験から、技術的な課題だけでなく、チーム内のコミュニケーションや協力体制の重要性を再認識し、以降のプロジェクト進行でも積極的に情報共有とサポートを行うようにしました。
              </p>
            </div>
          </div>
        </div>

        {/* フッター部分 - 次のプロジェクトへのリンク */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/#projects"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300"
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
            プロジェクト一覧に戻る
          </Link>
          <Link
            href="/projects/line-recipe"
            className="inline-flex items-center px-4 py-2 bg-[#e8d0d0] text-gray-700 rounded-lg hover:bg-[#e0c0c0] transition duration-300"
          >
            次のプロジェクト
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workshere;

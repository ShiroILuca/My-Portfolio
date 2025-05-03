// プロジェクトセクション

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen p-8 md:p-16 bg-white">
      <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
        Projects
      </h2>
      <div className="max-w-4xl mx-auto mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-700 shadow-md">
        <h3 className="text-2xl font-light text-gray-700 mb-4">
          チーム開発への取り組み
        </h3>
        <p className="text-gray-600 mb-3">
          スクールでの半年間で複数のチーム開発プロジェクトに参加し、様々な役割を担当しました。
          技術的な貢献だけでなく、チームのコミュニケーションや開発プロセスの改善にも積極的に取り組んできました。
        </p>
        <p className="text-gray-600">
          私はチーム開発において、
          <span className="font-medium">「共有」と「透明性」</span>
          を大切にしています。
          定期的な進捗共有や問題点の早期発見、そして解決策の提案を通じて、プロジェクトの成功に貢献してきました。
          また、技術的な課題に直面した際には、チームメンバーと協力して解決する姿勢を常に心がけています。
        </p>
      </div>

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
              Worksphere
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
                SQLAlchemy
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

            <div className="flex flex-wrap justify-between items-center gap-3 mt-6">
              <Link
                href="/projects/workshere"
                className="inline-flex items-center px-4 py-2 bg-[#d4a5a5] text-gray-700 rounded hover:bg-[#c99a9a] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                詳細を見る
              </Link>
              {/* GitHub Link Button */}
              <div className="flex justify-end mt-4"></div>
              <Link
                href="https://github.com/ms-engineer-bc24-09/teamA-section9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </Link>
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

            <div className="flex flex-wrap justify-between items-center gap-3 mt-6">
              <Link
                href="/projects/line-recipe"
                className="inline-flex items-center px-4 py-2 bg-[#d4a5a5] text-gray-700 rounded hover:bg-[#c99a9a] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                詳細を見る
              </Link>

              <div className="flex justify-end mt-4"></div>
              <Link
                href="https://github.com/ms-engineer-bc24-09/teamA-section8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

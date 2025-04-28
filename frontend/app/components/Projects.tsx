// プロジェクトセクション

"use client";
import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
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
  );
};

export default Projects;

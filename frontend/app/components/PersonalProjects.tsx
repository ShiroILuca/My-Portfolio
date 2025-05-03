// 追加：個人プロジェクト

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PersonalProjects: React.FC = () => {
  return (
    <section id="personal" className="min-h-screen p-8 md:p-16 bg-white">
      <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
        Personal Projects & Interests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* LINEスタンプ */}
        <div className="bg-[#e8d0d0] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            LINEスタンプ制作
          </h3>
          <div className="mb-4">
            <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center mb-4">
              <Image
                src="/IMG_0433.PNG"
                alt="LINEスタンプサンプル"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700">
              趣味でオリジナルのLINEスタンプを制作しています。シンプルで使いやすいデザインを心がけ、
              日常会話で使いやすいスタンプを作成。この経験を通じて、ユーザー視点でのデザイン思考や
              デジタルツールの活用スキルを磨きました。
            </p>

            <Link
              href="https://store.line.me/stickershop/author/4414914/ja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#06C755] text-white rounded-full hover:bg-[#05b04c] transition-colors shadow-sm"
            >
              LINEスタンプを見る
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white text-gray-700 rounded text-sm">
              デザイン思考
            </span>
            <span className="px-2 py-1 bg-white text-gray-700 rounded text-sm">
              イラスト制作
            </span>
            <span className="px-2 py-1 bg-white text-gray-700 rounded text-sm">
              ユーザー視点
            </span>
          </div>
        </div>

        {/* 日ナレ */}
        <div className="bg-[#e8d0d0] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            日本ナレーション演技研究所
          </h3>
          <div className="mb-4">
            <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center mb-4">
              <Image
                src="/leo-wieling-bG8U3kaZltE-unsplash.png"
                alt="演技・ナレーションのイメージ"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700">
              日本ナレーション演技研究所（日ナレ）に通い、声優・ナレーターとしての表現技術を学びました。
              感情表現やコミュニケーション力を磨く貴重な経験となり、人に伝わる話し方や表現力を習得。
              この経験はチーム開発での円滑なコミュニケーションにも活かされています。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white text-gray-700 rounded text-sm">
              コミュニケーション力
            </span>
            <span className="px-2 py-1 bg-white text-gray-700 rounded text-sm">
              表現力
            </span>
            <span className="px-2 py-1 bg-white text-gray-700 rounded text-sm">
              プレゼンテーション
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;

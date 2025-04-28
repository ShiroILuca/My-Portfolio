//自己紹介

"use client";
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
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
        <h2 className="text-4xl font-light italic text-gray-700 mb-8">About</h2>
        <p className="text-lg text-gray-700 mb-6">
          はじめまして、飯田麻奈美と申します。
          Ms.Engineerプログラミングスクールを卒業し、バックエンドエンジニアとしてのキャリアをスタートさせるべく転職活動中です。
        </p>
        <p className="text-lg text-gray-700">
          スクールでの半年間で、フロントエンド、バックエンド、インフラと幅広く学習し、複数のチーム開発プロジェクトに参加してきました。
          WorkshereプロジェクトでのCI/CD環境構築やフロントエンド実装、LINE
          Botを活用した食材レシピ提案アプリのバックエンド開発など、
          実践的な開発経験を通じて、サーバーサイド開発に強い関心を持つようになりました。
        </p>
        <p className="text-lg text-gray-700">
          チーム開発では、コミュニケーションを大切にしながら、効率的な開発フローの構築にも取り組みました。技術だけでなく、ユーザーにとって価値のあるサービスを作ることを常に意識しています。
        </p>
      </div>
    </section>
  );
};

export default About;

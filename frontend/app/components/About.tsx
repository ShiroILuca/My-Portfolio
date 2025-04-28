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
          2025年2月にMs.Engineerプログラミングスクールを卒業したばかりのバックエンドエンジニア志望です。
          スクールでの半年間で、フロントエンド、バックエンド、インフラと幅広く学習し、複数のチーム開発プロジェクトに参加してきました。特にPythonやNode.jsを使用したサーバーサイド開発に興味を持ち、バックエンドエンジニアとしてのキャリアを目指しています。
        </p>
        <p className="text-lg text-gray-700">
          チーム開発では、コミュニケーションを大切にしながら、効率的な開発フローの構築にも取り組みました。技術だけでなく、ユーザーにとって価値のあるサービスを作ることを常に意識しています。
          現在は新たな環境でエンジニアとしての一歩を踏み出すべく、転職活動中です。学習意欲が高く、常に新しい技術にチャレンジする姿勢を大切にしています。
        </p>
      </div>
    </section>
  );
};

export default About;

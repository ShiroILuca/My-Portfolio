// 追加：キャリアビジョン

"use client";
import React from "react";

const Vision: React.FC = () => {
  return (
    <section id="vision" className="min-h-screen p-8 md:p-16 bg-[#e8d0d0]">
      <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
        Career Vision
      </h2>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h3 className="text-2xl font-light text-gray-700 mb-4">短期目標</h3>
          <p className="text-gray-700">
            エンジニアとしての基礎を固め、実務経験を積みたいと考えています。スクールではフロントエンド・バックエンド両方を学びましたが、実際の開発現場でどちらが自分に合っているのか、様々な技術に触れながら見極めていきたいです。データベース設計やAPI開発、UI実装など、幅広い経験を通じて、より複雑なシステム開発にも対応できるエンジニアを目指します。
            また、チーム開発の中で得た効率化への工夫やコミュニケーションスキルを活かし、プロジェクト全体の成功に貢献したいと思います。
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            3年後のビジョン
          </h3>
          <p className="text-gray-700">
            一人のエンジニアとして独り立ちし、自走できる技術力を身につけていることを目指します。実務経験を通じて自分の強みとなる専門分野を見つけ、その領域での専門性を高めていきたいと考えています。
            調剤事務での経験で培った業務効率化の視点やコミュニケーションスキルを活かし、技術面だけでなくチームへの貢献も意識しながら、成長し続けるエンジニアでありたいと思います。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;

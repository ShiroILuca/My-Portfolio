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
            バックエンドエンジニアとしての基礎を固め、特にPythonを活用したサーバーサイド開発のスキルを深めたいと考えています。
            実務を通してデータベース設計やAPI開発の経験を積み、より複雑なシステム開発にも対応できるエンジニアを目指します。
            また、チーム開発の中で得た効率化への工夫やコミュニケーションスキルを活かし、プロジェクト全体の成功に貢献したいと思います。
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            3年後のビジョン
          </h3>
          <p className="text-gray-700">
            バックエンド開発のスペシャリストとして、大規模なシステム開発にも対応できるスキルを身につけたいと考えています。
            特にクラウドインフラやコンテナ技術の知識を深め、スケーラブルなアプリケーション設計に貢献できるエンジニアを目指します。
            また、調剤事務で培った業務効率化の視点を活かし、チーム内での開発プロセス改善にも積極的に関わりたいと思います。
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light text-gray-700 mb-4">学習計画</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#e8d0d0] rounded-lg">
              <h4 className="text-xl font-light text-gray-700 mb-2">
                技術スキル
              </h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Python/FastAPIの実践的な開発スキル</li>
                <li>データベース設計・最適化</li>
                <li>AWS/GCPなどクラウドインフラ</li>
                <li>Docker/Kubernetesによるコンテナ管理</li>
              </ul>
            </div>

            <div className="p-4 bg-[#e8d0d0] rounded-lg">
              <h4 className="text-xl font-light text-gray-700 mb-2">
                ソフトスキル
              </h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>テクニカルライティング</li>
                <li>プロジェクトマネジメント</li>
                <li>システム設計スキル</li>
                <li>英語でのコミュニケーション</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

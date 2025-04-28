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
            バックエンドエンジニアとしての基礎を固め、サーバーサイド開発のスキルを深めたいと考えています。現在はPythonを習得中ですが、
            他の言語やフレームワークにも積極的に挑戦する意欲があります。実務を通してデータベース設計やAPI開発の経験を積み、より複雑な
            システム開発にも対応できるエンジニアを目指します。
            また、チーム開発の中で得た効率化への工夫やコミュニケーションスキルを活かし、プロジェクト全体の成功に貢献したいと思います。
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            3年後のビジョン
          </h3>
          <p className="text-gray-700">
            一人のエンジニアとして独り立ちし、自走できる技術力を身につけていることを目指します。バックエンド開発のスペシャリストとして、
            大規模なシステム開発にも対応できる専門性を高めつつ、将来的にはマネジメントにも挑戦していきたいと考えています。調剤事務での経験で
            培った業務効率化の視点とチームマネジメントのスキルを活かし、技術面だけでなくプロジェクト全体の推進にも貢献できるエンジニアを目指します。
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
                <li>
                  バックエンド言語(Node.js,Python,javaなど)・フレームワークの習熟
                </li>
                <li>データベース設計の高度な技術</li>
                <li>セキュリティ監査と対策実装</li>
                <li>CI/CDパイプラインの最適化</li>
              </ul>
            </div>

            <div className="p-4 bg-[#e8d0d0] rounded-lg">
              <h4 className="text-xl font-light text-gray-700 mb-2">
                ソフトスキル
              </h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>技術英語の強化</li>
                <li>英語でのコード理解力向上</li>
                <li>コミュニケーション力の向上</li>
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

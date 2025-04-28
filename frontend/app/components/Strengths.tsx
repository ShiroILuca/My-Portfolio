// 追加：強みセクション

"use client";
import React from "react";
import { Zap, Users, Eye, BookOpen } from "lucide-react";

const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="min-h-screen p-8 md:p-16 bg-[#e8d0d0]">
      <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
        My Strengths
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* 強み1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Zap size={32} className="text-gray-700 mr-4" />
            <h3 className="text-2xl font-light text-gray-700">
              計画的行動と効率化への工夫
            </h3>
          </div>
          <p className="text-gray-700">
            調剤薬局での複数業務の同時進行経験から、効率的なタスク管理を身につけました。
            WorkshereプロジェクトではGitHub
            FlowやCI/CD環境構築を通じて、チーム全体の開発効率向上に貢献。
            プロジェクト管理と優先順位付けのスキルで、効率的な開発プロセスを構築できます。
          </p>
        </div>

        {/* 強み2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users size={32} className="text-gray-700 mr-4" />
            <h3 className="text-2xl font-light text-gray-700">
              チームワークとコミュニケーション
            </h3>
          </div>
          <p className="text-gray-700">
            調剤薬局での多職種連携の経験から、円滑なコミュニケーション能力を養いました。
            Workshereプロジェクトでは、役割を超えて柔軟にサポートし合う体制づくりに貢献。
            チーム開発での臨機応変な対応と協調性でプロジェクト成功に導きます。
          </p>
        </div>

        {/* 強み3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Eye size={32} className="text-gray-700 mr-4" />
            <h3 className="text-2xl font-light text-gray-700">
              ユーザー視点を大切にしたUI設計
            </h3>
          </div>
          <p className="text-gray-700">
            患者様対応の経験を活かし、ユーザーの立場に立ったUI設計を心がけています。
            Workshereでは育休復職という繊細なテーマに配慮し、Tailwind
            CSSを活用した
            レスポンシブデザインを実装。様々なデバイスで使いやすいUIを実現しました。
          </p>
        </div>

        {/* 強み4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BookOpen size={32} className="text-gray-700 mr-4" />
            <h3 className="text-2xl font-light text-gray-700">
              継続的学習への意欲と実践力
            </h3>
          </div>
          <p className="text-gray-700">
            育児休業中にプログラミングを始め、短期間で実践的なスキルを習得。
            WorkshereプロジェクトではTailwind
            CSS、Firebase、StripeAPIなど新しい技術も
            積極的に取り入れ実装。技術の進化が早いIT業界で、学習意欲と適応力を発揮します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Strengths;

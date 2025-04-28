// 追加：キャリアジャーニーセクション

"use client";
import React from "react";
import { Briefcase, Code } from "lucide-react";

const Career: React.FC = () => {
  return (
    <section id="career" className="min-h-screen p-8 md:p-16 bg-white">
      <h2 className="text-4xl font-light italic text-gray-700 mb-12 text-center">
        Career Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* タイムライン */}
        <div className="relative border-l-2 border-[#e8d0d0] ml-6 md:ml-12 pl-8 pb-8">
          {/* 現在のステップ */}
          <div className="mb-12 relative">
            <div className="absolute -left-14 mt-1 w-10 h-10 bg-[#e8d0d0] rounded-full flex items-center justify-center">
              <Briefcase size={20} className="text-gray-700" />
            </div>
            <h3 className="text-2xl font-light text-gray-700 mb-2">
              エンジニア転職活動中
            </h3>
            <p className="text-gray-600 mb-2">2025年4月 ~ 現在</p>
            <p className="text-gray-700">
              Ms.Engineerプログラミングスクールを卒業後、エンジニアとしての第一歩を踏み出すべく
              転職活動中です。サーバーサイド開発を中心としたバックエンドエンジニアを志望しており、データベース設計から
              APIの構築まで、システムの基盤を支える技術に魅力を感じています。
              現在はPythonを習得していますが、技術スタックにとらわれず、最適な解決策を提供できるエンジニアを目指して
              います。
            </p>
          </div>

          {/* Ms.Engineer */}
          <div className="mb-12 relative">
            <div className="absolute -left-14 mt-1 w-10 h-10 bg-[#e8d0d0] rounded-full flex items-center justify-center">
              <Code size={20} className="text-gray-700" />
            </div>
            <h3 className="text-2xl font-light text-gray-700 mb-2">
              Ms.Engineerプログラミングスクール
            </h3>
            <p className="text-gray-600 mb-2">2024年9月 ~ 2025年2月</p>
            <p className="text-gray-700">
              育児休業中に、エンジニアとしてのキャリアを目指してプログラミングスクールに入学。
              フロントエンド、バックエンド、インフラと幅広く学習し、複数のチーム開発プロジェクトに参加。
              特に「Workshere」プロジェクトではGitHub
              Flowに基づくブランチ戦略を導入し、CI/CD環境の構築を担当。フロントエンドのサポーターも務めました。
            </p>
          </div>

          {/* 調剤薬局 */}
          <div className="mb-12 relative">
            <div className="absolute -left-14 mt-1 w-10 h-10 bg-[#e8d0d0] rounded-full flex items-center justify-center">
              <Briefcase size={20} className="text-gray-700" />
            </div>
            <h3 className="text-2xl font-light text-gray-700 mb-2">
              株式会社クリエイトエス・ディー
            </h3>
            <p className="text-gray-600 mb-2">2019年9月 ~ 現在</p>
            <p className="text-gray-700">
              クリエイト薬局にて調剤事務として勤務。処方箋の受付・入力、患者様対応、調剤補助、薬品在庫管理、後輩教育などを担当。
              事務長としてスケジュール・タスク管理を行い、業務効率化に取り組む。
              手書きの請求書をWordとExcelを使用して電子書類化し、業務効率化に成功。
            </p>
          </div>

          {/* 奥村商会 */}
          <div className="relative">
            <div className="absolute -left-14 mt-1 w-10 h-10 bg-[#e8d0d0] rounded-full flex items-center justify-center">
              <Briefcase size={20} className="text-gray-700" />
            </div>
            <h3 className="text-2xl font-light text-gray-700 mb-2">
              株式会社奥村商会
            </h3>
            <p className="text-gray-600 mb-2">2016年4月 ~ 2016年9月</p>
            <p className="text-gray-700">
              横須賀営業所にて売上データ入力、請求書発行、電話・メール応対、在庫管理などの業務を担当。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

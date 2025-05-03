//line-recipe詳細ページ

import LineRecipe from "@/app/components/projects/LineRecipe";

export const metadata = {
  title: "LINE食材レシピ提案アプリ | 飯田 麻奈美のポートフォリオ",
  description:
    "LINEを使用して入力した食材のレシピを提案してくれる自動生成アプリ",
};

export default function LineRecipePage() {
  return <LineRecipe />;
}

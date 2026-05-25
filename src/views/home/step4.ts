import { consultArticlePages } from "@/utils/consultArticles";

export function useStep4() {
  const articles = consultArticlePages[0].slice(0, 3);
  return { articles };
}

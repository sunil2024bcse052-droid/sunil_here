import SectionTitle from "@/components/SectionTitle";
import ArticleList from "@/components/ArticleList";
import { getAllArticles } from "@/lib/articles";

export const metadata = { title: "Articles" };

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div>
      <SectionTitle
        eyebrow="Dashboard 03"
        title="Articles & writings"
        subtitle="Things I've learned, built and thought about."
        colorClass="text-articles"
      />
      <ArticleList articles={articles} />
    </div>
  );
}
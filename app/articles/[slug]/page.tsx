import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticle } from "@/lib/articles";

// Tells Next.js which article pages exist.
export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// Sets the browser tab title for each article.
export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  return { title: article?.meta.title ?? "Article" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-2xl animate-rise">
      <Link href="/articles" className="text-sm text-articles hover:underline">
        ← All articles
      </Link>
      <h1 className="mt-4 font-display text-4xl font-bold">{article.meta.title}</h1>
      <p className="mt-2 text-sm text-muted">{article.meta.date}</p>

      <div className="prose prose-invert mt-8 max-w-none prose-headings:font-display prose-a:text-articles prose-strong:text-ink">
        <MDXRemote source={article.content} />
      </div>
    </article>
  );
}
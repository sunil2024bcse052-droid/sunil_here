import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

// Turns the info block of an article into a clean object.
function toMeta(slug: string, data: Record<string, unknown>): ArticleMeta {
  const rawDate = data.date;
  const date =
    rawDate instanceof Date ? rawDate.toISOString().slice(0, 10) : rawDate ? String(rawDate) : "";
  return {
    slug,
    title: (data.title as string) ?? slug,
    date,
    summary: (data.summary as string) ?? "",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
  };
}

// Used by the list page: every article, newest first.
export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return toMeta(slug, data);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

// Used by the single article page: one article with its text.
export function getArticle(slug: string) {
  const file = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { meta: toMeta(slug, data), content };
}
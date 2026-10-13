"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(articles.flatMap((a) => a.tags))).sort(),
    [articles]
  );

  const shown = articles.filter((a) => {
    const q = query.toLowerCase();
    const matchesText =
      !q || a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q);
    const matchesTag = !tag || a.tags.includes(tag);
    return matchesText && matchesTag;
  });

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm outline-none transition focus:border-articles"
      />

      {allTags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setTag(null)}
            className={`rounded-full px-3 py-1 text-xs transition ${
              tag === null ? "bg-articles text-bg" : "bg-white/10 text-muted hover:text-ink"
            }`}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t === tag ? null : t)}
              className={`rounded-full px-3 py-1 text-xs transition ${
                tag === t ? "bg-articles text-bg" : "bg-white/10 text-muted hover:text-ink"
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {shown.map((a, i) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            style={{ animationDelay: `${i * 70}ms` }}
            className="group animate-rise rounded-2xl border border-white/10 bg-surface p-6 transition hover:-translate-y-1 hover:border-articles/60"
          >
            <p className="text-xs text-muted">{a.date}</p>
            <h2 className="mt-2 font-display text-xl font-semibold group-hover:text-articles">
              {a.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{a.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <span key={t} className="text-xs text-articles/80">
                  #{t}
                </span>
              ))}
            </div>
          </Link>
        ))}
        {shown.length === 0 && <p className="text-muted">No articles match your search.</p>}
      </div>
    </div>
  );
}
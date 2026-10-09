"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Each link has its own color so every dashboard feels different.
const links = [
  { href: "/", label: "Profile", color: "text-profile", bar: "bg-profile" },
  { href: "/skills", label: "Tech Skills", color: "text-skills", bar: "bg-skills" },
  { href: "/interests", label: "Beyond Tech", color: "text-interests", bar: "bg-interests" },
  { href: "/articles", label: "Articles", color: "text-articles", bar: "bg-articles" },
];

export default function Navbar() {
  const pathname = usePathname(); // the current URL, e.g. "/skills"

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1 px-5 py-3 sm:justify-start sm:gap-2">
        {links.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active ? l.color : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
              {active && (
                <span className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${l.bar}`} />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
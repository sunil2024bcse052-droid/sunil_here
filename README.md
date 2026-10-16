# Sunil Kumar | Personal Website

A personal portfolio website with four dashboards: **Profile**, **Technical Skills**, **Beyond Tech** and **Articles**. Every colour, text and article is editable from simple files, so the site can be updated without touching the page code.

## Features

- **Profile**: about, quick facts, education, projects, relevant coursework, achievements and a profile photo
- **Technical Skills**: grouped skills with animated progress bars
- **Beyond Tech**: interests, soft skills and languages
- **Articles**: write articles as simple Markdown files, with search, tag filters and image support
- One accent colour per dashboard, all controlled from a single theme file
- Responsive layout (works on phones, tablets and desktops) with fade-in animations

## Tech stack

| Part | Technology |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript, React 18 |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) + `@tailwindcss/typography` |
| Articles | MDX files read with `gray-matter` and rendered with `next-mdx-remote` |
| Hosting | Vercel (connected to this GitHub repo) |

## Project structure

```
sunil_here/
├── app/
│   ├── layout.tsx            # page frame: fonts, navbar, footer
│   ├── globals.css           # theme colours and background glow
│   ├── page.tsx              # Profile dashboard (home page)
│   ├── skills/page.tsx       # Technical Skills dashboard
│   ├── interests/page.tsx    # Beyond Tech dashboard
│   └── articles/
│       ├── page.tsx          # article list
│       └── [slug]/page.tsx   # a single article
├── components/               # Navbar, SectionTitle, SkillBar, ArticleList
├── data/                     # your content
│   ├── profile.ts
│   ├── skills.ts
│   └── interests.ts
├── content/articles/         # your articles (.mdx files)
├── lib/articles.ts           # reads the article files
├── public/                   # images: profile.jpg, images/articles/
└── tailwind.config.ts        # connects theme colours to Tailwind
```

## Getting started

**Requirements:** Node.js 18.17 or newer.

```bash
git clone https://github.com/sunil2024bcse052-droid/sunil_here.git
cd sunil_here
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Builds the site the way a real server would, and checks for errors |
| `npm run start` | Runs the built site |

## Customising the site

| To change | Edit this file |
| --- | --- |
| Name, about, education, projects, links, photo | `data/profile.ts` |
| Technical skills and levels (0 to 100) | `data/skills.ts` |
| Interests, soft skills, languages | `data/interests.ts` |
| Colours of the whole site | the `:root` block in `app/globals.css` |
| Fonts | `app/layout.tsx` |
| Heading and subtitle of a dashboard | the matching page file, such as `app/skills/page.tsx` |

Only change the text inside quotes in the data files, and keep the commas.

## Writing an article

1. Create a file in `content/articles/`, for example `my-first-post.mdx`. The file name becomes the address: `/articles/my-first-post`.
2. Start it with this block (the first line must be `---`), then write in Markdown below it:

```mdx
---
title: "Your article title"
date: "2026-10-14"
summary: "One or two sentences shown on the article card."
tags: ["tech", "project"]
---

Your opening paragraph.

## A heading

More text, **bold**, *italic* and [links](https://example.com).
```

3. Save, check it at `/articles`, then commit and push.

### Adding images

- **Profile photo:** put the file in `public/` (for example `public/profile.jpg`) and set `photo: "/profile.jpg"` in `data/profile.ts`.
- **Article images:** put the file in `public/images/articles/` and use
  `![Short description](/images/articles/my-image.png)` in the article.

Use lowercase file names without spaces, and keep images under about 500 KB.

## Deployment

The site is deployed with [Vercel](https://vercel.com):

1. Sign in to Vercel with GitHub and choose **Add New → Project**.
2. Import this repository and click **Deploy**.
3. After that, every `git push` to `main` updates the live site automatically.

## Notes

- Versions are pinned on purpose: **Next.js 14**, **React 18** and **Tailwind CSS 3.4**. Newer major versions need code changes, so do not run `npm update` or `npm audit fix --force` without checking that the site still builds.
- If styles stop working after a dependency change, delete the `.next` folder and restart `npm run dev`.

## Author

**Sunil Kumar**, B.Tech Computer Science and Engineering, NIT Srinagar.
GitHub: [sunil2024bcse052-droid](https://github.com/sunil2024bcse052-droid)

## License

See the [LICENSE](LICENSE) file.

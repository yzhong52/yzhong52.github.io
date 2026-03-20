# Rewrite Plan: Jekyll → Next.js + TypeScript + React

## Overview

Migrate the Jekyll/Minimal Mistakes blog at `yzhong52.github.io` to a Next.js app with TypeScript and React.
Keep all existing Markdown content (`_posts/`) and assets (`assets/`). Deploy via GitHub Pages using static export.

---

## Phase 1: Project Setup

- [ ] Bootstrap a new Next.js app with TypeScript: `npx create-next-app@latest . --typescript --tailwind --app`
- [ ] Add markdown processing dependencies: `gray-matter` (frontmatter), `remark`, `remark-html`, `remark-gfm`
- [ ] Add `reading-time` for estimated read time
- [ ] Configure `next.config.ts` for static export (`output: 'export'`) and GitHub Pages base path
- [ ] Update `.gitignore` for Node artifacts (`node_modules/`, `.next/`, `out/`)
- [ ] Keep existing `_posts/` and `assets/` directories in place (no content migration needed)

---

## Phase 2: Content Layer

- [ ] Write a `lib/posts.ts` utility to:
  - Read and parse all markdown files in `_posts/` with `gray-matter`
  - Extract frontmatter: `title`, `excerpt`, `date`, `tags`, `header.overlay_image`, `header.teaser`
  - Compute `slug` from filename (e.g. `2022-11-26-behavior-questions`)
  - Compute reading time using `reading-time`
  - Convert markdown body to HTML with `remark`
- [ ] Define a `Post` TypeScript type/interface covering all frontmatter fields
- [ ] Write a `lib/tags.ts` utility to group posts by tag

---

## Phase 3: Layout & Components

### Shell
- [ ] `components/Layout.tsx` — wraps all pages; includes `Header`, `Footer`, optional `AuthorSidebar`
- [ ] `components/Header.tsx` — site title "The Post Station", subtitle, top nav (Posts / Guitar / About)
- [ ] `components/Footer.tsx` — copyright line matching current footer (Jekyll → Next.js attribution)

### Author Sidebar
- [ ] `components/AuthorSidebar.tsx` — avatar, name "Yuchen Z.", bio, location, social links (Medium, Twitter, GitHub, Instagram)

### Post Cards (grid view)
- [ ] `components/PostCard.tsx` — teaser image, title, excerpt, date, tags, read time; used on Posts and home page

### Post Detail
- [ ] `components/PostHeader.tsx` — overlay hero image with caption and filter
- [ ] `components/TableOfContents.tsx` — sticky TOC generated from post headings (replace Jekyll `toc: true`)
- [ ] `components/RelatedPosts.tsx` — show posts sharing at least one tag

### Tags
- [ ] `components/TagBadge.tsx` — inline tag pill linking to `/tags#tag-name`

---

## Phase 4: Pages

- [ ] `app/page.tsx` — home page (mirrors Jekyll `layout: home`; list of recent posts)
- [ ] `app/posts/page.tsx` — posts grid (`entries_layout: grid`), "Group by tags" button
- [ ] `app/posts/[slug]/page.tsx` — individual post page with TOC, related posts, author sidebar; use `generateStaticParams` for all slugs
- [ ] `app/tags/page.tsx` — all tags with post counts and grouped post lists
- [ ] `app/about/page.tsx` — static About page (port content from `_pages/about.md`)
- [ ] `app/guitar/page.tsx` — placeholder Guitar page (port when guitar posts are added)
- [ ] `app/not-found.tsx` — 404 page

---

## Phase 5: Styling & Theme

- [ ] Configure Tailwind with a custom color palette matching the "air" Minimal Mistakes skin (light blues/grays)
- [ ] Style typography for markdown post bodies (use `@tailwindcss/typography` plugin with `prose` classes)
- [ ] Implement responsive layout: sidebar collapses on mobile, single-column; two-column on desktop
- [ ] Style the posts grid: card hover effects, teaser image aspect ratio
- [ ] Add sticky TOC sidebar behavior with scroll-spy (highlight active heading)

---

## Phase 6: Features

- [ ] **Search** — add client-side full-text search with `fuse.js` (replaces Jekyll search plugin)
- [ ] **Google Analytics** — add `gtag` via Next.js `Script` component (`tracking_id: G-F2F73B78G7`)
- [ ] **Reading time** — display on post pages and cards
- [ ] **Show date** — format and display post date
- [ ] **Tags** — clickable tags on post pages linking to `/tags#tag-name`
- [ ] **Related posts** — show 3–4 posts sharing tags at the bottom of each post
- [ ] **Share buttons** — Twitter/X and copy-link share actions
- [ ] **Sitemap** — generate via `next-sitemap` package
- [ ] **RSS feed** — generate `feed.xml` at build time

---

## Phase 7: GitHub Pages Deployment

- [ ] Update (or replace) `.github/workflows/` to build the Next.js static export and deploy `out/` to GitHub Pages
- [ ] Set `basePath` and `assetPrefix` in `next.config.ts` if needed for the `yzhong52.github.io` root domain
- [ ] Add `out/.nojekyll` file to prevent GitHub Pages from running Jekyll on the output
- [ ] Verify all internal links and image paths resolve correctly in the exported output
- [ ] Remove `Gemfile`, `Gemfile.lock`, and `_config.yml` once the new site is live

---

## Phase 8: QA & Polish

- [ ] Check all existing post slugs produce the same URLs as the Jekyll site (no broken links)
- [ ] Verify all images in `assets/images/` render correctly
- [ ] Test responsive layout on mobile, tablet, desktop
- [ ] Run `next build` and inspect `out/` for any missing pages or assets
- [ ] Validate HTML and check Lighthouse score (performance, accessibility, SEO)
- [ ] Add `<meta>` OG tags (title, description, teaser image) per post for social sharing

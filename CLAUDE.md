# CLAUDE.md

## Project

Personal blog and guitar site at `yzhong52.github.io`, built with Astro + TypeScript + React.
Active development is on the `astro-rewrite` branch. The `main` branch still serves the old Jekyll site.

## Commands

```bash
npm run dev      # Start local dev server at http://localhost:4321/
npm run build    # Build static output to dist/
npm run preview  # Preview the built output locally
```

## Structure

- `src/content/posts/` — blog post markdown files
- `src/content/guitar/` — guitar chord/song markdown files
- `src/pages/posts/` — blog routes (`/posts/[slug]/`)
- `src/pages/guitar/` — guitar routes (`/guitar/[slug]/`)
- `src/layouts/` — Base.astro (shell), PostLayout.astro (two-column)
- `src/components/` — Astro and React (.tsx) components
- `public/assets/images/` — images served at `/assets/images/`

## Notes

- Collection names match URL routes: `posts` → `/posts/`, `guitar` → `/guitar/`
- Dates are parsed from slug filenames (e.g. `2022-11-26-behavior-questions`)
- Netlify preview for `astro-rewrite` branch: https://funny-hummingbird-0681fc.netlify.app/

## ASCII Chord Diagrams

The `ascii_chord` CLI tool lives at `/Users/yuchen/Projects/ascii_chord` (Rust, MIT license).
Source: https://github.com/ascii-music/ascii_chord

Generate chord diagrams for guitar song pages:

```bash
# Single chord
cd /Users/yuchen/Projects/ascii_chord && cargo run -- get Am 2>/dev/null

# Multiple chords side by side
cd /Users/yuchen/Projects/ascii_chord && cargo run -- list C G7 Am E 2>/dev/null
```

Paste the output inside a `<pre style="font-family: 'Lucida Console', monospace; letter-spacing: -1.4px;">` block in the song markdown file.

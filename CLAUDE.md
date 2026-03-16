# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev        # Start development server
bun run build  # Production build (outputs to ./dist/)
bun preview    # Preview the production build
```

> Use `bun` (not npm/yarn) as the package manager.

## Architecture

**Astro.js** static site exported for GitHub Pages (`output: 'static'`).

### File structure

```
src/
  layouts/
    BaseLayout.astro   # HTML shell: head, fonts, favicon, global CSS
    PageLayout.astro   # BaseLayout + Header + centered content + back link + Footer
  components/
    Header.astro       # Logo left, nav right (Work | Blog)
    Footer.astro       # Copyright
    WorkCard.astro     # Image card for work portfolio grid
    BlogCard.astro     # Row entry for blog listing
  pages/
    index.astro        # Home: hero + work grid + blog list
    work/*.astro       # Work detail pages (use PageLayout)
    blog/*.astro       # Blog post pages (use PageLayout)
  styles/
    global.css         # @import "tailwindcss" + JetBrains Mono font-family
```

### Adding new content

**New blog post:**
1. Create `src/pages/blog/<slug>.astro` using `PageLayout` with `title`, `backHref="/#blog"`, `backLabel="← Back to Blog"`
2. Add an entry to the `posts` array in `src/pages/index.astro`

**New work item:**
1. Create `src/pages/work/<slug>.astro` using `PageLayout` with `title`, `backHref="/#work"`, `backLabel="← Back to Work"`
2. Add an entry to the `works` array in `src/pages/index.astro`

### Style conventions
- Background: `bg-stone-50`, primary text: `text-gray-900`, secondary: `text-gray-600`
- Font: JetBrains Mono (loaded via Google Fonts in `BaseLayout.astro`)
- LIVE badge: `bg-green-200`, WIP badge: `bg-gray-200`
- Tailwind CSS 4 via `@tailwindcss/vite` (configured in `astro.config.mjs`)
- Max-width containers: `max-w-5xl` for home sections, `max-w-2xl` for detail pages

### Stack
- Astro 5 / TypeScript 5 / Tailwind CSS 4
- No React — all components are `.astro` files
- Deployment: GitHub Actions → GitHub Pages on push to `main`

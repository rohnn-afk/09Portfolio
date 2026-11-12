# Rohan Sharma — Portfolio

Editorial portfolio built with React, TypeScript, Vite, Tailwind CSS and Bun 1.3.14. The active presentation is in `src/components/Editorial.tsx`; project and experience records live in `src/data/`. See `DESIGN.md` for the design system, architecture and content plan.

## Local development

```sh
bun install --frozen-lockfile
bun run dev
```

## Quality checks

```sh
bun run typecheck
bun run test
bun run lint
bun run audit
bun run build
bun run smoke
```

The build prerenders the homepage and `/experience/ezyr/` as HTML. Links, project disclosures, the resume and contact remain usable without JavaScript. React hydrates the same content for the client. Unmatched routes receive a static 404 page.

## GitHub Pages

The confirmed destination is https://rohnn-afk.github.io/09Portfolio/ . The CI workflow builds with `PAGES_BASE=/09Portfolio/` and `SITE_ORIGIN=https://rohnn-afk.github.io`. It uploads the static artifact and deploys after checks pass on main; pull requests only validate. Pages is configured to use GitHub Actions.

`PAGES_BASE` defaults to `/` for local development. `SITE_ORIGIN` controls absolute canonical URLs, social image metadata and the sitemap. Change both variables when moving to a custom domain. The case-study directory contains its own index.html, so direct requests do not depend on SPA rewrites.

## Content maintenance

- Public name: Rohan Sharma, as confirmed by the owner.
- Resume: `public/Rohan-Sharma-Resume.pdf`, supplied by the owner. It contains the longer name Rohan Sharma Dutt. The owner confirmed August 2026 as the Ezyr end date; the website reflects that date.
- Resume provides education and repository links for ViewCount and Savana.
- Missing outcomes, decisions and approved Ezyr imagery are explicitly marked with `[NEEDS CONTENT: ...]`.
- Fonts are self-hosted Latin WOFF2 subsets with OFL licenses in `public/fonts`.
- Responsive WebP screenshots are derived from existing PNGs; source images remain available.
- Existing ViewCount analytics loads after the page load event and cannot block initial content rendering.

The previous page components remain in `src/Pages` for reference but are not imported by the active application. No heavy runtime dependency was added.

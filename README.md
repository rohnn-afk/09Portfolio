# Rohan Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Bun.

## Requirements

- Bun `1.3.14`

## Scripts

```bash
bun install
bun run dev
bun run typecheck
bun run lint
bun run build
bun run preview
```

## Project Structure

```text
src/
  assets/       Reusable visual and interaction primitives
  components/   Shared UI components
  data/         Typed portfolio content
  Pages/        Page-level sections
  types/        Shared TypeScript domain types
```

## Quality Gates

Before shipping changes, run:

```bash
bun run typecheck
bun run lint
bun run build
```

## CI/CD

GitHub Actions runs the same quality gates with Bun on pull requests and pushes to `main`.

Production deploys publish the Vite `dist/` output to GitHub Pages from `main`.

## Architecture Notes

Project content lives in `src/data/projects.ts` and follows the `Project` type in `src/types/project.ts`.
The project section UI is rendered by `src/components/ProjectSection.tsx`, keeping data changes separate from layout changes.

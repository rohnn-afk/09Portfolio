# Rohan Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Bun.

## Requirements

- Bun `1.3.14`

## Scripts

```bash
bun install
bun run dev
bun run typecheck
bun run test
bun run lint
bun run audit
bun run build
bun run smoke
bun run preview
```

## Project Structure

```text
src/
  assets/       Reusable visual and interaction primitives
  components/   Shared UI components
  data/         Typed portfolio and experience content
  Pages/        Page-level sections and routed case studies
  types/        Shared TypeScript domain types
```

## Routes

- `/` — portfolio, experience timeline, projects and contact
- `/experience/ezyr` — conceptual Ezyr engineering case study

Vercel rewrites direct route requests to the Vite application entry point through `vercel.json`.

## Quality Gates

Before shipping changes, run:

```bash
bun run typecheck
bun run test
bun run lint
bun run build
bun run smoke
```

## CI and Deployment

GitHub Actions runs the same quality gates with Bun on pull requests and pushes to `main`.

Production deployment is managed by the connected Vercel project. GitHub Actions does not deploy the application.

## Architecture Notes

Project content lives in `src/data/projects.ts` and follows the `Project` type in `src/types/project.ts`.
The project section UI is rendered by `src/components/ProjectSection.tsx`, keeping data changes separate from layout changes.

Experience claims and case-study evidence live in `src/data/experience.ts`, separate from their presentation components.

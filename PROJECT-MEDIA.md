# Project interface captures

The portfolio uses WebP screenshots of project interfaces, not invented product mockups. Capture date: 13 November 2026.

- **ViewCount:** deployed project dashboard and SDK guide. Backend requests were intercepted with a fictional workspace and 12 fixture events. No production account or metrics were used. The counts demonstrate rendering only; the portfolio explicitly identifies the analytics as a prototype with unvalidated counting definitions.
- **Savana:** deployed profile interface with intercepted authentication and profile responses. The account details and neutral avatar are fictional. No production profile was edited.
- **09-Fitness.AI:** the repository's `src/app/generate-program/page.tsx` rendered locally with its deployed CSS and existing assistant image. Authentication and voice services were replaced with inactive preview adapters. The screen shows a test profile; no AI conversation was initiated.

Full captures are 1440 × 940. Cover images also have 720-pixel variants. Images preserve the interface composition; no UI, outcomes, users, or marketing metrics were painted into them. Full-resolution gallery images load when the gallery opens. With JavaScript disabled, the cover link opens the full image directly.

To update: capture the same source screen with clearly identified fixture data, inspect it for personal information and unsupported claims, export both WebP sizes, and update the captions in `src/data/projectMedia.ts`. Keep source dimensions or update the dimensions in `ProjectMedia.tsx` together with the stylesheet aspect ratio.

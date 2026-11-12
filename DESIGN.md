# Rohan Sharma — Engineering Journal

## Concept
A personal engineering journal with the composure of an independent design studio. Warm paper, dark ink and forest green frame real product evidence. Expressive serif headlines contrast with precise sans-serif captions and interface labels. Screenshots and architectural explanations carry the visual story; movement is limited to useful interaction feedback.

## Architecture and wireframes
- `/`: persistent masthead → positioning and selected-work entry → Ezyr featured case study → ViewCount, Fitness AI and Savana project spreads → compact additional projects → about and experience → direct contact → footer.
- `/experience/ezyr`: back navigation → title and role → conceptual pipeline → problem → approach and decisions → challenges → ownership → documented outcome → contact.
- Homepage desktop: 12-column composition, asymmetrical introduction, full-width feature, two-column project gallery, split about/contact. Mobile: one reading column; navigation wraps without a hidden menu.
- Project details use native disclosure elements: opportunity, contribution, approach, stack and missing evidence. Only Ezyr has sufficient existing material for a full case study.

## Visual system
- Type: Newsreader (Georgia fallback) for expressive titles; Manrope (sans-serif fallback) for UI/body. Responsive hero 3.4–7.5rem; section headings 2.8–5rem; body 1rem–1.125rem, 1.7 line height; reading measure 65ch.
- Colors: paper #f4f1ea, ink #18211f, muted #56615b, forest #245747, line #d3d7cc, surface #e8e9e0. Dark panels use paper foreground. No second theme in this edition.
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Container 1320px; reading column 760px. Breakpoints 640, 768, 1024, 1440px.
- Borders: 1px dividers; small 4px image corners, square editorial sections. Shadows only on product screenshots; no floating glass cards.
- Components: masthead, text link, filled action, outlined action, section label, project preview, native details, technology list, architecture figure, case-study section, contact panel, footer. No form: email is the direct action.
- Motion: 160–240ms color, underline and small transform transitions. No scroll-controlled visibility, marquees, or continuous animation. Reduced-motion disables transitions and smooth scrolling.
- Accessibility: semantic landmarks, one h1 per page, skip link, visible 3px focus rings, descriptive links, 44px navigation targets, screenshot alt text, and readable content independent of animation.

## Content and evidence
Public name confirmed: Rohan Sharma. Existing contact links and employment claims retained. Résumé supplied by the owner. Keep Ezyr disclosure conceptual. Missing project decisions, outcomes, repository links and education details must be marked `[NEEDS CONTENT: specific item]`; never infer business impact from features.

## Deployment and validation
Keep React, TypeScript, Vite, Tailwind and Bun. Target GitHub Pages, including repository base paths and deep-link static output. Validate types, tests, lint, build and smoke checks. Check widths 360, 768, 1024, 1440 and large desktop when browser tooling is available. Do not treat source checks as browser verification.

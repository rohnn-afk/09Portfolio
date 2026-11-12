# Redesign review — 12 November 2026

## Stage handoff
| Stage | Implemented | Remaining content |
| --- | --- | --- |
| Homepage | Editorial hero, immediate work entry, consistent navigation, responsive layout | None required |
| Selected work | Ezyr lead story; ViewCount, Fitness AI and Savana previews with real screenshots; additional project links | Project tradeoffs and evidenced outcomes; Fitness AI repository and original contribution |
| Case study | Reusable section layout, conceptual architecture, approach, challenges, ownership and recorded outcome | Approved Ezyr screenshots and lessons learned |
| About | Capabilities, experience, résumé-derived education; confirmed August 2026 end date | None required |
| Contact | Email, LinkedIn, GitHub, résumé, location and footer | None required |

## Review lenses
- Creative direction: one restrained palette, serif/sans pairing, deliberate asymmetry, large work previews; removed competing decorative animation.
- Product design: work is before biography, primary paths are explicit, details reveal progressively, navigation remains available while scrolling.
- Engineering: typed data, shared presentation primitives, static prerendering, base-aware assets, direct case-study route, static 404, and GitHub Pages deployment after quality gates.
- Accessibility: keyboard-operated native disclosures, skip link, focus styling, one h1 and main landmark per page. Automated WCAG A/AA checks returned zero violations on both routes. This is not a certification or a substitute for assistive-technology user testing.
- Performance: no heavy new runtime dependency. Removed animation dependencies from the active import graph. Self-hosted WOFF2 fonts and responsive WebP previews. Analytics loads after initial page load. Built CSS approximately 19 KB / 4.9 KB gzip; JS approximately 256 KB / 82 KB gzip.
- Hiring manager: Ezyr progression, technical scope, résumé, source links and specific contributions are easy to find. Unsupported impact claims are not added.
- Client: direct contact, credible work examples and concise capabilities; no fabricated testimonials or availability promises.

## Verification
- TypeScript, lint, 10 unit/component tests, production build, static-route smoke checks and dependency audit passed.
- Browser checked homepage and case study at 360, 768, 1024, 1440 and 1920px: no horizontal overflow; one h1 each; reduced-motion uses automatic scrolling.
- Browser verified keyboard disclosure activation, no JavaScript runtime errors and readable prerendered content with JavaScript disabled.
- Inspected desktop/mobile homepage and case-study screenshots. Local screenshots are in ignored `.review/`.
- Ezyr, all five project destinations, ViewCount repository and Savana repository returned HTTP 200. LinkedIn returned 429 to automation; its existing URL is preserved.
- Confirmed GitHub Pages configuration and URL through the GitHub API. Remote CI had no deploy job; local workflow now uploads and deploys the checked artifact. Changes have not been committed, pushed or deployed.

## Content provenance
Website data and supplied résumé only. Public name follows the owner's instruction, Rohan Sharma. August 2026 Ezyr end date explicitly confirmed by the owner. Résumé PDF retains its original longer name and contents. Existing source images and retired components remain available; active pages are documented in README.

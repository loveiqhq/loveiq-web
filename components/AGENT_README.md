# components/

All React UI components, organized by page/feature.

## What belongs here

- Page-specific section components
- Shared UI elements used across pages

## What does NOT belong here

- Page routing logic → use `app/`
- API/server logic → use `app/api/` or `lib/`
- Static assets → use `public/`

## Subdirectory map

| Directory   | Purpose                                      |
| ----------- | -------------------------------------------- |
| `landing/`  | Landing page sections (S01–S14, Nav, Footer) |
| `about/`    | About page sections                          |
| `glossary/` | Glossary index and term page components      |
| `legal/`    | Shared legal page navigation component       |

## Key entry files

| File                         | Purpose                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| `landing/LandingPage.tsx`    | Main composition — imports all S##Section components in order |
| `landing/NavSection.tsx`     | Site navigation                                               |
| `landing/FooterSection.tsx`  | Site footer                                                   |
| `landing/ScrollAnimator.tsx` | Scroll animation orchestrator (IntersectionObserver)          |

## Landing section naming convention

Sections are numbered `S01Hero.tsx` through `S14CTA.tsx`. To add a new section, create `S##NewName.tsx` and import it in `LandingPage.tsx`.

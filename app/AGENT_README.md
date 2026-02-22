# app/

Next.js App Router directory — all pages and API routes live here.

## What belongs here

- Pages: `page.tsx` files defining URL routes
- API routes: `app/api/<name>/route.ts`
- Root layout: `layout.tsx`, `globals.css`
- Next.js special files: `robots.ts`, `sitemap.ts`

## What does NOT belong here

- Reusable UI components → use `components/`
- Business logic / utilities → use `lib/`
- Static assets → use `public/`
- Data files → use `data/`

## Key entry files

| File                    | Purpose                                                 |
| ----------------------- | ------------------------------------------------------- |
| `page.tsx`              | Landing page entry point                                |
| `layout.tsx`            | Root layout (fonts, metadata, scripts)                  |
| `globals.css`           | Global CSS variables and Tailwind base                  |
| `api/waitlist/route.ts` | Waitlist signup endpoint (reference for new API routes) |
| `api/contact/route.ts`  | Contact form endpoint                                   |
| `api/health/route.ts`   | Health check endpoint                                   |

## Route structure

- `/` → `page.tsx`
- `/about` → `about/page.tsx`
- `/glossary` → `glossary/page.tsx`
- `/glossary/[slug]` → `glossary/[slug]/page.tsx`
- `/waitlist` → `waitlist/page.tsx`
- `/trust-zone` → `trust-zone/page.tsx`
- Legal pages: `privacy-policy/`, `terms-of-service/`, `cookies/`, `imprint/`

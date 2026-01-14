# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 14 marketing/landing site for LoveIQ, a sexual psychology assessment platform. The site uses the App Router.

### Directory Structure

- `app/` - Next.js App Router pages and API routes
  - `page.tsx` - Landing page (renders `components/landing/LandingPage.tsx`)
  - `about/page.tsx` - About page
  - `waitlist/page.tsx` - Waitlist signup page
  - `api/waitlist/route.ts` - Waitlist signup endpoint (Supabase + Resend + Slack)
  - `api/contact/route.ts` - Contact form endpoint (Resend + reCAPTCHA + Slack)
- `components/` - React components organized by page
  - `landing/` - Landing page sections (HeroSection, NavSection, etc.)
  - `about/` - About page sections
  - `theme.ts` - Shared gradient and styling constants
- `lib/` - Utilities
  - `analytics.ts` - Google Analytics tracking helpers
  - `emails/waitlist.ts` - Waitlist email template

### Styling System

Uses Tailwind CSS with CSS custom properties defined in `app/globals.css`:
- Color tokens: `--color-bg`, `--color-surface`, `--color-card`, `--accent-orange`, `--accent-purple`, etc.
- Tailwind extends these via `tailwind.config.js` (e.g., `bg-page`, `text-text-primary`, `accent-orange`)
- Typography: Manrope (sans) and Lora (serif) via `next/font/google`
- Animation classes: `animate-on-scroll`, `reveal-on-scroll`, `animate-float`, etc.

### API Integrations

- **Supabase**: Waitlist signups stored via REST API (server-side only)
- **Resend**: Transactional emails (waitlist confirmation, contact forms)
- **Slack Webhooks**: Notifications for new signups/contacts
- **Google Analytics**: Event tracking via `lib/analytics.ts`
- **reCAPTCHA**: Contact form spam protection

### Environment Variables

Required in `.env.local` (see `SECURITY.md` for details):
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_REPLY_TO`
- `RECAPTCHA_SECRET_KEY`
- `SLACK_WAITLIST_WEBHOOK_URL`, `SLACK_CONTACT_WEBHOOK_URL`
- `NEXT_PUBLIC_SITE_URL`

### Security Headers

Configured in `next.config.js` with strict CSP, HSTS, X-Frame-Options, etc. Update CSP when adding new third-party scripts.

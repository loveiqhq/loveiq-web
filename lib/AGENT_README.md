# lib/

Runtime utilities and server-side logic shared across API routes and components.

## What belongs here

- Security utilities (CSRF, rate limiting)
- External service integrations (email sending, analytics)
- Shared fetch helpers
- Email templates

## What does NOT belong here

- Large static data files → use `data/` (e.g., glossary-data.ts is in `data/`)
- React components → use `components/`
- Page/route definitions → use `app/`

## Key files

| File                    | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| `csrf.ts`               | CSRF token generation and verification    |
| `ratelimit.ts`          | IP-based rate limiting (Supabase-backed)  |
| `analytics.ts`          | GA4 event tracking helpers (client-side)  |
| `fetch-with-timeout.ts` | Fetch wrapper with configurable timeout   |
| `emails/waitlist.ts`    | Waitlist confirmation email HTML template |

## Usage pattern

```typescript
import { verifyCsrfToken } from "@/lib/csrf";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";
import { trackEvent } from "@/lib/analytics";
```

All API routes must use `csrf.ts` and `ratelimit.ts`. See `app/api/waitlist/route.ts` as the canonical reference implementation.

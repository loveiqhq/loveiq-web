# Testing Patterns

**Last Updated:** 2026-02-15

## Test Framework

**Runner:** Vitest 4.x
**Config:** `vitest.config.ts`

**Run Commands:**

```bash
npm test              # Run all tests once
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## Test File Organization

**Location:** `__tests__/` (mirrors source structure)

**Naming:** `*.test.ts`

**Structure:**

```
__tests__/
├── api/
│   ├── contact-validation.test.ts   # Contact form Zod schema tests
│   └── waitlist-validation.test.ts  # Waitlist Zod schema tests
├── lib/
│   ├── analytics.test.ts            # GA4 event tracking tests
│   ├── csrf.test.ts                 # CSRF token verification tests
│   ├── fetch-with-timeout.test.ts   # Fetch wrapper timeout tests
│   ├── ratelimit.test.ts            # IP extraction + rate limit tests
│   └── emails/
│       └── waitlist.test.ts         # Email template + XSS prevention tests
├── proxy.test.ts                    # Middleware security header tests
└── fixtures/                        # Shared test data
```

## Test Structure

**Suite Organization:** `describe` blocks grouped by function/module, `it` blocks for individual cases.

**Patterns:**

- Test file mirrors source file path (`lib/csrf.ts` -> `__tests__/lib/csrf.test.ts`)
- Edge cases and error paths are tested explicitly
- Security-relevant tests (XSS, injection) are included

## Mocking

**Framework:** Vitest built-in (`vi.fn()`, `vi.mock()`, `vi.stubGlobal()`)

**Patterns:**

- `vi.stubGlobal('fetch', ...)` for HTTP calls
- `vi.stubGlobal('window', ...)` for browser globals (analytics)
- Environment variables mocked via `vi.stubEnv()` or direct assignment
- External services (Supabase, Resend, Slack) mocked at the fetch level

## Coverage

**Provider:** V8
**Thresholds:** Lines 60% (enforced in vitest.config.ts)
**Report formats:** text, lcov

## Test Types

**Unit Tests:** Implemented for lib utilities and Zod schemas
**Integration Tests:** API route handler tests with mocked external services
**E2E Tests:** Playwright smoke tests for critical user flows

---

_Last updated: 2026-02-15_

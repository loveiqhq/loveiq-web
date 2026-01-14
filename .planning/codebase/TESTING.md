# Testing Patterns

**Analysis Date:** 2025-01-14

## Test Framework

**Runner:**
- Not detected (no test framework in dependencies)
- No Jest, Vitest, or other test runner configured

**Assertion Library:**
- Not applicable

**Run Commands:**
```bash
# No test commands available
# npm test is not configured in package.json
```

## Test File Organization

**Location:**
- No test files detected in codebase

**Naming:**
- Not established (no tests exist)

**Structure:**
- Not applicable

## Test Structure

**Suite Organization:**
- Not applicable (no tests)

**Patterns:**
- Not established

## Mocking

**Framework:**
- Not applicable

**Patterns:**
- Not established

**What Would Need Mocking:**
- External API calls (Supabase, Resend, reCAPTCHA, Slack)
- Environment variables
- Rate limiting state (in-memory Maps)

## Fixtures and Factories

**Test Data:**
- Not established

**Location:**
- Not established

## Coverage

**Requirements:**
- No coverage tracking

**Configuration:**
- Not configured

## Test Types

**Unit Tests:**
- Not implemented

**Integration Tests:**
- Not implemented

**E2E Tests:**
- Not implemented

## Recommended Testing Strategy

When tests are added, consider:

**Unit Tests (Priority: High):**
- Zod schema validation (`app/api/waitlist/route.ts`, `app/api/contact/route.ts`)
- Rate limiting logic (`isRateLimited` function)
- Email template generation (`lib/emails/waitlist.ts`)
- Analytics helpers (`lib/analytics.ts`)

**Integration Tests (Priority: Medium):**
- API route handlers with mocked external services
- Supabase insertion flow
- Resend email sending

**E2E Tests (Priority: Low for marketing site):**
- Waitlist signup flow
- Contact form submission
- Navigation between pages

**Suggested Framework:**
- Vitest (fast, TypeScript-native, works well with Next.js)
- React Testing Library for component tests
- MSW for API mocking

**Sample Test Setup:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom msw
```

**Sample vitest.config.ts:**
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
});
```

---

*Testing analysis: 2025-01-14*
*Update when test patterns are established*

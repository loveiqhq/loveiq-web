# **tests**/

Unit tests (Vitest). Mirrors the source directory structure.

## What belongs here

- Unit tests for `lib/` utilities
- Unit tests for `app/api/` route handlers
- Unit tests for `proxy.ts` middleware

## What does NOT belong here

- E2E / browser tests → use `e2e/`
- Load / performance tests → use `load-tests/`

## Subdirectory map

| Directory       | Tests for                  |
| --------------- | -------------------------- |
| `api/`          | `app/api/` route handlers  |
| `components/`   | React component unit tests |
| `lib/`          | `lib/` utilities           |
| `proxy.test.ts` | `proxy.ts` middleware      |

## Key files

| File       | Purpose                               |
| ---------- | ------------------------------------- |
| `setup.ts` | Vitest global setup (mocks, env vars) |

## Running tests

```bash
npm test              # run all unit tests once
npm run test:watch    # watch mode
npm run test:coverage # with coverage report
```

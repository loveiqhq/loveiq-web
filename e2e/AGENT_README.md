# e2e/

End-to-end browser tests (Playwright).

## What belongs here

- Full browser test specs covering user flows
- Playwright helper utilities

## What does NOT belong here

- Unit tests → use `__tests__/`
- Load tests → use `load-tests/`

## Key files

| File                   | Purpose                               |
| ---------------------- | ------------------------------------- |
| `smoke.spec.ts`        | Critical path smoke tests (run first) |
| `navigation.spec.ts`   | Navigation and routing tests          |
| `pages.spec.ts`        | Page render and content tests         |
| `interactions.spec.ts` | Form and interactive element tests    |
| `a11y.spec.ts`         | Accessibility tests                   |

## Running tests

```bash
npm run test:e2e     # full E2E suite (builds prod, starts server, runs all browsers)
```

Browser projects: Desktop Chrome/Firefox/Safari, Mobile Chrome (Pixel 7), Mobile Safari (iPhone 15 Pro).

> E2E belongs in CI, not pre-push hooks — too slow (~3–6 min).

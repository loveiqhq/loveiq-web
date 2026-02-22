# load-tests/

Load and performance tests using k6.

## What belongs here

- k6 load test scripts
- Performance benchmarks

## What does NOT belong here

- Unit tests → use `__tests__/`
- E2E browser tests → use `e2e/`

## Key files

| File       | Purpose                              |
| ---------- | ------------------------------------ |
| `load.js`  | Standard load test (gradual ramp-up) |
| `smoke.js` | Minimal smoke load test (single VU)  |
| `spike.js` | Spike test (sudden traffic surge)    |

## Running tests

```bash
k6 run load-tests/load.js
k6 run load-tests/smoke.js
```

> Requires k6 installed. Load tests run in CI via `.github/workflows/load-test.yml`.

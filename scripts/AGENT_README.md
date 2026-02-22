# scripts/

One-off and maintenance scripts (Node.js). Not part of the application bundle.

## What belongs here

- Data generation scripts
- Database migration helpers
- Build-time tooling scripts

## What does NOT belong here

- Application code → use `app/` or `lib/`
- Test files → use `__tests__/` or `e2e/`

## Key files

| File                 | Purpose                                                                  |
| -------------------- | ------------------------------------------------------------------------ |
| `update-glossary.js` | Reads `data/glossary-source.csv`, writes updated `data/glossary-data.ts` |

## Running scripts

```bash
node scripts/update-glossary.js   # regenerate glossary data from CSV
```

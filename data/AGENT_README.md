# data/

Static data assets for the LoveIQ website.

## What belongs here

- Large static datasets generated from external sources (CSV, JSON, etc.)
- Generated TypeScript data files that are not runtime logic

## What does NOT belong here

- Runtime utilities or helper functions → use `lib/`
- API route logic → use `app/api/`
- Component code → use `components/`

## Key files

| File                  | Purpose                                                                         |
| --------------------- | ------------------------------------------------------------------------------- |
| `glossary-data.ts`    | Auto-generated glossary term data (688KB, ~12k lines)                           |
| `glossary-source.csv` | Source CSV for glossary terms; regenerate via `node scripts/update-glossary.js` |

## Regenerating glossary data

```bash
node scripts/update-glossary.js
```

This reads `data/glossary-source.csv` and writes the updated `data/glossary-data.ts`.

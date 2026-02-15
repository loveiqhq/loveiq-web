# Contributing to LoveIQ

## Getting Started

```bash
npm run setup    # Install deps + create .env.local
npm run dev      # Start dev server at http://localhost:3000
```

## Development Workflow

1. Create a branch from `main`
2. Make your changes
3. Run `npm run check` (lint + test + build)
4. Open a PR against `main`

## Commit Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new landing section
fix: resolve contact form validation error
chore: update dependencies
docs: update API documentation
style: format code with prettier
test: add waitlist route tests
ci: pin GitHub Actions to SHA
```

## Code Standards

- **TypeScript** strict mode is enabled
- **Relative imports** only (no `@/` alias)
- **ESLint** must pass (`npm run lint`)
- **Prettier** formats code on commit (via husky + lint-staged)
- Follow existing patterns in `components/landing/` for new sections

## Testing

- Write tests for new utility functions in `__tests__/lib/`
- Write tests for new API routes in `__tests__/api/`
- Run `npm test` before pushing
- Target 60%+ line coverage

## Security

- Never commit secrets or `.env.local`
- All API routes must include CSRF verification, rate limiting, and Zod validation
- Keep error messages generic (no internal details)
- If modifying CSP headers (`proxy.ts`), test in both dev and production builds
- See [SECURITY.md](SECURITY.md) for full guidelines

## PR Checklist

- [ ] `npm run check` passes (lint + test + build)
- [ ] Changes tested manually in browser
- [ ] No secrets committed
- [ ] Security controls preserved
- [ ] Documentation updated if needed

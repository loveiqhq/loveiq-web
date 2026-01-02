# Security Guide

## Environment & secrets
- Set all secrets only in Vercel env vars (never in client bundles): `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_REPLY_TO`, `NEXT_PUBLIC_SITE_URL`.
- Rotate keys at least quarterly or on incident; update Vercel vars and redeploy.
- Never expose the Supabase service role key to the client; keep all DB access server-side.

## Monitoring & alerts
- Watch Vercel logs for spikes or 429/500s on `/api/waitlist`.
- Monitor Supabase logs for insert anomalies and rate spikes; enable row-level auditing if available.
- Monitor Resend dashboard for bounce/complaint rates; alert on send failures.
- Add Google Search Console/GA alerts for traffic anomalies.

## Backups & exports
- Export waitlist data regularly from Supabase (CSV or snapshots) and store securely.
- Test restores periodically to ensure data integrity.

## Abuse protection
- Rate limit and cooldown on `/api/waitlist` (in place).
- Honeypot field on forms; consider adding CAPTCHA via env-flagged toggle if abuse increases.
- Keep generic error messages to avoid information disclosure.

## Secure headers & CSP
- Security headers are set in `next.config.js` (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP).
- If you add new third-party scripts/resources, update CSP accordingly.

## Dependencies
- Run `npm audit` regularly; patch high/critical issues. Avoid shipping dev-only tooling to production if not needed.

## Incident response
- On suspected compromise: rotate Supabase/Resend keys, invalidate sessions if added later, redeploy, and review logs. Notify affected users if data exposure is confirmed.

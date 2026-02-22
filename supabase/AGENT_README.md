# supabase/

Supabase project configuration and database migrations.

## What belongs here

- SQL migration files (versioned, timestamped)
- Supabase configuration

## What does NOT belong here

- Application code → use `app/` or `lib/`
- Seed data or test fixtures → document separately

## Key files

| File                                        | Purpose                    |
| ------------------------------------------- | -------------------------- |
| `migrations/20260219000000_rate_limits.sql` | Rate limiting table schema |

## Usage

Migrations are applied via the Supabase dashboard or CLI. The application accesses Supabase exclusively through the REST API in `app/api/` routes — there is no direct database client in the application code.

**Required env vars:** `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (server-only, never expose to client).

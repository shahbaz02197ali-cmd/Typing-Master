# Typing Master

A responsive typing-practice platform starter with guest sessions, typing tests, starter curriculum, marathon checkpointing, leaderboard UI, race lobby UI, and Supabase schema/policies.

## Requirements
- Node.js 20.9+
- npm
- Supabase project for cloud-backed authentication and persistence

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000. Without Supabase environment variables, supported practice flows use browser-local storage.

## Environment
Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for browser/server Supabase clients. Keep `SUPABASE_SERVICE_ROLE_KEY`, `OPENAI_API_KEY`, and all privileged secrets server-only. Never commit real credentials.

## Database setup
Apply migrations in this order in the Supabase SQL Editor or migration runner:
1. `supabase/migrations/001_initial.sql`
2. `supabase/migrations/002_auth_profiles.sql`
3. `supabase/migrations/003_account_types.sql`
4. `supabase/seed.sql`

Migration files committed to GitHub are not automatically applied to the hosted Supabase project. Verify the migration history and RLS policies in the target project.

## Account types
Email signup offers exactly two learner types: Student and College Student. Existing profiles default to Student. OAuth profile completion still needs to be implemented before account-type-specific onboarding is considered complete.

## Current product status
- Typing tests and scoring are available in the starter app.
- Local browser progress is not cloud-synced yet.
- Multiplayer, leaderboard, and admin areas must not be presented as fully operational backend services until server-side implementation and tests are complete.
- AI Coach and subscription billing are not yet implemented. Billing remains inactive by design.
- Certificates are not accredited qualifications.

## Quality checks
```bash
npm run typecheck
npm run lint
npm test
npm run build
```
GitHub Actions runs these checks on pushes and pull requests to `main`.

## Deployment
Vercel deployment completion is tracked through GitHub commit status. A completed deployment status does not by itself prove every browser flow or Supabase database integration works. Review `docs/PHASE_1_AUDIT.md`, `docs/SECURITY.md`, and `docs/ROADMAP.md` before public launch.

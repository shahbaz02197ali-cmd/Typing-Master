# Typing Master

A responsive typing-practice platform starter with guest sessions, typing tests, curriculum, marathon checkpointing, leaderboard UI, race lobby UI, and Supabase schema/policies. It is designed to run locally first.

## Requirements
- Node.js 20.9+
- npm
- Optional: Supabase project for server-backed persistence and real multiplayer.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000. The core typing test and progress use browser local storage when Supabase is not configured.

## Database setup
1. Create a free Supabase project or run Supabase locally.
2. Copy the project URL and anon key into `.env.local`.
3. In Supabase SQL Editor, apply `supabase/migrations/001_initial.sql`, then `supabase/seed.sql`.
4. Never place the service-role key in client code.

## Important implementation notes
- This is a working foundation, not a claim that a production-grade multiplayer service is already deployed. The race lobby becomes server-backed only after the Supabase project is configured and race endpoints are completed/tested in that environment.
- Guest names are display labels, not identity proof. Browser-only guest progress can be lost when site data is cleared or the device changes.
- Leaderboards are local demo data until backend submissions are enabled and verified.
- Certificates are platform completion records, not accredited qualifications.
- Generated drills are procedural practice content; reviewed lesson passages should be curated.
- Anti-cheat checks can reduce manipulation but cannot eliminate it completely.

## Useful commands
```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Deployment
Deploy the repository to Vercel after configuring environment variables and applying the SQL migrations. Configure a real admin identity and server-side role checks before public launch. Review `docs/SECURITY.md` and `docs/ROADMAP.md`.

# Security checklist before public launch

- Guest display names are not authentication. Implement a high-entropy opaque session secret in a secure, HttpOnly, SameSite cookie before syncing private progress.
- Add server-side authorization and narrow RLS policies before allowing any guest-owned writes.
- Keep the Supabase service-role key server-only and never commit secrets.
- Admin route must check Supabase Auth identity and `admin_users` role on every request. A hidden link is not access control.
- Validate typing result duration, passage ID, text length, WPM plausibility, race state and idempotency on the server.
- Enforce race capacity atomically and rate-limit room creation, join attempts and result submissions.
- Keep bots out of verified human leaderboards. Mark suspicious results and provide an audit trail.
- Add CSP and other security headers, privacy/retention disclosures, moderation and abuse reporting.
- Test guest isolation, ID substitution, race-slot contention, replayed results and admin bypass.

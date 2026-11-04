# Typing Master — Supabase Authentication Setup

The app supports email/password and Google OAuth using Supabase Auth with PKCE sessions stored in cookies.

## Supabase project keys
In Supabase Project Settings → API Keys, use the project URL and a **publishable** key. In Vercel → Project → Settings → Environment Variables, configure:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

The legacy NEXT_PUBLIC_SUPABASE_ANON_KEY is supported as a fallback. Add values to Production and Preview as required, then redeploy. Never put a secret/service-role key in a NEXT_PUBLIC variable.

## Database
Apply migrations 001 through 004 in order. The auth trigger creates a user profile and defaults account_type to student unless a valid account type is provided in signup metadata.

## Email/password
Enable Email under Authentication → Sign In / Providers. Configure email confirmation and a verified SMTP sender for production. Set the Site URL to the canonical production domain and add:
- https://YOUR-DOMAIN/auth/callback
- https://YOUR-DOMAIN/** (only if additional in-app redirects are intentionally needed)

## Google OAuth
1. In Google Cloud Console, create an OAuth Client ID for a Web application.
2. In Supabase → Authentication → Providers → Google, enable Google and add the Google Client ID and Client Secret.
3. In Google Cloud Console, add the Supabase callback URL shown by Supabase (usually https://PROJECT_REF.supabase.co/auth/v1/callback) as an Authorized redirect URI. This is Google's callback, not the Typing Master callback.
4. In Supabase → Authentication → URL Configuration, set the production Site URL and add the exact Typing Master callback URL: https://YOUR-DOMAIN/auth/callback.
5. Ensure the OAuth consent screen is published or add test users while the app remains in testing.
6. Save, then test Google signup and login in a private browser window.

The app callback exchanges the one-time PKCE code and writes the resulting session cookies to the redirect response. Do not manually paste Google client secrets into source code or chat.

## Verification checklist
- Email signup creates a profile with the selected Student or College Student account type.
- Confirmation link returns to /auth/callback and reaches /dashboard.
- Google first-time signup and returning-user login both reach /dashboard.
- Signed-out access to /dashboard returns to /login.
- Sign out clears the session.
- Password recovery returns to /reset-password and allows a new password.

Google provider credentials and allowed redirect URLs are external Supabase/Google settings; a code deployment cannot create those credentials automatically.

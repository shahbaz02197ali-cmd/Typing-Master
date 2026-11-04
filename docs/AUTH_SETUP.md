# Typing Master — Phase 2 Authentication Setup

The application code supports Supabase Auth with email/password and Google OAuth. Authentication will remain unavailable until the project owner completes these provider settings and adds the public project environment values.

## 1. Supabase project values

1. Open the Supabase project for Typing Master.
2. Go to Project Settings → API.
3. Copy the Project URL and the publishable/anon public key.
4. In Vercel, open the Typing Master project → Settings → Environment Variables.
5. Add:
   - `NEXT_PUBLIC_SUPABASE_URL` = Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Supabase publishable/anon key
6. Add them to Production, Preview and Development as appropriate, then redeploy.

Never put the Supabase service-role key in a `NEXT_PUBLIC_*` variable or in browser code. The current authentication flow does not need the service-role key.

## 2. Apply the database migration

Run `supabase/migrations/002_auth_profiles.sql` after the existing `001_initial.sql` migration. It creates the authenticated user profile table, row-level security policies and a profile creation trigger.

## 3. Email and password provider

In Supabase → Authentication → Providers, ensure Email is enabled. Configure the SMTP/email confirmation settings for production. For production email delivery, use a verified sender and a trusted SMTP provider.

## 4. URL configuration

In Supabase → Authentication → URL Configuration:
- Set Site URL to the production Typing Master domain.
- Add the exact redirect URL `https://YOUR-DOMAIN/auth/callback`.
- Add the Vercel preview callback URL only if preview sign-in is needed.

The callback exchanges the one-time authorization code and accepts only safe internal next paths.

## 5. Google OAuth

1. In Google Cloud Console, create an OAuth Client ID of type Web application.
2. Add the Supabase Auth callback URL shown in Supabase → Authentication → Providers → Google as an Authorized redirect URI.
3. Copy the Google Client ID and Client Secret into the Google provider settings in Supabase.
4. Enable the Google provider.
5. Ensure the Typing Master callback URL is allow-listed in Supabase URL Configuration.

Do not share Google client secrets or account passwords in chat.

## 6. Test the flow

- Create a new account at `/signup`.
- Verify the email if confirmation is enabled.
- Sign in at `/login`.
- Try Google sign-in after enabling the provider.
- Use Forgot password and complete the reset at `/reset-password`.
- Visit `/dashboard` while signed out; it should redirect to sign-in.
- Sign out and confirm the session ends.

## Current scope

This phase adds account creation, sign-in, Google OAuth initiation, email confirmation callback, password recovery, protected dashboard entry, sign-out and authenticated profile storage. The dashboard's cloud typing history, progress analytics and guest-result migration are Phase 3.

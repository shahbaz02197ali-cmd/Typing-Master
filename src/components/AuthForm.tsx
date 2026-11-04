"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type AuthMode = "login" | "signup";

const authMessages: Record<string, string> = {
  oauth_denied: "Google sign-in was cancelled or declined. Please try again.",
  authentication_failed: "We could not complete sign-in. Check the Google provider and callback URL settings, then try again.",
  auth_callback_invalid: "The sign-in callback is incomplete. Please restart sign-in.",
  auth_not_configured: "Authentication is not configured. Please contact the website administrator.",
};

function safeNextPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\\\")) {
    return "/dashboard";
  }
  try {
    const parsed = new URL(value, window.location.origin);
    return parsed.origin === window.location.origin ? parsed.pathname + parsed.search + parsed.hash : "/dashboard";
  } catch {
    return "/dashboard";
  }
}

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState<"student" | "college_student">("student");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const isSignup = mode === "signup";
  const queryError = searchParams.get("error");
  const nextPath = safeNextPath(searchParams.get("next"));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) throw new Error("Authentication is not configured. The site needs its Supabase URL and publishable key.");
      const callbackNext = isSignup ? "/dashboard" : nextPath;
      const redirectTo = new URL("/auth/callback", window.location.origin);
      redirectTo.searchParams.set("next", callbackNext);
      const result = isSignup
        ? await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
              data: { display_name: name.trim(), account_type: accountType },
              emailRedirectTo: redirectTo.toString(),
            },
          })
        : await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (result.error) throw result.error;
      if (isSignup && !result.data.session) {
        setMessage("Account created. Check your email and click the verification link to activate your account.");
      } else {
        router.replace(callbackNext);
        router.refresh();
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Sign-in failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function googleSignIn() {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) throw new Error("Authentication is not configured. The site needs its Supabase URL and publishable key.");
      const redirectTo = new URL("/auth/callback", window.location.origin);
      redirectTo.searchParams.set("next", isSignup ? "/dashboard" : nextPath);
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectTo.toString(),
          queryParams: { access_type: "offline", prompt: "select_account" },
        },
      });
      if (signInError) throw signInError;
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Google sign-in could not start. Please try again.");
      setBusy(false);
    }
  }

  return (
    <main className="shell auth-shell">
      <section className="card auth-card">
        <div className="kicker">TYPING MASTER ACCOUNT</div>
        <h1>{isSignup ? "Create your free account" : "Welcome back"}</h1>
        <p className="muted">{isSignup ? "Save your typing progress and continue learning on your account." : "Sign in to continue to your Typing Master workspace."}</p>
        {queryError && <p className="auth-error" role="alert">{authMessages[queryError] || "Sign-in could not be completed. Please try again."}</p>}
        {error && <p className="auth-error" role="alert">{error}</p>}
        {message && <p className="auth-success" role="status">{message}</p>}
        <button type="button" className="btn auth-google" onClick={googleSignIn} disabled={busy}>
          {busy ? "Connecting…" : "Continue with Google"}
        </button>
        <div className="auth-divider"><span>OR CONTINUE WITH EMAIL</span></div>
        <form onSubmit={submit} className="auth-form">
          {isSignup && (
            <>
              <label>Full name<input autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={60} placeholder="Your name" /></label>
              <label>Account type<select value={accountType} onChange={(e) => setAccountType(e.target.value as "student" | "college_student")} required><option value="student">Student</option><option value="college_student">College Student</option></select></label>
            </>
          )}
          <label>Email address<input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={254} placeholder="you@example.com" /></label>
          <label>Password<input type="password" autoComplete={isSignup ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} maxLength={128} placeholder="At least 8 characters" /></label>
          {!isSignup && <div className="auth-forgot"><Link href="/forgot-password">Forgot password?</Link></div>}
          <button className="btn btn-primary auth-submit" type="submit" disabled={busy}>
            {busy ? "Please wait…" : isSignup ? "Create account" : "Sign in"} <span>↗</span>
          </button>
        </form>
        <p className="auth-switch">{isSignup ? "Already have an account?" : "New to Typing Master?"} <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign in" : "Create free account"}</Link></p>
        <p className="auth-guest">You can still use the typing test without creating an account. <Link href="/test">Try it as a guest</Link>.</p>
      </section>
    </main>
  );
}

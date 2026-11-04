"use client";

import Link from "next/link";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    const supabase = createSupabaseBrowserClient();
    if (!supabase) { setError("Authentication is not configured yet."); setBusy(false); return; }
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    if (resetError) setError(resetError.message);
    else setMessage("If an account exists for this email, a password reset link will be sent.");
    setBusy(false);
  }

  return <main className="shell auth-shell"><section className="card auth-card">
    <div className="kicker">ACCOUNT RECOVERY</div><h1>Reset your password</h1>
    <p className="muted">Enter your account email and we’ll send you a secure reset link.</p>
    {error && <p className="auth-error" role="alert">{error}</p>}
    {message && <p className="auth-success" role="status">{message}</p>}
    <form onSubmit={submit} className="auth-form"><label>Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label><button className="btn btn-primary auth-submit" disabled={busy}>{busy ? "Sending…" : "Send reset link"}</button></form>
    <p className="auth-switch"><Link href="/login">Back to sign in</Link></p>
  </section></main>;
}

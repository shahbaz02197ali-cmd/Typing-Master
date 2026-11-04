"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    if (password !== confirm) { setError("Passwords do not match."); return; }
    setBusy(true);
    const supabase = createSupabaseBrowserClient();
    if (!supabase) { setError("Authentication is not configured yet."); setBusy(false); return; }
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) setError(updateError.message);
    else { setDone(true); router.refresh(); }
    setBusy(false);
  }

  return <main className="shell auth-shell"><section className="card auth-card">
    <div className="kicker">ACCOUNT SECURITY</div><h1>Choose a new password</h1>
    {done ? <><p className="auth-success">Your password has been updated.</p><Link className="btn btn-primary auth-submit" href="/login">Continue to sign in</Link></> : <>
      <p className="muted">Use at least 8 characters for your new password.</p>
      {error && <p className="auth-error" role="alert">{error}</p>}
      <form onSubmit={submit} className="auth-form"><label>New password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="new-password" /></label><label>Confirm password<input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required minLength={8} autoComplete="new-password" /></label><button className="btn btn-primary auth-submit" disabled={busy}>{busy ? "Updating…" : "Update password"}</button></form>
    </>}
  </section></main>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";

export const metadata: Metadata = { title: "Your dashboard", robots: { index: false, follow: false } };

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return <main className="shell"><section className="card auth-dashboard"><div className="kicker">ACCOUNT SETUP</div><h1>Connect your account</h1><p className="muted">The account area is ready, but Supabase is not configured yet. Add your Supabase project URL and public anon key in the hosting environment to activate sign-in.</p><Link className="btn btn-primary" href="/login">Back to sign in</Link></section></main>;
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/login");
  const displayName = user.user_metadata?.display_name || user.user_metadata?.full_name || user.email?.split("@")[0] || "Learner";

  return <main className="shell"><section className="card auth-dashboard">
    <div className="row" style={{justifyContent:"space-between"}}><div className="kicker">YOUR WORKSPACE</div><SignOutButton /></div>
    <h1>Welcome, {displayName}</h1><p className="muted">You are signed in to Typing Master with {user.email}. Your account dashboard is ready for the next progress and history phase.</p>
    <div className="grid"><div className="card"><div className="muted">Account email</div><strong>{user.email}</strong></div><div className="card"><div className="muted">Account status</div><strong>Verified session</strong></div></div>
    <div className="row" style={{marginTop:22}}><Link className="btn btn-primary" href="/test">Start typing test ↗</Link><Link className="btn" href="/learn">Continue learning</Link></div>
  </section></main>;
}

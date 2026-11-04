import type { Metadata } from "next";
import { Suspense } from "react";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Create account", robots: { index: false, follow: false } };

export default function SignupPage() {
  return <Suspense fallback={<main className="shell"><p>Loading sign up…</p></main>}><AuthForm mode="signup" /></Suspense>;
}

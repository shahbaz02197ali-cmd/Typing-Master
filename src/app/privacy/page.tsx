import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Typing Master handles account information, typing activity and authentication data." };

export default function PrivacyPolicyPage() {
  return <main className="shell"><span className="kicker">LEGAL / PRIVACY</span><h1>Privacy Policy</h1><p className="muted">Last updated: November 4, 2026</p><article className="card" style={{maxWidth: 860, lineHeight: 1.85}}>
    <p>Typing Master provides online typing lessons, typing tests, practice exercises and progress features. This policy explains what information may be processed when you use the service.</p>
    <h2>Information we process</h2><p>When you create an account or sign in, we process information such as your email address, account identifier and, where provided by your identity provider, basic profile details such as your name. If you use Google sign-in, Google shares the basic profile information you approve during authentication.</p>
    <p>When you use typing features, the service may process your typed text, selected exercises, test duration, typing speed, accuracy, error counts and saved progress or results. Avoid entering passwords, confidential business information or other sensitive personal information into typing exercises.</p>
    <h2>How we use information</h2><p>We use information to authenticate users, operate the website, provide lessons and typing tests, save and display progress, maintain security, troubleshoot errors and improve the service. We do not sell personal information.</p>
    <h2>Service providers and storage</h2><p>Typing Master uses Supabase for authentication and backend data services, and Vercel for website hosting and delivery. These providers process information on our behalf to operate the service, subject to their own terms and privacy practices. Information may be processed on infrastructure located outside your country.</p>
    <h2>Cookies and session data</h2><p>Authentication may use cookies or similar session technologies to keep you signed in and protect account sessions. Your browser settings can affect these technologies, but blocking them may prevent sign-in from working.</p>
    <h2>Retention and security</h2><p>We retain account and progress information for as long as needed to provide the service, meet legitimate operational needs or comply with applicable law. We use reasonable technical and organizational safeguards, but no online service can guarantee absolute security.</p>
    <h2>Your choices</h2><p>You can stop using the service at any time. For a request to access, correct or delete account information, contact us at <a href="mailto:shahbaz02197ali@gmail.com">shahbaz02197ali@gmail.com</a>. We may need to verify your request before acting on it.</p>
    <h2>Children</h2><p>Typing Master is not intended to knowingly collect personal information from children in violation of applicable law. A parent or guardian who believes a child has provided personal information may contact us.</p>
    <h2>Policy changes and contact</h2><p>We may update this policy as the service changes. The latest version will be published on this page. Questions can be sent to <a href="mailto:shahbaz02197ali@gmail.com">shahbaz02197ali@gmail.com</a>.</p>
    <p><Link href="/">Return to Typing Master</Link></p></article></main>;
}

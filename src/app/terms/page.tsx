import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using Typing Master online typing lessons, tests and practice tools." };

export default function TermsPage() {
  return <main className="shell"><span className="kicker">LEGAL / TERMS</span><h1>Terms of Service</h1><p className="muted">Last updated: November 4, 2026</p><article className="card" style={{maxWidth: 860, lineHeight: 1.85}}>
    <p>These Terms apply to your access to and use of Typing Master, including its typing lessons, practice exercises, tests, games and account features. By using the service, you agree to these Terms.</p>
    <h2>Using the service</h2><p>You may use Typing Master for lawful personal, educational or organizational practice. You agree not to misuse the website, interfere with its operation, attempt unauthorized access, introduce malicious code, or use the service in a way that violates applicable law or another person&apos;s rights.</p>
    <h2>Accounts and security</h2><p>You are responsible for providing accurate account information, keeping your sign-in credentials secure and activity under your account. Notify us if you believe your account has been accessed without permission.</p>
    <h2>Typing content and results</h2><p>Lessons and practice materials are provided for skill development. Typing speed, accuracy, scores and progress summaries are estimates based on the session and calculation method used by the website; they are not certifications or guarantees of performance in other tests or environments.</p>
    <h2>Free and paid features</h2><p>Some features may be offered free of charge and others may be introduced as paid features. Any pricing, billing terms, renewal details and cancellation rules will be shown before a paid purchase is offered. No payment is due for a feature merely because it is described as a future or planned feature.</p>
    <h2>Content and acceptable conduct</h2><p>You must not upload or submit content that is unlawful, infringing, harmful or abusive. You remain responsible for text you enter into custom practice fields. Do not enter confidential or sensitive information that you do not want processed by the service.</p>
    <h2>Availability and changes</h2><p>We may update, suspend or discontinue parts of the service to maintain or improve it. We aim to keep the website available but do not promise uninterrupted or error-free operation.</p>
    <h2>Disclaimer and liability</h2><p>The service is provided on an “as is” and “as available” basis to the extent permitted by law. To the extent permitted by applicable law, Typing Master disclaims implied warranties and is not liable for indirect, incidental or consequential losses arising from use of the service.</p>
    <h2>Changes and contact</h2><p>We may revise these Terms by publishing an updated version on this page. Continued use after changes take effect means you accept the revised Terms. Questions can be sent to <a href="mailto:shahbaz02197ali@gmail.com">shahbaz02197ali@gmail.com</a>.</p>
    <p><Link href="/">Return to Typing Master</Link></p></article></main>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Free Typing Speed Test Online | Typing Master",
    template: "%s | Typing Master",
  },
  description:
    "Improve your typing speed and accuracy with free online typing tests, WPM tests, beginner-friendly typing lessons, keyboard practice and typing challenges.",
  applicationName: siteName,
  keywords: [
    "typing test", "typing speed test", "free typing test", "WPM test",
    "typing practice", "typing lessons", "typing accuracy test",
  ],
  openGraph: {
    type: "website",
    siteName,
    title: "Free Typing Speed Test Online | Typing Master",
    description:
      "Test your typing speed, improve accuracy and build confidence with free typing lessons and practice.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Typing Speed Test Online | Typing Master",
    description:
      "Free online typing tests, WPM practice and beginner-to-advanced typing lessons.",
  },
  robots: { index: true, follow: true },
};

const links = [
  ["Lessons", "/learn"], ["Practice", "/practice"], ["Typing Test", "/test"],
  ["Test Prep", "/marathon"], ["Challenges", "/multiplayer"], ["Leaderboard", "/leaderboard"]
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="site-header">
      <Link href="/" className="brand-mark"><span className="brand-symbol">T<span>M</span></span><span className="brand-name">TYPING<span>MASTER</span></span></Link>
      <nav className="main-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions"><Link href="/profile" className="signin-link">Sign in</Link><Link href="/profile" className="btn btn-primary header-join">Join free <span>↗</span></Link></div>
    </header>
    {children}
    <footer className="site-footer"><Link href="/" className="footer-brand">TYPING MASTER<span> / TRAINING ARENA</span></Link><span>Practice with purpose. Improve every day.</span><span>© {new Date().getFullYear()} Typing Master</span></footer>
  </body></html>;
}

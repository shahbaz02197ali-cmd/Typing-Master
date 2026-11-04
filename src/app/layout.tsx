import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Typing Master | Learn. Practice. Level Up.",
  description: "Build typing speed and accuracy with guided lessons, timed tests and daily practice."
};

const links = [
  ["Lessons", "/learn"], ["Practice", "/practice"], ["Typing Test", "/test"],
  ["Test Prep", "/marathon"], ["Challenges", "/multiplayer"], ["Leaderboard", "/leaderboard"]
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="site-header">
      <Link href="/" className="brand-mark"><span className="brand-symbol">T<span>M</span></span><span className="brand-name">TYPING<span>MASTER</span></span></Link>
      <nav className="main-nav">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions"><Link href="/profile" className="signin-link">Sign in</Link><Link href="/profile" className="btn btn-primary header-join">Join free <span>↗</span></Link></div>
    </header>
    {children}
    <footer className="site-footer"><Link href="/" className="footer-brand">TYPING MASTER<span> / TRAINING ARENA</span></Link><span>Practice with purpose. Improve every day.</span><span>© {new Date().getFullYear()} Typing Master</span></footer>
  </body></html>;
}

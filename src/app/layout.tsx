import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Typing Master — Learn, Practice, Race",
  description: "Build typing accuracy and speed with lessons, timed tests, long-form practice and races."
};

const links = [
  ["Learn", "/learn"], ["Practice", "/practice"], ["Custom Text", "/practice/custom"], ["Typing Test", "/test"],
  ["10K Marathon", "/marathon"], ["Race", "/multiplayer"],
  ["Leaderboard", "/leaderboard"], ["Profile", "/profile"]
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="topbar">
      <Link href="/" className="brand">⌨ Typing Master</Link>
      <nav className="nav">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    </header>
    {children}
    <footer className="footer">Typing Master · Practice consistently. Improve every day.</footer>
  </body></html>;
}
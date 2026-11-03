import Link from "next/link";
import GuestGate from "@/components/GuestGate";
const features = [
  ["Learn A–Z","Step-by-step lessons from home-row basics to office documents.","/learn"],
  ["Timed typing tests","Choose 30 seconds up to 30 minutes or set a custom duration.","/test"],
  ["10K word marathon","Build endurance with a long-form typing challenge.","/marathon"],
  ["Real-time race rooms","Create a room and invite up to three other typists.","/multiplayer"],
  ["Practice library","Practice sentences, business writing, data entry and more.","/practice"],
  ["Leaderboard","Review local practice results and competition structure.","/leaderboard"]
];
export default function Home() {
  return <main className="shell">
    <section className="hero"><div className="kicker">Learn · Practice · Compete</div><h1>Type faster.<br/>Stay accurate.</h1><p className="muted" style={{maxWidth:620,fontSize:18}}>Build your typing skills with structured lessons, timed tests, long challenges and multiplayer races — all in a clean, light interface.</p><div className="row" style={{marginTop:24}}><Link className="btn" href="/test">Start typing test</Link><Link className="btn secondary" href="/learn">Explore lessons</Link></div></section>
    <GuestGate/>
    <section style={{marginTop:35}}><div className="kicker">Your typing workspace</div><h2>Everything in one place</h2><div className="grid">{features.map(([title,desc,href])=><Link href={href} className="card" key={href}><h3>{title} ↗</h3><p className="muted">{desc}</p></Link>)}</div></section>
    <section className="card" style={{marginTop:18}}><h2>Start with accuracy</h2><p className="muted">Keep your fingers relaxed, look at the text instead of the keyboard, and build speed gradually. Your personal results are stored locally unless you configure the backend.</p></section>
  </main>;
}
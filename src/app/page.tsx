import Link from "next/link";
import GuestGate from "@/components/GuestGate";

const paths = [
  { number: "01", title: "Learn A–Z", text: "Build strong foundations with guided lessons, finger placement and keyboard skills.", href: "/learn", tag: "LESSONS" },
  { number: "02", title: "Typing tests", text: "Challenge your speed with timed sessions from 30 seconds to 30 minutes.", href: "/test", tag: "SPEED & ACCURACY" },
  { number: "03", title: "Practice lab", text: "Train with useful sentences, business writing and custom practice.", href: "/practice", tag: "DAILY TRAINING" },
  { number: "04", title: "Test preparation", text: "Get comfortable with longer passages and focused exam-style practice.", href: "/marathon", tag: "TEST PREP" },
  { number: "05", title: "Typing games", text: "Turn repetition into a challenge and keep your skills sharp.", href: "/multiplayer", tag: "CHALLENGES" },
  { number: "06", title: "Your progress", text: "Review your attempts, personal best and improvement over time.", href: "/profile", tag: "YOUR STATS" }
];

export default function Home() {
  return (
    <main className="home-shell">
      <section className="arena-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> THE NEXT LEVEL OF TYPING</div>
          <h1>Free Online Typing Test<br /><span>Build speed. Improve accuracy.</span></h1>
          <p className="hero-lede">Test your typing speed, learn touch typing and improve accuracy with guided lessons, timed WPM tests and daily practice for every skill level.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-large" href="/test">Start free typing test <span aria-hidden="true">↗</span></Link>
            <Link className="btn btn-ghost btn-large" href="/learn">Explore lessons</Link>
          </div>
          <div className="hero-proof">
            <div><strong>30 sec–30 min</strong><span>Flexible test times</span></div>
            <div><strong>Beginner to Pro</strong><span>Train at your pace</span></div>
            <div><strong>Free to start</strong><span>No account required</span></div>
          </div>
        </div>
        <div className="hero-console" aria-label="Typing Master training preview">
          <div className="console-top"><span className="console-label"><i /> TYPING TRAINING PREVIEW</span><span className="console-code">TM / 001</span></div>
          <div className="console-score"><div><span className="console-caption">YOUR NEXT PERSONAL BEST</span><strong>60<span> WPM</span></strong></div><div className="score-ring"><span>98<small>%</small></span><em>ACCURACY</em></div></div>
          <div className="keyboard-window">
            <div className="keyboard-line"><span>Q</span><span>W</span><span className="key-lit">E</span><span>R</span><span>T</span><span>Y</span><span>U</span><span>I</span><span>O</span><span>P</span></div>
            <div className="keyboard-line inset"><span>A</span><span>S</span><span className="key-lit">D</span><span>F</span><span>G</span><span>H</span><span>J</span><span>K</span><span>L</span></div>
            <div className="keyboard-line"><span>Z</span><span>X</span><span>C</span><span>V</span><span>B</span><span>N</span><span>M</span><span className="space-key">SPACE</span></div>
          </div>
          <div className="console-bottom"><span>PRECISION FIRST</span><span className="console-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span><span>LEVEL 01</span></div>
          <div className="console-glow" />
        </div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      </section>

      <section className="quick-start">
        <div><span className="section-kicker">CHOOSE YOUR MISSION</span><h2>How do you want to train?</h2><p>Jump straight into a session or build your skills one lesson at a time.</p></div>
        <div className="quick-actions">
          <Link href="/test" className="quick-card"><span className="quick-icon">⌁</span><strong>Speed test</strong><small>Measure your WPM</small><b>↗</b></Link>
          <Link href="/learn" className="quick-card"><span className="quick-icon">⌨</span><strong>Learn A–Z</strong><small>Start from the basics</small><b>↗</b></Link>
          <Link href="/practice" className="quick-card"><span className="quick-icon">◎</span><strong>Practice</strong><small>Build daily consistency</small><b>↗</b></Link>
        </div>
      </section>

      <section className="program-section">
        <div className="section-heading"><div><span className="section-kicker">YOUR TRAINING HUB</span><h2>Typing lessons, tests and practice for every level</h2></div><p>From your first lesson to your next typing milestone, build speed and accuracy with free online training.</p></div>
        <div className="program-grid">{paths.map((item) => <Link href={item.href} className="program-card" key={item.number}><div className="program-card-top"><span>{item.number}</span><small>{item.tag}</small></div><h3>{item.title}</h3><p>{item.text}</p><div className="program-link">Explore module <b>↗</b></div></Link>)}</div>
      </section>

      <section className="progress-banner"><div><span className="section-kicker">START SMALL. GET FASTER.</span><h2>Your next level starts<br />with one session.</h2><p>Practice without signing up. Create a guest profile when you want to keep your results on this device.</p><Link href="/test" className="btn btn-primary">Take a free typing test ↗</Link></div><div className="progress-graphic"><div className="progress-ring"><span>01</span><small>LEVEL</small></div><div className="progress-track"><i /></div><div className="progress-caption">BUILD YOUR MOMENTUM</div></div></section>
      <section className="guest-section"><GuestGate /></section>
    </main>
  );
}

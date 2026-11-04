import Link from "next/link";

export default function Home() {
  return <main className="new-home">
    <section className="home-intro">
      <div className="kicker">A BETTER WAY TO LEARN TOUCH TYPING</div>
      <h1>Typing feels better<br/><span>when you find your flow.</span></h1>
      <p>Build real typing skills with calm, focused practice. Learn each key step by step, then measure your speed and accuracy.</p>
      <div className="home-cta"><Link href="/learn" className="btn btn-primary btn-large">Start learning free <span>→</span></Link><Link href="/test" className="home-secondary">Take a typing test</Link></div>
      <div className="home-trust"><span>✓ No download</span><span>✓ Beginner friendly</span><span>✓ Practice at your pace</span></div>
    </section>
    <section className="home-practice-preview">
      <div className="preview-label"><span className="preview-dot"/> YOUR FIRST PRACTICE</div>
      <div className="preview-words"><span className="preview-done">f j d k </span><span className="preview-active">a s d f</span><span className="preview-future"> j k l ;</span></div>
      <div className="preview-rule"><span>Start with the home keys</span><span>Lesson 01 / 07</span></div>
      <div className="preview-keys"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><kbd>F</kbd><kbd>J</kbd><kbd>K</kbd><kbd>L</kbd><kbd>;</kbd></div>
    </section>
    <section className="home-path">
      <div><span className="kicker">A CLEAR LEARNING PATH</span><h2>Small steps. Real progress.</h2><p>Every lesson builds on the last one. You always know what to practise next.</p></div>
      <div className="path-cards">
        <Link href="/learn"><span>01</span><b>Learn the keys</b><small>One key → two → four → home row → A–Z</small><strong>Start lesson →</strong></Link>
        <Link href="/test"><span>02</span><b>Check your speed</b><small>Simple typing tests with live WPM and accuracy.</small><strong>Take a test →</strong></Link>
        <Link href="/dashboard"><span>03</span><b>Track your progress</b><small>Save results and see how your typing improves.</small><strong>View progress →</strong></Link>
      </div>
    </section>
  </main>;
}

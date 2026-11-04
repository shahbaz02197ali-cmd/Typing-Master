"use client";

import { useMemo, useState } from "react";

const stages = [
  { title: "Your first key", keys: "F", instruction: "Find F. Feel the small raised bump under your left index finger. Press F slowly, then repeat.", drill: "f f f f f f f f f f" },
  { title: "Two keys", keys: "F J", instruction: "F and J are your home anchors. Your index fingers rest here. Alternate between the two keys.", drill: "f j f j j f f j f j" },
  { title: "Four keys", keys: "F J D K", instruction: "Add D and K. Keep your fingers curved and return to the home position after each press.", drill: "f j d k d k f j k d" },
  { title: "Eight keys", keys: "A S D F J K L ;", instruction: "Meet the full home row. Left hand: A S D F. Right hand: J K L ;. Keep your wrists relaxed.", drill: "asdf jkl; asdf jkl; fj dk sl a;lk" },
  { title: "Ten home-row keys", keys: "A S D F G H J K L ;", instruction: "Add G and H. Each finger has a home key. Reach gently, then return to the home row.", drill: "asdfg hjkl; sad glad; ask dad; flask" },
  { title: "All 26 letters", keys: "A–Z", instruction: "Now bring in the top and bottom rows. Look at the screen, not your keyboard. Accuracy comes before speed.", drill: "the quick brown fox jumps over the lazy dog" },
  { title: "First real words", keys: "HOME ROW + A–Z", instruction: "Use the letters you have learned in short everyday words and sentences.", drill: "dad asks a sad lad to add a red flag" },
];

export default function BeginnerLesson() {
  const [stage, setStage] = useState(0);
  const [typed, setTyped] = useState("");
  const [completed, setCompleted] = useState<number[]>([]);
  const current = stages[stage];
  const target = current.drill;
  const correct = useMemo(() => [...typed].filter((c, i) => c === target[i]).length, [typed, target]);
  const accuracy = typed.length ? Math.round(correct / typed.length * 100) : 100;
  const done = typed.length >= target.length && accuracy >= 85;
  function next() {
    if (!done) return;
    setCompleted(prev => prev.includes(stage) ? prev : [...prev, stage]);
    if (stage < stages.length - 1) { setStage(stage + 1); setTyped(""); }
  }
  function choose(index:number) { setStage(index); setTyped(""); }
  return <main className="learn-shell">
    <section className="learn-intro">
      <div className="kicker">TYPING MASTER · BEGINNER COURSE</div>
      <h1>Learn to type, <span>one step at a time.</span></h1>
      <p>Start with one key. Build finger memory gradually. No rushing, no confusing lessons.</p>
      <div className="learn-meta"><span>7 guided steps</span><span>Beginner friendly</span><span>Free to start</span></div>
    </section>
    <div className="learn-layout">
      <aside className="lesson-rail">
        <div className="rail-title">YOUR LEARNING PATH <span>{completed.length}/{stages.length}</span></div>
        <div className="rail-progress"><i style={{width:`${completed.length/stages.length*100}%`}}/></div>
        {stages.map((s,i)=><button key={s.title} className={`lesson-step ${stage===i?"selected":""} ${completed.includes(i)?"complete":""}`} onClick={()=>choose(i)}>
          <span className="step-number">{completed.includes(i)?"✓":String(i+1).padStart(2,"0")}</span><span><b>{s.title}</b><small>{s.keys}</small></span><span className="step-arrow">›</span>
        </button>)}
      </aside>
      <section className="lesson-main">
        <div className="lesson-topline"><span>LESSON {String(stage+1).padStart(2,"0")} OF {stages.length}</span><span>{Math.round(completed.length/stages.length*100)}% COURSE PROGRESS</span></div>
        <h2>{current.title}</h2><p className="lesson-instruction">{current.instruction}</p>
        <div className="key-focus"><span className="focus-label">TODAY'S KEYS</span><div className="focus-keys">{current.keys.split("").map((key,i)=><kbd key={i} className={key===" "?"space":""}>{key===" "?"SPACE":key}</kbd>)}</div></div>
        <div className="drill-card">
          <div className="drill-head"><span>TYPE THE PRACTICE BELOW</span><span>{typed.length}/{target.length} characters</span></div>
          <div className="drill-text" aria-label="Typing practice text">{[...target].map((char,i)=><span key={i} className={i<typed.length?(typed[i]===char?"drill-correct":"drill-wrong"):(i===typed.length?"drill-current":"")}>{char===" "?" ":char}</span>)}</div>
          <input className="drill-input" aria-label="Type the practice text here" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck={false} value={typed} onChange={e=>setTyped(e.target.value.slice(0,target.length))} placeholder="Click here and start typing…" />
          <div className="drill-stats"><span><b>{accuracy}%</b> accuracy</span><span><b>{typed.length}</b> typed</span><span><b>{Math.max(0,target.length-typed.length)}</b> remaining</span></div>
          {done ? <div className="lesson-feedback success">Nice work. You reached the practice target with at least 85% accuracy.</div> : typed.length===target.length ? <div className="lesson-feedback">Try again. Aim for at least 85% accuracy before moving on.</div> : null}
          <div className="lesson-actions"><button className="lesson-reset" onClick={()=>setTyped("")}>Restart practice</button><button className="lesson-next" disabled={!done} onClick={next}>{stage===stages.length-1?"Course complete":"Continue to next step"} <span>→</span></button></div>
        </div>
        <div className="lesson-tip"><span>TIP</span> Keep your fingers close to the keys. Try not to look down at the keyboard.</div>
      </section>
    </div>
  </main>;
}

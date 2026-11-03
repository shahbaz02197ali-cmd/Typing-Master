 "use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { passages } from "@/lib/content";
import { calculateScore } from "@/lib/scoring";
import { saveResult } from "@/lib/progress";

const presets = [{label:"30 sec",seconds:30},{label:"1 min",seconds:60},{label:"2 min",seconds:120},{label:"3 min",seconds:180},{label:"4 min",seconds:240},{label:"5 min",seconds:300},{label:"10 min",seconds:600},{label:"15 min",seconds:900},{label:"30 min",seconds:1800}];
export default function TypingTest({initialSeconds=60, marathon=false}:{initialSeconds?:number;marathon?:boolean}) {
  const target = useMemo(()=>marathon ? Array.from({length:10000},(_,i)=>passages[(i*3)%passages.length].split(" ")[i%passages[(i*3)%passages.length].split(" ").length]).join(" ") : passages.join(" "),[marathon]);
  const [seconds,setSeconds] = useState(initialSeconds);
  const [typed,setTyped] = useState("");
  const [running,setRunning] = useState(false);
  const [finished,setFinished] = useState(false);
  const [elapsed,setElapsed] = useState(0);
  const [custom,setCustom] = useState("60");
  const [startTime,setStartTime] = useState<number|null>(null);
  const [paused,setPaused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const score = calculateScore(target,typed,elapsed);
  useEffect(()=>{
    if(!running || paused) return;
    const timer = window.setInterval(()=>{
      if(startTime===null) return;
      const nowElapsed = Math.floor((Date.now()-startTime)/1000);
      setElapsed(nowElapsed);
      if(!marathon && nowElapsed>=seconds){setRunning(false);setFinished(true);}
      if(marathon && typed.length>=target.length){setRunning(false);setFinished(true);}
    },250);
    return ()=>window.clearInterval(timer);
  },[running,paused,startTime,seconds,marathon,typed.length,target.length]);
  useEffect(()=>{
    if(finished) {
      saveResult({mode:marathon?"10K Marathon":"Timed test",duration:elapsed,wpm:score.netWpm,accuracy:score.accuracy,errors:score.errors});
    }
  // save exactly when completion changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[finished]);
  function start(duration=seconds) {
    setSeconds(duration);setTyped("");setElapsed(0);setFinished(false);setPaused(false);
    setStartTime(Date.now());setRunning(true);setTimeout(()=>inputRef.current?.focus(),0);
  }
  function changeText(value:string) {
    if(finished) return;
    if(!running && value.length) {setStartTime(Date.now());setRunning(true);}
    setTyped(value.slice(0,target.length));
    if(marathon && value.length>=target.length){setRunning(false);setFinished(true);}
  }
  const remaining = marathon ? Math.max(0,target.length-typed.length) : Math.max(0,seconds-elapsed);
  return <div className="card">
    {!marathon && <><div className="row" style={{marginBottom:14}}>{presets.map(p=><button key={p.seconds} className={`btn ${seconds===p.seconds?"":"secondary"}`} onClick={()=>start(p.seconds)}>{p.label}</button>)}</div><form className="row" onSubmit={e=>{e.preventDefault();const n=Number(custom);if(Number.isFinite(n)&&n>=5&&n<=7200)start(n);}}><label htmlFor="custom-time">Custom seconds</label><input id="custom-time" className="field" style={{maxWidth:130}} type="number" min="5" max="7200" value={custom} onChange={e=>setCustom(e.target.value)}/><button className="btn secondary" type="submit">Set duration</button></form></>}
    <div className="grid">
      <div><div className="muted">{marathon?"Progress remaining":"Time remaining"}</div><div className="stat">{marathon?`${Math.max(0,10000-Math.floor(typed.trim().split(/\s+/).filter(Boolean).length))} words`:`${remaining}s`}</div></div>
      <div><div className="muted">Net WPM</div><div className="stat">{score.netWpm}</div></div>
      <div><div className="muted">Accuracy</div><div className="stat">{score.accuracy}%</div></div>
      <div><div className="muted">Errors</div><div className="stat">{score.errors}</div></div>
    </div>
    <div style={{marginTop:20}} className="typing-passage" aria-label="Typing passage">{target.slice(0, Math.max(500,typed.length+180)).split("").map((ch,i)=><span key={i} className={i<typed.length?(typed[i]===ch?"correct":"incorrect"):(i===typed.length?"current":"")}>{ch}</span>)}</div>
    <label htmlFor="typing-input" style={{display:"block",fontWeight:700,margin:"18px 0 8px"}}>Type the passage here</label>
    <textarea id="typing-input" ref={inputRef} className="field" rows={5} value={typed} onChange={e=>changeText(e.target.value)} disabled={finished} placeholder="Click here and start typing..." spellCheck={false}/>
    <div className="row" style={{marginTop:14}}>
      <button className="btn" onClick={()=>start(seconds)}>{finished?"Try again":"Restart test"}</button>
      {running && !marathon && <button className="btn secondary" onClick={()=>{setRunning(false);setPaused(true);}}>Pause</button>}
      {paused && <button className="btn secondary" onClick={()=>{setStartTime(Date.now()-elapsed*1000);setPaused(false);setRunning(true);}}>Resume</button>}
      <span className="muted">{typed.length} characters typed · {elapsed}s elapsed</span>
    </div>
    {finished && <div style={{marginTop:20}}><h3>Test complete</h3><p className="muted">Net speed: {score.netWpm} WPM · Accuracy: {score.accuracy}% · Errors: {score.errors}. Your result was saved in this browser.</p></div>}
  </div>;
}
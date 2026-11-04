"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { buildTypingDocument, typingPacks, WORD_LENGTHS } from "@/lib/typing-library";
import { calculateScore } from "@/lib/scoring";
import { saveResult } from "@/lib/progress";

const presets=[{label:"30 sec",seconds:30},{label:"1 min",seconds:60},{label:"2 min",seconds:120},{label:"3 min",seconds:180},{label:"5 min",seconds:300},{label:"10 min",seconds:600},{label:"15 min",seconds:900},{label:"30 min",seconds:1800}];

export default function TypingTest({initialSeconds=60,marathon=false,customText}:{initialSeconds?:number;marathon?:boolean;customText?:string}) {
  const [packId,setPackId]=useState("adventure");
  const [wordLimit,setWordLimit]=useState(marathon?10000:200);
  const [seconds,setSeconds]=useState(initialSeconds);
  const [typed,setTyped]=useState("");
  const [running,setRunning]=useState(false);
  const [finished,setFinished]=useState(false);
  const [elapsed,setElapsed]=useState(0);
  const [custom,setCustom]=useState(String(initialSeconds));
  const [startTime,setStartTime]=useState<number|null>(null);
  const [paused,setPaused]=useState(false);
  const inputRef=useRef<HTMLTextAreaElement>(null);
  const pack=typingPacks.find(item=>item.id===packId)||typingPacks[0];
  const target=useMemo(()=>customText?.trim()?customText.trim().slice(0,120000):buildTypingDocument(pack,wordLimit),[customText,pack,wordLimit]);
  const paragraphs=useMemo(()=>target.split(/\n\s*\n/),[target]);
  const score=calculateScore(target,typed,elapsed);
  const typedWords=typed.trim()?typed.trim().split(/\s+/).length:0;
  const totalWords=target.trim().split(/\s+/).length;
  const currentParagraph=target.slice(0,typed.length).split(/\n\s*\n/).length-1;

  useEffect(()=>{
    if(!running||paused)return;
    const timer=window.setInterval(()=>{
      if(startTime===null)return;
      const nowElapsed=Math.floor((Date.now()-startTime)/1000);
      setElapsed(nowElapsed);
      if(!marathon&&nowElapsed>=seconds){setRunning(false);setFinished(true);}
      if(typed.length>=target.length){setRunning(false);setFinished(true);}
    },250);
    return ()=>window.clearInterval(timer);
  },[running,paused,startTime,seconds,marathon,typed.length,target.length]);

  useEffect(()=>{
    if(finished)saveResult({mode:customText?"Custom text":`${pack.title} · ${totalWords} words`,duration:elapsed,wpm:score.netWpm,accuracy:score.accuracy,errors:score.errors});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[finished]);

  function start(duration=seconds){
    setSeconds(duration);setTyped("");setElapsed(0);setFinished(false);setPaused(false);setStartTime(null);setRunning(false);
    window.setTimeout(()=>{setStartTime(Date.now());setRunning(true);inputRef.current?.focus();},0);
  }
  function changeText(value:string){
    if(finished)return;
    if(!running&&value.length){setStartTime(Date.now());setRunning(true);}
    const next=value.slice(0,target.length);setTyped(next);
    if(next.length>=target.length){setRunning(false);setFinished(true);}
  }
  const remaining=Math.max(0,seconds-elapsed);

  return <div className="card typing-workspace">
    <div className="typing-library-head"><div><span className="section-kicker">CURATED TYPING LIBRARY</span><h2>Choose what you want to type</h2><p className="muted">29 content options · paragraph-by-paragraph practice · up to 20,000 words</p></div><span className="pill">LIVE PRACTICE</span></div>
    {!customText&&<div className="typing-controls">
      <label>Content library<select className="field" value={packId} onChange={e=>{setPackId(e.target.value);setTyped("");setFinished(false);setRunning(false);setElapsed(0);}}>{typingPacks.map(item=><option key={item.id} value={item.id}>{item.title} — {item.category}</option>)}</select></label>
      <label>Document length<select className="field" value={wordLimit} onChange={e=>{setWordLimit(Number(e.target.value));setTyped("");setFinished(false);setRunning(false);setElapsed(0);}}>{WORD_LENGTHS.map(item=><option key={item.words} value={item.words}>{item.label}</option>)}</select></label>
    </div>}
    {!customText&&<p className="muted typing-description">{pack.description} Select a short passage for a quick test or a 20,000-word book-length session.</p>}
    {!marathon&&<div className="row typing-time-presets">{presets.map(p=><button key={p.seconds} className={`btn ${seconds===p.seconds?"":"secondary"}`} onClick={()=>start(p.seconds)}>{p.label}</button>)}<form className="row" onSubmit={e=>{e.preventDefault();const n=Number(custom);if(Number.isFinite(n)&&n>=5&&n<=7200)start(n);}}><input aria-label="Custom time in seconds" className="field custom-time" type="number" min="5" max="7200" value={custom} onChange={e=>setCustom(e.target.value)}/><button className="btn secondary" type="submit">Set time</button></form></div>}
    <div className="grid typing-stats">
      <div><div className="muted">Progress</div><div className="stat">{typedWords.toLocaleString()}<small> / {totalWords.toLocaleString()} words</small></div></div>
      <div><div className="muted">{marathon?"Elapsed time":"Time remaining"}</div><div className="stat">{marathon?`${Math.floor(elapsed/60)}m`:`${remaining}s`}</div></div>
      <div><div className="muted">Net WPM</div><div className="stat">{score.netWpm}</div></div>
      <div><div className="muted">Accuracy</div><div className="stat">{score.accuracy}%</div></div>
    </div>
    <div className="typing-progress-track"><i style={{width:`${Math.min(100,typed.length/Math.max(1,target.length)*100)}%`}}/></div>
    <div className="typing-document" aria-label="Typing document">
      {paragraphs.map((paragraph,pIndex)=>{
        const startOffset=paragraphs.slice(0,pIndex).reduce((sum,item)=>sum+item.length,0)+2*pIndex;
        return <p className={pIndex===currentParagraph?"typing-paragraph active-paragraph":"typing-paragraph"} key={pIndex}>{paragraph.split("").map((ch,index)=>{
          const absolute=startOffset+index;
          return <span key={index} className={absolute<typed.length?(typed[absolute]===ch?"correct":"incorrect"):(absolute===typed.length?"current":"")}>{ch}</span>;
        })}</p>;
      })}
    </div>
    <div className="typing-input-head"><label htmlFor="typing-input">Your typing area</label><span>Complete each paragraph, then continue to the next</span></div>
    <textarea id="typing-input" ref={inputRef} className="field typing-input" rows={7} value={typed} onChange={e=>changeText(e.target.value)} disabled={finished} placeholder="Click here and start typing. Press Enter twice between paragraphs..." spellCheck={false} autoCapitalize="off" autoCorrect="off"/>
    <div className="row typing-actions"><button className="btn" onClick={()=>start(seconds)}>{finished?"Try again":"Restart session"}</button>{running&&!marathon&&<button className="btn secondary" onClick={()=>{setRunning(false);setPaused(true);}}>Pause</button>}{paused&&<button className="btn secondary" onClick={()=>{setStartTime(Date.now()-elapsed*1000);setPaused(false);setRunning(true);}}>Resume</button>}<span className="muted">{typed.length.toLocaleString()} characters · {elapsed}s elapsed · {score.errors} errors</span></div>
    {finished&&<div className="auth-success typing-complete"><strong>Session complete.</strong> {score.netWpm} WPM · {score.accuracy}% accuracy · {totalWords.toLocaleString()} words. Your result was saved in this browser.</div>}
  </div>;
}

"use client";
import {useState} from "react";
import TypingTest from "@/components/TypingTest";
export default function CustomPracticePage(){
 const [text,setText]=useState("Paste your own story, article, poem, lesson or book chapter here. Separate paragraphs with a blank line.");
 const [active,setActive]=useState(false);
 return <main className="shell"><div className="kicker">CUSTOM PRACTICE</div><h1>Your text. Your training session.</h1><p className="muted">Paste any passage up to 120,000 characters. Paragraph breaks are preserved and the typing area follows your exact text.</p><section className="card custom-editor"><label htmlFor="custom-source">Paste your content</label><textarea id="custom-source" className="field" rows={9} value={text} onChange={e=>{setText(e.target.value);setActive(false);}} maxLength={120000}/><div className="row" style={{justifyContent:"space-between",marginTop:12}}><span className="muted">{text.length.toLocaleString()} / 120,000 characters</span><button className="btn btn-primary" onClick={()=>setActive(true)} disabled={!text.trim()}>Start this text</button></div></section>{active&&<TypingTest initialSeconds={300} customText={text}/>}</main>;
}

 "use client";
import {useEffect,useState} from "react";
import GuestGate from "@/components/GuestGate";
import {readResults} from "@/lib/progress";
export default function ProfilePage(){const [count,setCount]=useState(0);const [best,setBest]=useState(0);useEffect(()=>{const r=readResults();setCount(r.length);setBest(Math.max(0,...r.map(x=>x.wpm)));},[]);return <main className="shell"><div className="kicker">Your workspace</div><h1>Profile & progress</h1><div className="grid"><div className="card"><div className="muted">Saved attempts</div><div className="stat">{count}</div></div><div className="card"><div className="muted">Personal best net WPM</div><div className="stat">{best}</div></div></div><div style={{marginTop:20}}><GuestGate/></div></main>}
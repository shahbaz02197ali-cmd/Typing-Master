 "use client";
import { useEffect, useState } from "react";
import { createGuest, getGuest, type Guest } from "@/lib/guest";
export default function GuestGate() {
  const [guest,setGuest] = useState<Guest|null>(null);
  const [name,setName] = useState("");
  const [error,setError] = useState("");
  useEffect(()=>{ setGuest(getGuest()); },[]);
  function submit(e: React.FormEvent) {
    e.preventDefault(); setError("");
    try { const next = createGuest(name); setGuest(next); } catch (err) { setError(err instanceof Error ? err.message : "Unable to create guest."); }
  }
  if (guest) return <div className="card"><span className="pill">Guest profile</span><h3>Welcome, {guest.name}</h3><p className="muted">Your practice results are saved in this browser. Clearing browser data may remove them.</p><button className="btn secondary" onClick={()=>{localStorage.removeItem("typing-master-guest-v1");setGuest(null);}}>Change guest name</button></div>;
  return <form className="card" onSubmit={submit}><h3>Start as a guest</h3><p className="muted">No email or password required.</p><input className="field" value={name} onChange={e=>setName(e.target.value)} maxLength={24} minLength={2} placeholder="Your display name" aria-label="Display name" required/><div style={{height:10}}/>{error && <p role="alert" style={{color:"#d92d20"}}>{error}</p>}<button className="btn" type="submit">Create guest profile</button></form>;
}
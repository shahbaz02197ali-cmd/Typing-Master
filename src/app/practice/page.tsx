import type { Metadata } from "next";
import TypingTest from "@/components/TypingTest";

export const metadata: Metadata = {
  title: "Online Typing Practice – Improve Speed and Accuracy",
  description: "Build daily typing skills with online practice sessions, useful sentences and business-style text. Improve your typing speed and accuracy.",
  alternates: { canonical: "/practice" },
};

export default function PracticePage(){return <main className="shell"><div className="kicker">Practice room</div><h1>Free online typing practice</h1><p className="muted">Use this room to practice common sentences and business-style text. Procedural drills can be expanded as the reviewed content library grows.</p><TypingTest initialSeconds={300}/></main>}

import type { Metadata } from "next";
import TypingTest from "@/components/TypingTest";

export const metadata: Metadata = {
  title: "Free Typing Speed Test Online – WPM and Accuracy",
  description: "Take a free online typing speed test. Measure words per minute (WPM), accuracy and errors with flexible timed typing sessions.",
  alternates: { canonical: "/test" },
};

export default function TestPage(){return <main className="shell"><div className="kicker">Typing test</div><h1>Free typing speed test</h1><p className="muted">Choose a duration, type the passage, and review your speed, accuracy and errors.</p><TypingTest/></main>}

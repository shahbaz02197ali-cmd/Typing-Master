import type { Metadata } from "next";
import TypingTest from "@/components/TypingTest";
export const metadata: Metadata = {title:"Online Typing Practice – Stories, Poems and Long Books",description:"Practice with 29 curated stories, poems, essays, articles and book-length passages from 200 to 20,000 words.",alternates:{canonical:"/practice"}};
export default function PracticePage(){return <main className="shell"><div className="kicker">PRACTICE LIBRARY</div><h1>Typing practice for every kind of reader</h1><p className="muted">Choose stories, poems, articles, essays, workplace writing and long-form books. Every document is divided into clear paragraphs, from 200 up to 20,000 words.</p><TypingTest initialSeconds={300}/></main>}

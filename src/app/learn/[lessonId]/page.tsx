import Link from "next/link";
import {notFound} from "next/navigation";
import {lessons} from "@/lib/content";
import TypingTest from "@/components/TypingTest";
export function generateStaticParams(){return lessons.map(l=>({lessonId:l.id}));}
export default async function LessonPage({params}:{params:Promise<{lessonId:string}>}){const {lessonId}=await params;const lesson=lessons.find(l=>l.id===lessonId);if(!lesson)notFound();return <main className="shell"><Link href="/learn" className="muted">← All lessons</Link><div className="kicker" style={{marginTop:20}}>{lesson.level} lesson</div><h1>{lesson.title}</h1><p className="muted">{lesson.description}</p><div className="card"><p><b>Key focus:</b> {lesson.keys}</p><p>{lesson.text}</p><TypingTest initialSeconds={60}/></div></main>}
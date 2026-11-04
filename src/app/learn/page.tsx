import type { Metadata } from "next";
import BeginnerLesson from "@/components/BeginnerLesson";

export const metadata: Metadata = {
  title: "Step-by-Step Typing Lessons for Beginners",
  description: "Learn touch typing from your first key to the full alphabet with simple guided practice.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() { return <BeginnerLesson />; }

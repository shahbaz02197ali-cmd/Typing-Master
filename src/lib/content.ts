export type Lesson = { id: string; title: string; level: string; description: string; keys: string; text: string };
export const lessons: Lesson[] = [
  {id:"home-row",title:"Home row basics",level:"Beginner",description:"Learn the home row and return your fingers to the starting position.",keys:"A S D F J K L ;",text:"asdf jkl; asdf jkl; fj fj dk dk sl sl a sad lad asks"},
  {id:"left-top",title:"Top row — left hand",level:"Beginner",description:"Practice Q, W, E, R and T with controlled movement.",keys:"Q W E R T",text:"we were quiet; write a great word; tree, water, west"},
  {id:"right-top",title:"Top row — right hand",level:"Beginner",description:"Practice Y, U, I, O and P.",keys:"Y U I O P",text:"you enjoy your input; our point is to improve"},
  {id:"bottom-row",title:"Bottom row",level:"Beginner",description:"Build confidence with the bottom-row letters.",keys:"Z X C V B N M",text:"mix, box, cabin, move, brave, maximum, calm"},
  {id:"all-letters",title:"All letters",level:"Beginner",description:"Combine all letters into short, useful sentences.",keys:"A–Z",text:"Quick brown foxes jump over lazy dogs. Practice makes progress."},
  {id:"capitals",title:"Capital letters",level:"Intermediate",description:"Use Shift for capital letters and names.",keys:"Shift + letters",text:"Monday, Friday, London, Pakistan, Typing Master."},
  {id:"punctuation",title:"Punctuation",level:"Intermediate",description:"Practice commas, periods, apostrophes and question marks.",keys:", . ' ?",text:"Hello, Sara. How are you? I'm ready; let's begin."},
  {id:"numbers",title:"Numbers and symbols",level:"Intermediate",description:"Practice numbers and common symbols carefully.",keys:"0–9 @ # %",text:"Invoice 2026: 24 items, $125.50 each; total = $3,012."},
  {id:"office-email",title:"Office email practice",level:"Advanced",description:"Type professional workplace text with punctuation.",keys:"Business writing",text:"Hello team,\\nPlease review the attached report and share your feedback by Friday. Thank you for your time."},
  {id:"data-entry",title:"Data entry practice",level:"Advanced",description:"Practice accurate dates, codes and structured information.",keys:"Numbers + punctuation",text:"Order ID: TM-2048 | Date: 2026-11-03 | Status: Complete | Qty: 18"}
];
export const passages = [
  "Typing is a skill that improves with focused practice. Start slowly, keep your hands relaxed, and aim for accuracy before speed. Small daily sessions build confidence over time.",
  "A reliable workflow depends on clear communication, careful data entry, and consistent review. Check each detail before submitting your work, especially dates, names, amounts, and reference numbers.",
  "Technology helps people learn, collaborate, and solve practical problems. The best tools are useful, accessible, secure, and easy to understand. Keep learning and measure progress honestly."
];
export function makePracticeText(words = 180): string {
  const source = passages.join(" ").replace(/\s+/g, " ").split(" ");
  return Array.from({length: Math.max(1, words)}, (_, i) => source[(i * 7 + Math.floor(i / source.length)) % source.length]).join(" ");
}
export const marathonText = makePracticeText(10000);

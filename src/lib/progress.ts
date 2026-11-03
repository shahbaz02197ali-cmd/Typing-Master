export type SavedResult = { id: string; mode: string; duration: number; wpm: number; accuracy: number; errors: number; date: string };
const RESULTS = "typing-master-results-v1";
export function readResults(): SavedResult[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(RESULTS) || "[]") as SavedResult[]; } catch { return []; }
}
export function saveResult(result: Omit<SavedResult, "id" | "date">): SavedResult {
  const full = {...result, id: crypto.randomUUID(), date: new Date().toISOString()};
  const next = [full, ...readResults()].slice(0, 200);
  localStorage.setItem(RESULTS, JSON.stringify(next));
  return full;
}
export function saveCheckpoint(key: string, data: unknown) { localStorage.setItem(`typing-master-checkpoint-${key}`, JSON.stringify(data)); }
export function readCheckpoint<T>(key: string): T | null {
  try { return JSON.parse(localStorage.getItem(`typing-master-checkpoint-${key}`) || "null") as T | null; } catch { return null; }
}

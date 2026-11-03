export type Guest = { id: string; name: string; createdAt: string };
const KEY = "typing-master-guest-v1";
export function getGuest(): Guest | null {
  if (typeof window === "undefined") return null;
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) as Guest : null; } catch { return null; }
}
export function createGuest(name: string): Guest {
  const clean = name.trim().replace(/\s+/g, " ").slice(0, 24);
  if (clean.length < 2) throw new Error("Please enter a name with at least 2 characters.");
  const guest = { id: crypto.randomUUID(), name: clean, createdAt: new Date().toISOString() };
  localStorage.setItem(KEY, JSON.stringify(guest));
  return guest;
}

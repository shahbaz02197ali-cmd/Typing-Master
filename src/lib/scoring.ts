export type Score = {
  elapsedSeconds: number; typedCharacters: number; correctCharacters: number;
  errors: number; accuracy: number; grossWpm: number; netWpm: number;
};
export function calculateScore(target: string, typed: string, elapsedSeconds: number): Score {
  const safeSeconds = Math.max(1, elapsedSeconds);
  const length = Math.min(typed.length, target.length);
  let correct = 0;
  for (let i = 0; i < length; i++) if (typed[i] === target[i]) correct++;
  const errors = Math.max(0, typed.length - correct);
  const minutes = safeSeconds / 60;
  const grossWpm = Math.round((typed.length / 5 / minutes) * 10) / 10;
  const netWpm = Math.round(Math.max(0, grossWpm - errors / minutes) * 10) / 10;
  const accuracy = typed.length === 0 ? 100 : Math.round((correct / typed.length) * 1000) / 10;
  return { elapsedSeconds: safeSeconds, typedCharacters: typed.length, correctCharacters: correct, errors, accuracy, grossWpm, netWpm };
}

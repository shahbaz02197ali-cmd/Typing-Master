import {describe,expect,it} from "vitest";
import {calculateScore} from "./scoring";
describe("calculateScore",()=>{
  it("returns full accuracy for exact text",()=>{const s=calculateScore("hello","hello",60);expect(s.accuracy).toBe(100);expect(s.errors).toBe(0);expect(s.grossWpm).toBe(1);});
  it("counts incorrect characters",()=>{const s=calculateScore("hello","hallo",60);expect(s.errors).toBe(1);expect(s.accuracy).toBe(80);});
  it("guards against zero elapsed time",()=>{const s=calculateScore("abc","abc",0);expect(Number.isFinite(s.netWpm)).toBe(true);});
});
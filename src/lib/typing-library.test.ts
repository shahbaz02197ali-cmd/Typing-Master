import { describe, expect, it } from "vitest";
import { buildTypingDocument, typingPacks, WORD_LENGTHS } from "./typing-library";

describe("curated typing library", () => {
  it("offers at least twenty selectable content packs", () => {
    expect(typingPacks.length).toBeGreaterThanOrEqual(20);
  });

  it("covers short practice through a 20,000-word book-length session", () => {
    expect(WORD_LENGTHS.map(item => item.words)).toContain(200);
    expect(WORD_LENGTHS.map(item => item.words)).toContain(20000);
  });

  it("builds the exact requested word count and keeps paragraphs separate", () => {
    const document = buildTypingDocument(typingPacks[0], 200);
    expect(document.trim().split(/\s+/)).toHaveLength(200);
    expect(document).toContain("\n\n");
  });

  it("can create a 20,000-word document without truncating it", () => {
    const document = buildTypingDocument(typingPacks[0], 20000);
    expect(document.trim().split(/\s+/)).toHaveLength(20000);
  });
});

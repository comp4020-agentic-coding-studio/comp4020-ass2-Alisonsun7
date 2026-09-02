import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const pages = [
  "dist/index.html",
  "dist/sessions/index.html",
  "dist/assessments/index.html",
  "dist/lectures/index.html",
  "dist/people/index.html",
  "dist/policies/index.html",
];

describe("page structure", () => {
  it.each(pages)("%s has exactly one visible h1", (page) => {
    const html = readFileSync(resolve(page), "utf8");
    const matches = html.match(/<h1[ >]/g) ?? [];
    expect(matches).toHaveLength(1);
  });
});

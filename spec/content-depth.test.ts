import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

const weekNumbers = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));

function walkHtmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

// A phrase this specific, in this exact wording, only shows up if it was
// copied from starter-author instructions rather than rewritten as course
// content — the same class of bug fixed in commit f8d44fa.
const starterPhrases = [
  "Weights should sum to 100.",
  "Lorem ipsum",
  "TODO:",
  "Replace this",
  "placeholder text",
];

describe("session pages have real depth", () => {
  it("builds exactly 12 session pages, one per week", () => {
    const paths = weekNumbers.map((week) => resolve(`dist/sessions/week-${week}/index.html`));
    for (const path of paths) {
      expect(existsSync(path), `${path} does not exist`).toBe(true);
    }
  });

  it.each(weekNumbers)("week %s has substantive structure, not a stub", (week) => {
    const html = readFileSync(resolve(`dist/sessions/week-${week}/index.html`), "utf8");
    const headings = html.match(/<h2[ >]/g) ?? [];
    expect(headings.length, `week-${week} has only ${headings.length} <h2> sections`).toBeGreaterThanOrEqual(8);
  });
});

describe("lecture and deck coverage", () => {
  it("publishes at least three lecture pages", () => {
    expect(byType("lectures").length).toBeGreaterThanOrEqual(3);
  });

  it("builds at least three deck routes on disk", () => {
    const decksDir = resolve("dist/decks");
    const routes = readdirSync(decksDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
    expect(routes.length).toBeGreaterThanOrEqual(3);
  });

  it.each(["week-04", "week-10"])("the %s deck has at least 20 slides", (deck) => {
    const html = readFileSync(resolve(`dist/decks/${deck}/index.html`), "utf8");
    const slides = html.match(/<section/g) ?? [];
    expect(slides.length).toBeGreaterThanOrEqual(20);
  });
});

describe("no leftover starter copy", () => {
  it("scans every built page for known starter/template phrases", () => {
    const pages = walkHtmlFiles(resolve("dist"));
    for (const page of pages) {
      const html = readFileSync(page, "utf8");
      for (const phrase of starterPhrases) {
        expect(html.includes(phrase), `${page} still contains "${phrase}"`).toBe(false);
      }
    }
  });
});

describe("hypothetical examples stay labelled", () => {
  it.each(["week-05", "week-06", "week-10"])("session %s labels its invented numbers as hypothetical", (week) => {
    const html = readFileSync(resolve(`dist/sessions/${week}/index.html`), "utf8");
    expect(html.toLowerCase()).toContain("hypothetical");
  });

  it.each(["week-04", "week-10"])("the %s deck labels its invented numbers as hypothetical", (deck) => {
    const html = readFileSync(resolve(`dist/decks/${deck}/index.html`), "utf8");
    expect(html.toLowerCase()).toContain("hypothetical");
  });
});

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  body?: string;
}

interface CourseApi {
  course: {
    code: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("curriculum integrity", () => {
  it("has exactly twelve sessions, weeks 1 through 12, each appearing once", () => {
    const sessions = byType("sessions");
    expect(sessions).toHaveLength(12);
    const weeks = sessions.map((node) => node.meta?.week).sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("sums assessment weights to exactly 100", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("uses the assigned course code", () => {
    expect(api.course.code).toBe("SLOP3746");
  });

  it("gives at least one lecture a slide deck", () => {
    const lectures = byType("lectures");
    const withSlides = lectures.filter((node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0);
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });

  it("only lets sessions build on strictly earlier weeks", () => {
    const sessions = byType("sessions");
    for (const node of sessions) {
      const week = Number(node.meta?.week);
      const buildsOn = (node.meta?.buildsOn as number[] | undefined) ?? [];
      for (const earlier of buildsOn) {
        expect(earlier, `${node.id} lists ${earlier} in buildsOn`).toBeLessThan(week);
      }
    }
  });
});

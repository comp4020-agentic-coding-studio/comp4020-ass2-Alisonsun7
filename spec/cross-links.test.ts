import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  related: string[];
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("cross-links", () => {
  it("gives every teaching week at least one related entry", () => {
    for (const node of byType("sessions")) {
      expect(node.related.length, `${node.id} has no related entries`).toBeGreaterThan(0);
    }
  });

  it("gives every staff member at least one related entry", () => {
    for (const node of byType("people")) {
      expect(node.related.length, `${node.id} has no related entries`).toBeGreaterThan(0);
    }
  });
});

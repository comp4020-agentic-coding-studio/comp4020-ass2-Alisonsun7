# Project

This repository is the COMP4020 Agentic Coding Studio Assignment 2 project.
It implements a fictional Slop University course website:

**How to Never Pay Full Price**

The premise may be unusual, but the result must feel like a legitimate university
course: rigorous in its reasoning and coherent across the semester.

Read `README.md` and the published assignment brief and specification before
planning major structural changes.

## Repository first

Before changing an unfamiliar part of the repository:

- Inspect the repository structure and relevant files.
- Read `package.json` before assuming scripts or commands exist.
- Inspect the starter content model, routes, components, styles, tests, and `spec/`.
- Preserve useful starter infrastructure unless there is a concrete reason to
  change it.
- Prefer adapting the existing architecture over replacing it.
- Do not remove assignment checks because they are inconvenient.
- Never assume an unverified framework, filename, command, or schema.

## Course invariants

The course progresses through:

**SEE → CALCULATE → DECIDE**

Its central idea is not:

> Find the lowest number.

It is:

> Understand what a price means, calculate what a decision actually costs, and
> know when an apparent bargain is not the better choice.

Non-negotiable structural requirements:

- Exactly 12 dated teaching weeks.
- Assessment weights total exactly 100%.
- Preserve the required SlopU course code from the starter.
- At least one genuine, usable lecture slide deck.
- Week dependencies may only point to earlier weeks.
- The site must feel like one coherent course, not disconnected demos.

Detailed curriculum and assessment requirements live in `docs/course-spec.md`.
Use the `course-authoring` skill when changing course content.

## Evidence

- Never fabricate statistics, research, historical prices, company behaviour,
  laws, quotes, citations, datasets, test results, development history, or
  process evidence.
- Clearly distinguish hypothetical teaching examples from sourced claims.
- If a real-world claim cannot be verified, rewrite it as explicitly hypothetical.

## Engineering principles

- Interactions must teach a course concept, not exist only as decoration.
- Prefer fewer polished interactions over many shallow widgets.
- Preserve accessibility and responsive behaviour.
- Test meaningful structural promises rather than brittle marketing wording.
- Use only repository scripts that actually exist.
- Fix check failures rather than bypassing them.

Use the project skills when their task descriptions apply:

- `course-authoring`: curriculum, teaching material, weeks, and assessments.
- `frontend-design`: pages, visual design, calculators, and interactions.
- `verify-site`: repository checks, browser QA, responsive QA, and release checks.
- `process-review`: project-wide planning, milestones, commits, and `PROCESS.md`.

## Git and process integrity

- Prefer coherent milestone commits over one giant final commit.
- `PROCESS.md` must describe events that actually occurred.
- Never invent failures, decisions, commit hashes, or process discoveries.

## Decision principle

When choosing between implementations, prefer the one that communicates the
course's central idea more clearly.

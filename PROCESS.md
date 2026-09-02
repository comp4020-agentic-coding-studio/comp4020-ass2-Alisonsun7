# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

**How to Never Pay Full Price** (SLOP3746): a 12-week fictional SlopU course
that runs one purchase — a pair of $249 headphones — through a SEE →
CALCULATE → DECIDE arc, three assessments weighted 20/30/50, a real Week 1
slide deck, and three interactive tools built deep rather than many built
shallow: a homepage reference-price challenge, a Week 2 unit-price calculator
that separates "cheapest per pack unit" from "cheapest per unit you'll
actually use," and a Week 11 buy-or-wait tool that deliberately collects hours
already spent researching and then ignores them, to make the sunk-cost point
land as an interaction rather than a paragraph.

## How I got here

The starter repo arrived as a working but generic course template — I read
`package.json`, `src/content.config.ts` and `scripts/check-evidence.ts` before
writing anything, since the brief warned against inventing commands or
schemas the repo doesn't have. I scoped the interactive work early: three
polished tools over six shallow ones, and code-generated hero/card art via
`sharp` (already a dependency) rather than fabricated stock photos, with the
two staff photos removed outright rather than faked —
[`5e8b5ae`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/5e8b5ae)
lays down all twelve weeks, both lectures, the deck, all three assessments and
the people pages together, and
[`270c994`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/270c994)
adds the generated art and real homepage/policies copy.

Two real snags came out of that second commit. `course-config.ts`'s schema
caps the course description at 300 characters; my first draft was 329, and
`astro check` caught it before it ever reached a browser. More instructively,
I initially added the receipt/price-tag CSS as a `<style is:global>` block in
`src/layouts/PageLayout.astro`, assuming "the page layout" was global — a
`grep` for its usage showed it only backs loose MDX pages like `/policies/`,
while session/lecture/assessment/people routes use `ContentLayout` directly.
I moved the stylesheet to `src/styles/visual-identity.css` and registered it
through `brandCss` in `astro.config.ts`, which the theme injects into every
page.

[`c692d3e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/c692d3e)
adds `spec/curriculum-integrity.test.ts` alongside the starter's
`data-integrity` test: exactly 12 unique weeks, assessment weights summing to
100, the assigned course code, at least one lecture with slides, and
`buildsOn` only ever pointing backwards.

Manual review at both marking viewports — desktop, and a 390×844 iframe
harness verified against a media-query probe before I trusted it, per this
repo's carried-forward Crit 5 notes — surfaced two real bugs fixed in
[`ec94ccd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/ec94ccd):
the hero image baked in its own headline text, which collided with the
theme's own overlaid page title once the image was cropped to the hero
band's actual height; and `sessions/[slug].astro` built page titles as
`Week N Week: <title>`, doubling up since every session title already opens
with "Week N — ". Both were only visible by actually rendering the site, not
by reading the code.

`pnpm check` and `pnpm check:evidence` are green as of this file.

## Second pass: auditing what markers actually sample

A later pass targeted specifically what a marker samples rather than what I
happened to write last: homepage, two non-adjacent weeks, an assessment page,
the deck, and policies, at both viewports. I audited the built `dist/` output
directly instead of re-reading source and assuming it matched, which found
two classes of real bug source-reading alone would have missed.

First,
[`f8d44fa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/f8d44fa):
`grep -c "<h1"` across every listing page showed `assessments/index.html`,
`lectures/index.html` and `people/index.html` at zero — `heroTitle` in their
frontmatter looked like it should produce a heading, but `BaseLayout` only
renders one when both `heroTitle` and a resolved `heroImage` are set, so the
condition was always false. Two of those three pages also still carried
unrewritten starter-author instructions ("Weights should sum to 100.") as
visible body text. Fixed by dropping the dead key, adding a real heading, and
rewriting the copy; a new spec test reads the built HTML so a missing h1
fails `pnpm check` rather than waiting for another visual sweep.

Second,
[`22dbc95`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/22dbc95):
`dist/api/index.json` showed six weeks and both staff entries with
`related: []`, so their pages had no Related section even though several
weeks' own closing paragraphs already name the next week. While fixing the
two people entries I found the actual cause was one level deeper than
content: `src/content.config.ts`'s `people` schema is its own `z.object`
that never extended `courseNodeSchema` and isn't `.loose()`, so Zod silently
dropped `related:` frontmatter before it ever reached the page — invisible
from the API JSON alone, because that's generated by a separate script that
reads frontmatter directly rather than through the same schema. The
`people/[slug].astro` template also never rendered `RelatedContent` at all,
unlike every other graph collection. All three needed fixing before a
`related:` edge on a person's page actually showed up rendered, which is why
a screenshot comparison against the API JSON — not just the JSON alone —
caught it. A new spec test now asserts every session and person has a
non-empty `related` list in the built API.

`pnpm check` and `pnpm check:evidence` are green as of this file.

# Process overview

I built **How to Never Pay Full Price** as a SlopU course about one narrow
question: what does a price actually mean when discounts, quantity, time,
uncertainty and personal constraints are all part of the decision? My main
course-design call was to avoid a generic personal-finance or bargain-hunting
site. The semester follows one recurring $249 headphones purchase through a
SEE -> CALCULATE -> DECIDE arc, so students first distrust the sticker price,
then model effective cost, then decide when the lowest number is not the best
answer.

I started by making the harness do some of the directing, not just the agent. I
carried forward the habit of reading the repo before changing it, then wrote
`CLAUDE.md` around four rules: inspect the starter architecture, preserve the
assigned course code and SlopU platform, keep the SEE/CALCULATE/DECIDE thesis
visible, and never fabricate evidence or real-world price claims. The first
large build,
[`5e8b5ae`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/5e8b5ae),
used that frame to replace the starter content with 12 dated weeks, three
assessments totalling 100%, lectures, people pages, a Week 1 deck, and three
interactions. I deliberately asked for fewer interactive tools, built deeper,
because a unit-price calculator or buy-or-wait model teaches the course better
than a pile of decorative widgets.

The next question was what deserved to become a check. A good course, to me,
is not just complete; it has promises that should keep failing if future edits
break them. So
[`c692d3e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/c692d3e)
added `spec/curriculum-integrity.test.ts` for the mechanical promises: exactly
12 weeks, the assigned SLOP3746 code, assessment weights adding to 100, at
least one real slide deck, and week dependencies only pointing backwards.
Those checks do not judge whether the prose is compelling, but they protect
the structure that lets a human read the course as one coherent semester.

Manual review mattered because several real problems were not visible from
source alone.
[`ec94ccd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/ec94ccd)
fixed hero/title collisions and doubled week titles found only after rendering
at the marking viewports. A later built-site audit found listing pages with no
`h1` and leftover starter instructions; that became a regression test in
[`f8d44fa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/f8d44fa).
Then the generated API showed empty `related` lists, but the deeper issue was
that the people schema dropped `related:` before pages could render it.
[`22dbc95`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/22dbc95)
fixed the schema/template path and added a cross-link check.

The final passes were about depth rather than feature count.
[`18d7538`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/18d7538)
gave every week outcomes, preparation, in-class work and a clearer exit point,
so the course read less like 12 articles and more like teaching. I then added
Week 4 and Week 10 lecture decks in
[`c029426`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/c029426)
and
[`6eb9edc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/6eb9edc),
covering CALCULATE and DECIDE instead of leaving lectures concentrated in the
opening stage. Finally,
[`47e03c8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/47e03c8)
and
[`38c3fbc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Alisonsun7/commit/38c3fbc)
made the receipt/price-tag language and hypothetical-number caveats consistent
across the course. `pnpm check` and `pnpm check:evidence` are green as of this
version.

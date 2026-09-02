---
title: "Week 5 — The Price Has a History"
description:
  A single snapshot price can't be judged in isolation. This week treats
  price as a function of time, and introduces baselines, medians and
  volatility as tools for reading it.
week: 5
date: 2026-08-24
teachers:
  - marisol-quaye
tags: ["stage-calculate", "price-history"]
buildsOn: [1, 3]
spec:
  - represents price as a function of time, not a single fixed value
  - distinguishes a median baseline from a single historical reference price
  - explains why a hypothetical price series must be labelled as hypothetical
related:
  - sessions/week-06
---

## Core question

> Can today's price be judged without knowing yesterday's price?

Week 3 asked where a reference price came from. This week generalises the
question: instead of one prior number, look at the whole series. A price is
better modelled as `P(t)` — a function of time — than as a constant with an
occasional discount applied to it.

## Baselines, medians, and volatility

- A **baseline** built from one past price (as in Week 3) is fragile: it can
  be cherry-picked to flatter almost any current price.
- A **median** over a longer window is harder to game, because moving it
  requires moving many prices, not printing one convenient one.
- **Volatility** — how much the price moves around that median — tells you
  whether today's number is typical or an outlier, in either direction.

A price that has sat at $249 for eleven of the last twelve months and spiked
to $299 once is a very different object from a price that has bounced
between $220 and $310 all year. The single number "$249" cannot distinguish
these; the series can.

## Hypothetical vs sourced

This course does not have access to a real retailer's historical pricing
data, and inventing a chart that looks like one would misrepresent it as
evidence. Any price series used for teaching in this course is explicitly
labelled **hypothetical** — a plausible shape used to demonstrate the
reasoning, not a claim about what any real product has cost. See
[Policies](/policies/#hypothetical-vs-sourced-examples) for how this course
draws that line generally.

## The $249 headphones

Hypothetically: suppose the headphones' price over the past six months
looked like a mostly flat line around $249, with a two-week dip to $219
around a mid-year sale event, and no time spent above $260. Against that
shape, $249 reads as an ordinary day, not a deal and not a markup — which is
a more useful judgement than anything a single "was $329" badge could
provide. (This series is invented for the example; treat it as
illustrative, not as a real sales record for any real product.)

## Where this goes

Week 6 asks what happens once the price a person sees can depend on who they
are, not just on what day it is.

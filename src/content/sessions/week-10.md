---
title: "Week 10 — Should You Wait?"
description:
  Waiting for a better price is a bet, not a guarantee. This week introduces
  expected value as the tool for deciding whether the bet is worth it.
week: 10
date: 2026-09-28
teachers:
  - idris-fenn
tags: ["stage-decide", "uncertainty"]
buildsOn: [5, 6, 9]
spec:
  - defines expected value in terms of probability and size of a future discount
  - names stock-out risk and urgency as costs of waiting, not just as inconveniences
  - explicitly avoids claiming that future prices can be predicted with certainty
related:
  - sessions/week-11
---

## Core question

> When does waiting for a better price become rational?

Week 5 showed price moving over time; Week 6 showed it responding to
context. Put together, next month's price is not knowable — but it is
**estimable**. Waiting is a bet on a distribution of possible future prices,
and like any bet, it can be evaluated even though the outcome is uncertain.

## Expected value

The expected benefit of waiting is not "the discount, if it happens" — it's
the discount, discounted again by how likely it is to happen:

`expected saving = probability(better deal) × size of that deal`

A 10% chance of a 40% discount has a smaller expected saving than a 50%
chance of a 15% discount, even though the first sounds more dramatic. This
is the same reference-price discipline as Week 3: the size of a hoped-for
discount means little without also weighing how likely it actually is.

## What waiting costs

Waiting is not free just because no money changes hands during it:

- **Stock-out risk** — the item, or this specific model, may not be
  available at any price by the time you'd act.
- **Urgency** — if it's needed by a fixed date, the window to wait may be
  shorter than the window a "maybe" discount needs to appear in.
- **The value of having it now** — a want satisfied today is not
  interchangeable with the same want satisfied in six weeks, independent of
  price.

None of these can be predicted with certainty, and this course makes no
claim to forecast them precisely — the goal is to reason about them
explicitly rather than ignore them because they're hard to quantify.

## The $249 headphones

A shopper hears that this model "usually" goes on sale around a known annual
event, six weeks away. That's a genuine input — a probability and a rough
discount size can be estimated from it — but it is not a promise. Week 11
turns this exact situation into a calculator: given a price, a rough
probability, a rough discount size, and how much the wait itself would cost,
should this shopper wait or buy today?

## Where this goes

Week 11 adds the missing piece: waiting isn't free even when the wallet
doesn't notice, because time itself has a price.

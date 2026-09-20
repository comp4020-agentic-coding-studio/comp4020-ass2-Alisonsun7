---
title: "Week 10 — Should You Wait?"
description: >-
  Waiting for a better price is a bet, not a guarantee. This week introduces
  expected value: a simple way to combine the chance of a discount with the
  size of that discount.
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
  - gives one concrete before-class task and one in-class activity tied to the week's topic
related:
  - sessions/week-11
  - lectures/week-10
---

## Core question

> When does it make sense to wait for a better price?

Week 5 showed price moving over time; Week 6 showed it responding to
context. Put together, next month's price cannot be known for sure, but you
can still make a reasonable estimate. Waiting is a bet on possible future
prices, and you can judge that bet even when the outcome is uncertain.

## Expected value

The expected benefit of waiting is not "the discount, if it happens" — it's
the discount adjusted by how likely it is to happen:

`expected saving = probability(better deal) × size of that deal`

A 10% chance of a 40% discount has a smaller expected saving than a 50%
chance of a 15% discount, even though the first sounds more dramatic. This
is the same reference-price discipline as Week 3: the size of a hoped-for
discount means little unless you also ask how likely it is.

## What waiting costs

Waiting is not free just because no money changes hands during it:

- **Stock-out risk** — the item, or this specific model, may not be
  available at any price by the time you'd act.
- **Urgency** — if it's needed by a fixed date, the window to wait may be
  shorter than the window a "maybe" discount needs to appear in.
- **The value of having it now** — a want satisfied today is not
  interchangeable with the same want satisfied in six weeks, independent of
  price.

None of these can be predicted perfectly. The goal is not to forecast the
future exactly; it is to make these costs visible instead of ignoring them.

## The $249 headphones

Hypothetically: a shopper hears that this model "usually" goes on sale
around a known annual event, six weeks away. That's a genuine input — a
probability and a rough discount size can be estimated from it — but it is
not a promise, and this course makes no claim about any real product's
actual future price. Week 11 turns this exact situation into a calculator:
given a price, a rough probability, a rough discount size, and how much the
wait itself would cost, should this shopper wait or buy today?

<p class="caveat">The rumoured sale is invented for this example. This course
makes no claim about any real product's future price, and a shopper's
"usually" is an impression, not a dataset.</p>

## Learning outcomes

By the end of this week, you should be able to:

- define expected value in terms of the probability and size of a future
  discount
- compute expected saving from waiting given a stated probability and
  discount size
- name stock-out risk and urgency as real costs of waiting, distinct from
  the money saved
- explain why future prices can be estimated but not known in advance
- decide, given a stated set of assumptions, whether the expected saving
  clears a stated bar for waiting

## Before class

Think of one purchase you're currently, or recently were, putting off in
the hope of a better price, and write down your honest best guesses for:
how likely a discount is in the timeframe you'd wait, and roughly how large
it would be.

## In class

Using the numbers you brought, compute expected saving as probability
times discount size, then decide as a group whether that number is big
enough to justify waiting — and state explicitly what would have to
change, in probability, size, or urgency, to flip your answer.

## What you should leave knowing

Waiting is a bet you can calculate roughly. A small, likely discount can be
better than a large, unlikely one, and neither is guaranteed.

This week has a full lecture — [Lecture 4: Should You
Wait?](/lectures/week-10/), whose [slide deck](/decks/week-10/) walks
through the expected-value calculation above in detail, and whose
reasoning feeds directly into [Assessment 3, Build a Buying
Engine](/assessments/build-a-buying-engine/).

<hr class="receipt-divider" />

## Where this goes

Week 11 adds the missing piece: waiting isn't free even when the wallet
doesn't notice, because time itself has a price.

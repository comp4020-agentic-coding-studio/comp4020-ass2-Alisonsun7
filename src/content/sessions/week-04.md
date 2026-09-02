---
title: "Week 4 — Coupons Are Algorithms"
description:
  Thresholds, exclusions, stacking and bundles turn a shopping cart into a
  constraint-satisfaction problem, not a place to apply tricks.
week: 4
date: 2026-08-17
teachers:
  - idris-fenn
tags: ["stage-calculate", "coupons"]
buildsOn: [3]
spec:
  - models a discount rule as a function with explicit inputs and conditions, not a trick
  - names at least one way combining discounts can produce a worse outcome than using one alone
  - distinguishes a threshold discount from an exclusion and from a stacking rule
related: []
---

## Core question

> When discounts have rules, how should they be combined?

A single reference price (Week 3) is one comparison. A cart with a coupon,
a spend threshold, a category exclusion, and a free-shipping cutoff is
several comparisons stacked on top of each other, each with its own
condition. Treat each rule as a small function — inputs in, a discount or a
refusal out — rather than as a trick to be discovered.

## Thresholds and exclusions

- **Threshold:** "$10 off orders over $50" only pays out once the condition
  is met — spending $49 to avoid it gets you nothing, spending $51 wastes $1
  of headroom you didn't need.
- **Exclusion:** "20% off, excludes sale items" means the coupon's real
  scope is smaller than its headline. The applicable subtotal, not the cart
  subtotal, is what the percentage should be computed against.

## Stacking and bundles

Some platforms let a spend-threshold coupon and a category coupon apply
together; many explicitly forbid it, and a few apply only the larger of the
two. None of this is guessable from the badges — it has to be worked out
from the actual rule text, the same way you'd read a function's
documentation before calling it.

A bundle is a stacking rule dressed as a single product: "buy the headphones
with the case for $20 more" is only a discount on the case, and only if the
case is worth more than $20 to you specifically.

## Optimisation, not tricks

The useful skill here is not memorising coupon folklore. It's the same move
as Week 2's usable-quantity correction: write down the actual rule, the
actual cart, and check whether adding an item to satisfy a threshold costs
more than the threshold saves. If it does, the "discount" made the purchase
more expensive, not less.

## The $249 headphones

Suppose a $30-off coupon requires a $260 minimum spend, and a carrying case
costs $25. Buying the case to unlock the coupon looks like "$25 case, minus
$30 coupon" — but only if the case was worth buying at all; otherwise it's
$249 headphones plus a $25 item you didn't want, minus $30, which is $244:
five dollars cheaper than $249, and a case sitting unused in a drawer.

## Where this goes

Week 5 asks whether $249, or $244, is even a meaningful number without
knowing what this exact model has actually sold for over time.

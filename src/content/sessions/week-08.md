---
title: "Week 8 — Points Are Weird Money"
description:
  Loyalty points look like cash but behave like a second currency with its
  own exchange rate, expiry date, and restrictions.
week: 8
date: 2026-09-14
teachers:
  - idris-fenn
tags: ["stage-calculate", "loyalty"]
buildsOn: [4, 7]
spec:
  - distinguishes advertised face value from expected usable value for a points scheme
  - names at least two restrictions that reduce a point's practical value below its face value
  - applies the same combination-of-rules reasoning from Week 4 to a loyalty scheme
related:
  - assessments/beat-the-shopping-cart
---

## Core question

> Is a reward point really equivalent to cash?

A scheme that says "1 point = 1 cent" is quoting a **face value**. Whether a
point is actually worth a cent to you depends on whether you can redeem it
for something you wanted anyway, before it expires, without hitting a
minimum-redemption threshold that traps a remainder you can never spend.

## What erodes face value

- **Redemption restrictions** — points may be spendable only on certain
  items, only above a minimum balance, or only in fixed blocks.
- **Expiration** — an unused point that expires before redemption was worth
  exactly nothing, regardless of its printed value.
- **Lock-in** — a scheme that only pays out well once you're already
  spending heavily with one retailer discourages comparison-shopping, which
  is the opposite of what a rational buyer wants from a reward.

> **A reward's advertised value and its practical value may differ.**

## Expected usable value

The same combination-of-rules thinking from Week 4 applies: model the
scheme as a function — points earned, times probability you'll redeem them
before expiry, times the fraction of face value you'll actually capture
given the restrictions — rather than accepting the advertised rate at face
value.

## The $249 headphones

Suppose the store offers 500 points (advertised as "$5 value") on the
headphones purchase, redeemable only in $10 blocks, expiring in 90 days, and
only on accessories. If nothing on the accessories page is wanted within 90
days, the realistic expected value of those 500 points is closer to $0 than
$5 — not because the retailer lied about the exchange rate, but because the
restrictions around it were never priced into the "$5 value" headline.

## Where this goes

Week 9 leaves the single retailer entirely and asks whether "new, from this
store" was even the right category of purchase to be comparing.

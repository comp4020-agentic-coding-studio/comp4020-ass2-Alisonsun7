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
  - gives one concrete before-class task and one in-class activity tied to the week's own mechanism
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

<p class="caveat">The 500-point award and its restrictions are invented for
this example. No real loyalty programme's terms are being described.</p>

## Learning outcomes

By the end of this week, you should be able to:

- distinguish a reward point's advertised face value from its expected
  usable value
- name at least two restrictions — redemption limits, expiry, lock-in —
  that erode face value
- model a loyalty scheme as a function, reusing Week 4's rule-as-function
  idea
- estimate expected usable value given a probability of redemption and a
  fraction of face value captured
- explain why a scheme that only pays out well under heavy lock-in works
  against comparison shopping

## Before class

Find the terms of one real loyalty or rewards scheme you're a member of,
or one you can look up, and note its stated exchange rate plus any
restriction on redeeming it — minimum balance, expiry window, category
limits.

## In class

Using the scheme you brought, estimate a realistic expected usable value
per point (not the advertised face value) and be ready to justify the
probability and restriction discount you applied.

## What you should leave knowing

A point's advertised value and its realistic value are different numbers,
and the gap between them is exactly the restrictions the headline rate
doesn't mention.

<hr class="receipt-divider" />

## Where this goes

Week 9 leaves the single retailer entirely and asks whether "new, from this
store" was even the right category of purchase to be comparing.

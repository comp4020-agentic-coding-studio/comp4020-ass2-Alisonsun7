---
title: "Assessment 2 — Beat the Shopping Cart"
description:
  A constrained shopping scenario with thresholds, coupons, exclusions and
  bundles. Find a defensible strategy, and don't buy your way into a
  worse outcome.
week: 8
due: 2026-09-25T12:00:00+10:00
weight: 30
marking:
  mode: weighted
  criteria:
    - name: Correct modelling of every rule in the scenario
      weight: 35
    - name: Defensibility of the chosen strategy
      weight: 35
    - name: Clarity of the written or coded reasoning
      weight: 30
spec:
  - submitted by the deadline, in the format named below
  - models every discount rule in the scenario explicitly, including exclusions
  - identifies at least one combination that appears to save money but doesn't
  - the final strategy is justified against the actual effective cost, not the advertised discount
related:
  - sessions/week-04
  - sessions/week-08
---

## The brief

> Given a shopping cart, a set of overlapping discount rules, and a fixed set
> of needed items, find the cheapest defensible way to buy them.

You'll be given (or will construct, if working from a real storefront) a
scenario containing several of: a spend threshold, a percentage coupon with
exclusions, a bundle offer, a free-shipping cutoff, and a loyalty-points
rate. Work out the actual effective cost of at least three plausible
strategies for acquiring the needed items, including the "obvious" one a
shopper would try first.

The scenario is built so that at least one strategy that *looks* like a
bigger discount is actually a worse outcome once you account for items
bought only to satisfy a threshold. Buying something you didn't need, purely
to unlock a bigger advertised discount, should not be counted as "saving
money" unless you can show the item had real value to you independent of
the coupon.

This assessment is [Week 4](/sessions/week-04/)'s rule-as-function reasoning
applied under exam conditions rather than in a worked example.

## What you submit

Either a written strategy comparison (tables of the modelled options and
their effective costs) or a small script that computes effective cost given
the rules as structured input — either is acceptable, and the marking
weights reasoning over implementation medium. State your final recommended
strategy and the effective cost it produces.

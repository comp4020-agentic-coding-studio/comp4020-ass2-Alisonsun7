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
      description:
        Turns each coupon, exclusion, bundle, shipping rule and loyalty rule
        into an explicit condition with inputs and outputs, including the order
        in which rules are applied.
    - name: Defensibility of the chosen strategy
      weight: 35
      description:
        Compares at least three plausible carts using the same effective-cost
        model and justifies the recommendation by total cost, not by the size
        of the advertised discount.
    - name: Clarity of the written or coded reasoning
      weight: 30
      description:
        Presents the model so another student could reproduce it, with clear
        assumptions, readable tables or code, and a short explanation of why
        the losing strategies lose.
spec:
  - submitted by the deadline, in the format named below
  - models every discount rule in the scenario explicitly, including exclusions
  - compares at least three plausible strategies using the same effective-cost model
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

## Scenario packet

Your scenario, whether supplied or self-constructed, must be written as a
rule sheet before you solve it. It should contain:

- a fixed list of needed items and their prices
- at least one optional add-on that could help satisfy a threshold
- a threshold discount, such as "$30 off orders over $260"
- at least one exclusion, such as "coupon does not apply to sale items"
- one more complication: bundle pricing, free-shipping cutoff, loyalty
  points, or non-stacking coupons
- a statement of which optional items have real value to the buyer, and how
  much

If you use a real storefront, cite it. If you invent a scenario, label it
hypothetical and make the numbers internally consistent.

## Required model

Compare at least three strategies in the same table or script:

- the obvious cart a hurried shopper would try first
- the cheapest cart that satisfies the headline discount
- one alternative that refuses a tempting discount because the effective cost
  is worse

For each strategy, show item subtotal, excluded subtotal, discount applied,
shipping or points value if relevant, unwanted add-on cost, and final
effective cost. A strategy that buys an unwanted item should count the wasted
part as cost, even if the checkout total is lower.

## What you submit

Either a written strategy comparison (tables of the modelled options and
their effective costs) or a small script that computes effective cost given
the rules as structured input — either is acceptable, and the marking
weights reasoning over implementation medium. State your final recommended
strategy and the effective cost it produces.

Include a short note explaining why the losing strategies lose. The goal is
not only to name the cheapest cart; it is to show which rule made the
advertised bargain stop being a bargain.

## What strong work looks like

Strong work makes each rule executable: the reader can see the inputs, the
condition, and the output. It notices order-of-operations questions, such as
whether a coupon applies before or after sale-item exclusions, and handles
them explicitly. The final recommendation should still make sense if the
advertised badge is hidden and only the effective-cost table remains.

## Common traps

- applying a percentage discount to the whole cart when exclusions remove
  part of it
- counting loyalty points at face value when redemption is restricted
- adding an item to clear a threshold, then treating that item as free
- comparing strategies with different assumptions
- choosing the cart with the largest discount instead of the lowest
  defensible effective cost

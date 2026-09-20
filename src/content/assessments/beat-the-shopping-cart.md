---
title: "Assessment 2 — Beat the Shopping Cart"
description:
  A constrained shopping scenario with thresholds, coupons, exclusions and
  bundles. Find the best plan without buying extra things just to chase a
  discount.
week: 8
due: 2026-09-25T12:00:00+10:00
weight: 30
marking:
  mode: weighted
  criteria:
    - name: Correct modelling of every rule in the scenario
      weight: 35
      description:
        Writes each coupon, exclusion, bundle, shipping rule and loyalty rule
        as a clear if-this-then-that rule, including the order the rules apply.
    - name: How well the chosen strategy is justified
      weight: 35
      description:
        Compares at least three possible carts using the same true-cost method,
        then recommends the cart with the best total result, not the biggest
        advertised discount.
    - name: Clarity of the written or coded reasoning
      weight: 30
      description:
        Shows the working clearly enough that another student could repeat it,
        using readable tables or code and a short explanation of why the other
        options lose.
spec:
  - submitted by the deadline, in the format named below
  - models every discount rule in the scenario explicitly, including exclusions
  - compares at least three plausible strategies using the same true-cost method
  - identifies at least one combination that appears to save money but doesn't
  - the final strategy is justified against the true cost, not the advertised discount
related:
  - sessions/week-04
  - sessions/week-08
---

## The brief

> Given a shopping cart, several discount rules, and a fixed list of needed
> items, find the best way to buy them.

You'll be given (or will construct, if working from a real storefront) a
scenario containing several of: a spend threshold, a percentage coupon with
exclusions, a bundle offer, a free-shipping cutoff, and a loyalty-points
rate. Work out the true cost of at least three possible strategies for getting
the needed items, including the "obvious" one a shopper would try first.

The scenario is built so that at least one strategy that *looks* like a
bigger discount is actually a worse outcome once you account for items
bought only to satisfy a threshold. Buying something you didn't need, purely
to unlock a bigger advertised discount, should not be counted as "saving
money" unless you can show the item had real value to you independent of
the coupon.

This assessment applies [Week 4](/sessions/week-04/)'s if-this-then-that
rule thinking to a cart you have to solve yourself.

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
hypothetical and make the numbers consistent with each other.

## Required model

Compare at least three strategies in the same table or script:

- the obvious cart a hurried shopper would try first
- the cheapest cart that satisfies the headline discount
- one alternative that refuses a tempting discount because the true cost is
  worse

For each strategy, show item subtotal, excluded subtotal, discount applied,
shipping or points value if relevant, unwanted add-on cost, and final true
cost. A strategy that buys an unwanted item should count the wasted part as
cost, even if the checkout total is lower.

## What you submit

Either a written strategy comparison (tables are fine) or a small script that
computes true cost from the rules. Either format is acceptable; the mark is
for the reasoning, not for choosing code over writing. State your final
recommended strategy and the true cost it produces.

Include a short note explaining why the losing strategies lose. The goal is
not only to name the cheapest cart; it is to show which rule made the
advertised bargain stop being a bargain.

## What strong work looks like

Strong work makes each rule usable: the reader can see the input, the
condition, and the result. It notices ordering questions, such as whether a
coupon applies before or after sale-item exclusions. The final recommendation
should still make sense if the sale badges are hidden and only your cost table
remains.

## Common traps

- applying a percentage discount to the whole cart when exclusions remove
  part of it
- counting loyalty points at face value when redemption is restricted
- adding an item to clear a threshold, then treating that item as free
- comparing strategies with different assumptions
- choosing the cart with the largest discount instead of the lowest true cost

---
title: "Assessment 3 — Build a Buying Engine"
description:
  The capstone. Combine the semester's ideas into a decision-support system
  that explains its recommendation instead of just outputting a number.
week: 12
due: 2026-10-23T12:00:00+10:00
weight: 50
marking:
  mode: weighted
  criteria:
    - name: Scope and input design
      weight: 25
      description:
        Chooses at least five relevant input categories from the semester and
        defines them precisely enough that their units, assumptions and limits
        are clear.
    - name: Recommendation logic and internal consistency
      weight: 30
      description:
        Produces one of the named recommendation categories through a coherent
        model whose outputs change sensibly when price, urgency, uncertainty,
        time cost or alternatives change.
    - name: Explanation, transparency and example runs
      weight: 25
      description:
        Shows intermediate calculations or reasoning, includes example runs
        covering at least three recommendation categories, and identifies what
        would flip each recommendation.
    - name: Assumptions, limitations and responsible caveats
      weight: 20
      description:
        Labels hypothetical inputs, avoids claiming universal correctness, and
        names important factors the model does not handle rather than hiding
        them.
spec:
  - submitted by the deadline, in the format named below
  - accepts at least five distinct input categories from the semester's material
  - produces one of the named recommendation categories, not a bare price
  - shows the reasoning behind the recommendation, not only the recommendation itself
  - includes example runs that demonstrate at least three different recommendation categories
  - does not claim to produce a universally correct answer
related:
  - sessions/week-10
  - sessions/week-12
---

## The brief

> Build a system that takes in the kind of information this semester has
> spent twelve weeks arguing you need, and produces a purchase
> recommendation it can explain.

Possible inputs to support: current price, historical price range, urgency,
probability and size of a possible future discount, used/alternative
options and their prices, recurring costs, reward-point value, time cost of
further searching, and resale value. You don't need all of them — a
realistic, well-justified subset beats a shallow attempt at everything.

Possible recommendations: **BUY NOW**, **WAIT**, **BUY USED**,
**SUBSTITUTE**, **DO NOT BUY**. Whichever the system lands on, it must show
its work: which inputs mattered, how they were weighed, and what would need
to change for the recommendation to flip. A system that outputs a
recommendation with no visible reasoning does not meet this brief, no matter
how accurate it turns out to be.

This is explicitly not a search for one universally correct answer. Two
reasonable systems, given the same inputs but different assumptions about
risk or the value of time, may recommend different things — the mark is on
whether each system's own reasoning is transparent and internally
consistent, not on whether it agrees with any other system.

The expected-value reasoning for the WAIT recommendation comes directly from
[Week 10](/sessions/week-10/), and the whole engine is the synthesis
[Week 12](/sessions/week-12/) argues for: a decision that shows its work
rather than a single number.

## Minimum viable engine

Your engine must accept at least five input categories from the semester. A
good small scope might use:

- current price and known price-history range
- urgency or latest acceptable purchase date
- probability and size of a possible future discount
- used or substitute option price
- time cost of further searching
- reward-point value after restrictions
- recurring or follow-on costs

It does not have to be an app with a polished interface. A notebook,
spreadsheet, command-line script, or small web tool can all work if the
model is inspectable and the output explains itself.

## Example runs

Include at least three example runs that produce different recommendation
categories, such as **BUY NOW**, **WAIT**, and **BUY USED**. For each run,
show:

- the input values
- the intermediate quantities your model calculated
- the final recommendation
- the factor that would most easily flip the recommendation

Example inputs may be hypothetical, but they must be labelled that way. Do
not imply your invented price history or discount probability came from a
real retailer.

## What you submit

A working artefact (a small application, a notebook, a structured
spreadsheet with real formulas — the format is your choice, provided the
reasoning is inspectable) plus a short written explanation of the model's
assumptions and its limits. State clearly which example inputs are
hypothetical.

Your written explanation should name the trade-offs the model can handle and
the trade-offs it cannot. For example, if environmental preference, warranty
risk or seller trust are outside your model, say so; hiding a limitation is
worse than choosing a smaller honest scope.

## What strong work looks like

Strong work behaves less like a price sorter and more like a decision memo.
It can recommend paying more when urgency, risk or time cost justifies it,
and it can explain why. It also exposes the model's assumptions: changing the
value of time, risk tolerance or probability of a future discount should make
the recommendation shift in a way the reader can follow.

## Common traps

- building a lowest-price finder and calling it a buying engine
- accepting many inputs but using only one or two of them in the decision
- outputting a recommendation without showing intermediate reasoning
- treating hypothetical inputs as if they were measured facts
- claiming the system is objectively correct for every buyer

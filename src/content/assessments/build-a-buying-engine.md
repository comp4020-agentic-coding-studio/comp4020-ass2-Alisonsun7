---
title: "Assessment 3 — Build a Buying Engine"
description:
  The capstone. Combine the semester's ideas into a decision-support system
  that explains its recommendation instead of just outputting a number.
week: 12
due: 2026-10-23T12:00:00+10:00
weight: 50
marking:
  mode: holistic
  description:
    Judged as a whole against the brief. A strong submission takes a
    realistic subset of the semester's inputs, produces a recommendation
    from each of the listed categories where relevant, and — most
    importantly — shows its reasoning rather than behaving like a black box.
    Scope that is honestly smaller but fully explained outweighs scope that
    is broad but unjustified.
spec:
  - submitted by the deadline, in the format named below
  - accepts at least five distinct input categories from the semester's material
  - produces one of the named recommendation categories, not a bare price
  - shows the reasoning behind the recommendation, not only the recommendation itself
  - does not claim to produce a universally correct answer
related:
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

## What you submit

A working artefact (a small application, a notebook, a structured
spreadsheet with real formulas — the format is your choice, provided the
reasoning is inspectable) plus a short written explanation of the model's
assumptions and its limits. State clearly which example inputs are
hypothetical.

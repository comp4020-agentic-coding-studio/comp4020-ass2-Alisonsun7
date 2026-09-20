---
title: "Assessment 3 — Build a Buying Engine"
description:
  The final project. Build a small buying tool that explains its advice
  instead of just outputting a number.
week: 12
due: 2026-10-23T12:00:00+10:00
weight: 50
marking:
  mode: weighted
  criteria:
    - name: Scope and input design
      weight: 25
      description:
        Chooses at least five useful input types from the course and defines
        them clearly, including units, assumptions and limits.
    - name: Recommendation logic and consistency
      weight: 30
      description:
        Gives one of the named recommendations using rules that stay consistent
        when price, urgency, uncertainty, time cost or alternatives change.
    - name: Explanation and example runs
      weight: 25
      description:
        Shows the steps behind the answer, includes example runs for at least
        three recommendation categories, and names what would change each
        answer.
    - name: Assumptions, limitations and responsible caveats
      weight: 20
      description:
        Labels invented inputs, avoids claiming the tool is right for everyone,
        and names important factors the tool does not handle.
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

> Build a system that takes the kind of information this course has spent
> twelve weeks collecting, then gives buying advice it can explain.

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

This is not a search for one correct answer for everyone. Two sensible tools
may give different advice if they value risk or time differently. The mark is
for whether your tool's reasoning is visible and consistent, not whether it
matches another student's answer.

The expected-value reasoning for the WAIT recommendation comes directly from
[Week 10](/sessions/week-10/). The whole engine is the final combined
decision [Week 12](/sessions/week-12/) argues for: advice that shows its
work rather than a single number.

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

It does not have to be a polished app. A notebook, spreadsheet, command-line
script, or small web tool can all work if the model can be inspected and the
output explains itself.

## Example runs

Include at least three example runs that produce different recommendation
categories, such as **BUY NOW**, **WAIT**, and **BUY USED**. For each run,
show:

- the input values
- the key numbers your model calculated on the way
- the final recommendation
- the factor that would most easily flip the recommendation

Example inputs may be hypothetical, but they must be labelled that way. Do
not imply your invented price history or discount probability came from a
real retailer.

## What you submit

A working piece of work (a small app, notebook, spreadsheet with formulas,
command-line script, or similar) plus a short written explanation of the
model's assumptions and limits. State clearly which example inputs are
hypothetical.

Your written explanation should name the trade-offs the model can handle and
the trade-offs it cannot. For example, if environmental preference, warranty
risk or seller trust are outside your model, say so; hiding a limitation is
worse than choosing a smaller honest scope.

## What strong work looks like

Strong work behaves less like a price sorter and more like a short decision
memo. It can recommend paying more when urgency, risk or time cost makes that
the better choice, and it can explain why. If the value of time, risk
tolerance or chance of a future discount changes, the recommendation should
shift in a way the reader can follow.

## Common traps

- building a lowest-price finder and calling it a buying engine
- accepting many inputs but using only one or two of them in the decision
- outputting a recommendation without showing the steps behind it
- treating hypothetical inputs as if they were measured facts
- claiming the system is objectively correct for every buyer

# Course specification

This document contains the detailed content requirements for the fictional Slop
University course **How to Never Pay Full Price**.

Use the SlopU course code already implied by the starter repository. If the first
digit represents course level and the assignment permits changing it, use level 3
while preserving every digit the assignment requires. Never invent a course code
without inspecting the starter data.

## Course thesis

The course has three intellectual stages.

### SEE

Students learn that the displayed price is not necessarily the meaningful price.

### CALCULATE

Students learn to model discounts, unit prices, coupons, price histories,
recurring costs, reward points, alternatives, and other hidden components of
effective cost.

### DECIDE

Students learn that the numerically cheapest option is not necessarily the best
decision once time, uncertainty, urgency, risk, and personal priorities are
included.

Every major page, lecture, activity, assessment, and interaction should reinforce
this progression.

## Curriculum

The course must contain exactly **12 dated teaching weeks**. Use the following
titles and conceptual roles unless repository constraints require minor wording
changes.

### Week 1 — What Is a Price?

**Core question:** Does a product have one true price?

Introduce:

- sticker price
- reference price
- sale price
- market price
- willingness to pay
- comparison framing

Students should leave this week less certain about what the word “price” means,
not more certain.

### Week 2 — The Unit Price

**Core question:** Is the larger or apparently cheaper package always better value?

Introduce:

- unit price
- usable quantity
- bulk buying
- waste
- expiry or shelf life

Key idea:

> A lower unit price matters only when the purchased quantity will actually be used.

### Week 3 — 50% Off What?

**Core question:** Relative to which price is a discount calculated?

Introduce:

- reference pricing
- anchoring
- historical baselines
- percentage framing
- misleading comparisons

Key idea:

> A discount percentage is not the same as money genuinely saved.

### Week 4 — Coupons Are Algorithms

**Core question:** How should discounts be combined when each has different rules?

Introduce:

- thresholds
- exclusions
- stacking
- bundles
- shipping rules
- constraints
- optimisation

Treat this as computational reasoning, not a list of coupon tricks.

### Week 5 — The Price Has a History

**Core question:** Can today's price be judged without knowing yesterday's price?

Introduce:

- price history
- baselines
- medians
- seasonality
- volatility

Represent price as something closer to `P(t)` than a timeless constant.

### Week 6 — The Price Is Watching You

**Core question:** What happens when price changes with the buyer or context?

Introduce:

- dynamic pricing
- demand-sensitive pricing
- segmentation
- personalisation
- price discrimination

Do not make unsupported allegations about named companies. Use hypothetical
examples when reliable evidence is unavailable.

### Week 7 — The Price That Never Stops

**Core question:** Why can a small recurring charge become difficult to understand?

Introduce:

- subscriptions
- recurring cost
- introductory pricing
- inertia
- cancellation friction
- cost per actual use

### Week 8 — Points Are Weird Money

**Core question:** Are reward points genuinely equivalent to cash?

Introduce:

- loyalty systems
- face value
- redemption restrictions
- expiry
- lock-in
- expected usable value

Key idea:

> A reward's advertised value may differ from the value it can realistically produce.

### Week 9 — New, Used, Repair or Rent?

**Core question:** Why compare only stores when a different type of transaction may
be better?

Introduce:

- new versus used
- repair
- rental
- borrowing
- resale value
- depreciation
- expected lifespan
- lifecycle cost

### Week 10 — Should You Wait?

**Core question:** When is waiting for a better price rational?

Introduce:

- uncertainty
- expected value
- probability of a future discount
- stock-out risk
- urgency
- value of owning the item now

Never present an uncertain future price as a certain prediction.

### Week 11 — Your Time Has a Price

**Core question:** How much time and effort is it rational to spend to save money?

Introduce:

- opportunity cost
- search cost
- travel cost
- waiting time
- convenience

A useful central example compares a small monetary saving with a very large time
cost.

### Week 12 — Sometimes Pay Full Price

**Core question:** What should a rational purchase decision optimise?

Synthesize:

- price
- time
- uncertainty
- urgency
- waste
- alternatives
- risk
- personal priorities

The final lesson must not conclude that students should always seek the lowest
price. A more appropriate conclusion is:

> A good purchase is not necessarily the option with the lowest displayed price.
> It is the option that best fits the available evidence, constraints, and values
> that genuinely matter.

## Running semester scenario

Use a recurring scenario to give the semester continuity: **The Headphone Problem**.
A student is considering headphones priced at approximately `$249`. New information
may be revealed over the semester:

- Week 1: the current price appears to be $249.
- Week 2: compare packages or accessory bundles.
- Week 3: reveal a very high advertised reference price.
- Week 5: add price-history context.
- Week 6: add a changing or context-sensitive price.
- Week 8: add loyalty points.
- Week 9: add used or alternative options.
- Week 10: add the possibility of a future promotion.
- Week 11: account for time already spent searching.
- Week 12: make the final purchase decision.

Do not force the scenario into a week where it makes the teaching unnatural. It
exists to provide continuity, not to become a repeated gimmick.

## Assessments

Assessment weights must total exactly 100%.

### Assessment 1 — Deal Autopsy — 20%

Students investigate a promotion that initially appears highly attractive. They
identify:

- the advertised claim
- the reference price
- missing information
- restrictions
- effective savings
- relevant framing techniques
- a final evidence-based judgment

Students must explain *why* the promotion is misleading when they reach that
conclusion; merely labelling it misleading is insufficient.

### Assessment 2 — Beat the Shopping Cart — 30%

Students receive a constrained shopping scenario that may include spend
thresholds, coupons, exclusions, bundles, free-shipping thresholds, and loyalty
rewards. They determine or implement a well-justified purchase strategy.

Reward reasoning about constraints and effective cost. Buying unwanted items to
obtain a larger advertised discount is not automatically saving money.

### Assessment 3 — Build a Buying Engine — 50%

Students combine the semester's ideas into a decision-support system. Inputs may
include current price, historical range, urgency, possible future discounts, used
alternatives, recurring costs, reward points, time cost, resale value, and risk.

Possible recommendations include:

- `BUY NOW`
- `WAIT`
- `BUY USED`
- `SUBSTITUTE`
- `DO NOT BUY`

The system must explain its reasoning rather than act as a black box. Its goal is
not one universally correct answer, but transparent modelling of trade-offs.

## Content rules

### Curriculum coherence

Do not create 12 unrelated articles. Every week must do at least one of the
following:

- introduce a new price or cost model
- revise a previous assumption
- add a new purchase constraint
- expose a limitation of a previously useful rule

Later weeks must be conceptually more sophisticated. Where practical, content
data should expose dependencies through a field such as `buildsOn`, and every
dependency must point to an earlier week.

### Stay on the purchasing-decision problem

This is not a generic personal-finance course. Do not create standalone content
about retirement, investing, stocks, tax, mortgages, savings accounts, debt
management, or credit scores unless the concept is directly necessary to analyse
a specific purchase decision.

### Prose style

Avoid generic AI filler such as “In today's fast-paced world,” “Dive into,”
“Explore the fascinating world of,” and “Whether you're a beginner or an expert.”
Do not mechanically restate headings.

Prefer concrete claims, examples, questions, comparisons, and calculations. The
tone should be intelligent, concise, mildly playful, and slightly sceptical—never
corporate or motivational. Let humour emerge from the situation or logic rather
than forcing jokes.

### Evidence and factual integrity

Never fabricate statistics, academic research, historical retail prices, company
behaviour, legal rules, quotations, citations, or real-world datasets. Mark
invented numerical teaching examples as `hypothetical`; distinguish them from
`sourced` examples where appropriate. If a real-world claim cannot be verified,
rewrite it as hypothetical.

## Information architecture

The final site must make these areas easy to reach:

- course homepage
- course overview
- schedule
- all 12 teaching weeks
- all assessments
- lecture material
- at least one genuine lecture slide deck
- relevant policies or resources if they belong in the final design

The site should feel like one complete course rather than a collection of demo
pages.

## Lecture deck

At least one specific teaching week must have a genuinely usable lecture deck
with real teaching content and lecture structure. A placeholder, title-only deck,
or a slide-by-slide copy of the webpage does not satisfy this requirement.

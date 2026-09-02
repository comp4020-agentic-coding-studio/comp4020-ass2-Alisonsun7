# Your harness
Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## Carried forward from Crit 5

Facts that generalised past that prototype. The Astro base-path trap and its
link-checker workaround did **not** make the cut --- this template derives
`base` from the git origin itself (`scripts/pages-base.ts`), so that whole bug
class is handled for you here. Neither did the oxlint/stylelint rules --- this
template ships no linter.

- **`--headless` is the old headless mode and paints phantoms.** Always pass
  `--headless=new`. If an artifact appears only in a screenshot, reproduce it in
  a real window before believing it.
- **Headless Chrome on macOS will not give you a viewport narrower than
  ~500px.** `--window-size=390,N` produces a 390px-wide *image* of a ~500px-wide
  *layout*, cropped --- which looks exactly like horizontal overflow and is not.
  To check the 390×844 marking viewport for real, load the page in an
  `<iframe width="390">` inside a harness page and screenshot that; an iframe
  gets its own CSS viewport, so media queries evaluate correctly. Verify the
  harness itself with a media-query probe page before trusting a phone
  screenshot. The spec here checks both marking viewports, so this is worth
  doing early rather than at the deadline.
- **A blocked `check` should not gate `deploy`.** Pages keeps serving the last
  successful deployment when a workflow run fails, so a gated deploy job doesn't
  take the site offline --- it silently freezes it at the last green commit
  while the repo moves on, and a bare HTTP 200 at the crit sweep reads as this
  week's work when it's last week's. The deploy job's own build is the gate that
  actually matters: a site that cannot build still cannot ship.
- **`pnpm check` is chained,** so an earlier failing step can stop later ones
  from running at all. A green result after a failure upstream is not a thing
  you have seen --- re-run after fixing whatever failed first.

## Project

This repository is the Assignment 2 project for COMP4020 Agentic Coding Studio.

The project is a fictional Slop University course website:

**How to Never Pay Full Price**

Working subtitle:

**Pricing, persuasion, and the mathematics of buying things**

The course should feel like a strange but legitimate university course: playful in premise, rigorous in reasoning, and coherent across an entire semester.

This is **not** a generic personal-finance course and **not** a list of money-saving tips.

The central question of the course is:

> What does it actually mean to get a good price?

The intellectual progression should gradually challenge the naive assumption:

> lower sticker price = better deal

By the end of the semester, students should understand that a purchase decision may depend on historical price, quantity, restrictions, time, uncertainty, alternatives, recurring costs, waste, risk, and personal constraints.

The final conclusion of the course is intentionally more nuanced than its title:

> Sometimes paying full price is the rational choice.

---

## Repository First

Before making changes:

1. Inspect the repository structure.
2. Read `package.json` and existing scripts.
3. Inspect the starter content model.
4. Inspect existing routes, components, styles, tests, and `spec/`.
5. Preserve useful starter infrastructure unless there is a concrete reason to change it.
6. Do not assume frameworks, filenames, commands, or schemas that have not been verified in the repository.
7. Prefer adapting the existing architecture over replacing it.

Do not remove existing assignment checks simply because they are inconvenient.

---

# Course Identity

## Course title

**How to Never Pay Full Price**

Use the SlopU course code already implied by the starter repository.

If the first digit is intended to represent course level, use level 3 where permitted, while preserving any digits that the assignment requires us to keep.

Do not invent a different course identifier without checking the starter data first.

---

## Course thesis

The course has three broad intellectual stages:

### SEE

Students learn that the price shown to them is not necessarily the meaningful price.

### CALCULATE

Students learn to model discounts, units, coupons, histories, recurring costs, points, alternatives, and other hidden components of effective cost.

### DECIDE

Students learn that the cheapest numerical option is not necessarily the best decision once time, uncertainty, urgency, risk, and personal preferences are included.

Every major page, lecture, activity, assessment, or interaction should reinforce this progression.

---

# Curriculum

The course must contain exactly **12 dated teaching weeks**.

Use these week titles and conceptual roles unless repository constraints require minor wording changes.

## Week 1 — What Is a Price?

Core question:

> Does a product have one true price?

Introduce:

* sticker price
* reference price
* sale price
* market price
* willingness to pay
* comparison framing

Students should leave the week less certain about what the word “price” means.

---

## Week 2 — The Unit Price

Core question:

> Is the larger or cheaper-looking package actually better value?

Introduce:

* unit price
* usable quantity
* bulk purchasing
* waste
* shelf life

Important idea:

> Lowest unit price is only useful when the quantity is actually used.

---

## Week 3 — 50% Off What?

Core question:

> What is a discount being measured against?

Introduce:

* reference pricing
* anchoring
* historical baselines
* percentage framing
* misleading comparisons

Important idea:

> Discount percentage is not the same thing as money saved.

---

## Week 4 — Coupons Are Algorithms

Core question:

> When discounts have rules, how should they be combined?

Introduce:

* thresholds
* exclusions
* stacking
* bundles
* shipping rules
* constraints
* optimisation

Use computational thinking rather than presenting coupon tricks.

---

## Week 5 — The Price Has a History

Core question:

> Can today's price be judged without knowing yesterday's price?

Introduce:

* price histories
* baselines
* medians
* seasonality
* volatility

Represent price as something closer to:

`P(t)`

rather than a permanent constant.

---

## Week 6 — The Price Is Watching You

Core question:

> What happens when price changes in response to people and context?

Introduce:

* dynamic pricing
* demand-sensitive pricing
* segmentation
* personalisation
* price discrimination

Do not make unsupported claims about specific companies.

Use hypothetical examples when evidence is unavailable.

---

## Week 7 — The Price That Never Stops

Core question:

> Why does a small recurring price become difficult to reason about?

Introduce:

* subscriptions
* recurring costs
* introductory pricing
* inertia
* cancellation friction
* cost per actual use

---

## Week 8 — Points Are Weird Money

Core question:

> Is a reward point really equivalent to cash?

Introduce:

* loyalty systems
* face value
* redemption restrictions
* expiration
* lock-in
* expected usable value

Important idea:

> A reward's advertised value and its practical value may differ.

---

## Week 9 — New, Used, Repair or Rent?

Core question:

> Why compare stores when the better choice may be a different type of transaction?

Introduce:

* new vs used
* repair
* rent
* borrowing
* resale value
* depreciation
* expected lifetime
* lifecycle cost

---

## Week 10 — Should You Wait?

Core question:

> When does waiting for a better price become rational?

Introduce:

* uncertainty
* expected value
* probability of future discounts
* stock-out risk
* urgency
* value of having something now

Avoid pretending future prices can be predicted with certainty.

---

## Week 11 — Your Time Has a Price

Core question:

> How much effort is it rational to spend in order to save money?

Introduce:

* opportunity cost
* search cost
* travel cost
* waiting time
* convenience

A key example can compare a small monetary saving against a large time cost.

---

## Week 12 — Sometimes Pay Full Price

Core question:

> What should a rational buying decision actually optimise?

Synthesize:

* price
* time
* uncertainty
* urgency
* waste
* alternatives
* risk
* personal priorities

The final lesson must not be “always find the lowest price”.

It should be closer to:

> A good purchase is not necessarily the one with the lowest sticker price. It is the best decision given the information, constraints, and values that actually matter.

---

# Running Semester Scenario

Use one recurring purchasing scenario throughout the semester to make the twelve weeks feel connected.

Working scenario:

**The Headphone Problem**

At the start of the course, a student is considering buying a pair of headphones for approximately `$249`.

Each week should reveal or introduce new information that changes how the purchase is evaluated.

Possible progression:

* Week 1: current price appears to be $249
* Week 2: compare different package or accessory bundles
* Week 3: discover a high advertised reference price
* Week 5: reveal historical pricing information
* Week 6: introduce changing or contextual prices
* Week 8: introduce loyalty points
* Week 9: introduce used or alternative options
* Week 10: introduce a possible future sale
* Week 11: account for time already spent searching
* Week 12: make a final decision

Do not force an unrealistic update into every week if it harms the lesson.

The purpose is curriculum continuity, not gimmick repetition.

---

# Assessments

Assessment weights must total exactly **100%**.

## Assessment 1 — Deal Autopsy — 20%

Students investigate a promotion that initially appears attractive.

They should identify:

* the advertised claim
* the reference price
* missing information
* restrictions
* actual effective saving
* relevant framing techniques
* a final evidence-based judgement

The goal is not merely to say that marketing is misleading.

Students must show why.

---

## Assessment 2 — Beat the Shopping Cart — 30%

Students receive a constrained shopping scenario containing mechanisms such as:

* threshold discounts
* coupons
* exclusions
* bundles
* delivery thresholds
* loyalty rewards

They must determine or implement a defensible purchasing strategy.

The assessment should reward reasoning about constraints and effective cost.

Buying unnecessary items purely to unlock a larger advertised discount should not automatically count as “saving money”.

---

## Assessment 3 — Build a Buying Engine — 50%

Students combine ideas from the semester into a decision-support system.

Possible inputs include:

* current price
* historical range
* urgency
* possible future discount
* used alternatives
* recurring costs
* reward points
* time cost
* resale value
* risk

Possible recommendations include:

* BUY NOW
* WAIT
* BUY USED
* SUBSTITUTE
* DO NOT BUY

The system must explain its reasoning.

It should not behave like a black-box recommendation system.

The goal is not to produce a universally correct answer.

The goal is to model trade-offs transparently.

---

# Content Rules

## Curriculum coherence

Do not generate twelve independent articles.

Every teaching week must do at least one of the following:

* introduce a new model of price or cost
* revise an assumption introduced earlier
* add a new constraint to a purchasing decision
* expose a limitation of a previously useful rule

Later weeks should become conceptually richer than earlier weeks.

Where practical, content data should represent dependencies explicitly, for example through a field such as `buildsOn`.

Dependencies may only point to earlier weeks.

---

## Avoid generic finance content

This is not a general personal finance course.

Do not drift into standalone lessons about:

* retirement
* investing
* stocks
* tax
* mortgages
* savings accounts
* debt management
* credit scores

unless a concept is directly necessary for analysing a purchasing decision.

---

## Avoid generic AI prose

Do not write filler such as:

* “In today's fast-paced world...”
* “Dive into...”
* “Explore the fascinating world of...”
* “Whether you're a beginner or an expert...”
* repetitive summaries that merely restate headings

Prefer specific claims, examples, questions, comparisons, and calculations.

Tone:

* intelligent
* concise
* slightly playful
* mildly skeptical
* never corporate
* never motivational-speaker-like

Humour should come from the situation or logic, not from constant jokes.

---

# Evidence and Factual Integrity

Never fabricate:

* statistics
* academic research
* historical retail prices
* company behaviour
* legal rules
* quotes
* citations
* real-world datasets

When a numeric example is invented for teaching purposes, make that clear in the content or data model.

Where appropriate, distinguish examples as:

* `hypothetical`
* `sourced`

Do not make a hypothetical price history look like real-world evidence.

If real claims are included, they must be traceable to a real source.

If sourcing cannot be verified, rewrite the example as hypothetical.

---

# Interaction Design

Interactions must teach a course concept.

Do not add interactive elements purely for decoration.

Potential interactions include:

## Homepage price challenge

Ask the user which option appears cheaper.

Example:

A:

* Was $200
* Now $100
* 50% off

B:

* $95

The purpose is to introduce reference-price framing.

---

## Unit Price Calculator

Support Week 2.

Allow users to compare quantity, total price, and optionally usable quantity.

---

## Coupon Optimiser

Support Week 4.

Model a small number of understandable constraints.

The interface must explain the result rather than merely output a number.

---

## Price History Explorer

Support Week 5.

Show how the judgement of “good deal” changes after historical context is introduced.

Hypothetical datasets must be labelled as hypothetical.

---

## Dynamic Pricing Simulation

Support Week 6.

Demonstrate changing prices without falsely claiming to reproduce a particular company's pricing system.

---

## Points Value Calculator

Support Week 8.

Show why face value, redemption probability, restrictions, and expiration affect practical value.

---

## Buy / Wait Decision Tool

Support Weeks 10–11.

Expose assumptions and trade-offs.

Do not present uncertain forecasts as facts.

---

## Scope rule for interactions

Prefer a smaller number of polished, conceptually useful interactions over many shallow widgets.

Do not delay the complete course structure in order to build elaborate simulations.

Get the whole course working first, then deepen the strongest interactions.

---

# Visual Direction

The site should have a distinctive identity inspired by:

* receipts
* price labels
* checkout interfaces
* price-history charts
* financial terminals
* small-print retail disclaimers

However, it must still feel deliberate and contemporary.

Avoid turning the entire interface into a novelty supermarket advertisement.

Possible motifs:

* large numeric prices
* struck-through reference prices
* compact annotations
* receipt-like dividers
* restrained barcode motifs
* small-print caveats
* charts and comparison tables

A possible homepage line is:

> You calculate the price. The price calculates you.

A possible hero treatment is:

> HOW TO NEVER PAY
> ~~FULL PRICE~~
> THE WRONG PRICE

Use these only if they work with the final visual system.

---

# UI and UX Rules

The website must work well at both:

* desktop: approximately `1920 × 1080`
* mobile: approximately `390 × 844`

Requirements:

* no unintended horizontal scrolling
* readable text at mobile width
* navigation must remain usable
* tables must adapt or scroll intentionally
* interactive controls must remain usable
* keyboard focus must be visible
* buttons and links must have meaningful labels
* do not rely on hover alone
* do not rely on colour alone to communicate meaning

Prefer semantic HTML.

Preserve accessibility unless there is a strong reason not to.

---

# Information Architecture

The final site should make it easy to reach:

* course homepage
* course overview
* schedule
* all 12 teaching weeks
* all assessments
* lecture material
* at least one real lecture slide deck
* relevant policies/resources if part of the final design

The website should feel like one course, not a collection of disconnected demo pages.

---

# Lecture Deck

At least one lecture must have a genuine, usable slide deck.

The deck must contain actual teaching content.

Do not satisfy the requirement with:

* placeholder slides
* a single title slide
* duplicated website content with no lecture structure

The deck should clearly belong to one teaching week.

---

# Tests and `spec/`

Preserve starter tests.

Add course-specific checks where they protect important promises made by the design.

Useful invariants include:

* exactly 12 teaching weeks
* every teaching week has a date
* teaching week identifiers are unique
* assessment weights total exactly 100
* required course code is preserved
* at least one real lecture deck exists
* week dependencies only point backwards
* required content fields are present
* internal content references resolve
* hypothetical and sourced examples are distinguishable where relevant

Do not write brittle tests that merely encode exact marketing copy or visual wording.

Test meaningful structural promises.

---

# Engineering Workflow

Work in coherent phases.

A sensible order is:

1. inspect repository and assignment harness
2. understand existing content model
3. establish course metadata and information architecture
4. establish all 12 weeks at outline level
5. establish assessment structure
6. implement complete navigation and routing
7. build core page templates
8. add real course content
9. build the strongest interactions
10. build at least one real lecture deck
11. add course-specific specs
12. test desktop and mobile
13. polish accessibility and visual consistency
14. run the complete repository checks

Do not build one page to extreme polish while the rest of the course is missing.

---

# Validation

Before treating a phase as complete:

* run the relevant existing checks
* fix actual failures rather than bypassing them
* inspect for broken routes and broken references
* verify the site at desktop and mobile widths
* check interactive states, not only static appearance

Use the repository's actual scripts.

If `pnpm check` exists, it must pass before final submission.

If `pnpm check:evidence` exists, it must pass before final submission.

Do not invent commands that are not present in `package.json`.

---

# Git and Process Evidence

This assignment values development process.

Avoid one giant final commit.

Prefer coherent milestones whose history explains the evolution of the project.

Do not fabricate:

* commit hashes
* development failures
* decisions
* PROCESS.md evidence

`PROCESS.md` must describe real events that happened during development.

When an agent failure reveals a general problem, prefer fixing that problem at the harness or data-model level rather than repeatedly patching individual pages.

Examples of meaningful future harness changes may include:

* preventing generic “saving tips”
* requiring explicit curriculum dependencies
* strengthening evidence rules after unsupported claims appear
* adding structural checks after consistency failures
* changing decision tools after discovering that “lowest price” produces bad recommendations

Only record these as process discoveries if they actually happen.

---

# Decision Principle

When choosing between two implementations, prefer the one that makes the course's central idea clearer.

The central idea is not:

> Find the lowest number.

It is:

> Understand what a price means, calculate what a decision actually costs, and know when the apparent bargain is not the better choice.

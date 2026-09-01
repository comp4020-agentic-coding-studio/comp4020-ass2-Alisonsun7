# Your harness

This file is yours, and it arrives with no rules in it on purpose --- this note
is all there is, and it goes when you write your own. The rules you hold the
agent to are part of what gets marked, so they should be rules you decided on.

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

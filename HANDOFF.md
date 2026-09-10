# Handoff — all five domains built

**Every domain is loaded: 1,005 questions, 71/71 smoke tests passing.** This is
the complete set of review questions from the book — 1.0 (150), 2.0 (187),
3.0 (226), 4.0 (215), 5.0 (227). There is no sixth chapter to add.

Each bank was verified the same way: an independent re-parse of both EPUBs,
comparing every question stem and answer key against the generated file. All
five came back with zero mismatches.

What is left here is the procedure, kept because regenerating a bank
(`python tools/extract_domain.py N`) still has to survive the traps below.

## Domain 5 notes (2026-09-07)

227 questions — the largest bank, from the smallest EPUB (129 KB; it has no
screenshots). Extracted clean: no letter-citing explanations, no multi-select,
no figures, nothing repaired by hand.

- **Ten positional options** ("All/None of the above"), the most of any domain:
  Q85, Q98, Q123, Q155, Q157, Q161, Q162, Q169, Q184, Q221.
- **Q165 embeds an equation** (`Risk severity = X * Impact`) as a second `<p>`
  rather than a `<pre>`, so it lands appended to the stem: "...substituted for
  X? Risk severity = X * Impact". Complete and answerable, just not displayed on
  its own line. Left as is rather than adding a formula heuristic.

## Domain 4 notes (2026-09-07)

215 questions, extracted clean on the first run — the exhibit handling added for
chapter 3 did its job, so nothing needed repairing by hand.

- **No letter-citing explanations and no multi-select questions.** `EXPLANATION_FIXUPS`
  and `OPTION_FIXUPS` are both empty for chapter 4.
- **Eight positional options** ("All/None of the above" in Q4, Q14, Q63, Q64,
  Q79, Q91, Q95, Q182) — more than domains 1–3 combined. All pinned by the app;
  the smoke test confirms the pin holds.
- **Nine exhibits**: three text (Q157 `-rwxr--r--`, Q182 an Emotet SHA-1, Q199 a
  six-line Cisco ACL) and six figures (Q15 OpenVAS report, Q61 and Q90 incident
  response cycle diagrams, Q109 datacenter network diagram, Q112 packet capture,
  Q189 Windows audit policy dialog).
- The 2 MB EPUB is mostly those screenshots, as expected — 215 questions is in
  line with the other chapters, not short.
- All 215 were checked against an independent re-parse of both EPUBs: stem and
  answer key match on every one.

## What Domain 3 changed (2026-09-07)

Chapter 3 was the first chapter with **exhibits** — content printed between the
stem and the options that the question cannot be answered without. The old
parser took only the `li`'s first `<p>` and silently dropped them, which would
have shipped five unanswerable questions.

`parse_questions()` now collects everything before the options `<ol>`:

- `<pre>` → `exhibit` (Q30's `PERMIT IP ANY EQ 443` / `DENY IP ANY ANY`)
- `<ul>` → `exhibit` as `-` bullets (Q49's two access rules)
- `<div class="sidebar"><img>` → `image` + `imageAlt`, with the JPEG copied
  out of the chapter EPUB into `questions/img/domain<N>-q<NNN>.jpg`
  (Q155, Q200, Q225)
- trailing `<p>`s are appended to the stem (Q49 ends "What type of access
  control is Fred using?" *after* its bullet list)

`app.js` renders both in `renderQuestion()` and in the results review list;
`style.css` has `.q-exhibit` and `.q-figure` at the bottom. **Expect chapters 4
and 5 to need this too — check the extractor output for `exhibit`/`image` counts
rather than assuming zero.**

There is also now an `EXPLANATION_FIXUPS` table beside `OPTION_FIXUPS`, for the
letter-citing explanations described below. It asserts the original fragment is
still present, so a re-run against a changed EPUB fails loudly rather than
skipping the repair. Domain 3 needed two: Q2 and Q30.

---

## The 10-minute version

For each domain N in 3, 4, 5:

```bash
cd "C:\Users\gavsm\Desktop\CompTIA SEC+\QUIZ"
python tools/extract_domain.py N          # writes questions/domainN.js
```

Then add one line to `index.html`, next to the existing bank script tag:

```html
<script src="questions/domain3.js"></script>
```

That's it — `domains.js` already has all five registered, and the home screen
picks up any bank that loads. Nothing else needs to change.

Then verify:

```bash
cd tools && npm install          # once, pulls jsdom
cd .. && python -m http.server 8731     # in another terminal
node tools/smoke-test.js
```

---

## What the extractor does, and where it can bite you

`tools/extract_domain.py` pairs questions to answers **positionally**: the Nth
`<li>` in the chapter's question list gets the Nth `<li>` from that chapter's
section of the answers appendix. That is how the book is structured, and it is
exact — but only as long as both lists parse to the same length. The script
hard-fails if they don't, which is the check that matters.

The script also prints warnings for three things that would quietly produce a
broken question. **Read them; do not ignore them.**

### 1. Explanations that cite an option letter

The app shuffles answer order on every session, so an explanation reading
*"Options C and D are both incorrect"* becomes nonsense once C and D have moved.

Domain 1 had **zero** of these. Domain 3 had **two** — Q2 ("Options C and D are
both incorrect") and Q30 ("Options A, B, and C are incorrect"). Both are fixed
in `EXPLANATION_FIXUPS`, which names the options by their text instead.

Two ways to handle it, pick per question:

- **Rewrite the explanation** to name the answers instead of the letters
  ("The two made-up terms are not…"). Preferred — keeps shuffling on.
- If a question is unsalvageable, drop it from the bank and note the removal in
  the file header.

Do **not** solve this by turning off shuffling. Fixed answer positions are how
you end up memorizing "it's the third one" instead of the material.

### 2. Positional options

"All of the above" / "None of these" only make sense in their authored slot.
These are **handled, not broken**: `isPositional()` in `app.js` pins them while
everything around them shuffles, and the smoke test verifies the pin holds across
full-bank runs. Domain 1 has none; Domain 2 has three (Q45, Q46, Q115 — and in
Q46 "All of the above" is the correct answer, so the pin matters).

You only need to act if a new wording appears that the regex misses — extend the
regex. Don't drop the question, and don't disable shuffling.

### 2b. Repeated or merged options

Domain 2 turned up two defects in the book/EPUB itself:

- **Q1** prints "Blackmail" twice (the explanation implies the fourth option was
  meant to be "Ethical"). Identical options are collapsed automatically and the
  answer index remapped, so it renders once.
- **Q153** had options C and D merged into a single list item by the EPUB
  ("A resource reuse issueImproper legal hold"), leaving three options. That one
  can't be recovered by parsing, so it's repaired by hand via `OPTION_FIXUPS` at
  the top of the extractor. Add an entry there only for defects you've checked
  against the book, and say what was wrong.

### 2c. The check that catches a wrong answer key

Because this book pairs questions and answers **positionally**, a single slip
would misalign everything after it. `explanation_points_at()` is an independent
check: these explanations nearly always open by naming the winning option, so if
the explanation opens with option D's wording while the key says B, it's flagged.

It suppresses three false-positive patterns — an "All of the above" answer, an
option that is a prefix of the marked one, and **negative questions** ("which is
*not*…", "except", "least"), where the explanation properly opens by listing the
distractors. Domains 1 and 2 both come back clean.

### 3. Multi-select questions

The engine is single-answer only. The script flags any question whose stem says
"choose two" / "select all that apply". Domain 1 had none. If later domains do,
you have a real decision to make:

- Drop them (fastest, loses content), **or**
- Extend the engine: `selectAnswer()` in `app.js` assumes one index, and
  `q.correct` is a single number. Supporting multi-select means `correct`
  becomes an array, answers need a submit step rather than answer-on-click, and
  `shuffleAnswers()` needs to remap a set instead of one index.

Ask Gav which he wants rather than guessing — it changes the feel of the app.

### Chapter 4 is much bigger

`Chapter-4-Domain-4-0--Security-Operations.epub` is 2 MB versus ~120 KB for the
others. That is mostly embedded images, not extra questions, but do sanity-check
the extracted count against the book rather than assuming it parsed right.

---

## Verifying a new domain

`tools/smoke-test.js` runs the real `index.html` in jsdom and checks the whole
flow. It adapts to whatever banks are loaded, so it covers new domains
automatically — it runs the integrity checks (unique ids, in-range answer keys,
no duplicate options, no letter-citing explanations) over every loaded bank, and
verifies that positional options stay pinned.

It needs the app served over HTTP, because jsdom resolves `<script src>` against
the document URL. Serving from disk reports "no question banks loaded".

Beyond the automated pass, **spot-check 5–10 questions by hand** against the
book, spread across the range. Positional pairing is either right for the whole
file or catastrophically wrong, so a handful of samples from the start, middle,
and end is enough to prove it. That's how Domain 1 was verified (questions 1, 4,
22, 75, 113, 149, 150), and Domain 2 (questions 1, 83, 84, 85, 86, 153).

---

## Design notes worth keeping

Things that are deliberate, in case they look like something to "fix":

- **The confidence gate is the point.** Answer buttons stay disabled until you
  pick Sure / Unsure / Guessing. It feels like friction; it's what makes the
  weak-question pool honest, because a lucky guess still gets flagged even
  though it scored correct. Don't make it skippable.
- **Weak = wrong last time, or right but not sure.** See `isWeak()` in `app.js`.
- **Answer order reshuffles every session**, including on the retry pass, so a
  retry isn't a memory test of where the right box sat.
- **`contrast` field**: the shared design in `Apps/Cert_Quiz_App` has a "Watch
  the difference" line fed by a `contrast` field. This app doesn't use it —
  the book's explanations already discuss the distractors, so a second field
  would just repeat them. The CSS for it is still in `style.css` if a future
  bank wants it.
- **Styling is inherited** from `C:\Users\gavsm\Desktop\Apps\Cert_Quiz_App\`.
  The top ~380 lines of `style.css` are that file verbatim; app-specific rules
  are appended below a marked divider. Keep that split if you edit styles.
- **`domains.js` needs no edits** to add a domain — all five are already there.
  Only `index.html` gains a script tag.

## Known gaps / possible next steps

Not built, not asked for — listed so you don't have to rediscover them:

- ~~No mixed exam mode~~ and ~~no timer~~ — **both built 2026-09-08.** See
  "Mock exam mode" at the end of this file.
- No per-objective tagging (1.1, 1.2, …). The book doesn't group the review
  questions by objective, so this would need manual classification. The mock
  breaks down by domain; objective-level would need that tagging first.
- No PBQ (performance-based question) practice. The book has none, and the real
  exam opens with a handful that can eat 5-10 minutes each. The mock trains
  multiple-choice pacing only -- worth saying out loud, because a 90/90 mock
  score does not rehearse the part of exam day that most disrupts pacing.
- Results export is JSON only; no CSV, no charts over time.

Ask before building any of these.

---

## Mock exam mode (built 2026-09-08)

`MOCK_WEIGHTS` in `app.js` holds the draw: 11/20/16/25/18 from domains 1-5,
which is 12/22/18/28/20 percent of 90, rounded so it sums to exactly 90.
**Sampling is per domain, not from one flat pool** -- a flat shuffle of 1,005
questions would over-sample whichever bank is biggest (domain 5, at 227) and
under-sample the one that carries most marks (domain 4, 28% of the exam).

Design decisions, in case they look like something to "fix":

- **The confidence gate stays on during mocks.** It costs roughly 5 minutes of
  the 90 and the real exam has no equivalent, but it is what separates "right
  and knew it" from "right but guessing". Without it a mock reports a score and
  nothing actionable. Gav chose this deliberately.
- **Hard stop at zero.** `startTimer()` calls `renderResults()` once the
  deadline passes; unanswered questions score as wrong and the results header
  reports how many. Chosen over letting the session run on, because pacing is
  part of what a mock is meant to test.
- **The timer is wall-clock**, derived from `deadlineMs` rather than counting
  ticks, so a backgrounded tab or a stalled frame cannot hand back extra time.
- `stopTimer()` runs on quit, on results, and in `renderHome()`. A stray
  interval would otherwise fire `renderResults()` over a later session.
- Session logs gain `mode`, `timeLimitMs`, `timeExpired`, `unansweredCount` and
  `domainScores[]`, so an export shows which domain is actually moving over a
  run of mocks rather than just a single overall percentage.
- The per-domain breakdown renders for any session spanning more than one
  domain, so a mixed weak-question retry gets it too.

**Testing note:** the smoke test drives expiry by overriding `w.Date.now`. The
app runs inside jsdom's realm, so overriding Node's own `Date.now` has no effect
on the running timer -- that mistake costs four confusing failures.

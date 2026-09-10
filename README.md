# Security+ SY0-701 Quiz

A self-contained practice-exam interface for the CompTIA Security+ SY0-701 review
questions. No build step, no dependencies, no internet — just open it.

## Source of the questions

The practice questions, answers, explanations and figures in `questions/` are the
review questions from *CompTIA Security+ Study Guide* (Sybex / John Wiley & Sons,
ISBN 978-1-394-21138-8). They are reproduced here for personal study. All rights in
that material remain with the publisher and authors — this repository claims none
of it, and it is not a substitute for buying the book.

The application itself (`index.html`, `style.css`, `app.js`, `domains.js`,
`tools/smoke-test.js`) is original work and free to reuse.

## Run it

Double-click `index.html`, or drag it into a browser.

If your browser blocks `localStorage` on `file://` (progress won't save between
visits), serve the folder instead:

```
cd "C:\Users\gavsm\Desktop\CompTIA SEC+\QUIZ"
python -m http.server 8731
```

then open http://localhost:8731

## What it does

- **Mock Exam** — 90 questions in 90 minutes, drawn across all five domains by
  published exam weight (11 / 20 / 16 / 25 / 18). The clock does not pause; at
  zero the session ends and anything unanswered scores as wrong, like the real
  thing. Results add a **score-by-domain breakdown** naming your weakest domain.
- **Pick a domain**, then **pick how many questions** — 10 / 15 / 20 / 25 / 50 /
  100 / All, or type any custom number.
- Questions are drawn at random and **answer order is reshuffled every session**,
  so you learn the material rather than the position of the right box.
- **Confidence gate**: you must say Sure / Unsure / Guessing *before* the answer
  buttons unlock. This is what makes the weak-question tracking meaningful — a
  lucky guess gets flagged as a gap even though it scored as correct.
- Immediate feedback with the book's full explanation after each answer.
- **Results**: score against a 75% target, correct/wrong/unsure/guessed
  breakdown, and a review list of everything worth revisiting.
- **Weak Questions** on the home screen pools everything you got wrong or
  weren't sure about, across every past session.
- **Export Results** dumps the full session log as JSON.

### Keyboard

| Key | Action |
|---|---|
| `1` `2` `3` | Sure / Unsure / Guessing |
| `A` `B` `C` `D` | Pick an answer |
| `←` `→` | Previous / next question |

## Files

```
index.html            all four views (home, setup, quiz, results)
style.css             design language shared with Apps/Cert_Quiz_App
domains.js            registry of the five SY0-701 exam domains
app.js                quiz engine, progress store, session log
questions/domain1.js  150 questions — Domain 1.0 (loaded)
questions/domain2.js  187 questions — Domain 2.0 (loaded)
questions/domain3.js  226 questions — Domain 3.0 (loaded)
questions/domain4.js  215 questions — Domain 4.0 (loaded)
questions/domain5.js  227 questions — Domain 5.0 (loaded)
questions/img/        figures the book prints alongside 9 questions
```

## Current content

| Domain | Questions | Status |
|---|---|---|
| 1.0 General Security Concepts | 150 | **Loaded** |
| 2.0 Threats, Vulnerabilities, and Mitigations | 187 | **Loaded** |
| 3.0 Security Architecture | 226 | **Loaded** |
| 4.0 Security Operations | 215 | **Loaded** |
| 5.0 Security Program Management and Oversight | 227 | **Loaded** |

**All five domains are loaded — 1,005 questions, the complete set of review
questions from the book.** `HANDOFF.md` records how each was built and what
needed repairing.

### Questions with an exhibit

Some questions are unanswerable without something the book prints alongside the
stem. The extractor now pulls these out of the EPUB and the app renders them
between the question and the answers:

- **`exhibit`** — a config listing, permission string, hash or rule list, shown
  in a monospace block. Domain 3 Q30/Q49 and two more; domain 4 Q157
  (`-rwxr--r--`), Q182 (an Emotet hash) and Q199 (a six-line Cisco ACL).
- **`image`** / **`imageAlt`** — a figure, copied out of the chapter EPUB into
  `questions/img/`. Domain 3 Q155, Q200, Q225; domain 4 Q15, Q61, Q90, Q109,
  Q112, Q189. The alt text is the publisher's own description, so a question
  still reads with images off — though the domain 4 screenshots (an OpenVAS
  report, a packet capture, a Windows audit policy dialog) really need the
  image.

### Corrections applied to the book

- Domain 2 **Q1** (nation-state motivations) lists "Blackmail" twice. The
  duplicate is collapsed so it renders once; the answer, "Espionage", is
  unaffected. The book's explanation suggests the fourth option was meant to be
  "Ethical".
- Domain 2 **Q153**: the EPUB merged options C and D into one list item
  ("A resource reuse issueImproper legal hold"). Split back apart. See
  `OPTION_FIXUPS` in `tools/extract_domain.py`.

## Source

Questions from `../Questions_Answers_EPUB/9781394211388-Chapter-1-*.epub`;
correct answers and explanations from the `*-Appendix-Answers-to-Review-Questions.epub`.
Text is reproduced verbatim from the book for personal study use.

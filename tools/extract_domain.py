#!/usr/bin/env python3
"""Build questions/domain<N>.js from the Sybex review-question EPUBs.

Usage (from the QUIZ folder):
    python tools/extract_domain.py 2

That reads:
    ../Questions_Answers_EPUB/9781394211388-Chapter-<N>-*.epub   -> questions
    ../Questions_Answers_EPUB/9781394211388-Appendix-*.epub      -> answers
and writes questions/domain<N>.js.

How the EPUBs are shaped
------------------------
Each chapter EPUB is a zip holding one big `*_split_001.htm`. The review
questions live in a single <ol class="orderedlist">, one <li> per question:
the question text is the <li>'s direct <p>, and the four options are an inner
<ol class="orderedlist1">.

The appendix EPUB has one `*_split_00N.htm` per chapter -- split_001 is
Chapter 1, split_002 is Chapter 2, and so on. Each holds one <ol> whose Nth
<li> is the answer to question N, formatted "B. <explanation>".

So the pairing is purely positional. The script asserts the two counts match,
which is the check that catches a mis-split file.
"""
import json
import re
import sys
import zipfile
from pathlib import Path

from bs4 import BeautifulSoup

QUIZ_DIR = Path(__file__).resolve().parent.parent
EPUB_DIR = QUIZ_DIR.parent / "Questions_Answers_EPUB"

# The book uses typographic dashes and curly quotes throughout. Normalize them
# so the bank is plain ASCII and nothing renders as mojibake.
REPLACEMENTS = {
    "‐": "-", "‑": "-", "–": "-", "—": "--",
    "‘": "'", "’": "'", "“": '"', "”": '"',
    "\xa0": " ",
}


# Options that only make sense in their authored slot. The app pins these rather
# than shuffling them; see isPositional() in app.js.
POSITIONAL_RE = re.compile(r"^\s*(all|none|both)\s+of\s+(the\s+above|these|them)\b", re.I)

# --- explanation repairs --------------------------------------------------
# Keyed by (chapter, question number) -> (old fragment, replacement, why).
# The app reshuffles answer order every session, so an explanation that names an
# option by LETTER is nonsense by the time the reader sees it. Rewrite it to name
# the option's TEXT instead. Keep the book's wording everywhere else -- these are
# the minimum edits that survive shuffling. The extractor asserts each fragment is
# still present, so a re-run against a changed EPUB fails loudly instead of
# silently skipping the repair.
EXPLANATION_FIXUPS = {
    (3, 2): ("Options C and D are both incorrect.",
             "False trigger and false flag are both incorrect.",
             "named options by letter; the app shuffles them"),
    (3, 30): ("Options A, B, and C are incorrect.",
              "NIPS, HIPS, and content filter are incorrect.",
              "named options by letter; the app shuffles them"),
}

# --- option repairs -------------------------------------------------------
# Keyed by (chapter, question number) -> (corrected option list, why).
# For defects in the book/EPUB itself, where the markup lost information that
# cannot be recovered by parsing. Only add an entry you have checked against the
# book, and say what was wrong.
OPTION_FIXUPS = {
    (2, 153): (
        ["A VM escape issue",
         "Improper chain of custody",
         "A resource reuse issue",
         "Improper legal hold"],
        "The EPUB merged options C and D into a single list item "
        "('A resource reuse issueImproper legal hold'), leaving 3 options. Split "
        "back apart; the answer key's C still points at 'A resource reuse issue', "
        "which is what the explanation describes.",
    ),
}


def explanation_points_at(options, explanation, marked, question):
    """Which option the explanation opens by naming, or None.

    Questions and answers in this book are paired POSITIONALLY across two
    separate lists, so a single slip would misalign everything after it. This is
    the cheapest independent check on that: these explanations nearly always
    lead with the winning option's own wording.

    Three patterns look like a mismatch but aren't, and would make the check
    noisy enough to start ignoring:

    * The marked answer is "All of the above" -- the explanation cannot open by
      naming it, so it opens by naming the first real option.
    * The named option's text is a prefix of the marked one's.
    * The question is NEGATIVE ("which is not...", "except", "least likely").
      There the explanation properly opens by listing the distractors, which are
      the things that ARE true.
    """
    if POSITIONAL_RE.match(options[marked]):
        return None
    if re.search(r"(?i)\b(not|except|least|never|isn't|aren't|doesn't)\b", question):
        return None
    head = explanation.lower().lstrip()
    best, best_len = None, 0
    for i, opt in enumerate(options):
        key = opt.lower().strip().rstrip(".")
        if len(key) >= 4 and head.startswith(key) and len(key) > best_len:
            best, best_len = i, len(key)
    if best is None or best == marked:
        return None
    if options[marked].lower().strip().rstrip(".").startswith(
            options[best].lower().strip().rstrip(".")):
        return None
    return best


def clean(text):
    for bad, good in REPLACEMENTS.items():
        text = text.replace(bad, good)
    return re.sub(r"\s+", " ", text).strip()


def read_split(epub_path, index):
    """Return the text of the `_split_<index>.htm` member of an EPUB."""
    with zipfile.ZipFile(epub_path) as zf:
        names = [n for n in zf.namelist()
                 if re.search(rf"_split_0*{index}\.htm$", n)]
        if len(names) != 1:
            raise SystemExit(f"expected 1 split_{index} in {epub_path.name}, found {names}")
        return zf.read(names[0]).decode("utf-8")


def parse_questions(html):
    """Pull each question's stem, exhibit and options out of the chapter.

    A question is one <li>. Most are a single <p> followed by the options, but
    some carry an exhibit between the two: a <pre> of config lines, a <ul> of
    rules, or a <div class="sidebar"> holding a figure. Those questions are
    unanswerable without it, so everything before the options <ol> is collected
    rather than just the first <p>.
    """
    soup = BeautifulSoup(html, "html.parser")
    out = []
    for ol in soup.find_all("ol", class_="orderedlist"):
        for li in ol.find_all("li", recursive=False):
            inner = li.find("ol", class_="orderedlist1")
            if not inner:
                continue
            stem, exhibit, image, alt = [], [], None, None
            for node in li.children:
                if node is inner:
                    break
                if getattr(node, "name", None) is None:
                    continue
                if node.name == "p":
                    stem.append(clean(node.get_text()))
                elif node.name == "pre":
                    exhibit.extend(clean(t.get_text()) for t in node.find_all("tt"))
                    if not exhibit:
                        exhibit.append(clean(node.get_text()))
                elif node.name == "ul":
                    exhibit.extend("- " + clean(x.get_text())
                                   for x in node.find_all("li", recursive=False))
                else:
                    img = node.find("img") if hasattr(node, "find") else None
                    if img and img.get("src"):
                        image, alt = img["src"], clean(img.get("alt", ""))
                    # A sidebar can hold a <pre> instead of a figure (D1 Q45's
                    # openssl command, D4 Q202's PowerShell script). Missing it
                    # ships a "what does the following script do?" with no script.
                    pre = node.find("pre") if hasattr(node, "find") else None
                    if pre is not None:
                        lines = [clean(t.get_text()) for t in pre.find_all("tt")]
                        exhibit.extend(lines or [clean(pre.get_text())])
            if not stem:
                continue
            item = {
                "question": " ".join(stem),
                "answers": [clean(x.get_text())
                            for x in inner.find_all("li", recursive=False)],
            }
            if exhibit:
                item["exhibit"] = "\n".join(exhibit)
            if image:
                item["image_src"] = image
                item["image_alt"] = alt
            out.append(item)
    return out


def parse_answers(html):
    soup = BeautifulSoup(html, "html.parser")
    out = []
    for ol in soup.find_all("ol"):
        for li in ol.find_all("li", recursive=False):
            out.append(clean(li.get_text()))
    return out


def main():
    if len(sys.argv) != 2 or sys.argv[1] not in "12345":
        raise SystemExit("usage: python tools/extract_domain.py <1-5>")
    n = int(sys.argv[1])

    chapters = sorted(EPUB_DIR.glob(f"*-Chapter-{n}-Domain-*.epub"))
    appendix = sorted(EPUB_DIR.glob("*-Appendix-Answers*.epub"))
    if not chapters or not appendix:
        raise SystemExit(f"could not find the EPUBs for chapter {n} in {EPUB_DIR}")

    questions = parse_questions(read_split(chapters[0], 1))
    # Appendix split_00<n> holds chapter <n>'s answers.
    answers = parse_answers(read_split(appendix[0], n))

    if len(questions) != len(answers):
        raise SystemExit(
            f"MISMATCH: {len(questions)} questions vs {len(answers)} answers. "
            "The positional pairing is only safe when these are equal -- inspect "
            "the split files before going further."
        )

    letters = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5}
    bank, warnings, applied, figures = [], [], [], []
    for i, (q, a) in enumerate(zip(questions, answers), start=1):
        m = re.match(r"^([A-F])\.\s+(.*)$", a, re.S)
        if not m:
            raise SystemExit(f"Q{i}: answer does not start with a letter: {a[:80]!r}")
        idx = letters[m.group(1)]
        explanation = m.group(2).strip()

        efix = EXPLANATION_FIXUPS.get((n, i))
        if efix:
            old, new, why = efix
            if old not in explanation:
                raise SystemExit(
                    f"Q{i}: EXPLANATION_FIXUPS expected {old!r} but the EPUB no "
                    "longer contains it -- recheck the book before editing.")
            explanation = explanation.replace(old, new)
            applied.append(f"Q{i}: explanation rewritten -- {why}")

        # Repair known book/EPUB defects before anything else looks at the options.
        fix = OPTION_FIXUPS.get((n, i))
        if fix:
            q["answers"] = list(fix[0])
            applied.append(f"Q{i}: options repaired -- {fix[1]}")

        if idx >= len(q["answers"]):
            raise SystemExit(f"Q{i}: answer letter {m.group(1)} exceeds {len(q['answers'])} options")

        # The book sometimes prints the same distractor twice. Two identical
        # buttons look like an app bug, so collapse them and remap the answer.
        if len(set(q["answers"])) != len(q["answers"]):
            seen, deduped, remap = {}, [], {}
            for j, opt in enumerate(q["answers"]):
                if opt in seen:
                    remap[j] = seen[opt]
                else:
                    seen[opt] = len(deduped)
                    remap[j] = len(deduped)
                    deduped.append(opt)
            warnings.append(
                f"Q{i}: book repeats an option verbatim; collapsed "
                f"{len(q['answers'])} -> {len(deduped)} (answer still {deduped[remap[idx]]!r})")
            idx = remap[idx]
            q["answers"] = deduped

        # The app shuffles option order, which breaks any explanation that refers
        # to options by letter, and any positional option like "All of the above".
        # Flag both rather than silently shipping a broken question.
        if re.search(r"\b(Option|Options|Answer|Answers|Choice|Choices)\s+[A-F]\b", explanation):
            warnings.append(f"Q{i}: explanation refers to an option LETTER")
        for opt in q["answers"]:
            if POSITIONAL_RE.match(opt):
                warnings.append(f"Q{i}: positional option {opt!r} (pinned by the app)")
        if re.search(r"(?i)(select|choose)\s+(two|three|all that apply)", q["question"]):
            warnings.append(f"Q{i}: looks like a MULTI-select question (app is single-answer)")

        pointed = explanation_points_at(q["answers"], explanation, idx, q["question"])
        if pointed is not None:
            warnings.append(
                f"Q{i}: answer key says {'ABCDEF'[idx]} ({q['answers'][idx]!r}) but the "
                f"explanation opens by naming {'ABCDEF'[pointed]} "
                f"({q['answers'][pointed]!r}) -- CHECK BY HAND")

        item = {
            "id": f"SEC-D{n}-{i:03d}",
            "domain": f"{n}.0",
            "question": q["question"],
            "answers": q["answers"],
            "correct": idx,
            "explanation": explanation,
        }
        # An exhibit or figure is part of the question, not decoration -- without
        # it the stem ("...process the following rules?") cannot be answered.
        if "exhibit" in q:
            item["exhibit"] = q["exhibit"]
        if "image_src" in q:
            name = f"domain{n}-q{i:03d}.jpg"
            figures.append((q["image_src"], name))
            item["image"] = f"img/{name}"
            item["imageAlt"] = q["image_alt"]
        bank.append(item)

    header = (
        f"/* CompTIA Security+ SY0-701 -- Domain {n}.0\n"
        f"   {len(bank)} review questions extracted from:\n"
        f"     {chapters[0].name}\n"
        f"   Correct answers + explanations from:\n"
        f"     {appendix[0].name}\n"
        f"   Regenerate with: python tools/extract_domain.py {n}\n"
        f"   Question order matches the book; `correct` is a 0-based index into\n"
        f"   `answers` (the app shuffles answer order at runtime, so never rely\n"
        f"   on A/B/C/D here). */\n\n"
        f"window.QUESTION_BANKS = window.QUESTION_BANKS || {{}};\n"
        f'window.QUESTION_BANKS["domain{n}"] = '
    )
    dest = QUIZ_DIR / "questions" / f"domain{n}.js"
    dest.write_text(header + json.dumps(bank, indent=2, ensure_ascii=False) + ";\n",
                    encoding="utf-8")

    # Copy each figure out of the chapter EPUB next to the bank that cites it.
    if figures:
        img_dir = QUIZ_DIR / "questions" / "img"
        img_dir.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(chapters[0]) as zf:
            members = {Path(m).name: m for m in zf.namelist()}
            for src, name in figures:
                member = members.get(Path(src).name)
                if not member:
                    raise SystemExit(f"figure {src!r} is cited but not in the EPUB")
                (img_dir / name).write_bytes(zf.read(member))
        print(f"extracted {len(figures)} figure(s) to questions/img/")

    print(f"wrote {dest.relative_to(QUIZ_DIR)} -- {len(bank)} questions")
    counts = {}
    for q in bank:
        counts[q["correct"]] = counts.get(q["correct"], 0) + 1
    print("answer key spread:", {"ABCDEF"[k]: v for k, v in sorted(counts.items())})
    if applied:
        print(f"\n{len(applied)} REPAIR(S) APPLIED (see OPTION_FIXUPS at the top of this script):")
        for a in applied:
            print("  *", a)

    if warnings:
        print(f"\n{len(warnings)} WARNING(S) -- review these by hand:")
        for w in warnings:
            print("  -", w)
    else:
        print("no warnings")


if __name__ == "__main__":
    main()

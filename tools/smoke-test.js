/* Headless smoke test for the quiz app. Drives the real index.html in jsdom:
   picks a domain, sets a count, answers questions, checks the score, and
   verifies the weak-question tracking and session log.

   Setup (once):
       cd tools && npm install jsdom

   Run (from the QUIZ folder, with the app served locally):
       python -m http.server 8731        # in another terminal
       node tools/smoke-test.js

   jsdom resolves the <script src> tags against the document URL, so the app
   must actually be served -- opening it from disk will report "0 questions". */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const PORT = process.env.PORT || 8731;
const INDEX = path.join(__dirname, "..", "index.html");
const POSITIONAL = /^\s*(all|none|both)\s+of\s+(the\s+above|these|them)\b/i;

let pass = 0, fail = 0;
function check(name, cond, extra) {
  if (cond) { pass++; console.log("  PASS  " + name); }
  else { fail++; console.log("  FAIL  " + name + (extra !== undefined ? "  -> " + extra : "")); }
}

const dom = new JSDOM(fs.readFileSync(INDEX, "utf8"), {
  runScripts: "dangerously",
  resources: "usable",
  url: `http://localhost:${PORT}/`,
  pretendToBeVisual: true
});
dom.window.scrollTo = () => {};
dom.window.addEventListener("error", e => {
  console.log("PAGE ERROR:", e.error && e.error.stack);
  fail++;
});

setTimeout(() => {
  const w = dom.window, d = w.document;
  const $ = id => d.getElementById(id);
  const vis = id => !$(id).classList.contains("hidden");
  const press = key => d.dispatchEvent(new w.KeyboardEvent("keydown", { key, bubbles: true }));
  // Options are rendered as "<letter><text>"; strip the letter to compare.
  const shownAnswers = () => [...d.querySelectorAll(".q-answer")].map(b => b.textContent.slice(1));
  const currentSource = () => {
    const qt = $("q-text").textContent;
    for (const dom_ of w.DOMAINS) {
      const bank = (w.QUESTION_BANKS || {})[dom_.bank] || [];
      const hit = bank.find(q => q.question === qt);
      if (hit) return hit;
    }
    return null;
  };
  const answerCorrectly = () => {
    const src = currentSource();
    const btns = d.querySelectorAll(".q-answer");
    btns[shownAnswers().indexOf(src.answers[src.correct])].click();
    return src;
  };

  if (!w.QUESTION_BANKS) {
    console.log(`\nFATAL: no question banks loaded. Is the app served on port ${PORT}?`);
    process.exit(1);
  }

  const loaded = w.DOMAINS.filter(x => (w.QUESTION_BANKS[x.bank] || []).length > 0);
  console.log(`\n== Banks loaded ==`);
  w.DOMAINS.forEach(x => {
    const n = (w.QUESTION_BANKS[x.bank] || []).length;
    console.log(`  Domain ${x.num}: ${n ? n + " questions" : "(not loaded)"}`);
  });
  check("at least one domain has questions", loaded.length > 0);

  console.log("\n== Bank integrity ==");
  loaded.forEach(dm => {
    const bank = w.QUESTION_BANKS[dm.bank];
    const ids = new Set(bank.map(q => q.id));
    check(`D${dm.num} ids unique`, ids.size === bank.length, `${ids.size}/${bank.length}`);
    check(`D${dm.num} every correct index in range`,
      bank.every(q => Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.answers.length));
    check(`D${dm.num} every question has >=2 options`, bank.every(q => q.answers.length >= 2));
    check(`D${dm.num} no duplicate option text`,
      bank.every(q => new Set(q.answers).size === q.answers.length));
    check(`D${dm.num} every question has an explanation`,
      bank.every(q => q.explanation && q.explanation.length > 20));
    check(`D${dm.num} no explanation cites an option letter`,
      bank.every(q => !/\b(Option|Options|Answer|Answers|Choice|Choices)\s+[A-F]\b/.test(q.explanation)));
    // "All of the above" is allowed -- the app pins it rather than shuffling it
    // into the middle, which the pinning section below verifies for real.
    const posN = bank.filter(q => q.answers.some(a => POSITIONAL.test(a))).length;
    if (posN) console.log(`        (${posN} question(s) with a positional option)`);
  });

  /* ---- Objective tags: the subcategory layer. Everything here is skipped
     cleanly when questions/objectives.js is absent, because the app is
     supposed to fall back to plain domain drilling in that case. */
  console.log("\n== Objective tags ==");
  const tags = w.QUESTION_OBJECTIVES || {};
  const objMeta = w.OBJECTIVE_META || {};
  const hasObjectives = Object.keys(tags).length > 0;
  if (!hasObjectives) {
    console.log("  SKIP  no objectives.js loaded (app falls back to domains)");
  } else {
    const allIds = new Set();
    loaded.forEach(dm => w.QUESTION_BANKS[dm.bank].forEach(q => allIds.add(q.id)));
    const tagged = [...allIds].filter(id => tags[id]);
    check("every loaded question has an objective tag",
      tagged.length === allIds.size, `${tagged.length}/${allIds.size}`);
    check("every tag names a known objective",
      Object.values(tags).every(t => !!objMeta[t.o]),
      Object.values(tags).filter(t => !objMeta[t.o]).slice(0, 3).map(t => t.o).join(","));
    // A tag must belong to the domain its question sits in -- a 5.x tag on a
    // domain 2 question would scatter a domain's questions across the picker.
    let crossDomain = [];
    loaded.forEach(dm => w.QUESTION_BANKS[dm.bank].forEach(q => {
      const t = tags[q.id];
      if (t && objMeta[t.o] && objMeta[t.o].domain !== dm.num) crossDomain.push(q.id);
    }));
    check("no tag points at another domain's objective",
      crossDomain.length === 0, crossDomain.slice(0, 3).join(","));
    check("confidence is one of high/low/manual",
      Object.values(tags).every(t => ["high", "low", "manual"].includes(t.c)));
  }

  console.log("\n== Home ==");
  check("home visible", vis("view-home"));
  const cards = d.querySelectorAll(".domain-card");
  check("one card per domain", cards.length === w.DOMAINS.length, cards.length);
  check("loaded domains enabled", [...cards].filter(c => !c.disabled).length === loaded.length);

  console.log("\n== Setup ==");
  [...cards].find(c => !c.disabled).click();
  if (hasObjectives) {
    // With tags loaded, a domain card opens the objective picker first.
    check("domain card opens the objective picker", vis("view-objectives"));
    const rows = d.querySelectorAll(".objective-row");
    check("picker has an All row plus one per objective", rows.length > 1, rows.length);
    check("first row is the whole-domain row",
      rows[0].classList.contains("objective-row-all"));
    const nums = [...rows].slice(1).map(r => r.querySelector(".objective-num").textContent);
    check("objective rows are in objective order",
      JSON.stringify(nums) === JSON.stringify(nums.slice().sort()), nums.join(","));
    check("every objective row states a question count",
      [...rows].slice(1).every(r => /\d+ questions/.test(r.textContent)));
    rows[0].click();   // "Whole domain, mixed" -> the old path
  }
  check("setup visible", vis("view-setup"));
  const poolSize = loaded[0] ? w.QUESTION_BANKS[loaded[0].bank].length : 0;
  check("pool size reported", $("setup-count").textContent.startsWith(String(poolSize)), $("setup-count").textContent);
  const presets = [...d.querySelectorAll(".setup-opt")].map(b => b.textContent);
  check("last preset is All(n)", presets[presets.length - 1] === `All (${poolSize})`, presets.join(","));
  check("no preset exceeds pool",
    presets.slice(0, -1).every(p => parseInt(p, 10) < poolSize), presets.join(","));

  console.log("\n== Custom count + confidence gate ==");
  $("custom-count").value = "6";
  $("custom-start").click();
  check("quiz started", vis("view-quiz"));
  check("6 questions", $("q-counter").textContent === "Question 1 / 6", $("q-counter").textContent);
  check("answers locked before confidence", [...d.querySelectorAll(".q-answer")].every(b => b.disabled));
  d.querySelector('.confidence-btn[data-confidence="sure"]').click();
  check("answers unlocked after confidence", [...d.querySelectorAll(".q-answer")].every(b => !b.disabled));

  console.log("\n== Answering ==");
  const q1 = currentSource();
  check("rendered question came from a bank", !!q1);
  check("shuffled options match the bank set",
    JSON.stringify(shownAnswers().slice().sort()) === JSON.stringify(q1.answers.slice().sort()));
  answerCorrectly();
  check("marked Correct", $("feedback-banner").textContent === "Correct");
  check("explanation matches bank", $("feedback-explain").textContent === q1.explanation);
  check("next shown, finish hidden", vis("next-btn") && !vis("finish-btn"));

  // q2 wrong + guessed, q3 correct but unsure -> both must land in the review.
  press("ArrowRight");
  d.querySelector('.confidence-btn[data-confidence="guessed"]').click();
  const q2 = currentSource();
  const btns2 = d.querySelectorAll(".q-answer");
  btns2[shownAnswers().findIndex(t => t !== q2.answers[q2.correct])].click();
  check("marked Incorrect", $("feedback-banner").textContent === "Incorrect");

  press("ArrowRight");
  press("2"); // unsure
  check("keyboard set confidence",
    d.querySelector('.confidence-btn[data-confidence="unsure"]').classList.contains("selected"));
  const q3 = currentSource();
  press("ABCDEF"[shownAnswers().indexOf(q3.answers[q3.correct])]);
  check("keyboard answered correctly", $("feedback-banner").textContent === "Correct");

  console.log("\n== Navigation ==");
  press("ArrowLeft");
  check("went back", $("q-counter").textContent === "Question 2 / 6");
  check("previous feedback preserved", vis("q-feedback"));
  press("ArrowRight");

  for (let i = 4; i <= 6; i++) {
    press("ArrowRight");
    d.querySelector('.confidence-btn[data-confidence="sure"]').click();
    answerCorrectly();
  }
  check("on last question", $("q-counter").textContent === "Question 6 / 6");
  check("finish shown on last", vis("finish-btn") && !vis("next-btn"));

  console.log("\n== Results ==");
  $("finish-btn").click();
  check("results visible", vis("view-results"));
  check("score is 5 / 6", $("results-score").textContent.startsWith("5 / 6"), $("results-score").textContent);
  check("percent 83.3", /83\.3%/.test($("results-score").textContent), $("results-score").textContent);
  check("verdict pass", $("results-verdict").className.includes("pass"));
  const stats = $("results-stats").textContent;
  check("stats 5/1/1/1", /5Correct/.test(stats) && /1Wrong/.test(stats) && /1Unsure/.test(stats) && /1Guessed/.test(stats), stats);
  check("review has 2 items (wrong + unsure)", d.querySelectorAll(".review-item").length === 2,
    d.querySelectorAll(".review-item").length);
  const rev = $("results-review").textContent;
  check("review tags present", /WRONG/.test(rev) && /GUESSED/.test(rev) && /UNSURE/.test(rev));

  console.log("\n== Persistence ==");
  const prog = JSON.parse(w.localStorage.getItem("secplus_progress_v1"));
  check("6 questions recorded", Object.keys(prog).length === 6, Object.keys(prog).length);
  const logs = JSON.parse(w.localStorage.getItem("secplus_results_v1"));
  check("session logged", logs.length === 1);
  check("logged accuracy 83.3", logs[0].accuracyPercent === 83.3, logs[0].accuracyPercent);
  check("logged per-question detail", logs[0].questions.length === 6 && !!logs[0].questions[0].questionId);

  console.log("\n== Weak tracking ==");
  $("retry-weak-btn").click();
  check("retry runs the 2 flagged", $("q-counter").textContent === "Question 1 / 2", $("q-counter").textContent);
  d.querySelector('.quit-btn[data-nav="home"]').click();
  check("weak button enabled", !$("weak-btn").disabled);
  check("2 flagged on home", /^2 questions flagged/.test($("weak-count").textContent), $("weak-count").textContent);
  check("export enabled", !$("export-results-btn").disabled);

  /* Objective drilling runs AFTER weak tracking on purpose: it completes a
     fresh session, which would otherwise replace the 6-question results that
     the retry-weak test above depends on. */
  console.log("\n== Objective drilling and logging ==");
  if (!hasObjectives) {
    console.log("  SKIP  no objectives.js loaded");
  } else {
    // Drill a single objective end to end, then prove the log carries the
    // per-objective score -- the whole point of the change.
    d.querySelector('.quit-btn[data-nav="home"]')?.click();
    $("mock-btn"); // no-op, keeps the view on home
    [...d.querySelectorAll(".domain-card")].find(c => !c.disabled).click();
    const objRows = [...d.querySelectorAll(".objective-row")].slice(1);
    const target = objRows.find(r => {
      const n = parseInt(r.textContent.match(/(\d+) questions/)[1], 10);
      return n >= 4;
    }) || objRows[0];
    const targetNum = target.querySelector(".objective-num").textContent;
    target.click();
    check("objective opens the count screen", vis("view-setup"));
    check("setup names the objective",
      $("setup-name").textContent.includes(targetNum), $("setup-name").textContent);
    d.querySelectorAll(".setup-opt")[0].click();   // smallest preset
    check("objective session started", vis("view-quiz"));
    const drilled = [];
    for (let i = 0; i < 200; i++) {
      const src = currentSource();
      if (src) drilled.push(src.id);
      d.querySelector('.confidence-btn[data-confidence="sure"]').click();
      answerCorrectly();
      if (!vis("finish-btn")) press("ArrowRight"); else break;
    }
    check("every question drawn belongs to that objective",
      drilled.length > 0 && drilled.every(id => tags[id] && tags[id].o === targetNum),
      drilled.map(id => tags[id] && tags[id].o).filter((v, i, a) => a.indexOf(v) === i).join(","));
    $("finish-btn").click();
    check("objective session results shown", vis("view-results"));
    const objLogs = JSON.parse(w.localStorage.getItem("secplus_results_v1") || "[]");
    const last = objLogs[objLogs.length - 1];
    check("log carries objectiveScores", Array.isArray(last.objectiveScores));
    check("single-objective session logs exactly that objective",
      last.objectiveScores.length === 1 && last.objectiveScores[0].objective === targetNum,
      JSON.stringify(last.objectiveScores));
    check("logged questions carry their objective",
      last.questions.every(q => q.objective === targetNum));
    d.querySelector('[data-nav="home"]')?.click();
  }

  /* With objective tags loaded, a domain card opens the picker rather than the
     count screen. Everything below drills a whole domain, so it goes through
     the "All" row when the picker is in the way. */
  const openWholeDomain = index => {
    d.querySelectorAll(".domain-card")[index].click();
    if (vis("view-objectives")) d.querySelector(".objective-row-all").click();
  };

  console.log("\n== Positional options stay pinned ==");
  // "All of the above" must never be shuffled out of its authored slot.
  const pinBank = loaded.map(dm => w.QUESTION_BANKS[dm.bank])
    .find(b => b.some(q => q.answers.some(a => POSITIONAL.test(a))));
  if (!pinBank) {
    console.log("  (no positional options in the loaded banks -- nothing to check)");
  } else {
    const pinDomain = loaded.find(dm => w.QUESTION_BANKS[dm.bank] === pinBank);
    const posQs = pinBank.filter(q => q.answers.some(a => POSITIONAL.test(a)));
    let pinOk = true, sightings = 0;
    outer:
    for (let round = 0; round < 6; round++) {
      openWholeDomain(w.DOMAINS.indexOf(pinDomain));
      const opts = d.querySelectorAll(".setup-opt");
      opts[opts.length - 1].click(); // "All"
      for (let i = 0; i < pinBank.length; i++) {
        const src = currentSource();
        if (src && posQs.indexOf(src) >= 0) {
          sightings++;
          const authored = src.answers.findIndex(a => POSITIONAL.test(a));
          const rendered = shownAnswers().findIndex(a => POSITIONAL.test(a));
          if (authored !== rendered) { pinOk = false; break outer; }
        }
        d.querySelector('.confidence-btn[data-confidence="sure"]').click();
        answerCorrectly();
        if (i < pinBank.length - 1) press("ArrowRight");
      }
      d.querySelector('.quit-btn[data-nav="home"]').click();
    }
    check(`positional option kept its authored slot (${sightings} sightings)`,
      pinOk && sightings > 0, sightings);
  }

  console.log("\n== Shuffling ==");
  const seen = new Set();
  for (let t = 0; t < 8; t++) {
    openWholeDomain(w.DOMAINS.indexOf(loaded[0]));
    d.querySelectorAll(".setup-opt")[0].click();
    const rendered = [...d.querySelectorAll(".q-answer")].map(b => b.textContent).join("|");
    seen.add(rendered);
    d.querySelector('.quit-btn[data-nav="home"]').click();
  }
  // Guard against the old false pass: an empty answer list would have made
  // every round identical *and* meaningless, so require real content too.
  check("a question actually rendered in the shuffle rounds",
    [...seen].every(s => s.length > 0), [...seen][0] === "" ? "empty render" : "ok");
  check("question/answer order varies between sessions", seen.size > 1, seen.size + " distinct starts");

  /* ---- Mock exam: 90 questions in 90 minutes, weighted like the real exam.
     The draw must respect the published weights, the clock must run, and
     hitting zero must end the session with unanswered questions as wrong. */
  console.log("\n== Mock exam ==");
  const WEIGHTS = { "1.0": 11, "2.0": 20, "3.0": 16, "4.0": 25, "5.0": 18 };
  const allLoaded = w.DOMAINS.every(x => (w.QUESTION_BANKS[x.bank] || []).length >= (WEIGHTS[x.num] || 0));

  if (!allLoaded) {
    console.log("  SKIP  not all five banks loaded");
  } else {
    d.querySelector('.quit-btn[data-nav="home"]')?.click();
    const realConfirm = w.confirm;
    w.confirm = () => true;

    check("mock button enabled", !$("mock-btn").disabled);
    $("mock-btn").click();
    check("mock starts the quiz view", vis("view-quiz"));
    check("mock draws 90 questions",
      $("q-counter").textContent.includes("/ 90"), $("q-counter").textContent);

    // Count the draw by domain by looking each question up in its bank.
    const bankOf = q => {
      for (const dm of w.DOMAINS) {
        if ((w.QUESTION_BANKS[dm.bank] || []).some(x => x.id === q.id)) return dm.num;
      }
      return "?";
    };
    // Reach into the rendered set via the questions the app is holding: walk
    // every question once using the counter, matching on stem text.
    const drawn = {};
    for (let i = 0; i < 90; i++) {
      const src = currentSource();
      if (src) drawn[bankOf(src)] = (drawn[bankOf(src)] || 0) + 1;
      d.querySelector('.confidence-btn[data-confidence="sure"]').click();
      answerCorrectly();
      if (i < 89) press("ArrowRight");
    }
    const weightOk = Object.keys(WEIGHTS).every(k => drawn[k] === WEIGHTS[k]);
    check("draw matches exam weights (11/20/16/25/18)", weightOk, JSON.stringify(drawn));

    $("finish-btn").click();
    check("mock results shown", vis("view-results"));
    check("per-domain breakdown rendered",
      !$("results-domains").classList.contains("hidden") &&
      $("results-domains").querySelectorAll(".domain-row").length === 5,
      $("results-domains").querySelectorAll(".domain-row").length + " rows");
    if (hasObjectives) {
      // A 90-question weighted mock touches many objectives, so the
      // objective table must render alongside the domain one.
      const objRowsN = $("results-objectives").querySelectorAll(".domain-row").length;
      check("per-objective breakdown rendered on a mock",
        !$("results-objectives").classList.contains("hidden") && objRowsN > 5, objRowsN + " rows");
      check("mock log carries objectiveScores",
        (() => {
          const l = JSON.parse(w.localStorage.getItem("secplus_results_v1") || "[]")
            .filter(x => x.mode === "mock").pop();
          return !!l && Array.isArray(l.objectiveScores) && l.objectiveScores.length > 5;
        })());
    }
    check("all-correct mock scores 100%", $("results-score").textContent.includes("90 / 90"),
      $("results-score").textContent);

    const logs = JSON.parse(w.localStorage.getItem("secplus_results_v1") || "[]");
    const mockLog = logs.filter(l => l.mode === "mock").pop();
    check("mock logged with mode + domain scores",
      !!mockLog && mockLog.domainScores && mockLog.domainScores.length === 5,
      mockLog && mockLog.domainScores && mockLog.domainScores.length);
    check("mock log records the time limit",
      !!mockLog && mockLog.timeLimitMs === 90 * 60000, mockLog && mockLog.timeLimitMs);

    // Timer expiry: start a fresh mock, wind the deadline back, let it tick.
    $("mock-btn").click();
    check("timer visible during a mock", !$("quiz-timer").classList.contains("hidden"));
    const before = $("quiz-timer").textContent;
    check("timer shows 90 minutes at the start", /^(90:00|89:5\d)$/.test(before), before);

    // Answer 3, leave 87, then expire the clock.
    for (let i = 0; i < 3; i++) {
      d.querySelector('.confidence-btn[data-confidence="sure"]').click();
      answerCorrectly();
      press("ArrowRight");
    }
    // The app runs inside jsdom's realm, so its Date is w.Date -- overriding
    // Node's own Date.now here would have no effect on the running timer.
    const realNow = w.Date.now;
    w.Date.now = () => realNow() + 91 * 60000;   // jump past the deadline
    return new Promise(res => setTimeout(res, 1400)).then(() => {
      w.Date.now = realNow;
      check("expiry auto-submits to results", vis("view-results"));
      check("expiry marks unanswered as wrong",
        $("results-score").textContent.includes("3 / 90"), $("results-score").textContent);
      check("expiry noted on the results screen",
        /time expired with 87 unanswered/i.test($("results-source").textContent),
        $("results-source").textContent);
      const logs2 = JSON.parse(w.localStorage.getItem("secplus_results_v1") || "[]");
      const expired = logs2.filter(l => l.timeExpired).pop();
      check("expired mock logged as expired",
        !!expired && expired.unansweredCount === 87, expired && expired.unansweredCount);
      w.confirm = realConfirm;

      console.log(`\n=========== ${pass} passed, ${fail} failed ===========`);
      process.exit(fail ? 1 : 0);
    });
  }

  console.log(`\n=========== ${pass} passed, ${fail} failed ===========`);
  process.exit(fail ? 1 : 0);
}, 900);

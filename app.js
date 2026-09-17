/* Security+ SY0-701 quiz engine.
   Single cert, one bank per exam domain. Progress and the completed-session
   log live in localStorage so a study streak survives a browser restart. */
(function () {
  "use strict";

  const PROGRESS_KEY = "secplus_progress_v1";
  const RESULTS_KEY = "secplus_results_v1";
  // Objective tags live in questions/objectives.js, keyed by question id, built
  // by tools/classify_objectives.py. Kept out of the generated banks so that
  // re-running the extractor cannot lose them. Missing file = the app runs
  // exactly as it did before, with the objective layer switched off.
  const OBJ_TAGS = window.QUESTION_OBJECTIVES || {};
  const OBJ_META = window.OBJECTIVE_META || {};
  const HAS_OBJECTIVES = Object.keys(OBJ_TAGS).length > 0;
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const PASS_MARK = 75; // CompTIA scales to 750/900; 75% is the usual study proxy.

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  /* ---------------- storage ----------------
     Opening index.html straight off disk gives some browsers an opaque origin,
     where touching localStorage throws. Quotas and private-browsing modes throw
     too. A quiz you can't take is worse than a quiz that forgets you, so every
     access degrades to in-memory and the app keeps working either way. */
  const memoryStore = {};
  let storageWorks = null;

  function hasStorage() {
    if (storageWorks === null) {
      try {
        window.localStorage.setItem("__secplus_probe", "1");
        window.localStorage.removeItem("__secplus_probe");
        storageWorks = true;
      } catch (e) {
        storageWorks = false;
      }
    }
    return storageWorks;
  }
  function readKey(key) {
    if (!hasStorage()) return memoryStore[key] || null;
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return memoryStore[key] || null;
    }
  }
  function writeKey(key, value) {
    memoryStore[key] = value;
    if (!hasStorage()) return;
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      storageWorks = false; // quota blown mid-session; fall back for good.
    }
  }
  function removeKey(key) {
    delete memoryStore[key];
    if (!hasStorage()) return;
    try {
      window.localStorage.removeItem(key);
    } catch (e) { /* nothing useful to do */ }
  }

  /* ---------------- progress store ----------------
     One entry per question id, carried across every session, so "weak" is a
     running judgement rather than a snapshot of the last quiz. */
  function loadProgress() {
    try {
      return JSON.parse(readKey(PROGRESS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(store) {
    writeKey(PROGRESS_KEY, JSON.stringify(store));
  }
  /* ---------------- objective helpers ----------------
     A question's objective (1.1 - 5.6) is the subcategory the exam itself is
     organised by, which is a finer grain than the five domains. "Domain 2 at
     40%" says study domain 2; "2.3 at 0/3 while 2.1 is 6/6" says what to read
     tonight. */
  // PBQs carry their objective inline rather than in objectives.js.
  function objectiveOf(q) {
    const tag = OBJ_TAGS[q.id];
    return tag ? tag.o : (q.objective || "");
  }
  function objectiveConfidence(q) {
    const tag = OBJ_TAGS[q.id];
    return tag ? tag.c : (q.objective ? "manual" : "");
  }
  function objectiveName(oid) {
    return (OBJ_META[oid] && OBJ_META[oid].name) || "";
  }
  // Items of one domain, grouped by objective, in objective order.
  function objectiveGroups(domain) {
    const groups = {};
    getBank(domain.bank).forEach(q => {
      const oid = objectiveOf(q) || "unsorted";
      (groups[oid] = groups[oid] || []).push({ q, domain });
    });
    return Object.keys(groups).sort().map(oid => ({
      oid,
      name: oid === "unsorted" ? "Not yet categorised" : objectiveName(oid),
      items: groups[oid],
      // How many of this objective's questions are currently flagged weak --
      // the number that decides where to spend the next session.
      weak: groups[oid].filter(it => isWeak(loadProgress()[it.q.id])).length,
      // Running accuracy from the progress store, across every past session.
      stats: objectiveStats(groups[oid])
    }));
  }
  // Lifetime asked/correct for a set of items, from the per-question store.
  function objectiveStats(items) {
    const store = loadProgress();
    let asked = 0, correct = 0, shaky = 0;
    items.forEach(it => {
      const e = store[it.q.id];
      if (!e) return;
      const seen = (e.correctCount || 0) + (e.wrongCount || 0);
      asked += seen;
      correct += e.correctCount || 0;
      if (isWeak(e)) shaky++;
    });
    return { asked, correct, shaky, percent: asked ? Math.round((correct / asked) * 100) : null };
  }

  function recordAnswer(qid, correct, confidence, hinted) {
    const store = loadProgress();
    const entry = store[qid] || { correctCount: 0, wrongCount: 0, guessedCount: 0 };
    if (correct) entry.correctCount++; else entry.wrongCount++;
    if (confidence === "guessed") entry.guessedCount++;
    if (hinted) entry.hintedCount = (entry.hintedCount || 0) + 1;
    entry.lastResult = correct ? "correct" : "incorrect";
    entry.lastConfidence = confidence;
    entry.lastHinted = !!hinted;
    entry.lastSeen = Date.now();
    store[qid] = entry;
    saveProgress(store);
  }
  // Weak = got it wrong last time, got it right without being sure, or needed
  // a hint. A hinted right answer is help, not knowledge.
  function isWeak(entry) {
    return !!entry && (entry.lastResult === "incorrect" || !!entry.lastHinted ||
      (entry.lastConfidence && entry.lastConfidence !== "sure"));
  }

  /* ---------------- completed-session log ---------------- */
  function loadResultLogs() {
    try {
      const logs = JSON.parse(readKey(RESULTS_KEY));
      return Array.isArray(logs) ? logs : [];
    } catch (e) {
      return [];
    }
  }
  function saveResultLogs(logs) {
    writeKey(RESULTS_KEY, JSON.stringify(logs));
  }
  function refreshLogSummary() {
    const logs = loadResultLogs();
    const summary = document.getElementById("log-summary");
    const exportBtn = document.getElementById("export-results-btn");
    if (logs.length === 0) {
      summary.textContent = "No completed sessions logged";
    } else {
      const best = Math.max.apply(null, logs.map(l => l.accuracyPercent));
      summary.textContent = logs.length + " completed session" +
        (logs.length === 1 ? "" : "s") + " · best " + best + "%";
    }
    exportBtn.disabled = logs.length === 0;
  }
  function downloadJson(payload, filename) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /* ---------------- data helpers ---------------- */
  function getBank(bankId) {
    return (window.QUESTION_BANKS && window.QUESTION_BANKS[bankId]) || [];
  }
  // Every loaded question paired with the domain it came from, PBQs included
  // so a PBQ you got wrong lands on the weak list like any other question.
  function allItems() {
    const out = [];
    window.DOMAINS.forEach(d => {
      getBank(d.bank).forEach(q => out.push({ q, domain: d }));
    });
    return out.concat(pbqItems());
  }

  /* ---------------- performance-based questions ----------------
     Original simulations in questions/pbq.js. Three interaction types --
     order, categorize, table -- cover the exam's PBQ styles (sequencing,
     matching/placement, firewall/settings/log analysis). Every interaction is
     tap-to-select then tap-to-place, because HTML drag-and-drop does not work
     on phones. Scored with partial credit, like the real exam. */
  function pbqItems() {
    return (window.PBQ_BANK || []).map(q => {
      const dnum = String(q.objective).split(".")[0] + ".0";
      return { q: Object.assign({ pbq: true }, q), domain: window.DOMAINS.find(d => d.num === dnum) };
    });
  }
  const isPbq = q => !!(q && q.pbq);

  // Blank cells in a table PBQ, as [row, col, cell] triples.
  function pbqBlanks(q) {
    const out = [];
    q.rows.forEach((row, r) => row.forEach((cell, c) => {
      if (cell && typeof cell === "object") out.push([r, c, cell]);
    }));
    return out;
  }
  function newPbqState(q) {
    const idx = q.items ? shuffle(q.items.map((_, i) => i)) : [];
    if (q.type === "order") return { pool: idx, placed: [] };
    if (q.type === "categorize") return { pool: idx, placement: {}, selected: null };
    return { values: {} };
  }
  function pbqComplete(q, st) {
    if (q.type === "order") return st.placed.length === q.items.length;
    if (q.type === "categorize") return Object.keys(st.placement).length === q.items.length;
    return pbqBlanks(q).every(([r, c]) => st.values[r + "-" + c]);
  }
  // Fraction right, rounded to 2dp. Order: positions right. Categorize:
  // items in the right group. Table: blanks filled correctly.
  function scorePbq(q, st) {
    let right = 0, total = 0;
    if (q.type === "order") {
      total = q.items.length;
      st.placed.forEach((itemIdx, pos) => { if (itemIdx === pos) right++; });
    } else if (q.type === "categorize") {
      total = q.items.length;
      q.items.forEach((it, i) => { if (st.placement[i] === it.category) right++; });
    } else {
      const blanks = pbqBlanks(q);
      total = blanks.length;
      blanks.forEach(([r, c, cell]) => { if (st.values[r + "-" + c] === cell.answer) right++; });
    }
    return { right, total, score: total ? Math.round((right / total) * 100) / 100 : 0 };
  }
  // One-line text versions for the review list and the exported log.
  function pbqResponseText(q, st) {
    if (q.type === "order") return st.placed.map((i, p) => (p + 1) + ". " + q.items[i]).join(" | ");
    if (q.type === "categorize") return q.items.map((it, i) => it.text + " → " + (st.placement[i] || "—")).join(" | ");
    return pbqBlanks(q).map(([r, c]) => q.columns[c] + " (" + q.rows[r][0] + "): " + (st.values[r + "-" + c] || "—")).join(" | ");
  }
  function pbqAnswerText(q) {
    if (q.type === "order") return q.items.map((t, p) => (p + 1) + ". " + t).join(" | ");
    if (q.type === "categorize") return q.items.map(it => it.text + " → " + it.category).join(" | ");
    return pbqBlanks(q).map(([r, c, cell]) => q.columns[c] + " (" + q.rows[r][0] + "): " + cell.answer).join(" | ");
  }
  function weakItems() {
    const store = loadProgress();
    return allItems().filter(item => isWeak(store[item.q.id]));
  }

  /* ---------------- mock exam ----------------
     The real SY0-701 is at most 90 questions in 90 minutes, drawn across the
     five domains by published weight. Sampling per domain rather than from one
     flat pool is the point: a flat shuffle of 1,005 questions would over-sample
     whichever bank happens to be biggest, and the whole reason to sit a mock is
     to find out which *weighted* areas are weak. */
  const MOCK_QUESTIONS = 90;
  const MOCK_MINUTES = 90;
  // 12/22/18/28/20 of 90 -> 11/20/16/25/18, which sums to exactly 90.
  const MOCK_WEIGHTS = { "1.0": 11, "2.0": 20, "3.0": 16, "4.0": 25, "5.0": 18 };

  function mockPool() {
    const picked = [];
    const short = [];
    window.DOMAINS.forEach(d => {
      const want = MOCK_WEIGHTS[d.num] || 0;
      const bank = getBank(d.bank);
      if (!want) return;
      if (bank.length < want) short.push(d.num + " (" + bank.length + "/" + want + ")");
      shuffle(bank).slice(0, want).forEach(q => picked.push({ q, domain: d }));
    });
    return { items: shuffle(picked), short };
  }

  function mockAvailable() {
    return window.DOMAINS.every(d => !MOCK_WEIGHTS[d.num] ||
      getBank(d.bank).length >= MOCK_WEIGHTS[d.num]);
  }

  function formatClock(ms) {
    const total = Math.max(0, Math.round(ms / 1000));
    const m = Math.floor(total / 60);
    const sec = total % 60;
    return (m < 10 ? "0" : "") + m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  function stopTimer() {
    if (state.timerId) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
    const el = document.getElementById("quiz-timer");
    el.classList.add("hidden");
    el.classList.remove("warning", "critical");
  }

  function startTimer(s) {
    const el = document.getElementById("quiz-timer");
    el.classList.remove("hidden", "warning", "critical");
    const tick = () => {
      const left = s.deadlineMs - Date.now();
      el.textContent = formatClock(left);
      el.classList.toggle("warning", left <= 10 * 60000 && left > 5 * 60000);
      el.classList.toggle("critical", left <= 5 * 60000);
      if (left <= 0) {
        stopTimer();
        s.expired = true;
        // Hard stop, like the real exam: whatever is unanswered scores as wrong.
        document.getElementById("progress-fill").style.width = "100%";
        renderResults();
      }
    };
    tick();
    state.timerId = window.setInterval(tick, 1000);
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // "All of the above" / "None of these" only make sense in their authored slot,
  // so they stay pinned while everything around them moves.
  function isPositional(text) {
    return /^\s*(all|none|both)\s+of\s+(the\s+above|these|them)\b/i.test(text);
  }
  // Copy of q with answer order shuffled and .correct remapped, so the correct
  // choice isn't always sitting where the book left it.
  function shuffleAnswers(q) {
    const pinned = q.answers.map(isPositional);
    const movable = q.answers.map((_, i) => i).filter(i => !pinned[i]);
    const reordered = shuffle(movable);
    // order[slot] = index of the original answer that now sits in that slot
    const order = [];
    let m = 0;
    q.answers.forEach((_, slot) => {
      order[slot] = pinned[slot] ? slot : reordered[m++];
    });
    return Object.assign({}, q, {
      answers: order.map(i => q.answers[i]),
      correct: order.indexOf(q.correct)
    });
  }

  /* ---------------- view switching ---------------- */
  const state = { session: null, timerId: null };

  function showView(id) {
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("hidden", v.id !== id));
    window.scrollTo(0, 0);
  }
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.getAttribute("data-nav") === "home") renderHome();
    });
  });

  /* ---------------- HOME ---------------- */
  function renderHome() {
    stopTimer(); // quitting a mock must not leave the clock running
    state.session = null;
    const wrap = document.getElementById("domain-cards");
    wrap.innerHTML = "";

    window.DOMAINS.forEach(d => {
      const count = getBank(d.bank).length;
      const card = document.createElement("button");
      card.className = "domain-card";
      card.disabled = count === 0;
      card.innerHTML =
        '<span class="domain-num">' + escapeHtml(d.num) + '</span>' +
        '<span class="domain-body">' +
          '<span class="domain-name">' + escapeHtml(d.name) + '</span>' +
          '<span class="domain-meta">' + escapeHtml(d.blurb) + '</span>' +
        '</span>' +
        '<span class="domain-go">' +
          (count === 0 ? "Not loaded yet" : count + " q →") +
        '</span>';
      // With objectives loaded, a domain opens its subcategory list first;
      // without them, straight to the count screen as before.
      if (count > 0) card.addEventListener("click", () =>
        HAS_OBJECTIVES ? renderObjectives(d) : renderSetup(d));
      wrap.appendChild(card);
    });

    const weak = weakItems();
    document.getElementById("weak-count").textContent =
      weak.length + " question" + (weak.length === 1 ? "" : "s") + " flagged";
    document.getElementById("weak-btn").disabled = weak.length === 0;

    const pbqCount = pbqItems().length;
    document.getElementById("pbq-btn").disabled = pbqCount === 0;
    document.getElementById("pbq-sub").textContent = pbqCount
      ? pbqCount + " simulations · order, match, configure · partial credit"
      : "No PBQs loaded";

    const mockReady = mockAvailable();
    document.getElementById("mock-btn").disabled = !mockReady;
    document.getElementById("mock-sub").textContent = mockReady
      ? MOCK_QUESTIONS + " questions · " + MOCK_MINUTES + " minutes · exam-weighted"
      : "Needs all five domain banks loaded";

    refreshLogSummary();
    showView("view-home");
  }

  document.getElementById("weak-btn").addEventListener("click", () => {
    const weak = weakItems();
    if (weak.length === 0) return;
    renderSetup(null, weak, "Weak Questions");
  });

  document.getElementById("mock-btn").addEventListener("click", () => {
    if (!mockAvailable()) return;
    if (!window.confirm(
        MOCK_QUESTIONS + " questions in " + MOCK_MINUTES + " minutes, weighted like the " +
        "real exam.\n\nThe clock does not pause and stops the session at zero — " +
        "anything unanswered scores as wrong.\n\nStart now?")) return;
    const mock = mockPool();
    startSession(mock.items, MOCK_QUESTIONS, "Mock Exam · all five domains",
      { mode: "mock", timeLimitMs: MOCK_MINUTES * 60000 });
  });

  document.getElementById("pbq-btn").addEventListener("click", () => {
    const pool = pbqItems();
    if (pool.length === 0) return;
    renderSetup(null, pool, "Performance-Based Questions");
  });

  document.getElementById("export-results-btn").addEventListener("click", () => {
    const logs = loadResultLogs();
    if (logs.length === 0) return;
    downloadJson({
      // v2 adds objectiveScores[] per session and objective/objectiveConfidence
      // per question. v3 adds hint use (hintedCount, accuracyWithoutHintsPercent
      // per session; hintsUsed/hinted per question). Older exports stay
      // readable: each version only adds keys.
      schemaVersion: 3,
      certification: "CompTIA Security+ SY0-701",
      exportedAt: new Date().toISOString(),
      sessionCount: logs.length,
      sessions: logs
    }, "secplus-results-" + new Date().toISOString().slice(0, 10) + ".json");
  });

  document.getElementById("reset-progress-btn").addEventListener("click", () => {
    if (!window.confirm("Clear all progress, weak-question flags, and the session log?")) return;
    removeKey(PROGRESS_KEY);
    removeKey(RESULTS_KEY);
    renderHome();
  });

  /* ---------------- OBJECTIVES (subcategories of one domain) ----------------
     The exam publishes 28 objectives across the five domains. Drilling one at
     a time is the difference between "I'm weak at Security Operations" and
     "I'm weak at 4.9, using data sources in an investigation". Each row shows
     the bank size, lifetime accuracy where there is any, and how many
     questions are currently flagged weak. */
  function renderObjectives(domain) {
    const groups = objectiveGroups(domain);
    document.getElementById("obj-domain-name").textContent = domain.num + " " + domain.name;
    document.getElementById("obj-domain-sub").textContent =
      groups.length + " objective" + (groups.length === 1 ? "" : "s") + " · " +
      getBank(domain.bank).length + " questions";

    const wrap = document.getElementById("objective-list");
    wrap.innerHTML = "";

    // "Whole domain" first, so the old habit of domain -> 10 questions still
    // works, one click further along.
    const allBtn = document.createElement("button");
    allBtn.className = "objective-row objective-row-all";
    allBtn.innerHTML =
      '<span class="objective-num">All</span>' +
      '<span class="objective-name">Whole domain, mixed</span>' +
      '<span class="objective-meta">' + getBank(domain.bank).length + ' q →</span>';
    allBtn.addEventListener("click", () => renderSetup(domain));
    wrap.appendChild(allBtn);

    groups.forEach(g => {
      const row = document.createElement("button");
      row.className = "objective-row";
      const pct = g.stats.percent;
      const band = pct === null ? "" : (pct >= PASS_MARK ? "pass" : (pct >= 60 ? "warn" : "fail"));
      const scorePart = pct === null
        ? '<span class="objective-score untried">not tried</span>'
        : '<span class="objective-score ' + band + '">' + pct + '%</span>';
      const weakPart = g.weak
        ? '<span class="objective-weak">' + g.weak + ' flagged</span>'
        : "";
      row.innerHTML =
        '<span class="objective-num">' + escapeHtml(g.oid) + '</span>' +
        '<span class="objective-name">' + escapeHtml(g.name) +
          '<span class="objective-count">' + g.items.length + ' questions' +
          (g.stats.asked ? ' · ' + g.stats.asked + ' answered' : '') + '</span>' +
        '</span>' +
        '<span class="objective-meta">' + scorePart + weakPart + '</span>';
      row.addEventListener("click", () =>
        renderSetup(null, g.items, domain.num + " · " + g.oid + " " + g.name));
      wrap.appendChild(row);
    });

    showView("view-objectives");
  }

  document.getElementById("obj-back-btn").addEventListener("click", () => renderHome());

  /* ---------------- SETUP (question count) ----------------
     `poolOverride` lets an ad-hoc set (the weak-question list) reuse this
     screen instead of a whole domain. */
  function renderSetup(domain, poolOverride, labelOverride) {
    const pool = poolOverride || getBank(domain.bank).map(q => ({ q, domain }));
    const label = labelOverride || (domain.num + " " + domain.name);

    document.getElementById("setup-name").textContent = label;
    document.getElementById("setup-count").textContent =
      pool.length + " question" + (pool.length === 1 ? "" : "s") + " available";

    const optsWrap = document.getElementById("setup-options");
    optsWrap.innerHTML = "";

    function addOption(text, count) {
      const b = document.createElement("button");
      b.className = "setup-opt";
      b.textContent = text;
      b.addEventListener("click", () => startSession(pool, count, label));
      optsWrap.appendChild(b);
    }
    // Offer only the presets the pool can actually fill, then "All" for the rest.
    [5, 10, 15, 20, 25, 50, 100].forEach(n => {
      if (n < pool.length) addOption(String(n), n);
    });
    addOption("All (" + pool.length + ")", pool.length);

    const input = document.getElementById("custom-count");
    const startBtn = document.getElementById("custom-start");
    input.max = String(pool.length);
    input.value = "";
    startBtn.onclick = () => {
      const n = parseInt(input.value, 10);
      if (!n || n < 1) return;
      startSession(pool, Math.min(n, pool.length), label);
    };
    input.onkeydown = e => {
      if (e.key === "Enter") startBtn.click();
    };

    showView("view-setup");
  }

  /* ---------------- QUIZ ENGINE ---------------- */
  function startSession(pool, count, label, opts) {
    const options = opts || {};
    stopTimer();
    // A mock arrives pre-sampled by domain weight; re-shuffling is fine but
    // slicing is not, so the caller passes exactly the set it wants.
    const picked = shuffle(pool).slice(0, count)
      .map(item => Object.assign({}, item, { q: isPbq(item.q) ? item.q : shuffleAnswers(item.q) }));
    const startedAtMs = Date.now();
    state.session = {
      mode: options.mode || "practice",
      timeLimitMs: options.timeLimitMs || null,
      deadlineMs: options.timeLimitMs ? startedAtMs + options.timeLimitMs : null,
      expired: false,
      id: "session-" + startedAtMs + "-" + Math.random().toString(36).slice(2, 8),
      pool,
      questions: picked,
      answers: new Array(picked.length).fill(null),
      confidences: new Array(picked.length).fill(null),
      // Hint state per question: how many steps used, and which option (if
      // any) step 2 struck out. Mocks get no hints -- the real exam has none.
      hintsUsed: new Array(picked.length).fill(0),
      eliminated: new Array(picked.length).fill(-1),
      pbqState: picked.map(it => isPbq(it.q) ? newPbqState(it.q) : null),
      hintsAllowed: (options.mode || "practice") !== "mock",
      // Drilling one objective makes "the topic is 1.4" useless, so the topic
      // step is skipped and the first hint goes straight to eliminating.
      singleObjective: new Set(picked.map(it => objectiveOf(it.q))).size === 1,
      firstShownAt: new Array(picked.length).fill(null),
      index: 0,
      sourceLabel: label,
      startedAt: new Date(startedAtMs).toISOString(),
      startedAtMs,
      logged: false
    };
    document.getElementById("quiz-module-name").textContent = label;
    renderQuestion(0);
    showView("view-quiz");
    if (state.session.timeLimitMs) startTimer(state.session);
  }

  function renderQuestion(index) {
    const s = state.session;
    s.index = index;
    const total = s.questions.length;
    const q = s.questions[index].q;
    if (s.firstShownAt[index] === null) s.firstShownAt[index] = Date.now();

    document.getElementById("q-counter-badge").textContent = index + 1;
    document.getElementById("q-counter").textContent =
      "Question " + (index + 1) + " / " + total;
    document.getElementById("progress-fill").style.width = (index / total * 100) + "%";
    document.getElementById("q-text").textContent = q.question;

    // Some questions carry an exhibit -- config lines, a rule list, or a figure
    // from the book. The stem is unanswerable without it, so show it with the
    // question rather than treating it as decoration.
    const exhibit = document.getElementById("q-exhibit");
    exhibit.textContent = q.exhibit || "";
    exhibit.hidden = !q.exhibit;

    const figure = document.getElementById("q-figure");
    const figureImg = document.getElementById("q-figure-img");
    if (q.image) {
      figureImg.src = q.image;
      figureImg.alt = q.imageAlt || "Figure for this question";
    } else {
      figureImg.removeAttribute("src");
      figureImg.alt = "";
    }
    figure.hidden = !q.image;

    const answersWrap = document.getElementById("q-answers");
    answersWrap.innerHTML = "";
    const existing = s.answers[index];
    const confidence = s.confidences[index];

    document.querySelectorAll(".confidence-btn").forEach(btn => {
      const value = btn.getAttribute("data-confidence");
      btn.classList.toggle("selected", value === confidence);
      btn.disabled = !!existing;
      btn.onclick = () => {
        if (existing) return;
        s.confidences[index] = value;
        renderQuestion(index);
      };
    });

    renderHint(index);

    const pbqWrap = document.getElementById("q-pbq");
    pbqWrap.hidden = !isPbq(q);
    pbqWrap.innerHTML = "";
    if (isPbq(q)) renderPbq(index, pbqWrap);

    (isPbq(q) ? [] : q.answers).forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "q-answer";
      btn.innerHTML = '<span class="q-answer-letter">' + LETTERS[i] + '</span>' +
        '<span>' + escapeHtml(text) + '</span>';
      if (i === s.eliminated[index]) btn.classList.add("eliminated");
      if (existing) {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add("correct");
        else if (i === existing.selectedIndex) btn.classList.add("incorrect");
      } else {
        // Locked until a confidence is picked -- that gate is the point.
        btn.disabled = !confidence || i === s.eliminated[index];
        btn.addEventListener("click", () => selectAnswer(index, i));
      }
      answersWrap.appendChild(btn);
    });

    const feedback = document.getElementById("q-feedback");
    const nextBtn = document.getElementById("next-btn");
    const finishBtn = document.getElementById("finish-btn");

    if (existing) {
      feedback.classList.remove("hidden");
      const banner = document.getElementById("feedback-banner");
      banner.textContent = existing.pbq
        ? (existing.correct ? "Correct" : "Partial credit") + " · " + existing.right + " / " + existing.total +
          " (" + Math.round(existing.score * 100) + "%)"
        : (existing.correct ? "Correct" : "Incorrect");
      banner.className = "feedback-banner " + (existing.correct ? "correct" : "incorrect");
      document.getElementById("feedback-explain").textContent = q.explanation || "";
      const isLast = index === total - 1;
      nextBtn.classList.toggle("hidden", isLast);
      finishBtn.classList.toggle("hidden", !isLast);
    } else {
      feedback.classList.add("hidden");
      nextBtn.classList.add("hidden");
      finishBtn.classList.add("hidden");
    }

    document.getElementById("prev-btn").disabled = index === 0;
  }

  /* ---------------- PBQ rendering ----------------
     Built with DOM nodes and textContent throughout -- the item text contains
     things like <script> payloads that must display, never execute. */
  function renderPbq(index, wrap) {
    const s = state.session;
    const q = s.questions[index].q;
    const st = s.pbqState[index];
    const done = s.answers[index];
    const locked = !!done || !s.confidences[index];
    const el = (tag, cls, text) => {
      const n = document.createElement(tag);
      if (cls) n.className = cls;
      if (text !== undefined) n.textContent = text;
      return n;
    };
    const rerender = () => renderQuestion(index);
    const mark = (node, ok) => {
      node.classList.add(ok ? "pbq-right" : "pbq-wrong");
      node.prepend(el("span", "pbq-mark", ok ? "✓ " : "✗ "));
    };

    wrap.appendChild(el("p", "pbq-instructions",
      q.type === "order" ? "Tap the steps in order. Tap a placed step to send it back."
        : q.type === "categorize" ? "Tap an item, then tap the group it belongs in. Tap a placed item to send it back."
          : "Choose a value for every blank cell."));
    if (!s.confidences[index] && !done) {
      wrap.appendChild(el("p", "pbq-locked", "Pick your confidence above to unlock the simulation."));
    }

    if (q.type === "order") {
      const list = el("ol", "pbq-slots");
      st.placed.forEach((itemIdx, pos) => {
        const li = el("li");
        const b = el("button", "pbq-chip placed", q.items[itemIdx]);
        b.type = "button";
        b.disabled = locked;
        b.onclick = () => { st.placed.splice(pos, 1); st.pool.push(itemIdx); rerender(); };
        if (done) mark(b, itemIdx === pos);
        li.appendChild(b);
        list.appendChild(li);
      });
      for (let i = st.placed.length; i < q.items.length; i++) list.appendChild(el("li", "pbq-empty", "—"));
      wrap.appendChild(list);
      if (st.pool.length) {
        const pool = el("div", "pbq-pool");
        st.pool.forEach(itemIdx => {
          const b = el("button", "pbq-chip", q.items[itemIdx]);
          b.type = "button";
          b.disabled = locked;
          b.onclick = () => { st.pool = st.pool.filter(x => x !== itemIdx); st.placed.push(itemIdx); rerender(); };
          pool.appendChild(b);
        });
        wrap.appendChild(pool);
      }
      if (done && st.placed.some((itemIdx, pos) => itemIdx !== pos)) {
        wrap.appendChild(el("p", "pbq-should", "Correct order: " + q.items.map((t, i) => (i + 1) + ". " + t).join("  ·  ")));
      }
    } else if (q.type === "categorize") {
      const unplaced = st.pool.filter(i => !(i in st.placement));
      if (unplaced.length) {
        const pool = el("div", "pbq-pool");
        unplaced.forEach(i => {
          const b = el("button", "pbq-chip" + (st.selected === i ? " selected" : ""), q.items[i].text);
          b.type = "button";
          b.disabled = locked;
          b.setAttribute("aria-pressed", st.selected === i ? "true" : "false");
          b.onclick = () => { st.selected = st.selected === i ? null : i; rerender(); };
          pool.appendChild(b);
        });
        wrap.appendChild(pool);
      }
      const groups = el("div", "pbq-groups");
      q.categories.forEach(cat => {
        const box = el("div", "pbq-group");
        const head = el("button", "pbq-group-head", cat);
        head.type = "button";
        head.disabled = locked || st.selected === null;
        head.onclick = () => { st.placement[st.selected] = cat; st.selected = null; rerender(); };
        box.appendChild(head);
        st.pool.filter(i => st.placement[i] === cat).forEach(i => {
          const b = el("button", "pbq-chip placed", q.items[i].text);
          b.type = "button";
          b.disabled = locked;
          b.onclick = () => { delete st.placement[i]; rerender(); };
          if (done) {
            mark(b, q.items[i].category === cat);
            if (q.items[i].category !== cat) b.appendChild(el("span", "pbq-should", " → " + q.items[i].category));
          }
          box.appendChild(b);
        });
        groups.appendChild(box);
      });
      wrap.appendChild(groups);
    } else {
      const scroll = el("div", "pbq-table-wrap");
      const table = el("table", "pbq-table");
      const head = el("tr");
      q.columns.forEach(c => head.appendChild(el("th", "", c)));
      table.appendChild(head);
      q.rows.forEach((row, r) => {
        const tr = el("tr");
        row.forEach((cell, c) => {
          const td = el("td");
          if (cell && typeof cell === "object") {
            const key = r + "-" + c;
            const sel = el("select", "pbq-select");
            sel.setAttribute("aria-label", q.columns[c] + " for " + row[0]);
            sel.disabled = locked;
            const blank = el("option", "", "Choose…");
            blank.value = "";
            sel.appendChild(blank);
            cell.options.forEach(o => { const opt = el("option", "", o); opt.value = o; sel.appendChild(opt); });
            sel.value = st.values[key] || "";
            sel.onchange = () => { st.values[key] = sel.value; rerender(); };
            td.appendChild(sel);
            if (done) {
              const ok = st.values[key] === cell.answer;
              mark(td, ok);
              if (!ok) td.appendChild(el("div", "pbq-should", "Correct: " + cell.answer));
            }
          } else {
            td.textContent = cell;
          }
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
      scroll.appendChild(table);
      wrap.appendChild(scroll);
    }

    if (!done) {
      const submit = el("button", "pbq-submit", "Submit answer");
      submit.type = "button";
      submit.id = "pbq-submit";
      submit.disabled = locked || !pbqComplete(q, st);
      submit.onclick = () => submitPbq(index);
      wrap.appendChild(submit);
    }
  }

  function submitPbq(index) {
    const s = state.session;
    if (s.answers[index] || !s.confidences[index]) return;
    const q = s.questions[index].q;
    const st = s.pbqState[index];
    if (!pbqComplete(q, st)) return;
    const result = scorePbq(q, st);
    const hintsUsed = s.hintsUsed[index];
    s.answers[index] = {
      pbq: true,
      score: result.score,
      right: result.right,
      total: result.total,
      correct: result.score === 1,
      response: pbqResponseText(q, st),
      confidence: s.confidences[index],
      hintsUsed,
      hinted: hintsUsed > 0,
      timeTakenMs: Math.max(0, Date.now() - s.firstShownAt[index]),
      answeredAt: new Date().toISOString()
    };
    recordAnswer(q.id, result.score === 1, s.confidences[index], hintsUsed > 0);
    renderQuestion(index);
  }

  /* ---------------- hints ----------------
     Two steps, cheapest first: name the topic, then strike out one wrong
     option. Using either marks the answer as hinted everywhere it is counted
     -- the progress store, the results screen and the exported log. */
  function hintSteps(s, q) {
    // A PBQ has no options to strike out, so it only offers the topic.
    if (isPbq(q)) return s.singleObjective ? [] : ["topic"];
    return s.singleObjective ? ["eliminate"] : ["topic", "eliminate"];
  }
  function renderHint(index) {
    const s = state.session;
    const row = document.getElementById("hint-row");
    const btn = document.getElementById("hint-btn");
    const text = document.getElementById("hint-text");
    const q = s.questions[index].q;
    const steps = hintSteps(s, q);
    row.hidden = !s.hintsAllowed || steps.length === 0;
    if (row.hidden) return;

    const used = s.hintsUsed[index];
    const lines = [];
    steps.slice(0, used).forEach(step => {
      if (step === "topic") {
        const oid = objectiveOf(q);
        lines.push(oid
          ? "Topic: " + oid + " " + objectiveName(oid)
          : "Topic: domain " + (s.questions[index].domain ? s.questions[index].domain.num : q.domain));
      } else if (s.eliminated[index] >= 0) {
        lines.push("Removed one wrong answer: " + LETTERS[s.eliminated[index]] + ".");
      }
    });
    text.textContent = lines.join("\n");
    text.style.whiteSpace = "pre-line";
    text.hidden = lines.length === 0;

    const answered = !!s.answers[index];
    const left = steps.length - used;
    btn.disabled = answered || left === 0;
    btn.textContent = answered || left === 0
      ? (used ? "Hint used" : "No hint used")
      : (used ? "Another hint" : "Hint") + " (" + left + " left)";
    btn.onclick = () => useHint(index);
  }
  function useHint(index) {
    const s = state.session;
    if (!s.hintsAllowed || s.answers[index]) return;
    const steps = hintSteps(s, s.questions[index].q);
    const used = s.hintsUsed[index];
    if (used >= steps.length) return;
    if (steps[used] === "eliminate") {
      const q = s.questions[index].q;
      const wrong = q.answers.map((_, i) => i).filter(i => i !== q.correct);
      s.eliminated[index] = wrong[Math.floor(Math.random() * wrong.length)];
    }
    s.hintsUsed[index] = used + 1;
    renderQuestion(index);
  }

  function selectAnswer(index, selectedIndex) {
    const s = state.session;
    if (s.answers[index]) return;
    if (selectedIndex === s.eliminated[index]) return;
    const q = s.questions[index].q;
    const correct = selectedIndex === q.correct;
    const confidence = s.confidences[index] || "unsure";
    const hintsUsed = s.hintsUsed[index];
    s.answers[index] = {
      selectedIndex,
      correct,
      confidence,
      hintsUsed,
      hinted: hintsUsed > 0,
      timeTakenMs: Math.max(0, Date.now() - s.firstShownAt[index]),
      answeredAt: new Date().toISOString()
    };
    recordAnswer(q.id, correct, confidence, hintsUsed > 0);
    renderQuestion(index);
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    const s = state.session;
    if (s && s.index > 0) renderQuestion(s.index - 1);
  });
  document.getElementById("next-btn").addEventListener("click", () => {
    const s = state.session;
    if (s && s.index < s.questions.length - 1) renderQuestion(s.index + 1);
  });
  document.getElementById("finish-btn").addEventListener("click", () => {
    document.getElementById("progress-fill").style.width = "100%";
    renderResults();
  });

  /* ---------------- keyboard shortcuts ---------------- */
  document.addEventListener("keydown", e => {
    const s = state.session;
    if (!s || document.getElementById("view-quiz").classList.contains("hidden")) return;
    if (e.target.tagName === "INPUT") return;

    const i = s.index;
    const answered = !!s.answers[i];

    if (e.key === "ArrowLeft" && i > 0) { renderQuestion(i - 1); return; }
    if (e.key === "ArrowRight" && answered) {
      if (i < s.questions.length - 1) renderQuestion(i + 1);
      else document.getElementById("finish-btn").click();
      return;
    }
    if (answered) return;

    if (e.key === "h" || e.key === "H") { useHint(i); return; }

    if (!s.confidences[i]) {
      const conf = { "1": "sure", "2": "unsure", "3": "guessed" }[e.key];
      if (conf) { s.confidences[i] = conf; renderQuestion(i); }
      return;
    }
    if (isPbq(s.questions[i].q)) return;
    const letter = LETTERS.indexOf(e.key.toUpperCase());
    if (letter >= 0 && letter < s.questions[i].q.answers.length) selectAnswer(i, letter);
  });

  /* ---------------- RESULTS ---------------- */
  function saveCompletedSession(s, summary, byDomain) {
    if (s.logged) return;
    const completedAtMs = Date.now();
    const logs = loadResultLogs();
    logs.push({
      sessionId: s.id,
      certification: "CompTIA Security+ SY0-701",
      source: s.sourceLabel,
      mode: s.mode || "practice",
      timeLimitMs: s.timeLimitMs || null,
      timeExpired: !!s.expired,
      unansweredCount: summary.unansweredN || 0,
      // Per-domain scores, so a run of exports shows which domain is moving.
      // Per-objective scores: the finest grain the exam itself defines, and
      // the reason this log is worth exporting at all.
      objectiveScores: summary.byObjective || [],
      domainScores: Object.keys(byDomain || {}).sort().map(k => ({
        domain: byDomain[k].num,
        name: byDomain[k].name,
        asked: byDomain[k].total,
        correct: byDomain[k].correct,
        accuracyPercent: byDomain[k].total
          ? Math.round((byDomain[k].correct / byDomain[k].total) * 1000) / 10
          : 0
      })),
      startedAt: s.startedAt,
      completedAt: new Date(completedAtMs).toISOString(),
      durationMs: completedAtMs - s.startedAtMs,
      totalQuestions: s.questions.length,
      correctCount: summary.correctN,
      wrongCount: summary.wrongN,
      unsureCount: summary.unsureN,
      guessedCount: summary.guessedN,
      // Answers where a hint was used, and the score with those stripped out.
      // accuracyPercent stays the raw score so older exports compare cleanly.
      hintedCount: summary.hintedN,
      correctWithoutHintsCount: summary.correctUnhintedN,
      pointsCount: summary.pointsN,
      accuracyWithoutHintsPercent: summary.percentUnhinted,
      accuracyPercent: summary.percent,
      questions: s.questions.map((item, i) => {
        const q = item.q;
        const a = s.answers[i];
        return {
          order: i + 1,
          questionId: q.id,
          domain: item.domain ? item.domain.num : (q.domain || ""),
          objective: objectiveOf(q),
          // "low" means the tag was inferred from weak evidence; kept in the
          // log so a future analysis can discount those rows.
          objectiveConfidence: objectiveConfidence(q),
          question: q.question,
          selectedAnswer: a ? (a.pbq ? a.response : q.answers[a.selectedIndex]) : null,
          correctAnswer: q.pbq ? pbqAnswerText(q) : q.answers[q.correct],
          // PBQs: type "pbq" and a 0-1 partial-credit score; correct = full marks.
          type: q.pbq ? "pbq" : "mcq",
          score: q.pbq ? (a ? a.score : 0) : (a && a.correct ? 1 : 0),
          correct: !!(a && a.correct),
          confidence: a ? a.confidence : null,
          // 0 = no hint, 1 = one step, 2 = topic + eliminated option.
          hintsUsed: a ? (a.hintsUsed || 0) : 0,
          hinted: !!(a && a.hinted),
          timeTakenMs: a ? a.timeTakenMs : null
        };
      })
    });
    saveResultLogs(logs);
    s.logged = true;
  }

  function renderResults() {
    const s = state.session;
    stopTimer();
    let correctN = 0, wrongN = 0, unsureN = 0, guessedN = 0, unansweredN = 0;
    let hintedN = 0, correctUnhintedN = 0;
    // Points = 1 per right multiple-choice answer, the fraction earned on a PBQ.
    let pointsN = 0, pointsUnhintedN = 0;
    const pointsOf = a => !a ? 0 : (a.pbq ? a.score : (a.correct ? 1 : 0));
    const reviewItems = [];
    // Per-domain tallies are what turn a mock score into a study instruction:
    // "62% overall" is not actionable, "domain 4 at 48%" is.
    const byDomain = {};
    s.questions.forEach(item => {
      const num = item.domain ? item.domain.num : (item.q.domain || "?");
      if (!byDomain[num]) {
        byDomain[num] = {
          num,
          name: item.domain ? item.domain.name : "",
          total: 0, correct: 0, shaky: 0
        };
      }
      byDomain[num].total++;
    });

    s.questions.forEach((item, i) => {
      const a = s.answers[i];
      const num = item.domain ? item.domain.num : (item.q.domain || "?");
      byDomain[num].correct += pointsOf(a);
      if (!a || !a.correct || a.confidence !== "sure" || a.hinted) byDomain[num].shaky++;
      if (!a) { wrongN++; unansweredN++; return; }
      if (a.correct) correctN++; else wrongN++;
      if (a.correct && !a.hinted) correctUnhintedN++;
      pointsN += pointsOf(a);
      if (!a.hinted) pointsUnhintedN += pointsOf(a);
      if (a.confidence === "unsure") unsureN++;
      if (a.confidence === "guessed") guessedN++;
      if (a.hinted) hintedN++;
      // Surface anything wrong, not confidently answered, or hinted -- a lucky
      // guess or an assisted answer is still a gap.
      if (!a.correct || a.confidence !== "sure" || a.hinted) reviewItems.push({ item, answer: a });
    });

    // Per-objective tallies for this session, for the log and the breakdown.
    const byObjective = {};
    s.questions.forEach((item, i) => {
      const oid = objectiveOf(item.q);
      if (!oid) return;
      if (!byObjective[oid]) byObjective[oid] = { objective: oid, name: objectiveName(oid), asked: 0, correct: 0 };
      byObjective[oid].asked++;
      const a = s.answers[i];
      byObjective[oid].correct += pointsOf(a);
    });
    const objectiveRows = Object.keys(byObjective).sort().map(k => {
      const r = byObjective[k];
      return Object.assign({}, r, {
        correct: Math.round(r.correct * 100) / 100,
        accuracyPercent: r.asked ? Math.round((r.correct / r.asked) * 1000) / 10 : 0
      });
    });

    const total = s.questions.length;
    const percent = total ? Math.round((pointsN / total) * 1000) / 10 : 0;
    const fmtPoints = n => String(Math.round(n * 10) / 10);
    const percentUnhinted = total ? Math.round((pointsUnhintedN / total) * 1000) / 10 : 0;
    const summary = { correctN, wrongN, unsureN, guessedN, percent, unansweredN,
                      hintedN, correctUnhintedN, percentUnhinted,
                      pointsN: Math.round(pointsN * 100) / 100,
                      byObjective: objectiveRows };
    saveCompletedSession(s, summary, byDomain);

    document.getElementById("results-source").textContent = s.sourceLabel +
      (s.expired
        ? " · time expired with " + unansweredN +
          " unanswered" + (unansweredN === 1 ? "" : "")
        : s.mode === "mock"
          ? " · finished in " + formatClock(Date.now() - s.startedAtMs) +
            " of " + MOCK_MINUTES + ":00"
          : "");
    const verdict = document.getElementById("results-verdict");
    const passed = percent >= PASS_MARK;
    verdict.textContent = passed
      ? "Pass · " + PASS_MARK + "% target met"
      : "Below " + PASS_MARK + "% target";
    verdict.className = "results-verdict " + (passed ? "pass" : "fail");
    document.getElementById("results-score").textContent =
      fmtPoints(pointsN) + " / " + total + " · " + percent + "%";

    document.getElementById("results-stats").innerHTML =
      '<div class="stat-pill correct"><b>' + correctN + '</b>Correct</div>' +
      '<div class="stat-pill incorrect"><b>' + wrongN + '</b>Wrong</div>' +
      '<div class="stat-pill unsure"><b>' + unsureN + '</b>Unsure</div>' +
      '<div class="stat-pill guessed"><b>' + guessedN + '</b>Guessed</div>' +
      (hintedN ? '<div class="stat-pill hinted"><b>' + hintedN + '</b>Hinted</div>' : "");
    // With hints in play, the honest number is the one without them.
    if (hintedN) {
      document.getElementById("results-source").textContent +=
        " · without hints: " + fmtPoints(pointsUnhintedN) + " / " + total + " · " + percentUnhinted + "%";
    }

    // Domain breakdown: shown whenever a session spans more than one domain,
    // so it covers mocks and mixed weak-question retries alike.
    const domainWrap = document.getElementById("results-domains");
    const rows = Object.keys(byDomain).sort().map(k => byDomain[k]);
    if (rows.length > 1) {
      const weakest = rows.slice().sort((a, b) =>
        (a.correct / a.total) - (b.correct / b.total))[0];
      domainWrap.innerHTML =
        '<p class="review-heading">Score by domain</p>' +
        rows.map(r => {
          const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
          const band = pct >= PASS_MARK ? "pass" : (pct >= 60 ? "warn" : "fail");
          return '<div class="domain-row">' +
            '<span class="domain-row-num">' + escapeHtml(r.num) + '</span>' +
            '<span class="domain-row-name">' + escapeHtml(r.name) + '</span>' +
            '<span class="domain-row-bar"><span class="domain-row-fill ' + band +
              '" style="width:' + pct + '%"></span></span>' +
            '<span class="domain-row-score ' + band + '">' + r.correct + '/' + r.total +
              ' · ' + pct + '%</span>' +
          '</div>';
        }).join("") +
        '<p class="domain-hint">Weakest: <b>' + escapeHtml(weakest.num + " " + weakest.name) +
          '</b> — start the next study block there.</p>';
      domainWrap.classList.remove("hidden");
    } else {
      domainWrap.innerHTML = "";
      domainWrap.classList.add("hidden");
    }

    // Objective breakdown. Shown whenever a session touched more than one
    // objective, which includes every domain run and every mock -- this is the
    // granularity the domain table cannot give.
    const objWrap = document.getElementById("results-objectives");
    if (objectiveRows.length > 1) {
      const weakestObj = objectiveRows.slice().sort((a, b) =>
        (a.correct / a.asked) - (b.correct / b.asked))[0];
      objWrap.innerHTML =
        '<p class="review-heading">Score by objective</p>' +
        objectiveRows.map(r => {
          const pct = r.asked ? Math.round((r.correct / r.asked) * 100) : 0;
          const band = pct >= PASS_MARK ? "pass" : (pct >= 60 ? "warn" : "fail");
          return '<div class="domain-row">' +
            '<span class="domain-row-num">' + escapeHtml(r.objective) + '</span>' +
            '<span class="domain-row-name">' + escapeHtml(r.name) + '</span>' +
            '<span class="domain-row-bar"><span class="domain-row-fill ' + band +
              '" style="width:' + pct + '%"></span></span>' +
            '<span class="domain-row-score ' + band + '">' + r.correct + '/' + r.asked +
              ' · ' + pct + '%</span>' +
          '</div>';
        }).join("") +
        '<p class="domain-hint">Weakest objective: <b>' +
          escapeHtml(weakestObj.objective + " " + weakestObj.name) +
          '</b> — drill that one next.</p>';
      objWrap.classList.remove("hidden");
    } else {
      objWrap.innerHTML = "";
      objWrap.classList.add("hidden");
    }

    const review = document.getElementById("results-review");
    review.innerHTML = reviewItems.length === 0
      ? '<p class="review-heading">Clean sweep — every answer correct and confident.</p>'
      : '<p class="review-heading">Review — ' + reviewItems.length + ' to revisit</p>';

    reviewItems.forEach(({ item, answer }) => {
      const q = item.q;
      const div = document.createElement("div");
      div.className = "review-item";
      const tags =
        (!answer.correct ? '<span class="review-tag wrong">' + (answer.pbq ? "PARTIAL " + Math.round(answer.score * 100) + "%" : "WRONG") + '</span>' : "") +
        (q.pbq ? '<span class="review-tag pbq">PBQ</span>' : "") +
        (answer.confidence === "guessed" ? '<span class="review-tag guessed">GUESSED</span>' : "") +
        (answer.confidence === "unsure" ? '<span class="review-tag unsure">UNSURE</span>' : "") +
        (answer.hinted ? '<span class="review-tag hinted">HINTED</span>' : "");
      div.innerHTML = tags +
        '<p class="review-q">' + escapeHtml(q.question) + '</p>' +
        (q.exhibit ? '<pre class="q-exhibit">' + escapeHtml(q.exhibit) + '</pre>' : "") +
        (q.image
          ? '<figure class="q-figure"><img src="' + escapeHtml(q.image) +
            '" alt="' + escapeHtml(q.imageAlt || "Figure for this question") + '"></figure>'
          : "") +
        (answer.pbq
          ? (!answer.correct
              ? '<p class="review-your">Your answer (' + Math.round(answer.score * 100) + '%): ' + escapeHtml(answer.response) + '</p>'
              : "") +
            '<p class="review-correct">Correct answer: ' + escapeHtml(pbqAnswerText(q)) + '</p>'
          : (!answer.correct
              ? '<p class="review-your">Your answer: ' + escapeHtml(q.answers[answer.selectedIndex]) + '</p>'
              : "") +
            '<p class="review-correct">Correct answer: ' + escapeHtml(q.answers[q.correct]) + '</p>') +
        '<p class="review-explain">' + escapeHtml(q.explanation || "") + '</p>';
      review.appendChild(div);
    });

    const retryBtn = document.getElementById("retry-weak-btn");
    retryBtn.disabled = reviewItems.length === 0;
    retryBtn.onclick = () => {
      if (reviewItems.length === 0) return;
      // Rebuild from the item objects so startSession re-shuffles answer order.
      const retryPool = reviewItems.map(r => ({ q: r.item.q, domain: r.item.domain }));
      startSession(retryPool, retryPool.length, s.sourceLabel + " · Retry");
    };

    const sameBtn = document.getElementById("retry-same-btn");
    if (s.mode === "mock") {
      // A fresh mock means a fresh weighted draw and a fresh clock, not the
      // same 90 questions again.
      sameBtn.textContent = "Sit Another Mock";
      sameBtn.onclick = () => {
        const mock = mockPool();
        startSession(mock.items, MOCK_QUESTIONS, "Mock Exam · all five domains",
          { mode: "mock", timeLimitMs: MOCK_MINUTES * 60000 });
      };
    } else {
      sameBtn.textContent = "New Set, Same Domain";
      sameBtn.onclick = () => startSession(s.pool, total, s.sourceLabel);
    }

    showView("view-results");
  }

  renderHome();
})();

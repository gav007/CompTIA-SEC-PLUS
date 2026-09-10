/* Security+ SY0-701 quiz engine.
   Single cert, one bank per exam domain. Progress and the completed-session
   log live in localStorage so a study streak survives a browser restart. */
(function () {
  "use strict";

  const PROGRESS_KEY = "secplus_progress_v1";
  const RESULTS_KEY = "secplus_results_v1";
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
  function recordAnswer(qid, correct, confidence) {
    const store = loadProgress();
    const entry = store[qid] || { correctCount: 0, wrongCount: 0, guessedCount: 0 };
    if (correct) entry.correctCount++; else entry.wrongCount++;
    if (confidence === "guessed") entry.guessedCount++;
    entry.lastResult = correct ? "correct" : "incorrect";
    entry.lastConfidence = confidence;
    entry.lastSeen = Date.now();
    store[qid] = entry;
    saveProgress(store);
  }
  // Weak = got it wrong last time, or got it right without being sure.
  function isWeak(entry) {
    return !!entry && (entry.lastResult === "incorrect" ||
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
  // Every loaded question paired with the domain it came from.
  function allItems() {
    const out = [];
    window.DOMAINS.forEach(d => {
      getBank(d.bank).forEach(q => out.push({ q, domain: d }));
    });
    return out;
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
      if (count > 0) card.addEventListener("click", () => renderSetup(d));
      wrap.appendChild(card);
    });

    const weak = weakItems();
    document.getElementById("weak-count").textContent =
      weak.length + " question" + (weak.length === 1 ? "" : "s") + " flagged";
    document.getElementById("weak-btn").disabled = weak.length === 0;

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

  document.getElementById("export-results-btn").addEventListener("click", () => {
    const logs = loadResultLogs();
    if (logs.length === 0) return;
    downloadJson({
      schemaVersion: 1,
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
    [10, 15, 20, 25, 50, 100].forEach(n => {
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
      .map(item => Object.assign({}, item, { q: shuffleAnswers(item.q) }));
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

    q.answers.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "q-answer";
      btn.innerHTML = '<span class="q-answer-letter">' + LETTERS[i] + '</span>' +
        '<span>' + escapeHtml(text) + '</span>';
      if (existing) {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add("correct");
        else if (i === existing.selectedIndex) btn.classList.add("incorrect");
      } else {
        // Locked until a confidence is picked -- that gate is the point.
        btn.disabled = !confidence;
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
      banner.textContent = existing.correct ? "Correct" : "Incorrect";
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

  function selectAnswer(index, selectedIndex) {
    const s = state.session;
    if (s.answers[index]) return;
    const q = s.questions[index].q;
    const correct = selectedIndex === q.correct;
    const confidence = s.confidences[index] || "unsure";
    s.answers[index] = {
      selectedIndex,
      correct,
      confidence,
      timeTakenMs: Math.max(0, Date.now() - s.firstShownAt[index]),
      answeredAt: new Date().toISOString()
    };
    recordAnswer(q.id, correct, confidence);
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

    if (!s.confidences[i]) {
      const conf = { "1": "sure", "2": "unsure", "3": "guessed" }[e.key];
      if (conf) { s.confidences[i] = conf; renderQuestion(i); }
      return;
    }
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
      accuracyPercent: summary.percent,
      questions: s.questions.map((item, i) => {
        const q = item.q;
        const a = s.answers[i];
        return {
          order: i + 1,
          questionId: q.id,
          domain: item.domain ? item.domain.num : (q.domain || ""),
          question: q.question,
          selectedAnswer: a ? q.answers[a.selectedIndex] : null,
          correctAnswer: q.answers[q.correct],
          correct: !!(a && a.correct),
          confidence: a ? a.confidence : null,
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
      if (a && a.correct) byDomain[num].correct++;
      if (!a || !a.correct || a.confidence !== "sure") byDomain[num].shaky++;
      if (!a) { wrongN++; unansweredN++; return; }
      if (a.correct) correctN++; else wrongN++;
      if (a.confidence === "unsure") unsureN++;
      if (a.confidence === "guessed") guessedN++;
      // Surface anything wrong OR not confidently answered -- a lucky guess is
      // still a gap.
      if (!a.correct || a.confidence !== "sure") reviewItems.push({ item, answer: a });
    });

    const total = s.questions.length;
    const percent = total ? Math.round((correctN / total) * 1000) / 10 : 0;
    const summary = { correctN, wrongN, unsureN, guessedN, percent, unansweredN };
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
      correctN + " / " + total + " · " + percent + "%";

    document.getElementById("results-stats").innerHTML =
      '<div class="stat-pill correct"><b>' + correctN + '</b>Correct</div>' +
      '<div class="stat-pill incorrect"><b>' + wrongN + '</b>Wrong</div>' +
      '<div class="stat-pill unsure"><b>' + unsureN + '</b>Unsure</div>' +
      '<div class="stat-pill guessed"><b>' + guessedN + '</b>Guessed</div>';

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

    const review = document.getElementById("results-review");
    review.innerHTML = reviewItems.length === 0
      ? '<p class="review-heading">Clean sweep — every answer correct and confident.</p>'
      : '<p class="review-heading">Review — ' + reviewItems.length + ' to revisit</p>';

    reviewItems.forEach(({ item, answer }) => {
      const q = item.q;
      const div = document.createElement("div");
      div.className = "review-item";
      const tags =
        (!answer.correct ? '<span class="review-tag wrong">WRONG</span>' : "") +
        (answer.confidence === "guessed" ? '<span class="review-tag guessed">GUESSED</span>' : "") +
        (answer.confidence === "unsure" ? '<span class="review-tag unsure">UNSURE</span>' : "");
      div.innerHTML = tags +
        '<p class="review-q">' + escapeHtml(q.question) + '</p>' +
        (q.exhibit ? '<pre class="q-exhibit">' + escapeHtml(q.exhibit) + '</pre>' : "") +
        (q.image
          ? '<figure class="q-figure"><img src="' + escapeHtml(q.image) +
            '" alt="' + escapeHtml(q.imageAlt || "Figure for this question") + '"></figure>'
          : "") +
        (!answer.correct
          ? '<p class="review-your">Your answer: ' + escapeHtml(q.answers[answer.selectedIndex]) + '</p>'
          : "") +
        '<p class="review-correct">Correct answer: ' + escapeHtml(q.answers[q.correct]) + '</p>' +
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

/* ============================================================
   CNA Academy — application logic
   Vanilla JS single-page app. No build step, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  const D = CNA_DATA;
  const view = document.getElementById("view");

  /* ---------------- state & persistence ---------------- */

  const STORE_KEY = "cnaAcademyProgress.v1";

  const defaultState = () => ({
    xp: 0,
    streak: { count: 0, lastDay: null },
    lessonsDone: {},          // moduleId -> true
    quickChecks: {},          // moduleId:index -> true (answered correctly at least once)
    deckMastery: {},          // deckId -> { cardIndex: true }
    quizHistory: [],          // { date, mode, total, correct }
    skillsBest: {},           // skillId -> fewest mistakes achieved
    scenariosBest: {},        // scenarioId -> best points achieved
    badges: {}                // badgeId -> true
  });

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) { /* corrupted storage — start fresh */ }
    return defaultState();
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
    renderHeaderStats();
  }

  /* ---------------- helpers ---------------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function bumpStreak() {
    const today = todayKey();
    const s = state.streak;
    if (s.lastDay === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    s.count = (s.lastDay === yesterday) ? s.count + 1 : 1;
    s.lastDay = today;
    if (s.count >= 3) earnBadge("on-fire");
    save();
  }

  function awardXP(amount, label) {
    state.xp += amount;
    bumpStreak();
    save();
    if (label) toast(`+${amount} XP — ${label}`);
  }

  function earnBadge(id) {
    if (state.badges[id]) return;
    const badge = D.badges.find(b => b.id === id);
    if (!badge) return;
    state.badges[id] = true;
    save();
    toast(`${badge.icon} Badge earned: ${badge.name}!`);
    confetti();
  }

  function toast(msg) {
    const host = document.getElementById("toastHost");
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    host.appendChild(el);
    setTimeout(() => {
      el.classList.add("leaving");
      setTimeout(() => el.remove(), 450);
    }, 2600);
  }

  function confetti() {
    const host = document.getElementById("confettiHost");
    const bits = ["🎉", "⭐", "✨", "🩺", "💙"];
    for (let i = 0; i < 24; i++) {
      const el = document.createElement("span");
      el.className = "confetti-bit";
      el.textContent = bits[Math.floor(Math.random() * bits.length)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 1.8 + Math.random() * 1.6 + "s";
      el.style.animationDelay = Math.random() * 0.4 + "s";
      host.appendChild(el);
      setTimeout(() => el.remove(), 4200);
    }
  }

  function renderHeaderStats() {
    document.getElementById("xpCount").textContent = state.xp;
    document.getElementById("streakCount").textContent = state.streak.count;
  }

  /* ---------------- progress calculations ---------------- */

  function lessonProgress() {
    const done = D.modules.filter(m => state.lessonsDone[m.id]).length;
    return { done, total: D.modules.length };
  }

  function deckProgress(deck) {
    const mastered = Object.keys(state.deckMastery[deck.id] || {}).length;
    return { done: mastered, total: deck.cards.length };
  }

  function skillsProgress() {
    const done = D.skills.filter(s => state.skillsBest[s.id] !== undefined).length;
    return { done, total: D.skills.length };
  }

  function scenarioProgress() {
    const done = D.scenarios.filter(s => state.scenariosBest[s.id] !== undefined).length;
    return { done, total: D.scenarios.length };
  }

  function bestQuizPct() {
    if (!state.quizHistory.length) return null;
    return Math.max(...state.quizHistory.map(h => Math.round((h.correct / h.total) * 100)));
  }

  function readinessPct() {
    // Blend of all activity types into a single "exam readiness" estimate.
    const lp = lessonProgress();
    const sp = skillsProgress();
    const scp = scenarioProgress();
    const deckPcts = D.decks.map(d => { const p = deckProgress(d); return p.done / p.total; });
    const deckAvg = deckPcts.reduce((a, b) => a + b, 0) / deckPcts.length;
    const quiz = (bestQuizPct() || 0) / 100;
    const score =
      (lp.done / lp.total) * 0.25 +
      deckAvg * 0.2 +
      quiz * 0.25 +
      (sp.done / sp.total) * 0.2 +
      (scp.done / scp.total) * 0.1;
    return Math.round(score * 100);
  }

  /* ---------------- router ---------------- */

  const routes = {};
  let quizTimerHandle = null;

  function navigate(name, param) {
    if (quizTimerHandle) { clearInterval(quizTimerHandle); quizTimerHandle = null; }
    document.querySelectorAll(".nav-btn").forEach(b =>
      b.classList.toggle("active", b.dataset.nav === name));
    (routes[name] || routes.dashboard)(param);
    window.scrollTo({ top: 0 });
    view.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-nav]").forEach(btn =>
    btn.addEventListener("click", () => navigate(btn.dataset.nav)));

  /* ============================================================
     DASHBOARD
     ============================================================ */

  routes.dashboard = function () {
    const lp = lessonProgress();
    const sp = skillsProgress();
    const scp = scenarioProgress();
    const best = bestQuizPct();
    const ready = readinessPct();
    const earned = D.badges.filter(b => state.badges[b.id]);

    view.innerHTML = `
      <section class="hero">
        <span class="hero-emoji">🩺</span>
        <h1>Become an exceptional CNA.</h1>
        <p>Lessons, flashcards, exam-style quizzes, a hands-on skills lab, and real-world scenarios —
        everything you need to walk into your state exam with confidence.</p>
        <div class="btn-row">
          <button class="btn" data-go="learn">📖 Start Learning</button>
          <button class="btn secondary" data-go="quiz">✅ Take a Practice Quiz</button>
        </div>
      </section>

      <div class="dash-grid">
        <div class="card dash-stat">
          <div class="ring" style="--pct:${ready}" data-label="${ready}%"></div>
          <div><p class="label">Exam readiness</p><p class="value">${readinessBlurb(ready)}</p></div>
        </div>
        <div class="card dash-stat">
          <div class="ring" style="--pct:${Math.round(lp.done / lp.total * 100)}" data-label="${lp.done}/${lp.total}"></div>
          <div><p class="label">Lessons completed</p><p class="value">${lp.done ? "Keep it up!" : "Ready when you are"}</p></div>
        </div>
        <div class="card dash-stat">
          <div class="ring" style="--pct:${best || 0}" data-label="${best === null ? "—" : best + "%"}"></div>
          <div><p class="label">Best quiz score</p><p class="value">${best === null ? "No quizzes yet" : best >= 80 ? "Passing zone 🎉" : "Aim for 80%+"}</p></div>
        </div>
        <div class="card dash-stat">
          <div class="ring" style="--pct:${Math.round((sp.done + scp.done) / (sp.total + scp.total) * 100)}"
               data-label="${sp.done + scp.done}/${sp.total + scp.total}"></div>
          <div><p class="label">Skills & scenarios</p><p class="value">Practice makes confident</p></div>
        </div>
      </div>

      <h2 class="section-title">⚡ Jump back in</h2>
      <div class="card-grid">
        ${continueTile()}
        <button class="tile" data-go="flashcards">
          <span class="tile-icon">🃏</span><h3>Drill flashcards</h3>
          <p class="tile-desc">Terminology, abbreviations, and the numbers the exam loves.</p>
          <span class="tile-meta">3 decks · ${D.decks.reduce((n, d) => n + d.cards.length, 0)} cards</span>
        </button>
        <button class="tile" data-go="skills">
          <span class="tile-icon">🧤</span><h3>Practice a skill</h3>
          <p class="tile-desc">Put clinical skill steps in the right order — just like the skills exam.</p>
          <span class="tile-meta">${sp.done}/${sp.total} skills completed</span>
        </button>
        <button class="tile" data-go="scenarios">
          <span class="tile-icon">🎭</span><h3>Face a scenario</h3>
          <p class="tile-desc">Think on your feet through realistic shifts gone sideways.</p>
          <span class="tile-meta">${scp.done}/${scp.total} scenarios completed</span>
        </button>
      </div>

      <h2 class="section-title">🏅 Badges <span style="font-weight:400;color:var(--ink-soft);font-size:0.85rem">(${earned.length}/${D.badges.length} earned)</span></h2>
      <div class="badge-shelf">
        ${D.badges.map(b => `
          <div class="badge-medal ${state.badges[b.id] ? "earned" : ""}">
            <span class="medal-icon">${b.icon}</span>
            <div><p class="medal-name">${esc(b.name)}</p><p class="medal-desc">${esc(b.desc)}</p></div>
          </div>`).join("")}
      </div>`;

    wireGoButtons();
  };

  function readinessBlurb(pct) {
    if (pct >= 85) return "You've got this! 🌟";
    if (pct >= 60) return "Almost there";
    if (pct >= 30) return "Building momentum";
    if (pct > 0) return "Off to a good start";
    return "Let's begin!";
  }

  function continueTile() {
    const next = D.modules.find(m => !state.lessonsDone[m.id]);
    if (next) {
      return `
        <button class="tile" data-go="lesson" data-param="${next.id}">
          <span class="tile-icon">${next.icon}</span><h3>Continue: ${esc(next.title)}</h3>
          <p class="tile-desc">${esc(next.blurb)}</p>
          <span class="tile-meta">Next lesson →</span>
        </button>`;
    }
    return `
      <button class="tile" data-go="quiz">
        <span class="tile-icon">🏆</span><h3>Exam simulation</h3>
        <p class="tile-desc">All lessons done! Test yourself with a timed 30-question exam.</p>
        <span class="tile-meta">Take the exam →</span>
      </button>`;
  }

  function wireGoButtons() {
    view.querySelectorAll("[data-go]").forEach(el =>
      el.addEventListener("click", () => navigate(el.dataset.go, el.dataset.param)));
  }

  /* ============================================================
     LEARN — module list and lesson pages
     ============================================================ */

  routes.learn = function () {
    const lp = lessonProgress();
    view.innerHTML = `
      <div class="view-header">
        <h1>📖 Lessons</h1>
        <p class="subtitle">Six focused modules covering the core of the CNA written exam. Each ends with a
        quick check — answer correctly to complete the lesson and earn XP.</p>
        <div class="progress-track" style="max-width:340px"><div class="progress-fill" style="width:${lp.done / lp.total * 100}%"></div></div>
      </div>
      <div class="card-grid">
        ${D.modules.map(m => `
          <button class="tile" data-go="lesson" data-param="${m.id}">
            <span class="tile-icon">${m.icon}</span>
            <h3>${esc(m.title)}</h3>
            <p class="tile-desc">${esc(m.blurb)}</p>
            <span class="tile-meta">${state.lessonsDone[m.id] ? '<span class="badge-done">✓ Completed</span>' : m.sections.length + " sections + quick check"}</span>
          </button>`).join("")}
      </div>`;
    wireGoButtons();
  };

  routes.lesson = function (moduleId) {
    const mod = D.modules.find(m => m.id === moduleId) || D.modules[0];
    view.innerHTML = `
      <button class="breadcrumb" data-go="learn">← All lessons</button>
      <div class="view-header">
        <h1>${mod.icon} ${esc(mod.title)}</h1>
        <p class="subtitle">${esc(mod.blurb)}</p>
      </div>
      <article class="card lesson-body">
        ${mod.sections.map(s => `<h3>${esc(s.heading)}</h3>${s.html}`).join("")}
      </article>
      <section class="quickcheck">
        <h2 class="section-title">✅ Quick check</h2>
        <p class="subtitle" style="color:var(--ink-soft)">Answer both questions correctly (retries welcome) to complete this lesson.</p>
        <div id="qcHost"></div>
        <div class="btn-row">
          <button class="btn" id="qcFinish" disabled>Complete lesson</button>
        </div>
      </section>`;

    const host = view.querySelector("#qcHost");
    const finishBtn = view.querySelector("#qcFinish");
    const solved = new Set();

    mod.quickCheck.forEach((qc, qi) => {
      const box = document.createElement("div");
      box.className = "quickcheck-q";
      box.innerHTML = `
        <p><strong>${qi + 1}. ${esc(qc.q)}</strong></p>
        <div class="answers">
          ${qc.options.map((opt, oi) => `
            <button class="answer-opt" data-oi="${oi}">
              <span class="opt-letter">${"ABCD"[oi]}</span><span>${esc(opt)}</span>
            </button>`).join("")}
        </div>
        <div class="qc-explain"></div>`;
      host.appendChild(box);

      box.querySelectorAll(".answer-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const oi = Number(btn.dataset.oi);
          const explain = box.querySelector(".qc-explain");
          box.querySelectorAll(".answer-opt").forEach(b => b.classList.remove("correct", "incorrect"));
          if (oi === qc.answer) {
            btn.classList.add("correct");
            box.querySelectorAll(".answer-opt").forEach(b => (b.disabled = true));
            explain.innerHTML = `<div class="explanation right"><p>✔ Correct! ${esc(qc.explain)}</p></div>`;
            if (!solved.has(qi)) {
              solved.add(qi);
              const key = mod.id + ":" + qi;
              if (!state.quickChecks[key]) {
                state.quickChecks[key] = true;
                awardXP(5, "quick check");
              }
            }
            if (solved.size === mod.quickCheck.length) finishBtn.disabled = false;
          } else {
            btn.classList.add("incorrect");
            explain.innerHTML = `<div class="explanation wrong"><p>✘ Not quite — try again! Think about what keeps the resident safest.</p></div>`;
          }
        });
      });
    });

    finishBtn.addEventListener("click", () => {
      if (!state.lessonsDone[mod.id]) {
        state.lessonsDone[mod.id] = true;
        awardXP(20, "lesson completed");
        earnBadge("first-lesson");
        if (D.modules.every(m => state.lessonsDone[m.id])) earnBadge("bookworm");
      }
      navigate("learn");
    });

    wireGoButtons();
  };

  /* ============================================================
     FLASHCARDS
     ============================================================ */

  routes.flashcards = function () {
    view.innerHTML = `
      <div class="view-header">
        <h1>🃏 Flashcards</h1>
        <p class="subtitle">Tap a card to flip it. Mark cards you know — mastered cards are skipped in "review mode"
        so you always drill what you need most.</p>
      </div>
      <div class="card-grid">
        ${D.decks.map(d => {
          const p = deckProgress(d);
          return `
            <button class="tile" data-go="deck" data-param="${d.id}">
              <span class="tile-icon">${d.icon}</span>
              <h3>${esc(d.title)}</h3>
              <p class="tile-desc">${esc(d.blurb)}</p>
              <div class="progress-track"><div class="progress-fill" style="width:${p.done / p.total * 100}%"></div></div>
              <span class="tile-meta">${p.done}/${p.total} mastered ${p.done === p.total ? "🏆" : ""}</span>
            </button>`;
        }).join("")}
      </div>`;
    wireGoButtons();
  };

  routes.deck = function (deckId) {
    const deck = D.decks.find(d => d.id === deckId) || D.decks[0];
    const mastery = state.deckMastery[deck.id] || (state.deckMastery[deck.id] = {});

    let queue = shuffle(deck.cards.map((_, i) => i).filter(i => !mastery[i]));
    let reviewingAll = false;
    if (!queue.length) { queue = shuffle(deck.cards.map((_, i) => i)); reviewingAll = true; }
    let pos = 0;

    function render() {
      const p = deckProgress(deck);
      if (pos >= queue.length) {
        view.innerHTML = `
          <button class="breadcrumb" data-go="flashcards">← All decks</button>
          <div class="card" style="text-align:center;max-width:560px;margin:30px auto">
            <div style="font-size:3rem">🎉</div>
            <h2>Round complete!</h2>
            <p>${p.done}/${p.total} cards mastered in <strong>${esc(deck.title)}</strong>.</p>
            <div class="btn-row" style="justify-content:center">
              <button class="btn" id="againBtn">${p.done === p.total ? "Review the full deck" : "Drill remaining cards"}</button>
              <button class="btn ghost" data-go="flashcards">Choose another deck</button>
            </div>
          </div>`;
        view.querySelector("#againBtn").addEventListener("click", () => routes.deck(deck.id));
        wireGoButtons();
        return;
      }

      const ci = queue[pos];
      const card = deck.cards[ci];
      view.innerHTML = `
        <button class="breadcrumb" data-go="flashcards">← All decks</button>
        <div class="view-header" style="margin-bottom:6px">
          <h1>${deck.icon} ${esc(deck.title)}</h1>
        </div>
        <p class="flash-meta">Card ${pos + 1} of ${queue.length}${reviewingAll ? " (full-deck review)" : ""} · ${p.done}/${p.total} mastered</p>
        <div class="progress-track" style="max-width:560px;margin:8px auto 0">
          <div class="progress-fill" style="width:${(pos / queue.length) * 100}%"></div>
        </div>
        <div class="flash-stage">
          <button class="flashcard" id="flashcard" aria-label="Flashcard — click to flip">
            <span class="flash-face flash-front">
              <p class="flash-term">${esc(card.front)}</p>
              <p class="flash-hint">Tap to reveal</p>
            </span>
            <span class="flash-face flash-back">
              <p class="flash-def">${esc(card.back)}</p>
            </span>
          </button>
        </div>
        <div class="flash-controls">
          <button class="btn ghost" id="againCard">🔁 Still learning</button>
          <button class="btn" id="gotCard">✔ Got it!</button>
        </div>
        <p class="flash-meta" style="margin-top:14px">Tip: press <kbd>Space</kbd> to flip, <kbd>1</kbd> = still learning, <kbd>2</kbd> = got it</p>`;

      const cardEl = view.querySelector("#flashcard");
      cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));

      view.querySelector("#againCard").addEventListener("click", () => {
        queue.push(ci);          // cycle it back to the end of the round
        pos++;
        render();
      });

      view.querySelector("#gotCard").addEventListener("click", () => {
        if (!mastery[ci]) {
          mastery[ci] = true;
          awardXP(2, "card mastered");
        } else {
          save();
        }
        const now = deckProgress(deck);
        if (now.done === now.total) earnBadge("deck-master");
        pos++;
        render();
      });

      wireGoButtons();
    }

    // Keyboard shortcuts for the deck (bound once per deck entry).
    view.onkeydown = (e) => {
      const cardEl = view.querySelector("#flashcard");
      if (!cardEl) return;
      if (e.key === " ") { e.preventDefault(); cardEl.classList.toggle("flipped"); }
      if (e.key === "1") view.querySelector("#againCard")?.click();
      if (e.key === "2") view.querySelector("#gotCard")?.click();
    };

    render();
  };

  /* ============================================================
     QUIZ — practice mode & exam simulation
     ============================================================ */

  routes.quiz = function () {
    let mode = "practice";
    let cat = "all";

    view.innerHTML = `
      <div class="view-header">
        <h1>✅ Practice Quiz</h1>
        <p class="subtitle">Exam-style multiple choice. <strong>Practice mode</strong> explains every answer as you go;
        <strong>exam mode</strong> is a timed 30-question simulation, graded at the end. Most states require about 70–80% to pass.</p>
      </div>
      <div class="card mode-select">
        <label>Mode</label>
        <div class="chip-row" id="modeRow">
          <button class="chip active" data-mode="practice">🎯 Practice — 10 questions, instant feedback</button>
          <button class="chip" data-mode="exam">⏱️ Exam simulation — 30 questions, 30 minutes</button>
        </div>
        <label>Focus area <span style="font-weight:400;color:var(--ink-soft)">(practice mode)</span></label>
        <div class="chip-row" id="catRow">
          <button class="chip active" data-cat="all">Everything</button>
          ${D.quizCategories.map(c => `<button class="chip" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
        </div>
        <div class="btn-row">
          <button class="btn" id="startQuiz">Start quiz →</button>
        </div>
      </div>
      ${quizHistoryHtml()}`;

    view.querySelectorAll("#modeRow .chip").forEach(chip =>
      chip.addEventListener("click", () => {
        mode = chip.dataset.mode;
        view.querySelectorAll("#modeRow .chip").forEach(c => c.classList.toggle("active", c === chip));
      }));

    view.querySelectorAll("#catRow .chip").forEach(chip =>
      chip.addEventListener("click", () => {
        cat = chip.dataset.cat;
        view.querySelectorAll("#catRow .chip").forEach(c => c.classList.toggle("active", c === chip));
      }));

    view.querySelector("#startQuiz").addEventListener("click", () => runQuiz(mode, cat));
  };

  function quizHistoryHtml() {
    if (!state.quizHistory.length) return "";
    const recent = state.quizHistory.slice(-5).reverse();
    return `
      <h2 class="section-title">📈 Recent attempts</h2>
      <div class="card">
        ${recent.map(h => {
          const pct = Math.round(h.correct / h.total * 100);
          return `
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
              <span style="min-width:64px;font-weight:800;color:${pct >= 80 ? "var(--good)" : pct >= 60 ? "var(--warn)" : "var(--bad)"}">${pct}%</span>
              <div class="progress-track" style="flex:1"><div class="progress-fill" style="width:${pct}%"></div></div>
              <span style="color:var(--ink-soft);font-size:0.85rem;min-width:150px;text-align:right">${h.correct}/${h.total} · ${esc(h.mode)} · ${esc(h.date)}</span>
            </div>`;
        }).join("")}
      </div>`;
  }

  function runQuiz(mode, cat) {
    const isExam = mode === "exam";
    let pool = isExam || cat === "all" ? D.quiz.slice() : D.quiz.filter(q => q.cat === cat);
    const count = isExam ? Math.min(30, pool.length) : Math.min(10, pool.length);

    // Shuffle questions and, within each, shuffle the options.
    const questions = shuffle(pool).slice(0, count).map(q => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        cat: q.cat,
        q: q.q,
        options: order.map(i => q.options[i]),
        answer: order.indexOf(q.answer),
        explain: q.explain
      };
    });

    const picks = new Array(questions.length).fill(null);
    let idx = 0;
    let secondsLeft = isExam ? 30 * 60 : null;

    if (isExam) {
      quizTimerHandle = setInterval(() => {
        secondsLeft--;
        const t = view.querySelector("#quizTimer");
        if (t) {
          t.textContent = fmtTime(secondsLeft);
          t.classList.toggle("low", secondsLeft <= 120);
        }
        if (secondsLeft <= 0) {
          clearInterval(quizTimerHandle);
          quizTimerHandle = null;
          toast("⏱️ Time's up! Grading what you answered…");
          finish();
        }
      }, 1000);
    }

    function fmtTime(s) {
      return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    }

    function renderQuestion() {
      const q = questions[idx];
      view.innerHTML = `
        <div class="quiz-top">
          <button class="breadcrumb" id="quitQuiz" style="margin:0">← Quit quiz</button>
          ${isExam ? `<span class="quiz-timer" id="quizTimer">${fmtTime(secondsLeft)}</span>` : ""}
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${(idx / questions.length) * 100}%"></div></div>
        <div class="card quiz-question" style="margin-top:18px">
          <span class="q-category">${esc(q.cat)}</span>
          <h2>Question ${idx + 1} of ${questions.length}</h2>
          <p style="font-size:1.05rem"><strong>${esc(q.q)}</strong></p>
          <div class="answers">
            ${q.options.map((opt, oi) => `
              <button class="answer-opt" data-oi="${oi}">
                <span class="opt-letter">${"ABCD"[oi]}</span><span>${esc(opt)}</span>
              </button>`).join("")}
          </div>
          <div id="qExplain"></div>
          <div class="btn-row">
            <button class="btn" id="nextQ" disabled>${idx === questions.length - 1 ? "Finish" : "Next →"}</button>
          </div>
        </div>`;

      view.querySelector("#quitQuiz").addEventListener("click", () => navigate("quiz"));
      const nextBtn = view.querySelector("#nextQ");

      view.querySelectorAll(".answer-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const oi = Number(btn.dataset.oi);
          picks[idx] = oi;
          if (isExam) {
            // Exam mode: just select; grading happens at the end.
            view.querySelectorAll(".answer-opt").forEach(b => b.classList.toggle("selected", b === btn));
            nextBtn.disabled = false;
          } else {
            // Practice mode: instant feedback, lock the question.
            view.querySelectorAll(".answer-opt").forEach(b => {
              b.disabled = true;
              const boi = Number(b.dataset.oi);
              if (boi === q.answer) b.classList.add("correct");
              else if (boi === oi) b.classList.add("incorrect");
            });
            const right = oi === q.answer;
            view.querySelector("#qExplain").innerHTML = `
              <div class="explanation ${right ? "right" : "wrong"}">
                <p><strong>${right ? "✔ Correct!" : "✘ Not quite."}</strong> ${esc(q.explain)}</p>
              </div>`;
            if (right) awardXP(10);
            renderHeaderStats();
            nextBtn.disabled = false;
            nextBtn.focus();
          }
        });
      });

      nextBtn.addEventListener("click", () => {
        idx++;
        if (idx >= questions.length) finish();
        else renderQuestion();
      });
    }

    function finish() {
      if (quizTimerHandle) { clearInterval(quizTimerHandle); quizTimerHandle = null; }
      const graded = questions.map((q, i) => ({ ...q, pick: picks[i], right: picks[i] === q.answer }));
      const correct = graded.filter(g => g.right).length;
      const pct = Math.round(correct / questions.length * 100);

      state.quizHistory.push({
        date: todayKey(),
        mode: isExam ? "exam" : "practice",
        total: questions.length,
        correct
      });
      if (isExam) awardXP(correct * 10);
      earnBadge("quiz-rookie");
      if (pct === 100) earnBadge("perfectionist");
      if (isExam && pct >= 80) earnBadge("exam-ready");
      if (pct >= 80) confetti();
      save();

      view.innerHTML = `
        <div class="view-header"><h1>${pct >= 80 ? "🎉 Great work!" : pct >= 60 ? "💪 Getting there!" : "📚 Keep studying!"}</h1></div>
        <div class="card result-score">
          <div class="ring" style="--pct:${pct};width:120px;height:120px" data-label="${pct}%"></div>
          <div class="result-verdict">
            <h2>${correct} of ${questions.length} correct</h2>
            <p>${pct >= 80
              ? "That's passing territory on most state exams. Keep your streak going!"
              : pct >= 60
                ? "Close! Review the missed questions below, then try again — most states want ~70–80%."
                : "No worries — every attempt teaches you something. Review the explanations below and revisit the lessons."}</p>
            <div class="btn-row">
              <button class="btn" id="retryQuiz">Try another quiz</button>
              <button class="btn ghost" data-go="learn">Review lessons</button>
            </div>
          </div>
        </div>
        <h2 class="section-title">🔍 Answer review</h2>
        ${graded.map((g, i) => `
          <div class="review-item ${g.right ? "right" : ""}">
            <p class="rv-q">${i + 1}. ${esc(g.q)}</p>
            <p class="rv-a">${g.right
              ? `✔ You answered: <strong>${esc(g.options[g.pick])}</strong>`
              : `✘ You answered: <strong>${g.pick === null ? "(no answer)" : esc(g.options[g.pick])}</strong> · Correct: <strong>${esc(g.options[g.answer])}</strong>`}</p>
            <p class="rv-x">${esc(g.explain)}</p>
          </div>`).join("")}`;

      view.querySelector("#retryQuiz").addEventListener("click", () => navigate("quiz"));
      wireGoButtons();
    }

    renderQuestion();
  }

  /* ============================================================
     SKILLS LAB — order-the-steps game
     ============================================================ */

  routes.skills = function () {
    const sp = skillsProgress();
    view.innerHTML = `
      <div class="view-header">
        <h1>🧤 Skills Lab</h1>
        <p class="subtitle">The state skills exam tests whether you can perform procedures in the correct order.
        Here, the steps are scrambled — click them in the right sequence. Wrong clicks count as mistakes,
        so think like an evaluator is watching.</p>
        <div class="progress-track" style="max-width:340px"><div class="progress-fill" style="width:${sp.done / sp.total * 100}%"></div></div>
      </div>
      <div class="card-grid">
        ${D.skills.map(s => {
          const best = state.skillsBest[s.id];
          return `
            <button class="tile" data-go="skillGame" data-param="${s.id}">
              <span class="tile-icon">${s.icon}</span>
              <h3>${esc(s.title)}</h3>
              <p class="tile-desc">${esc(s.why)}</p>
              <span class="tile-meta">${best === undefined
                ? s.steps.length + " steps"
                : best === 0
                  ? '<span class="badge-done">🏆 Perfect run!</span>'
                  : `Best: ${best} mistake${best === 1 ? "" : "s"} — try for perfect`}</span>
            </button>`;
        }).join("")}
      </div>`;
    wireGoButtons();
  };

  routes.skillGame = function (skillId) {
    const skill = D.skills.find(s => s.id === skillId) || D.skills[0];
    let nextStep = 0;
    let mistakes = 0;

    // Shuffle until the first visible order differs from the solution
    // (so the answer is never given away on small step counts).
    let order = shuffle(skill.steps.map((_, i) => i));
    if (order.every((v, i) => v === i)) order.reverse();

    view.innerHTML = `
      <button class="breadcrumb" data-go="skills">← All skills</button>
      <div class="view-header">
        <h1>${skill.icon} ${esc(skill.title)}</h1>
        <p class="subtitle">${esc(skill.why)}</p>
        <div class="callout warn"><p><strong>Critical points:</strong> ${esc(skill.critical)}</p></div>
        <p class="mistake-meter">Mistakes: <b id="mistakeCount">0</b></p>
      </div>
      <div class="skill-board">
        <div class="skill-col">
          <h3>🔀 Scrambled steps — click the NEXT step</h3>
          <div class="step-pool" id="stepPool">
            ${order.map(si => `<button class="step-btn" data-si="${si}">${esc(skill.steps[si])}</button>`).join("")}
          </div>
        </div>
        <div class="skill-col">
          <h3>📋 Your procedure</h3>
          <div class="step-done-list" id="stepDone">
            <p class="empty-note" id="emptyNote">Steps you place will appear here, in order.</p>
          </div>
        </div>
      </div>`;

    const doneList = view.querySelector("#stepDone");

    view.querySelectorAll(".step-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const si = Number(btn.dataset.si);
        if (si === nextStep) {
          btn.classList.add("placed");
          view.querySelector("#emptyNote")?.remove();
          const row = document.createElement("div");
          row.className = "step-done";
          row.innerHTML = `<span class="step-num">${nextStep + 1}.</span><span>${esc(skill.steps[si])}</span>`;
          doneList.appendChild(row);
          nextStep++;
          if (nextStep === skill.steps.length) finishSkill();
        } else {
          mistakes++;
          view.querySelector("#mistakeCount").textContent = mistakes;
          btn.classList.add("shake");
          setTimeout(() => btn.classList.remove("shake"), 400);
        }
      });
    });

    function finishSkill() {
      const prevBest = state.skillsBest[skill.id];
      const isNewSkill = prevBest === undefined;
      if (isNewSkill || mistakes < prevBest) state.skillsBest[skill.id] = mistakes;

      const perfect = mistakes === 0;
      awardXP(perfect ? 30 : Math.max(10, 30 - mistakes * 5), "skill completed");
      if (perfect) earnBadge("skill-pro");
      if (D.skills.every(s => state.skillsBest[s.id] !== undefined)) earnBadge("skills-champion");
      if (perfect) confetti();
      save();

      const summary = document.createElement("div");
      summary.className = "card";
      summary.style.marginTop = "20px";
      summary.innerHTML = `
        <h2>${perfect ? "🏆 Flawless procedure!" : "✅ Procedure complete"}</h2>
        <p>${perfect
          ? "Zero mistakes — that's exactly how the skills exam wants it. Remember the critical points and you'll shine on test day."
          : `You finished with <strong>${mistakes} mistake${mistakes === 1 ? "" : "s"}</strong>. Re-read the critical points above and run it again — repetition builds the muscle memory evaluators look for.`}</p>
        <div class="btn-row">
          <button class="btn" id="replaySkill">🔁 Run it again</button>
          <button class="btn ghost" data-go="skills">Back to Skills Lab</button>
        </div>`;
      view.appendChild(summary);
      summary.scrollIntoView({ behavior: "smooth", block: "center" });
      summary.querySelector("#replaySkill").addEventListener("click", () => routes.skillGame(skill.id));
      wireGoButtons();
    }

    wireGoButtons();
  };

  /* ============================================================
     SCENARIOS — branching decision simulations
     ============================================================ */

  routes.scenarios = function () {
    const scp = scenarioProgress();
    view.innerHTML = `
      <div class="view-header">
        <h1>🎭 Scenarios</h1>
        <p class="subtitle">Real shifts don't come with answer choices highlighted. Step into realistic situations,
        make judgment calls, and get coaching on every decision. Best choices earn 2 points, reasonable ones 1, risky ones 0.</p>
        <div class="progress-track" style="max-width:340px"><div class="progress-fill" style="width:${scp.done / scp.total * 100}%"></div></div>
      </div>
      <div class="card-grid">
        ${D.scenarios.map(s => {
          const best = state.scenariosBest[s.id];
          const max = s.steps.length * 2;
          return `
            <button class="tile" data-go="scenarioPlay" data-param="${s.id}">
              <span class="tile-icon">${s.icon}</span>
              <h3>${esc(s.title)}</h3>
              <p class="tile-desc">${esc(s.setting)}</p>
              <span class="tile-meta">${best === undefined
                ? s.steps.length + " decisions"
                : best === max
                  ? '<span class="badge-done">🌟 Perfect judgment!</span>'
                  : `Best: ${best}/${max} points — try again`}</span>
            </button>`;
        }).join("")}
      </div>`;
    wireGoButtons();
  };

  routes.scenarioPlay = function (scenarioId) {
    const sc = D.scenarios.find(s => s.id === scenarioId) || D.scenarios[0];
    let stepIdx = 0;
    let points = 0;
    const results = []; // quality per step

    function dots() {
      return `<div class="scene-progress">
        ${sc.steps.map((_, i) => {
          if (i < results.length) return `<span class="scene-dot done-${results[i]}"></span>`;
          return `<span class="scene-dot ${i === stepIdx ? "active" : ""}"></span>`;
        }).join("")}
      </div>`;
    }

    function renderStep() {
      const step = sc.steps[stepIdx];
      const choices = shuffle(step.choices.map((_, i) => i));
      view.innerHTML = `
        <button class="breadcrumb" data-go="scenarios">← All scenarios</button>
        <div class="scene-panel">
          <div class="view-header" style="margin-bottom:10px">
            <h1>${sc.icon} ${esc(sc.title)}</h1>
          </div>
          ${dots()}
          <div class="scene-narrative">
            ${stepIdx === 0 ? `<p class="scene-setting">${esc(sc.setting)}</p>` : ""}
            <p><strong>${esc(step.text)}</strong></p>
            <div class="scene-choices">
              ${choices.map(ci => `
                <button class="answer-opt" data-ci="${ci}">
                  <span class="opt-letter">▸</span><span>${esc(step.choices[ci].label)}</span>
                </button>`).join("")}
            </div>
            <div id="sceneFeedback"></div>
          </div>
        </div>`;

      view.querySelectorAll(".answer-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const choice = step.choices[Number(btn.dataset.ci)];
          const quality = choice.quality;
          results.push(quality);
          points += quality === "best" ? 2 : quality === "ok" ? 1 : 0;

          view.querySelectorAll(".answer-opt").forEach(b => {
            b.disabled = true;
            const q = step.choices[Number(b.dataset.ci)].quality;
            if (q === "best") b.classList.add("correct");
            else if (b === btn) b.classList.add("incorrect");
          });
          if (quality === "best") btn.classList.remove("incorrect");

          const icon = quality === "best" ? "🌟" : quality === "ok" ? "🤔" : "⚠️";
          const title = quality === "best" ? "Excellent judgment!" : quality === "ok" ? "Reasonable — but there's a better way." : "That choice puts someone at risk.";
          view.querySelector("#sceneFeedback").innerHTML = `
            <div class="choice-feedback ${quality}">
              <p><strong>${icon} ${title}</strong></p>
              <p>${esc(choice.feedback)}</p>
              <div class="btn-row">
                <button class="btn" id="sceneNext">${stepIdx === sc.steps.length - 1 ? "See debrief →" : "Continue →"}</button>
              </div>
            </div>`;
          const nextBtn = view.querySelector("#sceneNext");
          nextBtn.focus();
          nextBtn.addEventListener("click", () => {
            stepIdx++;
            if (stepIdx >= sc.steps.length) finishScenario();
            else renderStep();
          });
        });
      });

      wireGoButtons();
    }

    function finishScenario() {
      const max = sc.steps.length * 2;
      const prevBest = state.scenariosBest[sc.id];
      if (prevBest === undefined || points > prevBest) state.scenariosBest[sc.id] = points;
      awardXP(points * 10, "scenario completed");
      if (points === max) { earnBadge("quick-thinker"); confetti(); }
      if (D.scenarios.every(s => state.scenariosBest[s.id] !== undefined)) earnBadge("storyteller");
      save();

      view.innerHTML = `
        <button class="breadcrumb" data-go="scenarios">← All scenarios</button>
        <div class="scene-panel">
          <div class="view-header"><h1>${sc.icon} ${esc(sc.title)} — Debrief</h1></div>
          ${dots()}
          <div class="card result-score">
            <div class="ring" style="--pct:${Math.round(points / max * 100)};width:110px;height:110px" data-label="${points}/${max}"></div>
            <div class="result-verdict">
              <h2>${points === max ? "Perfect judgment!" : points >= max * 0.6 ? "Solid instincts!" : "Good practice — run it again"}</h2>
              <p>${esc(sc.debrief)}</p>
              <div class="btn-row">
                <button class="btn" id="replayScene">🔁 Replay scenario</button>
                <button class="btn ghost" data-go="scenarios">More scenarios</button>
              </div>
            </div>
          </div>
        </div>`;
      view.querySelector("#replayScene").addEventListener("click", () => routes.scenarioPlay(sc.id));
      wireGoButtons();
    }

    renderStep();
  };

  /* ---------------- boot ---------------- */
  renderHeaderStats();
  navigate("dashboard");
})();

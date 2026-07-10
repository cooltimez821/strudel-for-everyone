# 🩺 CNA Academy — Interactive CNA Learning Experience

A fully interactive study companion for **Certified Nursing Assistant (CNA)** students preparing
for their state written and skills exams. Runs entirely in the browser — no installation, no
accounts, no backend. Just open `index.html`.

## ✨ What's Inside

| Feature | What it does |
|---|---|
| 📖 **Lessons** | 6 focused modules (Role & Ethics, Infection Control, Safety, Vital Signs, ADLs, Communication & Rights) with interactive quick-check questions |
| 🃏 **Flashcards** | 3 decks / 64 cards — terminology, charting abbreviations, and the "numbers to know" — with flip animation, mastery tracking, and keyboard shortcuts |
| ✅ **Quiz Engine** | 48 exam-style questions with explanations. **Practice mode** (10 questions, instant feedback) and **Exam simulation** (30 questions, 30-minute countdown, graded review) |
| 🧤 **Skills Lab** | 8 clinical skills (handwashing, PPE, transfers, feeding, positioning, occupied bed…) as put-the-steps-in-order challenges with mistake tracking — just like the state skills exam |
| 🎭 **Scenarios** | 5 branching "what would you do?" simulations (a fall, a choking resident, a care refusal, a fire, suspected abuse) with coaching on every decision |
| 🏅 **Progress & Gamification** | XP, daily streaks, 11 badges, per-activity progress, and an overall "exam readiness" score — saved locally in your browser |

## 🚀 Getting Started

```bash
# From the repo root
cd cna
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `cna/index.html` directly in any modern browser.

## 🛠️ Technical Notes

- **Zero dependencies** — vanilla HTML, CSS, and JavaScript (same philosophy as the Strudel tutorial in this repo)
- **Content lives in `data.js`** — lessons, questions, cards, skills, and scenarios are plain data objects, so adding content requires no code changes
- **Logic lives in `app.js`** — a tiny hash-free SPA router with per-feature render functions
- **Progress persists** via `localStorage` (key `cnaAcademyProgress.v1`)
- Responsive layout, dark-mode aware (`prefers-color-scheme`), reduced-motion friendly

## ⚠️ Disclaimer

CNA Academy is a study aid, not a certification course and not medical advice. Skill checklists
are simplified for learning — always follow **your state's curriculum**, your facility's
policies, and each resident's care plan. Requirements vary by state.

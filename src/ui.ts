import { bindPWA, initPWA, showToast } from './pwa.ts'
import { scoreQuiz } from './engine.ts'
import { getQuiz, quizzes } from './quizzes/index.ts'
import { go, hrefFor, parseRoute, type Route } from './router.ts'
import { QUESTIONS_PER_ATTEMPT, prepareAttempt } from './session.ts'
import {
  clearPicks,
  loadAttempt,
  loadLastResult,
  saveAttempt,
  saveLastResult,
  type QuizAttempt,
} from './storage.ts'
import type { Quiz, RankedMatch } from './types.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

export function startApp(): void {
  initPWA()
  render()
  window.addEventListener('hashchange', render)
}

function render(): void {
  const route: Route = parseRoute()
  if (route.name === 'home') {
    applyTheme(null)
    renderHome()
    return
  }

  const quiz = getQuiz(route.quizId)
  if (!quiz) {
    applyTheme(null)
    renderMissing()
    return
  }

  applyTheme(quiz)

  const attempt = ensureAttempt(quiz)
  const picks = attempt.picks
  const activeQuiz: Quiz = { ...quiz, questions: attempt.questions }

  if (route.name === 'result') {
    if (picks.length !== activeQuiz.questions.length) {
      go({ name: 'quiz', quizId: quiz.id })
      return
    }
    const ranked = scoreQuiz(activeQuiz, picks)
    saveLastResult(quiz.id, ranked[0]?.name ?? '')
    renderResult(quiz, ranked)
    return
  }

  if (picks.length >= activeQuiz.questions.length) {
    go({ name: 'result', quizId: quiz.id })
    return
  }

  renderQuiz(activeQuiz, picks)
}

function ensureAttempt(quiz: Quiz): QuizAttempt {
  const existing = loadAttempt(quiz.id)
  if (
    existing &&
    existing.questions.length === QUESTIONS_PER_ATTEMPT &&
    existing.picks.length <= existing.questions.length
  ) {
    return existing
  }

  const questions = prepareAttempt(quiz)
  const attempt: QuizAttempt = { questions, picks: [] }
  saveAttempt(quiz.id, attempt)
  return attempt
}

function applyTheme(quiz: Quiz | null): void {
  const root = document.documentElement
  if (!quiz) {
    root.removeAttribute('data-quiz')
    root.style.removeProperty('--quiz-accent')
    root.style.removeProperty('--quiz-accent-text')
    root.style.removeProperty('--quiz-wash')
    return
  }
  root.dataset.quiz = quiz.id
  root.style.setProperty('--quiz-accent', quiz.theme.accent)
  root.style.setProperty('--quiz-accent-text', quiz.theme.accentText)
  root.style.setProperty('--quiz-wash', quiz.theme.wash)
}

function renderHome(): void {
  app.innerHTML = `
    ${shell({
      eyebrow: 'Personality quizzes',
      title: 'Per Test',
      status: true,
    })}
    <main>
      <section class="hero">
        <h2>Pick a world. Get one answer.</h2>
        <p>Each show and movie has its own test, its own characters, and its own scoring. An Office result does not follow you to Hogwarts.</p>
      </section>

      <section class="quiz-grid" aria-label="Available quizzes">
        ${quizzes.map(quizCard).join('')}
      </section>
    </main>
    <div id="toast" class="toast" hidden></div>
  `

  bindPWA({
    statusEl: document.querySelector('#connection'),
    toastEl: document.querySelector('#toast'),
  })
}

function quizCard(quiz: Quiz): string {
  const last = loadLastResult(quiz.id)
  return `
    <a class="quiz-card" href="${hrefFor({ name: 'quiz', quizId: quiz.id })}" style="--card-accent: ${quiz.theme.accent}; --card-wash: ${quiz.theme.wash}">
      <span class="quiz-card-tag">${escapeHtml(quiz.world)}</span>
      <h3>${escapeHtml(quiz.title)}</h3>
      <p>${escapeHtml(quiz.tag)}</p>
      <p class="quiz-card-meta">${QUESTIONS_PER_ATTEMPT} questions · ${quiz.characters.length} results</p>
      ${last ? `<p class="quiz-card-last">Last result: ${escapeHtml(last)}</p>` : ''}
    </a>
  `
}

function renderQuiz(quiz: Quiz, picks: number[]): void {
  const index = picks.length
  const question = quiz.questions[index]
  if (!question) return

  const step = index + 1
  const total = quiz.questions.length
  const percent = Math.round((index / total) * 100)

  app.innerHTML = `
    ${shell({
      eyebrow: quiz.world,
      title: quiz.title,
      back: { href: hrefFor({ name: 'home' }), label: 'All quizzes' },
    })}
    <main class="quiz-main">
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${index}" aria-label="Question ${step} of ${total}">
        <div class="progress-bar" style="width: ${percent}%"></div>
      </div>
      <p class="step">Question ${step} of ${total}</p>
      <section class="card question-card">
        <h2>${escapeHtml(question.text)}</h2>
        <div class="answers">
          ${question.answers
            .map(
              (answer, answerIndex) => `
            <button type="button" class="answer" data-answer="${answerIndex}">
              ${escapeHtml(answer.label)}
            </button>`,
            )
            .join('')}
        </div>
      </section>
    </main>
  `

  app.querySelectorAll<HTMLButtonElement>('.answer').forEach((button) => {
    button.addEventListener('click', () => {
      const answerIndex = Number(button.dataset.answer)
      const nextPicks = [...picks, answerIndex]
      const existing = loadAttempt(quiz.id)
      saveAttempt(quiz.id, {
        questions: existing?.questions ?? quiz.questions,
        picks: nextPicks,
      })
      if (nextPicks.length >= quiz.questions.length) {
        go({ name: 'result', quizId: quiz.id })
        return
      }
      renderQuiz(quiz, nextPicks)
    })
  })
}

function renderResult(quiz: Quiz, ranked: RankedMatch[]): void {
  const winner = ranked[0]
  if (!winner) return

  app.innerHTML = `
    ${shell({
      eyebrow: quiz.world,
      title: quiz.title,
      back: { href: hrefFor({ name: 'home' }), label: 'All quizzes' },
    })}
    <main class="result-main">
      <section class="card result-hero">
        <p class="eyebrow">${escapeHtml(quiz.resultLabel)}</p>
        <h2>${escapeHtml(winner.name)}</h2>
        <p class="result-role">${escapeHtml(winner.role)} · ${winner.percent}%</p>
        <p class="result-profile-label">Your profile</p>
        <p class="result-blurb">${escapeHtml(winner.blurb)}</p>
        <div class="result-actions">
          <button type="button" class="primary" id="retake">Retake this quiz</button>
          <button type="button" class="ghost" id="share">Share result</button>
        </div>
      </section>
      <section class="card">
        <h2>The rest of the split</h2>
        <p>Only this quiz’s answers count here.</p>
        <ul class="split">
          ${ranked
            .map(
              (match) => `
            <li>
              <div class="split-row">
                <span>${escapeHtml(match.name)}</span>
                <span>${match.percent}%</span>
              </div>
              <div class="split-track">
                <div class="split-fill" style="width: ${match.percent}%"></div>
              </div>
            </li>`,
            )
            .join('')}
        </ul>
      </section>
    </main>
    <div id="toast" class="toast" hidden></div>
  `

  bindPWA({ toastEl: document.querySelector('#toast') })

  document.querySelector('#retake')?.addEventListener('click', () => {
    clearPicks(quiz.id)
    go({ name: 'quiz', quizId: quiz.id })
  })

  document.querySelector('#share')?.addEventListener('click', () => {
    void shareResult(quiz, winner)
  })
}

function renderMissing(): void {
  app.innerHTML = `
    ${shell({
      eyebrow: 'Per Test',
      title: 'Not found',
      back: { href: hrefFor({ name: 'home' }), label: 'All quizzes' },
    })}
    <main>
      <section class="card">
        <h2>That quiz is not here</h2>
        <p>Each test lives on its own page. Head back and pick a world from the list.</p>
      </section>
    </main>
  `
}

function shell(options: {
  eyebrow: string
  title: string
  back?: { href: string; label: string }
  status?: boolean
}): string {
  return `
    <header class="topbar">
      <div class="brand">
        ${
          options.back
            ? `<a class="back" href="${options.back.href}">${escapeHtml(options.back.label)}</a>`
            : ''
        }
        <div>
          <p class="eyebrow">${escapeHtml(options.eyebrow)}</p>
          <h1>${escapeHtml(options.title)}</h1>
        </div>
      </div>
      ${options.status ? `<span id="connection" class="status" data-state="online">Online</span>` : ''}
    </header>
  `
}

async function shareResult(quiz: Quiz, winner: RankedMatch): Promise<void> {
  const text = `I got ${winner.name} on the ${quiz.title} test in Per Test.`
  const url = window.location.href
  try {
    if (navigator.share) {
      await navigator.share({ title: quiz.title, text, url })
      return
    }
  } catch {
    // User cancelled share, or the browser rejected it.
  }

  try {
    await navigator.clipboard.writeText(`${text} ${url}`)
    showToast('Result copied')
  } catch {
    showToast('Could not share this result')
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

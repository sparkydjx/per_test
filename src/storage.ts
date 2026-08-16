import type { Question } from './types.ts'

const PREFIX = 'per-test:'

export interface QuizAttempt {
  questions: Question[]
  picks: number[]
}

function key(quizId: string): string {
  return `${PREFIX}${quizId}`
}

function attemptKey(quizId: string): string {
  return `${PREFIX}attempt:${quizId}`
}

function isQuestion(value: unknown): value is Question {
  if (!value || typeof value !== 'object') return false
  const question = value as Question
  return (
    typeof question.text === 'string' &&
    Array.isArray(question.answers) &&
    question.answers.every(
      (answer) =>
        answer &&
        typeof answer === 'object' &&
        typeof answer.label === 'string' &&
        answer.scores &&
        typeof answer.scores === 'object',
    )
  )
}

export function loadAttempt(quizId: string): QuizAttempt | null {
  try {
    const raw = sessionStorage.getItem(attemptKey(quizId))
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return null
    const attempt = parsed as QuizAttempt
    if (
      !Array.isArray(attempt.questions) ||
      !attempt.questions.every(isQuestion) ||
      !Array.isArray(attempt.picks) ||
      !attempt.picks.every((n) => typeof n === 'number')
    ) {
      return null
    }
    return attempt
  } catch {
    return null
  }
}

export function saveAttempt(quizId: string, attempt: QuizAttempt): void {
  sessionStorage.setItem(attemptKey(quizId), JSON.stringify(attempt))
  // Keep legacy picks key in sync for older sessions / debugging.
  sessionStorage.setItem(key(quizId), JSON.stringify(attempt.picks))
}

export function loadPicks(quizId: string): number[] {
  const attempt = loadAttempt(quizId)
  if (attempt) return attempt.picks
  try {
    const raw = sessionStorage.getItem(key(quizId))
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) && parsed.every((n) => typeof n === 'number') ? parsed : []
  } catch {
    return []
  }
}

export function savePicks(quizId: string, picks: number[]): void {
  const attempt = loadAttempt(quizId)
  if (attempt) {
    saveAttempt(quizId, { ...attempt, picks })
    return
  }
  sessionStorage.setItem(key(quizId), JSON.stringify(picks))
}

export function clearPicks(quizId: string): void {
  sessionStorage.removeItem(key(quizId))
  sessionStorage.removeItem(attemptKey(quizId))
}

export function saveLastResult(quizId: string, name: string): void {
  localStorage.setItem(`${PREFIX}last:${quizId}`, name)
}

export function loadLastResult(quizId: string): string | null {
  return localStorage.getItem(`${PREFIX}last:${quizId}`)
}

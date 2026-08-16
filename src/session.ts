import type { Answer, Question, Quiz } from './types.ts'

export const QUESTIONS_PER_ATTEMPT = 10

/** Fisher–Yates shuffle; returns a new array. */
export function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j]!, next[i]!]
  }
  return next
}

function shuffleAnswers(answers: readonly Answer[]): Answer[] {
  return shuffle(answers)
}

/** Draw `count` questions from the pool and shuffle each question's answers. */
export function prepareAttempt(quiz: Quiz, count = QUESTIONS_PER_ATTEMPT): Question[] {
  const poolSize = quiz.questions.length
  const take = Math.min(count, poolSize)
  return shuffle(quiz.questions)
    .slice(0, take)
    .map((question) => ({
      text: question.text,
      answers: shuffleAnswers(question.answers),
    }))
}

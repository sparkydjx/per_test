import type { Quiz, RankedMatch } from './types.ts'

export function scoreQuiz(quiz: Quiz, picks: number[]): RankedMatch[] {
  const totals = Object.fromEntries(quiz.characters.map((character) => [character.id, 0]))

  picks.forEach((answerIndex, questionIndex) => {
    const scores = quiz.questions[questionIndex]?.answers[answerIndex]?.scores
    if (!scores) return
    for (const [id, points] of Object.entries(scores)) {
      totals[id] = (totals[id] ?? 0) + points
    }
  })

  const ranked = quiz.characters
    .map((character) => ({
      id: character.id,
      name: character.name,
      role: character.role,
      blurb: character.blurb,
      total: totals[character.id] ?? 0,
      percent: 0,
    }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))

  const sum = ranked.reduce((acc, match) => acc + match.total, 0) || 1
  let allocated = 0
  ranked.forEach((match, index) => {
    if (index === ranked.length - 1) {
      match.percent = Math.max(0, 100 - allocated)
      return
    }
    match.percent = Math.round((match.total / sum) * 100)
    allocated += match.percent
  })

  return ranked
}

import type { Quiz, RankedMatch } from './types.ts'

const DUAL_ANALYSIS_QUIZ_IDS = new Set([
  'office',
  'parks-and-recreation',
  'star-wars',
  'battle-for-dream-island',
])

export function usesDualAnalysis(quizId: string): boolean {
  return DUAL_ANALYSIS_QUIZ_IDS.has(quizId)
}

/** Split a profile blurb into clean sentence beats. */
export function splitBeats(blurb: string): string[] {
  return blurb
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
}

/**
 * Prefer opening trait lines and a closing “gift/risk” line — those tend to be
 * the most distinctive comments in each profile.
 */
export function pickRelevantBeats(blurb: string, count: number): string[] {
  const beats = splitBeats(blurb)
  if (beats.length <= count) return beats

  const chosen: string[] = []
  const pushUnique = (beat: string | undefined) => {
    if (!beat || chosen.includes(beat) || chosen.length >= count) return
    chosen.push(beat)
  }

  pushUnique(beats[0])
  pushUnique(beats[1])
  pushUnique(beats[beats.length - 1])
  for (const beat of beats) pushUnique(beat)

  return chosen.slice(0, count)
}

export function buildResultAnalysis(quiz: Quiz, ranked: RankedMatch[]): string {
  const primary = ranked[0]
  if (!primary) return ''

  if (!usesDualAnalysis(quiz.id) || ranked.length < 2) {
    return primary.blurb
  }

  const secondary = ranked[1]!
  const primaryShare = Math.max(primary.percent, 1)
  const secondaryShare = Math.max(secondary.percent, 0)
  const gap = primaryShare - secondaryShare

  // Closer races lean harder on the runner-up; blowouts keep the focus on #1.
  const primaryCount = gap >= 18 ? 3 : 2
  const secondaryCount = gap >= 18 ? 1 : gap >= 8 ? 2 : 2

  const primaryBeats = pickRelevantBeats(primary.blurb, primaryCount)
  const secondaryBeats = pickRelevantBeats(secondary.blurb, secondaryCount)

  const lead =
    gap < 8
      ? `You landed closest to ${primary.name} (${primary.percent}%), but ${secondary.name} (${secondary.percent}%) is right there with you.`
      : gap < 18
        ? `Your clearest match is ${primary.name} (${primary.percent}%), with a strong second read of ${secondary.name} (${secondary.percent}%).`
        : `You're mostly ${primary.name} (${primary.percent}%), with ${secondary.name} (${secondary.percent}%) showing up as the next loudest note.`

  const primaryBlock = `From the ${primary.name} side: ${primaryBeats.join(' ')}`
  const secondaryBlock = `From the ${secondary.name} side, the parts that fit your answers best: ${secondaryBeats.join(' ')}`
  const closer = `Put together, this result is less a pure clone and more that mix — ${primary.role.toLowerCase()} energy up front, with ${secondary.role.toLowerCase()} traits still shaping how you move.`

  return `${lead} ${primaryBlock} ${secondaryBlock} ${closer}`
}

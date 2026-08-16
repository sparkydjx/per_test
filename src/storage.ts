const PREFIX = 'per-test:'

function key(quizId: string): string {
  return `${PREFIX}${quizId}`
}

export function loadPicks(quizId: string): number[] {
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
  sessionStorage.setItem(key(quizId), JSON.stringify(picks))
}

export function clearPicks(quizId: string): void {
  sessionStorage.removeItem(key(quizId))
}

export function saveLastResult(quizId: string, name: string): void {
  localStorage.setItem(`${PREFIX}last:${quizId}`, name)
}

export function loadLastResult(quizId: string): string | null {
  return localStorage.getItem(`${PREFIX}last:${quizId}`)
}

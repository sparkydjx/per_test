export type Route =
  | { name: 'home' }
  | { name: 'quiz'; quizId: string }
  | { name: 'result'; quizId: string }

export function parseRoute(hash = window.location.hash): Route {
  const path = hash.replace(/^#\/?/, '').replace(/\/+$/, '')
  if (!path) return { name: 'home' }

  const [quizId, rest] = path.split('/')
  if (!quizId) return { name: 'home' }
  if (rest === 'result') return { name: 'result', quizId }
  return { name: 'quiz', quizId }
}

export function hrefFor(route: Route): string {
  if (route.name === 'home') return '#/'
  if (route.name === 'result') return `#/${route.quizId}/result`
  return `#/${route.quizId}`
}

export function go(route: Route): void {
  window.location.hash = hrefFor(route)
}

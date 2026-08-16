import type { Quiz } from '../types.ts'
import { friendsQuiz } from './friends.ts'
import { harryPotterQuiz } from './harry-potter.ts'
import { officeQuiz } from './office.ts'
import { starWarsQuiz } from './star-wars.ts'
import { strangerThingsQuiz } from './stranger-things.ts'

export const quizzes: Quiz[] = [
  friendsQuiz,
  officeQuiz,
  harryPotterQuiz,
  starWarsQuiz,
  strangerThingsQuiz,
]

export function getQuiz(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id)
}

import type { Quiz } from '../types.ts'
import { friendsQuiz } from './friends.ts'
import { harryPotterQuiz } from './harry-potter.ts'
import { officeQuiz } from './office.ts'
import { parksAndRecreationQuiz } from './parks-and-recreation.ts'
import { starWarsQuiz } from './star-wars.ts'

export const quizzes: Quiz[] = [
  friendsQuiz,
  officeQuiz,
  parksAndRecreationQuiz,
  harryPotterQuiz,
  starWarsQuiz,
]

export function getQuiz(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id)
}

import type { Quiz } from '../types.ts'
import { battleForDreamIslandQuiz } from './battle-for-dream-island.ts'
import { dandysWorldQuiz } from './dandys-world.ts'
import { everybodyLovesRaymondQuiz } from './everybody-loves-raymond.ts'
import { harryPotterQuiz } from './harry-potter.ts'
import { officeQuiz } from './office.ts'
import { parksAndRecreationQuiz } from './parks-and-recreation.ts'
import { sonicTheHedgehogQuiz } from './sonic-the-hedgehog.ts'
import { starWarsQuiz } from './star-wars.ts'

// friendsQuiz is kept in ./friends.ts but hidden from the home lineup.
export const quizzes: Quiz[] = [
  officeQuiz,
  parksAndRecreationQuiz,
  everybodyLovesRaymondQuiz,
  battleForDreamIslandQuiz,
  harryPotterQuiz,
  starWarsQuiz,
  sonicTheHedgehogQuiz,
  dandysWorldQuiz,
]

export function getQuiz(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id)
}

export type ScoreMap = Record<string, number>

export interface Character {
  id: string
  name: string
  role: string
  blurb: string
}

export interface Answer {
  label: string
  scores: ScoreMap
}

export interface Question {
  text: string
  answers: Answer[]
}

export interface QuizTheme {
  accent: string
  accentText: string
  wash: string
}

export interface Quiz {
  id: string
  title: string
  world: string
  tag: string
  summary: string
  resultLabel: string
  theme: QuizTheme
  characters: Character[]
  questions: Question[]
}

export type RankedMatch = {
  id: string
  name: string
  role: string
  blurb: string
  total: number
  percent: number
}

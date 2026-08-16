import type { Quiz } from '../types.ts'

export const harryPotterQuiz: Quiz = {
  id: 'harry-potter',
  title: 'Hogwarts',
  world: 'Wizarding',
  tag: 'Which house claims you?',
  summary: 'Not a trivia exam. A sorting of how you move through the world — courage, cunning, curiosity, or care.',
  resultLabel: 'The hat says',
  theme: {
    accent: '#e2b04a',
    accentText: '#1a1204',
    wash: 'rgba(226, 176, 74, 0.14)',
  },
  characters: [
    {
      id: 'gryffindor',
      name: 'Gryffindor',
      role: 'Courage',
      blurb: 'You step toward the hard thing before you have a speech prepared. Loyalty is loud. Fear is information, not a veto. You would rather be brave than tidy.',
    },
    {
      id: 'slytherin',
      name: 'Slytherin',
      role: 'Ambition',
      blurb: 'You play the long game. Taste, strategy, and a private list of what you will not settle for. People call it cold. You call it standards.',
    },
    {
      id: 'ravenclaw',
      name: 'Ravenclaw',
      role: 'Wit',
      blurb: 'You want the elegant answer, not the loud one. Ideas are a playground. You collect facts the way other people collect grudges.',
    },
    {
      id: 'hufflepuff',
      name: 'Hufflepuff',
      role: 'Loyalty',
      blurb: 'You keep the table set. Fairness matters more than the spotlight. When the castle is on fire, you are already helping someone down the stairs.',
    },
  ],
  questions: [
    {
      text: 'A locked door stands between you and something you want. You…',
      answers: [
        { label: 'Open it. Figure out the rest on the other side.', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Find who has the key, then make a deal', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Study the lock until it is almost insulting', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Ask if anyone else needs to get through too', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'What do you protect first?',
      answers: [
        { label: 'The people who would do the same for me', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'My future. Nobody else is going to.', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'The truth, even when it is inconvenient', scores: { ravenclaw: 3, gryffindor: 1 } },
        { label: 'The ones who get overlooked', scores: { hufflepuff: 3, ravenclaw: 1 } },
      ],
    },
    {
      text: 'In a group project you are the one who…',
      answers: [
        { label: 'Takes the scary presentation slot', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Edits the plan so we actually win', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Does the research everyone else skipped', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Makes sure nobody is left doing it alone', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Your favorite kind of victory is…',
      answers: [
        { label: 'The one that looked impossible yesterday', scores: { gryffindor: 3, ravenclaw: 1 } },
        { label: 'The one they never saw coming', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'The one that proves you understood it', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'The one the whole table gets to eat', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'A rumor starts about you. You…',
      answers: [
        { label: 'Walk into the room and dare them to repeat it', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Let it travel. I can use that later.', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Correct the record with receipts', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Check on the person who started it. Are they okay?', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Pick a place to think.',
      answers: [
        { label: 'Somewhere high, with weather', scores: { gryffindor: 3, ravenclaw: 1 } },
        { label: 'A quiet corner with a view of the exits', scores: { slytherin: 3, hufflepuff: 1 } },
        { label: 'A library that smells like paper and dust', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'A kitchen, late, while something simmers', scores: { hufflepuff: 3, ravenclaw: 1 } },
      ],
    },
    {
      text: 'The quality you refuse to fake is…',
      answers: [
        { label: 'Nerve', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Ambition', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Curiosity', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Kindness', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'If the castle needed you at midnight, you would go because…',
      answers: [
        { label: 'Someone has to. It might as well be me.', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'This is how legends — and careers — start', scores: { slytherin: 3, gryffindor: 1 } },
        { label: 'I need to know what is actually happening', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'I will not leave people in the dark', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
  ],
}

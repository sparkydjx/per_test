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
    {
      text: 'A classmate is being left out. You…',
      answers: [
        { label: 'Pull them into the plan mid-stride', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Invite them if they raise the team’s odds', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Ask what they know that we are missing', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Sit with them first, strategy second', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Your study style before finals:',
      answers: [
        { label: 'Last-minute courage and shared notes', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Targeted review of what actually scores', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Deep dives, diagrams, and rabbit holes', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Group sessions with snacks and patience', scores: { hufflepuff: 3, ravenclaw: 1 } },
      ],
    },
    {
      text: 'You find a restricted book. You…',
      answers: [
        { label: 'Open it. Knowledge is a kind of bravery.', scores: { gryffindor: 3, ravenclaw: 1 } },
        { label: 'Copy what is useful, leave no trail', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Cross-reference it against three safer texts', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Ask whether anyone could get hurt by this', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'In Quidditch terms, you are…',
      answers: [
        { label: 'The one diving for the snitch anyway', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'The captain optimizing every possession', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'The strategist reading the whole pitch', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'The teammate who keeps morale intact', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'A professor is unfair. Your move:',
      answers: [
        { label: 'Challenge them in front of the class', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Work the system until the grade moves', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Build an airtight case with evidence', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Support the student who got hurt', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Pick a magical creature energy:',
      answers: [
        { label: 'Phoenix — rise, even when it costs you', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Snake — patient, precise, underrated', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Eagle — perspective above the noise', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Badger — stubborn care, soft claws out', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Your friends would say you are…',
      answers: [
        { label: 'The first through the door', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'The one with the sharper plan', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'The one who asks better questions', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'The one who remembers birthdays', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'A shortcut appears that feels slightly wrong.',
      answers: [
        { label: 'Take it if someone needs help faster', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Take it if it advances the goal cleanly', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Map why it exists before using it', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Skip it if it leaves anyone behind', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'How do you want to be remembered at Hogwarts?',
      answers: [
        { label: 'Brave when it counted', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Impossible to outmaneuver', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Brilliant in the ways that mattered', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Kind in a place that forgot how', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'You are offered power with strings attached.',
      answers: [
        { label: 'Take it if I can protect people with it', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Negotiate the strings until they are mine', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Inspect every clause before touching it', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Refuse if it costs someone else’s dignity', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Late night in the common room, you are…',
      answers: [
        { label: 'Planning tomorrow’s daring idea', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Quietly positioning for the next win', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Lost in a book you did not assign yourself', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Making tea for whoever looks tired', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'When fear shows up, you treat it as…',
      answers: [
        { label: 'A signal to move anyway', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'A factor in the strategy', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'A puzzle with a name and a cause', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Something we face together', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
  ],
}

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
      text: 'Something you want is behind an obstacle. You usually…',
      answers: [
        { label: 'Push through and sort the details afterward', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Find the person who controls access and negotiate', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Study the obstacle until the solution feels elegant', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Check who else needs through before you act', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'When resources are limited, what do you guard first?',
      answers: [
        { label: 'The people who would do the same for you', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Your long-term position', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'An accurate picture of what is true', scores: { ravenclaw: 3, gryffindor: 1 } },
        { label: 'Anyone likely to be overlooked', scores: { hufflepuff: 3, ravenclaw: 1 } },
      ],
    },
    {
      text: 'In a group assignment, you naturally become the person who…',
      answers: [
        { label: 'Takes the exposed, high-pressure role', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Edits the plan until the outcome improves', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Does the deep work others skip', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Makes sure nobody is stranded with the load', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Which kind of win feels most satisfying?',
      answers: [
        { label: 'The one that seemed impossible the day before', scores: { gryffindor: 3, ravenclaw: 1 } },
        { label: 'The one that arrived before anyone predicted it', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'The one that proves you understood the problem', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'The one everyone involved gets to enjoy', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'A story about you starts circulating. You…',
      answers: [
        { label: 'Walk in and force the conversation into the open', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Let it move; it may become useful later', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Correct it with evidence', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Check on the person who started it before anything else', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Where do you think most clearly?',
      answers: [
        { label: 'Somewhere elevated, with weather and distance', scores: { gryffindor: 3, ravenclaw: 1 } },
        { label: 'A quiet corner where you can see the exits', scores: { slytherin: 3, hufflepuff: 1 } },
        { label: 'Among books, notes, and unfinished questions', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Somewhere domestic, late, while something is cooking', scores: { hufflepuff: 3, ravenclaw: 1 } },
      ],
    },
    {
      text: 'Which trait would feel worst to fake?',
      answers: [
        { label: 'Willingness to act when it is uncomfortable', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Drive toward a higher place for yourself', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Genuine interest in how things work', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Steady care for other people', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Something urgent needs someone at an inconvenient hour. You go because…',
      answers: [
        { label: 'If not you, then who?', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Moments like this shape reputations and futures', scores: { slytherin: 3, gryffindor: 1 } },
        { label: 'You need to understand what is actually happening', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'You will not leave people without support', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Someone on the edge of the group is being ignored. You…',
      answers: [
        { label: 'Pull them into the action while it is moving', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Include them if they strengthen the outcome', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Ask what perspective the group is missing', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Sit with them first and plan second', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Before a high-stakes evaluation, you prepare by…',
      answers: [
        { label: 'Relying on nerve and shared last-minute notes', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Focusing only on what actually moves the score', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Going deep, sometimes deeper than required', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Studying with others and making room for patience', scores: { hufflepuff: 3, ravenclaw: 1 } },
      ],
    },
    {
      text: 'You find information that is restricted for a reason. You…',
      answers: [
        { label: 'Open it; some knowledge is worth the risk', scores: { gryffindor: 3, ravenclaw: 1 } },
        { label: 'Take what is useful and leave little evidence', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Cross-check it against safer sources first', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Ask who could be harmed if it spreads', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'In a competitive team sport, your natural role is…',
      answers: [
        { label: 'Taking the decisive risk when it counts', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Directing play toward the highest-percentage win', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Reading the whole field before committing', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Holding morale together when the score slips', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'An authority figure is unfair. You…',
      answers: [
        { label: 'Challenge them while people are watching', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Work the system until the outcome shifts', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Build a careful case with evidence', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Support the person who was hurt', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Which image feels closest to how you handle pressure?',
      answers: [
        { label: 'Rising again after a costly fall', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Waiting, then striking with precision', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Climbing high enough to see the pattern', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Holding ground protectively for your people', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Friends usually count on you to be…',
      answers: [
        { label: 'First through the difficult door', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'The one with the sharper plan', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'The one asking better questions', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'The one who remembers the small personal details', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'A shortcut appears that feels slightly wrong. You…',
      answers: [
        { label: 'Take it if it helps someone faster', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Take it if it cleanly advances the goal', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Map why it exists before using it', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Skip it if anyone gets left behind', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'How do you want to be remembered by a community you lived in?',
      answers: [
        { label: 'As someone who acted when it counted', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'As someone hard to outmaneuver', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'As someone who understood what mattered', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'As someone who stayed kind when others forgot', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'You are offered influence with conditions attached. You…',
      answers: [
        { label: 'Accept it if it lets you protect people', scores: { gryffindor: 3, hufflepuff: 1 } },
        { label: 'Negotiate until the conditions favor you', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Inspect every clause before touching it', scores: { ravenclaw: 3, slytherin: 1 } },
        { label: 'Refuse if it costs someone else’s dignity', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'Late at night in a shared living space, you are usually…',
      answers: [
        { label: 'Planning tomorrow’s bold move', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'Quietly arranging the next advantage', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'Lost in something you chose to study for yourself', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Looking after whoever seems worn down', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
    {
      text: 'When fear shows up, you treat it as…',
      answers: [
        { label: 'A signal to move anyway', scores: { gryffindor: 3, slytherin: 1 } },
        { label: 'One more variable in the plan', scores: { slytherin: 3, ravenclaw: 1 } },
        { label: 'A problem with a cause that can be named', scores: { ravenclaw: 3, hufflepuff: 1 } },
        { label: 'Something faced together, not alone', scores: { hufflepuff: 3, gryffindor: 1 } },
      ],
    },
  ],
}

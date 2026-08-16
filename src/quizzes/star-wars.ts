import type { Quiz } from '../types.ts'

export const starWarsQuiz: Quiz = {
  id: 'star-wars',
  title: 'Star Wars',
  world: 'Saga',
  tag: 'Which rebel are you?',
  summary: 'A galaxy far, far away — scored on instinct, duty, charm, and patience. Separate from every other universe in this app.',
  resultLabel: 'Your place in the fight is',
  theme: {
    accent: '#ffe566',
    accentText: '#161200',
    wash: 'rgba(255, 229, 102, 0.12)',
  },
  characters: [
    {
      id: 'luke',
      name: 'Luke Skywalker',
      role: 'The believer',
      blurb: 'You want the good ending and you are willing to train for it. Hope is not naïve on you — it is a discipline. You keep looking toward the horizon.',
    },
    {
      id: 'leia',
      name: 'Leia Organa',
      role: 'The commander',
      blurb: 'You hold the line when everyone else wants a speech. Duty first, feelings in the briefing after. You will lead the room and still make the plan.',
    },
    {
      id: 'han',
      name: 'Han Solo',
      role: 'The scoundrel',
      blurb: 'You pretend it is about the money. It is not. You improvise, you charm, you leave — and then you come back when it counts.',
    },
    {
      id: 'obiwan',
      name: 'Obi-Wan Kenobi',
      role: 'The mentor',
      blurb: 'You have seen this movie before. You speak softly, wait longer than is comfortable, and still show up with a lightsaber when the kids need covering fire.',
    },
  ],
  questions: [
    {
      text: 'The mission just went sideways. You…',
      answers: [
        { label: 'Trust the feeling and go anyway', scores: { luke: 3, han: 1 } },
        { label: 'Reassign roles. We are not done.', scores: { leia: 3, obiwan: 1 } },
        { label: 'Punch it. I’ll invent the rest in hyperspace.', scores: { han: 3, luke: 1 } },
        { label: 'Slow down. Panic is how we lose people.', scores: { obiwan: 3, leia: 1 } },
      ],
    },
    {
      text: 'What pulls you into a fight you did not start?',
      answers: [
        { label: 'Someone smaller than the problem', scores: { luke: 3, leia: 1 } },
        { label: 'A principle I will not watch die', scores: { leia: 3, obiwan: 1 } },
        { label: 'A friend who would do it for me', scores: { han: 3, luke: 1 } },
        { label: 'A debt I still owe the past', scores: { obiwan: 3, han: 1 } },
      ],
    },
    {
      text: 'Your preferred ship role:',
      answers: [
        { label: 'Pilot. I want the stars in the glass.', scores: { luke: 3, han: 1 } },
        { label: 'Command. Give me the comms.', scores: { leia: 3, obiwan: 1 } },
        { label: 'Captain. This heap has personality.', scores: { han: 3, luke: 1 } },
        { label: 'Passenger-sage. I will tap the console once.', scores: { obiwan: 3, leia: 1 } },
      ],
    },
    {
      text: 'How do you handle a rival?',
      answers: [
        { label: 'Believe they can still turn around', scores: { luke: 3, obiwan: 1 } },
        { label: 'Out-organize them in public', scores: { leia: 3, han: 1 } },
        { label: 'Smile, bluff, and keep a blaster handy', scores: { han: 3, leia: 1 } },
        { label: 'Teach around them. Time is a weapon.', scores: { obiwan: 3, luke: 1 } },
      ],
    },
    {
      text: 'Pick a line you would actually say.',
      answers: [
        { label: 'I have a good feeling about this.', scores: { luke: 3, han: 1 } },
        { label: 'Somebody has to save our skins.', scores: { leia: 3, han: 1 } },
        { label: 'Never tell me the odds.', scores: { han: 3, luke: 1 } },
        { label: 'The Force will be with you. Always.', scores: { obiwan: 3, luke: 1 } },
      ],
    },
    {
      text: 'Down time on a remote moon looks like…',
      answers: [
        { label: 'Training until the suns set', scores: { luke: 3, obiwan: 1 } },
        { label: 'Briefings, maps, and a stolen hour of sleep', scores: { leia: 3, obiwan: 1 } },
        { label: 'Cards, repairs, and a drink I did not pay for', scores: { han: 3, luke: 1 } },
        { label: 'Watching the kids from a ridge', scores: { obiwan: 3, leia: 1 } },
      ],
    },
    {
      text: 'Your weakness, if we are being honest:',
      answers: [
        { label: 'I attach. Then I try to save everyone.', scores: { luke: 3, leia: 1 } },
        { label: 'I carry the war in my voice', scores: { leia: 3, obiwan: 1 } },
        { label: 'I leave before anyone can need me', scores: { han: 3, obiwan: 1 } },
        { label: 'I hide in wisdom so I do not have to hope', scores: { obiwan: 3, luke: 1 } },
      ],
    },
    {
      text: 'When the credits roll, you want to have been…',
      answers: [
        { label: 'The one who believed anyway', scores: { luke: 3, obiwan: 1 } },
        { label: 'The one who kept the alliance standing', scores: { leia: 3, luke: 1 } },
        { label: 'The one who came back', scores: { han: 3, leia: 1 } },
        { label: 'The one who made the next generation possible', scores: { obiwan: 3, han: 1 } },
      ],
    },
  ],
}

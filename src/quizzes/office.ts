import type { Quiz } from '../types.ts'

export const officeQuiz: Quiz = {
  id: 'office',
  title: 'The Office',
  world: 'Workplace',
  tag: 'Who are you at work?',
  summary: 'A separate test for the Scranton branch. Your Friends result does not transfer to the annex.',
  resultLabel: 'You belong at',
  theme: {
    accent: '#7eb6ff',
    accentText: '#071018',
    wash: 'rgba(126, 182, 255, 0.14)',
  },
  characters: [
    {
      id: 'jim',
      name: 'Jim Halpert',
      role: 'The observer',
      blurb: 'You notice everything, play it cool, and save your best energy for the people who actually get the joke. Competence is optional. Timing is not.',
    },
    {
      id: 'dwight',
      name: 'Dwight Schrute',
      role: 'The true believer',
      blurb: 'You take the job more seriously than the job takes itself. Loyalty, systems, and a five-year beet plan. You would like to speak to the manager — you are the manager.',
    },
    {
      id: 'pam',
      name: 'Pam Beesly',
      role: 'The quiet pivot',
      blurb: 'You are kinder than the room, funnier than you advertise, and slowly building a life that is actually yours. Reception is a phase. The art is not.',
    },
    {
      id: 'michael',
      name: 'Michael Scott',
      role: 'The heart',
      blurb: 'You want the group to feel like a family, even when that is a terrible idea. Attention is love. Speeches are inevitable. You mean it.',
    },
    {
      id: 'angela',
      name: 'Angela Martin',
      role: 'The standard',
      blurb: 'Rules exist for a reason, and the reason is you. Small, precise, devastating. You have opinions about party size, cats, and other people’s morals.',
    },
    {
      id: 'stanley',
      name: 'Stanley Hudson',
      role: 'The boundary',
      blurb: 'You did your work. Crossword is next. You will not be attending the birthday. Do not put me on a call.',
    },
  ],
  questions: [
    {
      text: 'The meeting could have been an email. You…',
      answers: [
        { label: 'Catch someone’s eye and die a little, silently', scores: { jim: 3, pam: 1 } },
        { label: 'Take notes. Someone has to enforce policy.', scores: { dwight: 3, angela: 1 } },
        { label: 'Try to make it a moment. Maybe a speech.', scores: { michael: 3, pam: 1 } },
        { label: 'Check out. This is not my circus.', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'A coworker’s birthday is happening in the conference room.',
      answers: [
        { label: 'I’ll go for the cake and the commentary', scores: { jim: 3, stanley: 1 } },
        { label: 'I organized it. The banner is laminated.', scores: { dwight: 3, michael: 1 } },
        { label: 'I’ll help decorate, then hide behind the camera', scores: { pam: 3, angela: 1 } },
        { label: 'I already declined. I have a crossword.', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Your desk says…',
      answers: [
        { label: 'Personal photos, a plant, a private joke', scores: { pam: 3, jim: 1 } },
        { label: 'Weapons-grade organization and a motto', scores: { dwight: 3, angela: 1 } },
        { label: 'World’s Best Boss energy, unironically', scores: { michael: 3, dwight: 1 } },
        { label: 'The minimum required to look employed', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'When conflict hits the open office, you…',
      answers: [
        { label: 'Watch, wait, then land one perfect line', scores: { jim: 3, stanley: 1 } },
        { label: 'Escalate to the proper chain of command', scores: { dwight: 3, angela: 1 } },
        { label: 'Make it about feelings. Group hug optional.', scores: { michael: 3, pam: 1 } },
        { label: 'State the rule. Do not negotiate.', scores: { angela: 3, stanley: 1 } },
      ],
    },
    {
      text: 'Your secret talent at work is…',
      answers: [
        { label: 'Reading the room without joining it', scores: { jim: 3, pam: 1 } },
        { label: 'Knowing every procedure, including the fake ones', scores: { dwight: 3, angela: 1 } },
        { label: 'Making people feel chosen, for better or worse', scores: { michael: 3, pam: 1 } },
        { label: 'Protecting my peace like it is a pension', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'A prank is forming. Your role:',
      answers: [
        { label: 'Architect. I already bought the supplies.', scores: { jim: 3, dwight: 1 } },
        { label: 'Target, then revenge, then a memo', scores: { dwight: 3, angela: 1 } },
        { label: 'Accomplice with a camera and a conscience', scores: { pam: 3, jim: 1 } },
        { label: 'I want to be included. Please laugh.', scores: { michael: 3, pam: 1 } },
      ],
    },
    {
      text: 'After hours, you are thinking about…',
      answers: [
        { label: 'Someone across the room, obviously', scores: { jim: 3, pam: 1 } },
        { label: 'Side hustles, farms, and preparedness', scores: { dwight: 3, stanley: 1 } },
        { label: 'Whether people like me. They do, right?', scores: { michael: 3, pam: 1 } },
        { label: 'Dinner. Not you people.', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'If this branch had a motto, yours would be:',
      answers: [
        { label: 'We do not have to make this weird.', scores: { jim: 3, stanley: 1 } },
        { label: 'Identity theft is not a joke, Jim.', scores: { dwight: 3, angela: 1 } },
        { label: 'I love you guys. Also, sales numbers.', scores: { michael: 3, dwight: 1 } },
        { label: 'Did I stutter.', scores: { stanley: 3, angela: 1 } },
      ],
    },
  ],
}

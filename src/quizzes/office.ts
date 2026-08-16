import type { Quiz } from '../types.ts'

export const officeQuiz: Quiz = {
  id: 'office',
  title: 'The Office',
  world: 'Workplace',
  tag: 'Who are you at work?',
  summary: 'A separate test for the Scranton branch. Your Parks result does not transfer to the annex.',
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
      text: 'A long meeting is covering ground you already understand. You…',
      answers: [
        { label: 'Trade a look with someone who also gets it', scores: { jim: 3, pam: 1 } },
        { label: 'Capture every detail in case it becomes policy later', scores: { dwight: 3, angela: 1 } },
        { label: 'Try to turn the room into something more human', scores: { michael: 3, pam: 1 } },
        { label: 'Mentally check out and save your energy', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'There is an optional celebration down the hall. You…',
      answers: [
        { label: 'Stop by for the food and the people-watching', scores: { jim: 3, stanley: 1 } },
        { label: 'Make sure it runs on time and looks official', scores: { dwight: 3, michael: 1 } },
        { label: 'Help set up, then stay a little out of the spotlight', scores: { pam: 3, angela: 1 } },
        { label: 'Skip it without rehearsing an excuse', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'What does your workspace usually signal?',
      answers: [
        { label: 'A few personal details and a private joke or two', scores: { pam: 3, jim: 1 } },
        { label: 'Strict order and a reminder of how things should go', scores: { dwight: 3, angela: 1 } },
        { label: 'Warmth, status, and a need to be noticed', scores: { michael: 3, dwight: 1 } },
        { label: 'Only what is required to get through the day', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'Tension breaks out in an open room. Your instinct is to…',
      answers: [
        { label: 'Watch, then land one precise comment', scores: { jim: 3, stanley: 1 } },
        { label: 'Push it into the official process', scores: { dwight: 3, angela: 1 } },
        { label: 'Name it about belonging and feelings', scores: { michael: 3, pam: 1 } },
        { label: 'Name the rule and end the debate', scores: { angela: 3, stanley: 1 } },
      ],
    },
    {
      text: 'What are you unusually good at noticing at work?',
      answers: [
        { label: 'The mood of the room without joining the noise', scores: { jim: 3, pam: 1 } },
        { label: 'The exact way a process is supposed to run', scores: { dwight: 3, angela: 1 } },
        { label: 'Who feels left out and how to pull them in', scores: { michael: 3, pam: 1 } },
        { label: 'Where your attention can stay protected', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'A joke at someone else’s expense is forming. You…',
      answers: [
        { label: 'Help design it if the timing is right', scores: { jim: 3, dwight: 1 } },
        { label: 'Get even later, then write it up like a case file', scores: { dwight: 3, angela: 1 } },
        { label: 'Go along, but keep an eye on whether it goes too far', scores: { pam: 3, jim: 1 } },
        { label: 'Want in, mostly to feel included', scores: { michael: 3, pam: 1 } },
      ],
    },
    {
      text: 'On the commute home, your mind usually lands on…',
      answers: [
        { label: 'One person who made the day feel less flat', scores: { jim: 3, pam: 1 } },
        { label: 'Side projects, readiness, and private ambitions', scores: { dwight: 3, stanley: 1 } },
        { label: 'Whether people actually like having you around', scores: { michael: 3, pam: 1 } },
        { label: 'Dinner, quiet, and a hard stop on work talk', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Which workplace value feels most like you?',
      answers: [
        { label: 'Keep things light when everyone else escalates', scores: { jim: 3, stanley: 1 } },
        { label: 'Take the role seriously, even if others do not', scores: { dwight: 3, angela: 1 } },
        { label: 'Make the team feel like it matters personally', scores: { michael: 3, dwight: 1 } },
        { label: 'Say what you mean once, then move on', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Leadership from above is visiting your floor. You…',
      answers: [
        { label: 'Look competent without looking eager', scores: { jim: 3, pam: 1 } },
        { label: 'Arrive overprepared with facts and formality', scores: { dwight: 3, angela: 1 } },
        { label: 'Treat it like a chance to make a memorable impression', scores: { michael: 3, pam: 1 } },
        { label: 'Make yourself difficult to interrupt', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'Someone violates a shared kitchen norm. You…',
      answers: [
        { label: 'Comment sideways and keep working', scores: { jim: 3, stanley: 1 } },
        { label: 'Quote the expectation out loud', scores: { angela: 3, dwight: 1 } },
        { label: 'Turn it into a talk about consideration', scores: { michael: 3, pam: 1 } },
        { label: 'Fix what you can and refuse further engagement', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Feedback season arrives. You handle it by…',
      answers: [
        { label: 'Keeping it breezy and getting out cleanly', scores: { jim: 3, stanley: 1 } },
        { label: 'Coming in with metrics and a counterplan', scores: { dwight: 3, angela: 1 } },
        { label: 'Needing reassurance that the relationship is intact', scores: { michael: 3, pam: 1 } },
        { label: 'Being careful, sincere, and a little braced', scores: { pam: 3, angela: 1 } },
      ],
    },
    {
      text: 'A group event has a theme you dislike. You…',
      answers: [
        { label: 'Play along with just enough irony', scores: { jim: 3, pam: 1 } },
        { label: 'Improve the execution until it is respectable', scores: { dwight: 3, angela: 1 } },
        { label: 'Lean in hard and try to make it meaningful', scores: { michael: 3, pam: 1 } },
        { label: 'Put in the minimum appearance and leave', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Someone new asks what this place is really like. You…',
      answers: [
        { label: 'Give a honest tour with one practical warning', scores: { jim: 3, pam: 1 } },
        { label: 'Point them to the rules and the hierarchy', scores: { dwight: 3, angela: 1 } },
        { label: 'Sell belonging before you sell the job', scores: { michael: 3, pam: 1 } },
        { label: 'Advise them to keep their head down', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'Your preferred break looks like…',
      answers: [
        { label: 'A familiar spot with someone easy to talk to', scores: { jim: 3, pam: 1 } },
        { label: 'A predictable routine with no surprises', scores: { dwight: 3, angela: 1 } },
        { label: 'A group table where conversation is the point', scores: { michael: 3, pam: 1 } },
        { label: 'Solitude, even if it means eating in the car', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Results are slipping. Your first move is…',
      answers: [
        { label: 'Do what is needed, then wait for the weather to change', scores: { jim: 3, stanley: 1 } },
        { label: 'Launch a structured push with clear targets', scores: { dwight: 3, michael: 1 } },
        { label: 'Rally people with encouragement and urgency', scores: { michael: 3, pam: 1 } },
        { label: 'Defend the standards that keep the books clean', scores: { angela: 3, stanley: 1 } },
      ],
    },
    {
      text: 'You overhear office gossip. You…',
      answers: [
        { label: 'Stay for the humor, not the politics', scores: { jim: 3, stanley: 1 } },
        { label: 'Escalate anything that sounds like a real violation', scores: { dwight: 3, angela: 1 } },
        { label: 'Feel left out, then try to join the circle', scores: { michael: 3, pam: 1 } },
        { label: 'Form a private opinion and return to work', scores: { angela: 3, stanley: 1 } },
      ],
    },
    {
      text: 'The week is almost over. In the last half hour you…',
      answers: [
        { label: 'Trade one last easy conversation, then leave', scores: { jim: 3, pam: 1 } },
        { label: 'Clear tomorrow’s work while you still can', scores: { dwight: 3, angela: 1 } },
        { label: 'Try to turn the end of the day into a hangout', scores: { michael: 3, pam: 1 } },
        { label: 'Exit immediately and protect the evening', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'How do you relate to people who manage conflict officially?',
      answers: [
        { label: 'Polite distance; you both understand the arrangement', scores: { jim: 3, pam: 1 } },
        { label: 'Frequent contact, usually with documentation', scores: { dwight: 3, angela: 1 } },
        { label: 'Emotional check-ins that blur into friendship', scores: { michael: 3, pam: 1 } },
        { label: 'As little contact as possible', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'If you had to host an awards night for the team, you would…',
      answers: [
        { label: 'Write jokes that land without punching down', scores: { jim: 3, pam: 1 } },
        { label: 'Build categories, criteria, and strict order', scores: { dwight: 3, angela: 1 } },
        { label: 'Make every moment feel personal and affirming', scores: { michael: 3, pam: 1 } },
        { label: 'Keep it brief and leave before it gets sentimental', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'What do you actually want from work?',
      answers: [
        { label: 'A tolerable day and someone who gets your humor', scores: { jim: 3, pam: 1 } },
        { label: 'Clear advancement and proof that you are excellent', scores: { dwight: 3, angela: 1 } },
        { label: 'To matter to the people around you', scores: { michael: 3, pam: 1 } },
        { label: 'Compensation and an afternoon nobody interrupts', scores: { stanley: 3, angela: 1 } },
      ],
    },
  ],
}

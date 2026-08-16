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
    {
      text: 'Corporate is visiting. You…',
      answers: [
        { label: 'Look busy in a charming, unbothered way', scores: { jim: 3, pam: 1 } },
        { label: 'Prepare a briefing binder and a salute', scores: { dwight: 3, angela: 1 } },
        { label: 'Plan a welcome speech and a gift basket', scores: { michael: 3, pam: 1 } },
        { label: 'Pretend I am on a call that never ends', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'Someone microwaves fish. Your response:',
      answers: [
        { label: 'Deadpan commentary from two desks away', scores: { jim: 3, stanley: 1 } },
        { label: 'Cite the kitchen policy. Loudly.', scores: { angela: 3, dwight: 1 } },
        { label: 'Make it a teachable moment about respect', scores: { michael: 3, pam: 1 } },
        { label: 'Open a window and refuse to speak until 5', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'Your approach to performance reviews:',
      answers: [
        { label: 'Keep it light. Survive. Leave early if possible.', scores: { jim: 3, stanley: 1 } },
        { label: 'Bring charts, goals, and a counter-offer', scores: { dwight: 3, angela: 1 } },
        { label: 'Ask if we are friends. Then cry a little.', scores: { michael: 3, pam: 1 } },
        { label: 'Be honest, careful, and slightly terrified', scores: { pam: 3, angela: 1 } },
      ],
    },
    {
      text: 'The office party theme is terrible. You…',
      answers: [
        { label: 'Commit ironically and document everything', scores: { jim: 3, pam: 1 } },
        { label: 'Improve the theme with superior logistics', scores: { dwight: 3, angela: 1 } },
        { label: 'Double down. Make it emotional.', scores: { michael: 3, pam: 1 } },
        { label: 'Attend for fifteen minutes. Tops.', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'A new hire asks how things really work here.',
      answers: [
        { label: 'Give them the honest tour and one warning', scores: { jim: 3, pam: 1 } },
        { label: 'Hand them the employee handbook. Annotated.', scores: { dwight: 3, angela: 1 } },
        { label: 'Welcome them to the family. Hard.', scores: { michael: 3, pam: 1 } },
        { label: 'Tell them to keep their head down', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'Your ideal lunch situation:',
      answers: [
        { label: 'Same deli, same booth, good company', scores: { jim: 3, pam: 1 } },
        { label: 'Packed meal, timed break, no surprises', scores: { dwight: 3, angela: 1 } },
        { label: 'Group lunch. Conversation is the point.', scores: { michael: 3, pam: 1 } },
        { label: 'Alone. Preferably in the car.', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'When sales numbers are down, you…',
      answers: [
        { label: 'Do enough, then wait for the storm to pass', scores: { jim: 3, stanley: 1 } },
        { label: 'Launch a tactical blitz with incentives', scores: { dwight: 3, michael: 1 } },
        { label: 'Motivate the room with a speech and snacks', scores: { michael: 3, pam: 1 } },
        { label: 'Protect accounting standards at all costs', scores: { angela: 3, stanley: 1 } },
      ],
    },
    {
      text: 'You overhear gossip by the copier. You…',
      answers: [
        { label: 'Listen for the joke, not the drama', scores: { jim: 3, stanley: 1 } },
        { label: 'Report relevant misconduct immediately', scores: { dwight: 3, angela: 1 } },
        { label: 'Feel left out, then insert yourself', scores: { michael: 3, pam: 1 } },
        { label: 'Judge silently and resume work', scores: { angela: 3, stanley: 1 } },
      ],
    },
    {
      text: 'Friday at 4:47 p.m. looks like…',
      answers: [
        { label: 'One more chat, then freedom', scores: { jim: 3, pam: 1 } },
        { label: 'Finishing tomorrow’s work today', scores: { dwight: 3, angela: 1 } },
        { label: 'Trying to start a hangout nobody asked for', scores: { michael: 3, pam: 1 } },
        { label: 'Coat on. Engine running. Gone.', scores: { stanley: 3, jim: 1 } },
      ],
    },
    {
      text: 'Your relationship with HR is…',
      answers: [
        { label: 'Friendly distance. We both know why.', scores: { jim: 3, pam: 1 } },
        { label: 'Frequent. Productive. Occasionally armed.', scores: { dwight: 3, angela: 1 } },
        { label: 'Emotional. They are basically therapists.', scores: { michael: 3, pam: 1 } },
        { label: 'Nonexistent, which is ideal', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'If you had to run Dundie night, you would…',
      answers: [
        { label: 'Write jokes that land without cruelty', scores: { jim: 3, pam: 1 } },
        { label: 'Create categories, criteria, and security', scores: { dwight: 3, angela: 1 } },
        { label: 'Make every award a love letter', scores: { michael: 3, pam: 1 } },
        { label: 'Keep it short and leave before karaoke', scores: { stanley: 3, angela: 1 } },
      ],
    },
    {
      text: 'What do you want from this job, really?',
      answers: [
        { label: 'A decent day and a person who gets me', scores: { jim: 3, pam: 1 } },
        { label: 'Authority, mastery, and a clear ladder', scores: { dwight: 3, angela: 1 } },
        { label: 'To matter to these people', scores: { michael: 3, pam: 1 } },
        { label: 'A paycheck and an undisturbed afternoon', scores: { stanley: 3, angela: 1 } },
      ],
    },
  ],
}

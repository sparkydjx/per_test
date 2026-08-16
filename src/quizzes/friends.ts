import type { Quiz } from '../types.ts'

export const friendsQuiz: Quiz = {
  id: 'friends',
  title: 'Friends',
  world: 'Sitcom',
  tag: 'Which friend are you?',
  summary: 'Coffee, couches, and the people who know you too well. Eight questions, one apartment-building verdict.',
  resultLabel: 'You are most like',
  theme: {
    accent: '#c4a1ff',
    accentText: '#1b1028',
    wash: 'rgba(196, 161, 255, 0.16)',
  },
  characters: [
    {
      id: 'rachel',
      name: 'Rachel Green',
      role: 'The glow-up',
      blurb: 'You reinvent yourself in public, care how things look, and still show up when a friend is falling apart. Style is a language. Loyalty is the point.',
    },
    {
      id: 'monica',
      name: 'Monica Geller',
      role: 'The organizer',
      blurb: 'You love people by making the night run. Lists, leftovers, and a competitive streak you swear is “just for fun.” Chaos is allowed — as long as you can clean it.',
    },
    {
      id: 'phoebe',
      name: 'Phoebe Buffay',
      role: 'The original',
      blurb: 'You follow a private logic that somehow works. Weird is a compliment. You tell the truth sideways, and you protect the people who get you.',
    },
    {
      id: 'joey',
      name: 'Joey Tribbiani',
      role: 'The good time',
      blurb: 'You keep the room easy. Food, loyalty, and not overthinking it. You may not have a five-year plan, but you will share your sandwich.',
    },
    {
      id: 'chandler',
      name: 'Chandler Bing',
      role: 'The deflection',
      blurb: 'Humor is your armor and your love language. You joke first, feel second, and somehow become the person everyone calls at 1 a.m.',
    },
    {
      id: 'ross',
      name: 'Ross Geller',
      role: 'The overthinker',
      blurb: 'You care loudly. You lecture a little. You want things to mean something — dinosaurs, relationships, the correct way to say a word.',
    },
  ],
  questions: [
    {
      text: 'A free Saturday lands in your lap. What do you actually do?',
      answers: [
        { label: 'Shop, reset the closet, maybe a new haircut', scores: { rachel: 3, monica: 1 } },
        { label: 'Host something. There will be a menu.', scores: { monica: 3, ross: 1 } },
        { label: 'Wander, people-watch, write a song about a cat', scores: { phoebe: 3, joey: 1 } },
        { label: 'Pizza, a movie, and whoever shows up', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'A friend is spiraling. Your first move is…',
      answers: [
        { label: 'Pep talk, tissues, and a better outfit', scores: { rachel: 3, phoebe: 1 } },
        { label: 'Fix the actual problem. Tonight.', scores: { monica: 3, ross: 1 } },
        { label: 'A joke so bad they have to laugh', scores: { chandler: 3, joey: 1 } },
        { label: 'Sit with them and over-explain why it happened', scores: { ross: 3, chandler: 1 } },
      ],
    },
    {
      text: 'What do you bring to a group?',
      answers: [
        { label: 'Taste. Someone has to raise the bar.', scores: { rachel: 3, ross: 1 } },
        { label: 'A plan, snacks, and seating assignments', scores: { monica: 3, rachel: 1 } },
        { label: 'A story no one saw coming', scores: { phoebe: 3, chandler: 1 } },
        { label: 'Energy. I’ll eat, flirt, and take a nap on the couch.', scores: { joey: 3, phoebe: 1 } },
      ],
    },
    {
      text: 'Work, for you, is mostly…',
      answers: [
        { label: 'A chance to become someone new', scores: { rachel: 3, joey: 1 } },
        { label: 'A craft you can be the best at', scores: { monica: 3, ross: 1 } },
        { label: 'A paycheck so you can live your real life', scores: { phoebe: 3, chandler: 1 } },
        { label: 'Something you survive with sarcasm', scores: { chandler: 3, joey: 1 } },
      ],
    },
    {
      text: 'Someone leaves a mug on your table. You…',
      answers: [
        { label: 'Notice the mug is ugly. Quietly judge it.', scores: { rachel: 3, ross: 1 } },
        { label: 'Wash it, dry it, and mention it once', scores: { monica: 3, chandler: 1 } },
        { label: 'Leave it. The mug has a journey.', scores: { phoebe: 3, joey: 1 } },
        { label: 'Use it. Then lose it. Then ask whose it was.', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'Your dating style in one line:',
      answers: [
        { label: 'Chemistry first. The rest is a montage.', scores: { rachel: 3, joey: 1 } },
        { label: 'I know what I want. I have examples.', scores: { monica: 3, ross: 1 } },
        { label: 'If it feels true, I’ll follow it off a cliff', scores: { phoebe: 3, rachel: 1 } },
        { label: 'I will joke until the feeling goes away', scores: { chandler: 3, ross: 1 } },
      ],
    },
    {
      text: 'You are most annoyed by…',
      answers: [
        { label: 'Being treated like you are not serious', scores: { rachel: 3, ross: 1 } },
        { label: 'People who cannot follow a simple system', scores: { monica: 3, ross: 1 } },
        { label: 'Rules that exist for no good reason', scores: { phoebe: 3, chandler: 1 } },
        { label: 'A room that got too intense, too fast', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'Pick a motto for the group chat.',
      answers: [
        { label: 'We can always start over.', scores: { rachel: 3, phoebe: 1 } },
        { label: 'If I don’t do it, it won’t get done.', scores: { monica: 3, ross: 1 } },
        { label: 'Could I be any more myself?', scores: { chandler: 3, joey: 1 } },
        { label: 'How you doin’ — but as a lifestyle', scores: { joey: 3, rachel: 1 } },
      ],
    },
  ],
}

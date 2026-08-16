import type { Quiz } from '../types.ts'

export const friendsQuiz: Quiz = {
  id: 'friends',
  title: 'Friends',
  world: 'Sitcom',
  tag: 'Which friend are you?',
  summary: 'Coffee, couches, and the people who know you too well. Ten questions drawn from a bigger deck, one apartment-building verdict.',
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
    {
      text: 'Thanksgiving at your place means…',
      answers: [
        { label: 'A cute outfit and a story about almost burning something', scores: { rachel: 3, monica: 1 } },
        { label: 'A timed menu, place cards, and competitive football', scores: { monica: 3, ross: 1 } },
        { label: 'A weird side dish that somehow becomes tradition', scores: { phoebe: 3, joey: 1 } },
        { label: 'Showing up hungry and emotionally available', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'Your apartment aesthetic is…',
      answers: [
        { label: 'Fashion-forward, slightly unfinished, full of potential', scores: { rachel: 3, monica: 1 } },
        { label: 'Spotless. Labeled. Possibly color-coded.', scores: { monica: 3, ross: 1 } },
        { label: 'Eclectic shrine to vibes and found objects', scores: { phoebe: 3, joey: 1 } },
        { label: 'Lived-in chaos with excellent seating', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'A reunion with an ex is happening. You…',
      answers: [
        { label: 'Look incredible and keep the upper hand', scores: { rachel: 3, monica: 1 } },
        { label: 'Plan every conversational escape route', scores: { monica: 3, ross: 1 } },
        { label: 'Say something unexpectedly wise and leave', scores: { phoebe: 3, chandler: 1 } },
        { label: 'Overthink the history until someone stops me', scores: { ross: 3, chandler: 1 } },
      ],
    },
    {
      text: 'Central Perk table politics: you claim…',
      answers: [
        { label: 'The seat with the best people-watching angle', scores: { rachel: 3, phoebe: 1 } },
        { label: 'Whatever seat lets me manage the group', scores: { monica: 3, ross: 1 } },
        { label: 'The couch arm, sideways, with a song brewing', scores: { phoebe: 3, joey: 1 } },
        { label: 'Wherever the snacks are closest', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'Someone mispronounces a word. You…',
      answers: [
        { label: 'Let it go unless it is about fashion', scores: { rachel: 3, joey: 1 } },
        { label: 'Correct it helpfully. Maybe twice.', scores: { monica: 3, ross: 1 } },
        { label: 'Invent a better meaning for their version', scores: { phoebe: 3, chandler: 1 } },
        { label: 'Launch into a lecture with slides in my head', scores: { ross: 3, monica: 1 } },
      ],
    },
    {
      text: 'Your conflict style with roommates:',
      answers: [
        { label: 'Dramatic exit, then a sincere apology later', scores: { rachel: 3, ross: 1 } },
        { label: 'Chore chart. Immediate. Laminated.', scores: { monica: 3, chandler: 1 } },
        { label: 'Honest weirdness until the air clears', scores: { phoebe: 3, rachel: 1 } },
        { label: 'Joke, deflect, then admit I care', scores: { chandler: 3, joey: 1 } },
      ],
    },
    {
      text: 'A surprise party is happening. Your job:',
      answers: [
        { label: 'Guest of honor energy, even if I planned it', scores: { rachel: 3, joey: 1 } },
        { label: 'Logistics general. Do not touch the cake.', scores: { monica: 3, ross: 1 } },
        { label: 'Entertainment that nobody requested', scores: { phoebe: 3, joey: 1 } },
        { label: 'Keep the mood light when it gets awkward', scores: { chandler: 3, joey: 1 } },
      ],
    },
    {
      text: 'What do you do with a secret?',
      answers: [
        { label: 'Hold it until the dramatic reveal moment', scores: { rachel: 3, ross: 1 } },
        { label: 'Organize who needs to know and when', scores: { monica: 3, chandler: 1 } },
        { label: 'Treat it like mystical knowledge', scores: { phoebe: 3, rachel: 1 } },
        { label: 'Accidentally almost tell it as a joke', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'Your ideal vacation is…',
      answers: [
        { label: 'A stylish city with shopping and reinvention', scores: { rachel: 3, monica: 1 } },
        { label: 'A planned itinerary with excellent food', scores: { monica: 3, ross: 1 } },
        { label: 'Somewhere strange that changes my outlook', scores: { phoebe: 3, rachel: 1 } },
        { label: 'Anywhere with friends, food, and low pressure', scores: { joey: 3, chandler: 1 } },
      ],
    },
    {
      text: 'When you are wrong, you…',
      answers: [
        { label: 'Need a minute, then own it stylishly', scores: { rachel: 3, monica: 1 } },
        { label: 'Fix it harder than the original mistake', scores: { monica: 3, ross: 1 } },
        { label: 'Accept it as part of my cosmic path', scores: { phoebe: 3, joey: 1 } },
        { label: 'Joke about it until the sting fades', scores: { chandler: 3, joey: 1 } },
      ],
    },
    {
      text: 'Late-night talk on the balcony energy:',
      answers: [
        { label: 'Feelings, fashion, and future plans', scores: { rachel: 3, ross: 1 } },
        { label: 'Problem-solving with snacks nearby', scores: { monica: 3, chandler: 1 } },
        { label: 'Strange truths that somehow help', scores: { phoebe: 3, rachel: 1 } },
        { label: 'Sarcasm that turns into sincerity', scores: { chandler: 3, ross: 1 } },
      ],
    },
    {
      text: 'What should your friends remember about you?',
      answers: [
        { label: 'That I kept becoming someone braver', scores: { rachel: 3, phoebe: 1 } },
        { label: 'That I made a home for everyone', scores: { monica: 3, joey: 1 } },
        { label: 'That I stayed weird on purpose', scores: { phoebe: 3, chandler: 1 } },
        { label: 'That I showed up, sandwich in hand', scores: { joey: 3, chandler: 1 } },
      ],
    },
  ],
}

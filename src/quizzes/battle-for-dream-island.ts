import type { Quiz } from '../types.ts'

export const battleForDreamIslandQuiz: Quiz = {
  id: 'battle-for-dream-island',
  title: 'Battle for Dream Island',
  world: 'Object show',
  tag: 'Which contestant are you?',
  summary: 'A separate test for Goiky. Your sitcom results do not transfer to Dream Island — and Flower will still judge you.',
  resultLabel: 'You are competing as',
  theme: {
    accent: '#58c4ff',
    accentText: '#041018',
    wash: 'rgba(88, 196, 255, 0.14)',
  },
  characters: [
    {
      id: 'firey',
      name: 'Firey',
      role: 'The rival',
      blurb: 'You burn bright, win loud, and hold grudges hotter than you admit. Competition is oxygen. Friends are optional until they are not.',
    },
    {
      id: 'leafy',
      name: 'Leafy',
      role: 'The friend',
      blurb: 'You mean well at full volume. Kindness is your brand — until someone crosses it. You will recover Dream Island. Or at least try.',
    },
    {
      id: 'bubble',
      name: 'Bubble',
      role: 'The sweet one',
      blurb: 'You float through chaos with a smile and a fragile shell. Optimism is not naivete; it is a choice. Yoylecake optional.',
    },
    {
      id: 'flower',
      name: 'Flower',
      role: 'The diva',
      blurb: 'Standards are high. Compliments are currency. You demand the spotlight, the dress, and occasionally the annihilation of anyone who ruins your vibe.',
    },
    {
      id: 'tennis-ball',
      name: 'Tennis Ball',
      role: 'The inventor',
      blurb: 'You solve the challenge with science, gadgets, and a partner who finishes your sentences. Quiet competence beats loud chaos.',
    },
    {
      id: 'coiny',
      name: 'Coiny',
      role: 'The competitor',
      blurb: 'You keep score, trade barbs, and somehow stay charming. Rivalry is a sport. You will flip for the win — and laugh about it later.',
    },
    {
      id: 'golf-ball',
      name: 'Golf Ball',
      role: 'The strategist',
      blurb: 'You draft the plan, assign the roles, and expect excellence. Leadership is not a vibe — it is a spreadsheet with feelings attached.',
    },
    {
      id: 'pin',
      name: 'Pin',
      role: 'The sharp one',
      blurb: 'You are pointed, competitive, and allergic to wasted time. Soften when it matters. Never when it does not.',
    },
    {
      id: 'gelatin',
      name: 'Gelatin',
      role: 'The chill vote',
      blurb: 'You bounce through drama like it is a snack break. Low stress, high charm, and an uncanny talent for surviving the vote.',
    },
    {
      id: 'needle',
      name: 'Needle',
      role: 'The blunt force',
      blurb: 'Call you Needy and find out. You are tough, direct, and surprisingly loyal once someone earns it.',
    },
    {
      id: 'pencil',
      name: 'Pencil',
      role: 'The alliance lead',
      blurb: 'You run the social game with notes, nicknames, and a roster. Friendship is strategy. Strategy is friendship. Do not mix that up.',
    },
    {
      id: 'blocky',
      name: 'Blocky',
      role: 'The chaos agent',
      blurb: 'If it is funny, it is justified. You live for the gag, the slapstick, and the moment the peanut gallery loses it.',
    },
  ],
  questions: [
    {
      text: 'The contest starts in thirty seconds. Where is your head?',
      answers: [
        { label: 'Already moving. Hesitation is how you lose.', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Checking that nobody on my side feels alone in this', scores: { leafy: 3, bubble: 2 } },
        { label: 'Running through the mechanics before the whistle', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Making sure I enter looking like I belong in first', scores: { flower: 3, pencil: 1 } },
      ],
    },
    {
      text: 'A rival edges you out by a hair. Afterward you…',
      answers: [
        { label: 'Replay it until the rematch feels inevitable', scores: { firey: 3, pin: 1, flower: 1 } },
        { label: 'Congratulate them, then file the slight away', scores: { leafy: 3, coiny: 1, pencil: 1 } },
        { label: 'Need a minute alone before you can talk about it', scores: { bubble: 3, leafy: 1 } },
        { label: 'Turn the loss into a bit so it cannot own you', scores: { coiny: 3, blocky: 2, gelatin: 1 } },
      ],
    },
    {
      text: 'When teams form, you drift toward…',
      answers: [
        { label: 'Whoever raises your odds the fastest', scores: { firey: 3, pin: 1, flower: 1 } },
        { label: 'People you would still sit with after the season', scores: { leafy: 3, bubble: 1, needle: 1 } },
        { label: 'The pair that can solve weird problems under pressure', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'A small circle you already know how to steer', scores: { pencil: 3, flower: 1, gelatin: 1 } },
      ],
    },
    {
      text: 'You get voted out unfairly. The walk away sounds like…',
      answers: [
        { label: 'Fine. Next time will be louder.', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'I really thought we were better than this', scores: { leafy: 3, bubble: 2 } },
        { label: 'A soft, stunned goodbye you did not practice', scores: { bubble: 3, leafy: 1, gelatin: 1 } },
        { label: 'Remember this face when you need me later', scores: { flower: 3, pencil: 1, firey: 1 } },
      ],
    },
    {
      text: 'Between contests, your default mode is…',
      answers: [
        { label: 'Staying sharp so nobody catches you sleeping', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'Checking in on people and keeping the mood light', scores: { leafy: 3, bubble: 2 } },
        { label: 'Fiddling with an idea until it actually works', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Setting up something that will make the room react', scores: { blocky: 3, coiny: 1, gelatin: 1 } },
      ],
    },
    {
      text: 'A teammate freezes mid-challenge. You…',
      answers: [
        { label: 'Snap them back into motion. Soft later.', scores: { firey: 3, needle: 2, pin: 1 } },
        { label: 'Talk them through it like the outcome is still open', scores: { leafy: 3, bubble: 2 } },
        { label: 'Give them one clear next step they can actually do', scores: { 'tennis-ball': 3, 'golf-ball': 1, leafy: 1 } },
        { label: 'Break the spiral with something ridiculous', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'Which kind of contest drains you fastest?',
      answers: [
        { label: 'Ones that punish people who act early', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Ones that reward stepping on your own side', scores: { leafy: 3, bubble: 2 } },
        { label: 'Ones where luck matters more than figuring things out', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Ones that leave you looking sloppy on purpose', scores: { flower: 3, pencil: 1, bubble: 1 } },
      ],
    },
    {
      text: 'If the prize were yours tomorrow, you would mostly…',
      answers: [
        { label: 'Enjoy being right about who deserved it', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'Open the gates wider than anyone expects', scores: { leafy: 3, bubble: 2 } },
        { label: 'Turn it into a place that runs on better ideas', scores: { 'tennis-ball': 3, 'golf-ball': 2, leafy: 1 } },
        { label: 'Curate who gets near it and how they behave', scores: { flower: 3, pencil: 2, coiny: 1 } },
      ],
    },
    {
      text: 'The host starts lecturing. You…',
      answers: [
        { label: 'Push back the second it gets personal', scores: { firey: 3, needle: 2, pin: 1 } },
        { label: 'Try to keep everyone from boiling over', scores: { leafy: 3, bubble: 2 } },
        { label: 'Listen for the useful part and ignore the rest', scores: { 'golf-ball': 3, 'tennis-ball': 2 } },
        { label: 'Wait for the moment it becomes entertaining', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'Under pressure, your instincts lean…',
      answers: [
        { label: 'Push harder. Soft goals do not survive here.', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Keep the group from fracturing', scores: { leafy: 3, bubble: 2 } },
        { label: 'Slow the room down long enough to choose well', scores: { 'golf-ball': 3, pencil: 2, 'tennis-ball': 1 } },
        { label: 'Stay loose. Tight people make loud mistakes.', scores: { gelatin: 3, blocky: 1, bubble: 1 } },
      ],
    },
    {
      text: 'Someone uses a name for you that you did not choose. You…',
      answers: [
        { label: 'Shut it down immediately. That is not optional.', scores: { needle: 3, flower: 2, pin: 1 } },
        { label: 'Fire one back and keep walking', scores: { coiny: 3, blocky: 2, gelatin: 1 } },
        { label: 'Go quiet; it landed harder than they think', scores: { leafy: 3, bubble: 2 } },
        { label: 'Remember who laughed — that information keeps', scores: { pencil: 3, 'golf-ball': 1, flower: 1 } },
      ],
    },
    {
      text: 'Nobody wants to call the next play. You…',
      answers: [
        { label: 'Take it, then tell people exactly what to do', scores: { 'golf-ball': 3, pencil: 2, 'tennis-ball': 1 } },
        { label: 'Start doing the hardest piece until others follow', scores: { firey: 3, pin: 2, needle: 1 } },
        { label: 'Nudge the person who will lead with care', scores: { leafy: 3, bubble: 2 } },
        { label: 'Support from the side and keep the mood usable', scores: { gelatin: 3, blocky: 1, coiny: 1 } },
      ],
    },
    {
      text: 'Something breaks at the worst possible time. You…',
      answers: [
        { label: 'Treat the scramble as another race to win', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Help first, scoreboard second', scores: { leafy: 3, bubble: 2, needle: 1 } },
        { label: 'Trace the failure so it cannot happen twice', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Narrate the disaster until people laugh again', scores: { blocky: 3, gelatin: 2, coiny: 1 } },
      ],
    },
    {
      text: 'The partner who brings out your best is usually…',
      answers: [
        { label: 'Someone who will not flinch when you get heated', scores: { firey: 3, coiny: 2, pin: 1 } },
        { label: 'Someone who assumes good intentions by default', scores: { leafy: 3, bubble: 2 } },
        { label: 'Someone who can keep up when you start problem-solving', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Someone who treats your worst idea as a draft', scores: { blocky: 3, gelatin: 2, pencil: 1 } },
      ],
    },
    {
      text: 'Elimination is about to be read. Inside, you are…',
      answers: [
        { label: 'Braced, competitive, and ready to argue with fate', scores: { firey: 2, coiny: 2, pin: 2 } },
        { label: 'More worried about who else might go', scores: { leafy: 3, bubble: 2 } },
        { label: 'Irritated that this part takes so long', scores: { 'golf-ball': 3, needle: 2, flower: 1 } },
        { label: 'Already halfway to a joke if your name comes up', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'You find an advantage nobody else has noticed. You…',
      answers: [
        { label: 'Spend it now, before the window closes', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Bring in the people you are protecting', scores: { leafy: 3, pencil: 2, bubble: 1 } },
        { label: 'Hold it until you understand the second-order play', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Save it for the moment with the biggest reaction', scores: { flower: 2, pencil: 2, blocky: 2 } },
      ],
    },
    {
      text: 'People keep underestimating you. Your move is…',
      answers: [
        { label: 'Make the correction visible', scores: { firey: 3, pin: 2, needle: 1 } },
        { label: 'Stay decent and let the results talk later', scores: { leafy: 3, bubble: 2 } },
        { label: 'Win in ways they will not clock until it is over', scores: { 'golf-ball': 3, 'tennis-ball': 2, pencil: 1 } },
        { label: 'Enjoy the cover. Low stakes can be a strategy.', scores: { gelatin: 3, blocky: 2 } },
      ],
    },
    {
      text: 'Stuck on the sidelines for a while, you would…',
      answers: [
        { label: 'Treat it like training for the comeback', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Stay emotionally tied to the people still in', scores: { leafy: 3, bubble: 2 } },
        { label: 'Keep busy building the thing that gets you back in play', scores: { 'tennis-ball': 3, 'golf-ball': 2, needle: 1 } },
        { label: 'Turn waiting into an audience for your bits', scores: { blocky: 3, gelatin: 2, flower: 1 } },
      ],
    },
    {
      text: 'One teammate is clearly coasting. You…',
      answers: [
        { label: 'Do their share and do not hide the resentment', scores: { firey: 2, needle: 2, pin: 2 } },
        { label: 'Keep coaxing until they show up for real', scores: { leafy: 3, bubble: 2 } },
        { label: 'Redraw the jobs so the weak spot stops mattering', scores: { 'golf-ball': 3, pencil: 2, 'tennis-ball': 1 } },
        { label: 'Cast them as the joke and keep momentum anyway', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'When this season is over, you hope people say you…',
      answers: [
        { label: 'Never coasted when first place was possible', scores: { firey: 3, coiny: 2, pin: 1 } },
        { label: 'Tried to leave the group better than you found it', scores: { leafy: 3, bubble: 2 } },
        { label: 'Changed how the game got played', scores: { 'golf-ball': 3, 'tennis-ball': 2, pencil: 1 } },
        { label: 'Made the whole mess worth watching', scores: { blocky: 3, gelatin: 2, flower: 1 } },
      ],
    },
  ],
}

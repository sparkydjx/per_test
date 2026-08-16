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
  ],
  questions: [
    {
      text: 'A new challenge drops. Your first move:',
      answers: [
        { label: 'Charge in. Winning is the plan.', scores: { firey: 3, coiny: 1 } },
        { label: 'Rally the team. We can all make it!', scores: { leafy: 3, bubble: 1 } },
        { label: 'Build something clever before anyone else notices', scores: { 'tennis-ball': 3, firey: 1 } },
        { label: 'Make sure I look good doing it', scores: { flower: 3, coiny: 1 } },
      ],
    },
    {
      text: 'Someone steals the win from you. You…',
      answers: [
        { label: 'Explode. Then plot the rematch.', scores: { firey: 3, flower: 1 } },
        { label: 'Smile, then quietly never forget', scores: { leafy: 3, coiny: 1 } },
        { label: 'Cry a little, then try again tomorrow', scores: { bubble: 3, leafy: 1 } },
        { label: 'Roast them until the peanut gallery cheers', scores: { coiny: 3, firey: 1 } },
      ],
    },
    {
      text: 'Alliance time. You prefer…',
      answers: [
        { label: 'Whoever helps me take first place', scores: { firey: 3, flower: 1 } },
        { label: 'People I actually like — loyalty first', scores: { leafy: 3, bubble: 1 } },
        { label: 'A brainy duo that can invent our way out', scores: { 'tennis-ball': 3, coiny: 1 } },
        { label: 'Whoever treats me like the star I am', scores: { flower: 3, bubble: 1 } },
      ],
    },
    {
      text: 'Your elimination speech vibe would be…',
      answers: [
        { label: 'This is fine. I will be back. Louder.', scores: { firey: 3, coiny: 1 } },
        { label: 'I just wanted us all to have fun…', scores: { leafy: 3, bubble: 1 } },
        { label: 'Yoylecake…?', scores: { bubble: 3, leafy: 1 } },
        { label: 'You will regret this. Look at my face.', scores: { flower: 3, firey: 1 } },
      ],
    },
    {
      text: 'How do you spend downtime between contests?',
      answers: [
        { label: 'Practice. Stretch. Stare down my rival.', scores: { firey: 3, coiny: 1 } },
        { label: 'Hang with friends and plan something nice', scores: { leafy: 3, bubble: 1 } },
        { label: 'Tinker in the lab until something sparks', scores: { 'tennis-ball': 3, firey: 1 } },
        { label: 'Upgrade the look. Hydrate. Ignore peasants.', scores: { flower: 3, coiny: 1 } },
      ],
    },
    {
      text: 'A teammate is panicking. You…',
      answers: [
        { label: 'Tell them to move. We are losing daylight.', scores: { firey: 3, flower: 1 } },
        { label: 'Pep talk. You have got this. I believe in you!', scores: { leafy: 3, bubble: 1 } },
        { label: 'Hand them a gadget and a calm explanation', scores: { 'tennis-ball': 3, leafy: 1 } },
        { label: 'Joke until the tension breaks', scores: { coiny: 3, bubble: 1 } },
      ],
    },
    {
      text: 'Your least favorite challenge type:',
      answers: [
        { label: 'Anything that rewards waiting around', scores: { firey: 3, coiny: 1 } },
        { label: 'Challenges that force me to be mean', scores: { leafy: 3, bubble: 1 } },
        { label: 'Pure chaos with no logic to exploit', scores: { 'tennis-ball': 3, firey: 1 } },
        { label: 'Anything that ruins my aesthetic', scores: { flower: 3, bubble: 1 } },
      ],
    },
    {
      text: 'If you win Dream Island, you will…',
      answers: [
        { label: 'Prove I was the best the whole time', scores: { firey: 3, coiny: 1 } },
        { label: 'Share it. Friends first. Always.', scores: { leafy: 3, bubble: 1 } },
        { label: 'Turn it into a research paradise', scores: { 'tennis-ball': 3, leafy: 1 } },
        { label: 'Make it fabulous. Entry by invitation only.', scores: { flower: 3, coiny: 1 } },
      ],
    },
  ],
}

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
      text: 'A new challenge drops. Your first move:',
      answers: [
        { label: 'Charge in. Winning is the plan.', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'Rally the team. We can all make it!', scores: { leafy: 3, bubble: 1 } },
        { label: 'Build something clever before anyone else notices', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Make sure I look good doing it', scores: { flower: 3, pencil: 1 } },
      ],
    },
    {
      text: 'Someone steals the win from you. You…',
      answers: [
        { label: 'Explode. Then plot the rematch.', scores: { firey: 3, flower: 1, pin: 1 } },
        { label: 'Smile, then quietly never forget', scores: { leafy: 3, coiny: 1, pencil: 1 } },
        { label: 'Cry a little, then try again tomorrow', scores: { bubble: 3, leafy: 1 } },
        { label: 'Roast them until the peanut gallery cheers', scores: { coiny: 3, blocky: 2, firey: 1 } },
      ],
    },
    {
      text: 'Alliance time. You prefer…',
      answers: [
        { label: 'Whoever helps me take first place', scores: { firey: 3, flower: 1, pin: 1 } },
        { label: 'People I actually like — loyalty first', scores: { leafy: 3, bubble: 1, needle: 1 } },
        { label: 'A brainy duo that can invent our way out', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'A tight social circle I can manage', scores: { pencil: 3, flower: 1, gelatin: 1 } },
      ],
    },
    {
      text: 'Your elimination speech vibe would be…',
      answers: [
        { label: 'This is fine. I will be back. Louder.', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'I just wanted us all to have fun…', scores: { leafy: 3, bubble: 1 } },
        { label: 'Yoylecake…?', scores: { bubble: 3, leafy: 1, gelatin: 1 } },
        { label: 'You will regret this. Look at my face.', scores: { flower: 3, pencil: 1, firey: 1 } },
      ],
    },
    {
      text: 'How do you spend downtime between contests?',
      answers: [
        { label: 'Practice. Stretch. Stare down my rival.', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'Hang with friends and plan something nice', scores: { leafy: 3, bubble: 1 } },
        { label: 'Tinker in the lab until something sparks', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Film a prank. Edit. Premiere.', scores: { blocky: 3, coiny: 1, gelatin: 1 } },
      ],
    },
    {
      text: 'A teammate is panicking. You…',
      answers: [
        { label: 'Tell them to move. We are losing daylight.', scores: { firey: 3, flower: 1, needle: 1 } },
        { label: 'Pep talk. You have got this. I believe in you!', scores: { leafy: 3, bubble: 1 } },
        { label: 'Hand them a gadget and a calm explanation', scores: { 'tennis-ball': 3, leafy: 1, 'golf-ball': 1 } },
        { label: 'Joke until the tension breaks', scores: { coiny: 3, gelatin: 2, blocky: 1 } },
      ],
    },
    {
      text: 'Your least favorite challenge type:',
      answers: [
        { label: 'Anything that rewards waiting around', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'Challenges that force me to be mean', scores: { leafy: 3, bubble: 1 } },
        { label: 'Pure chaos with no logic to exploit', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Anything that ruins my aesthetic', scores: { flower: 3, pencil: 1, bubble: 1 } },
      ],
    },
    {
      text: 'If you win Dream Island, you will…',
      answers: [
        { label: 'Prove I was the best the whole time', scores: { firey: 3, coiny: 1, pin: 1 } },
        { label: 'Share it. Friends first. Always.', scores: { leafy: 3, bubble: 1 } },
        { label: 'Turn it into a research paradise', scores: { 'tennis-ball': 3, 'golf-ball': 2, leafy: 1 } },
        { label: 'Make it fabulous. Entry by invitation only.', scores: { flower: 3, pencil: 1, coiny: 1 } },
      ],
    },
    {
      text: 'Four goes on a rant. You…',
      answers: [
        { label: 'Argue back. Loudly.', scores: { firey: 3, needle: 2, pin: 1 } },
        { label: 'Try to keep the peace before someone pops', scores: { leafy: 3, bubble: 2 } },
        { label: 'Take notes. This is useful data.', scores: { 'golf-ball': 3, 'tennis-ball': 2 } },
        { label: 'Zone out and wait for the funny part', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'Your competition style in one word vibe:',
      answers: [
        { label: 'Aggressive. First place or nothing.', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Supportive. Lift the whole team.', scores: { leafy: 3, bubble: 2 } },
        { label: 'Calculated. Every move has a reason.', scores: { 'golf-ball': 3, pencil: 2, 'tennis-ball': 1 } },
        { label: 'Unbothered. Somehow still advancing.', scores: { gelatin: 3, blocky: 1, bubble: 1 } },
      ],
    },
    {
      text: 'Someone calls you a nickname you hate. You…',
      answers: [
        { label: 'Correct them. Instantly. Every time.', scores: { needle: 3, flower: 2, pin: 1 } },
        { label: 'Laugh it off, then invent a worse one back', scores: { coiny: 3, blocky: 2, gelatin: 1 } },
        { label: 'Get quiet. That one stung.', scores: { leafy: 3, bubble: 2 } },
        { label: 'File it under “social leverage later”', scores: { pencil: 3, 'golf-ball': 1, flower: 1 } },
      ],
    },
    {
      text: 'The team needs a leader for the next contest.',
      answers: [
        { label: 'I volunteer. I already have a flowchart.', scores: { 'golf-ball': 3, pencil: 2, 'tennis-ball': 1 } },
        { label: 'I lead by doing the hard part first', scores: { firey: 3, pin: 2, needle: 1 } },
        { label: 'I nominate someone kinder than me', scores: { leafy: 3, bubble: 2 } },
        { label: 'Leadership is a lot. I will vibe-support.', scores: { gelatin: 3, blocky: 1, coiny: 1 } },
      ],
    },
    {
      text: 'A recovery center mishap happens nearby. You…',
      answers: [
        { label: 'Sprint over. This is still a race.', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Help whoever looks hurt, winner or not', scores: { leafy: 3, bubble: 2, needle: 1 } },
        { label: 'Reverse-engineer what broke', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Turn the chaos into content', scores: { blocky: 3, gelatin: 2, coiny: 1 } },
      ],
    },
    {
      text: 'Your ideal duo partner is…',
      answers: [
        { label: 'Someone who can match my heat', scores: { firey: 3, coiny: 2, pin: 1 } },
        { label: 'Someone who believes the best in people', scores: { leafy: 3, bubble: 2 } },
        { label: 'Someone who finishes my equations', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Someone who laughs at my worst ideas', scores: { blocky: 3, gelatin: 2, pencil: 1 } },
      ],
    },
    {
      text: 'Cake at Stake is about to start. Your face says…',
      answers: [
        { label: 'Nervous confidence. I belong here.', scores: { firey: 2, coiny: 2, pin: 2 } },
        { label: 'Hopeful. Please not me. Please not friends.', scores: { leafy: 3, bubble: 2 } },
        { label: 'Annoyed. This ceremony is inefficient.', scores: { 'golf-ball': 3, needle: 2, flower: 1 } },
        { label: 'Ready with a punchline if I go', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'You find a rare item mid-challenge. You…',
      answers: [
        { label: 'Use it immediately to surge ahead', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Share it with the alliance', scores: { leafy: 3, pencil: 2, bubble: 1 } },
        { label: 'Study it. There might be a better use.', scores: { 'tennis-ball': 3, 'golf-ball': 2 } },
        { label: 'Hide it for a dramatic later moment', scores: { flower: 2, pencil: 2, blocky: 2 } },
      ],
    },
    {
      text: 'How do you handle being underestimated?',
      answers: [
        { label: 'Prove them wrong in public', scores: { firey: 3, pin: 2, needle: 1 } },
        { label: 'Be nicer anyway. They will learn.', scores: { leafy: 3, bubble: 2 } },
        { label: 'Quietly outplay them with better systems', scores: { 'golf-ball': 3, 'tennis-ball': 2, pencil: 1 } },
        { label: 'Lean into the bit. Low expectations are freedom.', scores: { gelatin: 3, blocky: 2 } },
      ],
    },
    {
      text: 'Your post-elimination TLC Island activity:',
      answers: [
        { label: 'Train for the return. Rematch energy.', scores: { firey: 3, pin: 2, coiny: 1 } },
        { label: 'Write letters. Miss my friends.', scores: { leafy: 3, bubble: 2 } },
        { label: 'Build escape tech “for science”', scores: { 'tennis-ball': 3, 'golf-ball': 2, needle: 1 } },
        { label: 'Host a roast night for the eliminated', scores: { blocky: 3, gelatin: 2, flower: 1 } },
      ],
    },
    {
      text: 'Someone on your team is dead weight. You…',
      answers: [
        { label: 'Carry them and complain the whole way', scores: { firey: 2, needle: 2, pin: 2 } },
        { label: 'Encourage them until they contribute', scores: { leafy: 3, bubble: 2 } },
        { label: 'Reassign tasks around their weakness', scores: { 'golf-ball': 3, pencil: 2, 'tennis-ball': 1 } },
        { label: 'Make them the comic relief. It helps morale.', scores: { gelatin: 3, blocky: 2, coiny: 1 } },
      ],
    },
    {
      text: 'Final question energy: what do you want the season to remember?',
      answers: [
        { label: 'That I fought hardest for the win', scores: { firey: 3, coiny: 2, pin: 1 } },
        { label: 'That I tried to keep everyone together', scores: { leafy: 3, bubble: 2 } },
        { label: 'That my ideas actually changed the game', scores: { 'golf-ball': 3, 'tennis-ball': 2, pencil: 1 } },
        { label: 'That I made the whole thing funnier', scores: { blocky: 3, gelatin: 2, flower: 1 } },
      ],
    },
  ],
}

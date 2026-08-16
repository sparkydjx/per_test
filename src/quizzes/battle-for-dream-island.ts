import type { Quiz } from '../types.ts'

export const battleForDreamIslandQuiz: Quiz = {
  id: "battle-for-dream-island",
  title: "Battle for Dream Island",
  world: "Object show",
  tag: "Which contestant are you?",
  summary: "A separate test for Goiky. Your sitcom results do not transfer to Dream Island — and Flower will still judge you.",
  resultLabel: "You are competing as",
  theme: {
    accent: "#58c4ff",
    accentText: "#041018",
    wash: "rgba(88, 196, 255, 0.14)",
  },
  characters: [
    {
      id: "firey",
      name: "Firey",
      role: "The rival",
      blurb: "You burn bright, win loud, and hold grudges hotter than you admit. Competition is oxygen. Friends are optional until they are not.",
    },
    {
      id: "leafy",
      name: "Leafy",
      role: "The friend",
      blurb: "You mean well at full volume. Kindness is your brand — until someone crosses it. You will recover Dream Island. Or at least try.",
    },
    {
      id: "bubble",
      name: "Bubble",
      role: "The sweet one",
      blurb: "You float through chaos with a smile and a fragile shell. Optimism is not naivete; it is a choice. Yoylecake optional.",
    },
    {
      id: "flower",
      name: "Flower",
      role: "The diva",
      blurb: "Standards are high. Compliments are currency. You demand the spotlight, the dress, and occasionally the annihilation of anyone who ruins your vibe.",
    },
    {
      id: "tennis-ball",
      name: "Tennis Ball",
      role: "The inventor",
      blurb: "You solve the challenge with science, gadgets, and a partner who finishes your sentences. Quiet competence beats loud chaos.",
    },
    {
      id: "coiny",
      name: "Coiny",
      role: "The competitor",
      blurb: "You keep score, trade barbs, and somehow stay charming. Rivalry is a sport. You will flip for the win — and laugh about it later.",
    },
    {
      id: "golf-ball",
      name: "Golf Ball",
      role: "The strategist",
      blurb: "You draft the plan, assign the roles, and expect excellence. Leadership is not a vibe — it is a spreadsheet with feelings attached.",
    },
    {
      id: "pin",
      name: "Pin",
      role: "The sharp one",
      blurb: "You are pointed, competitive, and allergic to wasted time. Soften when it matters. Never when it does not.",
    },
    {
      id: "gelatin",
      name: "Gelatin",
      role: "The chill vote",
      blurb: "You bounce through drama like it is a snack break. Low stress, high charm, and an uncanny talent for surviving the vote.",
    },
    {
      id: "needle",
      name: "Needle",
      role: "The blunt force",
      blurb: "Call you Needy and find out. You are tough, direct, and surprisingly loyal once someone earns it.",
    },
    {
      id: "pencil",
      name: "Pencil",
      role: "The alliance lead",
      blurb: "You run the social game with notes, nicknames, and a roster. Friendship is strategy. Strategy is friendship. Do not mix that up.",
    },
    {
      id: "blocky",
      name: "Blocky",
      role: "The chaos agent",
      blurb: "If it is funny, it is justified. You live for the gag, the slapstick, and the moment the peanut gallery loses it.",
    },
  ],
  questions: [
    {
      text: "A high-stakes moment is about to start. Where does your attention go first?",
      answers: [
        {
          label: "Getting ahead before anyone else settles in",
          scores: {
            firey: 3,
            pin: 2,
            coiny: 1,
          },
        },
        {
          label: "Whether the people beside you feel steady",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "How the pieces of the situation actually fit",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "Whether you look ready to belong at the front",
          scores: {
            flower: 3,
            pencil: 1,
          },
        },
        {
          label: "Scanning for the angle nobody else is using yet",
          scores: {
            pin: 3,
            "golf-ball": 1,
            coiny: 1,
          },
        },
      ],
    },
    {
      text: "Someone narrowly beats you. Afterward you…",
      answers: [
        {
          label: "Replay it until the next chance feels inevitable",
          scores: {
            firey: 3,
            pin: 1,
            flower: 1,
          },
        },
        {
          label: "Congratulate them, then quietly keep the memory",
          scores: {
            leafy: 3,
            coiny: 1,
            pencil: 1,
          },
        },
        {
          label: "Need a private minute before you can talk",
          scores: {
            bubble: 3,
            leafy: 1,
          },
        },
        {
          label: "Turn it into humor so it cannot stick",
          scores: {
            coiny: 3,
            blocky: 2,
            gelatin: 1,
          },
        },
        {
          label: "Act unbothered in public while noting the score",
          scores: {
            pin: 3,
            coiny: 2,
            gelatin: 1,
          },
        },
      ],
    },
    {
      text: "When groups form quickly, you drift toward…",
      answers: [
        {
          label: "Whoever improves your odds the fastest",
          scores: {
            firey: 3,
            pin: 1,
            flower: 1,
          },
        },
        {
          label: "People you would still choose after the pressure ends",
          scores: {
            leafy: 3,
            bubble: 1,
            needle: 1,
          },
        },
        {
          label: "The pair that can solve odd problems together",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "A small circle you already know how to steer",
          scores: {
            pencil: 3,
            flower: 1,
            gelatin: 1,
          },
        },
        {
          label: "Whoever is blunt enough to say the hard part out loud",
          scores: {
            needle: 3,
            pin: 2,
            firey: 1,
          },
        },
      ],
    },
    {
      text: "You are shut out of something you wanted. Walking away, you feel…",
      answers: [
        {
          label: "Ready to return louder next time",
          scores: {
            firey: 3,
            coiny: 1,
            pin: 1,
          },
        },
        {
          label: "Disappointed that the group was not better than this",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Softly stunned in a way you did not rehearse",
          scores: {
            bubble: 3,
            leafy: 1,
            gelatin: 1,
          },
        },
        {
          label: "Certain they will notice your absence later",
          scores: {
            flower: 3,
            pencil: 1,
            firey: 1,
          },
        },
        {
          label: "Annoyed, then already calculating the comeback path",
          scores: {
            pin: 3,
            needle: 2,
            "golf-ball": 1,
          },
        },
      ],
    },
    {
      text: "Between big moments, your default mode is…",
      answers: [
        {
          label: "Staying sharp so nobody catches you flat-footed",
          scores: {
            firey: 3,
            coiny: 1,
            pin: 1,
          },
        },
        {
          label: "Checking on people and keeping the tone gentle",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Working an idea until it actually functions",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "Setting up something that will get a reaction",
          scores: {
            blocky: 3,
            coiny: 1,
            gelatin: 1,
          },
        },
        {
          label: "Practicing a sharper edge for next time",
          scores: {
            pin: 3,
            needle: 2,
            coiny: 1,
          },
        },
      ],
    },
    {
      text: "A teammate freezes when it counts. You…",
      answers: [
        {
          label: "Snap them into motion and soften later",
          scores: {
            firey: 3,
            needle: 2,
            pin: 1,
          },
        },
        {
          label: "Talk them through it as if a good ending is still open",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Give one clear next step they can complete",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 1,
            leafy: 1,
          },
        },
        {
          label: "Break the spiral with something ridiculous",
          scores: {
            gelatin: 3,
            blocky: 2,
            coiny: 1,
          },
        },
        {
          label: "Tell them the truth without wrapping it gently",
          scores: {
            needle: 3,
            pin: 2,
            firey: 1,
          },
        },
      ],
    },
    {
      text: "Which kind of task drains you fastest?",
      answers: [
        {
          label: "Ones that punish people who act early",
          scores: {
            firey: 3,
            pin: 2,
            coiny: 1,
          },
        },
        {
          label: "Ones that reward harming your own side",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Ones where luck beats understanding",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "Ones that force you to look careless",
          scores: {
            flower: 3,
            pencil: 1,
            bubble: 1,
          },
        },
        {
          label: "Ones that waste time on soft half-measures",
          scores: {
            pin: 3,
            needle: 2,
            "golf-ball": 1,
          },
        },
      ],
    },
    {
      text: "If a major prize became yours tomorrow, you would mostly…",
      answers: [
        {
          label: "Enjoy being proven right about who deserved it",
          scores: {
            firey: 3,
            coiny: 1,
            pin: 1,
          },
        },
        {
          label: "Open access wider than people expect",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Rebuild it around better systems and ideas",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
            leafy: 1,
          },
        },
        {
          label: "Control who gets near it and how they behave",
          scores: {
            flower: 3,
            pencil: 2,
            coiny: 1,
          },
        },
        {
          label: "Keep it efficient and freeze out the drama",
          scores: {
            pin: 3,
            "golf-ball": 2,
            needle: 1,
          },
        },
      ],
    },
    {
      text: "Someone in charge starts talking down to the room. You…",
      answers: [
        {
          label: "Push back the moment it gets personal",
          scores: {
            firey: 3,
            needle: 2,
            pin: 1,
          },
        },
        {
          label: "Try to keep people from boiling over",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Take the useful part and discard the rest",
          scores: {
            "golf-ball": 3,
            "tennis-ball": 2,
          },
        },
        {
          label: "Wait for the moment it becomes entertaining",
          scores: {
            gelatin: 3,
            blocky: 2,
            coiny: 1,
          },
        },
        {
          label: "Correct them once, sharply, then move on",
          scores: {
            needle: 3,
            pin: 2,
            flower: 1,
          },
        },
      ],
    },
    {
      text: "Under pressure, your instincts lean toward…",
      answers: [
        {
          label: "Pushing harder before the window closes",
          scores: {
            firey: 3,
            pin: 2,
            coiny: 1,
          },
        },
        {
          label: "Keeping the group from fracturing",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Slowing the room enough to choose well",
          scores: {
            "golf-ball": 3,
            pencil: 2,
            "tennis-ball": 1,
          },
        },
        {
          label: "Staying loose so mistakes stay recoverable",
          scores: {
            gelatin: 3,
            blocky: 1,
            bubble: 1,
          },
        },
        {
          label: "Cut the indecision and force a direction",
          scores: {
            pin: 3,
            needle: 2,
            firey: 1,
          },
        },
      ],
    },
    {
      text: "Someone uses a nickname you never agreed to. You…",
      answers: [
        {
          label: "Shut it down immediately",
          scores: {
            needle: 3,
            flower: 2,
            pin: 1,
          },
        },
        {
          label: "Fire one back and keep moving",
          scores: {
            coiny: 3,
            blocky: 2,
            gelatin: 1,
          },
        },
        {
          label: "Go quiet; it landed harder than they think",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Note who laughed for later",
          scores: {
            pencil: 3,
            "golf-ball": 1,
            flower: 1,
          },
        },
        {
          label: "Refuse the nickname and the familiarity behind it",
          scores: {
            needle: 3,
            flower: 1,
            pin: 1,
          },
        },
      ],
    },
    {
      text: "Nobody wants to decide the next move. You…",
      answers: [
        {
          label: "Take it and tell people exactly what to do",
          scores: {
            "golf-ball": 3,
            pencil: 2,
            "tennis-ball": 1,
          },
        },
        {
          label: "Start the hardest piece until others follow",
          scores: {
            firey: 3,
            pin: 2,
            needle: 1,
          },
        },
        {
          label: "Nudge the person who will lead with care",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Support from the side and keep the mood usable",
          scores: {
            gelatin: 3,
            blocky: 1,
            coiny: 1,
          },
        },
        {
          label: "Volunteer only if the plan is actually competent",
          scores: {
            pin: 3,
            "golf-ball": 2,
            needle: 1,
          },
        },
      ],
    },
    {
      text: "Something breaks at the worst time. You…",
      answers: [
        {
          label: "Treat the scramble like another race",
          scores: {
            firey: 3,
            pin: 2,
            coiny: 1,
          },
        },
        {
          label: "Help first and count points later",
          scores: {
            leafy: 3,
            bubble: 2,
            needle: 1,
          },
        },
        {
          label: "Trace the failure so it cannot repeat",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "Narrate the disaster until people can laugh",
          scores: {
            blocky: 3,
            gelatin: 2,
            coiny: 1,
          },
        },
        {
          label: "Fix what you can without making a speech about it",
          scores: {
            needle: 3,
            pin: 2,
            "tennis-ball": 1,
          },
        },
      ],
    },
    {
      text: "The partner who brings out your best usually…",
      answers: [
        {
          label: "Does not flinch when you get intense",
          scores: {
            firey: 3,
            coiny: 2,
            pin: 1,
          },
        },
        {
          label: "Assumes good intentions by default",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Can keep up once you start solving",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "Treats your worst idea as a draft",
          scores: {
            blocky: 3,
            gelatin: 2,
            pencil: 1,
          },
        },
        {
          label: "Can handle blunt feedback without collapsing",
          scores: {
            needle: 3,
            pin: 2,
            leafy: 1,
          },
        },
      ],
    },
    {
      text: "Waiting for a decision that affects you, inside you are…",
      answers: [
        {
          label: "Braced and ready to argue with the outcome",
          scores: {
            firey: 2,
            coiny: 2,
            pin: 2,
          },
        },
        {
          label: "More worried about who else might get hurt",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Irritated that the process is inefficient",
          scores: {
            "golf-ball": 3,
            needle: 2,
            flower: 1,
          },
        },
        {
          label: "Already halfway to a joke if it goes badly",
          scores: {
            gelatin: 3,
            blocky: 2,
            coiny: 1,
          },
        },
        {
          label: "Focused on whether the process is wasting everyone",
          scores: {
            pin: 3,
            "golf-ball": 2,
            needle: 1,
          },
        },
      ],
    },
    {
      text: "You notice an advantage nobody else has spotted. You…",
      answers: [
        {
          label: "Use it now, before the window closes",
          scores: {
            firey: 3,
            pin: 2,
            coiny: 1,
          },
        },
        {
          label: "Bring in the people you are looking out for",
          scores: {
            leafy: 3,
            pencil: 2,
            bubble: 1,
          },
        },
        {
          label: "Hold it until the second-order effects are clear",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
          },
        },
        {
          label: "Save it for the moment with the biggest reaction",
          scores: {
            flower: 2,
            pencil: 2,
            blocky: 2,
          },
        },
        {
          label: "Spend it in a way that proves a point",
          scores: {
            pin: 3,
            firey: 2,
            flower: 1,
          },
        },
      ],
    },
    {
      text: "People keep underestimating you. You…",
      answers: [
        {
          label: "Make the correction visible",
          scores: {
            firey: 3,
            pin: 2,
            needle: 1,
          },
        },
        {
          label: "Stay decent and let outcomes speak later",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Win in ways they will not notice until afterward",
          scores: {
            "golf-ball": 3,
            "tennis-ball": 2,
            pencil: 1,
          },
        },
        {
          label: "Enjoy the cover; low expectations can help",
          scores: {
            gelatin: 3,
            blocky: 2,
          },
        },
        {
          label: "Stay sharp and let them discover the mistake",
          scores: {
            pin: 3,
            needle: 2,
            coiny: 1,
          },
        },
      ],
    },
    {
      text: "Stuck on the sidelines for a while, you would…",
      answers: [
        {
          label: "Treat it as training for the return",
          scores: {
            firey: 3,
            pin: 2,
            coiny: 1,
          },
        },
        {
          label: "Stay emotionally tied to the people still in",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Build the thing that gets you relevant again",
          scores: {
            "tennis-ball": 3,
            "golf-ball": 2,
            needle: 1,
          },
        },
        {
          label: "Turn waiting into an audience for your bits",
          scores: {
            blocky: 3,
            gelatin: 2,
            flower: 1,
          },
        },
        {
          label: "Stay useful and refuse to get sentimental about it",
          scores: {
            needle: 3,
            pin: 2,
            "golf-ball": 1,
          },
        },
      ],
    },
    {
      text: "One teammate is clearly coasting. You…",
      answers: [
        {
          label: "Cover their share and do not hide the resentment",
          scores: {
            firey: 2,
            needle: 2,
            pin: 2,
          },
        },
        {
          label: "Keep coaxing until they show up for real",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Redraw the jobs so the weak spot stops mattering",
          scores: {
            "golf-ball": 3,
            pencil: 2,
            "tennis-ball": 1,
          },
        },
        {
          label: "Cast them as comic relief and keep momentum",
          scores: {
            gelatin: 3,
            blocky: 2,
            coiny: 1,
          },
        },
        {
          label: "Call it out directly and raise the standard",
          scores: {
            needle: 3,
            pin: 2,
            "golf-ball": 1,
          },
        },
      ],
    },
    {
      text: "When a long chapter ends, you hope people say you…",
      answers: [
        {
          label: "Never coasted when first place was possible",
          scores: {
            firey: 3,
            coiny: 2,
            pin: 1,
          },
        },
        {
          label: "Tried to leave the group better than you found it",
          scores: {
            leafy: 3,
            bubble: 2,
          },
        },
        {
          label: "Changed how the game got played",
          scores: {
            "golf-ball": 3,
            "tennis-ball": 2,
            pencil: 1,
          },
        },
        {
          label: "Made the whole mess worth watching",
          scores: {
            blocky: 3,
            gelatin: 2,
            flower: 1,
          },
        },
        {
          label: "Stayed direct when everyone else softened the truth",
          scores: {
            needle: 3,
            pin: 2,
            firey: 1,
          },
        },
      ],
    },
  ],
}

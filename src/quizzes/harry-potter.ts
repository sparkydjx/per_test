import type { Quiz } from '../types.ts'

export const harryPotterQuiz: Quiz = {
  id: "harry-potter",
  title: "Hogwarts",
  world: "Wizarding",
  tag: "Which house claims you?",
  summary: "Not a trivia exam. A sorting of how you move through the world — courage, cunning, curiosity, or care.",
  resultLabel: "The hat says",
  theme: {
    accent: "#e2b04a",
    accentText: "#1a1204",
    wash: "rgba(226, 176, 74, 0.14)",
  },
  characters: [
    {
      id: "gryffindor",
      name: "Gryffindor",
      role: "Courage",
      blurb: "You move toward the hard thing before the speech is ready. Fear shows up, gives its report, and then gets outvoted. Loyalty with you is loud, practical, and occasionally reckless in the best way. You would rather be brave than tidy, honest than polished, present than perfectly prepared. People trust you in a crisis because you do not need the mood to be convenient before you act. Your shadow side is charging in without a map. Your gift is making courage feel contagious. When the room freezes, you are already reaching for the door handle — and somehow that makes everyone else remember they have hands too.",
    },
    {
      id: "slytherin",
      name: "Slytherin",
      role: "Ambition",
      blurb: "You play the long game with taste, patience, and a private list of what you will never settle for. People may call it cold. You call it standards with timing. Ambition is not a monologue for you — it is a sequence of quiet advantages stacked carefully. You notice power dynamics early, negotiate hard, and keep your exits lit. Soft hearts can still live here; they just do not get to drive without a plan. Your gift is strategy under pressure. Your risk is winning the board while forgetting why you wanted the win. Done right, you become the person who changes outcomes without needing applause mid-move.",
    },
    {
      id: "ravenclaw",
      name: "Ravenclaw",
      role: "Wit",
      blurb: "You want the elegant answer, not the loudest one. Ideas are a playground, questions are snacks, and half-understood systems personally offend you. You collect facts the way other people collect grudges, then rearrange them until the pattern clicks. In group work, you are the one who actually did the reading and noticed the missing variable. Your pride lives in comprehension. Your joy lives in curiosity that refuses to stay small. Watch for overthinking when action is due. At your best, you make intelligence feel like hospitality: come in, look closer, leave smarter. Wit is not decoration on you. It is how you love the world.",
    },
    {
      id: "hufflepuff",
      name: "Hufflepuff",
      role: "Loyalty",
      blurb: "You keep the table set. Fairness matters more than the spotlight, and people feel safer when you are around because you mean it. When things go wrong, you are already helping someone down the stairs, packing the snacks, or making sure the quiet person is not left behind. Loyalty is your default setting; spite is available but rarely your first draft. You build trust in small, repeated ways that flashier people overlook. Your challenge is remembering that kindness is not the same as self-erasure. Your gift is community that lasts. In a castle full of legends, you are the reason ordinary days still feel human.",
    },
  ],
  questions: [
    {
      text: "The Sorting Hat asks: there is something you want behind a locked door. What do you do?",
      answers: [
        {
          label: "Push through and sort the details afterward",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Find the person who controls access and negotiate",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Study the obstacle until the solution feels elegant",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Check who else needs through before you act",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Wait for a cleaner opening that still gets you through",
          scores: {
            slytherin: 2,
            ravenclaw: 2,
            hufflepuff: 1,
          },
        },
      ],
    },
    {
      text: "The Sorting Hat asks: when there is not enough for everyone, what do you guard first?",
      answers: [
        {
          label: "The people who would do the same for you",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Your long-term position",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "An accurate picture of what is true",
          scores: {
            ravenclaw: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Anyone likely to be overlooked",
          scores: {
            hufflepuff: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "The reputation you are carefully building",
          scores: {
            slytherin: 3,
            gryffindor: 1,
          },
        },
      ],
    },
    {
      text: "In a group task, which part do you take without being asked?",
      answers: [
        {
          label: "Takes the exposed, high-pressure role",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Edits the plan until the outcome improves",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Does the deep work others skip",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Makes sure nobody is stranded with the load",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Keeps standards high without needing the spotlight",
          scores: {
            ravenclaw: 2,
            slytherin: 2,
            hufflepuff: 1,
          },
        },
      ],
    },
    {
      text: "I sense many kinds of victory in you. Which one feels best when it arrives?",
      answers: [
        {
          label: "The one that seemed impossible the day before",
          scores: {
            gryffindor: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "The one that arrived before anyone predicted it",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "The one that proves you understood the problem",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "The one everyone involved gets to enjoy",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "The quiet win that improves everyone’s odds later",
          scores: {
            hufflepuff: 2,
            ravenclaw: 2,
            slytherin: 1,
          },
        },
      ],
    },
    {
      text: "A rumor about you is spreading through the castle. How do you answer it?",
      answers: [
        {
          label: "Walk in and force the conversation into the open",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Let it move; it may become useful later",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Correct it with evidence",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Check on the person who started it before anything else",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Decide later whether a response is worth the cost",
          scores: {
            slytherin: 2,
            ravenclaw: 2,
            hufflepuff: 1,
          },
        },
      ],
    },
    {
      text: "Where do you go when you need to think clearly?",
      answers: [
        {
          label: "Somewhere elevated, with weather and distance",
          scores: {
            gryffindor: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "A quiet corner where you can see the exits",
          scores: {
            slytherin: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Among books, notes, and unfinished questions",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Somewhere domestic, late, while something is cooking",
          scores: {
            hufflepuff: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Anywhere you can rearrange the problem privately",
          scores: {
            ravenclaw: 2,
            slytherin: 2,
          },
        },
      ],
    },
    {
      text: "Which quality would feel worst to pretend you have?",
      answers: [
        {
          label: "Willingness to act when it is uncomfortable",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Drive toward a higher place for yourself",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Genuine interest in how things work",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Steady care for other people",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "A private code you will not abandon for approval",
          scores: {
            slytherin: 2,
            hufflepuff: 2,
            ravenclaw: 1,
          },
        },
      ],
    },
    {
      text: "Dumbledore leans in: the castle needs you at midnight. Why do you go?",
      answers: [
        {
          label: "If not you, then who?",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Moments like this shape reputations and futures",
          scores: {
            slytherin: 3,
            gryffindor: 1,
          },
        },
        {
          label: "You need to understand what is actually happening",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "You will not leave people without support",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "You can learn something rare from being there",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
      ],
    },
    {
      text: "A classmate is being left out. What do you do?",
      answers: [
        {
          label: "Pull them into the action while it is moving",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Include them if they strengthen the outcome",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Ask what perspective the group is missing",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Sit with them first and plan second",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Offer help in a way that also advances the work",
          scores: {
            slytherin: 2,
            hufflepuff: 2,
            ravenclaw: 1,
          },
        },
      ],
    },
    {
      text: "Exams are coming. How do you prepare?",
      answers: [
        {
          label: "Relying on nerve and shared last-minute notes",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Focusing only on what actually moves the score",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Going deep, sometimes deeper than required",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Studying with others and making room for patience",
          scores: {
            hufflepuff: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Build a flexible plan that can absorb surprises",
          scores: {
            ravenclaw: 2,
            slytherin: 2,
            gryffindor: 1,
          },
        },
      ],
    },
    {
      text: "You find a restricted book. What then?",
      answers: [
        {
          label: "Open it; some knowledge is worth the risk",
          scores: {
            gryffindor: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Take what is useful and leave little evidence",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Cross-check it against safer sources first",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Ask who could be harmed if it spreads",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Share it only with people who can handle it well",
          scores: {
            hufflepuff: 2,
            slytherin: 2,
            ravenclaw: 1,
          },
        },
      ],
    },
    {
      text: "On a Quidditch pitch — or any hard contest — what is your natural job?",
      answers: [
        {
          label: "Taking the decisive risk when it counts",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Directing play toward the highest-percentage win",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Reading the whole field before committing",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Holding morale together when the score slips",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Cover weaknesses so the team stays intact",
          scores: {
            hufflepuff: 2,
            ravenclaw: 2,
            gryffindor: 1,
          },
        },
      ],
    },
    {
      text: "A professor is being unfair. How do you respond?",
      answers: [
        {
          label: "Challenge them while people are watching",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Work the system until the outcome shifts",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Build a careful case with evidence",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Support the person who was hurt",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Document patterns before choosing a response",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
      ],
    },
    {
      text: "Dumbledore would ask: when everything goes wrong at once, what do you do?",
      answers: [
        {
          label: "Get back up and try again, even if it costs me",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Wait, watch, then make one precise move",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Step back until I understand the whole pattern",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Protect the people around me first",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Adjust the plan without losing who I am",
          scores: {
            ravenclaw: 2,
            hufflepuff: 2,
            slytherin: 1,
          },
        },
      ],
    },
    {
      text: "What do your friends rely on you for?",
      answers: [
        {
          label: "First through the difficult door",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "The one with the sharper plan",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "The one asking better questions",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "The one who remembers the small personal details",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "The one who stays useful when plans change",
          scores: {
            hufflepuff: 2,
            ravenclaw: 2,
            slytherin: 1,
          },
        },
      ],
    },
    {
      text: "A shortcut appears, but it feels slightly wrong. Do you take it?",
      answers: [
        {
          label: "Take it if it helps someone faster",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Take it if it cleanly advances the goal",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Map why it exists before using it",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Skip it if anyone gets left behind",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Use it carefully and keep your hands clean",
          scores: {
            slytherin: 2,
            ravenclaw: 2,
            hufflepuff: 1,
          },
        },
      ],
    },
    {
      text: "Dumbledore smiles and asks: when Hogwarts remembers you, what should they say?",
      answers: [
        {
          label: "As someone who acted when it counted",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "As someone hard to outmaneuver",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "As someone who understood what mattered",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "As someone who stayed kind when others forgot",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "As someone who made hard choices without theater",
          scores: {
            slytherin: 2,
            ravenclaw: 2,
            gryffindor: 1,
          },
        },
      ],
    },
    {
      text: "Power is offered to you — with strings attached. What do you do?",
      answers: [
        {
          label: "Accept it if it lets you protect people",
          scores: {
            gryffindor: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Negotiate until the conditions favor you",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Inspect every clause before touching it",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
        {
          label: "Refuse if it costs someone else’s dignity",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Accept only the pieces that match your principles",
          scores: {
            hufflepuff: 2,
            gryffindor: 2,
            ravenclaw: 1,
          },
        },
      ],
    },
    {
      text: "It is late in the common room. What are you doing?",
      answers: [
        {
          label: "Planning tomorrow’s bold move",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "Quietly arranging the next advantage",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "Lost in something you chose to study for yourself",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "Looking after whoever seems worn down",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "Reviewing what worked and what to change",
          scores: {
            ravenclaw: 2,
            slytherin: 2,
            hufflepuff: 1,
          },
        },
      ],
    },
    {
      text: "The Hat whispers: fear has arrived. How do you treat it?",
      answers: [
        {
          label: "As a reason to move anyway",
          scores: {
            gryffindor: 3,
            slytherin: 1,
          },
        },
        {
          label: "As one more factor in the plan",
          scores: {
            slytherin: 3,
            ravenclaw: 1,
          },
        },
        {
          label: "As a puzzle I can name and solve",
          scores: {
            ravenclaw: 3,
            hufflepuff: 1,
          },
        },
        {
          label: "As something we face together, not alone",
          scores: {
            hufflepuff: 3,
            gryffindor: 1,
          },
        },
        {
          label: "As information that should change what I do next",
          scores: {
            ravenclaw: 3,
            slytherin: 1,
          },
        },
      ],
    },
  ],
}

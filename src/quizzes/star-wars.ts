import type { Quiz } from '../types.ts'

export const starWarsQuiz: Quiz = {
  id: "star-wars",
  title: "Star Wars",
  world: "Saga",
  tag: "Which rebel are you?",
  summary: "A galaxy far, far away — scored on instinct, duty, charm, and patience. Separate from every other universe in this app.",
  resultLabel: "Your place in the fight is",
  theme: {
    accent: "#ffe566",
    accentText: "#161200",
    wash: "rgba(255, 229, 102, 0.12)",
  },
  characters: [
    {
      id: "luke",
      name: "Luke Skywalker",
      role: "The believer",
      blurb: "You want the good ending and you are willing to train for it. Hope is not naïveté on you — it is discipline with a horizon. You attach hard, believe people can turn around, and keep reaching for the version of the story where light still has a move. That faith can bruise you. It can also change rooms that had forgotten how to want better. You learn by doing, trust instinct, then refine it the hard way. When others call your optimism soft, they miss the stamina underneath. You are not waiting for destiny to feel convenient. You are practicing until you can meet it.",
    },
    {
      id: "leia",
      name: "Leia Organa",
      role: "The commander",
      blurb: "You hold the line when everyone else wants a speech. Duty first, feelings in the briefing after, and somehow you still carry both. Leadership for you is logistics plus moral nerve: protect the people, preserve the mission, keep the alliance standing through ugly weather. You can out-organize a rival in public and still remember every name on the private list. Softness exists — it is just booked behind responsibility. Your risk is becoming the war in your own voice. Your gift is making courage operational. When the plan collapses, you do not audition for despair. You reassign roles and continue.",
    },
    {
      id: "han",
      name: "Han Solo",
      role: "The scoundrel",
      blurb: "You pretend it is about the money. It is not. You improvise, charm, disappear when things get too earnest, then come back exactly when it counts. Freedom matters to you — from institutions, from sentimentality, from anyone who thinks they own your next move. Under the swagger is a soft center you guard with jokes and exit routes. People trust your instincts in a crunch because you stay playable when others freeze. Your challenge is letting yourself need someone without bolting. Your gift is loyalty that arrives like a surprise plot twist: late, loud, and decisive. Never tell you the odds. You were going to ignore them anyway.",
    },
    {
      id: "obiwan",
      name: "Obi-Wan Kenobi",
      role: "The mentor",
      blurb: "You have seen this movie before. That is why you wait longer than is comfortable, speak softly, and still arrive with cover fire when the next generation needs you. Patience is your tactic. Perspective is your shield. You carry old grief without making it everyone else’s costume. Mentorship suits you because you understand timing: when to advise, when to step back, when to intervene. Your risk is hiding inside wisdom so you never have to hope too loudly again. Your gift is steady courage that makes room for other people to grow. The Force, fate, or plain responsibility — whatever you call it, you serve it quietly and well.",
    },
  ],
  questions: [
    {
      text: "A carefully made plan collapses mid-run. You…",
      answers: [
        {
          label: "Trust your read of the moment and keep going",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "Reassign roles and refuse to call it over",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Improvise the exit and invent the rest in motion",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Slow everyone down before panic costs people",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Protect the people nearby while the plan is rebuilt",
          scores: {
            leia: 2,
            obiwan: 2,
            luke: 1,
          },
        },
      ],
    },
    {
      text: "What most often pulls you into a conflict you did not start?",
      answers: [
        {
          label: "Someone with less power than the problem",
          scores: {
            luke: 3,
            leia: 1,
          },
        },
        {
          label: "A principle you will not watch disappear",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "A friend who would do the same for you",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "An unfinished debt from an earlier chapter",
          scores: {
            obiwan: 3,
            han: 1,
          },
        },
        {
          label: "A chance to prove yourself when it finally matters",
          scores: {
            luke: 2,
            han: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "On a high-stakes trip, you prefer to be…",
      answers: [
        {
          label: "At the controls, watching the horizon",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "On communications, holding the wider picture",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Calling the vehicle your own, quirks included",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Present as counsel, intervening only when needed",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Wherever you can keep options open",
          scores: {
            han: 2,
            obiwan: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "Facing a long-term rival, you usually…",
      answers: [
        {
          label: "Leave room for them to change course",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "Out-organize them where people can see it",
          scores: {
            leia: 3,
            han: 1,
          },
        },
        {
          label: "Stay charming, flexible, and armed with options",
          scores: {
            han: 3,
            leia: 1,
          },
        },
        {
          label: "Teach around them and let time do part of the work",
          scores: {
            obiwan: 3,
            luke: 1,
          },
        },
        {
          label: "Stay unpredictable enough that they cannot settle",
          scores: {
            han: 2,
            leia: 2,
            luke: 1,
          },
        },
      ],
    },
    {
      text: "Which response sounds most like you under pressure?",
      answers: [
        {
          label: "This might still work if we trust it",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "Someone has to stabilize this. It can be me.",
          scores: {
            leia: 3,
            han: 1,
          },
        },
        {
          label: "Skip the odds lecture and move",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Stay with me. We will get through the next step.",
          scores: {
            obiwan: 3,
            luke: 1,
          },
        },
        {
          label: "We adapt. That is the whole job.",
          scores: {
            leia: 2,
            han: 2,
            obiwan: 1,
          },
        },
      ],
    },
    {
      text: "Downtime in a remote place looks like…",
      answers: [
        {
          label: "Practice until the light fades",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "Briefings, maps, and a stolen hour of sleep",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Cards, repairs, and a drink you did not budget for",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Watching younger people from a distance",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Quiet maintenance and one honest conversation",
          scores: {
            obiwan: 2,
            leia: 2,
            luke: 1,
          },
        },
      ],
    },
    {
      text: "Your hardest private habit is…",
      answers: [
        {
          label: "Attaching quickly, then trying to save everyone",
          scores: {
            luke: 3,
            leia: 1,
          },
        },
        {
          label: "Carrying the whole conflict in your voice",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Leaving before anyone can need you",
          scores: {
            han: 3,
            obiwan: 1,
          },
        },
        {
          label: "Hiding behind calm advice so you do not have to hope",
          scores: {
            obiwan: 3,
            luke: 1,
          },
        },
        {
          label: "Needing to look unbothered when you are not",
          scores: {
            han: 2,
            obiwan: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "At the end of a long fight, you most want to have been…",
      answers: [
        {
          label: "The one who kept believing anyway",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "The one who kept the alliance functioning",
          scores: {
            leia: 3,
            luke: 1,
          },
        },
        {
          label: "The one who came back when it counted",
          scores: {
            han: 3,
            leia: 1,
          },
        },
        {
          label: "The one who made the next generation possible",
          scores: {
            obiwan: 3,
            han: 1,
          },
        },
        {
          label: "The one who kept choices open for everyone else",
          scores: {
            obiwan: 2,
            leia: 2,
            han: 1,
          },
        },
      ],
    },
    {
      text: "An opposing power offers terms. You…",
      answers: [
        {
          label: "Refuse; some lines do not move",
          scores: {
            luke: 3,
            leia: 1,
          },
        },
        {
          label: "Use the meeting to gather information",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Smile, stall, and leave with an advantage",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Listen carefully until the trap shows itself",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Accept the meeting only to buy your side time",
          scores: {
            leia: 2,
            han: 2,
            obiwan: 1,
          },
        },
      ],
    },
    {
      text: "A less experienced teammate freezes. You…",
      answers: [
        {
          label: "Get them moving with you",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "Give clear orders in one breath",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Cover them while keeping the tone light",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Steady their breathing before anything else",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Put yourself between them and the danger",
          scores: {
            luke: 2,
            leia: 2,
            han: 1,
          },
        },
      ],
    },
    {
      text: "How do you relate to a path that feels “meant” for you?",
      answers: [
        {
          label: "Lean into it, even when it scares you",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "Rewrite it through structure and nerve",
          scores: {
            leia: 3,
            han: 1,
          },
        },
        {
          label: "Dodge it until it becomes personal",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Serve it quietly and let others take credit",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Treat it as a responsibility you did not request",
          scores: {
            leia: 2,
            obiwan: 2,
            luke: 1,
          },
        },
      ],
    },
    {
      text: "Where do you fight best?",
      answers: [
        {
          label: "Open space where speed and instinct matter",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "A command post with the full picture",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Tight spaces where improvisation wins",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Quiet timing and one decisive intervention",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Anywhere you can create an opening for others",
          scores: {
            luke: 2,
            obiwan: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "How do you bring in someone reluctant?",
      answers: [
        {
          label: "Show them who they could become",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "Appeal to duty and the people counting on them",
          scores: {
            leia: 3,
            luke: 1,
          },
        },
        {
          label: "Frame it as a job with upside",
          scores: {
            han: 3,
            leia: 1,
          },
        },
        {
          label: "Wait, then ask once when they are ready",
          scores: {
            obiwan: 3,
            han: 1,
          },
        },
        {
          label: "Make the ask feel like mutual survival, not charity",
          scores: {
            han: 2,
            leia: 2,
            luke: 1,
          },
        },
      ],
    },
    {
      text: "A plan fails publicly. You…",
      answers: [
        {
          label: "Own it and try a braver angle",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "Stabilize the room, then revise",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Blame the conditions, then invent the next move",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Take the heat so the team can regroup",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Redirect attention and keep working the problem",
          scores: {
            leia: 2,
            obiwan: 2,
            han: 1,
          },
        },
      ],
    },
    {
      text: "What do you carry that most people never see?",
      answers: [
        {
          label: "Hope that borders on stubbornness",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "The weight of every name on the list",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "A soft center under the swagger",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Old grief braided into patience",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Unfinished conversations you never had time for",
          scores: {
            obiwan: 2,
            luke: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "Your best collaborator usually…",
      answers: [
        {
          label: "Believes a better ending is still possible",
          scores: {
            luke: 3,
            leia: 1,
          },
        },
        {
          label: "Can run both the briefing and the battle",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Can move fast, adapt, and leave on short notice",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Knows when not to escalate",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Can keep faith without needing constant proof",
          scores: {
            luke: 2,
            obiwan: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "In a crowded room of strangers, you…",
      answers: [
        {
          label: "Look for the person who needs help",
          scores: {
            luke: 3,
            leia: 1,
          },
        },
        {
          label: "Map the exits and the power seats",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Close a useful deal before the night ends",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Watch quietly until the truth shows itself",
          scores: {
            obiwan: 3,
            han: 1,
          },
        },
        {
          label: "Identify who can be trusted before speaking",
          scores: {
            obiwan: 2,
            leia: 2,
            han: 1,
          },
        },
      ],
    },
    {
      text: "Between preparation and instinct, you trust…",
      answers: [
        {
          label: "Instinct first, then refine it",
          scores: {
            luke: 3,
            han: 1,
          },
        },
        {
          label: "Preparation that serves a clear mission",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Whatever gets your people out alive",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Discipline that outlasts emotion",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "A mix, chosen by what the moment actually needs",
          scores: {
            leia: 2,
            luke: 2,
            obiwan: 1,
          },
        },
      ],
    },
    {
      text: "Someone you love joins the wrong side. You…",
      answers: [
        {
          label: "Try to bring them home",
          scores: {
            luke: 3,
            obiwan: 1,
          },
        },
        {
          label: "Protect the cause even when it breaks you",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Go after them personally, rules optional",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "Grieve privately and guide the people still here",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Try to understand how they got there before acting",
          scores: {
            obiwan: 2,
            luke: 2,
            leia: 1,
          },
        },
      ],
    },
    {
      text: "What does winning mean to you?",
      answers: [
        {
          label: "People get room to hope again",
          scores: {
            luke: 3,
            leia: 1,
          },
        },
        {
          label: "The larger order stands and the work continues",
          scores: {
            leia: 3,
            obiwan: 1,
          },
        },
        {
          label: "Your people make it out — preferably paid",
          scores: {
            han: 3,
            luke: 1,
          },
        },
        {
          label: "The next generation inherits a quieter sky",
          scores: {
            obiwan: 3,
            leia: 1,
          },
        },
        {
          label: "Enough safety that ordinary life can resume",
          scores: {
            leia: 2,
            luke: 2,
            obiwan: 1,
          },
        },
      ],
    },
  ],
}

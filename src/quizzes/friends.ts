import type { Quiz } from '../types.ts'

export const friendsQuiz: Quiz = {
  id: "friends",
  title: "Friends",
  world: "Sitcom",
  tag: "Which friend are you?",
  summary: "Coffee, couches, and the people who know you too well. Ten questions drawn from a bigger deck, one apartment-building verdict.",
  resultLabel: "You are most like",
  theme: {
    accent: "#c4a1ff",
    accentText: "#1b1028",
    wash: "rgba(196, 161, 255, 0.16)",
  },
  characters: [
    {
      id: "rachel",
      name: "Rachel Green",
      role: "The glow-up",
      blurb: "You reinvent yourself in public and somehow make the messy middle look like a glow-up trailer. Style is a language you speak fluently, but loyalty is the point. You care how things look because you care how life feels — aspirational, romantic, and a little dramatic on purpose. Friends in freefall get the pep talk, the outfit assist, and the reminder that starting over is allowed. Your growth is visible, awkward, and brave. People may underestimate your seriousness because you arrive shiny. Then you outwork the old version of yourself. Keep the taste. Keep the courage. Just remember reinvention is a journey, not a costume change only.",
    },
    {
      id: "monica",
      name: "Monica Geller",
      role: "The organizer",
      blurb: "You love people by making the night run on time. Lists, leftovers, seating logic, competitive host energy — it is affection with a spreadsheet soul. Chaos is allowed if you can clean it, categorize it, and prevent it from happening the same way twice. You want excellence, closeness, and proof that care can be practical. Yes, you can be controlling. You can also be the reason everyone ate well and felt held. Your love language is competence plus devotion. Give you a kitchen, a plan, and people you adore, and you will build a home out of ordinary evenings. Just leave room for improvisation. Occasionally.",
    },
    {
      id: "phoebe",
      name: "Phoebe Buffay",
      role: "The original",
      blurb: "You follow a private logic that somehow works, which confuses people who think normal is a moral category. Weird is a compliment. You tell the truth sideways, protect your strange little ecosystem of values, and stay soft with the people who get you. Trauma did not make you small; it made you original. You can be mystical, blunt, musical, and unexpectedly wise before lunch. Your gift is refusing fake rules. Your challenge is remembering that other people sometimes need the standard map. At your best, you make freedom feel friendly. You do not perform uniqueness. You inhabit it, cat songs and all.",
    },
    {
      id: "joey",
      name: "Joey Tribbiani",
      role: "The good time",
      blurb: "You keep the room easy. Food, loyalty, flirtation, and a profound commitment to not overcomplicating what does not require a thesis. You may not have a five-year plan, but you will share your sandwich, your couch, and your genuine delight that everyone is here. People mistake simplicity for emptiness. They miss how steady your warmth is. You are the friend who reduces the pressure just by arriving. Ambition can grow later. Connection is the main plot. Your gift is presence without performance anxiety. Your risk is avoiding depth when depth would help. Still, when someone needs uncomplicated love, you are already asking if they are hungry.",
    },
    {
      id: "chandler",
      name: "Chandler Bing",
      role: "The deflection",
      blurb: "Humor is your armor and your love language, often in the same sentence. You joke first, feel second, and somehow become the person everyone calls at 1 a.m. anyway. Deflection keeps you safe. It also makes you devastatingly good at breaking tension before it becomes a scene. Under the sarcasm is a loyal friend who wants commitment, comfort, and fewer emotional surprise tests. Your gift is making hard moments survivable. Your challenge is letting sincerity land without a punchline chase. When you do, people realize the jokes were never the whole relationship — just the doorway you trusted. Could you be any more yourself? Thankfully, no.",
    },
    {
      id: "ross",
      name: "Ross Geller",
      role: "The overthinker",
      blurb: "You care loudly. You lecture a little. You want things to mean something — relationships, timing, vocabulary, the historical context nobody requested. Passion makes you earnest, rivalrous, and occasionally catastrophic in the specific way of people who feel everything with footnotes. You are happiest when your expertise is respected and your feelings are taken seriously. Your gift is devotion with depth. Your challenge is accepting that not every moment needs a seminar. Friends who love you learn to interrupt the spiral and keep the heart. At your best, you remind people that enthusiasm is allowed to be uncool if it is real. Dinosaurs optional. Feelings mandatory.",
    },
  ],
  questions: [
    {
      text: "You suddenly have a free Saturday. What do you actually do?",
      answers: [
        {
          label: "Reset your look and surroundings",
          scores: {
            rachel: 3,
            monica: 1,
          },
        },
        {
          label: "Host something with a real plan behind it",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Wander until a strange idea finds you",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Keep it low-effort with food and whoever shows up",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "Overthink the day into a detailed personal theory",
          scores: {
            ross: 3,
            chandler: 1,
          },
        },
      ],
    },
    {
      text: "A friend is freaking out. What is your first move?",
      answers: [
        {
          label: "Comfort them and help them feel put-together again",
          scores: {
            rachel: 3,
            phoebe: 1,
          },
        },
        {
          label: "Fix the concrete problem as soon as possible",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Break the mood with a joke they cannot ignore",
          scores: {
            chandler: 3,
            joey: 1,
          },
        },
        {
          label: "Sit with them and over-explain what happened",
          scores: {
            ross: 3,
            chandler: 1,
          },
        },
        {
          label: "Offer context, history, and too many related points",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "In your friend group, what do you usually bring?",
      answers: [
        {
          label: "Taste and a higher bar for how things look",
          scores: {
            rachel: 3,
            ross: 1,
          },
        },
        {
          label: "Structure, snacks, and seating that somehow works",
          scores: {
            monica: 3,
            rachel: 1,
          },
        },
        {
          label: "A story or angle nobody expected",
          scores: {
            phoebe: 3,
            chandler: 1,
          },
        },
        {
          label: "Easy energy and zero pressure to perform",
          scores: {
            joey: 3,
            phoebe: 1,
          },
        },
        {
          label: "Facts, feelings, and a need for things to mean something",
          scores: {
            ross: 3,
            rachel: 1,
          },
        },
      ],
    },
    {
      text: "Be honest: what is work to you?",
      answers: [
        {
          label: "A stage for becoming someone new",
          scores: {
            rachel: 3,
            joey: 1,
          },
        },
        {
          label: "A craft you want to master",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "A paycheck that funds your real life",
          scores: {
            phoebe: 3,
            chandler: 1,
          },
        },
        {
          label: "Something you survive with humor",
          scores: {
            chandler: 3,
            joey: 1,
          },
        },
        {
          label: "A serious pursuit that should be respected",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "Someone leaves a mess in your apartment. What do you do?",
      answers: [
        {
          label: "Notice it immediately and judge it quietly",
          scores: {
            rachel: 3,
            ross: 1,
          },
        },
        {
          label: "Clean it, then mention it once",
          scores: {
            monica: 3,
            chandler: 1,
          },
        },
        {
          label: "Leave it; objects have their own timeline",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Use it, lose track of it, then ask whose it was",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "Explain why the mess bothers you in principle",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "When it comes to dating, what do you usually do?",
      answers: [
        {
          label: "Follow chemistry and figure out the rest later",
          scores: {
            rachel: 3,
            joey: 1,
          },
        },
        {
          label: "Know what you want and keep examples ready",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Trust the feeling even when it looks impractical",
          scores: {
            phoebe: 3,
            rachel: 1,
          },
        },
        {
          label: "Joke until the feeling becomes manageable",
          scores: {
            chandler: 3,
            ross: 1,
          },
        },
        {
          label: "Analyze compatibility until the mood changes",
          scores: {
            ross: 3,
            chandler: 1,
          },
        },
      ],
    },
    {
      text: "In close relationships, what frustrates you most?",
      answers: [
        {
          label: "Being treated as less serious than you are",
          scores: {
            rachel: 3,
            ross: 1,
          },
        },
        {
          label: "People who ignore a simple system",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Rules that exist for no good reason",
          scores: {
            phoebe: 3,
            chandler: 1,
          },
        },
        {
          label: "A room that gets intense too quickly",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "Being misunderstood after you tried to explain",
          scores: {
            ross: 3,
            rachel: 1,
          },
        },
      ],
    },
    {
      text: "Which group-chat style is most like you?",
      answers: [
        {
          label: "We can always start over",
          scores: {
            rachel: 3,
            phoebe: 1,
          },
        },
        {
          label: "If I do not do it, it will not happen",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Deflect with humor, then show up anyway",
          scores: {
            chandler: 3,
            joey: 1,
          },
        },
        {
          label: "Keep it friendly, flirty, and low-stakes",
          scores: {
            joey: 3,
            rachel: 1,
          },
        },
        {
          label: "Clarify definitions until everyone is exhausted",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "Thanksgiving (or a big holiday meal) at your place usually means what?",
      answers: [
        {
          label: "Looking good and surviving a near-disaster story",
          scores: {
            rachel: 3,
            monica: 1,
          },
        },
        {
          label: "A timed menu and lightly competitive traditions",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "One odd contribution that becomes a tradition",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Showing up hungry and emotionally available",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "A speech about tradition that runs a little long",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "What does your apartment usually feel like?",
      answers: [
        {
          label: "Stylish, unfinished, and full of potential",
          scores: {
            rachel: 3,
            monica: 1,
          },
        },
        {
          label: "Ordered enough that guests can feel it",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Collected from instinct more than catalogs",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Lived-in, comfortable, and slightly chaotic",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "Arranged around interests you can lecture about",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "You unexpectedly run into an ex. What do you do?",
      answers: [
        {
          label: "Make sure you look composed and in control",
          scores: {
            rachel: 3,
            monica: 1,
          },
        },
        {
          label: "Plan every conversational exit route",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Say one unexpected true thing and leave",
          scores: {
            phoebe: 3,
            chandler: 1,
          },
        },
        {
          label: "Overthink the history until someone interrupts",
          scores: {
            ross: 3,
            chandler: 1,
          },
        },
        {
          label: "Revisit every chapter of the relationship in your head",
          scores: {
            ross: 3,
            rachel: 1,
          },
        },
      ],
    },
    {
      text: "At your favorite hangout, which seat do you take and why?",
      answers: [
        {
          label: "Watch people without being the center",
          scores: {
            rachel: 3,
            phoebe: 1,
          },
        },
        {
          label: "Manage the flow of the group",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Sit oddly and follow a private train of thought",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Stay closest to the food",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "Hold court with a story that needs precision",
          scores: {
            ross: 3,
            chandler: 1,
          },
        },
      ],
    },
    {
      text: "Someone gets a fact wrong out loud. What do you do?",
      answers: [
        {
          label: "Let it go unless it touches something you care about",
          scores: {
            rachel: 3,
            joey: 1,
          },
        },
        {
          label: "Correct it helpfully, maybe more than once",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Invent a better meaning for their version",
          scores: {
            phoebe: 3,
            chandler: 1,
          },
        },
        {
          label: "Launch into a mini-lecture you did not plan to give",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
        {
          label: "Need the record corrected for accuracy",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "When you and your roommates argue, what does it look like?",
      answers: [
        {
          label: "A dramatic exit, then a sincere return",
          scores: {
            rachel: 3,
            ross: 1,
          },
        },
        {
          label: "A new system that will prevent this forever",
          scores: {
            monica: 3,
            chandler: 1,
          },
        },
        {
          label: "Odd honesty until the air clears",
          scores: {
            phoebe: 3,
            rachel: 1,
          },
        },
        {
          label: "Jokes first, then an admission that you care",
          scores: {
            chandler: 3,
            joey: 1,
          },
        },
        {
          label: "Escalate into a debate about what is fair",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "There is a surprise party. What is your role?",
      answers: [
        {
          label: "Main-character energy, even if you helped plan it",
          scores: {
            rachel: 3,
            joey: 1,
          },
        },
        {
          label: "Logistics, timing, and protecting the details",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Unrequested entertainment that somehow helps",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Keeping the mood light when it turns awkward",
          scores: {
            chandler: 3,
            joey: 1,
          },
        },
        {
          label: "Give a toast that becomes a short lecture",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "Someone trusts you with a secret. What do you do with it?",
      answers: [
        {
          label: "Hold it for the moment it should land",
          scores: {
            rachel: 3,
            ross: 1,
          },
        },
        {
          label: "Organize who needs to know and when",
          scores: {
            monica: 3,
            chandler: 1,
          },
        },
        {
          label: "Treat it like strange, important knowledge",
          scores: {
            phoebe: 3,
            rachel: 1,
          },
        },
        {
          label: "Almost tell it by accident as a joke",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "Explain why secrecy matters, at length",
          scores: {
            ross: 3,
            chandler: 1,
          },
        },
      ],
    },
    {
      text: "What does your ideal trip look like?",
      answers: [
        {
          label: "A stylish city with room to reinvent yourself",
          scores: {
            rachel: 3,
            monica: 1,
          },
        },
        {
          label: "A planned itinerary with excellent food",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Somewhere strange enough to shift your outlook",
          scores: {
            phoebe: 3,
            rachel: 1,
          },
        },
        {
          label: "Anywhere easy with friends and low pressure",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "A destination with museums and strong opinions",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
    {
      text: "When you realize you are wrong, what do you do?",
      answers: [
        {
          label: "Need a minute, then own it cleanly",
          scores: {
            rachel: 3,
            monica: 1,
          },
        },
        {
          label: "Fix it harder than the original mistake",
          scores: {
            monica: 3,
            ross: 1,
          },
        },
        {
          label: "Accept it as part of a larger weird path",
          scores: {
            phoebe: 3,
            joey: 1,
          },
        },
        {
          label: "Joke about it until the sting fades",
          scores: {
            chandler: 3,
            joey: 1,
          },
        },
        {
          label: "Defend your reasoning before you apologize",
          scores: {
            ross: 3,
            rachel: 1,
          },
        },
      ],
    },
    {
      text: "Late-night talks with a close friend usually turn into what?",
      answers: [
        {
          label: "Feelings, future plans, and how things look from here",
          scores: {
            rachel: 3,
            ross: 1,
          },
        },
        {
          label: "Problem-solving with snacks nearby",
          scores: {
            monica: 3,
            chandler: 1,
          },
        },
        {
          label: "Strange truths that somehow help",
          scores: {
            phoebe: 3,
            rachel: 1,
          },
        },
        {
          label: "Sarcasm that eventually turns sincere",
          scores: {
            chandler: 3,
            ross: 1,
          },
        },
        {
          label: "A detailed recounting of what everything means",
          scores: {
            ross: 3,
            rachel: 1,
          },
        },
      ],
    },
    {
      text: "What do you hope your friends remember about you?",
      answers: [
        {
          label: "That you kept becoming braver in public",
          scores: {
            rachel: 3,
            phoebe: 1,
          },
        },
        {
          label: "That you made a home for everyone",
          scores: {
            monica: 3,
            joey: 1,
          },
        },
        {
          label: "That you stayed yourself on purpose",
          scores: {
            phoebe: 3,
            chandler: 1,
          },
        },
        {
          label: "That you showed up, generously and simply",
          scores: {
            joey: 3,
            chandler: 1,
          },
        },
        {
          label: "That you cared loudly and specifically",
          scores: {
            ross: 3,
            monica: 1,
          },
        },
      ],
    },
  ],
}

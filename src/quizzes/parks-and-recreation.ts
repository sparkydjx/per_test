import type { Quiz } from '../types.ts'

export const parksAndRecreationQuiz: Quiz = {
  id: "parks-and-recreation",
  title: "Parks and Recreation",
  world: "Sitcom",
  tag: "Who are you in Pawnee?",
  summary: "A separate test for the Parks Department. Your Office result does not transfer to City Hall.",
  resultLabel: "Pawnee needs you as",
  theme: {
    accent: "#6fbf73",
    accentText: "#0a1a0c",
    wash: "rgba(111, 191, 115, 0.14)",
  },
  characters: [
    {
      id: "leslie",
      name: "Leslie Knope",
      role: "The builder",
      blurb: "You love people with the intensity of a binder tabbed in triplicate. Public service is not a job title for you — it is a romance novel with charts. You believe breakfast food can fix morale, a well-run meeting can fix a town, and a scrapbook can fix almost anything else. Optimism is your strategy, not your blindfold. You see potential in vacant lots, awkward colleagues, and half-finished dreams, then you calendar them into existence. Yes, you overdo it. That is the point. Pawnee (or wherever you plant your flag) becomes better because you refuse to treat apathy as realism.",
    },
    {
      id: "ron",
      name: "Ron Swanson",
      role: "The libertarian",
      blurb: "You want fewer meetings, fewer feelings, and more time with wood, meat, and silence. Government, in your view, is a necessary inconvenience that should aspire to invisibility. You speak softly, carve loudly, and defend personal liberty like it is fine furniture. People project grumpiness onto you; what you actually practice is selective engagement. Help the people you respect. Ignore the theater. Eat a second breakfast without apology. Your leadership style is simple: clear standards, minimal spectacle, and an exit strategy. If the room gets too emotional, you will leave — not dramatically, just efficiently — and the door will sound like wisdom.",
    },
    {
      id: "april",
      name: "April Ludgate",
      role: "The deadpan",
      blurb: "You weaponize boredom, deadpan, and strategic disinterest until people forget you are paying attention. Then you say one devastatingly accurate sentence and walk away like it cost you nothing. You care, inconveniently, about weirdos, animals, and the few humans who earn your soft spot. Forced enthusiasm is your villain origin story. Team-building is a personal attack. Still, when it counts, you show up — usually sideways, usually sarcastic, and usually more loyal than your face admits. You do not need the spotlight. You need autonomy, dark humor, and permission to find the official version of reality deeply unimpressive.",
    },
    {
      id: "tom",
      name: "Tom Haverford",
      role: "The brand",
      blurb: "You treat life like a product launch with better lighting. Style is strategy. Hustle is personality. Every room is a chance to network, rebrand, or invent a business that might finally work this time. People may call it flashy. You call it taste plus momentum. You believe in Treat Yo Self as policy, not punchline, and you can sell a vision hard enough that even skeptics want merch. Under the swagger is a real hunger to matter and be seen winning. Keep the confidence. Keep the outfits. Maybe put one idea on a spreadsheet. Or do not. The myth is part of the model.",
    },
    {
      id: "andy",
      name: "Andy Dwyer",
      role: "The golden retriever",
      blurb: "You bring the snacks, the volume, and the unearned confidence that somehow becomes earned by sheer commitment. Loyalty is loud with you. Thinking is optional, but heart is mandatory. You turn ordinary afternoons into accidental parties and ordinary friends into a crew. People underestimate you because you look like pure golden-retriever energy. Then you protect them, hype them, and refuse to leave anyone behind. Plans may be fuzzy. Enthusiasm is not. If there is a chance to help, perform, or declare someone awesome through a megaphone of vibes, you are already halfway there with mustard on your shirt and total sincerity.",
    },
    {
      id: "donna",
      name: "Donna Meagle",
      role: "The standard",
      blurb: "You do not chase chaos. Chaos requests a meeting, gets declined, and receives a calendar hold for never. Taste is your boundary system. You know what you earned, what you will pay for, and what you will not explain. Weekends are sacred. Standards are non-negotiable. You can be warm without being available to every emotional emergency in the building. People come to you for polish, perspective, and the reminder that self-respect can look expensive. You celebrate hard, work clean, and refuse to shrink so other people can feel casual. Life is short. Your standards are not.",
    },
    {
      id: "chris",
      name: "Chris Traeger",
      role: "The optimist",
      blurb: "You treat existence like a wellness retreat that also happens to include government. Energy is your default setting, gratitude is a verbal sport, and you can find the upside in a budget crisis before anyone else has sat down. People think the positivity is a bit. It is not. You mean every superlative, every high-five, every insistence that today can still be incredible. Health is a love language. Public service is a chance to help humans become their best, loudest selves. Your risk is steamrolling a room that needed quiet, not a pep talk. Your gift is making effort feel contagious. Literally. You will say that word. You will mean it.",
    },
    {
      id: "ben",
      name: "Ben Wyatt",
      role: "The planner",
      blurb: "You would rather fix the spreadsheet than perform the speech. Competence is how you care: budgets balanced, risks named, a three-phase plan that survives contact with Pawnee. You can be awkward in a doorway and surgical in a numbers meeting, sometimes in the same hour. Games, calzones, and very specific hobbies are not escapes so much as the places your brain gets to be delighted on purpose. People may miss the warmth because you lead with process. Give you a broken system and a quiet corner and you will rebuild it until it works. Your gift is making idealism operational. Your challenge is remembering you are allowed to want things that are not efficient.",
    },
    {
      id: "ann",
      name: "Ann Perkins",
      role: "The grounded",
      blurb: "You are the reasonable person in a town that treats reasonableness like optional DLC. Care shows up as practical help: a checkup, a ride, a calm voice when the binder people start vibrating. You love your friends hard and still want a life that is not a 14-hour civic adventure. People lean on you because you make chaos feel medically supervised. That is a gift and a trap. You can disappear into other people’s plots until your own wants look like a rumor. Your strength is staying human in rooms that reward spectacle. Your work is remembering that being the grounded one does not mean you owe the building your entire evening.",
    },
  ],
  questions: [
    {
      text: "City Hall is chaos again. What do you do first?",
      answers: [
        {
          label: "Start assigning roles before anyone asks",
          scores: {
            leslie: 3,
            chris: 1,
          },
        },
        {
          label: "Step away; this is why systems fail",
          scores: {
            ron: 3,
            april: 1,
          },
        },
        {
          label: "Reframe it as a chance to be excellent and rally the room",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Open a notes doc and stabilize the facts",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
        {
          label: "Bring snacks and assume it will somehow be fine",
          scores: {
            andy: 3,
            ann: 1,
          },
        },
      ],
    },
    {
      text: "You have a free Saturday in town. How do you spend it?",
      answers: [
        {
          label: "Turn hangouts into an accidental all-day event",
          scores: {
            andy: 3,
            tom: 1,
          },
        },
        {
          label: "Disappear outdoors with no agenda and no people",
          scores: {
            ron: 3,
            donna: 1,
          },
        },
        {
          label: "Spend freely on comfort, style, and recovery",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "A long run, a salad, and a sincere recap of how great it was",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Errands, rest, and one plan that will not become a parade",
          scores: {
            ann: 3,
            donna: 1,
          },
        },
      ],
    },
    {
      text: "Look at your desk. What does it usually look like?",
      answers: [
        {
          label: "A mix of toys, snacks, and unexplained optimism",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
        {
          label: "Low-effort on purpose, with a private sense of humor",
          scores: {
            april: 3,
            ron: 1,
          },
        },
        {
          label: "Functional, a little personal, and not a shrine to the job",
          scores: {
            ann: 3,
            leslie: 1,
          },
        },
        {
          label: "Polished, branded, and ready for visitors",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Color-coded files, a budget printout, and one embarrassing hobby",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
      ],
    },
    {
      text: "A friend is falling apart. What is your first move?",
      answers: [
        {
          label: "Organize support until they feel celebrated again",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Remind them of their worth, then insist on a reset",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "Show up with snacks and no judgment",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
        {
          label: "Deliver a pep talk that could power a small city",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Show up, listen, and handle the practical care",
          scores: {
            ann: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "How do you usually handle your actual assigned work?",
      answers: [
        {
          label: "Do it clean, then protect the rest of your day",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "Do less, protect the morning, leave on time",
          scores: {
            ron: 3,
            april: 1,
          },
        },
        {
          label: "Coast until something interesting appears",
          scores: {
            april: 3,
            andy: 1,
          },
        },
        {
          label: "Look for the angle that can also advance you",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Build the system that makes the work boringly reliable",
          scores: {
            ben: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "A town hall meeting gets angry. What do you do?",
      answers: [
        {
          label: "Steer attention toward the social upside afterward",
          scores: {
            tom: 3,
            andy: 1,
          },
        },
        {
          label: "Sit back and let the process embarrass itself",
          scores: {
            ron: 3,
            april: 1,
          },
        },
        {
          label: "Try to keep people loose even if the plan is fuzzy",
          scores: {
            andy: 3,
            tom: 1,
          },
        },
        {
          label: "Flood the room with gratitude and facts until the mood turns",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Present charts like they are a calming spell",
          scores: {
            ben: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "What annoys you fastest at work?",
      answers: [
        {
          label: "People who will not care about their community",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Unnecessary process, feelings meetings, and rules",
          scores: {
            ron: 3,
            april: 1,
          },
        },
        {
          label: "Forced cheer and mandatory bonding",
          scores: {
            april: 3,
            ron: 1,
          },
        },
        {
          label: "Low standards and people who waste your time",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "People who take the fun out of everything",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "Which motto actually matches how you live your week?",
      answers: [
        {
          label: "Invest in yourself without apology",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Know your craft and need little from others",
          scores: {
            ron: 3,
            donna: 1,
          },
        },
        {
          label: "Keep your people close and your drama small",
          scores: {
            ann: 3,
            ron: 1,
          },
        },
        {
          label: "Protect your standards and your weekends",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "Every day can be the best day if you insist",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "An empty lot needs a new purpose. What is your plan?",
      answers: [
        {
          label: "Build a plan, a coalition, and a vision",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Volunteer for the fun part and learn on the way",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
        {
          label: "Pitch something strange enough to be memorable",
          scores: {
            april: 3,
            tom: 1,
          },
        },
        {
          label: "Look for sponsors and a launch event",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "A phased proposal with costs, risks, and a quiet park",
          scores: {
            ben: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "What matters most to you about breakfast or morning fuel?",
      answers: [
        {
          label: "Whatever feels luxurious enough to count as self-respect",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "Protein, quiet, and no conversation",
          scores: {
            ron: 3,
            donna: 1,
          },
        },
        {
          label: "Whatever is around and tastes like a good time",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
        {
          label: "Something optimized, measured, and described as incredible",
          scores: {
            chris: 3,
            donna: 1,
          },
        },
        {
          label: "Whatever is actually good for you, eaten in peace",
          scores: {
            ann: 3,
            ron: 1,
          },
        },
      ],
    },
    {
      text: "At a local festival, what role do you naturally take?",
      answers: [
        {
          label: "The person making sure people feel welcomed",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "The polished guest who will not sit in the dirt",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "The spectator with dry commentary",
          scores: {
            april: 3,
            donna: 1,
          },
        },
        {
          label: "The one running merch, guest lists, and vibes",
          scores: {
            tom: 3,
            andy: 1,
          },
        },
        {
          label: "Unofficial emcee energy, high-fives included",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "Someone asks you to stay late. What do you say?",
      answers: [
        {
          label: "Agree if there is a visible upside for you",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Agree only if it can also be weirdly fun",
          scores: {
            april: 3,
            andy: 1,
          },
        },
        {
          label: "Stay late and suggest a sunrise follow-up jog",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Stay if the deliverable is defined; no if it is theater",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
        {
          label: "Help for an hour, then protect the rest of the night",
          scores: {
            ann: 3,
            donna: 1,
          },
        },
      ],
    },
    {
      text: "A bad idea comes up in a meeting. How do you handle it?",
      answers: [
        {
          label: "Support whoever seems most excited about it",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
        {
          label: "End it in one sentence",
          scores: {
            ron: 3,
            april: 1,
          },
        },
        {
          label: "Say the kind thing, then the true thing",
          scores: {
            ann: 3,
            leslie: 1,
          },
        },
        {
          label: "Repackage it so you look visionary",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Ask for the numbers until it collapses or improves",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
      ],
    },
    {
      text: "How do you show people you care at work?",
      answers: [
        {
          label: "Specific compliments, calendars, and thoughtful extras",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Tasteful gifts and zero tolerance for cheapness",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "Shared disdain for something ridiculous",
          scores: {
            april: 3,
            ron: 1,
          },
        },
        {
          label: "Public praise and a wellness plan they did not request",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Practical help — water, a ride, a checkup",
          scores: {
            ann: 3,
            andy: 1,
          },
        },
      ],
    },
    {
      text: "A celebrity visits your town. What do you do?",
      answers: [
        {
          label: "Ask for an autograph like it is a personal quest",
          scores: {
            andy: 3,
            tom: 1,
          },
        },
        {
          label: "Avoid them; attention is a tax",
          scores: {
            ron: 3,
            april: 1,
          },
        },
        {
          label: "Be polite, keep it short, go back to work",
          scores: {
            ann: 3,
            donna: 1,
          },
        },
        {
          label: "Treat them like a new best friend and a public-health ambassador",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Hand over a briefing memo, then hover near the wall",
          scores: {
            ben: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "Which working style is most like yours day to day?",
      answers: [
        {
          label: "Enthusiastic, loyal, and slightly overcommitted",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Observant, sarcastic, and selectively soft",
          scores: {
            april: 3,
            donna: 1,
          },
        },
        {
          label: "Upbeat, athletic, and sincerely extra",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Prepared, precise, and a little awkward",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
        {
          label: "Selective, stylish, and hard to rattle",
          scores: {
            donna: 3,
            april: 1,
          },
        },
      ],
    },
    {
      text: "Your department’s budget just got cut. What is your reaction?",
      answers: [
        {
          label: "Fight for the work with evidence and heart",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Protect the events that keep the image strong",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Rebuild the numbers until the core still works",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
        {
          label: "Sell the remaining work as a thrilling challenge",
          scores: {
            chris: 3,
            leslie: 1,
          },
        },
        {
          label: "Guard the parts that actually help people",
          scores: {
            ann: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "After a long day, how do you recharge?",
      answers: [
        {
          label: "Hands-on solitude and no notifications",
          scores: {
            ron: 3,
            donna: 1,
          },
        },
        {
          label: "Call friends and turn it into a hang",
          scores: {
            andy: 3,
            tom: 1,
          },
        },
        {
          label: "Dressing up and going somewhere that feels earned",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "A quiet night with a complicated game",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
        {
          label: "Home, food, and absolutely no additional plot",
          scores: {
            ann: 3,
            ron: 1,
          },
        },
      ],
    },
    {
      text: "Someone insults your hometown. How do you respond?",
      answers: [
        {
          label: "Defend it with specifics and pride",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Defend it with volume, loyalty, and zero research",
          scores: {
            andy: 3,
            leslie: 1,
          },
        },
        {
          label: "Highlight the nightlife, style, and hustle",
          scores: {
            tom: 3,
            donna: 1,
          },
        },
        {
          label: "Defend it sideways, through sarcasm",
          scores: {
            april: 3,
            leslie: 1,
          },
        },
        {
          label: "Defend the people you take care of there",
          scores: {
            ann: 3,
            leslie: 1,
          },
        },
      ],
    },
    {
      text: "Years from now, what do you want to be known for?",
      answers: [
        {
          label: "Making the place better for people",
          scores: {
            leslie: 3,
            andy: 1,
          },
        },
        {
          label: "Never becoming fake, even when you cared",
          scores: {
            april: 3,
            ron: 1,
          },
        },
        {
          label: "Having lived well without shrinking for anyone",
          scores: {
            donna: 3,
            tom: 1,
          },
        },
        {
          label: "Quiet institutions that actually work",
          scores: {
            ben: 3,
            ron: 1,
          },
        },
        {
          label: "A life that was yours, not just everyone else’s emergency",
          scores: {
            ann: 3,
            leslie: 1,
          },
        },
      ],
    },
  ],
}

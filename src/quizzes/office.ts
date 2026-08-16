import type { Quiz } from '../types.ts'

export const officeQuiz: Quiz = {
  id: "office",
  title: "The Office",
  world: "Workplace",
  tag: "Who are you at work?",
  summary: "A separate test for the Scranton branch. Your Parks result does not transfer to the annex.",
  resultLabel: "You belong at",
  theme: {
    accent: "#7eb6ff",
    accentText: "#071018",
    wash: "rgba(126, 182, 255, 0.14)",
  },
  characters: [
    {
      id: "jim",
      name: "Jim Halpert",
      role: "The observer",
      blurb: "You are the office’s calm narrator with a secret director’s cut. You notice every awkward pause, every power play, and every chance for a perfectly timed aside — then you decide whether to join or just enjoy the show. People underestimate how strategic your chill is. You protect your energy, invest in the few who get the joke, and keep competence looking optional even when you are carrying the room. The job is the set. The bit is the craft. If someone needs a reality check wrapped in charm, you are already drafting the line.",
    },
    {
      id: "dwight",
      name: "Dwight Schrute",
      role: "The true believer",
      blurb: "You treat work like a sacred contest with binders, contingency plans, and a private ranking system nobody asked for. Loyalty is not soft with you — it is operational. You memorize procedures, invent a few more, and still somehow make “extra” look like the only correct setting. People may call you intense. You call it preparedness. You want authority, clarity, and proof that excellence still matters. If chaos arrives, you do not panic. You open a protocol, assign roles, and assume command until someone officially stops you — which they rarely do in time.",
    },
    {
      id: "pam",
      name: "Pam Beesly",
      role: "The quiet pivot",
      blurb: "You look gentle until people realize you have been quietly redesigning your whole life. You are funny in the margins, kind under pressure, and sharper than the loudest person in the room. Reception, support roles, “just helping” — those are seasons, not your identity. You notice who is struggling, who is performing, and who is worth trusting. Your ambition does not always shout, but it does not quit. Give you time and a little courage and you build something that is actually yours: art, a better seat at the table, a version of yourself that no longer apologizes for wanting more.",
    },
    {
      id: "michael",
      name: "Michael Scott",
      role: "The heart",
      blurb: "You want the workplace to feel like a chosen family, complete with speeches, celebrations, and emotional weather reports. Attention is how you love people, and you give it generously even when the timing is catastrophic. You are not faking the heart — that part is real. The comedy is that you keep trying to turn quarterly goals into bonding exercises. You hate being left out more than you hate being wrong. At your best, you make people feel chosen. At your loudest, you make HR invent new forms. Either way, you mean it, and the room is never boring with you in it.",
    },
    {
      id: "angela",
      name: "Angela Martin",
      role: "The standard",
      blurb: "You are the office’s moral thermostat, and yes, it is set firmly. Rules exist for a reason, parties should be smaller, and other people’s shortcuts offend you on a cellular level. You keep score with standards, not slogans. Precision is your love language; judgment is your cardio. Underneath the severity is a fierce need for order in a world that keeps microwaving fish and calling it culture. You may be small in the chair, but you are enormous in conviction. Cross the line and you will not raise your voice. You will simply end the conversation with one devastating sentence and a look that files itself.",
    },
    {
      id: "stanley",
      name: "Stanley Hudson",
      role: "The boundary",
      blurb: "You did the work. That is the headline, the footnote, and the entire press release. You are allergic to manufactured fun, optional meetings, and anyone who confuses volume with value. Boundaries are not a branding exercise for you — they are infrastructure. Crossword in progress means do not speak. Birthday cake in the conference room means you already declined. People mistake your quiet for emptiness. It is actually a highly optimized peace system. You will help when it is real. You will not perform enthusiasm for free. Clock out, protect the evening, and never apologize for knowing exactly how much of yourself the job gets.",
    },
  ],
  questions: [
    {
      text: "Okay, real talk: the meeting could have been an email. What are you doing in there?",
      answers: [
        {
          label: "Trade a look with someone who also gets it",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Capture every detail in case it becomes policy later",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Try to turn the room into something more human",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Mentally check out and save your energy",
          scores: {
            stanley: 3,
            jim: 1,
          },
        },
        {
          label: "Quietly tidy your notes and wait for it to end",
          scores: {
            angela: 3,
            pam: 1,
          },
        },
      ],
    },
    {
      text: "There is cake in the conference room and nobody is forcing you to go. What do you do?",
      answers: [
        {
          label: "Stop by for the food and the people-watching",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Make sure it runs on time and looks official",
          scores: {
            dwight: 3,
            michael: 1,
          },
        },
        {
          label: "Help set up, then stay a little out of the spotlight",
          scores: {
            pam: 3,
            angela: 1,
          },
        },
        {
          label: "Skip it without rehearsing an excuse",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Send a polite decline and protect your standards",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "If I walked by your desk right now, what would it say about you?",
      answers: [
        {
          label: "A few personal details and a private joke or two",
          scores: {
            pam: 3,
            jim: 1,
          },
        },
        {
          label: "Strict order and a reminder of how things should go",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Warmth, status, and a need to be noticed",
          scores: {
            michael: 3,
            dwight: 1,
          },
        },
        {
          label: "Only what is required to get through the day",
          scores: {
            stanley: 3,
            jim: 1,
          },
        },
        {
          label: "A clean surface, labeled drawers, and no clutter",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
      ],
    },
    {
      text: "Two coworkers are arguing in the open office. What is your move?",
      answers: [
        {
          label: "Watch, then land one precise comment",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Push it into the official process",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Name it about belonging and feelings",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Name the rule and end the debate",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
        {
          label: "Step back and refuse to feed the spectacle",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
      ],
    },
    {
      text: "Be honest with me — what are you actually good at noticing at work?",
      answers: [
        {
          label: "The mood of the room without joining the noise",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "The exact way a process is supposed to run",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Who feels left out and how to pull them in",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Where your attention can stay protected",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Remembering who actually follows through",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
      ],
    },
    {
      text: "Someone is about to prank a coworker. Where do you fit in?",
      answers: [
        {
          label: "Help design it if the timing is right",
          scores: {
            jim: 3,
            dwight: 1,
          },
        },
        {
          label: "Get even later, then write it up like a case file",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Go along, but keep an eye on whether it goes too far",
          scores: {
            pam: 3,
            jim: 1,
          },
        },
        {
          label: "Want in, mostly to feel included",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Stay out of it and hope it dies quickly",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
      ],
    },
    {
      text: "You are driving home. What is stuck in your head?",
      answers: [
        {
          label: "One person who made the day feel less flat",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Side projects, readiness, and private ambitions",
          scores: {
            dwight: 3,
            stanley: 1,
          },
        },
        {
          label: "Whether people actually like having you around",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Dinner, quiet, and a hard stop on work talk",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Whether tomorrow will be quieter than today",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
      ],
    },
    {
      text: "If this office had one rule that sounded like you, which is it?",
      answers: [
        {
          label: "Do not make this weirder than it already is",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Take the job seriously, even if nobody else does",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "We are a family, and families care about each other",
          scores: {
            michael: 3,
            dwight: 1,
          },
        },
        {
          label: "Say it once. Clearly. Then we are done.",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Standards matter, even when no one is watching",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
      ],
    },
    {
      text: "Corporate is coming to our floor today. How do you handle that?",
      answers: [
        {
          label: "Look competent without looking eager",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Arrive overprepared with facts and formality",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Treat it like a chance to make a memorable impression",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Make yourself difficult to interrupt",
          scores: {
            stanley: 3,
            jim: 1,
          },
        },
        {
          label: "Present as calm, precise, and hard to fault",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
      ],
    },
    {
      text: "Somebody microwaved fish again. What do you do?",
      answers: [
        {
          label: "Comment sideways and keep working",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Quote the expectation out loud",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
        {
          label: "Turn it into a talk about consideration",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Fix what you can and refuse further engagement",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Document it mentally and avoid the mess",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "It is performance review time. How do you show up?",
      answers: [
        {
          label: "Keeping it breezy and getting out cleanly",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Coming in with metrics and a counterplan",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Needing reassurance that the relationship is intact",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Being careful, sincere, and a little braced",
          scores: {
            pam: 3,
            angela: 1,
          },
        },
        {
          label: "Stick to facts and keep emotion out of it",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "We planned a party with a theme you hate. Now what?",
      answers: [
        {
          label: "Play along with just enough irony",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Improve the execution until it is respectable",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Lean in hard and try to make it meaningful",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Put in the minimum appearance and leave",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Attend briefly out of obligation, then leave",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "A new hire asks, “What is this place really like?” What do you tell them?",
      answers: [
        {
          label: "Give a honest tour with one practical warning",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Point them to the rules and the hierarchy",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Sell belonging before you sell the job",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Advise them to keep their head down",
          scores: {
            stanley: 3,
            jim: 1,
          },
        },
        {
          label: "Warn them about the people who waste time",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "Lunch break. What does a good one look like for you?",
      answers: [
        {
          label: "A familiar spot with someone easy to talk to",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "A predictable routine with no surprises",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "A group table where conversation is the point",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Solitude, even if it means eating in the car",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "A short break with something neat and planned",
          scores: {
            angela: 3,
            pam: 1,
          },
        },
      ],
    },
    {
      text: "Sales numbers are down and people are stressed. What do you do first?",
      answers: [
        {
          label: "Do what is needed, then wait for the weather to change",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Launch a structured push with clear targets",
          scores: {
            dwight: 3,
            michael: 1,
          },
        },
        {
          label: "Rally people with encouragement and urgency",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Defend the standards that keep the books clean",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
        {
          label: "Tighten controls before anyone gets creative",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
      ],
    },
    {
      text: "You catch gossip by the copier. What happens next?",
      answers: [
        {
          label: "Stay for the humor, not the politics",
          scores: {
            jim: 3,
            stanley: 1,
          },
        },
        {
          label: "Escalate anything that sounds like a real violation",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Feel left out, then try to join the circle",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Form a private opinion and return to work",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
        {
          label: "Note who is unreliable and keep working",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "It is Friday at 4:47. What are you doing?",
      answers: [
        {
          label: "Trade one last easy conversation, then leave",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Clear tomorrow’s work while you still can",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Try to turn the end of the day into a hangout",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Exit immediately and protect the evening",
          scores: {
            stanley: 3,
            jim: 1,
          },
        },
        {
          label: "Finish the last precise task, then go",
          scores: {
            angela: 3,
            dwight: 1,
          },
        },
      ],
    },
    {
      text: "How do you deal with HR / the people who handle conflict officially?",
      answers: [
        {
          label: "Polite distance; you both understand the arrangement",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Frequent contact, usually with documentation",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Emotional check-ins that blur into friendship",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "As little contact as possible",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Formal, infrequent, and preferably unnecessary",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "If you had to run awards night for the branch, how would you do it?",
      answers: [
        {
          label: "Write jokes that land without punching down",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Build categories, criteria, and strict order",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "Make every moment feel personal and affirming",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Keep it brief and leave before it gets sentimental",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Keep awards modest and morally tidy",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
    {
      text: "Deep question, guys: what do you actually want from this job?",
      answers: [
        {
          label: "A tolerable day and someone who gets your humor",
          scores: {
            jim: 3,
            pam: 1,
          },
        },
        {
          label: "Clear advancement and proof that you are excellent",
          scores: {
            dwight: 3,
            angela: 1,
          },
        },
        {
          label: "To matter to the people around you",
          scores: {
            michael: 3,
            pam: 1,
          },
        },
        {
          label: "Compensation and an afternoon nobody interrupts",
          scores: {
            stanley: 3,
            angela: 1,
          },
        },
        {
          label: "Order, fairness, and as little nonsense as possible",
          scores: {
            angela: 3,
            stanley: 1,
          },
        },
      ],
    },
  ],
}

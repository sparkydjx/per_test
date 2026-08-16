import type { Quiz } from '../types.ts'

export const parksAndRecreationQuiz: Quiz = {
  id: 'parks-and-recreation',
  title: 'Parks and Recreation',
  world: 'Sitcom',
  tag: 'Who are you in Pawnee?',
  summary: 'A separate test for the Parks Department. Your Office result does not transfer to City Hall.',
  resultLabel: 'Pawnee needs you as',
  theme: {
    accent: '#6fbf73',
    accentText: '#0a1a0c',
    wash: 'rgba(111, 191, 115, 0.14)',
  },
  characters: [
    {
      id: 'leslie',
      name: 'Leslie Knope',
      role: 'The builder',
      blurb: 'You love people with binders, breakfast food, and a calendar full of public forums. Optimism is a strategy. Pawnee is the love of your life.',
    },
    {
      id: 'ron',
      name: 'Ron Swanson',
      role: 'The libertarian',
      blurb: 'You want less government and more woodworking. Speak softly, carve loudly, and never apologize for a second breakfast of bacon.',
    },
    {
      id: 'april',
      name: 'April Ludgate',
      role: 'The deadpan',
      blurb: 'You weaponize boredom and still somehow care. Animals, sarcasm, and a secret soft spot for the weirdos who stay.',
    },
    {
      id: 'tom',
      name: 'Tom Haverford',
      role: 'The brand',
      blurb: 'You treat life like a product launch. Style, hustle, and a side business that might actually work this time. Treat yo self is policy.',
    },
    {
      id: 'andy',
      name: 'Andy Dwyer',
      role: 'The golden retriever',
      blurb: 'You bring the energy, the snacks, and the unearned confidence. Loyalty is loud. Thinking is optional. Burt Macklin would approve.',
    },
    {
      id: 'donna',
      name: 'Donna Meagle',
      role: 'The standard',
      blurb: 'You do not chase chaos; chaos books an appointment. Taste, boundaries, and a weekend that costs what it costs. You earned it.',
    },
  ],
  questions: [
    {
      text: 'Your workplace descends into chaos. You…',
      answers: [
        { label: 'Start assigning roles before anyone asks', scores: { leslie: 3, donna: 1 } },
        { label: 'Step away; this is why systems fail', scores: { ron: 3, april: 1 } },
        { label: 'Watch it unfold and narrate it dryly', scores: { april: 3, tom: 1 } },
        { label: 'Scan the room for useful connections', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'An open Saturday is yours. You are most likely to…',
      answers: [
        { label: 'Volunteer for something that helps the town', scores: { leslie: 3, andy: 1 } },
        { label: 'Disappear outdoors with no agenda and no people', scores: { ron: 3, donna: 1 } },
        { label: 'Spend freely on comfort, style, and recovery', scores: { donna: 3, tom: 1 } },
        { label: 'Turn hangouts into an accidental all-day event', scores: { andy: 3, tom: 1 } },
      ],
    },
    {
      text: 'Your desk or workspace usually looks…',
      answers: [
        { label: 'Personal, optimistic, and a little overcrowded with meaning', scores: { leslie: 3, andy: 1 } },
        { label: 'Sparse, practical, and slightly intimidating', scores: { ron: 3, april: 1 } },
        { label: 'Low-effort on purpose, with a private sense of humor', scores: { april: 3, ron: 1 } },
        { label: 'Polished, branded, and ready for visitors', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'A friend is unraveling. Your first impulse is…',
      answers: [
        { label: 'Organize support until they feel celebrated again', scores: { leslie: 3, andy: 1 } },
        { label: 'Offer one honest sentence and space', scores: { ron: 3, donna: 1 } },
        { label: 'Show up with snacks and no judgment', scores: { andy: 3, leslie: 1 } },
        { label: 'Remind them of their worth, then insist on a reset', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'How do you usually approach assigned work?',
      answers: [
        { label: 'Overdeliver because the mission feels personal', scores: { leslie: 3, donna: 1 } },
        { label: 'Do less, protect the morning, leave on time', scores: { ron: 3, april: 1 } },
        { label: 'Coast until something interesting appears', scores: { april: 3, andy: 1 } },
        { label: 'Look for the angle that can also advance you', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'A public meeting gets heated. You…',
      answers: [
        { label: 'Win the room with preparation and sincerity', scores: { leslie: 3, tom: 1 } },
        { label: 'Sit back and let the process embarrass itself', scores: { ron: 3, april: 1 } },
        { label: 'Say something unhelpful on purpose', scores: { april: 3, andy: 1 } },
        { label: 'Steer attention toward the social upside afterward', scores: { tom: 3, andy: 1 } },
      ],
    },
    {
      text: 'What drains your patience fastest?',
      answers: [
        { label: 'People who will not care about their community', scores: { leslie: 3, andy: 1 } },
        { label: 'Unnecessary process, feelings meetings, and rules', scores: { ron: 3, april: 1 } },
        { label: 'Forced cheer and mandatory bonding', scores: { april: 3, ron: 1 } },
        { label: 'Low standards and people who waste your time', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'Which personal motto fits how you move through a week?',
      answers: [
        { label: 'Aim high and mean it', scores: { leslie: 3, andy: 1 } },
        { label: 'Know your craft and need little from others', scores: { ron: 3, donna: 1 } },
        { label: 'Appear unbothered while staying quietly invested', scores: { april: 3, ron: 1 } },
        { label: 'Invest in yourself without apology', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'An ugly empty lot needs a future. You…',
      answers: [
        { label: 'Build a plan, a coalition, and a vision', scores: { leslie: 3, andy: 1 } },
        { label: 'Solve it simply and walk away', scores: { ron: 3, april: 1 } },
        { label: 'Pitch something strange enough to be memorable', scores: { april: 3, tom: 1 } },
        { label: 'Look for sponsors and a launch event', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Morning fuel, for you, is mostly about…',
      answers: [
        { label: 'Comfort food that feels like affection', scores: { leslie: 3, andy: 1 } },
        { label: 'Protein, quiet, and no conversation', scores: { ron: 3, donna: 1 } },
        { label: 'Caffeine and a hard boundary around small talk', scores: { april: 3, ron: 1 } },
        { label: 'A meal that doubles as a lifestyle statement', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'At a local festival, you naturally become…',
      answers: [
        { label: 'The person making sure people feel welcomed', scores: { leslie: 3, andy: 1 } },
        { label: 'The quiet vendor who wants cash and silence', scores: { ron: 3, donna: 1 } },
        { label: 'The spectator with dry commentary', scores: { april: 3, donna: 1 } },
        { label: 'The one running merch, guest lists, and vibes', scores: { tom: 3, andy: 1 } },
      ],
    },
    {
      text: 'Someone asks you to stay late. You…',
      answers: [
        { label: 'Say yes and arrive with a plan already forming', scores: { leslie: 3, andy: 1 } },
        { label: 'Decline; evenings are non-negotiable', scores: { ron: 3, donna: 1 } },
        { label: 'Agree only if it can also be weirdly fun', scores: { april: 3, andy: 1 } },
        { label: 'Agree if there is a visible upside for you', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'A weak idea appears in a meeting. You…',
      answers: [
        { label: 'Redirect it into something useful without crushing anyone', scores: { leslie: 3, donna: 1 } },
        { label: 'End it in one sentence', scores: { ron: 3, april: 1 } },
        { label: 'Exaggerate it until the absurdity is obvious', scores: { april: 3, tom: 1 } },
        { label: 'Repackage it so you look visionary', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'How do you show care at work?',
      answers: [
        { label: 'Specific compliments, calendars, and thoughtful extras', scores: { leslie: 3, andy: 1 } },
        { label: 'Quiet respect and excellent tools', scores: { ron: 3, donna: 1 } },
        { label: 'Shared disdain for something ridiculous', scores: { april: 3, ron: 1 } },
        { label: 'Hype, polish, and high standards for appearance', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'A famous person visits your town. You…',
      answers: [
        { label: 'Overprepare with local context and hospitality', scores: { leslie: 3, andy: 1 } },
        { label: 'Avoid them; attention is a tax', scores: { ron: 3, april: 1 } },
        { label: 'Act deliberately unimpressed', scores: { april: 3, donna: 1 } },
        { label: 'Secure a photo and a story you can use later', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Which working style feels closest to yours?',
      answers: [
        { label: 'Enthusiastic, loyal, and slightly overcommitted', scores: { leslie: 3, andy: 1 } },
        { label: 'Independent, private, and hard to impress', scores: { ron: 3, april: 1 } },
        { label: 'Observant, sarcastic, and selectively soft', scores: { april: 3, donna: 1 } },
        { label: 'Ambitious, stylish, and always pitching', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Budgets get cut. Your reaction is…',
      answers: [
        { label: 'Fight for the work with evidence and heart', scores: { leslie: 3, andy: 1 } },
        { label: 'Welcome the reduction in bureaucracy', scores: { ron: 3, april: 1 } },
        { label: 'Suggest cutting the cheerful parts first, for the bit', scores: { april: 3, tom: 1 } },
        { label: 'Protect the events that keep the image strong', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'After a long day, you recharge by…',
      answers: [
        { label: 'Planning tomorrow with someone who shares the mission', scores: { leslie: 3, andy: 1 } },
        { label: 'Hands-on solitude and no notifications', scores: { ron: 3, donna: 1 } },
        { label: 'Something dark, quiet, and socially unavailable', scores: { april: 3, ron: 1 } },
        { label: 'Dressing up and going somewhere that feels earned', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'Someone talks down your hometown. You…',
      answers: [
        { label: 'Defend it with specifics and pride', scores: { leslie: 3, andy: 1 } },
        { label: 'Agree lightly, then go do your own thing', scores: { ron: 3, april: 1 } },
        { label: 'Defend it sideways, through sarcasm', scores: { april: 3, leslie: 1 } },
        { label: 'Highlight the nightlife, style, and hustle', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'What do you want to be known for later?',
      answers: [
        { label: 'Making the place better for people', scores: { leslie: 3, andy: 1 } },
        { label: 'Staying true without needing applause', scores: { ron: 3, donna: 1 } },
        { label: 'Never becoming fake, even when you cared', scores: { april: 3, ron: 1 } },
        { label: 'Living well and looking like you meant it', scores: { donna: 3, tom: 1 } },
      ],
    },
  ],
}

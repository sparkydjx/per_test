import type { Quiz } from '../types.ts'

export const parksAndRecreationQuiz: Quiz = {
  id: 'parks-and-recreation',
  title: 'Parks and Recreation',
  world: 'Sitcom',
  tag: 'Who are you in Pawnee?',
  summary: 'A separate test for the Parks Department. Your Friends and Office results do not transfer to City Hall.',
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
      text: 'City Hall is chaos again. You…',
      answers: [
        { label: 'Open a binder and start assigning tasks', scores: { leslie: 3, donna: 1 } },
        { label: 'Leave. This is why government fails.', scores: { ron: 3, april: 1 } },
        { label: 'Watch it burn, then comment dryly', scores: { april: 3, tom: 1 } },
        { label: 'Turn it into a networking opportunity', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'A free Saturday in Pawnee looks like…',
      answers: [
        { label: 'A harvest festival committee meeting, obviously', scores: { leslie: 3, andy: 1 } },
        { label: 'Alone, outdoors, with a steak and silence', scores: { ron: 3, donna: 1 } },
        { label: 'Shopping, brunch, and a very expensive spa', scores: { donna: 3, tom: 1 } },
        { label: 'A band practice that becomes a party', scores: { andy: 3, tom: 1 } },
      ],
    },
    {
      text: 'Your desk (or workspace) says…',
      answers: [
        { label: 'Photos of friends, awards, and a waffles mug', scores: { leslie: 3, andy: 1 } },
        { label: 'Minimal. Possibly a hunting knife.', scores: { ron: 3, april: 1 } },
        { label: 'Dark humor, animal stickers, zero effort', scores: { april: 3, ron: 1 } },
        { label: 'Designer everything. Also a business card stack.', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'When a friend is spiraling, you…',
      answers: [
        { label: 'Plan a surprise party with a scrapbook', scores: { leslie: 3, andy: 1 } },
        { label: 'Offer whiskey and one true sentence', scores: { ron: 3, donna: 1 } },
        { label: 'Show up with snacks and zero judgment', scores: { andy: 3, leslie: 1 } },
        { label: 'Remind them they are fabulous. Then Treat Yo Self.', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'Your approach to work is…',
      answers: [
        { label: 'Overdeliver. Public service is a calling.', scores: { leslie: 3, donna: 1 } },
        { label: 'Do less. Protect the morning. Clock out.', scores: { ron: 3, april: 1 } },
        { label: 'Do the bare minimum until something fun appears', scores: { april: 3, andy: 1 } },
        { label: 'Monetize every idea. Entertainment 720.', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'A town hall gets heated. Your move:',
      answers: [
        { label: 'Win them over with facts, charts, and heart', scores: { leslie: 3, tom: 1 } },
        { label: 'Sit back. Democracy is a mistake.', scores: { ron: 3, april: 1 } },
        { label: 'Say something unhelpful on purpose', scores: { april: 3, andy: 1 } },
        { label: 'Redirect to the afterparty / brand opportunity', scores: { tom: 3, andy: 1 } },
      ],
    },
    {
      text: 'You are most annoyed by…',
      answers: [
        { label: 'People who do not care about their community', scores: { leslie: 3, andy: 1 } },
        { label: 'Meetings, feelings, and unnecessary rules', scores: { ron: 3, april: 1 } },
        { label: 'Forced enthusiasm and team-building', scores: { april: 3, ron: 1 } },
        { label: 'Cheap taste and people who waste my time', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'If Pawnee had a motto for you, it would be:',
      answers: [
        { label: 'Literally the best.', scores: { leslie: 3, andy: 1 } },
        { label: 'I know more than you.', scores: { ron: 3, donna: 1 } },
        { label: 'Whatever. (secretly invested)', scores: { april: 3, ron: 1 } },
        { label: 'Treat yo self.', scores: { donna: 3, tom: 1 } },
      ],
    },
  ],
}

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
    {
      text: 'A pit needs to become a park. You…',
      answers: [
        { label: 'Form a committee, a subcommittee, and a dream', scores: { leslie: 3, andy: 1 } },
        { label: 'Fill it with dirt and walk away', scores: { ron: 3, april: 1 } },
        { label: 'Suggest turning it into a haunted attraction', scores: { april: 3, tom: 1 } },
        { label: 'Pitch sponsorships and a launch party', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Breakfast food hierarchy, according to you:',
      answers: [
        { label: 'Waffles are a love language', scores: { leslie: 3, andy: 1 } },
        { label: 'Eggs, bacon, and no conversation', scores: { ron: 3, donna: 1 } },
        { label: 'Coffee. Maybe. Do not talk to me.', scores: { april: 3, ron: 1 } },
        { label: 'Brunch is a lifestyle brand', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'Your ideal Pawnee festival role:',
      answers: [
        { label: 'Organizer, emcee, and emotional support', scores: { leslie: 3, andy: 1 } },
        { label: 'Meat vendor. Cash only. No small talk.', scores: { ron: 3, donna: 1 } },
        { label: 'Judgy spectator with a lemonade', scores: { april: 3, donna: 1 } },
        { label: 'Merch table and VIP wristbands', scores: { tom: 3, andy: 1 } },
      ],
    },
    {
      text: 'Someone asks you to stay late. You…',
      answers: [
        { label: 'Yes. Also I brought snacks and a timeline.', scores: { leslie: 3, andy: 1 } },
        { label: 'Absolutely not. My evenings are sacred.', scores: { ron: 3, donna: 1 } },
        { label: 'Sure, if we can make it weird', scores: { april: 3, andy: 1 } },
        { label: 'Only if there is a networking upside', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'How do you handle a bad idea in a meeting?',
      answers: [
        { label: 'Redirect it into something useful and kind', scores: { leslie: 3, donna: 1 } },
        { label: 'Kill it with one sentence', scores: { ron: 3, april: 1 } },
        { label: 'Make it worse until people see the point', scores: { april: 3, tom: 1 } },
        { label: 'Rebrand it so I look visionary', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Your love language at work is…',
      answers: [
        { label: 'Compliments, calendars, and thoughtful gifts', scores: { leslie: 3, andy: 1 } },
        { label: 'Respectful silence and excellent tools', scores: { ron: 3, donna: 1 } },
        { label: 'Shared hatred of something dumb', scores: { april: 3, ron: 1 } },
        { label: 'Hyping people up and looking expensive', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'A celebrity visits Pawnee. You…',
      answers: [
        { label: 'Prepare a binder of local history and snacks', scores: { leslie: 3, andy: 1 } },
        { label: 'Avoid them. Fame is a tax.', scores: { ron: 3, april: 1 } },
        { label: 'Act unimpressed on purpose', scores: { april: 3, donna: 1 } },
        { label: 'Get a photo for the brand and the feed', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Your spirit animal in the department is…',
      answers: [
        { label: 'A golden retriever with a clipboard', scores: { leslie: 3, andy: 1 } },
        { label: 'A bear that wants to be left alone', scores: { ron: 3, april: 1 } },
        { label: 'A black cat judging the group chat', scores: { april: 3, donna: 1 } },
        { label: 'A peacock with a business plan', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'Budget cuts hit Parks. Your reaction:',
      answers: [
        { label: 'Fight City Council with data and heart', scores: { leslie: 3, andy: 1 } },
        { label: 'Celebrate. Smaller government wins.', scores: { ron: 3, april: 1 } },
        { label: 'Suggest cutting the fun parts for the bit', scores: { april: 3, tom: 1 } },
        { label: 'Protect the events that make us look good', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'After a long day, you recharge by…',
      answers: [
        { label: 'Planning tomorrow’s wins with a friend', scores: { leslie: 3, andy: 1 } },
        { label: 'Wood, whiskey, and zero notifications', scores: { ron: 3, donna: 1 } },
        { label: 'Watching something dark and refusing eye contact', scores: { april: 3, ron: 1 } },
        { label: 'Dressing up and going somewhere nice', scores: { donna: 3, tom: 1 } },
      ],
    },
    {
      text: 'Someone doubts Pawnee. You…',
      answers: [
        { label: 'Deliver a passionate civic TED Talk', scores: { leslie: 3, andy: 1 } },
        { label: 'Agree, then go fishing', scores: { ron: 3, april: 1 } },
        { label: 'Defend it sarcastically, which still counts', scores: { april: 3, leslie: 1 } },
        { label: 'Highlight the nightlife and the hustle', scores: { tom: 3, donna: 1 } },
      ],
    },
    {
      text: 'What do you want your Pawnee legacy to be?',
      answers: [
        { label: 'That I made this place better for people', scores: { leslie: 3, andy: 1 } },
        { label: 'That I stayed true and unbothered', scores: { ron: 3, donna: 1 } },
        { label: 'That I never sold out to sincerity… mostly', scores: { april: 3, ron: 1 } },
        { label: 'That I lived well and looked better doing it', scores: { donna: 3, tom: 1 } },
      ],
    },
  ],
}

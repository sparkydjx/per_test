import type { Quiz } from '../types.ts'

export const strangerThingsQuiz: Quiz = {
  id: 'stranger-things',
  title: 'Stranger Things',
  world: 'Hawkins',
  tag: 'Who are you in the party?',
  summary: 'Bikes, basements, and bad lighting. This quiz only scores Hawkins — your other results stay in their own worlds.',
  resultLabel: 'The party needs you as',
  theme: {
    accent: '#ff4d4d',
    accentText: '#190404',
    wash: 'rgba(255, 77, 77, 0.12)',
  },
  characters: [
    {
      id: 'eleven',
      name: 'Eleven',
      role: 'The power',
      blurb: 'You feel everything at once and still walk into the dark. You are learning names for things you already survived. Friends are the first real home.',
    },
    {
      id: 'steve',
      name: 'Steve Harrington',
      role: 'The babysitter',
      blurb: 'You started as the shiny one and became the reliable one. Hair still matters. So does the nail bat. You will drive, you will joke, you will stay.',
    },
    {
      id: 'dustin',
      name: 'Dustin Henderson',
      role: 'The brain',
      blurb: 'You talk fast because the idea is already leaving. Science, radio, and unearned confidence in a plan. You make the party smarter and louder.',
    },
    {
      id: 'hopper',
      name: 'Jim Hopper',
      role: 'The wall',
      blurb: 'You growl so you do not have to say I love you. You keep watch, you break rules for the right reasons, and you would burn the lab down twice.',
    },
    {
      id: 'max',
      name: 'Max Mayfield',
      role: 'The skate',
      blurb: 'You do not audition for belonging. You arrive with a board and a look. Soft is not the same as weak, and you will not be managed.',
    },
    {
      id: 'nancy',
      name: 'Nancy Wheeler',
      role: 'The investigator',
      blurb: 'You want the story that is actually true. Notebook, nerve, and a gun you learned to hold. Cute is a costume. The byline is the point.',
    },
  ],
  questions: [
    {
      text: 'Something is wrong in this town. You…',
      answers: [
        { label: 'Go toward the feeling nobody else can name', scores: { eleven: 3, hopper: 1 } },
        { label: 'Grab the keys. I’ll take the kids.', scores: { steve: 3, hopper: 1 } },
        { label: 'Build a theory, then a gadget', scores: { dustin: 3, nancy: 1 } },
        { label: 'Follow the paper trail until it bleeds', scores: { nancy: 3, max: 1 } },
      ],
    },
    {
      text: 'In the party, you are the one who…',
      answers: [
        { label: 'Does the impossible thing, then needs a waffle', scores: { eleven: 3, dustin: 1 } },
        { label: 'Keeps morale up and the walkie charged', scores: { steve: 3, dustin: 1 } },
        { label: 'Names the monster before anyone else will', scores: { dustin: 3, nancy: 1 } },
        { label: 'Says the quiet, brutal true thing', scores: { max: 3, hopper: 1 } },
      ],
    },
    {
      text: 'Your comfort object on a bad night:',
      answers: [
        { label: 'A person who says my name like it is safe', scores: { eleven: 3, hopper: 1 } },
        { label: 'A stupid movie and a full fridge', scores: { steve: 3, max: 1 } },
        { label: 'A radio, a map, a friend on the other end', scores: { dustin: 3, eleven: 1 } },
        { label: 'Headphones loud enough to drown the Upside Down', scores: { max: 3, nancy: 1 } },
      ],
    },
    {
      text: 'Adults are lying. Your move:',
      answers: [
        { label: 'I already knew. I felt it.', scores: { eleven: 3, max: 1 } },
        { label: 'Fine. I’ll do the responsible thing anyway.', scores: { steve: 3, hopper: 1 } },
        { label: 'Document everything. Then publish.', scores: { nancy: 3, dustin: 1 } },
        { label: 'Kick the door. Ask questions after.', scores: { hopper: 3, max: 1 } },
      ],
    },
    {
      text: 'Pick a Hawkins hangout.',
      answers: [
        { label: 'The cabin. Quiet, woods, one light on.', scores: { eleven: 3, hopper: 1 } },
        { label: 'The mall. Pretend it is still 1985.', scores: { steve: 3, nancy: 1 } },
        { label: 'The basement. Campaign night. Dice.', scores: { dustin: 3, eleven: 1 } },
        { label: 'The quarry road, skating until the sky goes pink', scores: { max: 3, steve: 1 } },
      ],
    },
    {
      text: 'How do you show love when it matters?',
      answers: [
        { label: 'I stay in the fight beside you', scores: { eleven: 3, nancy: 1 } },
        { label: 'I show up with a bat and a ride home', scores: { steve: 3, hopper: 1 } },
        { label: 'I explain the plan until you believe we can win', scores: { dustin: 3, nancy: 1 } },
        { label: 'I tell you the truth, even if it is ugly', scores: { max: 3, hopper: 1 } },
      ],
    },
    {
      text: 'Your least favorite role in the group:',
      answers: [
        { label: 'Being treated like a weapon, not a person', scores: { eleven: 3, max: 1 } },
        { label: 'Being the joke when I am trying to help', scores: { steve: 3, dustin: 1 } },
        { label: 'Being told to wait in the car', scores: { dustin: 3, nancy: 1 } },
        { label: 'Being managed by people who do not get it', scores: { max: 3, nancy: 1 } },
      ],
    },
    {
      text: 'If Hawkins is saved, you want to have been…',
      answers: [
        { label: 'The one who opened the gate — and closed it', scores: { eleven: 3, hopper: 1 } },
        { label: 'The one who got everyone out', scores: { steve: 3, hopper: 1 } },
        { label: 'The one who figured it out in time', scores: { dustin: 3, nancy: 1 } },
        { label: 'The one who would not look away', scores: { nancy: 3, max: 1 } },
      ],
    },
  ],
}

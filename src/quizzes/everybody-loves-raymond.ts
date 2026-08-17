import type { Quiz } from '../types.ts'

export const everybodyLovesRaymondQuiz: Quiz = {
  id: "everybody-loves-raymond",
  title: "Everybody Loves Raymond",
  world: "Sitcom",
  tag: "Who are you at the Barones'?",
  summary: "A separate test for the house across the street. Your Office result does not transfer to Lynbrook.",
  resultLabel: "The Barones need you as",
  theme: {
    accent: "#e07050",
    accentText: "#1a0a08",
    wash: "rgba(224, 112, 80, 0.16)",
  },
  characters: [
    {
      id: "ray",
      name: "Ray Barone",
      role: "The favorite",
      blurb: "You want a peaceful house, a working remote, and the kind of love that does not require a project plan. Conflict makes you funny, then scarce. You are good at being liked, which is both your gift and your alibi. People forgive you faster than they should, and some part of you has learned to count on that. You show up for the big moments and mysteriously vanish for the laundry. Under the jokes is a real attachment to family — you just prefer it at a volume that still lets you watch the game. Keep the charm. Keep the heart. Maybe pick up a towel before someone has to ask twice.",
    },
    {
      id: "debra",
      name: "Debra Barone",
      role: "The exhausted realist",
      blurb: "You keep the household upright while everyone else treats competence like a personality trait they do not need. You are sharp, tired, and correct more often than is comfortable for the room. Love, for you, looks like labor: meals, schedules, the emotional weather report nobody else is tracking. You can be warm. You can also detonate a sentence that ends the debate. People call you intense when what you actually want is a partner, not an audience. Your gift is refusing to pretend the mess is fine. Your challenge is carrying so much that appreciation starts to feel like folklore. You deserve help that arrives before you have to stage a scene.",
    },
    {
      id: "robert",
      name: "Robert Barone",
      role: "The overlooked",
      blurb: "You have been standing slightly to the left of the spotlight your whole life, and you can still point to the exact moment it moved. You try hard. You narrate the trying. You want credit for showing up, for surviving, for being the taller, more complicated one. Jealousy is not your whole personality, but it does keep a packed bag by the door. Loyalty lives in you anyway — messy, earnest, a little desperate to be chosen back. Your gift is devotion that keeps coming back even after the joke is on you. Your risk is turning every room into a comparison. You are allowed to want love without auditioning for it.",
    },
    {
      id: "marie",
      name: "Marie Barone",
      role: "The matriarch",
      blurb: "You love people by improving them, feeding them, and mentioning — lightly, constantly — how it could have been done better. Care is not quiet with you. It arrives with a casserole, a critique, and the unshakable belief that your way is the kind way. You notice dust, ingratitude, and who got the bigger piece. Family is your kingdom, and kingdoms require standards. People may call it control. You call it not letting everyone starve, spiritually or otherwise. Your gift is making a house feel like a house. Your challenge is leaving a little room for other people's versions of love. You already know you are right. The trick is letting them live anyway.",
    },
    {
      id: "frank",
      name: "Frank Barone",
      role: "The grouch",
      blurb: "You say the quiet part with mustard on it and call that honesty. Affection, for you, is proximity plus an insult that means I am still here. You want the chair, the paper, the leftover, and as few speeches as possible. People think you do not care. You care in a narrow, durable way: protect the house, mock the nonsense, never perform a feeling you could just live. Wisdom leaks out of you when nobody is asking for a lesson. Your gift is cutting through the family opera with one ugly, useful sentence. Your risk is using bluntness as a force field until nobody tries. Stay. Eat. Grumble. That is a love language too.",
    },
    {
      id: "amy",
      name: "Amy MacDougall-Barone",
      role: "The peacemaker",
      blurb: "You walk into a loud family and try to make it kinder without making it a project. Sweetness is not naivete on you — it is a strategy for surviving other people's unfinished business. You apologize first, include everyone, and still somehow become the person who holds the awkward pause. Faith, manners, and hope do real work in your week. You want a gentle life and keep finding yourself related to people who communicate in slamming doors. Your gift is assuming good intentions until the evidence is overwhelming. Your challenge is shrinking so the room can keep its volume. Stay soft. Stay present. You do not have to absorb every fight to be good.",
    },
  ],
  questions: [
    {
      text: "Family walks in without knocking. What do you do?",
      answers: [
        {
          label: "Pretend you did not hear it and stay on the couch",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Meet them at the door with an actual boundary",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "Light up, then wonder why they did not come to you first",
          scores: {
            robert: 3,
            marie: 1,
          },
        },
        {
          label: "Come in like you live there, because you might as well",
          scores: {
            marie: 3,
            frank: 1,
          },
        },
        {
          label: "Grunt a hello and go back to whatever you were doing",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "You have a rare free Saturday. How do you spend it?",
      answers: [
        {
          label: "Sports, a snack, and as little conversation as possible",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Catch up on everything the week quietly stole from you",
          scores: {
            debra: 3,
            marie: 1,
          },
        },
        {
          label: "Plan something with a partner and hope it finally counts",
          scores: {
            robert: 3,
            amy: 1,
          },
        },
        {
          label: "Cook for people whether they asked or not",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "Keep the peace by going along with whoever planned it",
          scores: {
            amy: 3,
            robert: 1,
          },
        },
      ],
    },
    {
      text: "Dinner turns into a family argument. What is your move?",
      answers: [
        {
          label: "Joke until someone changes the subject",
          scores: {
            ray: 3,
            amy: 1,
          },
        },
        {
          label: "Name the real issue even if it kills the mood",
          scores: {
            debra: 3,
            robert: 1,
          },
        },
        {
          label: "Make it about how you never get the benefit of the doubt",
          scores: {
            robert: 3,
            debra: 1,
          },
        },
        {
          label: "Insult everyone in one sentence and ask for bread",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Smooth it over with kindness and a subject change",
          scores: {
            amy: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "How do you usually show people you love them?",
      answers: [
        {
          label: "Do the unglamorous work and hope someone notices",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "Grand gestures that still want a little applause",
          scores: {
            robert: 3,
            marie: 1,
          },
        },
        {
          label: "Feed them, then mention what you sacrificed",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "Sit nearby, insult them lightly, and stay",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Be gentle, include everyone, and apologize first",
          scores: {
            amy: 3,
            robert: 1,
          },
        },
      ],
    },
    {
      text: "Look at the house. Who actually keeps it running?",
      answers: [
        {
          label: "Whoever else is already doing it, honestly",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "You, while narrating how helpful you are being",
          scores: {
            robert: 3,
            ray: 1,
          },
        },
        {
          label: "You, and you will redo it if it was done wrong",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "Not you, unless it involves the chair or the remote",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "You, quietly, because you do not want a fight",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
    {
      text: "Someone criticizes a meal you made. What happens next?",
      answers: [
        {
          label: "Laugh it off and suggest takeout",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Take it personally because you did all the work",
          scores: {
            debra: 3,
            marie: 1,
          },
        },
        {
          label: "Explain why your version is the only correct one",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "Say what everyone is thinking and keep eating",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Find something nice to say and pass the dish",
          scores: {
            amy: 3,
            robert: 1,
          },
        },
      ],
    },
    {
      text: "In your family, what role do you keep getting cast in?",
      answers: [
        {
          label: "The one people forgive before the apology lands",
          scores: {
            ray: 3,
            amy: 1,
          },
        },
        {
          label: "The one who is supposed to hold it all together",
          scores: {
            debra: 3,
            marie: 1,
          },
        },
        {
          label: "The one compared against the favorite",
          scores: {
            robert: 3,
            frank: 1,
          },
        },
        {
          label: "The one who decides how things should be done",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "The one who stays out of it until food is involved",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "A relative asks for a favor you do not want to do. What do you say?",
      answers: [
        {
          label: "Yes, then stall until the problem solves itself",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Yes, then remember this the next time they forget you",
          scores: {
            debra: 3,
            robert: 1,
          },
        },
        {
          label: "Yes, loudly, so the effort cannot be missed",
          scores: {
            robert: 3,
            marie: 1,
          },
        },
        {
          label: "Yes, and also here is how you should have asked",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "Yes, because saying no feels like starting a war",
          scores: {
            amy: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "What does a good night at home actually look like for you?",
      answers: [
        {
          label: "The game on, nobody needing a talk",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "The house finally quiet and the list finally shorter",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "Feeling chosen by the person you showed up for",
          scores: {
            robert: 3,
            amy: 1,
          },
        },
        {
          label: "Chair, leftover, and no speeches",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Everyone getting along without you having to referee",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
    {
      text: "Holiday at your place. What is your job?",
      answers: [
        {
          label: "Host, cook, and still somehow do the dishes",
          scores: {
            debra: 3,
            marie: 1,
          },
        },
        {
          label: "Arrive with a story about how hard it was to get here",
          scores: {
            robert: 3,
            ray: 1,
          },
        },
        {
          label: "Run the kitchen and the commentary",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "Eat early, mock the traditions, stay until pie",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Bring something sweet and try to keep the peace",
          scores: {
            amy: 3,
            robert: 1,
          },
        },
      ],
    },
    {
      text: "Someone gets compared to a sibling or a partner. How do you react?",
      answers: [
        {
          label: "Enjoy being the one they like, then feel a little guilty",
          scores: {
            ray: 3,
            marie: 1,
          },
        },
        {
          label: "Feel it in your chest and bring receipts later",
          scores: {
            robert: 3,
            debra: 1,
          },
        },
        {
          label: "Make the comparison yourself; it is just being honest",
          scores: {
            marie: 3,
            frank: 1,
          },
        },
        {
          label: "Turn it into a joke that still lands a little mean",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Redirect the conversation before anyone gets hurt",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
    {
      text: "How do you feel about privacy in a family that lives too close?",
      answers: [
        {
          label: "Want it, then cave the second someone knocks",
          scores: {
            ray: 3,
            amy: 1,
          },
        },
        {
          label: "Need a closed door more than anyone admits",
          scores: {
            debra: 3,
            robert: 1,
          },
        },
        {
          label: "If they loved you, they would not need so much space",
          scores: {
            marie: 3,
            robert: 1,
          },
        },
        {
          label: "Privacy is just an excuse to miss a good leftover",
          scores: {
            frank: 3,
            marie: 1,
          },
        },
        {
          label: "Knock, wait, and still try not to make it a thing",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
    {
      text: "You were wrong. What do you do?",
      answers: [
        {
          label: "Joke, stall, and hope the moment expires",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Admit it, then point out the part that was still unfair",
          scores: {
            debra: 3,
            robert: 1,
          },
        },
        {
          label: "Apologize in a way that still asks to be comforted",
          scores: {
            robert: 3,
            amy: 1,
          },
        },
        {
          label: "Reframe it as care they misunderstood",
          scores: {
            marie: 3,
            ray: 1,
          },
        },
        {
          label: "Grumble an admission and change the channel",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "What annoys you fastest in family life?",
      answers: [
        {
          label: "Being asked to do one more thing during the game",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Doing everything and still being treated like the problem",
          scores: {
            debra: 3,
            robert: 1,
          },
        },
        {
          label: "Watching someone else get credit you never get",
          scores: {
            robert: 3,
            debra: 1,
          },
        },
        {
          label: "People who will not take advice from someone who knows",
          scores: {
            marie: 3,
            frank: 1,
          },
        },
        {
          label: "A room that turns kind people into a shouting match",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
    {
      text: "The family across the street — or in your kitchen — is always around. How do you live with that?",
      answers: [
        {
          label: "Complain, then let them in anyway",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Set rules that last until the next surprise visit",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "Show up so often they cannot forget you exist",
          scores: {
            robert: 3,
            marie: 1,
          },
        },
        {
          label: "Treat their house like an extension of yours",
          scores: {
            frank: 3,
            marie: 1,
          },
        },
        {
          label: "Be polite, bring something, and try not to take sides",
          scores: {
            amy: 3,
            robert: 1,
          },
        },
      ],
    },
    {
      text: "Work comes up at the table. What do you do?",
      answers: [
        {
          label: "Keep it light; the job is mostly a reason to watch sports",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Talk about the load you are carrying at home, not the title",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "Make the job sound impressive so it might finally count",
          scores: {
            robert: 3,
            marie: 1,
          },
        },
        {
          label: "Mock the whole idea of caring that much",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "Ask a kind question and let someone else have the floor",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
    {
      text: "Comfort food is on the table. What does it mean to you?",
      answers: [
        {
          label: "A reason to stay seated and avoid the next chore",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Proof someone finally took care of the details",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "A test of whether they made it the way you taught them",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "The only part of the gathering that does not need a speech",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
        {
          label: "A chance to say thank you before anyone starts scoring it",
          scores: {
            amy: 3,
            robert: 1,
          },
        },
      ],
    },
    {
      text: "After a fight, what is your first instinct?",
      answers: [
        {
          label: "Hide in a routine until it blows over",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "Need the issue actually resolved, not just paused",
          scores: {
            debra: 3,
            marie: 1,
          },
        },
        {
          label: "Check whether you are still loved after being difficult",
          scores: {
            robert: 3,
            amy: 1,
          },
        },
        {
          label: "Act like nothing happened and wait for them to come around",
          scores: {
            marie: 3,
            frank: 1,
          },
        },
        {
          label: "Offer a truce, even if you were not the problem",
          scores: {
            amy: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "What do you actually want from family?",
      answers: [
        {
          label: "To be liked without having to work that hard for it",
          scores: {
            ray: 3,
            frank: 1,
          },
        },
        {
          label: "A partner, not a child you also have to parent",
          scores: {
            debra: 3,
            amy: 1,
          },
        },
        {
          label: "To be chosen as loudly as everybody else",
          scores: {
            robert: 3,
            marie: 1,
          },
        },
        {
          label: "To keep them close enough that they cannot stray",
          scores: {
            marie: 3,
            robert: 1,
          },
        },
        {
          label: "To be left alone until it is time to eat",
          scores: {
            frank: 3,
            ray: 1,
          },
        },
      ],
    },
    {
      text: "Years from now, what do you want them to remember about you?",
      answers: [
        {
          label: "That you kept the room laughing when it got too heavy",
          scores: {
            ray: 3,
            amy: 1,
          },
        },
        {
          label: "That you made the house work when nobody else would",
          scores: {
            debra: 3,
            marie: 1,
          },
        },
        {
          label: "That you kept showing up even when you felt second",
          scores: {
            robert: 3,
            amy: 1,
          },
        },
        {
          label: "That the family held together because you insisted",
          scores: {
            marie: 3,
            debra: 1,
          },
        },
        {
          label: "That you tried to make a loud house a little kinder",
          scores: {
            amy: 3,
            debra: 1,
          },
        },
      ],
    },
  ],
}

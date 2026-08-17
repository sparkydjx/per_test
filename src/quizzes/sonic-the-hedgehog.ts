import type { Quiz } from '../types.ts'

export const sonicTheHedgehogQuiz: Quiz = {
  id: 'sonic-the-hedgehog',
  title: 'Sonic the Hedgehog',
  world: 'Adventure',
  tag: 'Which hero are you?',
  summary: 'A separate test for Green Hill and beyond. Your sitcom results do not transfer to the Tornado — and Shadow still will not smile about it.',
  resultLabel: 'You are racing as',
  theme: {
    accent: '#2f9bff',
    accentText: '#041018',
    wash: 'rgba(47, 155, 255, 0.14)',
  },
  characters: [
    {
      id: 'sonic',
      name: 'Sonic',
      role: 'The freerunner',
      blurb:
        'You move first and trust the wind to sort the details. Freedom is not a slogan for you — it is the whole point. You joke through danger, hate cages of every kind, and somehow make heroism look like a casual afternoon. People call you reckless. You call it refusing to wait while someone else suffers. Loyalty sneaks up on you through shared adventures, chili dogs, and the friends who keep up. Your gift is turning fear into motion. Your risk is outrunning your own feelings. When the world freezes, you are already gone — and somehow that is how you save it.',
    },
    {
      id: 'tails',
      name: 'Tails',
      role: 'The inventor',
      blurb:
        'You solve problems with tools, plans, and a brain that treats panic as unfinished homework. Being the sidekick was never your whole story — you are the reason the rescue works. Quiet competence is your flex. You stick with the people who believed in you before you could fly, and you still overprepare because caring looks like checklists in your hands. In a crisis you become strangely calm: here is the map, here is the machine, here is the next step. Your gift is making impossible odds practical. Your challenge is remembering you do not have to earn belonging with inventions alone.',
    },
    {
      id: 'knuckles',
      name: 'Knuckles',
      role: 'The guardian',
      blurb:
        'Duty sits heavy on your shoulders and you carry it anyway. You are blunt, strong, and allergic to tricks that waste time. Protecting what matters is not a performance for you — it is the job. People may call you stubborn or gullible when the world gets complicated. What they miss is how seriously you take trust once it is given. Softness exists, usually as loyalty rather than speeches. Your gift is holding the line when cooler personalities want to improvise. Your risk is refusing help until the mountain is already shaking. Stand your ground. Punch the problem. Guard the emerald.',
    },
    {
      id: 'amy',
      name: 'Amy Rose',
      role: 'The heart',
      blurb:
        'You lead with feeling and follow through with a hammer. Passion is your engine: love, justice, friendship, and the refusal to be sidelined. People underestimate you because you care out loud. Then you show up prepared, fierce, and surprisingly strategic. You want connection and adventure in the same sentence. Your gift is making courage emotional without making it fragile. Your challenge is not letting one crush, rivalry, or disappointment become the whole map. At your best, you remind the team that speed and strength still need heart — and that heart can swing hard.',
    },
    {
      id: 'shadow',
      name: 'Shadow',
      role: 'The rival',
      blurb:
        'You keep your distance, carry old weight, and still show up when the stakes are absolute. Power without purpose disgusts you. Purpose without honesty disgusts you more. People read you as cold; what you are practicing is control. You do not need a crowd. You need a reason. Rivalry sharpens you, especially against anyone who makes heroism look easy. Your gift is decisive force when hesitation would cost everything. Your risk is confusing isolation with strength. Under the edge is loyalty that does not advertise itself — and a promise you refuse to break.',
    },
    {
      id: 'rouge',
      name: 'Rouge',
      role: 'The operator',
      blurb:
        'You charm, calculate, and always know where the exits and the valuables are. Style is strategy. Independence is non-negotiable. You can work with a team without surrendering your angle, and you collect information the way other people collect rings. People may call you selfish. You call it self-respect with excellent timing. Soft loyalty sneaks through anyway — usually for the few who can match your wit without needing you to shrink. Your gift is reading the room and taking the winning path. Your challenge is admitting when the treasure was never the jewel.',
    },
  ],
  questions: [
    {
      text: 'A rescue mission just went sideways. What do you do first?',
      answers: [
        { label: 'Sprint toward the trouble and invent the plan on the way', scores: { sonic: 3, amy: 1 } },
        { label: 'Scan for a gadget, route, or weakness nobody else saw', scores: { tails: 3, rouge: 1 } },
        { label: 'Plant yourself between the danger and the people behind you', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Rally everyone emotionally and refuse to leave anyone behind', scores: { amy: 3, sonic: 1 } },
        { label: 'Cut a cleaner deal with the situation and take the efficient path', scores: { rouge: 3, shadow: 2 } },
      ],
    },
    {
      text: 'What usually pulls you into a fight you did not start?',
      answers: [
        { label: 'Somebody trying to cage people or lock down a town', scores: { sonic: 3, amy: 1 } },
        { label: 'A friend who needs backup right now', scores: { tails: 3, sonic: 1 } },
        { label: 'A duty you already swore to protect', scores: { knuckles: 3, shadow: 1 } },
        { label: 'An injustice that hits you in the feelings', scores: { amy: 3, sonic: 1 } },
        { label: 'A personal score that still is not settled', scores: { shadow: 3, rouge: 1 } },
      ],
    },
    {
      text: 'How do you prefer to travel when time matters?',
      answers: [
        { label: 'As fast as possible. Speed is the strategy.', scores: { sonic: 3, shadow: 1 } },
        { label: 'In something you built or can repair mid-flight', scores: { tails: 3, rouge: 1 } },
        { label: 'On foot, steady, ready to dig in if needed', scores: { knuckles: 3, amy: 1 } },
        { label: 'With friends nearby so nobody faces it alone', scores: { amy: 3, tails: 1 } },
        { label: 'By the route with the best payoff and fewest witnesses', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'A teammate freezes in the middle of an attack. What do you do?',
      answers: [
        { label: 'Crack a joke, grab them, and keep moving', scores: { sonic: 3, amy: 1 } },
        { label: 'Give them one clear next step and a tool that helps', scores: { tails: 3, knuckles: 1 } },
        { label: 'Cover them and punch a hole through the threat', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Talk them back into courage out loud', scores: { amy: 3, tails: 1 } },
        { label: 'Handle the danger yourself so hesitation cannot spread', scores: { shadow: 3, rouge: 1 } },
      ],
    },
    {
      text: 'What bothers you most about a bad plan?',
      answers: [
        { label: 'It wastes time when people need help now', scores: { sonic: 3, amy: 1 } },
        { label: 'It ignores obvious details and breaks under pressure', scores: { tails: 3, rouge: 1 } },
        { label: 'It asks you to abandon your post or your promise', scores: { knuckles: 3, shadow: 1 } },
        { label: 'It treats people like they are disposable', scores: { amy: 3, sonic: 1 } },
        { label: 'It is inefficient, messy, and bad for your leverage', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'After a win, how do you usually act?',
      answers: [
        { label: 'Shrug it off and look for the next adventure', scores: { sonic: 3, rouge: 1 } },
        { label: 'Tune the machine and review what almost failed', scores: { tails: 3, knuckles: 1 } },
        { label: 'Check that what you were guarding is still safe', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Celebrate with the group and make sure everyone feels seen', scores: { amy: 3, sonic: 1 } },
        { label: 'Leave before the applause gets sentimental', scores: { shadow: 3, rouge: 2 } },
      ],
    },
    {
      text: 'Someone underestimates you on purpose. What do you do?',
      answers: [
        { label: 'Beat them so cleanly it becomes a joke', scores: { sonic: 3, amy: 1 } },
        { label: 'Prove them wrong with results, not speeches', scores: { tails: 3, knuckles: 1 } },
        { label: 'Tell them straight, then back it up with force if needed', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Get mad, get focused, and come back swinging', scores: { amy: 3, sonic: 1 } },
        { label: 'Let them keep the wrong read. It is useful.', scores: { rouge: 3, shadow: 2 } },
      ],
    },
    {
      text: 'What does “freedom” mean to you?',
      answers: [
        { label: 'No cages, no waiting, no one telling me to slow down', scores: { sonic: 3, rouge: 1 } },
        { label: 'Room to invent my own way through a problem', scores: { tails: 3, sonic: 1 } },
        { label: 'The right to protect what is mine without interference', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Being able to love and fight for people out loud', scores: { amy: 3, sonic: 1 } },
        { label: 'Choosing my own alliances and walking away when I want', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'You find a powerful gem with unknown risks. What do you do?',
      answers: [
        { label: 'Use it if it helps someone right now', scores: { sonic: 3, amy: 1 } },
        { label: 'Study it carefully before anyone touches it', scores: { tails: 3, rouge: 1 } },
        { label: 'Secure it and refuse to let the wrong hands near it', scores: { knuckles: 3, shadow: 2 } },
        { label: 'Ask how it could protect the people you care about', scores: { amy: 3, tails: 1 } },
        { label: 'Acquire it. Information and leverage are never wasted.', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'How do you like to spend quiet downtime?',
      answers: [
        { label: 'Running nowhere important, just because I can', scores: { sonic: 3, amy: 1 } },
        { label: 'Building, tinkering, or fixing something in the workshop', scores: { tails: 3, knuckles: 1 } },
        { label: 'Training alone and keeping watch', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Hanging with friends, shopping, or planning the next hangout', scores: { amy: 3, rouge: 1 } },
        { label: 'A private mission with a personal prize at the end', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'A rival keeps showing up in your life. How do you handle that?',
      answers: [
        { label: 'Race them. Banter. Maybe become weirdly bonded.', scores: { sonic: 3, amy: 1 } },
        { label: 'Learn from their methods and upgrade your own', scores: { tails: 3, rouge: 1 } },
        { label: 'Stay suspicious until they prove trustworthy', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Get personally invested and try to change the dynamic', scores: { amy: 3, sonic: 1 } },
        { label: 'Keep the rivalry useful and the feelings contained', scores: { shadow: 3, rouge: 2 } },
      ],
    },
    {
      text: 'The team needs a leader for the next stretch. What do you do?',
      answers: [
        { label: 'Lead by charging first and daring everyone to follow', scores: { sonic: 3, amy: 1 } },
        { label: 'Offer the plan, the map, and the backup options', scores: { tails: 3, rouge: 1 } },
        { label: 'Take command if the mission is about protection', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Keep morale high and make sure voices get heard', scores: { amy: 3, tails: 1 } },
        { label: 'Lead from the side and keep my own objective intact', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'What is your biggest weakness in a crisis?',
      answers: [
        { label: 'I move so fast I skip the feelings until later', scores: { sonic: 3, shadow: 1 } },
        { label: 'I overthink and assume I have to fix everything alone', scores: { tails: 3, amy: 1 } },
        { label: 'I trust too simply or dig in too hard', scores: { knuckles: 3, sonic: 1 } },
        { label: 'I take it personally and swing before I breathe', scores: { amy: 3, knuckles: 1 } },
        { label: 'I keep people at a distance even when help would work', scores: { shadow: 3, rouge: 1 } },
      ],
    },
    {
      text: 'Someone offers you a shortcut that feels shady. What do you do?',
      answers: [
        { label: 'Take a cleaner, faster route of my own instead', scores: { sonic: 3, tails: 1 } },
        { label: 'Inspect it until I know exactly what it costs', scores: { tails: 3, rouge: 1 } },
        { label: 'Refuse if it endangers what I am sworn to protect', scores: { knuckles: 3, amy: 1 } },
        { label: 'Reject it if it hurts people, no matter how useful', scores: { amy: 3, sonic: 1 } },
        { label: 'Use it if the upside is worth the risk', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'What do friends rely on you for most?',
      answers: [
        { label: 'Hope, momentum, and showing up when it counts', scores: { sonic: 3, amy: 1 } },
        { label: 'Solutions, inventions, and backup plans', scores: { tails: 3, rouge: 1 } },
        { label: 'Strength, honesty, and holding the line', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Heart, encouragement, and emotional bravery', scores: { amy: 3, tails: 1 } },
        { label: 'Cool-headed leverage when things get complicated', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'Eggman’s robots are everywhere. What is your approach?',
      answers: [
        { label: 'Bounce through them at top speed and laugh about it', scores: { sonic: 3, amy: 1 } },
        { label: 'Find the control system and shut the network down', scores: { tails: 3, rouge: 1 } },
        { label: 'Smash a path straight through the biggest threat', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Protect civilians first, then smash with feeling', scores: { amy: 3, sonic: 1 } },
        { label: 'Exploit a weak point and take something useful on the way', scores: { rouge: 3, shadow: 2 } },
      ],
    },
    {
      text: 'How do you handle being told to wait?',
      answers: [
        { label: 'Badly. Waiting feels like losing on purpose.', scores: { sonic: 3, amy: 1 } },
        { label: 'I use the time to prepare, repair, or research', scores: { tails: 3, rouge: 1 } },
        { label: 'I wait if the duty requires it — then I am ready', scores: { knuckles: 3, shadow: 1 } },
        { label: 'I get restless and check on everyone constantly', scores: { amy: 3, sonic: 1 } },
        { label: 'I wait only if patience improves my position', scores: { shadow: 3, rouge: 2 } },
      ],
    },
    {
      text: 'What kind of partner brings out your best?',
      answers: [
        { label: 'Someone who can keep up and not kill the fun', scores: { sonic: 3, amy: 1 } },
        { label: 'Someone who trusts my ideas and flies beside me', scores: { tails: 3, sonic: 1 } },
        { label: 'Someone honest who will not play games with loyalty', scores: { knuckles: 3, amy: 1 } },
        { label: 'Someone worth fighting for out loud', scores: { amy: 3, sonic: 1 } },
        { label: 'Someone competent who does not need constant warmth', scores: { shadow: 3, rouge: 2 } },
      ],
    },
    {
      text: 'When the adventure is over, what do you want people to say?',
      answers: [
        { label: 'That I kept everyone free and never quit', scores: { sonic: 3, amy: 1 } },
        { label: 'That my ideas actually saved the day', scores: { tails: 3, rouge: 1 } },
        { label: 'That I guarded what mattered no matter what', scores: { knuckles: 3, shadow: 1 } },
        { label: 'That I cared fiercely and made the team braver', scores: { amy: 3, sonic: 1 } },
        { label: 'That I got the result — and looked good doing it', scores: { rouge: 3, shadow: 1 } },
      ],
    },
    {
      text: 'One last gut check: what drives you most?',
      answers: [
        { label: 'The thrill of the run and the chance to help', scores: { sonic: 3, amy: 1 } },
        { label: 'Figuring things out and proving I belong', scores: { tails: 3, knuckles: 1 } },
        { label: 'Honor, strength, and keeping my word', scores: { knuckles: 3, shadow: 1 } },
        { label: 'Love, loyalty, and emotional guts', scores: { amy: 3, sonic: 1 } },
        { label: 'Power, purpose, and unfinished business', scores: { shadow: 3, rouge: 1 } },
      ],
    },
  ],
}

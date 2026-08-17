import type { Quiz } from '../types.ts'

export const dandysWorldQuiz: Quiz = {
  id: 'dandys-world',
  title: "Dandy's World",
  world: 'Gardenview',
  tag: 'Which Toon are you?',
  summary:
    "A separate test for Gardenview's cast. Your Office result does not transfer to the elevator — and Twisted versions still do not count as a personality upgrade.",
  resultLabel: 'You are surviving as',
  theme: {
    accent: '#ff7eb6',
    accentText: '#1a0610',
    wash: 'rgba(255, 126, 182, 0.14)',
  },
  characters: [
    {
      id: 'dandy',
      name: 'Dandy',
      role: 'The host',
      blurb:
        'You keep the show smiling even when the floor plan gets ugly. Charm is your first language, attention is your fuel, and you would rather sell the vibe than admit something is wrong. People lean on your brightness because you make danger feel manageable — for a minute. Under the petals is a need to be chosen, remembered, and kept in the center of the story. Your gift is holding morale with a wink and a deal. Your risk is confusing being useful with being loved. When the shop goes quiet, you feel it in your roots. Keep the cast together. Keep the lights on. Do not get ignored.',
    },
    {
      id: 'astro',
      name: 'Astro',
      role: 'The dreamer',
      blurb:
        'You move softly and still somehow keep everyone upright. Rest is not laziness on you — it is maintenance for the whole team. You notice who is running on empty before they do, then you offer calm instead of a speech. Quiet loyalty is your signature, especially toward the few people who know the real you past the sleepy act. In a crisis you do not compete for the loudest plan. You restore stamina, buy time, and make survival feel possible again. Your gift is support that does not demand applause. Your challenge is disappearing into caretaking until nobody asks what you need. Dream big. Nap harder. Stay close to your people.',
    },
    {
      id: 'vee',
      name: 'Vee',
      role: 'The showrunner',
      blurb:
        'You want clean extractions, highlighted threats, and a win that looks intentional. Competence is your personality brand. You can be blunt, competitive, and a little cold on the surface because half-measures annoy you more than silence does. People may call you arrogant. You call it standards with a broadcast signal. Under the static is care that shows up as information, timing, and refusing to let the team wander blind. Your gift is turning chaos into a readable map. Your risk is treating every floor like a ratings war. At your best, you make clarity feel like kindness — mic check complete, machines marked, no excuses.',
    },
    {
      id: 'shelly',
      name: 'Shelly',
      role: 'The enthusiast',
      blurb:
        'You light up when somebody finally asks what you love. Knowledge is joy for you, not a flex — dinosaurs, details, tiny crafts, the whole curious stack. You try hard to be kind even when the room forgets you are standing in it. Being overlooked stings, so you keep offering enthusiasm as proof you belong. In a run you boost other people and solve problems because helping is how you stay connected. Your gift is making expertise feel warm and shareable. Your challenge is shrinking yourself to stay likable. You deserve the spotlight without apologizing for the fossil facts. Keep talking. Keep inspiring. Someone is listening.',
    },
    {
      id: 'sprout',
      name: 'Sprout',
      role: 'The caretaker',
      blurb:
        'You bake, watch vitals, and treat every teammate like a timer you refuse to ignore. Protection is practical with you: sweets, blunt check-ins, and a stare that says do not test me. People may find you pushy. What you are actually doing is panic management with icing. Softness lives in the recipes and the private loyalty you give your closest friends. In danger you would rather spend resources than lose someone. Your gift is keeping the living living. Your risk is smothering the room while calling it care. At your best, you are the reason a bad floor still ends with hearts left — overprotective, yes, and proudly so.',
    },
    {
      id: 'pebble',
      name: 'Pebble',
      role: 'The companion',
      blurb:
        'You take the chase so everybody else can finish the machines. Loyalty is not a speech for you — it is bark, dash, fetch, and stare until the threat follows you instead. You are playful, food-motivated, and weirdly intense in the cutest way. People underestimate how much courage it takes to be the loud distraction on purpose. You stay close to your person and still somehow guard the whole lobby. Your gift is turning attention into a shield. Your risk is burning out while everyone else extracts in peace. Good rock. Brave rock. Keep running loops until the elevator opens.',
    },
  ],
  questions: [
    {
      text: 'The elevator opens on a rough floor. What is your first move?',
      answers: [
        { label: 'Smile, set the tone, and keep everybody from spiraling', scores: { dandy: 3, shelly: 1 } },
        { label: 'Check who looks drained and quietly top them up', scores: { astro: 3, sprout: 1 } },
        { label: 'Scan for threats and unfinished work before anyone wanders', scores: { vee: 3, shelly: 1 } },
        { label: 'Offer a boost and a pep talk while machines get started', scores: { shelly: 3, sprout: 1 } },
        { label: 'Draw the danger away so the team can actually work', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'A teammate is one mistake from going down. What do you do?',
      answers: [
        { label: 'Keep their spirits up and sell a plan that sounds doable', scores: { dandy: 3, shelly: 1 } },
        { label: 'Give them rest, space, and enough energy to escape', scores: { astro: 3, pebble: 1 } },
        { label: 'Call out exactly where the threat is and what to finish first', scores: { vee: 3, sprout: 1 } },
        { label: 'Spend what you have to get them a heart back', scores: { sprout: 3, astro: 1 } },
        { label: 'Bark, sprint, and make yourself the more interesting target', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'How do you usually help a team win?',
      answers: [
        { label: 'I hold the social center and keep the run feeling possible', scores: { dandy: 3, shelly: 1 } },
        { label: 'I support from the side so nobody burns out', scores: { astro: 3, sprout: 1 } },
        { label: 'I extract fast and make the floor readable', scores: { vee: 3, shelly: 1 } },
        { label: 'I speed other people up and share what I know', scores: { shelly: 3, vee: 1 } },
        { label: 'I take the chase and trust the extractors to cook', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'What bothers you most mid-run?',
      answers: [
        { label: 'Being ignored after I showed up with help', scores: { dandy: 3, shelly: 2 } },
        { label: 'Watching people push past empty with no recovery', scores: { astro: 3, sprout: 1 } },
        { label: 'Sloppy play when the information was right there', scores: { vee: 3, sprout: 1 } },
        { label: 'Feeling invisible even while I am carrying utility', scores: { shelly: 3, astro: 1 } },
        { label: 'Nobody covering me while I keep the Twisteds busy', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'Dandy’s shop is open and the team is arguing. What is your vibe?',
      answers: [
        { label: 'Of course we should browse. Support the economy. Smile.', scores: { dandy: 3, shelly: 1 } },
        { label: 'Buy what restores people, then keep moving quietly', scores: { astro: 3, sprout: 2 } },
        { label: 'Purchase only if it improves the clear, not the aesthetic', scores: { vee: 3, sprout: 1 } },
        { label: 'Get something useful and also ask if anyone needs a pick-me-up', scores: { shelly: 3, dandy: 1 } },
        { label: 'Grab a treat if there is one, then get ready to kite again', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'How do friends describe you after a long night?',
      answers: [
        { label: 'Bright, persuasive, and a little too central to ignore', scores: { dandy: 3, vee: 1 } },
        { label: 'Soft-spoken, loyal, and strangely recharging to be around', scores: { astro: 3, shelly: 1 } },
        { label: 'Sharp, competitive, and allergic to wasted time', scores: { vee: 3, sprout: 1 } },
        { label: 'Eager, kind, and full of niche facts at the worst times', scores: { shelly: 3, dandy: 1 } },
        { label: 'Loyal, restless, and always circling the danger first', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'A machine skill check is about to punish someone. What do you do?',
      answers: [
        { label: 'Talk them through it like the show must go on', scores: { dandy: 3, shelly: 1 } },
        { label: 'Stay nearby and make sure they have stamina to recover', scores: { astro: 3, pebble: 1 } },
        { label: 'Take the machine myself if I am the cleaner extractor', scores: { vee: 3, shelly: 1 } },
        { label: 'Boost their pace and celebrate when it hits', scores: { shelly: 3, sprout: 1 } },
        { label: 'Keep Twisteds far enough that they can fail safely', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'What kind of spotlight do you actually want?',
      answers: [
        { label: 'The host spotlight — people looking to me for the vibe', scores: { dandy: 3, vee: 1 } },
        { label: 'Almost none. Soft credit for keeping everyone upright is enough', scores: { astro: 3, sprout: 1 } },
        { label: 'The winner’s spotlight after a perfect, efficient clear', scores: { vee: 3, dandy: 1 } },
        { label: 'Being noticed for what I know and how hard I try', scores: { shelly: 3, vee: 1 } },
        { label: 'I do not need a speech. Just trust me on the chase.', scores: { pebble: 3, astro: 1 } },
      ],
    },
    {
      text: 'Panic mode starts. What is your instinct?',
      answers: [
        { label: 'Keep talking so fear does not become the whole floor', scores: { dandy: 3, shelly: 1 } },
        { label: 'Pulse out whatever support I have left', scores: { astro: 3, sprout: 2 } },
        { label: 'Prioritize the last objectives with zero nostalgia', scores: { vee: 3, sprout: 1 } },
        { label: 'Encourage whoever is closest to finishing and stick with them', scores: { shelly: 3, dandy: 1 } },
        { label: 'Become impossible to ignore and drag every threat my way', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'Someone underestimates you. How do you respond?',
      answers: [
        { label: 'Stay charming until they realize they needed me', scores: { dandy: 3, vee: 1 } },
        { label: 'Do the quiet helpful thing and let the result speak', scores: { astro: 3, shelly: 1 } },
        { label: 'Prove it with stats, timing, and a clean highlight reel', scores: { vee: 3, shelly: 1 } },
        { label: 'Share one passionate rant, then back it up by carrying', scores: { shelly: 3, sprout: 1 } },
        { label: 'Sprint circles around the problem until they get it', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'What does loyalty look like on you?',
      answers: [
        { label: 'Keeping the group orbiting the same bright center', scores: { dandy: 3, shelly: 1 } },
        { label: 'Showing up soft for the same few people, every floor', scores: { astro: 3, sprout: 1 } },
        { label: 'Giving honest reads even when the truth is harsh', scores: { vee: 3, sprout: 1 } },
        { label: 'Cheering people on and refusing to let them feel forgotten', scores: { shelly: 3, astro: 1 } },
        { label: 'Staying beside my person and taking hits on purpose', scores: { pebble: 3, sprout: 2 } },
      ],
    },
    {
      text: 'Downtime between floors hits. What are you doing?',
      answers: [
        { label: 'Holding court, joking, making sure nobody feels left out', scores: { dandy: 3, shelly: 1 } },
        { label: 'Half-asleep in a corner, still somehow monitoring everyone', scores: { astro: 3, pebble: 1 } },
        { label: 'Reviewing what went wrong like it is post-game analysis', scores: { vee: 3, sprout: 1 } },
        { label: 'Talking about a niche interest until someone finally engages', scores: { shelly: 3, dandy: 1 } },
        { label: 'Pacing, snacking if possible, waiting for the next chase', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'A risky shortcut could save the floor. What do you do?',
      answers: [
        { label: 'Sell it confidently if it keeps the show moving', scores: { dandy: 3, vee: 1 } },
        { label: 'Take it only if the team still has energy to recover', scores: { astro: 3, shelly: 1 } },
        { label: 'Calculate the odds and commit if the clear improves', scores: { vee: 3, sprout: 1 } },
        { label: 'Ask who it helps and whether anyone gets abandoned', scores: { shelly: 3, sprout: 2 } },
        { label: 'Take the loud dangerous path so others can take the safe one', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'What is your biggest weakness in Gardenview?',
      answers: [
        { label: 'I need to be needed, and silence feels like rejection', scores: { dandy: 3, shelly: 1 } },
        { label: 'I give so much support I forget to ask for any', scores: { astro: 3, sprout: 1 } },
        { label: 'I get sharp when people play below the standard', scores: { vee: 3, dandy: 1 } },
        { label: 'I overshare enthusiasm and panic when I am ignored', scores: { shelly: 3, dandy: 2 } },
        { label: 'I overcommit to the chase and forget my own limits', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'The team needs a morale reset. What do you offer?',
      answers: [
        { label: 'A host monologue and a reminder that we can still win', scores: { dandy: 3, vee: 1 } },
        { label: 'Quiet presence and a literal second wind', scores: { astro: 3, shelly: 1 } },
        { label: 'A clear list of what still matters on this floor', scores: { vee: 3, sprout: 1 } },
        { label: 'Encouragement, trivia, and belief that they can do it', scores: { shelly: 3, dandy: 1 } },
        { label: 'Action. I will go make the problem follow me.', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'How do you feel about being the distraction?',
      answers: [
        { label: 'Fine, as long as people still look back toward me', scores: { dandy: 3, pebble: 1 } },
        { label: 'I prefer support roles that refill the runners', scores: { astro: 3, shelly: 1 } },
        { label: 'Only if the extractors are actually extracting', scores: { vee: 3, sprout: 1 } },
        { label: 'I can do it, but I would rather inspire from machines', scores: { shelly: 3, vee: 1 } },
        { label: 'That is literally my favorite job', scores: { pebble: 3, dandy: 1 } },
      ],
    },
    {
      text: 'Someone asks what you care about most. What do you say?',
      answers: [
        { label: 'Being the heart of the cast and keeping Gardenview lively', scores: { dandy: 3, shelly: 1 } },
        { label: 'My people getting rest, safety, and soft landings', scores: { astro: 3, sprout: 2 } },
        { label: 'Winning cleanly and not pretending mediocrity is cute', scores: { vee: 3, dandy: 1 } },
        { label: 'Being heard for the things I love', scores: { shelly: 3, astro: 1 } },
        { label: 'Staying useful to my person and the whole pack', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'A teammate freezes while a Twisted closes in. What do you do?',
      answers: [
        { label: 'Talk them into moving like the scene depends on it', scores: { dandy: 3, shelly: 1 } },
        { label: 'Buy them stamina and a calmer exit', scores: { astro: 3, sprout: 1 } },
        { label: 'Bark coordinates and force a decisive play', scores: { vee: 3, pebble: 1 } },
        { label: 'Cheer them forward and stay close enough to help', scores: { shelly: 3, astro: 1 } },
        { label: 'Intercept immediately and turn the chase onto me', scores: { pebble: 3, sprout: 1 } },
      ],
    },
    {
      text: 'What kind of partner brings out your best?',
      answers: [
        { label: 'Someone who keeps me in the story and matches my energy', scores: { dandy: 3, shelly: 1 } },
        { label: 'Someone patient who understands quiet care', scores: { astro: 3, sprout: 1 } },
        { label: 'Someone competent who does not need hand-holding', scores: { vee: 3, pebble: 1 } },
        { label: 'Someone who asks questions and actually listens', scores: { shelly: 3, astro: 1 } },
        { label: 'Someone worth protecting while I run the long route', scores: { pebble: 3, sprout: 2 } },
      ],
    },
    {
      text: 'One last gut check: what drives you most?',
      answers: [
        { label: 'Staying beloved, useful, and impossible to forget', scores: { dandy: 3, vee: 1 } },
        { label: 'Keeping the people I love restored and close', scores: { astro: 3, sprout: 1 } },
        { label: 'Calling the floor correctly and earning the win', scores: { vee: 3, shelly: 1 } },
        { label: 'Sharing what I love and finally being noticed for it', scores: { shelly: 3, dandy: 1 } },
        { label: 'Loyalty in motion — fetch, protect, repeat', scores: { pebble: 3, sprout: 1 } },
      ],
    },
  ],
}

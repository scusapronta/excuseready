// ==========================
//  EXCUSEREADY — SCRIPT EN
// ==========================

// CATEGORY DATABASE (ENGLISH VERSION)
const excuseFragments = {
  work: {
    start: [
      "Okay, before you judge me, let me explain:",
      "I swear I was on my way, but",
      "Here’s the honest truth:",
      "Quick update on my punctuality:",
      "I know this sounds bad, but",
      "I was leaving right on time, until",
      "Everything was perfectly planned, until",
      "I genuinely meant to be early, but",
      "It’s not my fault (I think), because",
      "I’d love to blame traffic, but",
      "I left home with the best intentions, but",
      "Everything was set up perfectly, however",
      "Despite three alarms and a coffee,",
      "I even got dressed early, but",
      "I really tried to be a punctual adult, but"
    ],
    reason: [
      "the train randomly stopped in the middle of nowhere",
      "the bus seemed to be on a personal strike",
      "Google Maps sent me to the wrong side of the city",
      "my neighbor decided to use a drill at 7 AM",
      "my coffee caused more chaos than energy",
      "my alarm rang only in my dreams",
      "my computer started updating right as I had to leave",
      "my dog stole a shoe and negotiations took time",
      "my cat chose the keyboard as its new bed",
      "my building hosted a surprise noise festival",
      "my router had a spiritual reset moment",
      "the boiler had an existential crisis today",
      "the doorbell rang three times for packages that weren’t mine",
      "my brain confused my start time with my end time",
      "I miscalculated my mental time zone completely",
      "a mysterious traffic jam blocked the easiest route",
      "parking turned into a mythical creature",
      "a random storm slowed down everything except the clock",
      "my outfit crashed my self-esteem and I had to restart",
      "five minutes here, ten minutes there… suddenly it was an hour"
    ],
    detail: [
      "and I had to figure out if I was still in 2025 or a parallel universe.",
      "and that triggered a chain of events worthy of a TV series.",
      "and from that moment on, logic stopped working.",
      "and fixing the situation took way longer than expected.",
      "and if I send you proof, you’ll think it’s a meme.",
      "and it took me a while to clean up the mess.",
      "and clearly the universe wasn’t on my side today.",
      "and time started running faster than me.",
      "and every time I tried to recover, something new happened.",
      "and of course all of this happened today.",
      "and catching up became mathematically impossible.",
      "and I think I unlocked a new level of logistical bad luck.",
      "and every attempt to speed up made things worse.",
      "and I ended up chasing the clock with no success.",
      "and the more I rushed, the slower the world moved.",
      "and honestly, not even a movie would believe this.",
      "and I officially lost control of my schedule.",
      "and I wouldn’t even know where to start explaining.",
      "and the timeline of events feels written by a comedian.",
      "and I reached the point where I had to laugh not to cry."
    ],
    end: [
      "I’ll be there as soon as humanly possible.",
      "I’ll catch up on everything, even if today feels impossible.",
      "I swear it’s not laziness, just organized bad luck.",
      "If you want details, I have a whole novel ready.",
      "Next time I’ll set an alarm on the fridge too.",
      "Starting tomorrow, I’ll try to be a punctual person.",
      "I’ll earn back my karma by working extra today.",
      "If it helps, I’m bringing my conscience with me.",
      "To make up for it, I’ll handle the tough calls today.",
      "My productivity is late today, but it will recover.",
      "I’m marking this day as an example of what NOT to do.",
      "I’ll use this delay as motivation to improve (tomorrow).",
      "My punctuality is in beta today, but it’ll update soon.",
      "Consider this a patience test — you passed.",
      "I’ll bring coffee, reports, and remorse in equal parts."
    ]
  },

  // Friends, Love, Family, Other will appear in the next blocks
};

// CATEGORY LABELS
const categoryNames = {
  work: "Work",
  friends: "Friends",
  love: "Love",
  family: "Family",
  other: "Other"
};

// DOM ELEMENTS
const categoryTabs = document.querySelectorAll(".category-tab");
const excuseTextEl = document.getElementById("excuseText");
const excuseCategoryNameEl = document.getElementById("excuseCategoryName");
const btnGenerate = document.getElementById("btnGenerate");
const btnShortExcuse = document.getElementById("btnShortExcuse");
const btnLongExcuse = document.getElementById("btnLongExcuse");
const btnGenerateHero = document.getElementById("btnGenerateHero");
const btnHeroCycle = document.getElementById("btnHeroCycle");
const btnCopy = document.getElementById("btnCopy");
const btnCopyWithCategory = document.getElementById("btnCopyWithCategory");
const btnPanic = document.getElementById("btnPanic");
const statusRandomInfo = document.getElementById("statusRandomInfo");
const statTotalEl = document.getElementById("statTotal");
const statMostUsedEl = document.getElementById("statMostUsed");
const statBadgeEl = document.getElementById("statBadge");
const badgeLabelEl = document.getElementById("badgeLabel");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeToggleEmoji = document.getElementById("themeToggleEmoji");
const themeToggleText = document.getElementById("themeToggleText");
const fastModeToggle = document.getElementById("fastModeToggle");
const fastModeDot = document.getElementById("fastModeDot");
const fastModeLabel = document.getElementById("fastModeLabel");

// MOBILE STICKY BAR
const mobileBtnGenerate = document.getElementById("mobileBtnGenerate");
const mobileBtnCycle = document.getElementById("mobileBtnCycle");
const mobileBtnCopy = document.getElementById("mobileBtnCopy");

// DAILY EXCUSE
const dailyTextEl = document.getElementById("dailyExcuseText");
const dailyMetaEl = document.getElementById("dailyExcuseMeta");
const dailyUseBtn = document.getElementById("dailyUseBtn");
const dailyNewBtn = document.getElementById("dailyNewBtn");

// PWA BANNER
const pwaBanner = document.getElementById("pwaBanner");
const pwaHowBtn = document.getElementById("pwaHowBtn");
const pwaCloseBtn = document.getElementById("pwaCloseBtn");

// GLOBAL STATE
let currentCategory = "work";
let lastExcuseByCategory = {};
let statusTimeout = null;
let lengthMode = "auto";
let fastMode = false;
// ==========================
//  FRIENDS
// ==========================
excuseFragments.friends = {
  start: [
    "I know this makes me look like the worst friend, but",
    "Guys, don’t hate me, but",
    "I love you all, so I’ll be honest:",
    "I’m apologizing in advance because",
    "I swear this isn’t a cheap excuse, but",
    "I know I said I’d be there, but",
    "I was fully ready to go out, until",
    "My social side really tried today, but",
    "I don’t want to be the flaky friend, but",
    "I was about to text ‘on my way’, but",
    "I opened the door to leave and suddenly",
    "The sociable version of me today",
    "I opened my closet to get dressed and",
    "I was literally about to say ‘I’m coming’, when",
    "I had already imagined the whole night, but"
  ],
  reason: [
    "my couch looked me in the eyes and begged me to stay",
    "my social battery dropped to negative numbers",
    "I realized I’ve been pretending to be an adult for too many hours",
    "my internal weather forecast said ‘lazy with a chance of sleep’",
    "I started getting ready and lost motivation while looking for socks",
    "my outfit stopped making sense the moment I put it on",
    "my brain hit alt+F4 on ‘going out mode’",
    "a deadly combo of hunger, tiredness, and boredom hit me",
    "my body switched to energy‑saving mode",
    "I suddenly needed to avoid all human interaction",
    "my desire to go out fell below absolute zero",
    "my social battery shut down without warning",
    "I sat down ‘for a minute’ and time evaporated",
    "my life switched to ‘do not disturb’ mode",
    "I remembered I haven’t had a mental day off in weeks"
  ],
  detail: [
    "and honestly I’d ruin the vibe with my tired panda energy.",
    "and I’d just end up being a houseplant in the corner.",
    "and I don’t have the face to fake believable enthusiasm.",
    "and my social battery needs a full reboot.",
    "and the only thing my brain supports right now is pajamas and TV.",
    "and I’d probably fall asleep mid‑sentence.",
    "and I don’t want to be that person staring into the void all night.",
    "and the only human contact I can handle is with my pillow.",
    "and the world is safer if I stay on the couch.",
    "and if I go out like this, I’ll become a living meme.",
    "and you deserve a more alive version of me, not zombie mode.",
    "and I’d basically be an NPC at your table.",
    "and I don’t want to turn your night into a documentary on exhaustion.",
    "and I’d rather miss today than kill the group’s energy.",
    "and I’d answer in monosyllables the whole night."
  ],
  end: [
    "Let’s catch up in the next days — drinks on me.",
    "Next time I’m buying, to balance the karma.",
    "Please don’t remove me from the group chat.",
    "I’m already scheduling an extra night to make up for this.",
    "I’m still human, just with Wi‑Fi and pajamas.",
    "I’ll send embarrassing voice notes as compensation.",
    "I owe you at least two nights in a row.",
    "You’re allowed to roast me next time.",
    "I’ll make it up with food. Lots of food.",
    "I’ll send memes all night as spiritual presence.",
    "I’m setting a reminder just for you, I swear.",
    "Next time if I don’t show up, you can come pick me up.",
    "You have full permission to mock me.",
    "Let’s set a fixed date — no escape routes.",
    "I officially commit to not disappearing for the next two outings."
  ]
};

// ==========================
//  LOVE
// ==========================
excuseFragments.love = {
  start: [
    "Okay, before you get upset, let me explain:",
    "I promise this isn’t the usual excuse, but",
    "I know it sounds suspicious, but",
    "I don’t want to argue, so I’ll say it right away:",
    "I swear it’s not because I don’t want to see you, but",
    "You deserve someone more organized than me, but",
    "Before you think the worst:",
    "Don’t blame me — blame destiny, because",
    "I have a very unromantic announcement:",
    "If I tell you the truth, please don’t get too mad:",
    "I spent the whole day thinking about seeing you, but",
    "My mind and body are not cooperating today because",
    "I’m writing this with affection and a bit of guilt:",
    "I’d love to say everything is under control, but",
    "I owe you an adult explanation, delivered by a tired soul:"
  ],
  reason: [
    "my day exploded into a thousand micro‑problems at once",
    "time decided to work against us today",
    "I’m physically exhausted and afraid I’d only be half a person with you",
    "the chaos in my head doesn’t deserve to spill onto you",
    "if I come now, you’d get the laggy version of me",
    "I’m so tired I might fall asleep while looking into your eyes",
    "I have urgent things to finish that don’t move but do stress me",
    "my brain declared today ‘maintenance mode’",
    "I don’t want to see you while rushing and anxious",
    "if we meet now, I’ll speak in buffering mode",
    "I pretended to be strong all day and now my body wants revenge",
    "I’m stuck between duties, notifications, and chaos",
    "today I feel more like a drained battery than a human",
    "I underestimated how much this day would drain me",
    "I don’t want to drag all this tiredness to you"
  ],
  detail: [
    "and you deserve a version of me that doesn’t yawn every 30 seconds.",
    "and I’d rather postpone than be with you in a bad state.",
    "and I want to see you when I can be truly present, not just physically.",
    "and I don’t want our time together to feel like a checklist.",
    "and I want to arrive with my head and heart, not just my body.",
    "and I want our moments to feel good, not chaotic.",
    "and I know it may not look like it, but I’m doing this because I care.",
    "and I don’t want you to experience my day in slow motion.",
    "and I don’t want to use you as a human stress‑relief tool.",
    "and I want our time to be memorable, not something to endure.",
    "and I don’t want to show up still in survival mode.",
    "and I’d like to arrive with at least a bit more energy.",
    "and if I see you, I want to actually listen, not just nod.",
    "and I’d rather delay one day than ruin our evening.",
    "and I don’t want you to feel like you’re getting the leftovers of my time."
  ],
  end: [
    "Can we make up for it tomorrow, with more calm and more ‘us’?",
    "I promise I’ll show up at 110% next time.",
    "If you’re upset, I get it — I really care about us.",
    "This isn’t running away, it’s a pit stop to arrive better.",
    "Sending a virtual hug while waiting for the real one.",
    "Tell me everything you’re thinking — I’m here.",
    "I’m already planning the official recovery date.",
    "I’m not avoiding you — I’m trying to show up better.",
    "If you can wait one more day, I promise it’ll be worth it.",
    "I owe you a beautiful, unhurried evening.",
    "Let’s pick a moment when I can be fully present.",
    "Consider this a technical pause to recharge.",
    "Next time I’ll come with energy, time, and maybe dessert.",
    "As soon as I can breathe again, you’re the first person I see.",
    "Thank you for having patience with me today."
  ]
};

// ==========================
//  FAMILY
// ==========================
excuseFragments.family = {
  start: [
    "I promise I’m not doing this on purpose, but",
    "I know it looks like I’m avoiding you, but",
    "It’s not that I don’t want to see you, it’s just that",
    "Before the family debate starts:",
    "I swear it’s not ingratitude — just terrible organization, because",
    "Don’t get mad yet, hear me out:",
    "I love you all, but today",
    "Please don’t take it personally, because",
    "Saying this with love and a bit of anxiety:",
    "I haven’t disappeared, it’s just that",
    "I promise this isn’t a strategic escape from the family, but",
    "I think about you even if today",
    "I don’t want to look like the one who never has time, but",
    "I just need a bit of understanding because",
    "I’m not sure how to say this nicely, but"
  ],
  reason: [
    "my day is horribly packed with tasks and surprises",
    "I realized too late that I overestimated my energy",
    "time slipped away embarrassingly fast",
    "I’m behind on a thousand things I can’t postpone",
    "I’m trying to finish important stuff before seeing you",
    "if I leave now, I’ll leave everything half‑done and make things worse",
    "my brain is a browser with 48 tabs open and no music",
    "the day started wrong and never recovered",
    "my entire schedule collapsed between one thing and another",
    "I don’t want to show up tired and irritated",
    "I promised too many things to too many people today",
    "my brain is in ‘survive’ mode, not ‘go out’ mode",
    "I’m late with practical things I absolutely need to fix",
    "I reached the point of talking to myself to stay organized",
    "I’m trying to put order in the chaos before showing up"
  ],
  detail: [
    "and I don’t want to bring you the exhausted version of me.",
    "and I’d rather come when I can be truly present.",
    "and I want to avoid arriving irritated and unloading everything on you.",
    "and I want our time together to be quality, not just presence.",
    "and I don’t like visiting when my mind is elsewhere.",
    "and I don’t want the visit to feel like another task to check off.",
    "and I’d rather plan properly for next time.",
    "and I want our moments to feel good, not rushed.",
    "and I’d rather catch up decently, not in a hurry.",
    "and even if it doesn’t look like it, I’m doing this out of respect.",
    "and I don’t want you to get the grumpy version of me.",
    "and I want to talk and listen calmly when I see you.",
    "and I don’t want to spend the whole visit complaining.",
    "and I’d rather postpone than stare at the clock every five minutes.",
    "and I want to avoid being physically present but mentally absent."
  ],
  end: [
    "We’ll catch up very soon, I promise.",
    "I’ll call you later with more calm and explain everything.",
    "Let’s set a new date — and this time I’ll protect it.",
    "Save me a seat at the table next time.",
    "Don’t get too mad — at least not all at once.",
    "I’ll send a longer message later to explain better.",
    "I owe you a proper lunch or dinner.",
    "Next time I’ll bring dessert as a peace offering.",
    "Let’s put a new visit on the calendar — no surprises.",
    "I love you even if I seem unreachable today.",
    "Thanks for being patient with my weird timing.",
    "I’ll try to organize myself better so I don’t repeat this.",
    "Next time I’ll come calmly and maybe stay longer.",
    "I’ll update you as soon as I survive this day.",
    "It’s not lack of affection — just lack of hours in the day."
  ]
};

// ==========================
//  OTHER
// ==========================
excuseFragments.other = {
  start: [
    "I know this sounds ridiculous, but",
    "I swear I’m not making this up, but",
    "It sounds like an excuse, but it’s almost true that",
    "I owe you a bizarre explanation:",
    "It’s hard to say this with a straight face, but",
    "No judgment please — believe me when I say",
    "Please don’t laugh immediately because",
    "This never happens, but today",
    "I know it sounds like a joke, but",
    "If I tell you what happened, you won’t believe me, but",
    "The situation is so absurd that",
    "There’s a tiny chance you’ll believe me when I say",
    "I swear if this happened to someone else, I’d laugh too,"
  ],
  reason: [
    "I got stuck talking to my conspiracy‑theorist neighbor for half an hour",
    "I opened a random drawer and the year 2010 came out",
    "I started fixing one thing and ended up reorganizing half the house",
    "I decided to ‘quickly’ update something on my PC and two hours vanished",
    "I fell into an endless notification loop",
    "I replied to old messages and three times more appeared",
    "I sent a message to the wrong chat and had to manage the awkwardness",
    "I got obsessed looking for something that no longer exists",
    "I ended up organizing my thoughts instead of the room",
    "I opened an old file and started rewriting half the universe"
  ],
  detail: [
    "and that’s when time stopped making sense.",
    "and I can’t even explain how I got there.",
    "and I realized too late I was living a side quest.",
    "and honestly, no one stopped me.",
    "and I laughed alone to avoid crying.",
    "and the more I tried to go back, the further I got.",
    "and it felt too late to pretend everything was normal.",
    "and at that point, ignoring it was impossible.",
    "and when I checked the time, I thought it was a glitch.",
    "and I spent a few seconds staring into the void."
  ],
  end: [
    "So yes, I’m late for reasons that are hard to explain.",
    "I know it sounds like a script, but it’s the truth.",
    "You don’t have to believe me, but at least know I tried.",
    "Feel free to use this story as an example for others.",
    "Next time I’ll pick a less surreal excuse.",
    "Let’s call this advanced chaos‑management training.",
    "Let’s mark this as a pilot episode, not a habit.",
    "Next time I’ll arrive early just to compensate.",
    "To make up for it, I accept unlimited teasing today.",
    "At least now you have a weird story to hear."
  ]
};
// ==========================
//  ABSURD MODE (EASTER EGG)
// ==========================
const absurdFragments = {
  start: [
    "Don’t laugh, but",
    "I know this sounds impossible, but",
    "I swear I’d never expect this, but",
    "It sounds made up, but",
    "With full sincerity:",
    "Please believe me when I say",
    "I know it sounds surreal, but",
    "Not even Netflix would go this far, but",
    "If I tell you what happened, I swear",
    "This one is off the charts, but"
  ],
  reason: [
    "I got kidnapped by a three‑hour YouTube tutorial",
    "my fridge started making union‑protest noises",
    "my cat declared emotional strike and I had to negotiate",
    "my chair held me hostage in extreme comfort mode",
    "I got lost reading comments under a useless post",
    "Alexa decided we needed to redefine our relationship",
    "the Wi‑Fi asked for a break right now",
    "I opened a drawer from 2010 and came out changed",
    "one notification opened a time‑scrolling vortex",
    "I tried to tidy up ‘for a second’ and it became an emotional relocation"
  ],
  detail: [
    "and the line between reality and meme completely vanished.",
    "and I’m not sure if I live in a sitcom or real life anymore.",
    "and it all turned into a sequence of questionable decisions.",
    "and honestly, I still haven’t processed what happened.",
    "and I realized too late that time wasn’t cooperating.",
    "and when I checked the clock, I thought it was a prank.",
    "and I think this story will haunt me for a while.",
    "and I wouldn’t know where to start explaining the chaos.",
    "and my sense of reality officially requested vacation.",
    "and I still can’t decide whether to laugh or change identity."
  ],
  end: [
    "So yes, I’m late — even logic couldn’t keep up.",
    "Next time I’ll pick an excuse that sounds less true and more believable.",
    "If you want to laugh at me, go ahead.",
    "You’re allowed to use this story against me forever.",
    "Let’s call this advanced chaos‑management training.",
    "Let’s mark this as the pilot episode of my mental series.",
    "Next time I hope to have a more normal story.",
    "For now, all I can offer is transparency and self‑irony.",
    "Look at it this way: at least you’re not bored.",
    "If it sounds too absurd, remember — I lived it."
  ]
};

let absurdMode = false;
let absurdClickCount = 0;
let absurdClickTimer = null;

function toggleAbsurdMode() {
  absurdMode = !absurdMode;
  if (absurdMode) {
    showTemporaryStatus("Absurd Mode activated: excuses entering surreal territory.");
  } else {
    showTemporaryStatus("Absurd Mode disabled: back to ‘credible’ excuses.");
  }
}

if (excuseCategoryNameEl) {
  excuseCategoryNameEl.addEventListener("click", () => {
    absurdClickCount++;
    if (!absurdClickTimer) {
      absurdClickTimer = setTimeout(() => {
        absurdClickCount = 0;
        absurdClickTimer = null;
      }, 600);
    }
    if (absurdClickCount >= 3) {
      clearTimeout(absurdClickTimer);
      absurdClickTimer = null;
      absurdClickCount = 0;
      toggleAbsurdMode();
    }
  });
}

// ==========================
//  SUPER PANIC MODE
// ==========================
const superPanicShort = [
  "I’ll be there in a sec — tiny emergency.",
  "Closing something urgent, updating you soon.",
  "Small technical issue, on my way.",
  "Give me a moment to fix something — coming.",
  "Handling something quickly — one sec.",
  "Minimal delay — finishing up and coming.",
  "Wrapping up something important — right after.",
  "One second, closing something — almost there.",
  "Fixing a quick issue — coming ASAP.",
  "Rapid recovery mode activated — updating soon."
];

function generateSuperPanicExcuse() {
  const idx = Math.floor(Math.random() * superPanicShort.length);
  return superPanicShort[idx];
}

// ==========================
//  RANDOM & GENERATION
// ==========================
function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function generateAbsurdExcuse() {
  const s = absurdFragments.start[randomIndex(absurdFragments.start.length)];
  const r = absurdFragments.reason[randomIndex(absurdFragments.reason.length)];
  const d = absurdFragments.detail[randomIndex(absurdFragments.detail.length)];
  const e = absurdFragments.end[randomIndex(absurdFragments.end.length)];
  return `${s} ${r}, ${d} ${e}`;
}

function generateNormalExcuse(categoryKey, mode = "auto") {
  const cat = excuseFragments[categoryKey];
  if (!cat) return "Matrix error: excuse category missing. Try again later.";

  let attempt = 0;
  let result = "";
  const maxAttempts = 8;

  do {
    const s = cat.start[randomIndex(cat.start.length)];
    const r = cat.reason[randomIndex(cat.reason.length)];
    const d = cat.detail[randomIndex(cat.detail.length)];
    const e = cat.end[randomIndex(cat.end.length)];

    if (mode === "short") {
      result = r.charAt(0).toUpperCase() + r.slice(1) + ", " + e;
    } else {
      result = `${s} ${r}, ${d} ${e}`;
    }

    attempt++;
  } while (result === lastExcuseByCategory[categoryKey] && attempt < maxAttempts);

  lastExcuseByCategory[categoryKey] = result;
  return result;
}

function generateExcuseForCategory(categoryKey, mode = "auto") {
  if (absurdMode) return generateAbsurdExcuse();
  return generateNormalExcuse(categoryKey, mode);
}
// ==========================
//  STATS + STATE (localStorage)
// ==========================
const STATS_KEY = "excuseready_stats_v1";
const THEME_KEY = "excuseready_theme_v1";
const DAILY_KEY = "excuseready_daily_v1";
const PWA_KEY = "excuseready_pwa_dismissed_v1";
const TIPS_KEY = "excuseready_tips_v1";

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) {
      return {
        total: 0,
        perCategory: { work: 0, friends: 0, love: 0, family: 0, other: 0 },
        lastCategory: "work",
        lastGeneratedAt: null,
        fastMode: false
      };
    }
    const parsed = JSON.parse(raw);
    const base = {
      total: 0,
      perCategory: { work: 0, friends: 0, love: 0, family: 0, other: 0 },
      lastCategory: "work",
      lastGeneratedAt: null,
      fastMode: false
    };
    const merged = Object.assign(base, parsed, {
      perCategory: Object.assign(base.perCategory, parsed.perCategory || {})
    });
    return merged;
  } catch (e) {
    console.error("Stats parsing error:", e);
    return {
      total: 0,
      perCategory: { work: 0, friends: 0, love: 0, family: 0, other: 0 },
      lastCategory: "work",
      lastGeneratedAt: null,
      fastMode: false
    };
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("Unable to save stats:", e);
  }
}

let stats = loadStats();
fastMode = !!stats.fastMode;

function getMostUsedCategory() {
  let bestCat = null;
  let bestCount = 0;
  for (const key of Object.keys(stats.perCategory)) {
    const val = stats.perCategory[key] || 0;
    if (val > bestCount) {
      bestCount = val;
      bestCat = key;
    }
  }
  return bestCount > 0 ? { key: bestCat, count: bestCount } : null;
}

function getBadgeLabel(total) {
  if (total >= 200) return "Absence Legend";
  if (total >= 100) return "Master of Excuses";
  if (total >= 50) return "Delay Athlete";
  if (total >= 25) return "Elegant Escape Professional";
  if (total >= 10) return "Justification Apprentice";
  if (total >= 1) return "Polite Beginner";
  return "Polite Beginner";
}

function renderStats() {
  if (statTotalEl) {
    const label = `Excuses generated: ${stats.total}`;
    statTotalEl.querySelector("span:last-child").textContent = label;
  }
  if (statMostUsedEl) {
    const best = getMostUsedCategory();
    const label = best
      ? `Top category: ${categoryNames[best.key]} (${best.count})`
      : "Top category: –";
    statMostUsedEl.querySelector("span:last-child").textContent = label;
  }
  if (badgeLabelEl) {
    badgeLabelEl.textContent = `Excuse level: ${getBadgeLabel(stats.total)}`;
  }
  updateFastModeUI();
}

// ==========================
//  FAST MODE
// ==========================
function updateFastModeUI() {
  if (!fastModeDot || !fastModeLabel) return;
  if (fastMode) {
    fastModeDot.classList.add("fast-mode-on");
    fastModeLabel.textContent = "Fast Mode: ON";
  } else {
    fastModeDot.classList.remove("fast-mode-on");
    fastModeLabel.textContent = "Fast Mode: OFF";
  }
}

if (fastModeToggle) {
  fastModeToggle.addEventListener("click", () => {
    fastMode = !fastMode;
    fastModeToggle.setAttribute("aria-pressed", fastMode);
    stats.fastMode = fastMode;
    saveStats(stats);
    updateFastModeUI();
    showTemporaryStatus(
      fastMode
        ? "Fast Mode activated: no animations, just excuses."
        : "Fast Mode disabled: visual effects restored.",
      false
    );
  });
}

// ==========================
//  TIPS + EASTER EGGS
// ==========================
function messageForTopCategory(catKey, count) {
  switch (catKey) {
    case "work":
      return `Your top category is "${categoryNames[catKey]}". Maybe it's time to change jobs… or your boss. (${count} excuses)`;
    case "friends":
      return `Your top category is "${categoryNames[catKey]}". Your friends are starting to suspect something. (${count} excuses)`;
    case "love":
      return `Your top category is "${categoryNames[catKey]}". Remember: excuses don’t replace communication. (${count} excuses)`;
    case "family":
      return `Your top category is "${categoryNames[catKey]}". The family group chat is officially alert. (${count} excuses)`;
    case "other":
      return `Your top category is "${categoryNames[catKey]}". You’re officially creative in awkward situations. (${count} excuses)`;
    default:
      return `Top category: ${categoryNames[catKey] || catKey} (${count}).`;
  }
}

function loadTipsState() {
  try {
    const raw = localStorage.getItem(TIPS_KEY);
    if (!raw) return { savedFavoriteTip: false, fastModeTip: false };
    const parsed = JSON.parse(raw);
    return Object.assign({ savedFavoriteTip: false, fastModeTip: false }, parsed);
  } catch {
    return { savedFavoriteTip: false, fastModeTip: false };
  }
}

function saveTipsState(tips) {
  try {
    localStorage.setItem(TIPS_KEY, JSON.stringify(tips));
  } catch (e) {
    console.error("Unable to save tips:", e);
  }
}

let tipsState = loadTipsState();

function maybeShowTipsAndEasterEgg() {
  if (!statusRandomInfo) return;

  const total = stats.total;
  let message = null;

  if (total === 5 && !tipsState.savedFavoriteTip) {
    message =
      "Finding this useful? Save it to your favorites (Ctrl+D or 'Add to Favorites').";
    tipsState.savedFavoriteTip = true;
    saveTipsState(tipsState);
  }

  if (!message && total === 10 && !tipsState.fastModeTip) {
    message =
      "You've generated 10 excuses already. Try Fast Mode if you want even quicker results.";
    tipsState.fastModeTip = true;
    saveTipsState(tipsState);
  }

  if (!message) {
    if (total === 25) {
      message = "25 excuses generated — you're becoming an elegant escape artist.";
    } else if (total === 50) {
      message = "50 excuses. Consider telling the truth once in a while.";
    } else if (total === 100) {
      message = "100 excuses. You've unlocked the level: ‘Are you serious?’";
    } else if (total === 200) {
      message = "200 excuses: time to write a social survival manual.";
    } else if (total > 0 && total % 30 === 0) {
      const best = getMostUsedCategory();
      if (best) {
        message = messageForTopCategory(best.key, best.count);
      }
    }
  }

  if (message) {
    statusRandomInfo.querySelector("span:last-child").textContent = message;
    statusRandomInfo.style.background = "rgba(0, 194, 168, 0.2)";
    statusRandomInfo.style.color = "#00423a";
    statusRandomInfo.style.transform = "translateY(-1px)";

    if (statusTimeout) clearTimeout(statusTimeout);
    statusTimeout = setTimeout(() => {
      statusRandomInfo.querySelector("span:last-child").textContent =
        "Random mode active: excuses won’t repeat predictably.";
      statusRandomInfo.style.background = "rgba(255, 212, 71, 0.22)";
      statusRandomInfo.style.color = "#6b5600";
      statusRandomInfo.style.transform = "translateY(0)";
    }, 4000);
  }
}

function incrementStats(categoryKey) {
  stats.total += 1;
  if (!stats.perCategory[categoryKey]) stats.perCategory[categoryKey] = 0;
  stats.perCategory[categoryKey] += 1;
  stats.lastCategory = categoryKey;
  stats.lastGeneratedAt = Date.now();
  saveStats(stats);
  renderStats();
  maybeShowTipsAndEasterEgg();
  maybeShowPwaBanner();
}

// ==========================
//  TEMPORARY STATUS
// ==========================
function showTemporaryStatus(message, isError = false) {
  if (!statusRandomInfo) return;
  statusRandomInfo.querySelector("span:last-child").textContent = message;
  if (isError) {
    statusRandomInfo.style.background = "rgba(255, 75, 106, 0.06)";
    statusRandomInfo.style.color = "#a01c39";
  } else {
    statusRandomInfo.style.background = "rgba(255, 212, 71, 0.22)";
    statusRandomInfo.style.color = "#6b5600";
  }
  if (statusTimeout) clearTimeout(statusTimeout);
  statusTimeout = setTimeout(() => {
    statusRandomInfo.querySelector("span:last-child").textContent =
      "Random mode active: excuses won’t repeat predictably.";
    statusRandomInfo.style.background = "rgba(255, 212, 71, 0.22)";
    statusRandomInfo.style.color = "#6b5600";
  }, 3300);
}

// ==========================
//  CATEGORY SWITCHING
// ==========================
categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.getAttribute("data-category");
    excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
    renderNewExcuse();
  });
});
// ==========================
//  COPY
// ==========================
function getCurrentExcuseText() {
  return excuseTextEl.textContent.trim();
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showTemporaryStatus("Excuse copied to clipboard. Now go perform it.");
  } catch (e) {
    console.error("Clipboard error", e);
    showTemporaryStatus("Unable to copy automatically — please copy manually.", true);
  }
}

btnCopy.addEventListener("click", () => {
  const excuse = getCurrentExcuseText();
  if (!excuse) {
    renderNewExcuse({ countAsStat: false });
    setTimeout(() => copyToClipboard(getCurrentExcuseText()), 160);
  } else {
    copyToClipboard(excuse);
  }
});

btnCopyWithCategory.addEventListener("click", () => {
  const excuse =
    getCurrentExcuseText() || generateExcuseForCategory(currentCategory, lengthMode);
  const catLabel = categoryNames[currentCategory] || currentCategory;
  const formatted =
    `[${catLabel}] ${excuse} (Generated by ExcuseReady: https://excuseready.com/)`;
  copyToClipboard(formatted);
});

// ==========================
//  SHARE
// ==========================
function buildShareText() {
  const catLabel = categoryNames[currentCategory] || currentCategory;
  const excuse =
    getCurrentExcuseText() || generateExcuseForCategory(currentCategory, lengthMode);
  return `[${catLabel}] ${excuse}\n\nGenerated by ExcuseReady: https://excuseready.com/`;
}

function buildShareUrlFor(platform) {
  const text = encodeURIComponent(buildShareText());
  const url = encodeURIComponent("https://excuseready.com/");
  switch (platform) {
    case "whatsapp":
      return "https://wa.me/?text=" + text;
    case "telegram":
      return "https://t.me/share/url?url=" + url + "&text=" + text;
    case "facebook":
      return "https://www.facebook.com/sharer/sharer.php?u=" + url;
    case "twitter":
      return "https://twitter.com/intent/tweet?text=" + text;
    case "email":
      return (
        "mailto:?subject=" +
        encodeURIComponent("A freshly generated excuse for you") +
        "&body=" +
        text
      );
    default:
      return "https://excuseready.com/";
  }
}

document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const platform = btn.getAttribute("data-share");
    const text = buildShareText();
    const pageUrl = "https://excuseready.com/";

    if (platform === "link") {
      copyToClipboard(pageUrl);
      return;
    }

    if (navigator.share && (platform === "whatsapp" || platform === "telegram")) {
      try {
        await navigator.share({ title: "ExcuseReady", text, url: pageUrl });
        return;
      } catch (e) {}
    }

    const shareUrl = buildShareUrlFor(platform);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  });
});

// ==========================
//  DARK MODE
// ==========================
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggleEmoji.textContent = "☀️";
    themeToggleText.textContent = "Light mode";
  } else {
    document.body.classList.remove("dark");
    themeToggleEmoji.textContent = "🌙";
    themeToggleText.textContent = "Dark mode";
  }
}

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch (e) {
    console.error("Theme read error:", e);
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    return "dark";
  return "light";
}

let currentTheme = loadTheme();
applyTheme(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  themeToggleBtn.setAttribute("aria-pressed", currentTheme === "dark");
  try {
    localStorage.setItem(THEME_KEY, currentTheme);
  } catch (e) {
    console.error("Unable to save theme:", e);
  }
});

// ==========================
//  MOBILE STICKY BAR
// ==========================
if (mobileBtnGenerate) {
  mobileBtnGenerate.addEventListener("click", () => renderNewExcuse());
}

if (mobileBtnCycle) {
  mobileBtnCycle.addEventListener("click", () => {
    const cycleOrder = ["work", "friends", "love", "family", "other"];
    let idx = cycleOrder.indexOf(currentCategory);
    if (idx === -1) idx = 0;
    idx = (idx + 1) % cycleOrder.length;
    currentCategory = cycleOrder[idx];

    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
    });

    excuseCategoryNameEl.textContent =
      categoryNames[currentCategory] || currentCategory;
    renderNewExcuse();
  });
}

if (mobileBtnCopy) {
  mobileBtnCopy.addEventListener("click", () => {
    const excuse = getCurrentExcuseText();
    if (!excuse) {
      renderNewExcuse({ countAsStat: false });
      setTimeout(() => copyToClipboard(getCurrentExcuseText()), 160);
    } else {
      copyToClipboard(excuse);
    }
  });
}
// ==========================
//  DAILY EXCUSE
// ==========================
function loadDaily() {
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveDaily(daily) {
  try {
    localStorage.setItem(DAILY_KEY, JSON.stringify(daily));
  } catch (e) {
    console.error("Unable to save daily excuse:", e);
  }
}

function todayString() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function generateDailyExcuse() {
  const cats = Object.keys(excuseFragments);
  const cat = cats[randomIndex(cats.length)];
  const text = generateExcuseForCategory(cat, "long");
  return { date: todayString(), category: cat, text };
}

function renderDailyExcuse(daily) {
  if (!dailyTextEl || !dailyMetaEl) return;
  dailyTextEl.textContent = daily.text;
  const catLabel = categoryNames[daily.category] || daily.category;
  dailyMetaEl.textContent = `Category: ${catLabel} · updated on ${daily.date}`;
}

let dailyState = loadDaily();

function ensureDailyExcuse() {
  const today = todayString();
  if (!dailyState || dailyState.date !== today) {
    dailyState = generateDailyExcuse();
    saveDaily(dailyState);
  }
  renderDailyExcuse(dailyState);
}

if (dailyUseBtn) {
  dailyUseBtn.addEventListener("click", () => {
    if (!dailyState) {
      dailyState = generateDailyExcuse();
      saveDaily(dailyState);
    }
    currentCategory = dailyState.category || "other";

    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
    });

    excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
    excuseTextEl.textContent = dailyState.text;
    lastExcuseByCategory[currentCategory] = dailyState.text;
    excuseTextEl.classList.add("visible");

    incrementStats(currentCategory);
    showTemporaryStatus("Daily excuse applied to generator.");
  });
}

if (dailyNewBtn) {
  dailyNewBtn.addEventListener("click", () => {
    dailyState = generateDailyExcuse();
    saveDaily(dailyState);
    renderDailyExcuse(dailyState);
    showTemporaryStatus("New daily excuse generated.");
  });
}

// ==========================
//  PWA BANNER
// ==========================
function hasDismissedPwaBanner() {
  try {
    return localStorage.getItem(PWA_KEY) === "1";
  } catch {
    return false;
  }
}

function dismissPwaBanner() {
  try {
    localStorage.setItem(PWA_KEY, "1");
  } catch (e) {
    console.error("Unable to save PWA dismiss:", e);
  }
  if (pwaBanner) pwaBanner.style.display = "none";
}

function isMobileLike() {
  return /iphone|ipad|ipod|android/i.test(navigator.userAgent);
}

function maybeShowPwaBanner() {
  if (!pwaBanner) return;
  if (hasDismissedPwaBanner()) return;
  if (!isMobileLike()) {
    pwaBanner.style.display = "none";
    return;
  }
  if (stats.total >= 5) {
    pwaBanner.style.display = "flex";
  }
}

if (pwaCloseBtn) {
  pwaCloseBtn.addEventListener("click", () => dismissPwaBanner());
}

if (pwaHowBtn) {
  pwaHowBtn.addEventListener("click", () => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || "");
    const msg = isIOS
      ? "On iPhone/iPad: tap the Share icon in your browser, then 'Add to Home Screen'."
      : "On Android: open the browser menu (⋮) and choose 'Add to Home Screen'.";
    showTemporaryStatus(msg, false);
  });
}

// ==========================
//  PANIC MODE (universal)
// ==========================
(function () {
  const btn = document.getElementById("btnPanic");
  if (!btn) return;

  let pressTimer = null;
  let superPanic = false;

  function triggerFlash() {
    btn.classList.add("btn-panic-boost");
    setTimeout(() => btn.classList.remove("btn-panic-boost"), 180);
  }

  function doSuperPanic() {
    superPanic = true;
    const excuse =
      typeof generateSuperPanicExcuse === "function"
        ? generateSuperPanicExcuse()
        : generateExcuseForCategory(currentCategory, "long");

    excuseTextEl.textContent = excuse;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    excuseTextEl.setAttribute("aria-live", "assertive");
    triggerFlash();
    showTemporaryStatus("Super Panic activated!");
    document.dispatchEvent(new Event("excuseGenerated"));
  }

  function doNormalPanic() {
    const excuse = generateExcuseForCategory(currentCategory, "long");
    excuseTextEl.textContent = "Panic mode:\n\n" + excuse;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    excuseTextEl.setAttribute("aria-live", "polite");
    triggerFlash();
    showTemporaryStatus("Panic activated!");
    document.dispatchEvent(new Event("excuseGenerated"));
  }

  function startPress() {
    superPanic = false;
    pressTimer = setTimeout(doSuperPanic, 450);
  }

  function endPress() {
    clearTimeout(pressTimer);
    if (!superPanic) doNormalPanic();
  }

  btn.addEventListener("pointerdown", startPress);
  btn.addEventListener("pointerup", endPress);
  btn.addEventListener("pointerleave", () => clearTimeout(pressTimer));
})();

// ==========================
//  INIT
// ==========================
(function init() {
  Math.random(); // micro warm-up

  if (stats.lastCategory && categoryNames[stats.lastCategory]) {
    currentCategory = stats.lastCategory;

    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
    });

    fastModeToggle.setAttribute("aria-pressed", fastMode);
    themeToggleBtn.setAttribute("aria-pressed", currentTheme === "dark");
  }

  excuseCategoryNameEl.textContent =
    categoryNames[currentCategory] || currentCategory;

  renderStats();
  ensureDailyExcuse();
  renderNewExcuse();
  maybeShowPwaBanner();
})();

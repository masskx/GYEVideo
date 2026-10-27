export type SentenceExample = {
  id: string;
  en: string;
  zh: string;
  slotA?: string;
  slotB?: string;
  emotion: string;
  usageNote: string;
  sceneHint?: string;
};

export type SceneSetup = {
  setting: string;
  speakerA?: string;
  speakerB?: string;
  opener?: string;
  reply?: string;
  conflict: string;
};

export type WrongExpression = {
  text: string;
  whyItFails: string;
};

export type RescueExpression = {
  en: string;
  zh: string;
  whenToUse: string;
  naturalnessNote: string;
};

export type ReuseScene = {
  setting: string;
  line: string;
  zh: string;
};

export type VisualPlan = {
  openingType: 'chat-cold-open' | 'wrong-english-cold-open' | 'mini-conflict' | 'native-fix' | 'comment-bait';
  mainSceneElements: string[];
  beatStyle: 'chat-thread' | 'rescue-drop' | 'roast-then-fix' | 'conflict-callback' | 'message-resend';
  openingShell?: 'warning-stamp' | 'accusation-board' | 'global-split';
  endingShell?: 'split-verdict' | 'vertical-lock' | 'checklist-punch';
  lineArtStyle?: 'ghost-wire' | 'scribble-orbit' | 'contour-burst';
};

export type SentenceInfo = {
  episodeId: string;
  title: string;
  pattern: string;
  patternLines?: string[];
  coreMeaning: string;
  memoryFormula: string;
  useCase: string;
  emotion: string;
  slotALabel?: string;
  slotBLabel?: string;
  slotAHint?: string;
  slotBHint?: string;
  drillLines?: string[];
  summaryLines?: string[];
  coverBadgeText?: string;
  contentType?: 'micro-drama' | 'native-fix' | 'roast' | 'chat-rescue' | 'daily-phrase' | string;
  sentencePattern?: string;
  chinesePainPoint?: string;
  entertainmentHook?: string;
  memorySound?: string;
  sceneMetaphor?: string;
  scene?: SceneSetup;
  wrongExpression?: WrongExpression;
  rescueExpression?: RescueExpression;
  reuseScenes?: ReuseScene[];
  visualPlan?: VisualPlan;
  beatStyle?: VisualPlan['beatStyle'];
  naturalnessNote?: string;
  socialProof?: string;
  commentPrompt?: string;
  creatorNote?: string;
  avoidSimilarityTags?: string[];
};

export const sentenceInfo: SentenceInfo = {
  episodeId: '002_not_saying_saying',
  title: '不是在怪你 是在拉回重点',
  pattern: "I'm not saying A. I'm saying B.",
  patternLines: ["I'm not saying A.", "I'm saying B."],
  coreMeaning: '这句不是抬杠骨架，是纠偏骨架。先把对方以为你在攻击的那层切掉，再把你真正想说的重点亮出来。',
  memoryFormula: '不是在说 A，我是在说 B。',
  useCase: '争执降温、拉回重点、避免人身化、工作沟通里把话题从情绪拉回问题本身。',
  emotion: '克制、压着火、但不退让。像把跑偏的对话硬拽回轨道。',
  slotALabel: 'Misread',
  slotBLabel: 'Point',
  slotAHint: '对方以为你在攻击的那层',
  slotBHint: '你真正想让对方听见的重点',
  drillLines: ["I'm not saying A.", "I'm saying B.", '不是在说 A，我是在说 B。'],
  summaryLines: ['先切掉误会', '再亮出重点'],
  coverBadgeText: 'Chat Rescue',
  contentType: 'chat-rescue',
  sentencePattern: "I'm not saying A. I'm saying B.",
  chinesePainPoint: '很多人一急就越解释越像在怪对方。问题不是你没重点，是你没先把“我不是在骂你”这层处理掉。',
  entertainmentHook: '不是每次都要硬说“你误会了”。有时候你只差一个拉回重点的骨架。',
  memorySound: "I'm not saying A. I'm saying B.",
  sceneMetaphor: '像一场已经跑偏的聊天，被你按住方向盘，强行把话题从情绪护栏拉回主路。',
  scene: {
    setting: '争执跑偏 / 工作沟通',
    speakerA: '对方',
    speakerB: '你',
    opener: "So you think I'm the problem?",
    reply: "I'm not saying you're the problem. I'm saying this approach isn't working.",
    conflict: '对方先听见的是冒犯，你真正想说的重点反而没进去。',
  },
  wrongExpression: {
    text: 'Push the point too early',
    whyItFails: '你如果一上来只讲重点，对方会默认你是在针对人。先切误会，再亮观点，听感差很多。',
  },
  rescueExpression: {
    en: "I'm not saying A. I'm saying B.",
    zh: '我不是在说 A，我是在说 B。',
    whenToUse: '当对方误会你在攻击、否定、挑刺，而你真正想强调的是事实、方法或重点时。',
    naturalnessNote: '这句的价值不在花哨，而在顺序。先拆掉对方的防御，再把重点送进去。',
  },
  reuseScenes: [
    {
      setting: '讨论变成人身化',
      line: "I'm not saying you're lazy. I'm saying this approach isn't working.",
      zh: '我不是在说你懒，我是在说这个方法不行。',
    },
    {
      setting: '关系里情绪拉扯',
      line: "I'm not saying I want to fight. I'm saying this matters to me.",
      zh: '我不是想吵架，我是在说这件事对我很重要。',
    },
  ],
  visualPlan: {
    openingType: 'mini-conflict',
    mainSceneElements: ['chat accusation', 'steering-back metaphor', 'yellow point reveal', 'message correction'],
    beatStyle: 'message-resend',
    openingShell: 'warning-stamp',
    endingShell: 'split-verdict',
    lineArtStyle: 'ghost-wire',
  },
  beatStyle: 'message-resend',
  socialProof: '你一定遇到过这种场面：你明明想说重点，对方却先进入了防御模式。',
  commentPrompt: '你还想要哪种“把对话拉回正轨”的英语骨架？',
  creatorNote: '别急着怼重点。先切掉“你在怪我吗”这层，后面的话才进得去。',
  naturalnessNote: '不是每次都要解释半天。先拆误会，再送重点，社交阻力会小很多。',
  avoidSimilarityTags: ['chat-rescue', 'argument-reset', 'point-correction', 'misread-vs-point'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: "I'm not saying you're lazy. I'm saying this approach isn't working.",
    zh: '我不是在说你懒，我是在说这个方法不行。',
    slotA: "you're lazy",
    slotB: "this approach isn't working",
    emotion: '拉回问题',
    usageNote: '先把人身攻击感切掉，再把话题拉回事情本身。',
    sceneHint: '争执跑偏',
  },
  {
    id: 'example-2',
    en: "I'm not saying I want to fight. I'm saying this matters to me.",
    zh: '我不是想吵架，我是在说这件事对我很重要。',
    slotA: 'I want to fight',
    slotB: 'this matters to me',
    emotion: '压着火',
    usageNote: '特别适合关系表达，保留力度，但不把关系直接点炸。',
    sceneHint: '关系拉扯',
  },
  {
    id: 'example-3',
    en: "I'm not saying you're hopeless. I'm saying you need a better way.",
    zh: '我不是说你没救了，我是在说你需要一个更好的方法。',
    slotA: "you're hopeless",
    slotB: 'you need a better way',
    emotion: '克制纠偏',
    usageNote: '比直接评判人更成熟，也更容易被听进去。',
    sceneHint: '意见纠偏',
  },
];

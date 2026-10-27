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
  episodeId: '010_i_didnt_mean_to_i_was_trying_to',
  title: '解释别越说越尴尬',
  pattern: "I didn't mean to A. I was just trying to B.",
  patternLines: ["I didn't mean to A.", 'I was just trying to B.'],
  coreMeaning: '这不是语法题，是救场骨架。先承认对方感受到的冒犯，再把你的原意放出来，解释才不会越描越黑。',
  memoryFormula: '不是故意 A，只是想 B。',
  useCase: '解释误会、缓和聊天语气、讨论降温、关系修复、补发消息。',
  emotion: '收、补、降温。不是硬辩，是把场面往回拉。',
  slotALabel: 'Offense',
  slotBLabel: 'Intent',
  slotAHint: '对方先感受到的不舒服',
  slotBHint: '你原本真正想做的事',
  drillLines: ["Didn't mean to A.", 'Just trying to B.', '不是故意 A，只是想 B。'],
  summaryLines: ['先认冒犯感', '再交代原意'],
  coverBadgeText: 'Chat Rescue',
  contentType: 'chat-rescue',
  sentencePattern: "I didn't mean to A. I was just trying to B.",
  chinesePainPoint: '很多人一解释就越说越长，越长越像狡辩。不是你没礼貌，是你少了一句能先把气氛拉下来的骨架。',
  entertainmentHook: '解释一长就像狡辩。先别狂解释，先把骨架端出来。',
  memorySound: "I didn't mean to A. I was just trying to B.",
  sceneMetaphor: '像已经发出去的一条冷消息，被你撤回重发成一条更会说话的版本。',
  scene: {
    setting: '聊天降温 / 误会修复',
    speakerA: '你',
    speakerB: '对方',
    opener: "I didn't mean to sound cold. I was just trying to be clear.",
    reply: '这类句子不是解释作文，是社交缓冲垫。',
    conflict: '很多人一紧张就直接讲理由，结果对方还停在被冒犯那一下，根本听不进你的原意。',
  },
  wrongExpression: {
    text: 'Jump straight to reasons',
    whyItFails: '你如果上来就讲理由，对方只会觉得你在替自己开脱。先接住冒犯感，再说原意，听感完全不一样。',
  },
  rescueExpression: {
    en: "I didn't mean to A. I was just trying to B.",
    zh: '我不是故意 A，我只是想 B。',
    whenToUse: '当你说重了、说快了、气氛冷了、或者怕自己表达方式让对方误会时。',
    naturalnessNote: '这句不是道歉模板，是降温骨架。它的作用是先松开对方的防御，再把你的真实意图说出来。',
  },
  reuseScenes: [
    {
      setting: '消息听起来太冷',
      line: "I didn't mean to sound cold. I was just trying to be clear.",
      zh: '我不是故意显得那么冷，只是想说清楚一点。',
    },
    {
      setting: '讨论里把人堵住了',
      line: "I didn't mean to shut you down. I was just trying to move faster.",
      zh: '我不是故意把你压住，只是想把节奏往前推。',
    },
  ],
  visualPlan: {
    openingType: 'mini-conflict',
    mainSceneElements: ['chat bubble tension', 'typing redo', 'hero skeleton slam', 'message resend', 'repair line lock'],
    beatStyle: 'message-resend',
    openingShell: 'warning-stamp',
    endingShell: 'vertical-lock',
    lineArtStyle: 'ghost-wire',
  },
  beatStyle: 'message-resend',
  socialProof: '你大概率也有这种经历：本来只是想解释，结果越解释越像在顶嘴。',
  commentPrompt: '你还想要哪种“社交补救句骨架”？',
  creatorNote: '别一着急就堆理由。先接住对方的感受，再交代你的原意。',
  naturalnessNote: '先认对方感受到的刺，再说你原本想达到的目的。这比上来就讲道理顺得多。',
  avoidSimilarityTags: ['chat-rescue', 'misunderstanding-repair', 'soften-tone', 'social-buffer'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: "I didn't mean to sound cold. I was just trying to be clear.",
    zh: '我不是故意显得很冷，只是想说清楚一点。',
    slotA: 'sound cold',
    slotB: 'be clear',
    emotion: '克制补救',
    usageNote: '特别适合消息补发，先把“你语气不好”这层接住。',
    sceneHint: '冷消息重发',
  },
  {
    id: 'example-2',
    en: "I didn't mean to shut you down. I was just trying to move faster.",
    zh: '我不是故意把你压住，只是想把节奏往前推。',
    slotA: 'shut you down',
    slotB: 'move faster',
    emotion: '讨论降温',
    usageNote: '适合会议、讨论、协作场景，把强势感往下收一点。',
    sceneHint: '讨论区降温',
  },
  {
    id: 'example-3',
    en: "I didn't mean to make it awkward. I was just trying to be honest.",
    zh: '我不是故意把场面弄尴尬，只是想诚实一点。',
    slotA: 'make it awkward',
    slotB: 'be honest',
    emotion: '关系修复',
    usageNote: '适合关系场景，比只会说 sorry 更完整。',
    sceneHint: '深夜解释',
  },
];

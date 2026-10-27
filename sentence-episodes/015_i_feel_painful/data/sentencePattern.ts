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
  avoidSimilarityTags?: string[];
};

export const sentenceInfo: SentenceInfo = {
  episodeId: '015_i_feel_painful',
  title: 'I feel painful 不是我很痛',
  pattern: 'I am in pain / It hurts',
  patternLines: ['I feel painful', 'I am in pain'],
  coreMeaning: '你想说"我很痛"，但 I feel painful 意思是"我摸着让人疼"，把表达疼痛说成了自己是刺猬。',
  memoryFormula: 'painful 形容东西疼，in pain / hurt 形容自己疼。',
  useCase: '摔倒、受伤、身体不舒服时，直接说 I am in pain 或 It hurts。',
  emotion: '扎心打脸，一个字之差，意思从喊疼变自黑。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: '令人疼的 / 摸着手疼',
  slotBHint: '自己疼 / 我身上疼',
  summaryLines: ['别 I feel painful', '说 I am in pain'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '"我很痛" 很多人直译 I feel painful，但 painful 是形容东西的，不能形容自己。',
  entertainmentHook: 'I feel painful 不是我很痛，是我这人摸着让人疼。你说错了就是把喊疼说成了刺猬。',
  memorySound: 'I am in pain. It hurts.',
  sceneMetaphor: '错误表达被红框打碎划掉，正确表达黄字 slam 进来，painful vs in pain 左右对打。',
  scene: {
    setting: '表达疼痛场景',
    speakerA: '你',
    speakerB: '朋友',
    opener: 'What happened to your knee?',
    reply: '别回 I feel painful。你应该说 My knee hurts 或者 I am in pain。',
    conflict: '中文"疼"在英文里有 painful 和 in pain/hurt 两个方向：painful 形容让人疼的东西，in pain/hurt 形容自己疼。',
  },
  wrongExpression: {
    text: 'I feel painful',
    whyItFails: 'painful 是"令人疼痛的"，只能形容东西或经历。说 I feel painful = 我这人令人感到疼。你想表达的是自己疼，应该用 in pain 或 hurt。',
  },
  rescueExpression: {
    en: 'I am in pain / It hurts',
    zh: '我很痛 / 我身上疼',
    whenToUse: '任何时候想说"我很痛/疼/不舒服"用 I am in pain，具体部位疼用 My [部位] hurts 或 It hurts。',
    naturalnessNote: 'painful 形容事物（令人疼的），in pain 形容人（处于疼痛中），hurt 是动词（疼）。同理：My back hurts ≠ My back is painful。',
  },
  reuseScenes: [
    {
      setting: '摔了膝盖',
      line: 'My knee hurts.',
      zh: '我膝盖疼。',
    },
    {
      setting: '不知道哪疼',
      line: 'I am in pain.',
      zh: '我身上疼 / 我很痛。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red X', 'glitch crack', 'painful vs hurt split', 'yellow fix slam'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: 'painful 令人疼的，in pain 人疼。同理：painful injury（疼的伤）≠ I am in pain（我疼）。',
  avoidSimilarityTags: ['chinglish-trap', 'direct-translation', 'painful-vs-in-pain', 'feel-painful'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'I feel painful',
    zh: '我很痛（错误说法 = 我摸着让人疼）',
    slotA: 'I feel painful',
    slotB: 'I am in pain',
    emotion: '打脸',
    usageNote: '一字之差，意思完全反了。',
    sceneHint: '中式直译翻车',
  },
  {
    id: 'example-2',
    en: 'My knee hurts.',
    zh: '我膝盖疼。',
    slotA: 'I feel painful',
    slotB: 'My knee hurts',
    emotion: '顺手可用',
    usageNote: '摔倒了就说这句，别 I feel painful。',
    sceneHint: '真实受伤场景',
  },
  {
    id: 'example-3',
    en: 'It hurts so much.',
    zh: '好疼啊。（hurt 用对了！）',
    slotA: 'It is so painful',
    slotB: 'It hurts so much',
    emotion: '反向提醒',
    usageNote: '说东西疼用 painful，说自己疼用 hurt。',
    sceneHint: '喊疼场景',
  },
];

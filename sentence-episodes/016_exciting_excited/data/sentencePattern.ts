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
  episodeId: '016_exciting_excited',
  title: 'I am exciting 不是我很兴奋',
  pattern: 'I am excited / I am so excited',
  patternLines: ['I am exciting', 'I am excited'],
  coreMeaning: '你想说"我很兴奋"，但 I am exciting 意思是"我这人令人兴奋"，把自嗨说成了我是万人迷。',
  memoryFormula: 'exciting 形容东西令人兴奋，excited 形容自己感到兴奋。',
  useCase: '拿到惊喜消息、期待旅行、听到好消息时，说 I am so excited。',
  emotion: '爆笑打脸，一字之差，从自嗨变自恋。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: '令人兴奋的 / 让人嗨',
  slotBHint: '自己兴奋 / 自己激动',
  summaryLines: ['别 I am exciting', '说 I am excited'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '"我很兴奋" 很多人直译 I am exciting，但这是"我这人令人兴奋/让人嗨"的意思。',
  entertainmentHook: 'I am exciting 不是我很兴奋，是我这人让人兴奋。你说错了就是在夸自己是万人迷。',
  memorySound: 'I am so excited.',
  sceneMetaphor: '错误表达被红框划掉压碎，正确表达黄字 slam 进来，-ing vs -ed 左右对打。',
  scene: {
    setting: '表达兴奋场景',
    speakerA: '你',
    speakerB: '朋友',
    opener: 'You got the tickets?',
    reply: '别回 I am so exciting。你应该说 I am so excited！',
    conflict: '中文"兴奋"在英文里有 exciting 和 excited 两个方向：exciting 形容让人嗨的东西，excited 形容自己嗨。',
  },
  wrongExpression: {
    text: 'I am exciting',
    whyItFails: 'exciting 是"令人兴奋的"，说 I am exciting 等于说"我这人让人亢奋/我是万人迷"。你想表达的是自己感觉兴奋，应该用 excited。',
  },
  rescueExpression: {
    en: 'I am excited / I am so excited',
    zh: '我很兴奋 / 我超激动',
    whenToUse: '任何时候想说"我很兴奋/激动/期待"都用 I am excited。想说"这很令人兴奋"用 It is exciting。',
    naturalnessNote: '-ing 形容事物特性（令人…的），-ed 形容人的感受（自己感到…的）。同理：boring/bored, interesting/interested, exciting/excited。',
  },
  reuseScenes: [
    {
      setting: '抢到票了',
      line: 'I am so excited!',
      zh: '我超激动！',
    },
    {
      setting: '吐槽电影没意思',
      line: 'This movie is not very exciting.',
      zh: '这电影不太刺激。（exciting 用对了！）',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red X', 'glitch crack', '-ing vs -ed split', 'yellow fix slam'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: '-ing 令人…，-ed 自己感到…。exciting/excited, boring/bored, interesting/interested 规律统一。',
  avoidSimilarityTags: ['chinglish-trap', 'direct-translation', 'exciting-vs-excited', 'ing-vs-ed'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'I am exciting',
    zh: '我很兴奋（错误说法 = 我这人让人亢奋）',
    slotA: 'I am exciting',
    slotB: 'I am excited',
    emotion: '打脸',
    usageNote: '一字之差，从自嗨变自恋。',
    sceneHint: '中式直译翻车',
  },
  {
    id: 'example-2',
    en: 'I am so excited!',
    zh: '我超激动！',
    slotA: 'I am so exciting',
    slotB: 'I am so excited',
    emotion: '顺手可用',
    usageNote: '抢到票、收到好消息，直接喊这句。',
    sceneHint: '日常聊天场景',
  },
  {
    id: 'example-3',
    en: 'This movie is not very exciting.',
    zh: '这电影不太刺激。（exciting 用对了！）',
    slotA: 'This movie is not very excited',
    slotB: 'This movie is not very exciting',
    emotion: '反向提醒',
    usageNote: '说东西刺激用 exciting，说自己激动用 excited。',
    sceneHint: '吐槽场景',
  },
];

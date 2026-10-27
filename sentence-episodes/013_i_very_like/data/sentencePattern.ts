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
  episodeId: '013_i_very_like',
  title: '我很喜欢不是 I very like',
  pattern: 'I really like it / I love it',
  patternLines: ['I very like', 'I really like it'],
  coreMeaning: '你想说"我很喜欢"，但 I very like 在英语里是错误的语序，very 不能修饰动词。',
  memoryFormula: 'very 接形容词，really 接动词。',
  useCase: '表达喜欢一首歌、一部电影、一个人、一件事，跟朋友聊天表达偏好时。',
  emotion: '打脸感强，纠正一个几乎人人踩过的中式直译坑。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: 'very 不能修饰动词 like',
  slotBHint: 'really 修饰动词，自然地道',
  summaryLines: ['别 I very like', '说 I really like it'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '"我很喜欢"中文里"很"直接放动词前，但英文 very 只能修饰形容词。',
  entertainmentHook: 'I very like 不是我喜欢，是语法崩了。',
  memorySound: 'I really like it.',
  sceneMetaphor: '错误表达被打碎划掉，正确表达像黄字 slam 进来把它替代掉。',
  scene: {
    setting: '表达喜欢场景',
    speakerA: '你',
    speakerB: '朋友',
    opener: 'Do you like this song?',
    reply: '别回 I very like this song。你应该说 I really like this song。',
    conflict: '中文"很"能放在动词前，英文 very 不能。very 是给形容词用的，really 可以修饰动词和形容词。',
  },
  wrongExpression: {
    text: 'I very like',
    whyItFails: 'very 在英语里只能修饰形容词和副词，不能直接修饰动词 like。中文"很"的语法位置和英文 very 完全不同。',
  },
  rescueExpression: {
    en: 'I really like it / I love it',
    zh: '我很喜欢 / 我超喜欢',
    whenToUse: '日常表达喜欢任何事物时，用 I really like it。程度更强时用 I love it。',
    naturalnessNote: 'really 可以修饰动词和形容词，是表达"非常"最安全的副词。I really like / I really want / I really need 都很地道。',
  },
  reuseScenes: [
    {
      setting: '聊喜欢的歌',
      line: 'I really like this song.',
      zh: '我很喜欢这首歌。',
    },
    {
      setting: '推荐电影',
      line: 'I really like that movie.',
      zh: '我很喜欢那部电影。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red X', 'glitch crack', 'yellow fix slam', 'heart icon'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: 'very 只接形容词/副词，really 接动词和形容词都行。中文"很"不等于英文 very。',
  avoidSimilarityTags: ['chinglish-trap', 'direct-translation', 'very-vs-really', 'word-order'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'I very like',
    zh: '我很喜欢（错误说法）',
    slotA: 'I very like',
    slotB: 'I really like it',
    emotion: '打脸',
    usageNote: '先把错误直接抛出来，再立刻纠正。',
    sceneHint: '中式直译翻车',
  },
  {
    id: 'example-2',
    en: 'I really like this song.',
    zh: '我很喜欢这首歌。',
    slotA: 'I very like this song',
    slotB: 'I really like this song',
    emotion: '顺手可用',
    usageNote: '聊音乐聊电影聊书都能直接套。',
    sceneHint: '日常聊天场景',
  },
  {
    id: 'example-3',
    en: 'I love it.',
    zh: '我超喜欢 / 我爱它。',
    slotA: 'I very like it',
    slotB: 'I love it',
    emotion: '升级版',
    usageNote: '想再强一点，直接用 I love it。',
    sceneHint: '强烈推荐场景',
  },
];

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
  episodeId: '014_i_am_boring',
  title: 'I am boring 不是我很无聊',
  pattern: 'I am bored / I feel bored',
  patternLines: ['I am boring', 'I am bored'],
  coreMeaning: '你想说"我很无聊"，但 I am boring 意思是"我这人很无趣"，把想表达的闷说成了自黑。',
  memoryFormula: 'boring = 令人无聊，bored = 自己无聊。',
  useCase: '跟朋友说自己无聊、解释为什么沉默、表达对某事的厌烦时。',
  emotion: '爆笑打脸，一字之差，意思完全相反。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: '让别人觉得无聊',
  slotBHint: '自己觉得无聊',
  summaryLines: ['别 I am boring', '说 I am bored'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '"我很无聊" 很多人直接用 I am boring，但这是"我很没意思"的意思。',
  entertainmentHook: 'I am boring 不是我很无聊，是我很没意思。你说错了就是在自黑。',
  memorySound: 'I am bored.',
  sceneMetaphor: '错误表达被打碎划掉，正确表达像黄字 slam 进来，-ing 和 -ed 左右对打。',
  scene: {
    setting: '表达无聊场景',
    speakerA: '你',
    speakerB: '朋友',
    opener: 'Why are you so quiet?',
    reply: '别回 I am boring。你应该说 I am just a little bored。',
    conflict: '中文"无聊"在英文里有 boring 和 bored 两个方向：一个是你让别人觉得无聊，一个是你自己觉得无聊。',
  },
  wrongExpression: {
    text: 'I am boring',
    whyItFails: 'boring 是"令人无聊的"，说 I am boring 等于说"我这人很无趣，别人跟我待着会闷"。你想表达的是自己感觉无聊，应该用 bored。',
  },
  rescueExpression: {
    en: 'I am bored / I feel bored',
    zh: '我很无聊 / 我觉得闷',
    whenToUse: '任何时候想说"我很无聊/没劲/闷"都用 I am bored，想说"这很无聊"用 It is boring。',
    naturalnessNote: '-ing 形容事物特性，-ed 形容人的感受。同理：interesting 有趣的 vs interested 感兴趣的，exciting 令人兴奋的 vs excited 感到兴奋的。',
  },
  reuseScenes: [
    {
      setting: '解释为什么沉默',
      line: 'I am just a little bored.',
      zh: '我就是有点无聊。',
    },
    {
      setting: '吐槽电影没意思',
      line: 'This movie is so boring.',
      zh: '这部电影太无聊了。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red X', 'glitch crack', '-ing vs -ed split', 'yellow fix slam'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: '-ing 令人…，-ed 自己感到…。boring/bored, interesting/interested, exciting/excited 都是一样的规律。',
  avoidSimilarityTags: ['chinglish-trap', 'direct-translation', 'boring-vs-bored', 'ing-vs-ed'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'I am boring',
    zh: '我很无聊（错误说法 = 我很没意思）',
    slotA: 'I am boring',
    slotB: 'I am bored',
    emotion: '打脸',
    usageNote: '一字之差，意思完全反了。',
    sceneHint: '中式直译翻车',
  },
  {
    id: 'example-2',
    en: 'I am just a little bored.',
    zh: '我就是有点无聊。',
    slotA: 'I am boring',
    slotB: 'I am bored',
    emotion: '顺手可用',
    usageNote: '别人问你为什么不说话，用这句。',
    sceneHint: '日常聊天场景',
  },
  {
    id: 'example-3',
    en: 'This movie is so boring.',
    zh: '这部电影太无聊了。（boring 用对了！）',
    slotA: 'This movie is so bored',
    slotB: 'This movie is so boring',
    emotion: '反向提醒',
    usageNote: '说东西无聊用 boring，说自己无聊用 bored。',
    sceneHint: '吐槽场景',
  },
];

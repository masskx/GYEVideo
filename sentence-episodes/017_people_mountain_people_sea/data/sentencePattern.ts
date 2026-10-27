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
  episodeId: '017_people_mountain_people_sea',
  title: '人山人海不是 people mountain people sea',
  pattern: 'a sea of people',
  patternLines: ['people mountain people sea', 'a sea of people'],
  coreMeaning: '中文"人山人海"逐字翻成 people mountain people sea，老外完全听不懂，以为你在说什么山海经。',
  memoryFormula: '四字成语不能逐字翻，找英文对应画面。人山人海 = 人像海一样多 → a sea of people。',
  useCase: '景区爆满、地铁挤爆、演唱会人巨多时，形容人多的地道说法。',
  emotion: '爆笑打脸，最经典的 Chinglish meme，你说过就尴尬了。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: '中文逐字硬翻，老外懵了',
  slotBHint: '英文画面感表达',
  summaryLines: ['别 people mountain people sea', '说 a sea of people'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '"人山人海" 很多人脱口就是 people mountain people sea，但这是中文硬翻，英文根本不存在这个说法。',
  entertainmentHook: 'people mountain people sea 不是人山人海，是老外眼里的山海经。你说了别人以为你在编神话。',
  memorySound: 'A sea of people.',
  sceneMetaphor: '错误表达被红框打碎砸烂，正确表达黄字 slam 进来，四个中文字被拆散重组为英文画面。',
  scene: {
    setting: '形容人多场景',
    speakerA: '你',
    speakerB: '朋友',
    opener: 'How was the concert?',
    reply: '别回 people mountain people sea。你说 It was packed，或者 There was a sea of people。',
    conflict: '中文四字成语直接字面翻英文 = 加密通话。老外听完会懵：什么山？什么人？什么海？',
  },
  wrongExpression: {
    text: 'people mountain people sea',
    whyItFails: '这是中文"人山人海"的逐字硬翻，英文里没有这个成语。老外听到会以为你在描述一座人山和一片人海，完全不懂你在说人多。',
  },
  rescueExpression: {
    en: 'a sea of people',
    zh: '人山人海 / 人超多 / 挤爆了',
    whenToUse: '任何想形容人非常多的时候。There were huge crowds. / It was packed. / There was a sea of people.',
    naturalnessNote: '英文形容人多用画面感：a sea of（像海一样的）、packed（塞满的）、crowded（拥挤的）。不要逐字翻中文成语。',
  },
  reuseScenes: [
    {
      setting: '景区人巨多',
      line: 'It was packed with people.',
      zh: '挤爆了，全是人。',
    },
    {
      setting: '演唱会爆满',
      line: 'There was a sea of people.',
      zh: '人山人海。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red X crush', 'glitch fragment', 'word breakup', 'yellow fix slam'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: '中文成语=意象浓缩，英文=画面直描。人山人海=人像海→a sea of people。万马奔腾=万马在跑→thousands of horses galloping。',
  avoidSimilarityTags: ['chinglish-trap', 'direct-translation', 'idiom-translation', 'four-character'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'people mountain people sea',
    zh: '人山人海（错误说法 = 老外听不懂的山海经）',
    slotA: 'people mountain people sea',
    slotB: 'a sea of people',
    emotion: '打脸',
    usageNote: '最经典 Chinglish，你说过就社死了。',
    sceneHint: '中式直译翻车',
  },
  {
    id: 'example-2',
    en: 'It was packed with people.',
    zh: '挤爆了，全是人。',
    slotA: 'people mountain people sea',
    slotB: 'packed with people',
    emotion: '顺手可用',
    usageNote: '景区、地铁、商场人多，通用这句。',
    sceneHint: '日常吐槽场景',
  },
  {
    id: 'example-3',
    en: 'There was a sea of people.',
    zh: '人山人海。（英文画面感表达）',
    slotA: 'There were people mountain people sea',
    slotB: 'There was a sea of people',
    emotion: '反向提醒',
    usageNote: '英文用 a sea of 保持画面感，不是逐字翻。',
    sceneHint: '写作/口语升级',
  },
];

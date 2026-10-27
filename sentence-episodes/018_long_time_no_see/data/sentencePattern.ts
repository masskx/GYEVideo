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
  episodeId: '018_long_time_no_see',
  title: 'Long time no see 能用，但别乱用',
  pattern: "It's been a while",
  patternLines: ['Long time no see', "It's been a while"],
  coreMeaning: 'Long time no see 的确是英语，但极度口语化。正式场合用等于穿拖鞋进写字楼。',
  memoryFormula: 'Long time no see = 朋友之间。It\'s been a while = 任何场合。',
  useCase: '工作中、邮件里、跟不太熟的人、跟客户老师，别说 Long time no see，说 It\'s been a while。',
  emotion: '扎心提醒，你以为会了一句英文，结果用错了场合。',
  slotALabel: '朋友之间',
  slotBLabel: '任何场合',
  slotAHint: '极度口语，别带进办公室',
  slotBHint: '不挑人不挑场合，永远安全',
  summaryLines: ['朋友用 Long time no see', '正式用 It\'s been a while'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '"好久不见" 你只会 Long time no see，但跟老板、客户、老师也这么说就尴尬了。',
  entertainmentHook: 'Long time no see 没错，但你在办公室说这句，等于穿拖鞋进写字楼。',
  memorySound: "It's been a while.",
  sceneMetaphor: '错误场景：正式场合用 Long time no see（红框警告），正确切换：It\'s been a while（黄字 slam）。',
  scene: {
    setting: '正式 vs 朋友场合切换',
    speakerA: '你',
    speakerB: '客户/朋友',
    opener: "It's been a while! How have you been?",
    reply: '跟朋友说 Long time no see 没问题，跟客户说 It\'s been a while 才专业。',
    conflict: 'Long time no see 是中文逐字硬翻的幸存者，但它只活在口语里。写邮件、开会、见客户用这句，直接掉分。',
  },
  wrongExpression: {
    text: 'Long time no see (in formal context)',
    whyItFails: 'Long time no see 确实是英语，但它属于 casual slang。写邮件、见客户、跟老板说话用它，显得不够专业，像把朋友圈语气搬进办公室。',
  },
  rescueExpression: {
    en: "It's been a while",
    zh: '好久不见（通用版）',
    whenToUse: '任何场合想说"好久不见"都安全。见面、邮件、消息、LinkedIn 都用 It\'s been a while。',
    naturalnessNote: 'Long time no see 没错，但只在朋友聊天用。It\'s been a while 才是不挑场合的标准表达。',
  },
  reuseScenes: [
    {
      setting: '跟客户写邮件',
      line: "It's been a while. I hope you're doing well.",
      zh: '好久没联系，希望你一切都好。',
    },
    {
      setting: '跟朋友偶遇',
      line: 'Long time no see! How have you been?',
      zh: '好久不见！最近咋样？（这句用对了！）',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong context flash', 'red X warn', 'tone switch', 'yellow fix slam'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: 'Long time no see = friends only. It\'s been a while = everywhere. 同理：What\'s up 也是朋友专属，正式场合换 How are you。',
  avoidSimilarityTags: ['chinglish-trap', 'register-mistake', 'formal-vs-casual', 'long-time-no-see'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'Long time no see (to your boss)',
    zh: '跟老板说 Long time no see（太随便）',
    slotA: 'Long time no see',
    slotB: "It's been a while",
    emotion: '尴尬',
    usageNote: '朋友可以，老板不行。场合错了，一句话掉分。',
    sceneHint: '场合错位翻车',
  },
  {
    id: 'example-2',
    en: "It's been a while. I hope you're doing well.",
    zh: '好久没联系，希望你一切都好。',
    slotA: "Long time no see. I hope you're doing well.",
    slotB: "It's been a while. I hope you're doing well.",
    emotion: '专业得体',
    usageNote: '写邮件、LinkedIn、正式消息的标准开头。',
    sceneHint: '商务邮件场景',
  },
  {
    id: 'example-3',
    en: 'Long time no see! How have you been?',
    zh: '好久不见！最近咋样？（朋友间用对了，没毛病）',
    slotA: "It's been a while! How have you been?",
    slotB: 'Long time no see! How have you been?',
    emotion: '对号入座',
    usageNote: 'Long time no see 没毛病，但只能跟朋友用。',
    sceneHint: '朋友偶遇场景',
  },
];

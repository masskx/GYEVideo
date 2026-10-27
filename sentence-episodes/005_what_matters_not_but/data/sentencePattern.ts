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
  episodeId: '005_what_matters_not_but',
  title: '别把提醒说成责怪',
  pattern: "It's not what you said. It's how you said it.",
  patternLines: ["It's not what you said.", "It's how you said it."],
  coreMeaning: '这句不是分析语法，是给对话降温。它把焦点从“内容对不对”拉到“语气刺不刺”。',
  memoryFormula: '问题不在内容，在语气。',
  useCase: '解释误会、提醒关系里为什么突然冷场、指出别人不是说错事而是说法太冲。',
  emotion: '克制、清醒、带一点社交观察感。像把已经别扭的气氛一把掰正。',
  slotALabel: 'Content',
  slotBLabel: 'Tone',
  slotAHint: '你以为自己只是在说事',
  slotBHint: '对方实际被刺到的是态度',
  drillLines: ["Not what you said.", "How you said it.", '不是内容，是语气。'],
  summaryLines: ['别只盯内容', '先看说法'],
  coverBadgeText: 'Tone Rescue',
  contentType: 'chat-rescue',
  sentencePattern: "It's not what you said. It's how you said it.",
  chinesePainPoint: '很多人聊天翻车不是观点有多离谱，而是一开口语气就像在上对方。',
  entertainmentHook: '你以为你只是在提醒，对方听到的却像在挨骂。',
  memorySound: "It's how you said it.",
  sceneMetaphor: '像聊天框里同一句内容没改，但语气滤镜突然从攻击模式切回人类模式。',
  scene: {
    setting: '朋友聊天 / 气氛降温',
    speakerA: '对方',
    speakerB: '你',
    opener: 'What did you mean by that?',
    reply: "It's not what you said. It's how you said it.",
    conflict: '你以为是在提点，对方其实是在消化你的态度。',
  },
  wrongExpression: {
    text: 'I just told you.',
    whyItFails: '这句听起来像“我没问题，是你自己玻璃心”，火上浇油的味道太重。',
  },
  rescueExpression: {
    en: "It's not what you said. It's how you said it.",
    zh: '不是你说了什么，是你怎么说的。',
    whenToUse: '当你要解释误会、指出关系里的问题不在内容本身，而在语气和态度时。',
    naturalnessNote: '这句像真实聊天里的判断，不像课堂上拆句型。它能迅速把焦点放到真正的摩擦点上。',
  },
  reuseScenes: [
    {
      setting: '工作里提醒太冲',
      line: "It's not what you said. It's how you said it.",
      zh: '问题不在你提醒了什么，在你提醒出来的那个口气。',
    },
    {
      setting: '关系里先降温',
      line: "I didn't mean to sound harsh. I just wanted to make sure we're on the same page.",
      zh: '我不是想说得那么冲，我只是想确认我们理解一致。',
    },
  ],
  visualPlan: {
    openingType: 'chat-cold-open',
    mainSceneElements: ['chat confrontation', 'tone spotlight', 'wrong phrase strikeout', 'repair resend'],
    beatStyle: 'chat-thread',
    openingShell: 'warning-stamp',
    endingShell: 'vertical-lock',
    lineArtStyle: 'ghost-wire',
  },
  beatStyle: 'chat-thread',
  socialProof: '很多关系不是输在意见不同，是输在语气太像法官。',
  commentPrompt: '你最近听过最像“提醒变责怪”的一句英语是什么？',
  creatorNote: '别老以为自己在说内容。多数时候，最先伤人的其实是你那一下语气。',
  naturalnessNote: '能把“问题不在字面，在听感”讲清楚的句子，才是真正能救场的句子。',
  avoidSimilarityTags: ['chat-rescue', 'tone-fix', 'relationship-cooling', 'what-not-how'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: "It's not what you said. It's how you said it.",
    zh: '不是你说了什么，是你怎么说的。',
    slotA: 'what you said',
    slotB: 'how you said it',
    emotion: '点破',
    usageNote: '这是主答案，不需要铺一堆替代项，直接就能拿去救对话。',
    sceneHint: '聊天降温',
  },
  {
    id: 'example-2',
    en: "I didn't mean to sound harsh. I just wanted to make sure we're on the same page.",
    zh: '我不是想说得那么冲，我只是想确认我们理解一致。',
    slotA: 'sound harsh',
    slotB: "make sure we're on the same page",
    emotion: '补救',
    usageNote: '适合第二拍补充，告诉观众真正落到嘴边时还能怎么说。',
    sceneHint: '工作群补刀后回拉',
  },
];

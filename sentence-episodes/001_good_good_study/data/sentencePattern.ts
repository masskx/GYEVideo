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
  episodeId: '001_good_good_study',
  title: 'Good good study 真不是英语',
  pattern: 'Study hard and make progress every day.',
  patternLines: ['Good good study, day day up.', 'Study hard and make progress every day.'],
  coreMeaning: '“好好学习，天天向上”不能直接拆成英语积木。你那句不是英语，是中文穿了件英文外套。',
  memoryFormula: '别逐字搬中文。先说意思，再说英语。',
  useCase: '学习类 caption、成长向表达、鼓励别人坚持进步的时候。',
  emotion: '经典中式英语打脸局，轻微调侃，但最后一定要给观众一个能拿走的真说法。',
  slotALabel: 'Literal',
  slotBLabel: 'Natural',
  slotAHint: '中文字面对齐',
  slotBHint: '英语重组意思',
  summaryLines: ['别说 Good good study', '先说 Study hard and make progress every day'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  sentencePattern: 'Study hard and make progress every day.',
  chinesePainPoint: '很多人以为这句只是可爱一点的英语，其实外国人听到只会觉得你在硬拼中文词序。',
  entertainmentHook: 'Good good study 不是英语，是中式英语活化石。',
  memorySound: 'Study hard and make progress every day.',
  sceneMetaphor: '错误表达像旧教室墙上的过时标语，正确表达像被黄字重新盖章过的新版口号。',
  scene: {
    setting: '学习打气 / 成长 caption',
    speakerA: '你',
    speakerB: '朋友',
    opener: 'Good good study, day day up.',
    reply: '别再把这句当英语名言用了。',
    conflict: '问题不是你不会鼓励人，是你把中文口号整句照着搬进英语里。',
  },
  wrongExpression: {
    text: 'Good good study, day day up.',
    whyItFails: '它不是自然英语，只是把中文词块一块块换成英文。外国人能猜个大概，但会马上听出不对劲。',
  },
  rescueExpression: {
    en: 'Study hard and make progress every day.',
    zh: '好好学习，天天进步。',
    whenToUse: '你想正经鼓励学习、写成长向文案、或者做学习类 caption 的时候。',
    naturalnessNote: '英语不会追求和中文口号一样押整齐，它更在乎意思顺不顺、像不像真人会说的话。',
  },
  reuseScenes: [
    {
      setting: '写学习类 caption',
      line: 'Keep learning. Keep improving.',
      zh: '继续学习，继续进步。',
    },
    {
      setting: '正经鼓励朋友',
      line: 'Study hard and make progress every day.',
      zh: '好好学，天天进步。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['old slogan wall', 'red cross crush', 'yellow fix slam', 'caption-style rescue line'],
    beatStyle: 'roast-then-fix',
    openingShell: 'accusation-board',
    endingShell: 'checklist-punch',
    lineArtStyle: 'scribble-orbit',
  },
  beatStyle: 'roast-then-fix',
  socialProof: '这句你大概率小时候就说过，问题是它从头到尾都不是自然英语。',
  commentPrompt: '你还想拆哪句“小时候人人都会说”的中式英语？',
  creatorNote: '别把中文口号整句照搬，英语更看重自然表达，不看你字面配得多整齐。',
  naturalnessNote: '中文口号讲整齐，英语表达讲自然。先把意思说顺，比逐字对齐重要得多。',
  avoidSimilarityTags: ['chinglish-trap', 'classic-chinglish', 'study-slogan', 'literal-translation'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'Good good study, day day up.',
    zh: '好好学习，天天向上。（经典中式英语）',
    slotA: 'Good good study, day day up.',
    slotB: 'Study hard and make progress every day.',
    emotion: '经典翻车',
    usageNote: '先把大家都熟的错误句砸出来，停留感最强。',
    sceneHint: '旧式标语翻车',
  },
  {
    id: 'example-2',
    en: 'Study hard and make progress every day.',
    zh: '好好学习，天天进步。',
    slotA: 'literal slogan',
    slotB: 'natural encouragement',
    emotion: '正解落地',
    usageNote: '这是主答案，先稳住这句，不要一开始就塞太多替代项。',
    sceneHint: '黄字主答案',
  },
  {
    id: 'example-3',
    en: 'Keep learning. Keep improving.',
    zh: '继续学习，继续进步。',
    slotA: 'old slogan tone',
    slotB: 'caption-style encouragement',
    emotion: '顺手升级',
    usageNote: '更像短视频 caption 的口气，适合后拍补充，不抢主答案。',
    sceneHint: '成长博主 caption',
  },
];

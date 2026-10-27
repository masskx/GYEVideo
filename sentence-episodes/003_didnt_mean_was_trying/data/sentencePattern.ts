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
  episodeId: '003_didnt_mean_was_trying',
  title: '道歉别只会 say sorry',
  pattern: "I didn't mean to A. I was just trying to B.",
  patternLines: ["I didn't mean to A.", 'I was just trying to B.'],
  coreMeaning: '这句不是空泛示弱，而是先把伤害认下来，再把真实动机摆上来。它的重点不是哭着求原谅，是让关系有台阶可下。',
  memoryFormula: '先认 A，再补 B。',
  useCase: '说重了之后补救、关系降温、解释误会、把一条伤人的话往回救。',
  emotion: '有歉意，但不卑微；有修复感，但不演苦情。像成年人把话说回正轨。',
  slotALabel: 'What Hurt',
  slotBLabel: 'What You Were Trying To Do',
  slotAHint: '对方被刺到的地方',
  slotBHint: '你本来真正想完成的事',
  drillLines: ["Didn't mean to A.", 'Just trying to B.', '先认伤害，再补本意。'],
  summaryLines: ['别只会 sorry', '先止血，再解释'],
  coverBadgeText: 'Repair Line',
  contentType: 'chat-rescue',
  sentencePattern: "I didn't mean to A. I was just trying to B.",
  chinesePainPoint: '很多人一补救就只会反复说 sorry，结果像在打太极，真正该解释的本意反而一直没落地。',
  entertainmentHook: '你不是不会道歉，你是只会道歉，不会修复。',
  memorySound: "I didn't mean to A. I was just trying to B.",
  sceneMetaphor: '像把一条已经发出去的伤人消息先划掉，再补发一个“我真正想表达的是这个”的降温版本。',
  scene: {
    setting: '关系修复 / 说重了往回救',
    speakerA: '对方',
    speakerB: '你',
    opener: 'That really hurt.',
    reply: "I didn't mean to hurt you. I was just trying to be honest.",
    conflict: '你如果只会说 sorry，对方只会继续卡在情绪里；你得把伤害和本意拆开说。',
  },
  wrongExpression: {
    text: 'Only say sorry',
    whyItFails: '只会空道歉，像把情绪抹平，却没有交代你到底哪里不是故意、又到底想干什么。',
  },
  rescueExpression: {
    en: "I didn't mean to A. I was just trying to B.",
    zh: '我不是故意 A，我只是想 B。',
    whenToUse: '当你发现自己说重了、做冲了，想先承认伤害，再解释本意时。',
    naturalnessNote: '这句像真正的关系修复话术，不是背课文式 apology。先止血，再交代动机，听感会成熟很多。',
  },
  reuseScenes: [
    {
      setting: '把话说重后补救',
      line: "I didn't mean to sound harsh. I was just trying to make things clear.",
      zh: '我不是故意说得那么冲，我只是想把事情讲清楚。',
    },
    {
      setting: '关系里降温',
      line: "I didn't mean to push you away. I was just trying to protect myself.",
      zh: '我不是故意把你推开，我只是当时想先保护自己。',
    },
  ],
  visualPlan: {
    openingType: 'chat-cold-open',
    mainSceneElements: ['hurt reaction bubble', 'repair reply', 'red strike on empty apology', 'yellow resend line'],
    beatStyle: 'message-resend',
    openingShell: 'accusation-board',
    endingShell: 'split-verdict',
    lineArtStyle: 'scribble-orbit',
  },
  beatStyle: 'message-resend',
  socialProof: '最尴尬的不是说错，而是说错以后只会原地说 sorry，像没进度条一样。',
  commentPrompt: '你最想救回来的那句“说重了的话”是什么？',
  creatorNote: '别只会认错，认完还得把本意补上，不然关系只会停在疼那里。',
  naturalnessNote: '高级的修复不是多说几个 sorry，而是让对方同时听见“我知道你被伤到了”和“我本来不是冲这个去的”。',
  avoidSimilarityTags: ['chat-rescue', 'apology-repair', 'relationship-soften', 'didnt-mean-was-trying'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: "I didn't mean to hurt you. I was just trying to be honest.",
    zh: '我不是故意伤你，我只是想诚实一点。',
    slotA: 'hurt you',
    slotB: 'be honest',
    emotion: '止血',
    usageNote: '先认刺痛，再交代动机，立刻比一句单薄的 sorry 更像在修复关系。',
    sceneHint: '情绪降温',
  },
  {
    id: 'example-2',
    en: "I didn't mean to sound harsh. I was just trying to make things clear.",
    zh: '我不是故意说得那么冲，我只是想把事情讲清楚。',
    slotA: 'sound harsh',
    slotB: 'make things clear',
    emotion: '拉回正轨',
    usageNote: '很适合工作沟通或争执后补救，把焦点从态度拉回事情。',
    sceneHint: '工作群补救',
  },
  {
    id: 'example-3',
    en: "I didn't mean to push you away. I was just trying to protect myself.",
    zh: '我不是故意把你推开，我只是当时想先保护自己。',
    slotA: 'push you away',
    slotB: 'protect myself',
    emotion: '脆弱但克制',
    usageNote: '更有人味，也更适合关系类内容，不会像教科书模板。',
    sceneHint: '关系回撤',
  },
];

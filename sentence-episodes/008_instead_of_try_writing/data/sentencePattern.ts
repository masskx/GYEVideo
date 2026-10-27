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
  episodeId: '008_instead_of_try_writing',
  title: '写表达别再这么硬',
  pattern: 'Instead of A, try B.',
  patternLines: ['Instead of A,', 'try B.'],
  coreMeaning: '这条不是口语建议，而是写作提纯。它把“普通、笨重、像模板”的表达，直接换成更有画面、更有质感的版本。',
  memoryFormula: '别写 A，换 B。',
  useCase: '写文案、写观点、写反馈、把平庸词换成更像真人会留下来的表达。',
  emotion: '利落、审稿感强、像创作者顺手把一句普通文案修得更能打。',
  slotALabel: 'Template Line',
  slotBLabel: 'Sharper Line',
  slotAHint: '安全但无聊的版本',
  slotBHint: '更有画面或更有质感的版本',
  drillLines: ['Instead of A.', 'Try B.', '别写模板句。'],
  summaryLines: ['先扔掉平词', '再换成更能打的'],
  coverBadgeText: 'Writing Upgrade',
  contentType: 'native-fix',
  sentencePattern: 'Instead of A, try B.',
  chinesePainPoint: '很多英文写作不是语法不对，而是每句话都太安全，安全到一眼就看出是模板。',
  entertainmentHook: '你写得没错，但就是没劲。',
  memorySound: 'Instead of A, try B.',
  sceneMetaphor: '像在白纸上把一行普通句子擦掉，然后用黑笔潦草地改成更锋利的一行。',
  scene: {
    setting: '文案改稿 / 写作升级',
    speakerA: '旧稿',
    speakerB: '改稿版',
    opener: 'Very important.',
    reply: 'Instead of saying "very important," try "hard to ignore."',
    conflict: '前者没错，但像空气；后者一出来，句子立刻有了抓手。',
  },
  wrongExpression: {
    text: 'Safe but flat writing',
    whyItFails: '不是错误，是太像所有人都写得出来的那种句子，观众看完不会停。',
  },
  rescueExpression: {
    en: 'Instead of A, try B.',
    zh: '别写 A，换成 B。',
    whenToUse: '当你在改稿、升级表达、想把一句普通写法换成更有质感的说法时。',
    naturalnessNote: '这句很适合做创作者口吻，不是老师批改作业，而是直接把更好的版本甩出来。',
  },
  reuseScenes: [
    {
      setting: '文案别老写 very important',
      line: 'Instead of saying "very important," try "hard to ignore."',
      zh: '别再写 very important，换成 hard to ignore。',
    },
    {
      setting: '反馈别老写 I think this is good',
      line: 'Instead of saying "I think this is good," try "what works here is..."',
      zh: '别老写 I think this is good，换成 what works here is...',
    },
  ],
  visualPlan: {
    openingType: 'native-fix',
    mainSceneElements: ['crossed-out bland phrase', 'rewrite arrow', 'copy card', 'editor markup energy'],
    beatStyle: 'rescue-drop',
    openingShell: 'accusation-board',
    endingShell: 'checklist-punch',
    lineArtStyle: 'scribble-orbit',
  },
  beatStyle: 'rescue-drop',
  socialProof: '很多人写英文一眼模板味，不是因为不会，是因为舍不得扔掉那些安全但无聊的词。',
  commentPrompt: '你最想换掉的那句“没错但很平”的英文是什么？',
  creatorNote: '别只求正确。正确只是底线，能让人停一下的表达才有传播感。',
  naturalnessNote: '写作升级很多时候不是加难词，是把平词换成更有抓手的词。',
  avoidSimilarityTags: ['native-fix', 'writing-upgrade', 'copy-polish', 'instead-of-try-writing'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'Instead of saying "very important," try "hard to ignore."',
    zh: '别再写 very important，换成 hard to ignore。',
    slotA: '"very important"',
    slotB: '"hard to ignore"',
    emotion: '有画面',
    usageNote: '这类替换特别适合短视频，因为观众能立刻感知“旧版”和“新版”的气质差。',
    sceneHint: '文案提纯',
  },
  {
    id: 'example-2',
    en: 'Instead of saying "I think this is good," try "what works here is..."',
    zh: '别老写 I think this is good，换成 what works here is...',
    slotA: '"I think this is good"',
    slotB: '"what works here is..."',
    emotion: '更专业',
    usageNote: '把模糊好评拉成有信息量的反馈，特别适合写作和审稿场景。',
    sceneHint: '反馈升级',
  },
];

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
  episodeId: '011_open_the_light',
  title: 'Open the light 不是开灯',
  pattern: 'Turn on the light.',
  patternLines: ['Open the light.', 'Turn on the light.'],
  coreMeaning: '你想说的是“把灯打开”，英语里最自然的是 Turn on the light，不是 Open the light。',
  memoryFormula: '开灯先想 turn on，不要硬套 open。',
  useCase: '房间太暗时提醒别人开灯，或者自己进屋顺手说一句。',
  emotion: '一上来就打脸纠错，后面要给观众一个能立刻复用的生活句子。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: '把中文“开”直接套成 open',
  slotBHint: '让灯亮起来，英语更常说 turn on',
  drillLines: ['Open the light. x', 'Turn on the light.', '开灯先想 turn on'],
  summaryLines: ['不是 Open the light', '是 Turn on the light'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  sentencePattern: 'Turn on the light.',
  chinesePainPoint: '很多人一到“开灯、开空调、开电视”这种生活表达，就会下意识把“开”全翻成 open。',
  entertainmentHook: 'Open the light，一听就像中文动词硬套。',
  memorySound: 'Turn on the light.',
  sceneMetaphor: '错句像按错了的开关面板，被红叉和裂纹打断；正确句像黄灯通电一样一下亮起来。',
  scene: {
    setting: '房间太暗',
    speakerA: 'YOU',
    speakerB: 'FRIEND',
    opener: 'Open the light.',
    reply: 'Wait, that sounds off.',
    conflict: '想说开灯，但你把中文“开”直接套进英语里了。',
  },
  wrongExpression: {
    text: 'Open the light.',
    whyItFails: '灯不是被 open，日常英语里更像是被 turn on。',
  },
  rescueExpression: {
    en: 'Turn on the light.',
    zh: '把灯打开。',
    whenToUse: '房间暗、看不清、刚进门时，都可以直接这样说。',
    naturalnessNote: '遇到灯、空调、电视这类设备启动，优先想 turn on，而不是把“开”硬翻成 open。',
  },
  reuseScenes: [
    {
      setting: '客厅太暗',
      line: "It's too dark. Turn on the light.",
      zh: '太暗了，把灯打开。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red cross', 'glitch crack', 'yellow fix slam', 'warning stripe'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: '设备启动类表达别死盯中文动词，要想英语里这件事平时怎么说。',
  avoidSimilarityTags: ['chinglish-trap', 'device-on-off', 'direct-translation', 'open-the-light'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'Open the light.',
    zh: '开灯。',
    slotA: 'Open the light.',
    slotB: 'Turn on the light.',
    emotion: '打脸',
    usageNote: '先把高频错句扔出来，再立刻纠正，观众会马上有代入感。',
    sceneHint: '开灯翻车',
  },
  {
    id: 'example-2',
    en: "It's too dark. Turn on the light.",
    zh: '太暗了，把灯打开。',
    slotA: 'literal open',
    slotB: 'device on',
    emotion: '顺手能用',
    usageNote: '放进真实房间场景里，观众更容易把正确说法直接带走。',
    sceneHint: '房间太暗',
  },
];

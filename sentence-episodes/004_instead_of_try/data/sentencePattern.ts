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
  episodeId: '004_instead_of_try',
  title: '别一上来就 don’t',
  pattern: 'Instead of A, try B.',
  patternLines: ['Instead of A,', 'try B.'],
  coreMeaning: '这句不是换个说法而已，是把“堵人”的建议改成“带路”的建议。你不只是叫停，而是顺手给了出口。',
  memoryFormula: '别 A，换 B。',
  useCase: '提建议、改表达、做口语升级、把太硬的提醒说得更顺耳。',
  emotion: '利落、有判断，但不端老师架子。像一个会说话的人，顺手把对方领到更好的版本。',
  slotALabel: 'Too Hard',
  slotBLabel: 'Try This',
  slotAHint: '太像命令 / 太像堵人',
  slotBHint: '更自然 / 更像真英语',
  drillLines: ['Instead of A.', 'Try B.', '别 A，换 B。'],
  summaryLines: ['别只会堵', '顺手给替代'],
  coverBadgeText: 'Native Fix',
  contentType: 'native-fix',
  sentencePattern: 'Instead of A, try B.',
  chinesePainPoint: '很多建议句的问题不是意思不对，而是太硬、太直接、太像老师纠正作业。',
  entertainmentHook: '你一开口就 don’t，听起来像在管人，不像在帮人。',
  memorySound: 'Instead of A, try B.',
  sceneMetaphor: '像把一扇“别这么说”的红灯，换成一条“你走这边”的黄灯箭头。',
  scene: {
    setting: '给建议 / 口语升级',
    speakerA: '你',
    speakerB: '对方',
    opener: `Don't say "very good."`,
    reply: `Instead of saying "very good," try "really solid."`,
    conflict: '前者像堵住别人，后者像顺手把人领到更自然的表达。',
  },
  wrongExpression: {
    text: 'Only say "don’t"',
    whyItFails: '你如果只有否定，没有替代，对方只会觉得被卡住，不会觉得被帮到。',
  },
  rescueExpression: {
    en: 'Instead of A, try B.',
    zh: '别 A，换成 B。',
    whenToUse: '你想给更自然的说法、更顺耳的表达、或者更有质感的替代时。',
    naturalnessNote: '这句的精髓不是语法，是气质。它不是否定对方，而是把更好的路直接铺出来。',
  },
  reuseScenes: [
    {
      setting: '夸人太学生气',
      line: `Instead of saying "very good," try "really solid."`,
      zh: '别总说 very good，换成 really solid。',
    },
    {
      setting: '安慰人别太空',
      line: `Instead of saying "don't panic," try "take a breath."`,
      zh: '别直接说 don’t panic，换成 take a breath。',
    },
  ],
  visualPlan: {
    openingType: 'native-fix',
    mainSceneElements: ['red stop phrase', 'yellow arrow fix', 'swap card', 'copyable answer'],
    beatStyle: 'rescue-drop',
    openingShell: 'global-split',
    endingShell: 'checklist-punch',
    lineArtStyle: 'contour-burst',
  },
  beatStyle: 'rescue-drop',
  socialProof: '很多人提建议一开口就像在下命令，问题不在建议本身，在你开头那一下太硬。',
  commentPrompt: '你还想把哪句“太像老师说的话”换得更自然？',
  creatorNote: '别只会叫停，顺手给替代，整句气质就变了。',
  naturalnessNote: '好建议不是只会说不行，而是直接把更好的版本递过去。',
  avoidSimilarityTags: ['native-fix', 'replacement-frame', 'soft-suggestion', 'instead-of-try'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: `Instead of saying "very good," try "really solid."`,
    zh: '别总说 very good，换成 really solid。',
    slotA: `saying "very good"`,
    slotB: `"really solid"`,
    emotion: '顺手升级',
    usageNote: '适合口语升级类视频，主观感强，观众很容易偷走。',
    sceneHint: '夸人升级',
  },
  {
    id: 'example-2',
    en: `Instead of saying "don't panic," try "take a breath."`,
    zh: '别直接说 don’t panic，换成 take a breath。',
    slotA: `saying "don't panic"`,
    slotB: `"take a breath"`,
    emotion: '柔一点',
    usageNote: '把命令感往下压，听感会更像真人安慰。',
    sceneHint: '安慰降硬度',
  },
  {
    id: 'example-3',
    en: `Instead of saying "I think," try "the thing is..."`,
    zh: '别一上来就 I think，换成 the thing is...',
    slotA: `saying "I think"`,
    slotB: `"the thing is..."`,
    emotion: '更会说',
    usageNote: '像创作者顺手给你一个更上镜的开口方式。',
    sceneHint: '口播开头升级',
  },
];

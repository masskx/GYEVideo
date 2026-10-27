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
  episodeId: '009_what_matters_is_not_but',
  title: '重点不是这个 是那个',
  pattern: 'What matters is not A, but B.',
  patternLines: ['What matters is not A,', 'but B.'],
  coreMeaning: '这句的力量在于聚焦。它不是简单对比，而是把无关焦点压暗，把真正重要的那一点打亮。',
  memoryFormula: '重要的不是 A，而是 B。',
  useCase: '写观点、做结论、提炼重点、关系表达、把讨论从跑偏拉回核心。',
  emotion: '聚焦、清醒、像一束灯打下来，告诉观众真正该盯哪里。',
  slotALabel: 'Not The Point',
  slotBLabel: 'Real Point',
  slotAHint: '容易分散注意力的部分',
  slotBHint: '你真正想让人记住的焦点',
  drillLines: ['What matters is not A.', 'But B.', '把焦点打亮。'],
  summaryLines: ['别让次要点抢戏', '真正重点要顶到台前'],
  coverBadgeText: 'Focus Lock',
  contentType: 'native-fix',
  sentencePattern: 'What matters is not A, but B.',
  chinesePainPoint: '很多表达不是没内容，是重点太散，结果哪都提了一点，最后谁也记不住。',
  entertainmentHook: '你不是没重点，你是把重点埋在一堆次要信息里。',
  memorySound: 'What matters is not A, but B.',
  sceneMetaphor: '像舞台上灯一暗，只剩一个主角被聚光灯打亮，其他信息全部退后。',
  scene: {
    setting: '观点聚焦 / 重点锁定',
    speakerA: '杂音',
    speakerB: '重点',
    opener: 'It is not about how long it is.',
    reply: 'What matters is not how long it is, but how clear it is.',
    conflict: '前半句只是把杂音压下去，真正能留下来的，是后半句那个被打亮的重点。',
  },
  wrongExpression: {
    text: 'Say everything at once',
    whyItFails: '什么都想讲，结果重点像没出现过。观众只会觉得信息很多，不会记住哪一句。',
  },
  rescueExpression: {
    en: 'What matters is not A, but B.',
    zh: '重要的不是 A，而是 B。',
    whenToUse: '当你要把讨论从次要点拉回关键点、把观点集中起来时。',
    naturalnessNote: '这句特别适合做短视频里的“锁焦句”，它天然带有主次关系和态度感。',
  },
  reuseScenes: [
    {
      setting: '反馈别只看长度',
      line: 'What matters is not how long it is, but how clear it is.',
      zh: '重要的不是它有多长，而是它有多清楚。',
    },
    {
      setting: '表达升级别迷信难词',
      line: 'What matters is not sounding difficult, but sounding precise.',
      zh: '重要的不是听起来多难，而是听起来多准确。',
    },
  ],
  visualPlan: {
    openingType: 'native-fix',
    mainSceneElements: ['dimmed side point', 'spotlight focus', 'yellow slam answer', 'save-this lock'],
    beatStyle: 'roast-then-fix',
    openingShell: 'global-split',
    endingShell: 'vertical-lock',
    lineArtStyle: 'contour-burst',
  },
  beatStyle: 'roast-then-fix',
  socialProof: '很多内容做不出记忆点，不是因为没观点，是因为主次没排出来。',
  commentPrompt: '你最近最想“把重点拎出来”的一句话是什么？',
  creatorNote: '别什么都想讲。重点一散，记忆点就死了。',
  naturalnessNote: '真正有传播感的表达，往往不是信息更多，而是聚焦更狠。',
  avoidSimilarityTags: ['native-fix', 'focus-lock', 'priority-contrast', 'what-matters-is-not-but'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'What matters is not how long it is, but how clear it is.',
    zh: '重要的不是它有多长，而是它有多清楚。',
    slotA: 'how long it is',
    slotB: 'how clear it is',
    emotion: '聚焦',
    usageNote: '把“数量焦虑”换成“质量焦点”，特别适合反馈和观点表达。',
    sceneHint: '反馈锁焦',
  },
  {
    id: 'example-2',
    en: 'What matters is not sounding difficult, but sounding precise.',
    zh: '重要的不是听起来多难，而是听起来多准确。',
    slotA: 'sounding difficult',
    slotB: 'sounding precise',
    emotion: '去伪高级',
    usageNote: '特别适合你的账号调性，能顺手打脸“越难越高级”这种中式误区。',
    sceneHint: '表达升级',
  },
];

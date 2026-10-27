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
  episodeId: '006_not_that_but_that',
  title: '不是这个原因 是那个原因',
  pattern: 'Not that A, but that B.',
  patternLines: ['Not that A,', 'but that B.'],
  coreMeaning: '这句不是炫结构，是帮你把表面原因划掉，再把真正原因顶上来。它特别适合把表达从含糊拉到准确。',
  memoryFormula: '不是 A，而是 B。',
  useCase: '复盘、解释、写观点、分析问题、把“看起来像这样”改成“其实是那样”。',
  emotion: '冷静、有判断、像拿红笔把错原因划掉，再把真原因写正。',
  slotALabel: 'Surface Reason',
  slotBLabel: 'Real Reason',
  slotAHint: '顺手但不准的解释',
  slotBHint: '你真正想强调的原因',
  drillLines: ['Not that A.', 'But that B.', '先划错因，再亮真因。'],
  summaryLines: ['别停在表面原因', '真正原因要顶出来'],
  coverBadgeText: 'Reason Flip',
  contentType: 'native-fix',
  sentencePattern: 'Not that A, but that B.',
  chinesePainPoint: '很多人不是没想法，是解释总停在第一层，看起来像有逻辑，其实没有打中真正原因。',
  entertainmentHook: '你不是没分析，你是总把表面原因当真原因。',
  memorySound: 'Not that A, but that B.',
  sceneMetaphor: '像一张复盘纸上，第一行原因被红笔划掉，第二行真正原因被黄笔重重圈出来。',
  scene: {
    setting: '复盘 / 观点纠偏',
    speakerA: '你',
    speakerB: '读者',
    opener: 'It was not because we had no ideas.',
    reply: "Not that we lacked ideas, but that we couldn't organize them.",
    conflict: '前半句只是把错因先排掉，真正有价值的是后半句把原因打准。',
  },
  wrongExpression: {
    text: 'Stop at the first reason',
    whyItFails: '如果你只停在“看起来像是这样”，表达会显得懒，也显得不够锐利。',
  },
  rescueExpression: {
    en: 'Not that A, but that B.',
    zh: '不是 A，而是 B。',
    whenToUse: '当你要排除一个表面解释，转向一个更准的真实原因时。',
    naturalnessNote: '这句不是书面腔装高级，而是非常利落的纠偏动作。先否掉表层，再给出真正解释。',
  },
  reuseScenes: [
    {
      setting: '复盘内容不够准',
      line: "Not that I lacked ideas, but that I couldn't organize them.",
      zh: '不是我没想法，而是我没把它们组织好。',
    },
    {
      setting: '项目推进卡住',
      line: 'Not that the plan was impossible, but that the timing was wrong.',
      zh: '不是计划不可能，而是时机不对。',
    },
  ],
  visualPlan: {
    openingType: 'native-fix',
    mainSceneElements: ['wrong reason stamp', 'yellow correction line', 'analysis flip', 'copyable frame'],
    beatStyle: 'conflict-callback',
    openingShell: 'warning-stamp',
    endingShell: 'split-verdict',
    lineArtStyle: 'contour-burst',
  },
  beatStyle: 'conflict-callback',
  socialProof: '很多“看起来会分析”的表达，最大问题就是只会讲表面那层。',
  commentPrompt: '你最常写出来的那个“表面原因”是什么？',
  creatorNote: '别停在第一反应。把错因划掉，真正那一层才值得被听见。',
  naturalnessNote: '会说原因不难，难的是把原因说准。这个骨架就是专门干这件事的。',
  avoidSimilarityTags: ['native-fix', 'reason-upgrade', 'analysis-reframe', 'not-that-but-that'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: "Not that I lacked ideas, but that I couldn't organize them.",
    zh: '不是我没想法，而是我没把它们组织好。',
    slotA: 'lacked ideas',
    slotB: "couldn't organize them",
    emotion: '复盘更准',
    usageNote: '从“我不行”升级成“我具体卡在哪”，整个人都显得更清醒。',
    sceneHint: '复盘纠偏',
  },
  {
    id: 'example-2',
    en: 'Not that the plan was impossible, but that the timing was wrong.',
    zh: '不是计划不可能，而是时机不对。',
    slotA: 'the plan was impossible',
    slotB: 'the timing was wrong',
    emotion: '判断更稳',
    usageNote: '特别适合开会、复盘、写观点，不会像在瞎下结论。',
    sceneHint: '会议结论',
  },
];

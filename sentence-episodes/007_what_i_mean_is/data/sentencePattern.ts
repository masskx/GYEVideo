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
  episodeId: '007_what_i_mean_is',
  title: '话说偏了 就用这句拉回来',
  pattern: 'What I mean is A.',
  patternLines: ['What I mean is', 'A.'],
  coreMeaning: '这句不是凑书面感，是纠偏器。前面话说虚了、说偏了、说轻了，都可以用它把真正意思重新落地。',
  memoryFormula: '我真正想表达的是 A。',
  useCase: '补充真实意思、把模糊话说具体、发消息纠偏、做评论补刀、做反馈补准。',
  emotion: '克制、补救、把话扶正。不是重来一遍，是把真正那句搬到台前。',
  slotALabel: 'Blur',
  slotBLabel: 'Actual Meaning',
  slotAHint: '前面那句不够准的版本',
  slotBHint: '你真正想让对方听懂的那句',
  drillLines: ['What I mean is A.', '我真正想表达的是 A。'],
  summaryLines: ['先把虚话收回来', '再把真意落下去'],
  coverBadgeText: 'Chat Rescue',
  contentType: 'chat-rescue',
  sentencePattern: 'What I mean is A.',
  chinesePainPoint: '很多人不是没想法，是第一句太虚太软，真正重点藏在脑子里没说出来。',
  entertainmentHook: '你不是不会表达，你是第一句总爱说虚了。',
  memorySound: 'What I mean is A.',
  sceneMetaphor: '像你发出一条模糊消息后，又立刻补一条“我真正意思是这个”的更准版本。',
  scene: {
    setting: '消息补发 / 讨论补准',
    speakerA: '你',
    speakerB: '对方',
    opener: `It's kind of a problem...`,
    reply: `What I mean is that the problem is getting bigger.`,
    conflict: '你脑子里有更准的意思，但第一句总是先放了个模糊版本出去。',
  },
  wrongExpression: {
    text: 'Stay vague',
    whyItFails: '你如果一直停在模糊层，对方只会感觉到情绪，不会抓到你真正要表达的东西。',
  },
  rescueExpression: {
    en: 'What I mean is A.',
    zh: '我真正想表达的是 A。',
    whenToUse: '当你发现自己前一句太虚、太轻、太跑偏，想把真正重点重新扶正时。',
    naturalnessNote: '这句像一个纠偏键。它不是炫技巧，而是把话重新说准。',
  },
  reuseScenes: [
    {
      setting: '把模糊问题说具体',
      line: 'What I mean is that the problem is getting bigger.',
      zh: '我真正想表达的是，这个问题正在变大。',
    },
    {
      setting: '把态度说清楚',
      line: "What I mean is that I'm not convinced yet.",
      zh: '我真正想表达的是，我现在还没被说服。',
    },
  ],
  visualPlan: {
    openingType: 'comment-bait',
    mainSceneElements: ['blur message', 'precision reveal', 'message resend', 'yellow correction rail'],
    beatStyle: 'message-resend',
    openingShell: 'accusation-board',
    endingShell: 'vertical-lock',
    lineArtStyle: 'scribble-orbit',
  },
  beatStyle: 'message-resend',
  socialProof: '你一定发过这种消息：自己心里明明有重点，打出去却只剩一句模糊版。',
  commentPrompt: '你还想补哪种“说虚了之后拉回来”的表达骨架？',
  creatorNote: '别让模糊版替你发言。把真正那句拎出来，观众和对方都会更快懂你。',
  naturalnessNote: '很多表达问题不是词不够，而是重点没落地。What I mean is 就是那个落地动作。',
  avoidSimilarityTags: ['chat-rescue', 'clarify-meaning', 'message-correction', 'precision-upgrade'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'What I mean is that the problem is getting bigger.',
    zh: '我真正想表达的是，这个问题正在变大。',
    slotA: "it's kind of a problem",
    slotB: 'the problem is getting bigger',
    emotion: '说准了',
    usageNote: '把模糊感收回来，直接把真正判断推到台前。',
    sceneHint: '模糊话补准',
  },
  {
    id: 'example-2',
    en: "What I mean is that I'm not convinced yet.",
    zh: '我真正想表达的是，我现在还没被说服。',
    slotA: "I don't like it",
    slotB: "I'm not convinced yet",
    emotion: '克制保留',
    usageNote: '比单纯说不喜欢更成熟，也更具体。',
    sceneHint: '讨论态度补准',
  },
  {
    id: 'example-3',
    en: 'What I mean is that it needs a clearer structure.',
    zh: '我真正想表达的是，它需要更清晰的结构。',
    slotA: "it's okay",
    slotB: 'it needs a clearer structure',
    emotion: '反馈落地',
    usageNote: '适合写反馈，把“还行”这种废话拉回有效信息。',
    sceneHint: '反馈补准',
  },
];

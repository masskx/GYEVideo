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
  episodeId: '019_add_oil',
  title: '加油不是哪里都说 add oil',
  pattern: "You've got this",
  patternLines: ['add oil', "You've got this"],
  coreMeaning: 'add oil 不是完全不能说，但它带明显的港式/粤语英语语境。你把它当全球通用加油英语，到处乱发，很容易让人愣住。',
  memoryFormula: "全球通用打气先说 You've got this。继续撑住再补 Keep going。",
  useCase: '给朋友打气、鼓励同事、考试前安慰人、健身时喊加油，先用更稳的英文，而不是 everywhere 都说 add oil。',
  emotion: '社交型纠错，不是绝对否定，而是纠正你把地区表达当全球通用表达。',
  slotALabel: 'Region-specific',
  slotBLabel: 'Global',
  slotAHint: '有语境，不是全世界都这么说',
  slotBHint: '不挑人不挑场景，稳',
  summaryLines: ["别 everywhere 都说 add oil", "先说 You've got this"],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  sentencePattern: "You've got this",
  chinesePainPoint: '很多人一想说“加油”，脑子里就只剩 add oil，然后给外国朋友、客户、同学到处发。',
  entertainmentHook: 'add oil 不是不能说，是你把地区表达当全球通用口语，这才尴尬。',
  memorySound: "You've got this.",
  sceneMetaphor: '错误表达像一个只能在局部地图使用的旧导航，正确表达是全地图通用导航。红色 add oil 被压扁，黄色 You\'ve got this 正面 slam 出来。',
  scene: {
    setting: '考试前 / 工作群 / 健身鼓励',
    speakerA: '你',
    speakerB: '朋友 / 同事 / 外国同学',
    opener: "You've got this. Good luck tomorrow.",
    reply: '别把 add oil 当万能加油。想稳一点，先说 You\'ve got this。',
    conflict: 'add oil 在部分地区英语里有人懂，但它不是全球通用打气英语。你 everywhere 都说，别人未必接得住。',
  },
  wrongExpression: {
    text: 'add oil (everywhere)',
    whyItFails: '问题不是 add oil 完全错误，而是它带很强的地区语境。你对所有外国人都这样说，很多人只会停一下：你在说什么油？',
  },
  rescueExpression: {
    en: "You've got this",
    zh: '你可以的 / 你能搞定',
    whenToUse: '安慰、鼓励、考试前、上台前、比赛前、面试前，先用这句最稳。',
    naturalnessNote: "想表达“你可以的”，先用 You've got this。想表达“继续撑住”，再补 Keep going。不要一开始就把 add oil 当全球通用答案。",
  },
  reuseScenes: [
    {
      setting: '朋友明天考试',
      line: "You've got this. You'll do great.",
      zh: '你可以的，明天一定稳。',
    },
    {
      setting: '同事赶项目',
      line: 'Keep going. We are almost there.',
      zh: '继续顶住，快到了。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red warning stamp', 'glitch break', 'yellow hero fix slam', 'region-vs-global contrast'],
    beatStyle: 'roast-then-fix',
    openingShell: 'global-split',
    endingShell: 'checklist-punch',
    lineArtStyle: 'scribble-orbit',
  },
  beatStyle: 'roast-then-fix',
  socialProof: '你大概率也把 add oil 当过全球通用打气英语。',
  commentPrompt: '你还想看哪个最容易脱口而出的中式直翻？',
  creatorNote: '先别把中文逐字搬过去，先想老外平时会不会真这么说。',
  naturalnessNote: "add oil 不是绝对错，而是别滥用。全球通用鼓励先用 You've got this；过程型鼓励再用 Keep going。",
  avoidSimilarityTags: ['chinglish-trap', 'regional-english', 'encouragement', 'add-oil', 'global-vs-local'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'Add oil!',
    zh: '不是哪里都能直接喊这句。',
    slotA: 'add oil',
    slotB: "You've got this",
    emotion: '社交翻车',
    usageNote: '问题不是绝对错误，是你把地区表达当全世界都懂。',
    sceneHint: '跨文化聊天翻车',
  },
  {
    id: 'example-2',
    en: "You've got this. You'll do great.",
    zh: '你可以的，稳住就行。',
    slotA: 'add oil',
    slotB: "You've got this",
    emotion: '稳妥自然',
    usageNote: '考试前、面试前、比赛前，这句最稳。',
    sceneHint: '考试前打气',
  },
  {
    id: 'example-3',
    en: 'Keep going. We are almost there.',
    zh: '继续顶住，快到了。',
    slotA: 'add oil',
    slotB: 'Keep going',
    emotion: '过程型鼓励',
    usageNote: '不是起手主答案，是后续补充型鼓励。',
    sceneHint: '项目冲刺 / 运动鼓励',
  },
];

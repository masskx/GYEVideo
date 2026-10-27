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
  episodeId: '012_eat_medicine',
  title: '吃药不是 eat medicine',
  pattern: 'take medicine / take your medication',
  patternLines: ['eat medicine', 'take medicine'],
  coreMeaning: '你想说的是"吃药"，但 eat medicine 听起来像"把药片当饭吃掉"。',
  memoryFormula: '吃是 eat，吃药是 take。',
  useCase: '告诉别人你在服药、提醒别人吃药、去药店买药时。',
  emotion: '打脸感强，纠正一个几乎人人踩过的坑。',
  slotALabel: 'Wrong',
  slotBLabel: 'Right',
  slotAHint: '把药当饭吃',
  slotBHint: '正确吃法',
  summaryLines: ['别 eat medicine', '说 take medicine'],
  coverBadgeText: 'Chinglish Trap',
  contentType: 'chinglish-trap',
  chinesePainPoint: '每个刚学英语的人都把"吃"硬翻成 eat，但药不是用吃的。',
  entertainmentHook: 'eat medicine 不是吃药，是在吃一盘药。',
  memorySound: 'Take medicine.',
  sceneMetaphor: '错误表达被红叉打碎，正确表达像黄字砸下来把药瓶摆正。',
  scene: {
    setting: '提醒吃药场景',
    speakerA: '你',
    speakerB: '家人',
    opener: 'Have you eaten your medicine today?',
    reply: '不对。你说的是吃一盘药丸当饭吃。应该说 Have you taken your medicine?',
    conflict: '中文的"吃"在英语里有 eat 和 take 两个分支，药走 take 不走 eat。',
  },
  wrongExpression: {
    text: 'eat medicine',
    whyItFails: 'eat 在英语里专指吃食物，medicine 不是食物，英语里是用 take 来表示服用药丸/药水/药片。',
  },
  rescueExpression: {
    en: 'take medicine / take your medication',
    zh: '吃药 / 服药',
    whenToUse: '日常说吃药、提醒别人吃药、在医院说明用药情况，都用 take。',
    naturalnessNote: '英语里 take 的覆盖面很广：take medicine, take a pill, take your medication, take antibiotics。',
  },
  reuseScenes: [
    {
      setting: '提醒吃药',
      line: 'Don\'t forget to take your medicine.',
      zh: '别忘了吃药。',
    },
    {
      setting: '一日三次',
      line: 'I need to take my medicine three times a day.',
      zh: '我需要一天吃三次药。',
    },
  ],
  visualPlan: {
    openingType: 'wrong-english-cold-open',
    mainSceneElements: ['big wrong line', 'red X', 'glitch crack', 'yellow fix slam', 'medicine bottle icon'],
    beatStyle: 'roast-then-fix',
  },
  beatStyle: 'roast-then-fix',
  naturalnessNote: 'eat = 吃食物，take = 吃药、服用。一瓶药不是一碗饭。',
  avoidSimilarityTags: ['chinglish-trap', 'direct-translation', 'word-choice', 'eat-vs-take'],
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: 'eat medicine',
    zh: '吃药（错误说法）',
    slotA: 'eat medicine',
    slotB: 'take medicine',
    emotion: '打脸',
    usageNote: '先把错误直接抛出来，再立刻纠正。',
    sceneHint: '中式直译翻车',
  },
  {
    id: 'example-2',
    en: 'Don\'t forget to take your medicine.',
    zh: '别忘了吃药。',
    slotA: 'eat medicine',
    slotB: 'take medicine',
    emotion: '顺手可用',
    usageNote: '提醒吃药的标准说法，直接拿去用。',
    sceneHint: '家庭提醒场景',
  },
];

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
};

export const sentenceInfo: SentenceInfo = {
  episodeId: '001_not_that_just_that',
  title: '不是不在乎 只是不会说',
  pattern: "It's not that A, it's just that B.",
  patternLines: ["It's not that A,", "it's just that B."],
  coreMeaning: '先拿掉误会，再说出真正原因。',
  memoryFormula: '不是 A，只是 B。',
  useCase: '解释误会、澄清关系、低冲突表达委屈。',
  emotion: '委屈、克制、解释不清。',
  slotALabel: '误会',
  slotBLabel: '真相',
  slotAHint: '别人先入为主理解成的那一层',
  slotBHint: '你真正想说出来的原因',
  drillLines: ['Not that A.', 'Just that B.', '不是 A，只是 B。'],
  summaryLines: ['前半句拿掉误会', '后半句说出真相'],
  coverBadgeText: '句子骨架',
};

export const sentenceExamples: SentenceExample[] = [
  {
    id: 'example-1',
    en: "It's not that I don't care. It's just that I don't know what to say.",
    zh: '不是我不在乎，只是我不知道该说什么。',
    slotA: "I don't care",
    slotB: "I don't know what to say",
    emotion: '委屈',
    usageNote: '先拿掉“你不在乎”的误会，再说出真正卡住你的原因。',
    sceneHint: '已读不回',
  },
  {
    id: 'example-2',
    en: "It's not that I'm angry. It's just that I'm disappointed.",
    zh: '不是我生气了，只是我失望了。',
    slotA: "I'm angry",
    slotB: "I'm disappointed",
    emotion: '克制',
    usageNote: '比直接说 angry 更有层次，也更像真实关系里的失落。',
    sceneHint: '关系降温',
  },
  {
    id: 'example-3',
    en: "It's not that I'm ignoring you. It's just that I need a little time.",
    zh: '不是我不回你，只是我需要一点时间。',
    slotA: "I'm ignoring you",
    slotB: 'I need a little time',
    emotion: '压着情绪',
    usageNote: '很适合聊天降温，不会太硬，也不会像教材句。',
    sceneHint: '删了又打',
  },
];

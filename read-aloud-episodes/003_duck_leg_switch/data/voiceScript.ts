export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const instruction = '自然朗读中英混排文案。中文读中文，遇到英文目标词就读英文。不要解释，不要上课腔，语速适中。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'word-stall',
    text: '小区门口的鹅腿阿姨，靠一个夜宵 stall 火了好多年。',
    emotionInstruction: '直接读正文，像讲一个刚刷到的本地新闻。',
    speedHint: 'fast',
    subtitle: 'stall = 摊位',
    instruction,
  },
  {
    id: 'word-loyal',
    text: '老顾客一直很 loyal，',
    emotionInstruction: '语气带一点熟人信任感。',
    speedHint: 'fast',
    subtitle: 'loyal = 忠诚的',
    instruction,
  },
  {
    id: 'word-suspect',
    text: '直到有人 suspect 肉味不对。',
    emotionInstruction: '读出怀疑冒出来的感觉。',
    speedHint: 'fast',
    subtitle: 'suspect = 怀疑',
    instruction,
  },
  {
    id: 'word-substitute',
    text: '检测一出，所谓鹅腿居然是鸭腿 substitute。',
    emotionInstruction: '在“居然”处有一点震惊。',
    speedHint: 'fast',
    subtitle: 'substitute = 替代品',
    instruction,
  },
  {
    id: 'word-disguise',
    text: '她把鸭腿 disguise 成鹅腿，价格还照收。',
    emotionInstruction: '语气带一点不可思议。',
    speedHint: 'fast',
    subtitle: 'disguise = 伪装',
    instruction,
  },
  {
    id: 'word-expose',
    text: '消息被 expose 后，',
    emotionInstruction: '短句读清楚，像爆料刚出来。',
    speedHint: 'fast',
    subtitle: 'expose = 曝光',
    instruction,
  },
  {
    id: 'word-outrage',
    text: '排队群瞬间 outrage。',
    emotionInstruction: '读出群聊炸锅的情绪。',
    speedHint: 'fast',
    subtitle: 'outrage = 愤怒',
    instruction,
  },
  {
    id: 'word-supplier',
    text: '阿姨说是 supplier 搞错，',
    emotionInstruction: '像转述解释，语气自然。',
    speedHint: 'fast',
    subtitle: 'supplier = 供应商',
    instruction,
  },
  {
    id: 'word-deceive',
    text: '可大家觉得被 deceive。',
    emotionInstruction: '语气沉一点，强调信任受伤。',
    speedHint: 'fast',
    subtitle: 'deceive = 欺骗',
    instruction,
  },
  {
    id: 'word-refund',
    text: '有人要 refund，',
    emotionInstruction: '干脆读出维权感。',
    speedHint: 'fast',
    subtitle: 'refund = 退款',
    instruction,
  },
  {
    id: 'word-scandal',
    text: '有人说这是夜市 scandal。',
    emotionInstruction: '读出事情闹大的感觉。',
    speedHint: 'fast',
    subtitle: 'scandal = 丑闻',
    instruction,
  },
  {
    id: 'word-apology',
    text: '最后她发了 apology，招牌上的“鹅腿”两个字，比鸭腿还尴尬。',
    emotionInstruction: '收尾自然，最后一句带一点冷幽默。',
    speedHint: 'fast',
    subtitle: 'apology = 道歉',
    instruction,
  },
];

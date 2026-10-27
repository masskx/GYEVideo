export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识短视频风格，声音清晰有冲击力，节奏快但不要糊，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'vivid 你可能一直不知道它在说什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: 'vivid 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} viv vit 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'vivid，survive，revive，vital，vitamin。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'vivid / survive / revive / vital / vitamin',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，survive 和 revive 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一种生命力。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一种生命力',
    instruction: `${defaultInstruction} viv vit 要读准，揭示感要强。`,
  },
  {
    id: 'root-viv',
    text: '抓住它。viv，vit，就是 live，生命，活着。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'viv，vit = live，生命，活着。',
    instruction: `${defaultInstruction} viv vit 要读准，语气像下定义。`,
  },
  {
    id: 'word-vivid',
    text: 'vivid 最直白，viv 是活着，id 是状态，像活的一样，画面感很强，就是生动的。',
    emotionInstruction: '像一幅画在眼前跳出来，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'vivid = 活生生的 -> 生动的',
    instruction: `${defaultInstruction} vivid 要读准，生动的落点要干脆。`,
  },
  {
    id: 'word-survive',
    text: 'survive，sur 是 over 越过，vive 是活着，越过灾难活下来，就是幸存。',
    emotionInstruction: '像从废墟中站起来的画面，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'survive = 活过难关 -> 幸存',
    instruction: `${defaultInstruction} survive 要读准，幸存要清楚。`,
  },
  {
    id: 'word-revive',
    text: 'revive，re 是 again 重新，vive 是活着，重新活过来，就是复活、复苏。',
    emotionInstruction: '像枯萎的植物重新变绿一样，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'revive = 重新活过来 -> 复活 / 复苏',
    instruction: `${defaultInstruction} revive 要读准，复活要清楚。`,
  },
  {
    id: 'word-vital',
    text: 'vital，vit 是生命，al 是形容词，和生命息息相关的，就是至关重要的。',
    emotionInstruction: '像心跳监护仪在跳动，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'vital = 关乎生命 -> 至关重要的',
    instruction: `${defaultInstruction} vital 要读准，至关重要的落点要干脆。`,
  },
  {
    id: 'word-vitamin',
    text: 'vitamin，vit 是生命，amin 是胺类物质，维持生命所需的微量物质，就是维生素。',
    emotionInstruction: '像一个营养标签贴上去，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'vitamin = 生命的物质 -> 维生素',
    instruction: `${defaultInstruction} vitamin 要读准，维生素要清楚。`,
  },
  {
    id: 'word-vivacious',
    text: 'vivacious，viv 是活着，acious 是充满，充满生命力的，就是活泼的、快活的。',
    emotionInstruction: '像一个蹦蹦跳跳的人，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'vivacious = 充满生命力 -> 活泼的',
    instruction: `${defaultInstruction} vivacious 要读准，活泼感要出来。`,
  },
  {
    id: 'word-vitality',
    text: 'vitality，就是 vital 的名词，你身上生命力的程度，就是活力、生机。',
    emotionInstruction: '像能量条在往上飙，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'vitality = 生命力的程度 -> 活力 / 生机',
    instruction: `${defaultInstruction} vitality 要读准，活力要清楚。`,
  },
  {
    id: 'word-convivial',
    text: 'convivial，con 是一起，viv 是活着，大家一起活得开心，就是欢乐的。',
    emotionInstruction: '像派对上欢声笑语，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'convivial = 一起快乐活着 -> 欢乐的',
    instruction: `${defaultInstruction} convivial 要读准，欢乐要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，vivid 是活生生的，survive 是活下来，revive 是重新活过来，都离不开 live。',
    emotionInstruction: '快速总览，把 viv vit 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'vivid / survive / revive，都围着 live 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，viv、vit 就是 live，生命，活着。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'viv / vit = live / 活着',
    instruction: `${defaultInstruction} 总结要稳，viv vit 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 viv 或 vit 的词，先问一句，它跟活下去还是跟活得好有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 viv / vit，先想：怎么活？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

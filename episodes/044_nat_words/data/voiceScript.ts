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
    text: 'nature 你可能一直不知道它在说什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: 'nature 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} nat 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'native，nation，nature，innate，renaissance。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'native / nation / nature / innate / renaissance',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，renaissance 和 innate 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一个天生来源。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一个天生来源',
    instruction: `${defaultInstruction} nat birth 要读准，揭示感要强。`,
  },
  {
    id: 'root-nat',
    text: '抓住它。nat，就是 birth，出生，天生。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'nat = birth，出生，天生。',
    instruction: `${defaultInstruction} nat 要读准，语气像下定义。`,
  },
  {
    id: 'word-native',
    text: 'native，nat 是出生，ive 是状态，你出生在哪，你就是哪里的 native，所以是本地的。',
    emotionInstruction: '像在地图上标记出生地，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'native = 出生在哪 -> 本地的',
    instruction: `${defaultInstruction} native 要读准，本地的落点要干脆。`,
  },
  {
    id: 'word-nation',
    text: 'nation，nat 是出生，ion 是群体，同一片土地上出生的人群，就是国家、民族。',
    emotionInstruction: '像一面国旗升起来，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'nation = 出生在同一地的人 -> 国家',
    instruction: `${defaultInstruction} nation 要读准，国家要清楚。`,
  },
  {
    id: 'word-nature',
    text: 'nature，nat 是出生，ure 是状态，天生就是这样的状态，就是自然、天性。',
    emotionInstruction: '像一片原始森林展开，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'nature = 天生的状态 -> 自然',
    instruction: `${defaultInstruction} nature 要读准，自然要清楚。`,
  },
  {
    id: 'word-natural',
    text: 'natural 就是 nature 的形容词，天生就这样、不做作的，就是自然的、天生的。',
    emotionInstruction: '像一道不加修饰的光，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'natural = 天的 -> 自然的 / 天生的',
    instruction: `${defaultInstruction} natural 要读准，天然的落点要干脆。`,
  },
  {
    id: 'word-innate',
    text: 'innate，in 是 inside 里面，nate 是出生，出生就往里面带了，就是天生的、与生俱来的。',
    emotionInstruction: '像基因被点亮一样，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'innate = 出生就带着 -> 天生的',
    instruction: `${defaultInstruction} innate 要读准，天生的要清楚。`,
  },
  {
    id: 'word-naive',
    text: 'naive，也是 nat 变过来的，像刚出生一样什么都不懂，就是天真的、幼稚的。',
    emotionInstruction: '像睁大眼睛看世界的婴儿，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'naive = 像刚出生一样 -> 天真的',
    instruction: `${defaultInstruction} naive 要读准，天真感要出来。`,
  },
  {
    id: 'word-renaissance',
    text: 'renaissance，re 是 again 再次，naissance 是 birth 出生，文化的再次诞生，就是复兴。',
    emotionInstruction: '像沉睡的城市重新被点亮，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'renaissance = 再次出生 -> 复兴',
    instruction: `${defaultInstruction} renaissance 要读准，复兴要清楚。`,
  },
  {
    id: 'word-pregnant',
    text: 'pregnant，pre 是 before 之前，gnant 也是 nat 的变体，出生之前的状态，就是怀孕的。',
    emotionInstruction: '像生命在孕育的画面，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'pregnant = 出生之前 -> 怀孕的',
    instruction: `${defaultInstruction} pregnant 要读准，怀孕要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，native 是出生在哪，nation 是出生在一群人，innate 是出生就带的，都离不开 birth。',
    emotionInstruction: '快速总览，把 nat 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'native / nation / innate，都围着 birth 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，nat 就是 birth，出生，天生。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'nat = birth / 出生',
    instruction: `${defaultInstruction} 总结要稳，nat birth 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 nat 的词，先问一句，它跟出生地有关，还是跟天生的属性有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 nat，先想：生在哪？天生什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

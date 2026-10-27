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
    text: 'generate 你可能一直不知道它在说什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: 'generate 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} gen 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'generate，generation，gene，genius，genuine。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'generate / generation / gene / genius / genuine',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，generation 和 genius 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一个出生动作。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一个出生动作',
    instruction: `${defaultInstruction} gen birth 要读准，揭示感要强。`,
  },
  {
    id: 'root-gen',
    text: '抓住它。gen，就是 birth，出生，产生。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'gen = birth，出生，产生。',
    instruction: `${defaultInstruction} gen 要读准，语气像下定义。`,
  },
  {
    id: 'word-generate',
    text: 'generate，gen 是产生，erate 是动作，把东西弄出来、创造出来，就是产生、生成。',
    emotionInstruction: '像火花迸发出来的感觉，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'generate = 产生出来 -> 生成',
    instruction: `${defaultInstruction} generate 要读准，生成的落点要干脆。`,
  },
  {
    id: 'word-generation',
    text: 'generation，gen 是出生，eration 是过程或集合，同一个时间段出生的一批人，就是一代人。',
    emotionInstruction: '像家族树一代代往下生长，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'generation = 同一批出生 -> 一代人',
    instruction: `${defaultInstruction} generation 要读准，一代人要清楚。`,
  },
  {
    id: 'word-gene',
    text: 'gene，gen 是出生、遗传，生命传递的最基本单位，就是基因。',
    emotionInstruction: '像 DNA 双螺旋在旋转，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'gene = 遗传的基本单位 -> 基因',
    instruction: `${defaultInstruction} gene 要读准，基因要清楚。`,
  },
  {
    id: 'word-genius',
    text: 'genius，gen 是出生，ius 是品质，出生就带的天生能力，就是天才、天赋。',
    emotionInstruction: '像头顶亮起一盏天才灯泡，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'genius = 天生的能力 -> 天才',
    instruction: `${defaultInstruction} genius 要读准，天才的落点要干脆。`,
  },
  {
    id: 'word-genuine',
    text: 'genuine，gen 是出生，uine 是本质，从出生就是真的，所以是真正的、非伪造的。',
    emotionInstruction: '像一个真品标签盖上去，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'genuine = 生而真实 -> 真正的',
    instruction: `${defaultInstruction} genuine 要读准，真正的要清楚。`,
  },
  {
    id: 'word-gender',
    text: 'gender，gen 是种类出生，der 是分类，出生就决定的男女属性，就是性别。',
    emotionInstruction: '像两个性别符号在切换，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'gender = 出生的种类 -> 性别',
    instruction: `${defaultInstruction} gender 要读准，性别要出来。`,
  },
  {
    id: 'word-generous',
    text: 'generous，gen 是 birth 出身，ous 是充满，有高贵出身的品质，就是慷慨的、大方的。',
    emotionInstruction: '像慷慨地递出礼物，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'generous = 高贵出身 -> 慷慨的',
    instruction: `${defaultInstruction} generous 要读准，慷慨要清楚。`,
  },
  {
    id: 'word-genesis',
    text: 'genesis，gen 是出生，esis 是过程，万物出生之初，就是起源、创始。',
    emotionInstruction: '像宇宙大爆炸的起点，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'genesis = 万物之初 -> 起源',
    instruction: `${defaultInstruction} genesis 要读准，起源要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，generate 是产生出来，gene 是遗传的核心，genuine 是生而真实，都离不开 birth。',
    emotionInstruction: '快速总览，把 gen 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'generate / gene / genuine，都围着 birth 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，gen 就是 birth，出生，产生。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'gen = birth / 出生，产生',
    instruction: `${defaultInstruction} 总结要稳，gen birth 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 gen 的词，先问一句，它是从出生来的，还是从产生来的。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 gen，先想：怎么来的？怎么生的？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

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
    text: 'corpse 你可能一直不知道它在说什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: 'corpse 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} corp 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'corpse，corporation，incorporate，corporal，corps。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'corpse / corporation / incorporate / corporal / corps',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，corporation 和 incorporate 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一个身体。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一个身体',
    instruction: `${defaultInstruction} corp body 要读准，揭示感要强。`,
  },
  {
    id: 'root-corp',
    text: '抓住它。corp，就是 body，身体。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'corp = body，身体。',
    instruction: `${defaultInstruction} corp 要读准，语气像下定义。`,
  },
  {
    id: 'word-corpse',
    text: 'corpse 最直白，corp 就是身体，se 是状态，身体没了生命的状态，就是尸体。',
    emotionInstruction: '像一具静卧的身体，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'corpse = 无生命的身体 -> 尸体',
    instruction: `${defaultInstruction} corpse 要读准，尸体的落点要干脆。`,
  },
  {
    id: 'word-corporation',
    text: 'corporation，corp 是身体，oration 是状态，一个法律意义上的身体，就是公司、法人。',
    emotionInstruction: '像一栋总部的建筑拔地而起，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'corporation = 法律身体 -> 公司',
    instruction: `${defaultInstruction} corporation 要读准，公司要清楚。`,
  },
  {
    id: 'word-incorporate',
    text: 'incorporate，in 是进去，corp 是身体，ate 是动作，把东西编进一个身体里，就是合并、纳入。',
    emotionInstruction: '像零件一个个嵌进主体里，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'incorporate = 编进身体 -> 合并',
    instruction: `${defaultInstruction} incorporate 要读准，合并要清楚。`,
  },
  {
    id: 'word-corporal',
    text: 'corporal，corp 是身体，al 是形容词，和身体有关的，就是身体的、肉体的。',
    emotionInstruction: '像拍一下自己的肩膀，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'corporal = 身体的 -> 肉体的',
    instruction: `${defaultInstruction} corporal 要读准，身体的落点要干脆。`,
  },
  {
    id: 'word-corporeal',
    text: 'corporeal，corp 是身体，eal 是物质的，有身体有实体，就是物质的、有形的。',
    emotionInstruction: '像从虚空中凝出一个实体，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'corporeal = 有身体的 -> 物质的 / 有形的',
    instruction: `${defaultInstruction} corporeal 要读准，物质感要清楚。`,
  },
  {
    id: 'word-corpus',
    text: 'corpus，是身体的意思，但更抽象，一个完整的知识整体，就是语料库、全集。',
    emotionInstruction: '像一排书整齐排列在书架上，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'corpus = 知识的整体 -> 语料库 / 全集',
    instruction: `${defaultInstruction} corpus 要读准，语料库感要出来。`,
  },
  {
    id: 'word-corps',
    text: 'corps，也是 corp 身体变来的，一群人的身体组成一个团体，就是军团、团队。',
    emotionInstruction: '像一支军队整齐列队，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'corps = 一群人的身体 -> 军团 / 团队',
    instruction: `${defaultInstruction} corps 要读准，军团要清楚。`,
  },
  {
    id: 'word-corpulent',
    text: 'corpulent，corp 是身体，ulent 是充满，身体充斥着太多东西，就是肥胖的。',
    emotionInstruction: '像一个大腹便便的画面，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'corpulent = 充满身体 -> 肥胖的',
    instruction: `${defaultInstruction} corpulent 要读准，肥胖要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，corpse 是死去的身体，corporation 是法律的实体，incorporate 是编进一个整体，都离不开 body。',
    emotionInstruction: '快速总览，把 corp 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'corpse / corporation / incorporate，都围着 body 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，corp 就是 body，身体。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'corp = body / 身体',
    instruction: `${defaultInstruction} 总结要稳，corp body 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 corp 的词，先问一句，它是看得见的身体，还是看不见的实体。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 corp，先想：什么身体？实体的还是抽象的？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

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
    text: '看到 cap，别只会想到帽子。这个根有三个变体，cap、capt、cept，核心都是拿、抓。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 cap 别只会想帽子',
    instruction: `${defaultInstruction} cap capt cept 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'capture，capable，accept，except，concept。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'capture / capable / accept / except / concept',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，capture 和 concept 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有 cap、capt 或 cept，核心意思就是 take，拿，抓。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: 'cap / capt / cept = take / 拿',
    instruction: `${defaultInstruction} cap capt cept 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'cap，capt，cept，三个变体，核心意思都是 take，拿，抓。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'cap / capt / cept = take / 拿',
    instruction: `${defaultInstruction} 三个变体要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'capture 最直白，capt 是抓，ure 是动作，一把抓住，就是抓捕、俘获。',
    emotionInstruction: '像手铐咔嚓一声，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'capture = 抓住 -> 抓捕 / 俘获',
    instruction: `${defaultInstruction} capture 要读准，抓捕的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'capable，cap 是拿得住，able 是能够，能拿住事情的，就是有能力的。',
    emotionInstruction: '像手掌稳稳接住，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'capable = 能拿住的 -> 有能力的',
    instruction: `${defaultInstruction} capable 要读准，有能力的要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'capacity，是 capable 的名词，你能拿住多少，就是你的容量、你的能力。',
    emotionInstruction: '像水位线在上涨，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'capacity = 拿住多少 -> 容量 / 能力',
    instruction: `${defaultInstruction} capacity 要读准，容量要清楚。`,
  },
  {
    id: 'word-project',
    text: 'accept，ac 是 to 去，cept 是拿，拿过来，就是接受。',
    emotionInstruction: '像双手接过来一样，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'accept = 拿过来 -> 接受',
    instruction: `${defaultInstruction} accept 要读准，接受的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'except，ex 是 out 出去，cept 是拿，拿出去，放在外面，就是除……之外。',
    emotionInstruction: '像把一件东西从列表里划掉，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'except = 拿出去 -> 除……之外',
    instruction: `${defaultInstruction} except 要读准，排除感要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'concept，con 是 together 一起，cept 是拿，把各种想法抓到脑子一起，就是概念。',
    emotionInstruction: '像多个想法聚合成一个词，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'concept = 抓到脑子里 -> 概念',
    instruction: `${defaultInstruction} concept 和 con 要读准，概念感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'intercept，inter 是 between 在中间，cept 是拿，在半路上拿住，就是拦截。',
    emotionInstruction: '像中途截住一个球，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'intercept = 中途拿住 -> 拦截',
    instruction: `${defaultInstruction} intercept 和 inter 要读准，拦截要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'perceive，per 是 through 穿过，ceive 也是 cept 的变体，从表面穿过拿住本质，就是感知。',
    emotionInstruction: '像最后点破本质，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'perceive = 透过表面拿住 -> 感知',
    instruction: `${defaultInstruction} perceive 要读准，感知要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，capture 是抓走，accept 是拿过来，concept 是抓到脑子里，都离不开 take。',
    emotionInstruction: '快速总览，把 cap capt cept 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'capture / accept / concept，都围着 take 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，cap、capt、cept 就是 take，拿，抓。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'cap / capt / cept = take / 拿',
    instruction: `${defaultInstruction} 总结要稳，cap capt cept 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 cap、capt 或 cept 的词，先问一句，它是在拿什么，从哪个方向拿。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 cap / capt / cept，先想：拿了什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

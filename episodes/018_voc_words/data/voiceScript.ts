export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识视频风格，声音清楚有冲击力，节奏快但不要糊，英文单词读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'vocabulary 不是死背，它里面其实藏着呼叫的动作。',
    emotionInstruction: '开场有反常识打断感，像马上纠正一个背单词误区。',
    speedHint: 'very-fast-clear',
    subtitle: 'vocabulary 不是死背',
    instruction: `${defaultInstruction} vocabulary 要读准，开头要强。`,
  },
  {
    id: 'flash-words',
    text: 'vocal，vocabulary，invoke，provoke，revoke。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'vocal / vocabulary / invoke / provoke / revoke',
    instruction: `${defaultInstruction} 英文之间略停顿，invoke、provoke、revoke 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 voc 和 voke，call，呼叫，召唤。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都在“呼叫”',
    instruction: `${defaultInstruction} voc、voke、call、呼叫要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'voc 和 voke，核心意思就是 call，呼叫，召唤。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'voc / voke = call / 呼叫',
    instruction: `${defaultInstruction} voc、voke 和 call 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'vocal，voc 是 call，声音被叫出来，所以 vocal 就是声音的，嗓音的。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'vocal = 声音被叫出 → 声音的',
    instruction: `${defaultInstruction} vocal 要读准，声音的要清楚。`,
  },
  {
    id: 'word-object',
    text: 'evoke，e 是 out，向外，voke 是呼叫，把感觉叫出来，就是唤起，引起。',
    emotionInstruction: '把抽象情绪讲成被叫出来的动作。',
    speedHint: 'fast-clear',
    subtitle: 'evoke = 把感觉叫出 → 唤起',
    instruction: `${defaultInstruction} evoke 要读准，唤起要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'advocate，ad 是 toward，朝向，voc 是发声，朝某个观点发声，就是提倡，支持。',
    emotionInstruction: '强调替观点发声的动作。',
    speedHint: 'fast-clear',
    subtitle: 'advocate = 朝观点发声 → 提倡',
    instruction: `${defaultInstruction} advocate 要读准，提倡要落点。`,
  },
  {
    id: 'word-project',
    text: 'invoke，in 是 inside，voke 是呼叫，从心里或规则里叫出来，就是唤起，援引。',
    emotionInstruction: '有从内部调出来的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'invoke = 向内呼叫 → 唤起 / 援引',
    instruction: `${defaultInstruction} invoke 要读准，唤起和援引要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'provoke，pro 是 forward，向前，voke 是呼叫，向前喊出去引发反应，就是激怒，挑起。',
    emotionInstruction: '有刺激反应的画面感，但不要太夸张。',
    speedHint: 'fast-clear',
    subtitle: 'provoke = 向前呼叫 → 激怒 / 挑起',
    instruction: `${defaultInstruction} provoke 要读准，激怒要短促。`,
  },
  {
    id: 'word-eject',
    text: 'revoke，re 是 back，回来，voke 是呼叫，把命令叫回来，就是撤销。',
    emotionInstruction: '像撤回一条命令，短促直接。',
    speedHint: 'fast-clear',
    subtitle: 'revoke = 叫回来 → 撤销',
    instruction: `${defaultInstruction} revoke 要读准，撤销要落点。`,
  },
  {
    id: 'word-abject',
    text: 'convoke，con 是 together，一起，voke 是呼叫，把大家一起叫来，就是召集。',
    emotionInstruction: '生活化场景，一群人被叫来。',
    speedHint: 'fast-clear',
    subtitle: 'convoke = 一起叫来 → 召集',
    instruction: `${defaultInstruction} convoke 要读准，召集要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'vocation，voc 是 call，像被一件事召唤去做，所以是职业，也可以是使命。',
    emotionInstruction: '稍微有使命感，但保持知识视频节奏。',
    speedHint: 'fast-clear',
    subtitle: 'vocation = 被召唤 → 职业 / 使命',
    instruction: `${defaultInstruction} vocation 要读准，职业和使命要清楚。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：vocal 是声音的，evoke 是叫出感觉，provoke 是叫出反应，revoke 是叫回来。',
    emotionInstruction: '快速总览，把 call 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'vocal / evoke / provoke / revoke，都围着 call 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：voc 和 voke 等于 call，呼叫，召唤。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'voc / voke = call：呼叫，召唤',
    instruction: `${defaultInstruction} 总结要稳，voc、voke 和 call 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 voc 或 voke，先想：谁在呼叫，叫出了什么。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 voc / voke，先想：谁在叫？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

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
    text: '看到 fac，别只会想到 factory。这个根其实有三个变体，fac、fact、fect，核心都是做和制造。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 fac 别只会想 factory',
    instruction: `${defaultInstruction} fac fact fect 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'factory，manufacture，facilitate，defect，perfect。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'factory / manufacture / facilitate / defect / perfect',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，manufacture 和 facilitate 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有 fac、fact 或 fect，核心意思就是 make，做，制造。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: 'fac / fact / fect = make / 做',
    instruction: `${defaultInstruction} fac fact fect 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'fac，fact，fect，三个变体，核心意思都是 make，做，制造。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'fac / fact / fect = make / 做',
    instruction: `${defaultInstruction} 三个变体要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'factory 最直白，fact 是制造，ory 是地方，制造东西的地方，就是工厂。',
    emotionInstruction: '像工厂机器在运转，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'factory = 制造的地方 -> 工厂',
    instruction: `${defaultInstruction} factory 要读准，工厂的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'manufacture 更进一步，manu 是 hand 手，fact 是制造，用手去制造，就是生产制造。',
    emotionInstruction: '像一个手工工坊，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'manufacture = 手工制造 -> 生产',
    instruction: `${defaultInstruction} manufacture 和 manu 要读准，制造要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'facilitate，fac 是做事，ilit 让起来容易，就是让事情好做，促进。',
    emotionInstruction: '像推一把让事情变顺，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'facilitate = 让事情好做 -> 促进',
    instruction: `${defaultInstruction} facilitate 要读准，促进感要出来。`,
  },
  {
    id: 'word-project',
    text: 'factor，fact 是做，or 是执行者，能做事情、推动事情的东西，就是因素。',
    emotionInstruction: '像一个关键齿轮在转动，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'factor = 做事情的东西 -> 因素',
    instruction: `${defaultInstruction} factor 要读准，因素的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'defect，de 是 away 偏离，fect 是制造，偏离了该有的样子，就是缺陷。',
    emotionInstruction: '像一个瑕疵被放大，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'defect = 做偏离了 -> 缺陷',
    instruction: `${defaultInstruction} defect 要读准，缺陷要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'perfect，per 是 thoroughly 彻底，fect 是做，把一件事做彻底了，就是完美的。',
    emotionInstruction: '像完美两个字盖章上去，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'perfect = 做彻底了 -> 完美的',
    instruction: `${defaultInstruction} perfect 要读准，完美感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'affect，af 是 to 去，fect 是做，去做一件事让它产生变化，就是影响。',
    emotionInstruction: '像波纹扩散开来，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'affect = 去做 -> 影响',
    instruction: `${defaultInstruction} affect 要读准，影响要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'effect，ef 是 out 出来，fect 是做，做出来的结果，就是效果。',
    emotionInstruction: '像最后一锤定音，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'effect = 做出来的结果 -> 效果',
    instruction: `${defaultInstruction} effect 要读准，效果要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，factory 是制造的地方，manufacture 是手工制造，factor 是推动制造的因素，都离不开 make。',
    emotionInstruction: '快速总览，把 fac fact fect 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'factory / manufacture / factor，都围着 make 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，fac、fact、fect 就是 make，做，制造。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'fac / fact / fect = make / 做',
    instruction: `${defaultInstruction} 总结要稳，fac fact fect 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 fac、fact 或 fect 的词，先问一句，它是在做还是在被做。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 fac / fact / fect，先想：做了什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

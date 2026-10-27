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
    text: '你真的会背 spect 吗？这些词不是乱背的。',
    emotionInstruction: '开场有质疑感，像打断观众的惯性。',
    speedHint: 'very-fast-clear',
    subtitle: '你真的会背 spect 吗？',
    instruction: `${defaultInstruction} 开头要有反问和停顿，但不要拖。`,
  },
  {
    id: 'flash-words',
    text: 'inspect，respect，suspect，expect，prospect。',
    emotionInstruction: '快速闪词，英文清楚，像连续抛出证据。',
    speedHint: 'fast',
    subtitle: 'inspect / respect / suspect / expect / prospect',
    instruction: `${defaultInstruction} 英文之间略停顿，整体保持快节奏。`,
  },
  {
    id: 'same-root',
    text: '它们其实都在看，只是看的方向不一样。',
    emotionInstruction: '揭秘感，像突然把规律翻出来。',
    speedHint: 'fast-clear',
    subtitle: '它们其实都在“看”',
    instruction: `${defaultInstruction} 看这个字要强调。`,
  },
  {
    id: 'root-ject',
    text: 'spect，核心意思就是 look，看。',
    emotionInstruction: '词根砸入画面，简短坚定。',
    speedHint: 'fast-clear',
    subtitle: 'spect = look / 看',
    instruction: `${defaultInstruction} spect 和 look 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'inspect，in 是往里面，spect 是看，往里面仔细看，就是检查。',
    emotionInstruction: '讲得像拆词卡片，动作感强。',
    speedHint: 'fast-clear',
    subtitle: 'inspect = 往里面看 → 检查',
    instruction: `${defaultInstruction} inspect 读准，中文解释要短。`,
  },
  {
    id: 'word-object',
    text: 'respect，re 有再一次的感觉，反复看，认真看，就是尊重。',
    emotionInstruction: '把尊重讲得有画面感。',
    speedHint: 'fast-clear',
    subtitle: 'respect = 认真看 → 尊重',
    instruction: `${defaultInstruction} respect 读准，突出认真看。`,
  },
  {
    id: 'word-subject',
    text: 'suspect，sub 是下面，从下面偷偷看，所以 suspect 是怀疑。',
    emotionInstruction: '带一点悬念感，但不要夸张。',
    speedHint: 'fast-clear',
    subtitle: 'suspect = 偷偷看 → 怀疑',
    instruction: `${defaultInstruction} suspect 读准，偷偷看要有画面。`,
  },
  {
    id: 'word-project',
    text: 'expect，ex 是向外，往外看结果，就是期待。',
    emotionInstruction: '轻快，像看向未来。',
    speedHint: 'fast-clear',
    subtitle: 'expect = 向外看 → 期待',
    instruction: `${defaultInstruction} expect 读准，向外看要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'prospect，pro 是向前，往前看见的可能，就是前景。',
    emotionInstruction: '解释要有方向感。',
    speedHint: 'fast-clear',
    subtitle: 'prospect = 向前看 → 前景',
    instruction: `${defaultInstruction} prospect 读准，前景两个字稳一点。`,
  },
  {
    id: 'word-eject',
    text: 'spectator，spect 是看，ator 是人，所以 spectator 就是观众。',
    emotionInstruction: '补充高频名词，简单直接。',
    speedHint: 'fast-clear',
    subtitle: 'spectator = 看的人 → 观众',
    instruction: `${defaultInstruction} spectator 稍慢，保证听清。`,
  },
  {
    id: 'word-abject',
    text: 'spectacle，能被大家看的大场面，就是奇观。',
    emotionInstruction: '画面感更强，像大场面出现。',
    speedHint: 'fast-clear',
    subtitle: 'spectacle = 值得看的场面 → 奇观',
    instruction: `${defaultInstruction} spectacle 读准，奇观有惊讶感。`,
  },
  {
    id: 'word-deject',
    text: 'retrospect，retro 是向后，往回看，就是回顾。',
    emotionInstruction: '收住节奏，清楚总结最后一个词。',
    speedHint: 'fast-clear',
    subtitle: 'retrospect = 往回看 → 回顾',
    instruction: `${defaultInstruction} retrospect 不要糊，回顾两个字清楚。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：往里看是 inspect，认真看是 respect，偷偷看是 suspect，向外看是 expect，向前看是 prospect。',
    emotionInstruction: '快速总览，把视线方向连起来。',
    speedHint: 'fast',
    subtitle: '往里看 / 认真看 / 偷偷看 / 向外看 / 向前看',
    instruction: `${defaultInstruction} 每个词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住一束视线：spect 等于 look，看。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'spect = look：看',
    instruction: `${defaultInstruction} 总结要稳，spect 和 look 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 spect，先问：它是在往哪里看。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 spect，先想：往哪里看',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

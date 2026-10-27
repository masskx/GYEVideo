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
    text: '给我三秒，让你记住五个 port 单词。别再一个个死记。',
    emotionInstruction: '开场强打断，像短视频挑战，第一句要抓人。',
    speedHint: 'very-fast-clear',
    subtitle: '给我 3 秒，让你记住 5 个 port 单词',
    instruction: `${defaultInstruction} 开头要像挑战，不要慢。`,
  },
  {
    id: 'flash-words',
    text: 'import，export，transport，support，report。',
    emotionInstruction: '快速闪词，英文单词清晰，像连续点名。',
    speedHint: 'fast',
    subtitle: 'import / export / transport / support / report',
    instruction: `${defaultInstruction} 英文之间稍微停顿，但整体要快。`,
  },
  {
    id: 'same-root',
    text: '它们根本不是孤立单词，里面都藏着同一个搬运动作。',
    emotionInstruction: '制造反差，像突然揭开规律。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着同一个动作',
    instruction: `${defaultInstruction} 这句要有揭秘感。`,
  },
  {
    id: 'root-ject',
    text: 'port，核心意思就是 carry，拿，带，运输。',
    emotionInstruction: '词根砸入画面，语气坚定。',
    speedHint: 'fast-clear',
    subtitle: 'port = carry / 拿，带，运输',
    instruction: `${defaultInstruction} port 和 carry 要读清楚。`,
  },
  {
    id: 'word-reject',
    text: 'import，im 表示向里面，把东西带进来，就是进口。',
    emotionInstruction: '解释要短，像拆词卡片。',
    speedHint: 'fast-clear',
    subtitle: 'import = 带进来 → 进口',
    instruction: `${defaultInstruction} import 读准，中文解释压缩。`,
  },
  {
    id: 'word-object',
    text: 'export，ex 表示向外，把东西带出去，就是出口。',
    emotionInstruction: '和上一词形成对照，语气干脆。',
    speedHint: 'fast-clear',
    subtitle: 'export = 带出去 → 出口',
    instruction: `${defaultInstruction} export 读准，突出 ex 向外。`,
  },
  {
    id: 'word-subject',
    text: 'transport，trans 表示穿过，把东西运过去，就是运输。',
    emotionInstruction: '画面感强一点，像东西被运走。',
    speedHint: 'fast-clear',
    subtitle: 'transport = 运过去 → 运输',
    instruction: `${defaultInstruction} transport 稍微读慢一点，保证清楚。`,
  },
  {
    id: 'word-project',
    text: 'support，sup 在下面，port 是托住，所以 support 就是支持。',
    emotionInstruction: '强调下面托住的动作，讲得形象。',
    speedHint: 'fast-clear',
    subtitle: 'support = 从下面托住 → 支持',
    instruction: `${defaultInstruction} support 读准，托住两个字要有画面感。`,
  },
  {
    id: 'word-inject',
    text: 'report，re 是回来，把消息带回来，就是报告。',
    emotionInstruction: '像把消息递回来，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'report = 把消息带回来 → 报告',
    instruction: `${defaultInstruction} report 读准，突出消息带回来。`,
  },
  {
    id: 'word-eject',
    text: 'portable，able 表示能够，能带着走的，就是便携的。',
    emotionInstruction: '补充高频形容词，轻快一点。',
    speedHint: 'fast-clear',
    subtitle: 'portable = 能带着走 → 便携的',
    instruction: `${defaultInstruction} portable 不要读太快。`,
  },
  {
    id: 'word-abject',
    text: 'porter，负责搬东西的人，就是搬运工。',
    emotionInstruction: '像补一张记忆卡，简单直接。',
    speedHint: 'fast-clear',
    subtitle: 'porter = 搬东西的人 → 搬运工',
    instruction: `${defaultInstruction} porter 读准，语气自然。`,
  },
  {
    id: 'word-deject',
    text: 'deport，是把人带离某地，所以是驱逐出境。',
    emotionInstruction: '稍微严肃一点，但不要拖慢。',
    speedHint: 'fast-clear',
    subtitle: 'deport = 带离某地 → 驱逐出境',
    instruction: `${defaultInstruction} deport 读准，中文解释简短。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：进来是 import，出去是 export，运过去是 transport，托住是 support，带回消息是 report。',
    emotionInstruction: '快速总览，像把所有卡片连成线。',
    speedHint: 'fast',
    subtitle: '进来 / 出去 / 运过去 / 托住 / 带回消息',
    instruction: `${defaultInstruction} 这句节奏快，但每个词要清楚。`,
  },
  {
    id: 'summary',
    text: '记住一个动作：port 等于 carry，拿，带，运输。',
    emotionInstruction: '总结要有记忆点，语气上扬。',
    speedHint: 'fast-clear',
    subtitle: 'port = carry：拿、带、运输',
    instruction: `${defaultInstruction} 总结句要像口诀。`,
  },
  {
    id: 'outro',
    text: '下次看到 port，先想：它在把什么带到哪里。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 port，先想：把什么带到哪里',
    instruction: `${defaultInstruction} 收尾稳一点，留一点记忆回响。`,
  },
];

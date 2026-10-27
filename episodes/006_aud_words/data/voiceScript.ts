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
    text: 'audio 不只是音频，它背后藏着一个听的词根。',
    emotionInstruction: '开场有反常识感，像打断观众惯性。',
    speedHint: 'very-fast-clear',
    subtitle: 'audio 不只是音频',
    instruction: `${defaultInstruction} 开头要有打断感，audio 读准。`,
  },
  {
    id: 'flash-words',
    text: 'audio，audience，audit，audible，audition。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'audio / audience / audit / audible / audition',
    instruction: `${defaultInstruction} 英文之间略停顿，整体保持快节奏。`,
  },
  {
    id: 'same-root',
    text: '它们其实都和听有关，只是听的场景不一样。',
    emotionInstruction: '揭秘感，像突然把一串词连起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都和“听”有关',
    instruction: `${defaultInstruction} 听这个字要强调。`,
  },
  {
    id: 'root-ject',
    text: 'aud，核心意思就是 hear，听。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'aud = hear / 听',
    instruction: `${defaultInstruction} aud 和 hear 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'audio，aud 是听，audio 就是和声音、音频有关。',
    emotionInstruction: '像拆开一张词根卡，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'audio = 和听有关 → 音频',
    instruction: `${defaultInstruction} audio 读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'audience，aud 是听，ence 是名词，坐在那里听的人，就是观众。',
    emotionInstruction: '有画面感，像镜头扫到观众席。',
    speedHint: 'fast-clear',
    subtitle: 'audience = 听的人 → 观众',
    instruction: `${defaultInstruction} audience 稍慢，保证听清。`,
  },
  {
    id: 'word-subject',
    text: 'audit，原本有听账目的感觉，后来变成审计，检查。',
    emotionInstruction: '带一点推理感，但不要太严肃。',
    speedHint: 'fast-clear',
    subtitle: 'audit = 仔细听查 → 审计',
    instruction: `${defaultInstruction} audit 读准，审计两个字清楚。`,
  },
  {
    id: 'word-project',
    text: 'audible，ible 表示能够，audible 就是能够被听见的。',
    emotionInstruction: '解释直接，像公式落地。',
    speedHint: 'fast-clear',
    subtitle: 'audible = 能被听见 → 听得见的',
    instruction: `${defaultInstruction} audible 不要糊。`,
  },
  {
    id: 'word-inject',
    text: 'audition，先听一段表现，再决定要不要通过，就是试镜，试听。',
    emotionInstruction: '有舞台感，但保持知识视频节奏。',
    speedHint: 'fast-clear',
    subtitle: 'audition = 试听表现 → 试镜',
    instruction: `${defaultInstruction} audition 读准，试镜试听清楚。`,
  },
  {
    id: 'word-eject',
    text: 'auditorium，很多人坐在一起听的地方，就是礼堂。',
    emotionInstruction: '补充场景词，画面开阔一点。',
    speedHint: 'fast-clear',
    subtitle: 'auditorium = 听众聚集地 → 礼堂',
    instruction: `${defaultInstruction} auditorium 稍慢，保证清晰。`,
  },
  {
    id: 'word-abject',
    text: 'inaudible，in 表示不，听不见的，就是 inaudible。',
    emotionInstruction: '简单反义，讲得干脆。',
    speedHint: 'fast-clear',
    subtitle: 'inaudible = 听不见的',
    instruction: `${defaultInstruction} inaudible 读准。`,
  },
  {
    id: 'word-deject',
    text: 'audiobook，audio 加 book，用来听的书，就是有声书。',
    emotionInstruction: '生活化，轻快收束最后一个词。',
    speedHint: 'fast-clear',
    subtitle: 'audiobook = 用来听的书 → 有声书',
    instruction: `${defaultInstruction} audiobook 读准，有声书清楚。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：audio 是音频，audience 是听的人，audit 是仔细听查，audible 是听得见，audition 是试听表现。',
    emotionInstruction: '快速总览，把 hear 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'audio / audience / audit / audible / audition，都围着 hear 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这只耳朵：aud 等于 hear，听。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'aud = hear：听',
    instruction: `${defaultInstruction} 总结要稳，aud 和 hear 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 aud，先想：这里是谁在听。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 aud，先想：谁在听',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

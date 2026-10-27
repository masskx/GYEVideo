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
    text: '你以为 video 只是视频？其实它背后藏着一个词根。',
    emotionInstruction: '开场像打断观众认知，语气有反常识感。',
    speedHint: 'very-fast-clear',
    subtitle: 'video 不只是视频',
    instruction: `${defaultInstruction} 开头要有打断感，video 读准。`,
  },
  {
    id: 'flash-words',
    text: 'video，vision，visible，visual，evidence。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'video / vision / visible / visual / evidence',
    instruction: `${defaultInstruction} 英文之间略停顿，整体保持快节奏。`,
  },
  {
    id: 'same-root',
    text: '它们其实都和看见有关，只是变成了不同场景。',
    emotionInstruction: '揭秘感，像把一串词突然连起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都和“看见”有关',
    instruction: `${defaultInstruction} 看见两个字要强调。`,
  },
  {
    id: 'root-ject',
    text: 'vis 和 vid，核心意思就是 see，看见。',
    emotionInstruction: '词根砸入画面，坚定，短促。',
    speedHint: 'fast-clear',
    subtitle: 'vis / vid = see / 看见',
    instruction: `${defaultInstruction} vis、vid、see 都要读准。`,
  },
  {
    id: 'word-reject',
    text: 'vision，vis 是看见，vision 就是视力，愿景，脑子里看到的画面。',
    emotionInstruction: '画面感强，像打开一张记忆卡。',
    speedHint: 'fast-clear',
    subtitle: 'vision = 看见的画面 → 视力 / 愿景',
    instruction: `${defaultInstruction} vision 读准，中文解释要短促。`,
  },
  {
    id: 'word-object',
    text: 'visible，ible 表示能够，visible 就是能够被看见，可见的。',
    emotionInstruction: '解释清楚，节奏稳定。',
    speedHint: 'fast-clear',
    subtitle: 'visible = 能被看见 → 可见的',
    instruction: `${defaultInstruction} visible 稍慢一点，保证听清。`,
  },
  {
    id: 'word-subject',
    text: 'video，vid 是看，video 原本就是看得到的画面。',
    emotionInstruction: '轻快，有恍然大悟感。',
    speedHint: 'fast-clear',
    subtitle: 'video = 看得到的画面 → 视频',
    instruction: `${defaultInstruction} video 读准，画面两个字清楚。`,
  },
  {
    id: 'word-project',
    text: 'visual，vis 加上 ual，变成视觉的，和看有关的。',
    emotionInstruction: '像拆卡片一样直接。',
    speedHint: 'fast-clear',
    subtitle: 'visual = 和看有关 → 视觉的',
    instruction: `${defaultInstruction} visual 读准，不要糊。`,
  },
  {
    id: 'word-inject',
    text: 'evidence，e 是向外，vid 是看，让事实被看见，就是证据。',
    emotionInstruction: '有推理感，像把证据亮出来。',
    speedHint: 'fast-clear',
    subtitle: 'evidence = 让事实被看见 → 证据',
    instruction: `${defaultInstruction} evidence 稍慢，证据两个字要稳。`,
  },
  {
    id: 'word-eject',
    text: 'evident，能被看出来的，就是明显的。',
    emotionInstruction: '简单利落，像补上一块拼图。',
    speedHint: 'fast-clear',
    subtitle: 'evident = 看得出来 → 明显的',
    instruction: `${defaultInstruction} evident 读准。`,
  },
  {
    id: 'word-abject',
    text: 'visit，去看一个人，或者去看一个地方，就是拜访，参观。',
    emotionInstruction: '生活化，容易懂。',
    speedHint: 'fast-clear',
    subtitle: 'visit = 去看 → 拜访 / 参观',
    instruction: `${defaultInstruction} visit 读准。`,
  },
  {
    id: 'word-deject',
    text: 'revise，re 是再一次，vise 是看，重新看一遍，就是修改复习。',
    emotionInstruction: '收住节奏，把最后一个词讲清楚。',
    speedHint: 'fast-clear',
    subtitle: 'revise = 重新看 → 修改 / 复习',
    instruction: `${defaultInstruction} revise 读准，修改复习要清楚。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：vision 是看见的画面，visible 是能被看见，video 是看得到的画面，evidence 是让事实被看见。',
    emotionInstruction: '快速总览，把 see 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'vision / visible / video / evidence，都围着 see 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这只眼睛：vis 和 vid，等于 see，看见。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'vis / vid = see：看见',
    instruction: `${defaultInstruction} 总结要稳，vis、vid、see 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 vis 或 vid，先想：它让什么被看见。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 vis / vid，先想：看见什么',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

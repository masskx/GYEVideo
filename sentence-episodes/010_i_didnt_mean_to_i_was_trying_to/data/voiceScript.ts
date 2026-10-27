export type VoiceScriptLine = {
  id: string;
  role?: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语纠错短视频风格。前3秒先打痛点，再反转，再给能直接复用的答案。短句，快节奏，sharp，轻微吐槽，但不要像老师讲课。英文要清晰，中文要有停顿感。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'trap-1',
    role: 'trap',
    text: '解释别越说越尴尬。',
    emotionInstruction: '开场像在拦住观众继续乱解释，短，直。',
    speedHint: 'very-fast-clear',
    subtitle: '解释别越说越尴尬',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '很多人一紧张就狂讲理由，结果听上去不像解释，像狡辩。',
    emotionInstruction: '带一点社交观察感，像你在拆大家都踩过的坑。',
    speedHint: 'fast-clear',
    subtitle: '狂讲理由 听上去就像狡辩',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '问题不是你理由不够多，是你没先接住对方那一下不舒服。',
    emotionInstruction: '像创作者一锤定音，别上课。',
    speedHint: 'fast-clear',
    subtitle: '不是理由不够多 是没先接住对方的不舒服',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先上骨架，I didn’t mean to A. I was just trying to B。',
    emotionInstruction: '主答案像工具交到手里，清晰有力量。',
    speedHint: 'medium-fast',
    subtitle: "I didn't mean to A. I was just trying to B.",
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '这句厉害就厉害在，先认冒犯感，再交代原意，对方才听得进去。',
    emotionInstruction: '解释短一点，像把社交机制拆给人看。',
    speedHint: 'fast-clear',
    subtitle: '先认冒犯感 再交代原意',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，I didn’t mean to sound cold. I was just trying to be clear。',
    emotionInstruction: '第二拍给最顺手的可复用版本，不抢骨架本身的焦点。',
    speedHint: 'medium-fast',
    subtitle: "I didn't mean to sound cold. I was just trying to be clear.",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到消息发冷了，别补一大段，直接上 I didn’t mean to sound cold. I was just trying to be clear。',
    emotionInstruction: '要像今晚就能复制出去的句子，不空讲。',
    speedHint: 'fast-clear',
    subtitle: '消息发冷了 就直接上这个骨架',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别一急就堆理由。先说 I didn’t mean to A. I was just trying to B。',
    emotionInstruction: '收尾要有骨架锁定感，像一句可保存的公式。',
    speedHint: 'medium-fast',
    subtitle: "别一急就堆理由 先说 I didn't mean to A I was just trying to B",
    instruction: defaultInstruction,
  },
];

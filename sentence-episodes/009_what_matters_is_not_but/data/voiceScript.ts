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
    text: '重点不是这个，是那个。',
    emotionInstruction: '开头像一把把镜头从杂音拉到重点。',
    speedHint: 'very-fast-clear',
    subtitle: '重点不是这个 是那个',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '很多人不是没重点，是把重点埋在一堆次要信息里。',
    emotionInstruction: '像创作者点内容病。',
    speedHint: 'fast-clear',
    subtitle: '不是没重点 是把重点埋在次要信息里',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '什么都想讲，最后就等于没重点。',
    emotionInstruction: '短，狠，适合做一锤定音。',
    speedHint: 'fast-clear',
    subtitle: '什么都想讲 最后就等于没重点',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这个锁焦骨架，What matters is not A, but B。',
    emotionInstruction: '主答案要像聚光灯打亮。',
    speedHint: 'medium-fast',
    subtitle: 'What matters is not A, but B.',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它不是在凑对比，是在帮你把真正重要的那一点顶到台前。',
    emotionInstruction: '解释像讲传播感，不像讲句法。',
    speedHint: 'fast-clear',
    subtitle: '把真正重要的那一点顶到台前',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，What matters is not how long it is, but how clear it is。',
    emotionInstruction: '第二拍给一个最容易秒懂的重点升级。',
    speedHint: 'medium-fast',
    subtitle: 'What matters is not how long it is, but how clear it is.',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到你想让别人记住一句话时，别全塞进去，先把焦点立起来。',
    emotionInstruction: '像创作者给实战提醒。',
    speedHint: 'fast-clear',
    subtitle: '想让人记住一句话 先把焦点立起来',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别再让次要信息抢戏。先说，What matters is not A, but B。',
    emotionInstruction: '结尾像一条能记住的表达原则。',
    speedHint: 'medium-fast',
    subtitle: '别让次要信息抢戏 先说 What matters is not A but B',
    instruction: defaultInstruction,
  },
];

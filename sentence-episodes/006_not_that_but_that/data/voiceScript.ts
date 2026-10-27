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
    text: '不是这个原因，是那个原因。',
    emotionInstruction: '开头像立刻把表面解释打掉。',
    speedHint: 'very-fast-clear',
    subtitle: '不是这个原因 是那个原因',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你不是没分析，你是总停在第一层。',
    emotionInstruction: '带一点创作者审稿感。',
    speedHint: 'fast-clear',
    subtitle: '不是没分析 是总停在第一层',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '会讲表面原因的人很多，会讲准原因的人很少。',
    emotionInstruction: '短，冷，带判断。',
    speedHint: 'fast-clear',
    subtitle: '会讲表面原因的人很多 会讲准原因的人很少',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这个骨架，Not that A, but that B。',
    emotionInstruction: '主答案像黄牌直接亮出来。',
    speedHint: 'medium-fast',
    subtitle: 'Not that A, but that B.',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它的作用很简单，先划掉错因，再把真因顶上来。',
    emotionInstruction: '解释像讲作用，不像讲术语。',
    speedHint: 'fast-clear',
    subtitle: '先划掉错因 再把真因顶上来',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，Not that I lacked ideas, but that I could not organize them。',
    emotionInstruction: '第二拍给一个很像真实复盘的话。',
    speedHint: 'medium-fast',
    subtitle: "Not that I lacked ideas, but that I couldn't organize them.",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到你要解释问题时，别停在第一眼那个原因，把真正那层翻出来。',
    emotionInstruction: '像写作和复盘都能立刻拿走的提醒。',
    speedHint: 'fast-clear',
    subtitle: '解释问题时 别停在第一眼那个原因',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别只会讲表面原因。先说，Not that A, but that B。',
    emotionInstruction: '收口像一个能留下来的写作原则。',
    speedHint: 'medium-fast',
    subtitle: '别只会讲表面原因 先说 Not that A but that B',
    instruction: defaultInstruction,
  },
];

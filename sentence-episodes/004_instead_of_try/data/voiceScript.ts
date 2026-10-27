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
    text: '别一上来就 don’t。',
    emotionInstruction: '第一句像直接打断太硬的建议口气。',
    speedHint: 'very-fast-clear',
    subtitle: '别一上来就 don’t',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '很多建议一开口就像在管人，不像在帮人。',
    emotionInstruction: '带一点社交观察感，别像课堂示范。',
    speedHint: 'fast-clear',
    subtitle: '像在管人 不像在帮人',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '问题不是你建议错了，是你只会堵，不会带路。',
    emotionInstruction: '像创作者一句点破。',
    speedHint: 'fast-clear',
    subtitle: '不是建议错了 是你只会堵不会带路',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这个骨架，Instead of A, try B。',
    emotionInstruction: '主答案像一个立刻能复制的工具。',
    speedHint: 'medium-fast',
    subtitle: 'Instead of A, try B.',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它不是只会说不行，它是顺手把更好的版本递给对方。',
    emotionInstruction: '解释要短，像讲气质，不讲语法。',
    speedHint: 'fast-clear',
    subtitle: '不是只会说不行 是顺手把更好的版本递过去',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，Instead of saying very good, try really solid。',
    emotionInstruction: '第二拍给一个很容易偷走的替代项。',
    speedHint: 'medium-fast',
    subtitle: 'Instead of saying very good try really solid',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到你想给建议时，别只会说 don’t，先用这个骨架把路铺出来。',
    emotionInstruction: '像今晚就能复制到嘴边的实战提醒。',
    speedHint: 'fast-clear',
    subtitle: '想给建议时 先用这个骨架把路铺出来',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别只会叫停。先说 Instead of A, try B。',
    emotionInstruction: '结尾要像一句能留下来的创作原则。',
    speedHint: 'medium-fast',
    subtitle: '别只会叫停 先说 Instead of A try B',
    instruction: defaultInstruction,
  },
];

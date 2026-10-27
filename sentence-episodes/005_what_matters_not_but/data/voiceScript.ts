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
    text: '别把提醒说成责怪。',
    emotionInstruction: '开头像直接拦下一个即将翻车的语气。',
    speedHint: 'very-fast-clear',
    subtitle: '别把提醒说成责怪',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '很多人不是内容有问题，是一开口就像在审人。',
    emotionInstruction: '像创作者一句社会观察。',
    speedHint: 'fast-clear',
    subtitle: '不是内容有问题 是一开口像在审人',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '你以为你在提醒，对方听到的可能是在挨骂。',
    emotionInstruction: '短，准，带点刺。',
    speedHint: 'fast-clear',
    subtitle: '你以为在提醒 对方听到像在挨骂',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这一句，It is not what you said. It is how you said it。',
    emotionInstruction: '主答案像黄字砸下来，成为唯一视觉中心。',
    speedHint: 'medium-fast',
    subtitle: "It's not what you said. It's how you said it.",
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它不是在抬杠内容，是在点名语气才是问题。',
    emotionInstruction: '解释要像点用途，不像讲定义。',
    speedHint: 'fast-clear',
    subtitle: '不是内容有问题 是语气有问题',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '如果你还想继续把话救回来，再补一句，I did not mean to sound harsh.',
    emotionInstruction: '第二拍再补，不跟主答案抢焦点。',
    speedHint: 'medium-fast',
    subtitle: "I didn't mean to sound harsh.",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到聊天发冷了，别争内容，先把语气这个坑填上。',
    emotionInstruction: '像实战提醒，不像课程总结。',
    speedHint: 'fast-clear',
    subtitle: '聊天发冷了 先把语气这个坑填上',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别再嘴硬说 I just told you。先说，It is not what you said. It is how you said it。',
    emotionInstruction: '收尾像最后一锤，态度明确。',
    speedHint: 'medium-fast',
    subtitle: "别再说 I just told you 先说 It's not what you said. It's how you said it.",
    instruction: defaultInstruction,
  },
];

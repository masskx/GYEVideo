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
    text: '不是在怪你，是在拉回重点。',
    emotionInstruction: '开口像直接拦住一场要失控的对话。',
    speedHint: 'very-fast-clear',
    subtitle: '不是在怪你 是在拉回重点',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '很多人不是没重点，是重点还没说出来，对方已经先觉得你在骂他了。',
    emotionInstruction: '带一点社交观察感，不像语法讲解。',
    speedHint: 'fast-clear',
    subtitle: '重点还没说出来 对方先觉得你在骂他',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '你不是缺内容，你是少了一个先切误会的动作。',
    emotionInstruction: '像创作者一锤定音，简短有判断。',
    speedHint: 'fast-clear',
    subtitle: '不是缺内容 是少了先切误会的动作',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先上这句，I’m not saying A. I’m saying B。',
    emotionInstruction: '主答案要像工具递到手里，清晰有力。',
    speedHint: 'medium-fast',
    subtitle: "I'm not saying A. I'm saying B.",
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它的厉害不在高级，而在顺序。先拆防御，再送重点。',
    emotionInstruction: '解释很短，像说透社交机制。',
    speedHint: 'fast-clear',
    subtitle: '先拆防御 再送重点',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，I’m not saying you’re lazy. I’m saying this approach isn’t working。',
    emotionInstruction: '第二拍给观众最容易偷走的实战版，不抢骨架焦点。',
    speedHint: 'medium-fast',
    subtitle: "I'm not saying you're lazy. I'm saying this approach isn't working.",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到讨论跑偏了，别急着硬讲重点，先用这个骨架把方向盘打回来。',
    emotionInstruction: '场景感要强，像今晚就能用。',
    speedHint: 'fast-clear',
    subtitle: '讨论跑偏了 先用这个骨架把方向盘打回来',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别先硬怼重点。先说 I’m not saying A. I’m saying B。',
    emotionInstruction: '收尾像一句能存下来的社交口诀。',
    speedHint: 'medium-fast',
    subtitle: "别先硬怼重点 先说 I'm not saying A I'm saying B",
    instruction: defaultInstruction,
  },
];

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
  '中文口播，抖音英语纠错短视频风格。前3秒先打痛点，再反转，再给能直接复用的答案。短句，快节奏，sharp，轻微吐槽，但不要像老师讲课。英文要清楚，中文要有停顿感。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'trap-1',
    role: 'trap',
    text: '人山人海，不是 people mountain people sea。',
    emotionInstruction: '开头像直接打断观众的经典直译，强提醒。',
    speedHint: 'very-fast-clear',
    subtitle: '人山人海 不是 people mountain people sea',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '这句你一说，老外脑子里不是人多，是山、是海、是你在讲神话。',
    emotionInstruction: '第二句要有画面感和一点调侃感。',
    speedHint: 'fast-clear',
    subtitle: '对方听见的不是人多 是山海神话',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '四字成语最怕逐字翻，你保住了中文气势，丢掉了英文理解。',
    emotionInstruction: '像创作者总结问题，不像课堂定义。',
    speedHint: 'fast-clear',
    subtitle: '成语最怕逐字翻',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '主答案先锁，a sea of people.',
    emotionInstruction: 'hero correction 要像黄金答案正面砸下。',
    speedHint: 'medium-fast',
    subtitle: 'a sea of people',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '因为英语会换画面，不会把人山人海四个字原样搬过去。',
    emotionInstruction: '解释要短，抓住“换画面”这个记忆钩子。',
    speedHint: 'fast-clear',
    subtitle: '英语换画面 不逐字搬成语',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '口语想更顺手，你还可以直接说 It was packed.',
    emotionInstruction: '第二拍补一个更口语、更随手的版本。',
    speedHint: 'medium-fast',
    subtitle: 'It was packed',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '比如演唱会挤爆了，你就说 It was packed，或者 There was a sea of people.',
    emotionInstruction: '给真场景，观众能直接偷走。',
    speedHint: 'fast-clear',
    subtitle: '演唱会挤爆了 就说 It was packed',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别再 mountain sea 一起端上来了。人多，先说 a sea of people。',
    emotionInstruction: '结尾要有轻吐槽和锁定感。',
    speedHint: 'medium-fast',
    subtitle: '别再 mountain sea 一起端上来',
    instruction: defaultInstruction,
  },
];

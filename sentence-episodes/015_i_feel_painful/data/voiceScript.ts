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
    text: 'I feel painful 不是我很疼。',
    emotionInstruction: '第一句像当场拦下观众继续说错，短，狠，直接。',
    speedHint: 'very-fast-clear',
    subtitle: 'I feel painful 不是我很疼',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你这句一出口，不是在喊疼，是把自己说成了疼痛制造机。',
    emotionInstruction: '第二句要有轻微吐槽感，像朋友立刻打断你。',
    speedHint: 'fast-clear',
    subtitle: '不是喊疼 是把自己说成了疼痛制造机',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: 'painful 说的是东西疼，不是你本人在疼。',
    emotionInstruction: '像盖章定性，短促，别展开上课。',
    speedHint: 'fast-clear',
    subtitle: 'painful 说东西疼 不是你本人疼',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '你先说 I am in pain。',
    emotionInstruction: '主答案要像黄字砸下来，成为唯一焦点。',
    speedHint: 'medium-fast',
    subtitle: 'I am in pain',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '你是疼，不是你这个人摸上去很 painful，这俩差太远了。',
    emotionInstruction: '解释要短，像高情商纠错，不像语法课。',
    speedHint: 'fast-clear',
    subtitle: '你是疼 不是你这个人很 painful',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '要说具体一点，就直接来 My knee hurts。',
    emotionInstruction: '这是第二拍补充，像顺手递给观众一个马上能用的版本。',
    speedHint: 'medium-fast',
    subtitle: 'My knee hurts',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '比如你摔了膝盖，别憋 I feel painful，张口就是 My knee hurts。膝盖疼。',
    emotionInstruction: '给真实场景，今晚就能拿去用。',
    speedHint: 'fast-clear',
    subtitle: '摔了膝盖 就说 My knee hurts',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别说 I feel painful。先说 I am in pain。',
    emotionInstruction: '最后像盖章一样收口，wrong vs right 锁死。',
    speedHint: 'medium-fast',
    subtitle: '别说 I feel painful 说 I am in pain',
    instruction: defaultInstruction,
  },
];

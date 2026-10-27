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
    text: '加油不是哪里都说 add oil',
    emotionInstruction: '第一句像当场拦住观众继续说错，直接，狠一点。',
    speedHint: 'very-fast-clear',
    subtitle: '加油不是哪里都说 add oil',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: 'add oil (everywhere) 这种说法一出口，像把中文词序直接搬过去了。',
    emotionInstruction: '第二句继续制造社交尴尬感，像在拆穿一个大家都踩过的坑。',
    speedHint: 'fast-clear',
    subtitle: 'add oil (everywhere) 这种说法一出口...',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '问题不在你想表达，问题在你把中文回路直接投到英文里。',
    emotionInstruction: '像盖章定性，短，脆，不解释过头。',
    speedHint: 'fast-clear',
    subtitle: '问题不在你想表达，问题在你把中文回路直接投到英文...',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先说 You\'ve got this。',
    emotionInstruction: '主答案要像黄字砸下来，成为此刻唯一视觉中心。',
    speedHint: 'medium-fast',
    subtitle: 'You\'ve got this',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '想表达“你可以的”，先用 You\'ve got this...',
    emotionInstruction: '解释要短，像高情商纠错，不像上语法课。',
    speedHint: 'fast-clear',
    subtitle: '想表达“你可以的”，先用 You\'ve got...',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '主答案先记 You\'ve got this，后面想升级再加 Keep going. We are almost there.。',
    emotionInstruction: '这是第二拍补充，不抢主答案风头，像创作者顺手塞给观众的加分项。',
    speedHint: 'medium-fast',
    subtitle: 'Keep going. We are almos...',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到 朋友明天考试 这种场景，直接说 You\'ve got this. You\'ll do great.。你可以的，明天一定稳。',
    emotionInstruction: '给一个观众今晚就能拿去用的真实场景，不空讲。',
    speedHint: 'fast-clear',
    subtitle: '朋友明天考试 就说 You\'ve got this. You...',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别说 add oil (everywhere)。先说 You\'ve got this。',
    emotionInstruction: '最后像盖章一样锁住 wrong vs right，干脆收尾。',
    speedHint: 'medium-fast',
    subtitle: '别说 add oil (everywhere) 说 You\'...',
    instruction: defaultInstruction,
  },
];

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
    text: '不是不在乎 只是不会说',
    emotionInstruction: '第一句像当场拦住观众继续说错，直接，狠一点。',
    speedHint: 'very-fast-clear',
    subtitle: '不是不在乎 只是不会说',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你以为这句很顺，老外听到只会先卡一下。',
    emotionInstruction: '第二句继续制造社交尴尬感，像在拆穿一个大家都踩过的坑。',
    speedHint: 'fast-clear',
    subtitle: '你以为这句很顺，老外听到只会先卡一下。',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '这不是不会英语，是中文脑回路抢在前面了。',
    emotionInstruction: '像盖章定性，短，脆，不解释过头。',
    speedHint: 'fast-clear',
    subtitle: '这不是不会英语，是中文脑回路抢在前面了。',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先说 It\'s not that A, it\'s just that B.。',
    emotionInstruction: '主答案要像黄字砸下来，成为此刻唯一视觉中心。',
    speedHint: 'medium-fast',
    subtitle: 'It\'s not that A, it\'s just that B.',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '不是不在乎 只是不会说 核心不是逐字对位，是换成他们真会说的...',
    emotionInstruction: '解释要短，像高情商纠错，不像上语法课。',
    speedHint: 'fast-clear',
    subtitle: '不是不在乎 只是不会说 核心不是逐字对位，是换成...',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '想再换个更顺手的版本，就补 I don\'t know what to say。',
    emotionInstruction: '这是第二拍补充，不抢主答案风头，像创作者顺手塞给观众的加分项。',
    speedHint: 'medium-fast',
    subtitle: 'I don\'t know what to say',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到要开口的时候，直接说 It\'s not that A, it\'s just that B.。',
    emotionInstruction: '给一个观众今晚就能拿去用的真实场景，不空讲。',
    speedHint: 'fast-clear',
    subtitle: '就说 It\'s not that A, it\'s just...',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别说 It\'s not that A,。先说 It\'s not that A, it\'s just that B.。',
    emotionInstruction: '最后像盖章一样锁住 wrong vs right，干脆收尾。',
    speedHint: 'medium-fast',
    subtitle: '别说 It\'s not that A, 说 It\'s not...',
    instruction: defaultInstruction,
  },
];

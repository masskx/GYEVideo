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
    text: 'Good good study 真不是英语。',
    emotionInstruction: '开口就要拦人，像当场叫停。',
    speedHint: 'very-fast-clear',
    subtitle: 'Good good study 真不是英语',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '这句不是可爱，是把中文词序原封不动搬进英语。',
    emotionInstruction: '带一点拆穿滤镜的感觉，别太课堂。',
    speedHint: 'fast-clear',
    subtitle: '不是可爱 是把中文词序搬进英语',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '你以为自己在说英语，其实是在说中文套皮版。',
    emotionInstruction: '像创作者拍桌定性，利落一点。',
    speedHint: 'fast-clear',
    subtitle: '你以为在说英语 其实是中文套皮版',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记主答案，Study hard and make progress every day。',
    emotionInstruction: '主答案必须像唯一焦点砸下来。',
    speedHint: 'medium-fast',
    subtitle: 'Study hard and make progress every day',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '英语不看你字面对得多整齐，它看你像不像真人会这么说。',
    emotionInstruction: '解释要短，像创作者顺手点醒，不像授课。',
    speedHint: 'fast-clear',
    subtitle: '英语看自然 不看你字面对得多整齐',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '如果你是写短视频 caption，再补一句 Keep learning. Keep improving。',
    emotionInstruction: '第二拍补充，给升级版，但不能抢主答案。',
    speedHint: 'medium-fast',
    subtitle: 'Keep learning. Keep improving.',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到写学习类 caption，别再 Good good study，直接用 Keep learning. Keep improving。',
    emotionInstruction: '场景要真，今晚就能拿去发。',
    speedHint: 'fast-clear',
    subtitle: '写学习类 caption 就说 Keep learning Keep improving',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别说 Good good study。先说 Study hard and make progress every day。',
    emotionInstruction: '收口要像锁屏记忆点，短，准，稳。',
    speedHint: 'medium-fast',
    subtitle: '别说 Good good study 先说 Study hard and make progress every day',
    instruction: defaultInstruction,
  },
];

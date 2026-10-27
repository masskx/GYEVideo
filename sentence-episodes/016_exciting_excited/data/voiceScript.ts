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
    text: 'I am exciting 不是我很兴奋。',
    emotionInstruction: '第一句要像当场打断，立刻止损。',
    speedHint: 'very-fast-clear',
    subtitle: 'I am exciting 不是我很兴奋',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你这句说出来，不是你嗨了，是你在夸自己很带劲。',
    emotionInstruction: '轻微调侃，像朋友听完立刻挑眉。',
    speedHint: 'fast-clear',
    subtitle: '不是你嗨了 是你在夸自己很带劲',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: 'exciting 是让别人兴奋，excited 才是你自己兴奋。',
    emotionInstruction: '像一锤定音，利落，不绕。',
    speedHint: 'fast-clear',
    subtitle: 'exciting 让别人兴奋 excited 才是你兴奋',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '主答案先记 I am excited。',
    emotionInstruction: '主答案要像英雄登场，明确，稳。',
    speedHint: 'medium-fast',
    subtitle: 'I am excited',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '你是 excited，不是你本人很 exciting。一个是感受，一个是属性。',
    emotionInstruction: '解释短，像创作者顺嘴点破。',
    speedHint: 'fast-clear',
    subtitle: '你是 excited 不是你本人 exciting',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '真上头的时候，直接说 I am so excited。',
    emotionInstruction: '第二拍加码，不抢第一答案，补一个更常用的口语版。',
    speedHint: 'medium-fast',
    subtitle: 'I am so excited',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '比如你抢到票了，直接喊 I am so excited。别把自己喊成万人迷。',
    emotionInstruction: '场景要真，结尾带一点轻吐槽。',
    speedHint: 'fast-clear',
    subtitle: '抢到票了 就喊 I am so excited',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别说 I am exciting。先说 I am excited。',
    emotionInstruction: '最后收得脆，像锁屏记忆点。',
    speedHint: 'medium-fast',
    subtitle: '别说 I am exciting 说 I am excited',
    instruction: defaultInstruction,
  },
];

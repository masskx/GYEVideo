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
    text: 'Long time no see 能用，但别乱用。',
    emotionInstruction: '开头像提醒观众别再踩职场坑，短促有压迫感。',
    speedHint: 'very-fast-clear',
    subtitle: 'Long time no see 能用 但别乱用',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '跟朋友说没事，跟客户老板还这么开口，就有点太松了。',
    emotionInstruction: '像在拆社交场合失分点，别太学术。',
    speedHint: 'fast-clear',
    subtitle: '跟朋友没事 跟客户老板就太松了',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '问题不是对错，是场合。你把朋友语气端进办公室了。',
    emotionInstruction: '像创作者态度输出，干脆，不解释过头。',
    speedHint: 'fast-clear',
    subtitle: '不是对错 是场合错位',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '稳一点，先说 It’s been a while。',
    emotionInstruction: '主答案一定要像更高级的替代方案砸出来。',
    speedHint: 'medium-fast',
    subtitle: "It's been a while",
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: 'Long time no see 当然是英语，但它太 casual 了，不适合你到处搬。',
    emotionInstruction: '解释要短，像拆穿“我明明学过这句”的错觉。',
    speedHint: 'fast-clear',
    subtitle: '它是英语 但太 casual 不适合到处搬',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '朋友重逢你再说 Long time no see，放在那个场景里就对了。',
    emotionInstruction: '第二拍补场景，不和主答案抢中心。',
    speedHint: 'medium-fast',
    subtitle: '朋友重逢 再说 Long time no see',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到给客户发消息，开头直接 It’s been a while. I hope you’re doing well. 体面很多。',
    emotionInstruction: '给一个职场能立刻复用的版本，成熟一点。',
    speedHint: 'fast-clear',
    subtitle: "给客户发消息 就说 It's been a while",
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '朋友之间 Long time no see。正式场合先说 It’s been a while。',
    emotionInstruction: '最后收成规则感，利落，别拖。',
    speedHint: 'medium-fast',
    subtitle: "朋友 Long time no see 正式场合 It's been a while",
    instruction: defaultInstruction,
  },
];

export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const instruction = '自然朗读中英混排文案。中文读中文，遇到英文目标词就读英文。不要解释，不要上课腔，语速适中。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'word-prevalent',
    text: '当熬夜成了我 prevalent 的日常，',
    emotionInstruction: '直接开始读正文，自然一点。',
    speedHint: 'medium',
    subtitle: 'prevalent = 普遍的',
    instruction,
  },
  {
    id: 'word-obsessed',
    text: '每晚对手机的 obsessed',
    emotionInstruction: '像读一段真实吐槽。',
    speedHint: 'medium',
    subtitle: 'obsessed = 沉迷的',
    instruction,
  },
  {
    id: 'word-dread',
    text: '都会让我忘掉被早八支配的 dread。',
    emotionInstruction: '自然承接。',
    speedHint: 'medium',
    subtitle: 'dread = 恐惧',
    instruction,
  },
  {
    id: 'word-shatter',
    text: '闹钟一响，直接 shatter 美梦。',
    emotionInstruction: '稍微有画面感。',
    speedHint: 'medium',
    subtitle: 'shatter = 粉碎',
    instruction,
  },
  {
    id: 'word-exhaustion',
    text: '身体被 exhaustion 击穿，',
    emotionInstruction: '继续读正文。',
    speedHint: 'medium',
    subtitle: 'exhaustion = 筋疲力尽',
    instruction,
  },
  {
    id: 'word-haggard',
    text: '镜子里那张 haggard 的脸提醒我，',
    emotionInstruction: '自然朗读。',
    speedHint: 'medium',
    subtitle: 'haggard = 憔悴的',
    instruction,
  },
  {
    id: 'word-vanish',
    text: '体面已经 vanish。',
    emotionInstruction: '短句读清楚。',
    speedHint: 'medium',
    subtitle: 'vanish = 消失',
    instruction,
  },
  {
    id: 'word-maintain',
    text: '为了 maintain 绩点，',
    emotionInstruction: '继续读文案。',
    speedHint: 'medium',
    subtitle: 'maintain = 维持',
    instruction,
  },
  {
    id: 'word-endure',
    text: '我只能 endure 教授的催眠。',
    emotionInstruction: '自然吐槽感。',
    speedHint: 'medium',
    subtitle: 'endure = 忍受',
    instruction,
  },
  {
    id: 'word-vicious',
    text: '这种 vicious 循环',
    emotionInstruction: '自然朗读。',
    speedHint: 'medium',
    subtitle: 'vicious = 恶性的',
    instruction,
  },
  {
    id: 'word-vulnerable',
    text: '让我越来越 vulnerable，',
    emotionInstruction: '稍微放轻。',
    speedHint: 'medium',
    subtitle: 'vulnerable = 脆弱的',
    instruction,
  },
  {
    id: 'word-abandon',
    text: '但我不能直接 abandon 自己。',
    emotionInstruction: '收尾自然，不要总结腔。',
    speedHint: 'medium',
    subtitle: 'abandon = 放弃',
    instruction,
  },
];

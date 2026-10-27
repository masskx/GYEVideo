export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识视频风格，声音清楚有冲击力，节奏快但不要糊，英文单词读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'express 不只是表达，它背后其实是一个压出来的动作。',
    emotionInstruction: '开场要有反常识打断感，像突然纠正观众的理解。',
    speedHint: 'very-fast-clear',
    subtitle: 'express 不只是“表达”',
    instruction: `${defaultInstruction} 开头要强，express 和表达都要清楚。`,
  },
  {
    id: 'flash-words',
    text: 'press，compress，suppress，express，depress。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'press / compress / suppress / express / depress',
    instruction: `${defaultInstruction} 英文之间略停顿，compress 和 suppress 要读清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 press，压，按。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 press',
    instruction: `${defaultInstruction} press、压、按要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'press，核心意思就是 press，压，按。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'press = 压 / 按',
    instruction: `${defaultInstruction} press 要读准，中文要短促。`,
  },
  {
    id: 'word-reject',
    text: 'press，最基础，就是用手压，按下去，所以 press a button，就是按按钮。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'press = 压 / 按',
    instruction: `${defaultInstruction} press a button 要读自然，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'compress，com 是一起，press 是压，压到一起，就是压缩。',
    emotionInstruction: '画面感强，像把东西挤到一起。',
    speedHint: 'fast-clear',
    subtitle: 'compress = 一起压 → 压缩',
    instruction: `${defaultInstruction} compress 要读准，中文干净。`,
  },
  {
    id: 'word-subject',
    text: 'suppress，sup 可以理解成往下，press 是压，压下去，就是压制，镇压。',
    emotionInstruction: '语气稳一点，把方向和动作连上。',
    speedHint: 'fast-clear',
    subtitle: 'suppress = 往下压 → 压制',
    instruction: `${defaultInstruction} suppress 稍慢一点，保证听清。`,
  },
  {
    id: 'word-project',
    text: 'express，ex 是向外，press 是压，把想法往外压出来，就是表达。',
    emotionInstruction: '反常识重点词，要让观众突然懂了。',
    speedHint: 'fast-clear',
    subtitle: 'express = 向外压出 → 表达',
    instruction: `${defaultInstruction} express 和 ex 都要读准，表达要落重音。`,
  },
  {
    id: 'word-inject',
    text: 'depress，de 是向下，press 是压，把情绪往下压，就会让人沮丧。',
    emotionInstruction: '有被压低的感觉，但不要沉重拖沓。',
    speedHint: 'fast-clear',
    subtitle: 'depress = 往下压 → 沮丧',
    instruction: `${defaultInstruction} depress 读清楚，语气略压低。`,
  },
  {
    id: 'word-eject',
    text: 'impress，im 是往里，press 是压，压进脑子里，就留下印象。',
    emotionInstruction: '短促直接，像把记忆点打进去。',
    speedHint: 'fast-clear',
    subtitle: 'impress = 往里压 → 留下印象',
    instruction: `${defaultInstruction} impress 要读准，留下印象要有记忆点。`,
  },
  {
    id: 'word-abject',
    text: 'pressure，就是被压着的力量，所以是压力。',
    emotionInstruction: '生活化补充词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'pressure = 被压的力量 → 压力',
    instruction: `${defaultInstruction} pressure 读准，不要念成 pleasure。`,
  },
  {
    id: 'word-deject',
    text: 'impression，最直观，就是被压出来的印记，后来变成印象。',
    emotionInstruction: '轻快一点，像给出一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'impression = 压出的印记 → 印象',
    instruction: `${defaultInstruction} impression 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：compress 是压到一起，suppress 是压下去，express 是往外压出来，impress 是往里压进去。',
    emotionInstruction: '快速总览，把 press 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'compress / suppress / express / impress，都围着 press 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：press 等于压，按。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'press = 压 / 按',
    instruction: `${defaultInstruction} 总结要稳，press 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 press，先想：压在哪里，往哪个方向压。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 press，先想：往哪儿压？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

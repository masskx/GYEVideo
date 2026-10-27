export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，像侦探做案情汇报：冷静、笃定、带一点幽默，面向高中生，英文单词读准读清楚，不要喊。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: '这道完形题，四个选项长得像四胞胎。',
    emotionInstruction: '像刚翻开一份棘手的案卷，压低一点，抓人。',
    speedHint: 'fast-clear',
    subtitle: '这道完形题，四个选项长得像四胞胎',
    instruction: `${defaultInstruction} 开头一句要短促、有悬念。`,
  },
  {
    id: 'hook-options',
    text: 'produce，reduce，introduce，conduct，选哪个？',
    emotionInstruction: '四个词一个一个点名，最后轻轻施压。',
    speedHint: 'fast-clear',
    subtitle: 'produce / reduce / introduce / conduct，选哪个？',
    instruction: `${defaultInstruction} 四个英文词之间稍作停顿。`,
  },
  {
    id: 'clue',
    text: '它们身上，有同一个指纹：duc。',
    emotionInstruction: '找到线索的笃定感，duc 读成 dʌk。',
    speedHint: 'fast-clear',
    subtitle: '它们身上，有同一个指纹：duc',
    instruction: `${defaultInstruction} 指纹两个字放慢。`,
  },
  {
    id: 'root',
    text: '意思是 lead：带领，引导。',
    emotionInstruction: '把结论拍在桌上，稳。',
    speedHint: 'medium-clear',
    subtitle: 'duc = lead，带领、引导',
    instruction: `${defaultInstruction} lead 读清楚。`,
  },
  {
    id: 'ex-produce',
    text: 'pro，向前。向前带出来，produce，生产；产品是 product。',
    emotionInstruction: '像出示第一件证物，节奏利落。',
    speedHint: 'fast-clear',
    subtitle: 'pro 向前 → 向前带出来 → produce 生产',
    instruction: `${defaultInstruction} produce 和 product 都要读准。`,
  },
  {
    id: 'ex-reduce',
    text: 're，往回。往回带，reduce，减少。',
    emotionInstruction: '干脆，像往回拽了一把。',
    speedHint: 'fast-clear',
    subtitle: 're 往回 → 往回带 → reduce 减少',
    instruction: defaultInstruction,
  },
  {
    id: 'ex-introduce',
    text: 'intro，往里。把人带进来，introduce，介绍。',
    emotionInstruction: '轻松一点，像把人领进门。',
    speedHint: 'fast-clear',
    subtitle: 'intro 往里 → 把人带进来 → introduce 介绍',
    instruction: defaultInstruction,
  },
  {
    id: 'ex-conduct',
    text: '前缀 con，一起。带着大家一起做，就是 conduct，开展。',
    emotionInstruction: '有组织感，像带队出发。',
    speedHint: 'medium-clear',
    subtitle: 'con 一起 → 带着大家一起做 → conduct 开展',
    instruction: defaultInstruction,
  },
  {
    id: 'ex-education',
    text: 'e，向外。把潜能引出来，education，教育。',
    emotionInstruction: '温和一点，是这组证物里最暖的一件。',
    speedHint: 'fast-clear',
    subtitle: 'e 向外 → 把潜能引出来 → education 教育',
    instruction: defaultInstruction,
  },
  {
    id: 'board',
    text: '五件证物，同一个指纹。',
    emotionInstruction: '把线索连成一张网的满足感。',
    speedHint: 'fast-clear',
    subtitle: '五件证物，同一个指纹',
    instruction: defaultInstruction,
  },
  {
    id: 'solve',
    text: '回到题目：塑料垃圾要减半，是往回带。',
    emotionInstruction: '推理收口，语气越来越确定。',
    speedHint: 'fast-clear',
    subtitle: '回到题目：塑料垃圾要减半，是往回带',
    instruction: defaultInstruction,
  },
  {
    id: 'verdict',
    text: '选 reduce。案子，结了。',
    emotionInstruction: '一字一顿，像法槌落下，结了两个字要重。',
    speedHint: 'medium-clear',
    subtitle: '选 reduce，结案',
    instruction: defaultInstruction,
  },
  {
    id: 'homework',
    text: '最后一题交给你：开展调查，空里填哪个？',
    emotionInstruction: '把问题递给观众，带一点挑衅的笑意。',
    speedHint: 'fast-clear',
    subtitle: '最后一题：开展调查，空里填哪个？',
    instruction: defaultInstruction,
  },
  {
    id: 'signoff',
    text: '答案写在评论区。下一个词根，继续破案。',
    emotionInstruction: '收尾干净，留个钩子。',
    speedHint: 'fast-clear',
    subtitle: '答案写在评论区，下一个词根继续破案',
    instruction: defaultInstruction,
  },
];

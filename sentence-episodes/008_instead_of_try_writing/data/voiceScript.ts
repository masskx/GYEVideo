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
    text: '写表达别再这么硬。',
    emotionInstruction: '开头像编辑一把把平庸句子按掉。',
    speedHint: 'very-fast-clear',
    subtitle: '写表达别再这么硬',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你写得没错，但就是一眼模板味。',
    emotionInstruction: '带一点轻微吐槽感。',
    speedHint: 'fast-clear',
    subtitle: '没错 但一眼模板味',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '问题不是语法，是你舍不得扔掉那些安全但无聊的词。',
    emotionInstruction: '像创作者点破写作病。',
    speedHint: 'fast-clear',
    subtitle: '不是语法问题 是词太安全太无聊',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这句，Instead of A, try B。',
    emotionInstruction: '主答案像可复制公式直接扔出来。',
    speedHint: 'medium-fast',
    subtitle: 'Instead of A, try B.',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它的重点不是纠错，是把普通句子换成更能打的句子。',
    emotionInstruction: '解释要短，像在讲创作效果。',
    speedHint: 'fast-clear',
    subtitle: '不是纠错 是把普通句子换成更能打的',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，Instead of saying very important, try hard to ignore。',
    emotionInstruction: '第二拍给一个最有画面的替换例子。',
    speedHint: 'medium-fast',
    subtitle: 'Instead of saying very important try hard to ignore',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到你改稿时，别老盯着对不对，先问自己这一句能不能让人停一下。',
    emotionInstruction: '像创作视角提醒，不像写作课总结。',
    speedHint: 'fast-clear',
    subtitle: '改稿时 别只盯对不对 先看能不能让人停一下',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别再写平词。先说，Instead of A, try B。',
    emotionInstruction: '收尾像一句可记住的创作原则。',
    speedHint: 'medium-fast',
    subtitle: '别再写平词 先说 Instead of A try B',
    instruction: defaultInstruction,
  },
];

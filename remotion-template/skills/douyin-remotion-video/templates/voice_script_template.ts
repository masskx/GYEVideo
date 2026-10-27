export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '请用抖音知识博主的语气朗读，语速偏快但吐字清楚，情绪自信兴奋、有一点压迫感，不要尖叫。关键词要重读，句子之间停顿短。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: '<开头钩子，短而有冲击力>',
    emotionInstruction: '前三秒要紧迫，立刻抓住注意力。',
    speedHint: 'very-fast-clear',
    subtitle: '<简短字幕>',
    instruction: `${defaultInstruction} 重点词要重读，收尾干脆。`,
  },
  {
    id: 'pattern-reveal',
    text: '<揭示隐藏模式或核心问题>',
    emotionInstruction: '像揭晓答案，语气笃定。',
    speedHint: 'fast-clear',
    subtitle: '<模式/核心问题>',
    instruction: `${defaultInstruction} 核心关键词要重读。`,
  },
  {
    id: 'word-1',
    text: '<第一个解释点>',
    emotionInstruction: '像真人博主拆解，不要教材腔。',
    speedHint: 'fast-clear',
    subtitle: '<短字幕>',
    instruction: `${defaultInstruction} 解释自然口语化。`,
  },
  {
    id: 'summary',
    text: '<最终记忆句>',
    emotionInstruction: '最终记忆点，强而清楚。',
    speedHint: 'fast-clear',
    subtitle: '<最终记忆字幕>',
    instruction: `${defaultInstruction} 关键词要重读。`,
  },
];

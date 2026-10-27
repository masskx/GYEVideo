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
    text: '吃药不是 eat medicine。',
    emotionInstruction: '开头直接否定错误表达，短打脸。',
    speedHint: 'very-fast-clear',
    subtitle: '吃药 不是 eat medicine',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: 'eat medicine 听起来像你把药当零食嚼着玩。',
    emotionInstruction: '第二句带一点轻微嘲讽，但不要太凶。',
    speedHint: 'fast-clear',
    subtitle: '像把药当零食在嚼',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '英语里药不是吃的重点，重点是服用。',
    emotionInstruction: '像一锤打在认知差上。',
    speedHint: 'fast-clear',
    subtitle: '重点不是吃 是服用',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '最稳先说 take medicine.',
    emotionInstruction: '主答案要稳、亮、可立刻记住。',
    speedHint: 'medium-fast',
    subtitle: 'take medicine',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: 'eat 是食物逻辑，medicine 走的是 take 这条线。',
    emotionInstruction: '解释像朋友提醒你一个记忆钩子，不展开长讲。',
    speedHint: 'fast-clear',
    subtitle: '食物用 eat 药用 take',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '更像生活里会说的话，是 Don’t forget to take your medicine.',
    emotionInstruction: '第二拍给整句，像顺手递答案。',
    speedHint: 'medium-fast',
    subtitle: "Don't forget to take your medicine",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '比如提醒家里人，你别说 eat medicine，直接说 Don’t forget to take your medicine.',
    emotionInstruction: '给家庭日常场景，观众一听就能套。',
    speedHint: 'fast-clear',
    subtitle: '提醒家里人 就说 take your medicine',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别把药说成饭。吃药，先想 take medicine。',
    emotionInstruction: '结尾要有记忆点，略带一句创作者态度。',
    speedHint: 'medium-fast',
    subtitle: '别把药说成饭 先想 take medicine',
    instruction: defaultInstruction,
  },
];

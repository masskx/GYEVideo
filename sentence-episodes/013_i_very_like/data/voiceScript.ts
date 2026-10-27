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
    text: '我很喜欢，不是 I very like。',
    emotionInstruction: '第一句像直接纠正一个高频口误，短促有力。',
    speedHint: 'very-fast-clear',
    subtitle: '我很喜欢 不是 I very like',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '这句一出口，老外先听见的不是喜欢，是语序报警。',
    emotionInstruction: '第二句要带一点轻轻的挖苦感，增加记忆点。',
    speedHint: 'fast-clear',
    subtitle: '先听见的不是喜欢 是语序报警',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '中文里的很，不能整包打过去都叫 very。',
    emotionInstruction: '像一针见血地点破问题。',
    speedHint: 'fast-clear',
    subtitle: '很 不等于 everywhere 都是 very',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '主答案先记，I really like it.',
    emotionInstruction: 'hero correction 要稳，像唯一正确出口。',
    speedHint: 'medium-fast',
    subtitle: 'I really like it',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: 'very 爱修饰形容词，really 才更常去修饰 like 这种动词。',
    emotionInstruction: '解释不拖课感，用最短的话说透。',
    speedHint: 'fast-clear',
    subtitle: 'like 这种动词 更爱搭 really',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '如果你真的超喜欢，再往上走一步，直接说 I love it.',
    emotionInstruction: '第二拍补一个更有情绪的版本，但不抢主答案。',
    speedHint: 'medium-fast',
    subtitle: 'I love it',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '朋友问你这首歌怎么样，你就说 I really like this song，不要 I very like this song.',
    emotionInstruction: '给音乐聊天场景，台词要能直接复用。',
    speedHint: 'fast-clear',
    subtitle: '聊歌时 就说 I really like this song',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别 I very like。先 really，再谈 very。',
    emotionInstruction: '结尾要有一句像账号口头禅的锁定。',
    speedHint: 'medium-fast',
    subtitle: '别 I very like 先 really 再谈 very',
    instruction: defaultInstruction,
  },
];

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
    text: 'I am boring，不是我很无聊，是我这人很无趣。',
    emotionInstruction: '第一句就制造反差，直接让观众意识到说反了。',
    speedHint: 'very-fast-clear',
    subtitle: 'I am boring 不是我无聊 是我无趣',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你本来只是想说今天有点闷，结果一句话把自己说成了无聊本人。',
    emotionInstruction: '第二句带一点轻微社死感，增强停留。',
    speedHint: 'fast-clear',
    subtitle: '想说有点闷 却把自己说成无聊本人',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '一个是你让别人无聊，一个是你自己觉得无聊，方向完全反了。',
    emotionInstruction: '像快速拆穿错误的本质，干脆。',
    speedHint: 'fast-clear',
    subtitle: '让别人无聊 和 自己无聊 不是一回事',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '想说我很无聊，先说 I am bored.',
    emotionInstruction: '主答案像直接给出口，不绕弯。',
    speedHint: 'medium-fast',
    subtitle: 'I am bored',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: 'boring 是这个东西让人无聊，bored 才是我本人现在很无聊。',
    emotionInstruction: '解释要口语化，不讲术语。',
    speedHint: 'fast-clear',
    subtitle: 'boring 是让人无聊 bored 是自己无聊',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '如果你想说得更顺一点，就说 I am just a little bored.',
    emotionInstruction: '第二拍补更日常、更柔和的版本。',
    speedHint: 'medium-fast',
    subtitle: 'I am just a little bored',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '别人问你怎么突然不说话了，你就回 I am just a little bored，不要回 I am boring.',
    emotionInstruction: '给一个轻社交场景，能直接复制到口语里。',
    speedHint: 'fast-clear',
    subtitle: '别人问你怎么不说话 就回 I am bored',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '你无聊，是 bored。你很无趣，才是 boring。',
    emotionInstruction: '结尾做概念锁定，像创作者下判词。',
    speedHint: 'medium-fast',
    subtitle: '自己无聊 bored 让人无聊 boring',
    instruction: defaultInstruction,
  },
];

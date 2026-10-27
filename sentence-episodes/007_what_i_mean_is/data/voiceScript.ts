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
    text: '话说偏了，就用这句拉回来。',
    emotionInstruction: '开头要像递工具，不像讲知识。',
    speedHint: 'very-fast-clear',
    subtitle: '话说偏了 就用这句拉回来',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '很多人不是没重点，是第一句太虚，真正那句还闷在脑子里。',
    emotionInstruction: '像创作者拆穿一种常见表达病。',
    speedHint: 'fast-clear',
    subtitle: '第一句太虚 真正那句还闷在脑子里',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '你不是不会说，你是没把真正意思落下来。',
    emotionInstruction: '短，准，有判断。',
    speedHint: 'fast-clear',
    subtitle: '不是不会说 是没把真正意思落下来',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这句，What I mean is A。',
    emotionInstruction: '主答案要像纠偏键直接出现。',
    speedHint: 'medium-fast',
    subtitle: 'What I mean is A.',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它的作用不是显得书面，是把模糊版收回去，把真意补出来。',
    emotionInstruction: '解释像说透用途，不像解释语法。',
    speedHint: 'fast-clear',
    subtitle: '把模糊版收回去 把真意补出来',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，What I mean is that the problem is getting bigger。',
    emotionInstruction: '第二拍给一个最容易理解的落地例子。',
    speedHint: 'medium-fast',
    subtitle: 'What I mean is that the problem is getting bigger',
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到你消息发虚了，别再绕，直接补一句 What I mean is...',
    emotionInstruction: '要像今晚就能复制出去的操作。',
    speedHint: 'fast-clear',
    subtitle: '消息发虚了 直接补一句 What I mean is',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别让模糊版替你发言。先说 What I mean is A。',
    emotionInstruction: '收口有态度，像一个能记住的提醒。',
    speedHint: 'medium-fast',
    subtitle: '别让模糊版替你发言 先说 What I mean is A',
    instruction: defaultInstruction,
  },
];

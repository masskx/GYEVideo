export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语词根短视频风格，前3秒压迫感强，整体快但清晰，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'magnanimous，你可能一直只记成大方。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'magnanimous 你可能一直只记成大方',
    instruction: `${defaultInstruction} 开头像一记硬切，magnanimous 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'magnanimous，magnify，magnitude，magnificent，magnifier。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'magnanimous / magnify / magnitude / magnificent / magnifier',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一个方向，大。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一个方向：大',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-magn',
    text: '抓住它。magn，就是 great，large，大，伟大。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'magn = great / large / 大',
    instruction: `${defaultInstruction} 这是 payoff，great、large 和 大 要落得很稳。`,
  },
  {
    id: 'word-magnify',
    text: 'magnify，就是让东西变大。所以它是放大，也能引申成夸大。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'magnify = 变大 -> 放大',
    instruction: `${defaultInstruction} magnify 要读准，放大感要一下出来。`,
  },
  {
    id: 'word-magnifier',
    text: 'magnifier，就是用来放大的东西。所以它直接就是放大镜。',
    emotionInstruction: '顺着上一个词自然推进，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'magnifier = 放大的工具 -> 放大镜',
    instruction: `${defaultInstruction} magnifier 要清楚，工具感要直接。`,
  },
  {
    id: 'word-magnitude',
    text: 'magnitude，就是大的程度。所以它是大小，是量级，也是重大程度。',
    emotionInstruction: '像把抽象程度拉出来，一听就懂。',
    speedHint: 'fast-clear',
    subtitle: 'magnitude = 大的程度 -> 量级',
    instruction: `${defaultInstruction} magnitude 要读稳，量级感要明确。`,
  },
  {
    id: 'word-magnificent',
    text: 'magnificent，就是大到壮观，大到了不起。所以它是壮丽的，伟大的。',
    emotionInstruction: '像画面突然被拉大，带一点气势。',
    speedHint: 'fast-clear',
    subtitle: 'magnificent = 大到壮观 -> 壮丽的',
    instruction: `${defaultInstruction} magnificent 要有气势，但不要拖。`,
  },
  {
    id: 'word-magnanimous',
    text: 'magnanimous，本来就是心量很大。气量大，所以才叫宽宏大量。',
    emotionInstruction: '像误区被彻底翻过来，带一点顿悟感。',
    speedHint: 'fast-clear',
    subtitle: 'magnanimous = 心量很大 -> 宽宏大量',
    instruction: `${defaultInstruction} magnanimous 这里要有突然想通的感觉。`,
  },
  {
    id: 'word-magnum',
    text: 'magnum，就是更大的那一号。所以大瓶装，巨大的，都会看到它。',
    emotionInstruction: '像补一个生活里也能遇到的词，别太硬。',
    speedHint: 'fast-clear',
    subtitle: 'magnum = 更大的那号 -> 大瓶装',
    instruction: `${defaultInstruction} magnum 要读清，生活感要有。`,
  },
  {
    id: 'word-maximize',
    text: 'maximize，就是往最大去推。一路推大，所以它是使最大化。',
    emotionInstruction: '像最后补一个动作词，把记忆点拉高。',
    speedHint: 'fast-clear',
    subtitle: 'maximize = 推到最大 -> 最大化',
    instruction: `${defaultInstruction} maximize 要有推到顶的感觉。`,
  },
  {
    id: 'grid-connect',
    text: '现在全串上了。放大，放大的工具，大的程度，大到壮观，心量很大，更大的那号，还有一路推到最大。一整个 magn，就是大，伟大。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一整个 magn，就是大，伟大',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。magn，就是 great，large，大，伟大。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'magn = great / large / 大',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。magnanimous 为什么本质上不是大方，而是心量大？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：magnanimous 为什么和大有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

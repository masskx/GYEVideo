export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语词根短视频风格，前3秒压迫感强，整体快但清楚，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'aquarium，你可能一直只会翻成鱼缸。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'aquarium 你可能一直只会翻成鱼缸',
    instruction: `${defaultInstruction} 开头像一记硬切，aquarium 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'aquatic，aquarium，aqueous，aqueduct，subaqueous。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'aquatic / aquarium / aqueous / aqueduct / subaqueous',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一滩水。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一滩水',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-aqua',
    text: '抓住它。aqua，aque，就是 water，水。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'aqua / aque = water / 水',
    instruction: `${defaultInstruction} 这是 payoff，water 和 水 要落得很稳。`,
  },
  {
    id: 'word-aquatic',
    text: 'aquatic，水里的，水生的。看到它，就往水里想。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'aquatic = 水里的 / 水生的',
    instruction: `${defaultInstruction} aquatic 要读准，水里的要非常落地。`,
  },
  {
    id: 'word-aquarium',
    text: 'aquarium，本质就是装着水的地方。所以才是鱼缸，水族馆。',
    emotionInstruction: '像把常见词瞬间讲透，带一点恍然大悟。',
    speedHint: 'fast-clear',
    subtitle: 'aquarium = 装着水的地方 -> 鱼缸 / 水族馆',
    instruction: `${defaultInstruction} aquarium 和 水 的关系要一听就懂。`,
  },
  {
    id: 'word-aqueous',
    text: 'aqueous，带水的，含水的。所以很多化学语境里都在用它。',
    emotionInstruction: '像把专业词拆得很平，清楚，有推进感。',
    speedHint: 'fast-clear',
    subtitle: 'aqueous = 含水的',
    instruction: `${defaultInstruction} aqueous 虽然像专业词，但要读清。`,
  },
  {
    id: 'word-aqueduct',
    text: 'aqueduct，把水引过去的通道。所以是引水渠，渡槽。',
    emotionInstruction: '要有画面感，像水被一条线送过去。',
    speedHint: 'fast-clear',
    subtitle: 'aqueduct = 引水的通道 -> 引水渠',
    instruction: `${defaultInstruction} aqueduct 和 引水 的对应要很直观。`,
  },
  {
    id: 'word-subaqueous',
    text: 'subaqueous，sub 是下面，aque 是水。水下面，所以是水下的。',
    emotionInstruction: '像拆一个长词，但仍然很顺。',
    speedHint: 'fast-clear',
    subtitle: 'subaqueous = 水下面 -> 水下的',
    instruction: `${defaultInstruction} subaqueous 可以稍慢半拍，但不要拖。`,
  },
  {
    id: 'word-aquifer',
    text: 'aquifer，能带水，能存水的地层。所以是含水层。',
    emotionInstruction: '像补上一块地理知识，专业但别闷。',
    speedHint: 'fast-clear',
    subtitle: 'aquifer = 带水的层 -> 含水层',
    instruction: `${defaultInstruction} aquifer 要尽量读清楚，但不必太慢。`,
  },
  {
    id: 'word-aquamarine',
    text: 'aquamarine，像海水一样的蓝。所以是海蓝色，也指海蓝宝石。',
    emotionInstruction: '像最后补一个颜色词，拉高记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'aquamarine = 像海水的蓝 -> 海蓝色',
    instruction: `${defaultInstruction} aquamarine 要有一点颜色画面感。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。水里，装水，含水，引水，水下，存水，海水蓝。一滩水，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一滩水，串起一排词',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。aqua，aque，就是 water，水。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'aqua / aque = water / 水',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。aqueduct 为什么和水有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：aqueduct 为什么和水有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

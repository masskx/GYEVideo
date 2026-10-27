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
    text: 'submarine，你可能一直只会想到潜艇。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'submarine 你可能一直只会想到潜艇',
    instruction: `${defaultInstruction} 开头像一记硬切，submarine 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'marine，maritime，mariner，marina，submarine。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'marine / maritime / mariner / marina / submarine',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一片海。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一片海',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-mar',
    text: '抓住它。mar，mari，就是 sea，海。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'mar / mari = sea / 海',
    instruction: `${defaultInstruction} 这是 payoff，sea 和 海 要落得很稳。`,
  },
  {
    id: 'word-marine',
    text: 'marine，海的。看到它，就先往海上想。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'marine = 海的',
    instruction: `${defaultInstruction} marine 要读准，海的要非常落地。`,
  },
  {
    id: 'word-maritime',
    text: 'maritime，和海运海事相关的。所以是海上的，海运的。',
    emotionInstruction: '像把常见但偏正式的词拆透，清楚，有推进感。',
    speedHint: 'fast-clear',
    subtitle: 'maritime = 和海相关 -> 海运的 / 海事的',
    instruction: `${defaultInstruction} maritime 要读清楚，别念得太平。`,
  },
  {
    id: 'word-mariner',
    text: 'mariner，在海上跑的人。所以是水手，船员。',
    emotionInstruction: '像顺着上一词自然落到人物身份，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'mariner = 在海上跑的人 -> 水手',
    instruction: `${defaultInstruction} mariner 要让人一听就和船联系上。`,
  },
  {
    id: 'word-marina',
    text: 'marina，船靠海停的地方。所以是游艇码头，小型船坞。',
    emotionInstruction: '要有画面感，像一排船停在海边。',
    speedHint: 'fast-clear',
    subtitle: 'marina = 停船的海边 -> 游艇码头',
    instruction: `${defaultInstruction} marina 和 海边停船 的关系要很直观。`,
  },
  {
    id: 'word-submarine',
    text: 'submarine，sub 是下面，marine 是海。海下面，所以是潜艇，也可以是海底的。',
    emotionInstruction: '像拆一个长词，但仍然很顺。',
    speedHint: 'fast-clear',
    subtitle: 'submarine = 海下面 -> 潜艇 / 海底的',
    instruction: `${defaultInstruction} submarine 可以稍慢半拍，但不要拖。`,
  },
  {
    id: 'word-ultramarine',
    text: 'ultramarine，ultra 是越过，marine 是海。越过海来的蓝，所以是群青色。',
    emotionInstruction: '像补一个颜色词，拉高记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'ultramarine = 越过海来的蓝 -> 群青色',
    instruction: `${defaultInstruction} ultramarine 要有一点颜色画面感。`,
  },
  {
    id: 'word-transmarine',
    text: 'transmarine，trans 是跨过去，marine 是海。跨海的，所以是越洋的。',
    emotionInstruction: '像补一个结构很干净的词，专业但别闷。',
    speedHint: 'fast-clear',
    subtitle: 'transmarine = 跨海的 -> 越洋的',
    instruction: `${defaultInstruction} transmarine 要尽量读清楚，但不必太慢。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。海的，海运，水手，码头，海下，海蓝，跨海。一片海，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一片海，串起一排词',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。mar，mari，就是 sea，海。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'mar / mari = sea / 海',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。submarine 为什么和海有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：submarine 为什么和海有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

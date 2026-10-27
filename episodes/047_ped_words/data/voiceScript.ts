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
    text: 'impede，你可能一直不知道它在说什么。',
    emotionInstruction: '开头像打断对方旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'impede 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} 开头像一记硬切，impede 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'impede，expedite，pedal，pedestrian，podiatrist。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'impede / expedite / pedal / pedestrian / podiatrist',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一双脚。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一双脚',
    instruction: `${defaultInstruction} 这句要像揭穿真相。`,
  },
  {
    id: 'root-ped',
    text: '抓住它。ped，pod，就是 foot，脚。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'ped / pod = foot / 脚',
    instruction: `${defaultInstruction} 这句是 payoff，脚要落得很稳。`,
  },
  {
    id: 'word-impede',
    text: 'impede，把脚卡住。所以是阻碍，妨碍。',
    emotionInstruction: '像突然踩住刹车，制造被卡住的顿挫感。',
    speedHint: 'fast-clear',
    subtitle: 'impede = 把脚卡住 -> 阻碍',
    instruction: `${defaultInstruction} impede 和阻碍的对应要非常清楚。`,
  },
  {
    id: 'word-expedite',
    text: 'expedite，把脚放出来。所以是加速，推进。',
    emotionInstruction: '和 impede 形成强对照，像卡扣被打开。',
    speedHint: 'fast-clear',
    subtitle: 'expedite = 把脚放出来 -> 加速',
    instruction: `${defaultInstruction} expedite 要读准，推进感要出来。`,
  },
  {
    id: 'word-pedal',
    text: 'pedal，用脚踩的东西。所以是脚踏板，也可以是踩。',
    emotionInstruction: '干脆，像第一块拼图啪地落下。',
    speedHint: 'fast-clear',
    subtitle: 'pedal = 用脚踩 -> 脚踏板',
    instruction: `${defaultInstruction} pedal 要清楚，脚踏板要落地。`,
  },
  {
    id: 'word-pedestrian',
    text: 'pedestrian，靠脚走的人。所以是行人。',
    emotionInstruction: '画面感要强，像路上人群走过去。',
    speedHint: 'fast-clear',
    subtitle: 'pedestrian = 靠脚走的人 -> 行人',
    instruction: `${defaultInstruction} pedestrian 不要拖长，行人要很直观。`,
  },
  {
    id: 'word-pedicure',
    text: 'pedicure，照顾脚。所以是修脚，足部护理。',
    emotionInstruction: '像把词根延伸到生活场景，轻一点但仍然快。',
    speedHint: 'fast-clear',
    subtitle: 'pedicure = 照顾脚 -> 修脚',
    instruction: `${defaultInstruction} pedicure 要读清楚，不要读成别的词。`,
  },
  {
    id: 'word-podiatrist',
    text: 'podiatrist，pod 也是脚。专门看脚的人，足科医生。',
    emotionInstruction: '像补上医学词的隐藏钥匙，显得词网更完整。',
    speedHint: 'fast-clear',
    subtitle: 'podiatrist = 看脚的人 -> 足科医生',
    instruction: `${defaultInstruction} podiatrist 可以稍微慢半拍，但别拖。`,
  },
  {
    id: 'word-pedigree',
    text: 'pedigree，脚印一路往回追。所以是血统，家谱。',
    emotionInstruction: '给一个意外但好记的画面，像沿脚印追来源。',
    speedHint: 'fast-clear',
    subtitle: 'pedigree = 一路追脚印 -> 血统',
    instruction: `${defaultInstruction} pedigree 要和脚印画面绑定。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。卡脚，放脚，踩脚，走路，看脚。一双脚，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一双脚，串起一排词',
    instruction: `${defaultInstruction} 这句要有“终于串起来了”的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。ped，pod，就是 foot，脚。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'ped / pod = foot / 脚',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。expedite 为什么是加速？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人留下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：expedite 为什么是加速？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

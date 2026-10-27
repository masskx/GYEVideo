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
    text: 'indent，你可能一直不知道它在说什么。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'indent 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} 开头像一记硬切，indent 要咬清楚。`,
  },
  {
    id: 'flash-words',
    text: 'indent，dental，dentist，denture，orthodontist。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'indent / dental / dentist / denture / orthodontist',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一排牙。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一排牙',
    instruction: `${defaultInstruction} 这句要像揭穿真相。`,
  },
  {
    id: 'root-dent',
    text: '抓住它。dent，dont，就是 tooth，牙齿。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'dent / dont = tooth / 牙齿',
    instruction: `${defaultInstruction} tooth 和牙齿要落得很稳。`,
  },
  {
    id: 'word-indent',
    text: 'indent，像牙咬进去的缺口。所以是缩进，凹进去。',
    emotionInstruction: '像突然把隐藏画面亮出来，带一点恍然大悟。',
    speedHint: 'fast-clear',
    subtitle: 'indent = 牙咬出的缺口 -> 缩进',
    instruction: `${defaultInstruction} indent 和缺口的对应要非常清楚。`,
  },
  {
    id: 'word-dental',
    text: 'dental，牙齿的。所以是牙科的，牙用的。',
    emotionInstruction: '干脆，像第一块拼图啪地落下。',
    speedHint: 'fast-clear',
    subtitle: 'dental = 牙齿的 -> 牙科的',
    instruction: `${defaultInstruction} dental 要读准，牙科的要落地。`,
  },
  {
    id: 'word-dentist',
    text: 'dentist，管牙齿的人。所以是牙医。',
    emotionInstruction: '像把熟词拆开，清楚，有爽感。',
    speedHint: 'fast-clear',
    subtitle: 'dentist = 管牙齿的人 -> 牙医',
    instruction: `${defaultInstruction} dentist 不要拖长，牙医要很直观。`,
  },
  {
    id: 'word-denture',
    text: 'denture，一排做出来的牙。所以是假牙。',
    emotionInstruction: '画面感要强，像把一排牙摆出来。',
    speedHint: 'fast-clear',
    subtitle: 'denture = 一排牙 -> 假牙',
    instruction: `${defaultInstruction} denture 要读清楚，不要读成 danger。`,
  },
  {
    id: 'word-dentifrice',
    text: 'dentifrice，清洁牙齿的东西。所以是牙膏，洁牙剂。',
    emotionInstruction: '像补上生活场景，快，但不要挤。',
    speedHint: 'fast-clear',
    subtitle: 'dentifrice = 清洁牙齿 -> 牙膏',
    instruction: `${defaultInstruction} dentifrice 可以稍慢半拍，但别拖。`,
  },
  {
    id: 'word-orthodontist',
    text: 'orthodontist，ortho 是正，dont 是牙。矫正牙齿的人，正畸医生。',
    emotionInstruction: '像拆开一个长难词，节奏稳一点但仍然有推进感。',
    speedHint: 'fast-clear',
    subtitle: 'orthodontist = 正 + 牙 -> 正畸医生',
    instruction: `${defaultInstruction} orthodontist 要清晰，不要含糊。`,
  },
  {
    id: 'word-edentulous',
    text: 'edentulous，e 是没有，dent 是牙。所以是无牙的。',
    emotionInstruction: '给一个意外但好记的反向画面。',
    speedHint: 'fast-clear',
    subtitle: 'edentulous = 没有牙 -> 无牙的',
    instruction: `${defaultInstruction} edentulous 要和无牙画面绑定。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。缺口，牙科，牙医，假牙，洁牙，正牙，没牙。一排牙，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一排牙，串起一排词',
    instruction: `${defaultInstruction} 这句要有“终于串起来了”的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。dent，dont，就是 tooth，牙齿。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'dent / dont = tooth / 牙齿',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。indent 为什么和牙齿有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人留下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：indent 为什么和牙齿有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

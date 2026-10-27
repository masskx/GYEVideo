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
    text: 'manage，你可能一直不知道它在说什么。',
    emotionInstruction: '开头像打断对方旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'manage 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} 开头像一记硬切，manage 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'manage，manual，manufacture，manuscript，manipulate。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'manage / manual / manufacture / manuscript / manipulate',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一只手。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一只手',
    instruction: `${defaultInstruction} 这句要像揭穿真相。`,
  },
  {
    id: 'root-man',
    text: '抓住它。man，manu，就是 hand，手。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'man / manu = hand / 手',
    instruction: `${defaultInstruction} 这句是 payoff，手要落得很稳。`,
  },
  {
    id: 'word-manual',
    text: 'manual，用手的。所以是手工的，手册。',
    emotionInstruction: '像先把地板词钉住，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'manual = 用手的 -> 手工的 / 手册',
    instruction: `${defaultInstruction} manual 和 手工 的对应要非常清楚。`,
  },
  {
    id: 'word-manufacture',
    text: 'manufacture，手工制造。所以是生产，制造。',
    emotionInstruction: '像工厂流水线启动，干脆有力量感。',
    speedHint: 'fast-clear',
    subtitle: 'manufacture = 手工制造 -> 生产',
    instruction: `${defaultInstruction} manufacture 要清楚，制造要有生产感。`,
  },
  {
    id: 'word-manage',
    text: 'manage，用手管。所以是管理。',
    emotionInstruction: '像抓住方向盘，有掌控感。',
    speedHint: 'fast-clear',
    subtitle: 'manage = 用手管 -> 管理',
    instruction: `${defaultInstruction} manage 要读准，管理要有掌控力。`,
  },
  {
    id: 'word-manuscript',
    text: 'manuscript，手写的东西。所以是手稿，原稿。',
    emotionInstruction: '像看见古代羊皮纸，要有年代感。',
    speedHint: 'fast-clear',
    subtitle: 'manuscript = 手写稿 -> 手稿 / 原稿',
    instruction: `${defaultInstruction} manuscript 要有手写的质感。`,
  },
  {
    id: 'word-manipulate',
    text: 'manipulate，用手操作。所以是操纵，控制。',
    emotionInstruction: '要有暗黑控制感，像背后拉线。',
    speedHint: 'fast-clear',
    subtitle: 'manipulate = 用手操作 -> 操纵',
    instruction: `${defaultInstruction} manipulate 要有操控的阴影感。`,
  },
  {
    id: 'word-manner',
    text: 'manner，手的样子。所以是方式，举止。',
    emotionInstruction: '像观察一个人怎么做事，带点评判感。',
    speedHint: 'fast-clear',
    subtitle: 'manner = 手的样子 -> 方式 / 举止',
    instruction: `${defaultInstruction} manner 要像看动作姿态。`,
  },
  {
    id: 'word-mandate',
    text: 'mandate，手给的权。所以是授权，命令。',
    emotionInstruction: '像权力文件盖章，要有官方感。',
    speedHint: 'fast-clear',
    subtitle: 'mandate = 手给的权 -> 授权 / 命令',
    instruction: `${defaultInstruction} mandate 要有权力下放的感觉。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。手工，手管，手写，手控。一只手，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一只手，串起一排词',
    instruction: `${defaultInstruction} 这句要有"终于串起来了"的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。man，manu，就是 hand，手。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'man / manu = hand / 手',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。manage 为什么是管理？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人留下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：manage 为什么是管理？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

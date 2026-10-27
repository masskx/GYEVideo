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
    text: 'minute，你可能一直只记成分钟。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'minute 你可能一直只记成分钟',
    instruction: `${defaultInstruction} 开头像一记硬切，minute 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'minute，mini，minimal，minor，diminish。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'minute / mini / minimal / minor / diminish',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲一个感觉，小。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲一个感觉：小',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-min',
    text: '抓住它。min，就是 small，小。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'min = small / 小',
    instruction: `${defaultInstruction} 这是 payoff，small 和 小 要落得很稳。`,
  },
  {
    id: 'word-mini',
    text: 'mini，就是小号，小尺寸。所以迷你款，直接就是 mini。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'mini = 小号 / 迷你',
    instruction: `${defaultInstruction} mini 要短促清楚，迷你感要一下出来。`,
  },
  {
    id: 'word-minimal',
    text: 'minimal，就是压到最小的限度。所以它是最小的，最低限度的。',
    emotionInstruction: '顺着上一个词自然推进，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'minimal = 最小限度 -> 最小的',
    instruction: `${defaultInstruction} minimal 要清楚，压到最小的感觉要明显。`,
  },
  {
    id: 'word-minimum',
    text: 'minimum，就是最小值，最低线。不能再小了，就是 minimum。',
    emotionInstruction: '像把结构往下再压一层，一听就懂。',
    speedHint: 'fast-clear',
    subtitle: 'minimum = 不能再小 -> 最小值',
    instruction: `${defaultInstruction} minimum 要读稳，最低线的感觉要明确。`,
  },
  {
    id: 'word-minor',
    text: 'minor，就是比较小的那个。所以它也是较小的，次要的。',
    emotionInstruction: '像把大小关系拉出来，别太松。',
    speedHint: 'fast-clear',
    subtitle: 'minor = 比较小的 -> 次要的',
    instruction: `${defaultInstruction} minor 要读准，次一级的感觉要清楚。`,
  },
  {
    id: 'word-miniature',
    text: 'miniature，就是缩小版。把一个东西做到很小，所以它是微型的，缩样的。',
    emotionInstruction: '像把画面感一下拉起来，带一点玩具模型感。',
    speedHint: 'fast-clear',
    subtitle: 'miniature = 缩小版 -> 微型的',
    instruction: `${defaultInstruction} miniature 要读清，缩小版的画面感要出来。`,
  },
  {
    id: 'word-diminish',
    text: 'diminish，就是一点点变小，变弱。所以它是减少，缩小。',
    emotionInstruction: '像把状态往下收，做一个动态变化。',
    speedHint: 'fast-clear',
    subtitle: 'diminish = 变小 -> 减少',
    instruction: `${defaultInstruction} diminish 要有慢慢缩小的感觉，但节奏别拖。`,
  },
  {
    id: 'word-minute',
    text: 'minute，除了分钟，还能指极小的，细微的。小到你都快看不见了。',
    emotionInstruction: '像误区被彻底翻过来，带一点顿悟感。',
    speedHint: 'fast-clear',
    subtitle: 'minute = 极小的 / 细微的',
    instruction: `${defaultInstruction} minute 这里要有突然想通的感觉。`,
  },
  {
    id: 'grid-connect',
    text: '现在全串上了。迷你的，最小限度，最小值，较小的，缩小版，慢慢变小，还有小到看不见。一整个 min，就是小。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一整个 min，就是小',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。min，就是 small，小。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'min = small / 小',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。minute 为什么不只和时间有关，还和小有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：minute 为什么和小有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

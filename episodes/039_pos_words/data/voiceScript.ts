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
    text: 'position，别再孤儿式背了。',
    emotionInstruction: '开头像打断对方旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'position 别再当孤儿词背',
    instruction: `${defaultInstruction} 开头像一记硬切，position 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'position，deposit，oppose，postpone，expose。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'position / deposit / oppose / postpone / expose',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '最坑的是，最熟的 position，反而最会带偏你。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '最熟的 position，反而最会带偏你',
    instruction: `${defaultInstruction} 这句要像揭穿真相。`,
  },
  {
    id: 'root-pos',
    text: '抓住它。pos，pon，就是 put，place，放。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'pos / pon = put / place / 放置',
    instruction: `${defaultInstruction} 这句是 payoff，放置要落得很稳。`,
  },
  {
    id: 'word-position',
    text: 'position，就是被放在哪里。',
    emotionInstruction: '像先把地板词钉住，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'position = 被放在哪里 -> 位置',
    instruction: `${defaultInstruction} position 和 位置 的对应要非常清楚。`,
  },
  {
    id: 'word-deposit',
    text: 'deposit，放下去，先存着。所以是存放，押金。',
    emotionInstruction: '像硬币掉进盒子里，干脆有落点。',
    speedHint: 'fast-clear',
    subtitle: 'deposit = 放下去 -> 存放 / 押金',
    instruction: `${defaultInstruction} deposit 要清楚，语气像解释钱被放下。`,
  },
  {
    id: 'word-compose',
    text: 'compose，放一起。所以是组成。',
    emotionInstruction: '像零件啪地拼到一起，有组装感。',
    speedHint: 'fast-clear',
    subtitle: 'compose = 放到一起 -> 组成',
    instruction: `${defaultInstruction} compose 要读准，组成要有拼起来的感觉。`,
  },
  {
    id: 'word-expose',
    text: 'expose，放外面，让人看见。所以是暴露，揭露。',
    emotionInstruction: '像一下把遮羞布扯掉，速度要快。',
    speedHint: 'fast-clear',
    subtitle: 'expose = 放到外面 -> 暴露 / 揭露',
    instruction: `${defaultInstruction} expose 要有揭开的冲击感。`,
  },
  {
    id: 'word-oppose',
    text: 'oppose，放到对面。所以是反对，对着干。',
    emotionInstruction: '要有对冲感，像两边顶起来。',
    speedHint: 'fast-clear',
    subtitle: 'oppose = 放在对面 -> 反对',
    instruction: `${defaultInstruction} oppose 要有立场冲突感。`,
  },
  {
    id: 'word-propose',
    text: 'propose，放到前面。所以是提议。',
    emotionInstruction: '像把方案推到桌面中央，爽一点。',
    speedHint: 'fast-clear',
    subtitle: 'propose = 放到前面 -> 提议',
    instruction: `${defaultInstruction} propose 要像把想法亮出来。`,
  },
  {
    id: 'word-postpone',
    text: 'postpone，放到后面。说白了，就是往后推。',
    emotionInstruction: '这句要像所有拖延症现场被当场点名。',
    speedHint: 'fast-clear',
    subtitle: 'postpone = 放到后面 -> 推迟',
    instruction: `${defaultInstruction} postpone 要有往后推的味道。`,
  },
  {
    id: 'word-component',
    text: 'component，放进整体里的那一部分。所以是部件。',
    emotionInstruction: '像结构图最后一块卡上去，收得稳一点。',
    speedHint: 'fast-clear',
    subtitle: 'component = 放在一起的一部分 -> 组成部分',
    instruction: `${defaultInstruction} component 要读准，组成部分要清楚。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。放下去，放对面，放后面。方向一换，词义就换。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一串词 suddenly connected',
    instruction: `${defaultInstruction} 这句要有“终于串起来了”的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。pos，pon，就是 put，放。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'pos / pon = put / place / 放置',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。postpone，到底是把什么放到后面？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人留下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：postpone 是把什么放到后面？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

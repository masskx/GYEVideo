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
    text: 'complete，你可能一直只记成完成。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'complete 你可能一直只记成完成',
    instruction: `${defaultInstruction} 开头像一记硬切，complete 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'complete，plenty，replenish，supplement，deplete。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'complete / plenty / replenish / supplement / deplete',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲一个状态，满。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲一个状态：满',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-plen',
    text: '抓住它。plen，就是 full，满。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'plen = full / 满',
    instruction: `${defaultInstruction} 这是 payoff，full 和 满 要落得很稳。`,
  },
  {
    id: 'word-plenty',
    text: 'plenty，就是很多，很多到满出来。所以它是大量，充足。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'plenty = 多到满 -> 大量',
    instruction: `${defaultInstruction} plenty 要读准，充足感要一下出来。`,
  },
  {
    id: 'word-plentiful',
    text: 'plentiful，就是满满当当的状态。所以它是丰富的，充足的。',
    emotionInstruction: '顺着上一个词自然推进，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'plentiful = 满满的 -> 丰富的',
    instruction: `${defaultInstruction} plentiful 要清楚，丰富感要直接。`,
  },
  {
    id: 'word-replenish',
    text: 'replenish，re 是重新，plen 是满。重新补满，所以是补充。',
    emotionInstruction: '像把结构一刀切开，一听就懂。',
    speedHint: 'fast-clear',
    subtitle: 'replenish = 重新补满 -> 补充',
    instruction: `${defaultInstruction} replenish 要读清，重新补满的动作感要到位。`,
  },
  {
    id: 'word-supplement',
    text: 'supplement，就是往上补，让它更满。所以它既是补充品，也是补充。',
    emotionInstruction: '像把抽象意义推回到日常场景，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'supplement = 补到更满 -> 补充',
    instruction: `${defaultInstruction} supplement 要读稳，补充的感觉要清楚。`,
  },
  {
    id: 'word-complete',
    text: 'complete，本来就是全都填满了。没有缺口，所以才叫完整，才叫完成。',
    emotionInstruction: '像误区被彻底翻过来，带一点顿悟感。',
    speedHint: 'fast-clear',
    subtitle: 'complete = 全部填满 -> 完整 / 完成',
    instruction: `${defaultInstruction} complete 这里要有突然想通的感觉。`,
  },
  {
    id: 'word-deplete',
    text: 'deplete，反过来，是把满的东西抽空。所以它是耗尽，使枯竭。',
    emotionInstruction: '像在同一条线里做一个反向对照，别太慢。',
    speedHint: 'fast-clear',
    subtitle: 'deplete = 从满变空 -> 耗尽',
    instruction: `${defaultInstruction} deplete 要有反向拉空的感觉。`,
  },
  {
    id: 'word-compliment',
    text: 'compliment，本来也是把好感加满。让对方心里被填满，所以它是赞美。',
    emotionInstruction: '像最后补一个带情绪的词，把记忆点拉高。',
    speedHint: 'fast-clear',
    subtitle: 'compliment = 把好感加满 -> 赞美',
    instruction: `${defaultInstruction} compliment 要读清，赞美的情绪要明显。`,
  },
  {
    id: 'grid-connect',
    text: '现在全串上了。多到满，满满当当，重新补满，补到更满，全部填满，从满被抽空，还有把好感加满。一整个 plen，就是满。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一整个 plen，就是满',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。plen，就是 full，满。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'plen = full / 满',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。complete 为什么本质上不是做完，而是填满？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：complete 为什么和满有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

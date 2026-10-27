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
    text: 'vacation，你可能一直只记成度假。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'vacation 你可能一直只记成度假',
    instruction: `${defaultInstruction} 开头像一记硬切，vacation 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'vacation，vacant，vacancy，vacate，evacuate。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'vacation / vacant / vacancy / vacate / evacuate',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲一个字，空。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲一个字：空',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-vac',
    text: '抓住它。vac，就是 empty，空。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'vac = empty / 空',
    instruction: `${defaultInstruction} 这是 payoff，empty 和 空 要落得很稳。`,
  },
  {
    id: 'word-vacant',
    text: 'vacant，就是空着的。房间没人，职位没人，都是 vacant。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'vacant = 空着的',
    instruction: `${defaultInstruction} vacant 要读准，空着的感觉要直接落地。`,
  },
  {
    id: 'word-vacancy',
    text: 'vacancy，就是空出来的位置。所以它是空缺，空位。',
    emotionInstruction: '顺着上一个词自然推进，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'vacancy = 空出来的位置 -> 空缺',
    instruction: `${defaultInstruction} vacancy 要清楚，职位空缺的感觉要明显。`,
  },
  {
    id: 'word-vacate',
    text: 'vacate，就是把地方腾空。搬出去，清出来，就是 vacate。',
    emotionInstruction: '像把动作感一下子推出来，干脆一点。',
    speedHint: 'fast-clear',
    subtitle: 'vacate = 腾空 -> 搬离',
    instruction: `${defaultInstruction} vacate 要有动作感，腾空要干脆。`,
  },
  {
    id: 'word-evacuate',
    text: 'evacuate，就是把人清空撤走。所以火警里的紧急疏散，就是 evacuate。',
    emotionInstruction: '像把词义推到真实场景，节奏紧一点。',
    speedHint: 'fast-clear',
    subtitle: 'evacuate = 清空撤走 -> 疏散',
    instruction: `${defaultInstruction} evacuate 要读清，疏散的紧张感要出来。`,
  },
  {
    id: 'word-vacation',
    text: 'vacation，本来就是把工作空出来。空出时间，所以才叫假期。',
    emotionInstruction: '像误区被彻底翻过来，带一点顿悟感。',
    speedHint: 'fast-clear',
    subtitle: 'vacation = 把工作空出来 -> 假期',
    instruction: `${defaultInstruction} vacation 这里要有突然想通的感觉。`,
  },
  {
    id: 'word-vacuum',
    text: 'vacuum，里面没有东西，没有空气。所以它是真空。',
    emotionInstruction: '像补一个特别直观的画面词，别太硬。',
    speedHint: 'fast-clear',
    subtitle: 'vacuum = 里面空了 -> 真空',
    instruction: `${defaultInstruction} vacuum 要读稳，真空的空感要清楚。`,
  },
  {
    id: 'word-vacuous',
    text: 'vacuous，脑子里像被掏空了。所以它是空洞的，空虚的。',
    emotionInstruction: '像最后补一个抽象词，把记忆点拉高。',
    speedHint: 'fast-clear',
    subtitle: 'vacuous = 被掏空 -> 空洞的',
    instruction: `${defaultInstruction} vacuous 要读清，空洞感要出来。`,
  },
  {
    id: 'grid-connect',
    text: '现在全串上了。空着的，空位，腾空，清空撤离，把工作空出来，里面没有东西，还有脑子空空。一整个 vac，就是空。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一整个 vac，就是空',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。vac，就是 empty，空。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'vac = empty / 空',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。vacation 为什么其实和空有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：vacation 为什么和空有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

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
    text: 'pyromania，你可能一直只记成心理学词。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'pyromania 你可能一直只记成心理学词',
    instruction: `${defaultInstruction} 开头像一记硬切，pyromania 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'pyromania，pyromaniac，pyrotechnics，pyrometer，pyrite。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'pyromania / pyromaniac / pyrotechnics / pyrometer / pyrite',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一把火。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一把火',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-pyro',
    text: '抓住它。pyro，pyr，就是 fire，火。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'pyro / pyr = fire / 火',
    instruction: `${defaultInstruction} 这是 payoff，fire 和 火 要落得很稳。`,
  },
  {
    id: 'word-pyromania',
    text: 'pyromania，对火有失控迷恋。所以是纵火癖。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'pyromania = 对火着迷 -> 纵火癖',
    instruction: `${defaultInstruction} pyromania 要读准，纵火癖要直接落地。`,
  },
  {
    id: 'word-pyromaniac',
    text: 'pyromaniac，就是有纵火癖的那个人。所以是纵火狂。',
    emotionInstruction: '像顺着上一词自然落到人物身份，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'pyromaniac = 有纵火癖的人 -> 纵火狂',
    instruction: `${defaultInstruction} pyromaniac 虽然长，但要读清。`,
  },
  {
    id: 'word-pyrotechnics',
    text: 'pyrotechnics，玩火做效果的技术。所以是烟火技术，焰火表演。',
    emotionInstruction: '要有画面感，像烟花突然炸开。',
    speedHint: 'fast-clear',
    subtitle: 'pyrotechnics = 玩火做效果 -> 烟火技术',
    instruction: `${defaultInstruction} pyrotechnics 要带一点爆开的感觉。`,
  },
  {
    id: 'word-pyrometer',
    text: 'pyrometer，meter 是测量。测火的高温，所以是高温计。',
    emotionInstruction: '像把专业词拆得很平，清楚，有推进感。',
    speedHint: 'fast-clear',
    subtitle: 'pyrometer = 测火温 -> 高温计',
    instruction: `${defaultInstruction} pyrometer 和 高温计 的对应要一听就懂。`,
  },
  {
    id: 'word-pyrite',
    text: 'pyrite，这种矿一打就出火星。所以它叫黄铁矿。',
    emotionInstruction: '像补一个有小火花画面的词，干脆一点。',
    speedHint: 'fast-clear',
    subtitle: 'pyrite = 能打出火星 -> 黄铁矿',
    instruction: `${defaultInstruction} pyrite 要读清，火星感要出来。`,
  },
  {
    id: 'word-pyrex',
    text: 'pyrex，能扛火扛热的玻璃。所以是耐热玻璃。',
    emotionInstruction: '像补一个生活里也能见到的词，别太硬。',
    speedHint: 'fast-clear',
    subtitle: 'pyrex = 耐火耐热 -> 耐热玻璃',
    instruction: `${defaultInstruction} pyrex 可以稍慢半拍，但不要拖。`,
  },
  {
    id: 'word-pyracantha',
    text: 'pyracantha，红果像火一样炸开。所以它叫火棘。',
    emotionInstruction: '像最后补一个形象词，拉高记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'pyracantha = 像火的红果 -> 火棘',
    instruction: `${defaultInstruction} pyracantha 要有颜色和火感。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。纵火，纵火的人，烟火，高温，火星，耐火，像火的红果。一把火，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一把火，串起一排词',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。pyro，pyr，就是 fire，火。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'pyro / pyr = fire / 火',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。pyrometer 为什么和火有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：pyrometer 为什么和火有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

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
    text: 'exalt，你可能一直只把它背成赞美。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'exalt 你可能一直只把它背成赞美',
    instruction: `${defaultInstruction} 开头像一记硬切，exalt 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'exalt，altitude，altimeter，alto，altiplano。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'exalt / altitude / altimeter / alto / altiplano',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一个方向，高。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一个方向：高',
    instruction: `${defaultInstruction} 这句要像掀开答案。`,
  },
  {
    id: 'root-alt',
    text: '抓住它。alt，就是 high，高。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'alt = high / 高',
    instruction: `${defaultInstruction} 这是 payoff，high 和 高 要落得很实。`,
  },
  {
    id: 'word-altitude',
    text: 'altitude，就是高出来的程度。所以它是高度，是海拔。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'altitude = 高的程度 -> 高度 / 海拔',
    instruction: `${defaultInstruction} altitude 要读准，高度感要一下出来。`,
  },
  {
    id: 'word-altimeter',
    text: 'altimeter，就是测高度的东西。所以它直接就是高度计，测高仪。',
    emotionInstruction: '顺着上一个词自然推进，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'altimeter = 测高度的工具 -> 高度计',
    instruction: `${defaultInstruction} altimeter 要清楚，仪器感要直接。`,
  },
  {
    id: 'word-alto',
    text: 'alto，本质上就是偏高的那个声部。所以它是中音部，也常指女低音。',
    emotionInstruction: '像把音乐里的词突然拉回词根线索，一听就懂。',
    speedHint: 'fast-clear',
    subtitle: 'alto = 偏高的声部 -> 中音部',
    instruction: `${defaultInstruction} alto 要干净利落，不要拖尾。`,
  },
  {
    id: 'word-exalt',
    text: 'exalt，不只是赞美。它原来是往上抬，抬高。所以后来才引申成推崇，颂扬。',
    emotionInstruction: '像误区被彻底翻过来，带一点顿悟感。',
    speedHint: 'fast-clear',
    subtitle: 'exalt = 往上抬高 -> 颂扬',
    instruction: `${defaultInstruction} exalt 这里要有突然想通的感觉。`,
  },
  {
    id: 'word-altiplano',
    text: 'altiplano，字面上就是高的平地。所以它就是高原。',
    emotionInstruction: '像补一个画面词，能让记忆更立体。',
    speedHint: 'fast-clear',
    subtitle: 'altiplano = 高的平地 -> 高原',
    instruction: `${defaultInstruction} altiplano 要读清楚，画面感要出来。`,
  },
  {
    id: 'word-altimetry',
    text: 'altimetry，就是对高度进行测量。所以它是测高法，是高度测量。',
    emotionInstruction: '像补上一个系统词，把词网再织密一点。',
    speedHint: 'fast-clear',
    subtitle: 'altimetry = 高度测量 -> 测高法',
    instruction: `${defaultInstruction} altimetry 要稳，不要念散。`,
  },
  {
    id: 'word-altissimo',
    text: 'altissimo，就是非常高，极高。所以它常指极高音。',
    emotionInstruction: '像最后再把高度推到顶，形成收束。',
    speedHint: 'fast-clear',
    subtitle: 'altissimo = 极高 -> 极高音',
    instruction: `${defaultInstruction} altissimo 要有往上冲一下的感觉。`,
  },
  {
    id: 'grid-connect',
    text: '现在全串上了。高度，测高度，偏高的声部，往上抬高，高的平地，还有高度测量，和极高音。整条 alt，讲的都是高。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一整条 alt，讲的都是高',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。alt，就是 high，高。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'alt = high / 高',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。为什么 exalt 本质上不是夸，而是先抬高？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：exalt 为什么先是抬高？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

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
    text: 'dermatology，你可能一直背得太散了。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'dermatology 你可能一直背得太散了',
    instruction: `${defaultInstruction} 开头像一记硬切，dermatology 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'dermal，dermatology，epidermis，hypodermic，dermatologist。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'dermal / dermatology / epidermis / hypodermic / dermatologist',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一层皮。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一层皮',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-derm',
    text: '抓住它。derm，derma，就是 skin，皮肤。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'derm / derma = skin / 皮肤',
    instruction: `${defaultInstruction} 这是 payoff，skin 和 皮肤 要落得很稳。`,
  },
  {
    id: 'word-dermal',
    text: 'dermal，皮肤的。看到它，先别慌，先想到皮肤表层。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'dermal = 皮肤的',
    instruction: `${defaultInstruction} dermal 要读准，皮肤的要非常落地。`,
  },
  {
    id: 'word-dermatology',
    text: 'dermatology，研究皮肤的学问。所以是皮肤病学。',
    emotionInstruction: '像把抽象名词拆开，清楚，有推进感。',
    speedHint: 'fast-clear',
    subtitle: 'dermatology = 研究皮肤 -> 皮肤病学',
    instruction: `${defaultInstruction} dermatology 不要含糊，皮肤病学要清晰有力。`,
  },
  {
    id: 'word-dermatologist',
    text: 'dermatologist，研究和处理皮肤的人。所以是皮肤科医生。',
    emotionInstruction: '像顺着上一词自然落到职业身份，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'dermatologist = 研究皮肤的人 -> 皮肤科医生',
    instruction: `${defaultInstruction} dermatologist 虽然长，但要读清。`,
  },
  {
    id: 'word-epidermis',
    text: 'epidermis，epi 是在上面，dermis 是皮。最上面那层皮，就是表皮。',
    emotionInstruction: '像把长词拆开后突然变简单，带一点爽感。',
    speedHint: 'fast-clear',
    subtitle: 'epidermis = 最上层的皮 -> 表皮',
    instruction: `${defaultInstruction} epidermis 和 表皮 的对应要一听就懂。`,
  },
  {
    id: 'word-hypodermic',
    text: 'hypodermic，hypo 是下面，dermic 是皮肤。扎到皮肤下面，所以是皮下注射的。',
    emotionInstruction: '要有画面感，像针头一下进到皮下。',
    speedHint: 'fast-clear',
    subtitle: 'hypodermic = 皮肤下面 -> 皮下注射的',
    instruction: `${defaultInstruction} hypodermic 可以稍慢半拍，但不要拖。`,
  },
  {
    id: 'word-pachyderm',
    text: 'pachyderm，pachy 是厚，derm 是皮。厚皮的动物，所以是厚皮动物。',
    emotionInstruction: '像补上一记好记的形象词，干脆一点。',
    speedHint: 'fast-clear',
    subtitle: 'pachyderm = 厚皮 -> 厚皮动物',
    instruction: `${defaultInstruction} pachyderm 要读清，厚皮动物要有画面。`,
  },
  {
    id: 'word-taxidermy',
    text: 'taxidermy，处理皮和外形来做标本。所以是动物标本剥制术。',
    emotionInstruction: '像补一个冷门但能拉高记忆点的词，专业但别闷。',
    speedHint: 'fast-clear',
    subtitle: 'taxidermy = 处理皮做标本 -> 动物标本剥制术',
    instruction: `${defaultInstruction} taxidermy 要尽量读清楚，但不必太慢。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。皮肤，皮肤学，皮肤医生，表皮，皮下，厚皮，标本皮。一层皮，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一层皮，串起一排词',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。derm，derma，就是 skin，皮肤。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'derm / derma = skin / 皮肤',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。hypodermic 为什么和皮肤有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：hypodermic 为什么和皮肤有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

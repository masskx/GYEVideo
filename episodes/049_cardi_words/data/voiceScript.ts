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
    text: 'cardiology，你可能一直背得太慢了。',
    emotionInstruction: '开头像打断旧记忆，短，狠，立刻抓人。',
    speedHint: 'very-fast-clear',
    subtitle: 'cardiology 你可能一直背得太慢了',
    instruction: `${defaultInstruction} 开头像一记硬切，cardiology 要咬得很清楚。`,
  },
  {
    id: 'flash-words',
    text: 'cardiac，cardiology，cardiogram，cardiovascular，cardiologist。',
    emotionInstruction: '像爆闪单词墙，节奏要顶上去。',
    speedHint: 'fast',
    subtitle: 'cardiac / cardiology / cardiogram / cardiovascular / cardiologist',
    instruction: `${defaultInstruction} 五个词都要清楚，像连续砸下来。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一颗心。',
    emotionInstruction: '要有反常识揭穿感，像当面拆穿背词误区。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一颗心',
    instruction: `${defaultInstruction} 这句要像揭开答案。`,
  },
  {
    id: 'root-cardi',
    text: '抓住它。cardi，cardio，就是 heart，心脏。',
    emotionInstruction: '像把底层规律拍在桌上，稳，准，直接。',
    speedHint: 'fast-clear',
    subtitle: 'cardi / cardio = heart / 心脏',
    instruction: `${defaultInstruction} 这是 payoff，heart 和 心脏 要落得很稳。`,
  },
  {
    id: 'word-cardiac',
    text: 'cardiac，心脏的。所以一看到它，就先往心脏上想。',
    emotionInstruction: '像第一块拼图落地，利落，不拖。',
    speedHint: 'fast-clear',
    subtitle: 'cardiac = 心脏的',
    instruction: `${defaultInstruction} cardiac 要读准，心脏的要非常落地。`,
  },
  {
    id: 'word-cardiology',
    text: 'cardiology，研究心脏的学问。所以是心脏病学。',
    emotionInstruction: '像把抽象名词拆开，清楚，有推进感。',
    speedHint: 'fast-clear',
    subtitle: 'cardiology = 研究心脏 -> 心脏病学',
    instruction: `${defaultInstruction} cardiology 不要含糊，心脏病学要清晰有力。`,
  },
  {
    id: 'word-cardiologist',
    text: 'cardiologist，研究和处理心脏的人。所以是心脏科医生。',
    emotionInstruction: '像顺着上一词自然落到职业身份，快，稳。',
    speedHint: 'fast-clear',
    subtitle: 'cardiologist = 研究心脏的人 -> 心脏科医生',
    instruction: `${defaultInstruction} cardiologist 虽然长，但要读清。`,
  },
  {
    id: 'word-cardiogram',
    text: 'cardiogram，把心脏的电信号画出来。所以是心电图。',
    emotionInstruction: '要有画面感，像监护仪线条亮起来。',
    speedHint: 'fast-clear',
    subtitle: 'cardiogram = 画出心脏信号 -> 心电图',
    instruction: `${defaultInstruction} cardiogram 和 心电图 的对应要一听就懂。`,
  },
  {
    id: 'word-cardiovascular',
    text: 'cardiovascular，心脏加血管一起看。所以是心血管的。',
    emotionInstruction: '像视角突然拉宽，信息密度上来，但别挤。',
    speedHint: 'fast-clear',
    subtitle: 'cardiovascular = 心脏 + 血管 -> 心血管的',
    instruction: `${defaultInstruction} cardiovascular 要有医学感，但节奏仍然要快。`,
  },
  {
    id: 'word-cardiopulmonary',
    text: 'cardiopulmonary，cardio 是心，pulmonary 是肺。所以是心肺的。',
    emotionInstruction: '像拆一个长词，但依然很顺。',
    speedHint: 'fast-clear',
    subtitle: 'cardiopulmonary = 心 + 肺 -> 心肺的',
    instruction: `${defaultInstruction} cardiopulmonary 可以稍慢半拍，但不要拖。`,
  },
  {
    id: 'word-pericardium',
    text: 'pericardium，peri 是周围，cardium 是心。所以是包着心脏的心包。',
    emotionInstruction: '像补上一个高级词，带一点专业感。',
    speedHint: 'fast-clear',
    subtitle: 'pericardium = 围着心 -> 心包',
    instruction: `${defaultInstruction} pericardium 要尽量读清楚，但不必太慢。`,
  },
  {
    id: 'grid-connect',
    text: '现在连上了。心脏，心脏学，心脏医生，心电图，心血管，心肺，心包。一颗心，串起一排词。',
    emotionInstruction: '像关系网突然闭环，带一点爽感。',
    speedHint: 'fast',
    subtitle: '一颗心，串起一排词',
    instruction: `${defaultInstruction} 这句要有终于串起来了的满足感。`,
  },
  {
    id: 'summary',
    text: '记住。cardi，cardio，就是 heart，心脏。',
    emotionInstruction: '像口号锁脑，稳，短，能留下回声。',
    speedHint: 'fast-clear',
    subtitle: 'cardi / cardio = heart / 心脏',
    instruction: `${defaultInstruction} 总结句要像钉钉子。`,
  },
  {
    id: 'outro',
    text: '最后测你。cardiovascular 为什么和心脏有关？',
    emotionInstruction: '像结尾追问，带一点挑衅，逼人停下来想。',
    speedHint: 'medium-fast',
    subtitle: '秒答：cardiovascular 为什么和心脏有关？',
    instruction: `${defaultInstruction} 结尾像追问观众，别太温柔。`,
  },
];

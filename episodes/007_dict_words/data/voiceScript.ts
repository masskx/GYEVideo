export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识视频风格，声音清楚有冲击力，节奏快但不要糊，英文单词读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'prediction 不只是预测，它背后藏着一个说的词根。',
    emotionInstruction: '开场有反常识感，像打断观众惯性。',
    speedHint: 'very-fast-clear',
    subtitle: 'prediction 不只是预测',
    instruction: `${defaultInstruction} 开头要有打断感，prediction 读准。`,
  },
  {
    id: 'flash-words',
    text: 'predict，contradict，verdict，dictate，dictionary。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'predict / contradict / verdict / dictate / dictionary',
    instruction: `${defaultInstruction} 英文之间略停顿，整体保持快节奏。`,
  },
  {
    id: 'same-root',
    text: '它们其实都和说有关，只是说的方向不一样。',
    emotionInstruction: '揭秘感，像突然把一串词连起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都和“说”有关',
    instruction: `${defaultInstruction} 说这个字要强调。`,
  },
  {
    id: 'root-ject',
    text: 'dict，核心意思就是 say，说。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'dict = say / 说',
    instruction: `${defaultInstruction} dict 和 say 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'predict，pre 是提前，dict 是说，提前说出来，就是预测。',
    emotionInstruction: '像拆开一张词根卡，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'predict = 提前说 → 预测',
    instruction: `${defaultInstruction} predict 读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'contradict，contra 是相反，反着说，就是反驳，矛盾。',
    emotionInstruction: '有对抗感，但不要夸张。',
    speedHint: 'fast-clear',
    subtitle: 'contradict = 反着说 → 反驳',
    instruction: `${defaultInstruction} contradict 稍慢，保证听清。`,
  },
  {
    id: 'word-subject',
    text: 'verdict，ver 表示真实，正式说出的判断，就是裁决。',
    emotionInstruction: '像法庭落锤，清楚有力度。',
    speedHint: 'fast-clear',
    subtitle: 'verdict = 正式说出的判断 → 裁决',
    instruction: `${defaultInstruction} verdict 读准，裁决两个字清楚。`,
  },
  {
    id: 'word-project',
    text: 'dictate，dict 是说，ate 变成动作，dictate 就是口述，也可以是命令。',
    emotionInstruction: '解释直接，像公式落地。',
    speedHint: 'fast-clear',
    subtitle: 'dictate = 说给别人听 → 口述 / 命令',
    instruction: `${defaultInstruction} dictate 不要糊。`,
  },
  {
    id: 'word-inject',
    text: 'dictionary，记录词语和说法的书，就是词典。',
    emotionInstruction: '生活化，轻快一点。',
    speedHint: 'fast-clear',
    subtitle: 'dictionary = 记录词语说法 → 词典',
    instruction: `${defaultInstruction} dictionary 读准，词典清楚。`,
  },
  {
    id: 'word-eject',
    text: 'diction，就是你说话时选择的词，也就是措辞。',
    emotionInstruction: '补充抽象词，但说得简单。',
    speedHint: 'fast-clear',
    subtitle: 'diction = 说话用词 → 措辞',
    instruction: `${defaultInstruction} diction 读准。`,
  },
  {
    id: 'word-abject',
    text: 'dictation，别人说，你写下来，就是听写，也可以是口述。',
    emotionInstruction: '课堂感，但保持短视频节奏。',
    speedHint: 'fast-clear',
    subtitle: 'dictation = 说出来让人写 → 听写',
    instruction: `${defaultInstruction} dictation 稍慢，保证清晰。`,
  },
  {
    id: 'word-deject',
    text: 'indict，注意读作 indict，是正式指控，起诉。',
    emotionInstruction: '强调发音反差，稍微提醒。',
    speedHint: 'fast-clear',
    subtitle: 'indict = 正式指控 → 起诉',
    instruction: `${defaultInstruction} indict 读作 in-dite，要提醒但不要拖。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：predict 是提前说，contradict 是反着说，verdict 是正式说判断，dictate 是说给别人照做。',
    emotionInstruction: '快速总览，把 say 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'predict / contradict / verdict / dictate，都围着 say 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句话：dict 等于 say，说。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'dict = say：说',
    instruction: `${defaultInstruction} 总结要稳，dict 和 say 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 dict，先想：是谁在说，说了什么。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 dict，先想：谁在说',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

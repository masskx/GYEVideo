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
    text: 'script 不只是剧本，它背后藏着一个写的词根。',
    emotionInstruction: '开场有反常识打断感，像突然纠正观众的误区。',
    speedHint: 'very-fast-clear',
    subtitle: 'script 不只是“剧本”',
    instruction: `${defaultInstruction} 开头要有打断感，script 读准。`,
  },
  {
    id: 'flash-words',
    text: 'script，describe，subscribe，prescription，manuscript。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'script / describe / subscribe / prescription / manuscript',
    instruction: `${defaultInstruction} 英文之间略停顿，prescription 和 manuscript 要清楚。`,
  },
  {
    id: 'same-root',
    text: '它们其实都和写有关，只是写的位置和用途不一样。',
    emotionInstruction: '揭秘感，像突然把一串词连起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都和“写”有关',
    instruction: `${defaultInstruction} 写这个字要强调。`,
  },
  {
    id: 'root-ject',
    text: 'script 和 scrib，核心意思就是 write，写。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'script / scrib = write / 写',
    instruction: `${defaultInstruction} script、scrib 和 write 都要读准。`,
  },
  {
    id: 'word-reject',
    text: 'script，就是已经写好的文本，所以可以是剧本，也可以是脚本。',
    emotionInstruction: '像拆开一张词根卡，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'script = 写好的文本 → 剧本 / 脚本',
    instruction: `${defaultInstruction} script 读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'describe，de 加 scribe，写下来说明一个东西，就是描述。',
    emotionInstruction: '解释直接，带一点恍然大悟感。',
    speedHint: 'fast-clear',
    subtitle: 'describe = 写下来说明 → 描述',
    instruction: `${defaultInstruction} describe 不要读糊。`,
  },
  {
    id: 'word-subject',
    text: 'subscribe，sub 是在下面，scribe 是写，名字写在下面，就是订阅或者签署。',
    emotionInstruction: '像把词拆成公式，节奏紧凑。',
    speedHint: 'fast-clear',
    subtitle: 'subscribe = 在下面写名 → 订阅 / 签署',
    instruction: `${defaultInstruction} subscribe 稍慢一点，保证听清。`,
  },
  {
    id: 'word-project',
    text: 'prescription，pre 是提前，script 是写，医生提前写好的东西，就是处方。',
    emotionInstruction: '生活化，解释要落地。',
    speedHint: 'fast-clear',
    subtitle: 'prescription = 提前写好的医嘱 → 处方',
    instruction: `${defaultInstruction} prescription 读准，中文要干净。`,
  },
  {
    id: 'word-inject',
    text: 'manuscript，manu 是手，script 是写，手写出来的文本，就是手稿。',
    emotionInstruction: '有画面感，像手写稿展开。',
    speedHint: 'fast-clear',
    subtitle: 'manuscript = 手写文本 → 手稿',
    instruction: `${defaultInstruction} manuscript 读准。`,
  },
  {
    id: 'word-eject',
    text: 'inscribe，in 是进去，scribe 是写，写进去或者刻进去，就是题写。',
    emotionInstruction: '补充抽象词，但说得简单。',
    speedHint: 'fast-clear',
    subtitle: 'inscribe = 写进去 / 刻进去 → 题写',
    instruction: `${defaultInstruction} inscribe 读准。`,
  },
  {
    id: 'word-abject',
    text: 'transcribe，trans 是转换，scribe 是写，把声音或者文字转写下来，就是转录。',
    emotionInstruction: '解释要有转换感，保持短视频节奏。',
    speedHint: 'fast-clear',
    subtitle: 'transcribe = 转写下来 → 转录',
    instruction: `${defaultInstruction} transcribe 稍慢，保证清晰。`,
  },
  {
    id: 'word-deject',
    text: 'scribble，就是随手乱写，潦草地写。',
    emotionInstruction: '轻快一点，像补充一个好记的词。',
    speedHint: 'fast-clear',
    subtitle: 'scribble = 潦草地写 / 乱写',
    instruction: `${defaultInstruction} scribble 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：describe 是写下来说明，subscribe 是下面写名，prescription 是提前写好，manuscript 是手写文本。',
    emotionInstruction: '快速总览，把 write 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'describe / subscribe / prescription / manuscript，都围着 write 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：script 和 scrib 等于 write，写。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'script / scrib = write：写',
    instruction: `${defaultInstruction} 总结要稳，script、scrib、write 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 script 或 scribe，先想：是谁在写，写在哪里。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 script / scribe，先想：谁在写？',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

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
    text: '别再硬背 propel，这组词背后其实都在推。',
    emotionInstruction: '开场像直接打断一个低效背词习惯，短促有冲击力。',
    speedHint: 'very-fast-clear',
    subtitle: '别再硬背 propel',
    instruction: `${defaultInstruction} propel 要读准，开头要强。`,
  },
  {
    id: 'flash-words',
    text: 'propel，compel，expel，repel，impulse。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'propel / compel / expel / repel / impulse',
    instruction: `${defaultInstruction} 英文之间略停顿，propel、compel、expel 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 pel 和 pulse，drive，推动，驱使。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都在“推”',
    instruction: `${defaultInstruction} pel、pulse、drive、推动要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'pel 和 pulse，核心意思就是 drive，推动，驱使。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'pel / pulse = drive / 推动',
    instruction: `${defaultInstruction} pel、pulse 和 drive 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'propel，pro 是 forward，向前，pel 是推，向前推动，就是推进。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'propel = 向前推 → 推进',
    instruction: `${defaultInstruction} propel 要读准，推进要清楚。`,
  },
  {
    id: 'word-object',
    text: 'compel，com 是 together，一起，pel 是推，几股力一起推着你，就是强迫。',
    emotionInstruction: '把强迫感讲成被推着走的动作。',
    speedHint: 'fast-clear',
    subtitle: 'compel = 一起推着你 → 强迫',
    instruction: `${defaultInstruction} compel 要读准，强迫要落点。`,
  },
  {
    id: 'word-subject',
    text: 'expel，ex 是 out，向外，pel 是推，往外推出去，就是驱逐，开除。',
    emotionInstruction: '动作感明确，像被推出门。',
    speedHint: 'fast-clear',
    subtitle: 'expel = 向外推 → 驱逐 / 开除',
    instruction: `${defaultInstruction} expel 要读准，驱逐和开除都要清楚。`,
  },
  {
    id: 'word-project',
    text: 'repel，re 是 back，回来，pel 是推，往回推开，就是击退，排斥。',
    emotionInstruction: '有把东西弹开的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'repel = 推回去 → 击退 / 排斥',
    instruction: `${defaultInstruction} repel 要读准，击退要短促。`,
  },
  {
    id: 'word-inject',
    text: 'dispel，dis 是 apart，散开，pel 是推，把雾气和疑虑推散，就是驱散，消除。',
    emotionInstruction: '画面感要轻一点，像把雾推开。',
    speedHint: 'fast-clear',
    subtitle: 'dispel = 推散开 → 驱散 / 消除',
    instruction: `${defaultInstruction} dispel 要读准，驱散和消除要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'impulse，im 是 into，往里，pulse 是推动，心里突然来一下推动，就是冲动，也是一股推动力。',
    emotionInstruction: '像脑子里被突然推了一下。',
    speedHint: 'fast-clear',
    subtitle: 'impulse = 内在一推 → 冲动 / 推动力',
    instruction: `${defaultInstruction} impulse 要读准，冲动要落点。`,
  },
  {
    id: 'word-abject',
    text: 'pulse，就是一下下的推动，所以是脉搏，一跳一跳往前顶。',
    emotionInstruction: '简洁一点，给一个身体感。',
    speedHint: 'fast-clear',
    subtitle: 'pulse = 一下下推动 → 脉搏',
    instruction: `${defaultInstruction} pulse 要读准，脉搏要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'compulsive，就是一直被某种力量推着重复做，所以是强迫性的。',
    emotionInstruction: '轻快收住，但要把重复被推着的感觉讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'compulsive = 一直被推着 → 强迫性的',
    instruction: `${defaultInstruction} compulsive 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：propel 是向前推，expel 是向外推，repel 是推开，impulse 是心里突然一推。',
    emotionInstruction: '快速总览，把 drive 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'propel / expel / repel / impulse，都围着 drive 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：pel 和 pulse 等于 drive，推动，驱使。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'pel / pulse = drive：推动，驱使',
    instruction: `${defaultInstruction} 总结要稳，pel、pulse 和 drive 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 pel 或 pulse，先想：它把什么往哪儿推。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 pel / pulse，先想：往哪儿推？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

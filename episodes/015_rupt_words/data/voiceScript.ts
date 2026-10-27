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
    text: 'interrupt 不只是打断，它背后其实是一个突然断开的动作。',
    emotionInstruction: '开场要有打断滑走的冲击感，像马上纠正一个常见理解。',
    speedHint: 'very-fast-clear',
    subtitle: 'interrupt 不只是“打断”',
    instruction: `${defaultInstruction} 开头要强，interrupt 要读准。`,
  },
  {
    id: 'flash-words',
    text: 'rupture，erupt，interrupt，disrupt，corrupt。',
    emotionInstruction: '快速闪词，英文清晰，制造断裂感和信息冲击。',
    speedHint: 'fast',
    subtitle: 'rupture / erupt / interrupt / disrupt / corrupt',
    instruction: `${defaultInstruction} 英文之间略停顿，interrupt 和 disrupt 要清楚区分。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 rupt，break，破裂，打断。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 break',
    instruction: `${defaultInstruction} rupt、break、破裂、打断要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'rupt，核心意思就是 break，破裂，打断。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'rupt = break / 破裂，打断',
    instruction: `${defaultInstruction} rupt 和 break 要读准，中文要短促。`,
  },
  {
    id: 'word-reject',
    text: 'rupture，最直观，就是东西裂开，破裂。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'rupture = 裂开 → 破裂',
    instruction: `${defaultInstruction} rupture 要读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'erupt，e 是 out，向外，rupt 是破裂，向外爆裂出来，就是喷发，爆发。',
    emotionInstruction: '画面感强，像火山突然冲出来。',
    speedHint: 'fast-clear',
    subtitle: 'erupt = 向外破裂 → 爆发',
    instruction: `${defaultInstruction} erupt 要读准，爆发要有冲击力。`,
  },
  {
    id: 'word-subject',
    text: 'interrupt，inter 是 between，中间，rupt 是打断，从中间插进去让它断，就是打断。',
    emotionInstruction: '语气稳一点，把插入和打断讲清楚。',
    speedHint: 'fast-clear',
    subtitle: 'interrupt = 中间断开 → 打断',
    instruction: `${defaultInstruction} interrupt 稍慢一点，保证听清。`,
  },
  {
    id: 'word-project',
    text: 'disrupt，dis 是分开，rupt 是打断，把正常秩序打断，就是扰乱。',
    emotionInstruction: '要有秩序被打乱的冲击感。',
    speedHint: 'fast-clear',
    subtitle: 'disrupt = 打断秩序 → 扰乱',
    instruction: `${defaultInstruction} disrupt 要读准，扰乱要落重音。`,
  },
  {
    id: 'word-inject',
    text: 'corrupt，cor 有一起变坏的感觉，rupt 是破坏，系统坏掉，就是腐败，败坏。',
    emotionInstruction: '有系统被破坏的感觉，但不要拖沓。',
    speedHint: 'fast-clear',
    subtitle: 'corrupt = 被破坏变坏 → 腐败',
    instruction: `${defaultInstruction} corrupt 读清楚，不要和 erupt 混。`,
  },
  {
    id: 'word-eject',
    text: 'abrupt，ab 有离开，突然断开的感觉，所以 abrupt 是突然的，唐突的。',
    emotionInstruction: '短促直接，像动作突然停住。',
    speedHint: 'fast-clear',
    subtitle: 'abrupt = 突然断开 → 唐突的',
    instruction: `${defaultInstruction} abrupt 要读准，突然感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'bankrupt，就是钱的链条断了，所以是破产的。',
    emotionInstruction: '生活化补充词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'bankrupt = 财务断裂 → 破产',
    instruction: `${defaultInstruction} bankrupt 要读准，中文干净。`,
  },
  {
    id: 'word-deject',
    text: 'corruption，就是坏掉的状态，所以是腐败，败坏。',
    emotionInstruction: '轻快一点，像给出一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'corruption = 坏掉的状态 → 腐败',
    instruction: `${defaultInstruction} corruption 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：rupture 是裂开，erupt 是爆出来，interrupt 是中间打断，disrupt 是打乱秩序。',
    emotionInstruction: '快速总览，把 break 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'rupture / erupt / interrupt / disrupt，都围着 break 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：rupt 等于 break，破裂，打断。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'rupt = break：破裂，打断',
    instruction: `${defaultInstruction} 总结要稳，rupt 和 break 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 rupt，先想：哪里断了，什么被打断了。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 rupt，先想：哪里断了？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

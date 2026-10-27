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
    text: 'transform 不是乱变，它背后其实是形状被改变了。',
    emotionInstruction: '开场有反常识打断感，像马上纠正一个常见误解。',
    speedHint: 'very-fast-clear',
    subtitle: 'transform 不是乱变',
    instruction: `${defaultInstruction} 开头要强，transform 要读准。`,
  },
  {
    id: 'flash-words',
    text: 'form，uniform，conform，reform，transform。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'form / uniform / conform / reform / transform',
    instruction: `${defaultInstruction} 英文之间略停顿，uniform 和 transform 要清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 form，shape，形状。',
    emotionInstruction: '揭秘感，强调同一个画面把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 shape',
    instruction: `${defaultInstruction} form、shape、形状要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'form，核心意思就是 shape，形状，形成。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'form = shape / 形状',
    instruction: `${defaultInstruction} form 和 shape 要读准，中文要短促。`,
  },
  {
    id: 'word-reject',
    text: 'form，最基础，就是形式，形状，也可以表示形成。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'form = 形式 / 形状 / 形成',
    instruction: `${defaultInstruction} form 要读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'uniform，uni 是 one，一个，form 是形状，一种形状，就是统一，也就是制服。',
    emotionInstruction: '画面感强，像所有人穿成同一种样子。',
    speedHint: 'fast-clear',
    subtitle: 'uniform = 一个形状 → 制服 / 统一',
    instruction: `${defaultInstruction} uniform 要读准，one 和 form 之间略停。`,
  },
  {
    id: 'word-subject',
    text: 'conform，con 是一起，form 是形状，跟大家一个形状，就是符合，遵守。',
    emotionInstruction: '语气稳一点，把方向和动作连上。',
    speedHint: 'fast-clear',
    subtitle: 'conform = 同一个形状 → 符合',
    instruction: `${defaultInstruction} conform 稍慢一点，保证听清。`,
  },
  {
    id: 'word-project',
    text: 'reform，re 是 again，再一次，form 是形成，重新形成，就是改革。',
    emotionInstruction: '重点词要讲出重新塑形的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'reform = 重新形成 → 改革',
    instruction: `${defaultInstruction} reform 和 again 要读清楚。`,
  },
  {
    id: 'word-inject',
    text: 'transform，trans 是跨过去，form 是形状，跨到另一个形状，就是转变。',
    emotionInstruction: '要有形状突然变化的冲击感。',
    speedHint: 'fast-clear',
    subtitle: 'transform = 换一个形状 → 转变',
    instruction: `${defaultInstruction} transform 读准，转变要落重音。`,
  },
  {
    id: 'word-eject',
    text: 'perform，per 有完成到底的感觉，form 是形成，把动作做成结果，就是执行，表演。',
    emotionInstruction: '短促直接，像把动作落到结果上。',
    speedHint: 'fast-clear',
    subtitle: 'perform = 做成结果 → 执行 / 表演',
    instruction: `${defaultInstruction} perform 要读准，执行和表演都要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'inform，in 是进入，form 是形成，让信息在脑子里成形，就是通知。',
    emotionInstruction: '生活化补充词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'inform = 信息成形进入脑子 → 通知',
    instruction: `${defaultInstruction} inform 读准，信息成形要自然。`,
  },
  {
    id: 'word-deject',
    text: 'formula，就是固定的形式，所以是公式，配方。',
    emotionInstruction: '轻快一点，像给出一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'formula = 固定形式 → 公式 / 配方',
    instruction: `${defaultInstruction} formula 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：uniform 是一个形状，conform 是跟同一个形状，reform 是重新形成，transform 是改变形状。',
    emotionInstruction: '快速总览，把 shape 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'uniform / conform / reform / transform，都围着 shape 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：form 等于 shape，形状，形成。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'form = shape：形状，形成',
    instruction: `${defaultInstruction} 总结要稳，form 和 shape 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 form，先想：它在变成什么形状。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 form，先想：变成什么形状？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识短视频风格，声音清晰有冲击力，节奏快但不要糊，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: '看到 auto，别只会想到 automatic，三秒内把这串词全连起来。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但每个英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 auto 别只会想 automatic',
    instruction: `${defaultInstruction} auto 和 automatic 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'automatic，automate，autonomous，autobiography，autopilot。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'automatic / automate / autonomous / autobiography / autopilot',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，autonomous 和 autobiography 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们看起来不一样，底层却都围着 auto，self，自己来。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都围着“自己来”',
    instruction: `${defaultInstruction} auto 和 self 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'auto，核心意思就是 self，自己，自动。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'auto = self / 自己，自动',
    instruction: `${defaultInstruction} auto 和 self 要读准，语气要像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'automatic，就是一套东西不用你一直管，它自己动起来，所以是自动的。',
    emotionInstruction: '像把词义一下拆开，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'automatic = 自己动起来 -> 自动的',
    instruction: `${defaultInstruction} automatic 要读准，自动的结尾要利落。`,
  },
  {
    id: 'word-object',
    text: 'automate，就是把重复流程改到它自己跑，所以是自动化。',
    emotionInstruction: '讲流程自己跑起来的感觉，节奏推进。',
    speedHint: 'fast-clear',
    subtitle: 'automate = 让流程自己跑 -> 自动化',
    instruction: `${defaultInstruction} automate 要读准，自动化要短促有力。`,
  },
  {
    id: 'word-subject',
    text: 'autonomous，就是不靠别人拍板，自己做决定，所以是自主的。',
    emotionInstruction: '语气要有独立感，像自己握住方向盘。',
    speedHint: 'fast-clear',
    subtitle: 'autonomous = 自己做决定 -> 自主的',
    instruction: `${defaultInstruction} autonomous 要读准，自主的要讲得坚定。`,
  },
  {
    id: 'word-project',
    text: 'autobiography，bio 是人生，graphy 是写，合起来就是自己写自己的人生，自传。',
    emotionInstruction: '像在拆词公式，但仍要保持快节奏。',
    speedHint: 'fast-clear',
    subtitle: 'autobiography = 自己写自己 -> 自传',
    instruction: `${defaultInstruction} autobiography，bio，graphy 都要读准，自传要落点。`,
  },
  {
    id: 'word-inject',
    text: 'autopilot，就是系统自己稳住方向，不用你每秒都手控，所以是自动驾驶。',
    emotionInstruction: '带一点科技感和控制感，推进画面。',
    speedHint: 'fast-clear',
    subtitle: 'autopilot = 自己稳方向 -> 自动驾驶',
    instruction: `${defaultInstruction} autopilot 要读准，自动驾驶要清楚有力。`,
  },
  {
    id: 'word-eject',
    text: 'autofocus，就是镜头自己找到最清楚的点，所以叫自动对焦。',
    emotionInstruction: '短促，像镜头一下咔地锁住焦点。',
    speedHint: 'fast-clear',
    subtitle: 'autofocus = 自己找焦点 -> 自动对焦',
    instruction: `${defaultInstruction} autofocus 要读准，自动对焦要有镜头锁定感。`,
  },
  {
    id: 'word-abject',
    text: 'autodidact，就是没有老师一路带着，也能自己把自己学会，自学者。',
    emotionInstruction: '稍微鼓动一点，但别拖慢节奏。',
    speedHint: 'fast-clear',
    subtitle: 'autodidact = 自己把自己学会 -> 自学者',
    instruction: `${defaultInstruction} autodidact 要读准，自学者要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'autoimmune 要反着记，immune 是防御，结果身体自己打自己，所以叫自身免疫的。',
    emotionInstruction: '这里要有一点反转提醒，帮助记忆。',
    speedHint: 'fast-clear',
    subtitle: 'autoimmune = 身体自己打自己 -> 自身免疫的',
    instruction: `${defaultInstruction} autoimmune 和 immune 要读准，反转感要出来。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，automatic 是自己动，autonomous 是自己做主，autobiography 是自己写自己，autopilot 是自己稳方向。',
    emotionInstruction: '快速总览，把 auto 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'automatic / autonomous / autopilot，都围着 self 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，auto 等于 self，自己，自动。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'auto = self / 自己，自动',
    instruction: `${defaultInstruction} auto 和 self 要读准，总结要稳。`,
  },
  {
    id: 'outro',
    text: '下次看到 auto，先问一句，谁在自己启动，谁在自己完成。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 auto，先想：谁在自己完成？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

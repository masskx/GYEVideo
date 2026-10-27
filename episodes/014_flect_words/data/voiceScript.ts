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
    text: 'reflect 不只是反思，它背后其实是一个弯回去的动作。',
    emotionInstruction: '开场有反常识打断感，像马上纠正一个常见误解。',
    speedHint: 'very-fast-clear',
    subtitle: 'reflect 不只是“反思”',
    instruction: `${defaultInstruction} 开头要强，reflect 要读准。`,
  },
  {
    id: 'flash-words',
    text: 'flex，reflect，deflect，inflect，reflex。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'flex / reflect / deflect / inflect / reflex',
    instruction: `${defaultInstruction} 英文之间略停顿，deflect 和 inflect 要清楚区分。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 flect 和 flex，bend，弯曲。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 bend',
    instruction: `${defaultInstruction} flect、flex、bend、弯曲要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'flect 和 flex，核心意思就是 bend，弯曲，拐弯。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'flect / flex = bend / 弯曲',
    instruction: `${defaultInstruction} flect、flex 和 bend 要读准，中文要短促。`,
  },
  {
    id: 'word-reject',
    text: 'flex，最基础，就是弯曲，伸缩，比如 flex your arm，弯一下手臂。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'flex = 弯曲 / 伸缩',
    instruction: `${defaultInstruction} flex your arm 要读自然，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'flexible，flex 是弯，ible 是能够，能够弯，就是灵活的。',
    emotionInstruction: '画面感强，像材料可以弯而不断。',
    speedHint: 'fast-clear',
    subtitle: 'flexible = 能弯 → 灵活的',
    instruction: `${defaultInstruction} flexible 要读准，中文干净。`,
  },
  {
    id: 'word-subject',
    text: 'reflect，re 是 back，往回，flect 是弯，光线弯回去，就是反射。',
    emotionInstruction: '语气稳一点，把物理画面讲清楚。',
    speedHint: 'fast-clear',
    subtitle: 'reflect = 弯回去 → 反射 / 反思',
    instruction: `${defaultInstruction} reflect 和 back 要读清楚。`,
  },
  {
    id: 'word-project',
    text: 'reflection，就是弯回来的结果，可以是反射，也可以是倒影，还能变成反思。',
    emotionInstruction: '重点词要讲出一词多义背后的同一动作。',
    speedHint: 'fast-clear',
    subtitle: 'reflection = 弯回来的结果 → 反射 / 倒影',
    instruction: `${defaultInstruction} reflection 要读准，反射和倒影要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'deflect，de 是 away，离开，flect 是弯，把方向弯开，就是偏转。',
    emotionInstruction: '要有方向被打偏的冲击感。',
    speedHint: 'fast-clear',
    subtitle: 'deflect = 弯开 → 偏转',
    instruction: `${defaultInstruction} deflect 要读准，偏转要落重音。`,
  },
  {
    id: 'word-eject',
    text: 'inflect，in 是进入，flect 是弯，让声音的走向弯一下，就是变调。',
    emotionInstruction: '轻快解释语音变化，不要拖沓。',
    speedHint: 'fast-clear',
    subtitle: 'inflect = 声音拐弯 → 变调',
    instruction: `${defaultInstruction} inflect 读清楚，不要和 reflect 混。`,
  },
  {
    id: 'word-abject',
    text: 'reflex，就是身体自动弯回来的反应，所以是反射动作。',
    emotionInstruction: '生活化补充词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'reflex = 自动弯回 → 反射动作',
    instruction: `${defaultInstruction} reflex 要读准，不要读成 reflect。`,
  },
  {
    id: 'word-deject',
    text: 'reflexive，就是反射性的，语法里还能表示反身的。',
    emotionInstruction: '轻快一点，像给出一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'reflexive = 反射性的 / 反身的',
    instruction: `${defaultInstruction} reflexive 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：flex 是弯，reflect 是弯回去，deflect 是弯开，inflect 是声音拐弯。',
    emotionInstruction: '快速总览，把 bend 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'flex / reflect / deflect / inflect，都围着 bend 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：flect 和 flex 等于 bend，弯曲，拐弯。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'flect / flex = bend：弯曲，拐弯',
    instruction: `${defaultInstruction} 总结要稳，flect、flex 和 bend 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 flect 或 flex，先想：它往哪里弯。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 flect / flex，先想：往哪儿弯？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

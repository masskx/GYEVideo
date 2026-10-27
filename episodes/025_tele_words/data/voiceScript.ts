export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识视频风格，声音清晰有冲击力，节奏快但不要糊，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'telephone 不只是你手里的电话，它背后其实是远这个概念。',
    emotionInstruction: '开头像突然纠正一个常见误解，短促有悬念。',
    speedHint: 'very-fast-clear',
    subtitle: 'telephone 不只是“电话”',
    instruction: `${defaultInstruction} telephone 要读准，开头要强，要有纠错感。`,
  },
  {
    id: 'flash-words',
    text: 'telephone，telegraph，television，telescope，teleport。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'telephone / telegraph / television / telescope / teleport',
    instruction: `${defaultInstruction} 英文之间略停顿，telephone、telegraph、television 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 tele，far，远。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都围着“远”',
    instruction: `${defaultInstruction} tele、far 要读准，要有揭示感。`,
  },
  {
    id: 'root-ject',
    text: 'tele，核心意思就是 far，远。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'tele = far / 远',
    instruction: `${defaultInstruction} tele、far 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'telephone，phone 是声音，tele 是远，远距离传声音，就是电话。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'telephone = 远距离传声音 → 电话',
    instruction: `${defaultInstruction} telephone 要读准，电话要讲得干净有力。`,
  },
  {
    id: 'word-object',
    text: 'telegraph，graph 是写和记录，tele 是远，远距离把消息写过去，就是电报。',
    emotionInstruction: '把电报讲成远处也能落字。',
    speedHint: 'fast-clear',
    subtitle: 'telegraph = 远距离传消息 → 电报',
    instruction: `${defaultInstruction} telegraph 要读准，电报要落点。`,
  },
  {
    id: 'word-subject',
    text: 'television，vision 是看见，tele 是远，远距离也能看见，就是电视。',
    emotionInstruction: '像画面从远处直接拉到你眼前。',
    speedHint: 'fast-clear',
    subtitle: 'television = 远距离看见 → 电视',
    instruction: `${defaultInstruction} television 要读准，电视要短促清晰。`,
  },
  {
    id: 'word-project',
    text: 'telescope，scope 是看，tele 是远，专门拿来看远处，就是望远镜。',
    emotionInstruction: '把镜头一下拉到远方。',
    speedHint: 'fast-clear',
    subtitle: 'telescope = 看远处 → 望远镜',
    instruction: `${defaultInstruction} telescope 要读准，望远镜要有拉远感。`,
  },
  {
    id: 'word-inject',
    text: 'teleport，就是把人或东西一下传到远方，所以是瞬移。',
    emotionInstruction: '把瞬移讲成一下跨过距离。',
    speedHint: 'fast-clear',
    subtitle: 'teleport = 传到远方 → 瞬移',
    instruction: `${defaultInstruction} teleport 要读准，瞬移要落点。`,
  },
  {
    id: 'word-eject',
    text: 'telepathy，就是隔着很远也像能感到彼此想法，所以是心灵感应。',
    emotionInstruction: '语气轻一点，但保留一点神秘感。',
    speedHint: 'fast-clear',
    subtitle: 'telepathy = 隔很远也能感到 → 心灵感应',
    instruction: `${defaultInstruction} telepathy 要读准，心灵感应要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'telemedicine，就是隔着距离看病、问诊，所以是远程医疗。',
    emotionInstruction: '简洁一点，像医生和病人不在一个地方。',
    speedHint: 'fast-clear',
    subtitle: 'telemedicine = 隔着距离看病 → 远程医疗',
    instruction: `${defaultInstruction} telemedicine 要读准，远程医疗要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'telematics，就是远距离传和处理数据，所以是远程信息处理。',
    emotionInstruction: '轻快收住，但要把远程管理数据的感觉讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'telematics = 远距离传和管数据 → 远程信息处理',
    instruction: `${defaultInstruction} telematics 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来，telephone 是远距离传声音，television 是远距离看见，telescope 是看远处，teleport 是一下去远方。',
    emotionInstruction: '快速总览，把远这条线连起来。',
    speedHint: 'fast',
    subtitle: 'telephone / television / teleport，都围着 far 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，tele 等于 far，远。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'tele = far: 远',
    instruction: `${defaultInstruction} 总结要稳，tele、far 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 tele，先想，它隔着多远，还能怎么传过去。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 tele，先想：隔着多远？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

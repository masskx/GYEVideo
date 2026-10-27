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
    text: 'attract 不只是吸引，它背后其实是一个拉的动作。',
    emotionInstruction: '开场有反常识打断感，像突然纠正观众的理解。',
    speedHint: 'very-fast-clear',
    subtitle: 'attract 不只是“吸引”',
    instruction: `${defaultInstruction} 开头要强，attract 读准。`,
  },
  {
    id: 'flash-words',
    text: 'attract，extract，contract，subtract，distract。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'attract / extract / contract / subtract / distract',
    instruction: `${defaultInstruction} 英文之间略停顿，contract 和 subtract 要清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 pull，拉，拖。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 pull',
    instruction: `${defaultInstruction} pull、拉、拖要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'tract，核心意思就是 pull，拉，拖。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'tract = pull / 拉，拖',
    instruction: `${defaultInstruction} tract 和 pull 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'attract，at 是朝向，tract 是拉，把你朝它那边拉，就是吸引。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'attract = 朝它拉 → 吸引',
    instruction: `${defaultInstruction} attract 读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'extract，ex 是向外，tract 是拉，向外拉出来，就是提取。',
    emotionInstruction: '画面感强，像把东西从里面拉出来。',
    speedHint: 'fast-clear',
    subtitle: 'extract = 向外拉 → 提取',
    instruction: `${defaultInstruction} extract 读准。`,
  },
  {
    id: 'word-subject',
    text: 'contract，con 是一起，tract 是拉，拉到一起，就会收缩，也能变成合同。',
    emotionInstruction: '解释要稳，把抽象义和动作连上。',
    speedHint: 'fast-clear',
    subtitle: 'contract = 拉到一起 → 收缩 / 合同',
    instruction: `${defaultInstruction} contract 动词读法要清楚。`,
  },
  {
    id: 'word-project',
    text: 'subtract，sub 是下面或者拿走，tract 是拉，拉走一部分，就是减去。',
    emotionInstruction: '像数学里拿掉一块，干净直接。',
    speedHint: 'fast-clear',
    subtitle: 'subtract = 拉走一部分 → 减去',
    instruction: `${defaultInstruction} subtract 稍慢，保证听清。`,
  },
  {
    id: 'word-inject',
    text: 'distract，dis 是分开，把注意力拉开，就是分散注意力。',
    emotionInstruction: '有被拉走注意力的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'distract = 拉开注意力 → 分心',
    instruction: `${defaultInstruction} distract 读准，中文干净。`,
  },
  {
    id: 'word-eject',
    text: 'retract，re 是回来，tract 是拉，拉回来，就是收回，撤回。',
    emotionInstruction: '短促直接，像把话又拉回来。',
    speedHint: 'fast-clear',
    subtitle: 'retract = 拉回来 → 收回 / 撤回',
    instruction: `${defaultInstruction} retract 读准。`,
  },
  {
    id: 'word-abject',
    text: 'traction，就是拉的力量，车轮和地面之间的牵引力。',
    emotionInstruction: '补充生活化词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'traction = 拉的力量 → 牵引力',
    instruction: `${defaultInstruction} traction 读准。`,
  },
  {
    id: 'word-deject',
    text: 'tractor，最直观，就是用来拉东西的机器，拖拉机。',
    emotionInstruction: '轻快一点，像给出一个一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'tractor = 用来拉的机器 → 拖拉机',
    instruction: `${defaultInstruction} tractor 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：attract 是拉过来，extract 是拉出来，contract 是拉到一起，distract 是把注意力拉开。',
    emotionInstruction: '快速总览，把 pull 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'attract / extract / contract / distract，都围着 pull 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：tract 等于 pull，拉，拖。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'tract = pull：拉，拖',
    instruction: `${defaultInstruction} 总结要稳，tract 和 pull 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 tract，先想：谁在拉，往哪儿拉。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 tract，先想：往哪儿拉？',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

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
    text: 'structure 不只是结构，它背后其实是一个建造的动作。',
    emotionInstruction: '开场有反常识打断感，像马上纠正一个常见误解。',
    speedHint: 'very-fast-clear',
    subtitle: 'structure 不只是“结构”',
    instruction: `${defaultInstruction} 开头要强，structure 要读准。`,
  },
  {
    id: 'flash-words',
    text: 'structure，construct，instruct，obstruct，reconstruct。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'structure / construct / instruct / obstruct / reconstruct',
    instruction: `${defaultInstruction} 英文之间略停顿，construct 和 instruct 要清楚区分。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 struct，build，建造。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 build',
    instruction: `${defaultInstruction} struct、build、建造要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'struct，核心意思就是 build，建造，搭起来。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'struct = build / 建造',
    instruction: `${defaultInstruction} struct 和 build 要读准，中文要短促。`,
  },
  {
    id: 'word-reject',
    text: 'structure，就是被搭起来的样子，所以是结构。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'structure = 搭起来的样子 → 结构',
    instruction: `${defaultInstruction} structure 要读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'construct，con 是一起，struct 是建造，把东西搭在一起，就是建造。',
    emotionInstruction: '画面感强，像把一块块材料搭起来。',
    speedHint: 'fast-clear',
    subtitle: 'construct = 一起搭 → 建造',
    instruction: `${defaultInstruction} construct 要读准，中文干净。`,
  },
  {
    id: 'word-subject',
    text: 'instruct，in 是进入，struct 是建造，把步骤搭进脑子里，就是指导。',
    emotionInstruction: '语气稳一点，把动作和抽象含义连上。',
    speedHint: 'fast-clear',
    subtitle: 'instruct = 把步骤搭进去 → 指导',
    instruction: `${defaultInstruction} instruct 稍慢一点，保证听清。`,
  },
  {
    id: 'word-project',
    text: 'obstruct，ob 是挡在前面，struct 是建造，挡住搭建和通路，就是阻碍。',
    emotionInstruction: '要有被挡住的冲击感。',
    speedHint: 'fast-clear',
    subtitle: 'obstruct = 挡住搭建 → 阻碍',
    instruction: `${defaultInstruction} obstruct 要读准，阻碍要落重音。`,
  },
  {
    id: 'word-inject',
    text: 'destruct，de 有向下拆开的感觉，struct 是结构，拆掉结构，就是破坏。',
    emotionInstruction: '有结构被拆掉的感觉，但不要拖沓。',
    speedHint: 'fast-clear',
    subtitle: 'destruct = 拆掉结构 → 破坏',
    instruction: `${defaultInstruction} destruct 读清楚，不要和 distract 混。`,
  },
  {
    id: 'word-eject',
    text: 'reconstruct，re 是 again，再一次，construct 是建造，重新建造，就是重建。',
    emotionInstruction: '短促直接，像把东西重新搭起来。',
    speedHint: 'fast-clear',
    subtitle: 'reconstruct = 再建造 → 重建',
    instruction: `${defaultInstruction} reconstruct 要读准，重建要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'structural，就是跟 structure 有关的，表示结构的，结构性的。',
    emotionInstruction: '生活化补充词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'structural = 和结构有关 → 结构性的',
    instruction: `${defaultInstruction} structural 读准，和 structure 区分清楚。`,
  },
  {
    id: 'word-deject',
    text: 'instruction，就是搭好的步骤，所以是指令，说明。',
    emotionInstruction: '轻快一点，像给出一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'instruction = 搭好的步骤 → 指令 / 说明',
    instruction: `${defaultInstruction} instruction 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：construct 是建起来，instruct 是把步骤搭进去，obstruct 是挡住，reconstruct 是重新建。',
    emotionInstruction: '快速总览，把 build 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'construct / instruct / obstruct / reconstruct，都围着 build 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：struct 等于 build，建造，搭起来。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'struct = build：建造，搭起来',
    instruction: `${defaultInstruction} 总结要稳，struct 和 build 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 struct，先想：它在建什么，或者挡住什么。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 struct，先想：建什么？挡什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

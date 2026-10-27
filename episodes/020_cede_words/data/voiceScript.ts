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
    text: 'proceed 不只是继续，它背后其实是往前走。',
    emotionInstruction: '开场像纠正一个常见误解，短促有冲击力。',
    speedHint: 'very-fast-clear',
    subtitle: 'proceed 不只是“继续”',
    instruction: `${defaultInstruction} proceed 要读准，开头要强。`,
  },
  {
    id: 'flash-words',
    text: 'proceed，precede，recede，concede，exceed。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'proceed / precede / recede / concede / exceed',
    instruction: `${defaultInstruction} 英文之间略停顿，proceed、precede、recede 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 cede 和 cess，go，走，前进。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都在“前进”',
    instruction: `${defaultInstruction} cede、cess、go、前进要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'cede 和 cess，核心意思就是 go，走，前进。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'cede / cess = go / 前进',
    instruction: `${defaultInstruction} cede、cess 和 go 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'proceed，pro 是 forward，向前，ceed 是走，向前走，就是继续进行。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'proceed = 向前走 → 继续进行',
    instruction: `${defaultInstruction} proceed 要读准，继续进行要清楚。`,
  },
  {
    id: 'word-object',
    text: 'precede，pre 是 before，前面，cede 是走，走在前面，就是先于。',
    emotionInstruction: '把先后顺序讲成站位动作。',
    speedHint: 'fast-clear',
    subtitle: 'precede = 走在前面 → 先于',
    instruction: `${defaultInstruction} precede 要读准，先于要落点。`,
  },
  {
    id: 'word-subject',
    text: 'recede，re 是 back，回来，cede 是走，往回走，就是后退，退去。',
    emotionInstruction: '有潮水往后退的画面感。',
    speedHint: 'fast-clear',
    subtitle: 'recede = 往回走 → 后退 / 退去',
    instruction: `${defaultInstruction} recede 要读准，后退要短促。`,
  },
  {
    id: 'word-project',
    text: 'concede，con 是 together，一起，cede 是走，你往后退一步让给别人，就是承认，也是在让步。',
    emotionInstruction: '把抽象的让步讲成身体让开一步。',
    speedHint: 'fast-clear',
    subtitle: 'concede = 让出一步 → 承认 / 让步',
    instruction: `${defaultInstruction} concede 要读准，承认和让步都要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'exceed，ex 是 out，向外，ceed 是走，走出去更多，就是超过。',
    emotionInstruction: '有越线往外走的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'exceed = 走出去更多 → 超过',
    instruction: `${defaultInstruction} exceed 要读准，超过要落点。`,
  },
  {
    id: 'word-eject',
    text: 'access，ac 是 toward，靠近，cess 是走，走进去接近，就是进入，访问。',
    emotionInstruction: '生活化一点，像走进一个入口。',
    speedHint: 'fast-clear',
    subtitle: 'access = 走进去 → 进入 / 访问',
    instruction: `${defaultInstruction} access 要读准，进入和访问要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'process，就是一路走过来的过程，所以是过程，流程。',
    emotionInstruction: '简洁一点，给一个连续向前走的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'process = 一路走过 → 过程 / 流程',
    instruction: `${defaultInstruction} process 要读准，过程要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'successor，就是后来继续走上来接你位置的人，所以是继任者。',
    emotionInstruction: '轻快收住，把顺位交接讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'successor = 后面走上来 → 继任者',
    instruction: `${defaultInstruction} successor 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：proceed 是向前走，recede 是往回走，concede 是让一步，exceed 是走过头。',
    emotionInstruction: '快速总览，把 go 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'proceed / recede / concede / exceed，都围着 go 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：cede 和 cess 等于 go，走，前进。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'cede / cess = go：走，前进',
    instruction: `${defaultInstruction} 总结要稳，cede、cess 和 go 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 cede 或 cess，先想：它往哪边走。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 cede / cess，先想：往哪儿走？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

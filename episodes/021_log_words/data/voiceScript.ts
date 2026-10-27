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
    text: 'logic 不只是逻辑课上的那个逻辑，它背后其实是说话和理由。',
    emotionInstruction: '开头像打断一个死记硬背的误解，短促有悬念。',
    speedHint: 'very-fast-clear',
    subtitle: 'logic 不只是“逻辑”',
    instruction: `${defaultInstruction} logic 要读准，开头要强，要有纠错感。`,
  },
  {
    id: 'flash-words',
    text: 'logic，dialogue，monologue，analogy，apology。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'logic / dialogue / monologue / analogy / apology',
    instruction: `${defaultInstruction} 英文之间略停顿，logic、dialogue、monologue 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 log，word，speech，reason，词，说话，逻辑。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都围着“说”和“理由”',
    instruction: `${defaultInstruction} log、word、speech、reason 要读准，要有揭示感。`,
  },
  {
    id: 'root-ject',
    text: 'log，核心意思就是 word，speech，reason，词，说话，逻辑。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'log = word / speech / reason',
    instruction: `${defaultInstruction} log、word、speech、reason 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'logic，就是把理由讲通，讲顺，讲到别人也能跟上，所以是逻辑。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'logic = 把理由讲通 → 逻辑',
    instruction: `${defaultInstruction} logic 要读准，逻辑要讲得干净有力。`,
  },
  {
    id: 'word-object',
    text: 'dialogue，dia 有穿过和来回的感觉，log 是说，两边来回说，就是对话。',
    emotionInstruction: '把抽象词讲成两个人来回接话。',
    speedHint: 'fast-clear',
    subtitle: 'dialogue = 两边对着说 → 对话',
    instruction: `${defaultInstruction} dialogue 要读准，对话要落点。`,
  },
  {
    id: 'word-subject',
    text: 'monologue，mono 是一个，log 是说，一个人一直说，就是独白。',
    emotionInstruction: '像镜头只剩一个人在说话。',
    speedHint: 'fast-clear',
    subtitle: 'monologue = 一个人说 → 独白',
    instruction: `${defaultInstruction} monologue 要读准，独白要短促有画面。`,
  },
  {
    id: 'word-project',
    text: 'analogy，拿另一个熟悉的例子把意思说出来，说清楚，就是类比。',
    emotionInstruction: '把类比讲成拿一个熟例子照亮另一个概念。',
    speedHint: 'fast-clear',
    subtitle: 'analogy = 借另一个例子说 → 类比',
    instruction: `${defaultInstruction} analogy 要读准，类比要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'apology，不是光说 sorry，它更像把错认真说出来，把立场放低，所以是道歉。',
    emotionInstruction: '把道歉讲成真正开口认错。',
    speedHint: 'fast-clear',
    subtitle: 'apology = 把错说出来 → 道歉',
    instruction: `${defaultInstruction} apology 要读准，道歉要落点。`,
  },
  {
    id: 'word-eject',
    text: 'eulogy，eu 是好的，log 是说，把赞美的话公开说出来，就是悼词或者颂词。',
    emotionInstruction: '语气稍稳一点，但还要干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'eulogy = 把赞美说出来 → 悼词 / 颂词',
    instruction: `${defaultInstruction} eulogy 要读准，悼词和颂词要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'catalog，就是把东西一条条写出来，说出来，排成目录，所以是目录。',
    emotionInstruction: '简洁一点，像把项目一条条列在眼前。',
    speedHint: 'fast-clear',
    subtitle: 'catalog = 一条条列出来 → 目录',
    instruction: `${defaultInstruction} catalog 要读准，目录要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'logistics，就是把安排、路线、物资都讲清并接起来，所以是后勤。',
    emotionInstruction: '轻快收住，但要把组织感讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'logistics = 把安排讲清并落地 → 后勤',
    instruction: `${defaultInstruction} logistics 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来，logic 是讲通理由，dialogue 是来回说，monologue 是一个人说，apology 是把错说出来。',
    emotionInstruction: '快速总览，把说和理由这条线连起来。',
    speedHint: 'fast',
    subtitle: 'logic / dialogue / apology，都围着 word 和 reason 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，log 等于 word，speech，reason，词，说话，逻辑。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'log = word / speech / reason: 词，说话，逻辑',
    instruction: `${defaultInstruction} 总结要稳，log、word、speech、reason 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 log，先想，它是在说话，还是在讲理由。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 log，先想：是在说，还是在讲理由？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

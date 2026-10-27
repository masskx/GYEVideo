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
    text: '别再硬背 ject 单词了，它们其实都在做同一个动作。',
    emotionInstruction: '开场直接打断，像把观众从滑走里拉回来。',
    speedHint: 'very-fast-clear',
    subtitle: '别再硬背 ject 单词了',
    instruction: `${defaultInstruction} 开头要强，ject 读准。`,
  },
  {
    id: 'flash-words',
    text: 'reject，project，inject，object，subject。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'reject / project / inject / object / subject',
    instruction: `${defaultInstruction} 英文之间略停顿，project 和 subject 要清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 throw，扔，投。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 throw',
    instruction: `${defaultInstruction} throw、扔、投要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'ject，核心意思就是 throw，扔出去，投出去。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'ject = throw / 扔，投',
    instruction: `${defaultInstruction} ject 和 throw 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'reject，re 是回去，ject 是扔，扔回去，就是拒绝。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'reject = 扔回去 → 拒绝',
    instruction: `${defaultInstruction} reject 读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'object，ob 是在前面，ject 是扔，被扔在你面前的东西，就是物体。',
    emotionInstruction: '画面感强，像东西被抛到眼前。',
    speedHint: 'fast-clear',
    subtitle: 'object = 扔在面前 → 物体',
    instruction: `${defaultInstruction} object 名词读法要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'subject，sub 是下面，被放到下面讨论的东西，就是主题，科目。',
    emotionInstruction: '解释要稳，把抽象词说具体。',
    speedHint: 'fast-clear',
    subtitle: 'subject = 放到下面讨论 → 主题 / 科目',
    instruction: `${defaultInstruction} subject 读准，不要太拖。`,
  },
  {
    id: 'word-project',
    text: 'project，pro 是向前，ject 是投，向前投出去，可以是投射，也可以是项目。',
    emotionInstruction: '有向前投出的动势。',
    speedHint: 'fast-clear',
    subtitle: 'project = 向前投 → 投射 / 项目',
    instruction: `${defaultInstruction} project 动词读法要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'inject，in 是进去，把东西投进去，就是注入。',
    emotionInstruction: '短促直接，像针管推进。',
    speedHint: 'fast-clear',
    subtitle: 'inject = 投进去 → 注入',
    instruction: `${defaultInstruction} inject 读准，中文干净。`,
  },
  {
    id: 'word-eject',
    text: 'eject，e 是向外，把东西扔出去，就是弹出，喷出。',
    emotionInstruction: '有弹出的感觉，但不要夸张。',
    speedHint: 'fast-clear',
    subtitle: 'eject = 扔出去 → 弹出',
    instruction: `${defaultInstruction} eject 读准。`,
  },
  {
    id: 'word-abject',
    text: 'deject，de 是向下，情绪被往下扔，就是使人沮丧。',
    emotionInstruction: '稍微压低一点，但保持快节奏。',
    speedHint: 'fast-clear',
    subtitle: 'deject = 往下扔 → 使沮丧',
    instruction: `${defaultInstruction} deject 读准。`,
  },
  {
    id: 'word-deject',
    text: 'trajectory，也和 ject 有关，是东西被投出去之后走过的轨迹。',
    emotionInstruction: '补充高级词，解释要让人觉得赚到。',
    speedHint: 'fast-clear',
    subtitle: 'trajectory = 投出去的路线 → 轨迹',
    instruction: `${defaultInstruction} trajectory 稍慢，保证清晰。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：reject 是扔回去，project 是向前投，inject 是投进去，eject 是扔出去。',
    emotionInstruction: '快速总览，把 throw 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'reject / project / inject / eject，都围着 throw 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：ject 等于 throw，扔，投。',
    emotionInstruction: '总结像口诀，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'ject = throw：扔，投',
    instruction: `${defaultInstruction} 总结要稳，ject 和 throw 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 ject，先想：往哪儿扔，扔出了什么。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 ject，先想：往哪儿扔？',
    instruction: `${defaultInstruction} 收尾自然，留一个记忆问题。`,
  },
];

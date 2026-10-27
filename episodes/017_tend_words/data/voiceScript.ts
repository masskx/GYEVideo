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
    text: '给我三秒，让你看懂 tend 和 tens 这一组单词。',
    emotionInstruction: '开场像挑战，直接打断滑走，节奏短促有力。',
    speedHint: 'very-fast-clear',
    subtitle: '给我 3 秒，看懂 tend / tens',
    instruction: `${defaultInstruction} tend、tens 要读准，开头要强。`,
  },
  {
    id: 'flash-words',
    text: 'extend，intend，attend，pretend，tension。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'extend / intend / attend / pretend / tension',
    instruction: `${defaultInstruction} 英文之间略停顿，extend、intend、attend 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着同一个动作：stretch，拉伸，延伸。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都在“拉伸”',
    instruction: `${defaultInstruction} stretch、拉伸、延伸要有记忆点。`,
  },
  {
    id: 'root-ject',
    text: 'tend 和 tens，核心意思就是 stretch，伸展，延伸。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'tend / tens = stretch / 伸展',
    instruction: `${defaultInstruction} tend、tens 和 stretch 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'extend，ex 是 out，向外，tend 是拉伸，向外拉开，就是延伸，扩展。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'extend = 向外拉伸 → 延伸',
    instruction: `${defaultInstruction} extend 要读准，解释要干净。`,
  },
  {
    id: 'word-object',
    text: 'intend，in 是 inside，往心里，tend 是伸过去，心思伸向一个目标，就是打算，意图。',
    emotionInstruction: '把抽象意图讲成一个方向动作。',
    speedHint: 'fast-clear',
    subtitle: 'intend = 心思伸向目标 → 打算',
    instruction: `${defaultInstruction} intend 要读准，目标两个字要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'attend，ad 是 toward，朝向，tend 是伸过去，注意力伸过去，就是注意；人也可以到场出席。',
    emotionInstruction: '解释两个常见义，保持紧凑。',
    speedHint: 'fast-clear',
    subtitle: 'attend = 伸向那里 → 注意 / 出席',
    instruction: `${defaultInstruction} attend 要读准，注意和出席都要落点。`,
  },
  {
    id: 'word-project',
    text: 'tend，本身就有朝某个方向伸过去，所以是倾向于，也可以是照料，关注。',
    emotionInstruction: '基础词要稳，像抓住词根本体。',
    speedHint: 'fast-clear',
    subtitle: 'tend = 朝某方向伸 → 倾向于',
    instruction: `${defaultInstruction} tend 要读准，倾向于要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'pretend，pre 是 before，前面，tend 是伸出去，把一个样子伸到前面，就是假装。',
    emotionInstruction: '画面感强，像把假样子摆出来。',
    speedHint: 'fast-clear',
    subtitle: 'pretend = 把样子伸到前面 → 假装',
    instruction: `${defaultInstruction} pretend 要读准，假装要短促。`,
  },
  {
    id: 'word-eject',
    text: 'tension，tens 是拉紧，线被拉得很紧，就是张力，也就是紧张。',
    emotionInstruction: '声音稍微绷紧一点，配合张力感。',
    speedHint: 'fast-clear',
    subtitle: 'tension = 被拉紧 → 张力 / 紧张',
    instruction: `${defaultInstruction} tension 要读准，张力和紧张要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'intense，in 是 inside，tens 是拉紧，里面都绷紧了，就是强烈的。',
    emotionInstruction: '强调强烈感，但不要吼。',
    speedHint: 'fast-clear',
    subtitle: 'intense = 绷得很紧 → 强烈',
    instruction: `${defaultInstruction} intense 要读准，强烈要有力度。`,
  },
  {
    id: 'word-deject',
    text: 'extensive，ex 是 out，tens 是伸展，向外伸得很开，就是广泛的，大量的。',
    emotionInstruction: '收束单词列表，给出拓展感。',
    speedHint: 'fast-clear',
    subtitle: 'extensive = 伸展很开 → 广泛',
    instruction: `${defaultInstruction} extensive 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：extend 是向外延伸，intend 是心思伸向目标，tension 是被拉紧，intense 是绷到强烈。',
    emotionInstruction: '快速总览，把 stretch 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'extend / intend / tension，都围着 stretch 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：tend 和 tens 等于 stretch，伸展，延伸。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'tend / tens = stretch：伸展，延伸',
    instruction: `${defaultInstruction} 总结要稳，tend、tens 和 stretch 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 tend 或 tens，先想：它往哪里伸，哪里被拉紧。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 tend / tens，先想：往哪儿伸？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];

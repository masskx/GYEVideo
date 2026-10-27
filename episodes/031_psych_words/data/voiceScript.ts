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
    text: '看到 psych，别只会想到 psychology，三秒内把这串词全连到心理和灵魂上。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 psych 别只会想 psychology',
    instruction: `${defaultInstruction} psych 和 psychology 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'psychology，psyche，psychic，psychosis，psychopath。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'psychology / psyche / psychic / psychosis / psychopath',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，psyche 和 psychosis 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都围着 mind，soul，心理和灵魂。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都连着 mind / soul',
    instruction: `${defaultInstruction} mind 和 soul 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'psych，核心意思就是 mind，心理，或者 soul，灵魂。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'psych = mind / soul',
    instruction: `${defaultInstruction} psych，mind，soul 都要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'psychology，就是专门研究人的心理和行为，所以是心理学。',
    emotionInstruction: '像把学科一下钉住，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'psychology = 研究心理 -> 心理学',
    instruction: `${defaultInstruction} psychology 要读准，心理学落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'psyche 更接近心灵本身，像一个人的内在世界。',
    emotionInstruction: '像镜头一下转进内心，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'psyche = 心灵本身',
    instruction: `${defaultInstruction} psyche 要读准，心灵感要出来。`,
  },
  {
    id: 'word-subject',
    text: 'psychic 常见两层意思，一层是精神的，一层是超感知的灵媒感。',
    emotionInstruction: '这里要有一点展开感，但节奏不能拖。',
    speedHint: 'fast-clear',
    subtitle: 'psychic = 精神的 / 灵媒的',
    instruction: `${defaultInstruction} psychic 要读准，两层意思要清楚。`,
  },
  {
    id: 'word-project',
    text: 'psychosis，就是心理状态严重失常，到了精神病性层面。',
    emotionInstruction: '语气要像问题突然加重，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'psychosis = 精神失常状态',
    instruction: `${defaultInstruction} psychosis 要读准，失常感要出来。`,
  },
  {
    id: 'word-inject',
    text: 'psychopath 不是单纯情绪差，而是心理结构明显异常的人。',
    emotionInstruction: '像纠正误解，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'psychopath = 心理结构异常者',
    instruction: `${defaultInstruction} psychopath 要读准，纠错感要出来。`,
  },
  {
    id: 'word-eject',
    text: 'psychotherapy 很直白，就是用谈话和方法去做心理治疗。',
    emotionInstruction: '像把抽象心理落到治疗场景，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'psychotherapy = 心理治疗',
    instruction: `${defaultInstruction} psychotherapy 要读准，心理治疗要讲清楚。`,
  },
  {
    id: 'word-abject',
    text: 'psychosomatic，就是心理状态会直接影响身体反应，叫身心相关的。',
    emotionInstruction: '像把心和身体一下连起来，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'psychosomatic = 心理影响身体',
    instruction: `${defaultInstruction} psychosomatic 要读准，身心相关要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'psychoanalysis，就是把人的内心和潜意识拆开来分析，精神分析。',
    emotionInstruction: '像把内心层层剥开，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'psychoanalysis = 精神分析',
    instruction: `${defaultInstruction} psychoanalysis 要读准，精神分析要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，psychology 是研究心理，psyche 是心灵本身，psychosis 是心理失常，psychotherapy 是心理治疗。',
    emotionInstruction: '快速总览，把 psych 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'psychology / psyche / psychosis，都围着 mind 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，psych 就是 mind 和 soul。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'psych = mind / soul',
    instruction: `${defaultInstruction} 总结要稳，mind 和 soul 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 psych，先问一句，它是在讲心理状态，还是在讲心灵本身。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 psych，先想：它在讲哪种心理？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

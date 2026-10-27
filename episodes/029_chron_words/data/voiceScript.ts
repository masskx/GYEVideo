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
    text: '看到 chron，别只会想到 chronic，三秒内把这串词全连到时间上。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 chron 别只会想 chronic',
    instruction: `${defaultInstruction} chron 和 chronic 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'chronology，chronic，synchronize，chronological，anachronism。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'chronology / chronic / synchronize / chronological / anachronism',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，synchronize 和 anachronism 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '看起来差很远，底层却都围着 chron，time，时间。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都连着 time / 时间',
    instruction: `${defaultInstruction} chron 和 time 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'chron，核心意思就是 time，时间。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'chron = time / 时间',
    instruction: `${defaultInstruction} chron 和 time 要读准，语气要像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'chronology，就是把事情按时间顺序排开，所以是编年和时间顺序。',
    emotionInstruction: '像把时间线一下拉直，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'chronology = 按时间排开 -> 时间顺序',
    instruction: `${defaultInstruction} chronology 要读准，时间顺序结尾要利落。`,
  },
  {
    id: 'word-object',
    text: 'chronic，重点不是严重，而是拖很久，所以是长期的，慢性的。',
    emotionInstruction: '这里要有一点纠错感，帮助记忆。',
    speedHint: 'fast-clear',
    subtitle: 'chronic = 持续很久 -> 长期的',
    instruction: `${defaultInstruction} chronic 要读准，长期感要出来。`,
  },
  {
    id: 'word-subject',
    text: 'synchronize，就是把几个东西的时间对齐，让它们同步。',
    emotionInstruction: '像几个节拍同时卡上，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'synchronize = 时间对齐 -> 同步',
    instruction: `${defaultInstruction} synchronize 要读准，同步要清楚。`,
  },
  {
    id: 'word-project',
    text: 'chronological 很直白，就是按照时间顺序来的。',
    emotionInstruction: '语气要像把顺序一层层排好，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'chronological = 按时间顺序的',
    instruction: `${defaultInstruction} chronological 要读准，顺序感要出来。`,
  },
  {
    id: 'word-inject',
    text: 'chronicle，就是把事情一件一件按时间记下来。',
    emotionInstruction: '解释要像一笔一笔往下记，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'chronicle = 按时间记录',
    instruction: `${defaultInstruction} chronicle 要读准，记录感要出来。`,
  },
  {
    id: 'word-eject',
    text: 'anachronism 要反着记，它是东西出现在不属于它的时代，所以叫时代错误。',
    emotionInstruction: '这里要有反转提醒，像抓到穿帮镜头。',
    speedHint: 'fast-clear',
    subtitle: 'anachronism = 放错时代 -> 时代错误',
    instruction: `${defaultInstruction} anachronism 要读准，反转感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'chronometer，就是专门拿来精确计时的工具，计时器。',
    emotionInstruction: '像秒针被钉住一样精准，轻快但稳。',
    speedHint: 'fast-clear',
    subtitle: 'chronometer = 精确计时器',
    instruction: `${defaultInstruction} chronometer 要读准，精确感要出来。`,
  },
  {
    id: 'word-deject',
    text: 'diachronic，就是把语言或现象放到时间变化里去看，叫历时的。',
    emotionInstruction: '像把镜头拉长到时间轴上，节奏干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'diachronic = 跨时间变化 -> 历时的',
    instruction: `${defaultInstruction} diachronic 要读准，跨时间变化要讲清楚。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，chronology 是排时间，chronic 是拖时间，synchronize 是对时间，anachronism 是错时间。',
    emotionInstruction: '快速总览，把 chron 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'chronology / chronic / synchronize，都围着 time 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，chron 等于 time，时间。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'chron = time / 时间',
    instruction: `${defaultInstruction} chron 和 time 要读准，总结要稳。`,
  },
  {
    id: 'outro',
    text: '下次看到 chron，先问一句，它和时间顺序，长期持续，还是计时有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 chron，先想：它和哪种时间关系有关？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

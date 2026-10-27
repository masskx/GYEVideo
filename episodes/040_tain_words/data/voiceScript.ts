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
    text: '看到 tain，别只会想到 contain。这个根还有一个变体 ten，核心都是握住、保持。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 tain 别只会想 contain',
    instruction: `${defaultInstruction} tain ten 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'contain，maintain，obtain，retain，sustain。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'contain / maintain / obtain / retain / sustain',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，maintain 和 sustain 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有 tain 或 ten，核心意思就是 hold，握住，保持。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 tain / ten = hold / 握住',
    instruction: `${defaultInstruction} tain ten 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'tain，ten，两个变体，核心意思都是 hold，握住，保持。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'tain / ten = hold / 握住',
    instruction: `${defaultInstruction} tain ten 要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'contain，con 是 together 一起，tain 是握住，把东西握在一起，就是包含。',
    emotionInstruction: '像一个容器把东西兜住，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'contain = 握在一起 -> 包含',
    instruction: `${defaultInstruction} contain 要读准，包含的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'maintain，manu 是 hand 手，tain 是握住，用手一直握住不松开，就是维持。',
    emotionInstruction: '像双手稳稳端住一样，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'maintain = 用手握住 -> 维持',
    instruction: `${defaultInstruction} maintain 要读准，维持要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'obtain，ob 是 near 靠近，tain 是握住，靠近抓到手，就是获得。',
    emotionInstruction: '像一把抓住目标，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'obtain = 握住拿到 -> 获得',
    instruction: `${defaultInstruction} obtain 要读准，获得要清楚。`,
  },
  {
    id: 'word-project',
    text: 'retain，re 是 back 往回，tain 是握住，往自己这边握住不丢，就是保留。',
    emotionInstruction: '像把东西拽回口袋，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'retain = 往回握住 -> 保留',
    instruction: `${defaultInstruction} retain 要读准，保留的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'sustain，sus 是 up 向上，tain 是握住，从下面撑住、托住，就是支撑。',
    emotionInstruction: '像从底部把人托起来，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'sustain = 从下托住 -> 支撑',
    instruction: `${defaultInstruction} sustain 要读准，支撑要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'entertain，enter 是 among 在中间，tain 是握住，把客人握在氛围里，就是娱乐、招待。',
    emotionInstruction: '像派对的主人招呼客人，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'entertain = 握住客人 -> 娱乐 / 招待',
    instruction: `${defaultInstruction} entertain 要读准，娱乐感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'detain，de 是 down 向下，tain 是握住，把人按住扣下，就是拘留。',
    emotionInstruction: '像手铐扣住手腕，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'detain = 握住扣下 -> 拘留',
    instruction: `${defaultInstruction} detain 要读准，拘留要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'content，con 是一起，ten 是握住，把各种东西握在一起就是内容，内心被握住就是满足。',
    emotionInstruction: '像最后一锤定音，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'content = 握在一起 / 内心被握住 -> 内容 / 满足',
    instruction: `${defaultInstruction} content 要读准，内容和满足要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，contain 是握在一起，maintain 是握住不放，obtain 是握住拿到，都离不开 hold。',
    emotionInstruction: '快速总览，把 tain ten 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'contain / maintain / obtain，都围着 hold 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，tain、ten 就是 hold，握住，保持。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'tain / ten = hold / 握住',
    instruction: `${defaultInstruction} 总结要稳，tain ten 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 tain 或 ten 的词，先问一句，它握住了什么，又保持了多久。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 tain / ten，先想：握住了什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

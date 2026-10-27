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
    text: '看到 path，别只会想到 path 路径，这一串词根本不是在讲路。',
    emotionInstruction: '开头像打断误解，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 path 别只会想 path 路径',
    instruction: `${defaultInstruction} 开头像纠错挑战，两个 path 要读准。`,
  },
  {
    id: 'flash-words',
    text: 'sympathy，empathy，apathy，pathetic，pathology。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'sympathy / empathy / apathy / pathetic / pathology',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，empathy 和 pathology 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都围着 feeling，suffering，感受和痛苦。','emotionInstruction': '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都连着 feeling / suffering',
    instruction: `${defaultInstruction} feeling 和 suffering 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'path，核心意思就是 feeling，感受，或者 suffering，痛苦。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'path = feeling / suffering',
    instruction: `${defaultInstruction} path，feeling，suffering 都要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'sympathy，就是和别人一起感受，所以是同情。',
    emotionInstruction: '像情绪一下连上别人，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'sympathy = 一起感受 -> 同情',
    instruction: `${defaultInstruction} sympathy 要读准，同情落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'empathy 更进一步，不只是同情，是你真的代入进去，所以叫共情。',
    emotionInstruction: '像把自己放进对方感受里，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'empathy = 感同身受 -> 共情',
    instruction: `${defaultInstruction} empathy 要读准，共情要落点。`,
  },
  {
    id: 'word-subject',
    text: 'apathy 反过来，就是没感觉，没情绪反应，所以叫冷漠。',
    emotionInstruction: '这里要有反转提醒，帮助记忆。',
    speedHint: 'fast-clear',
    subtitle: 'apathy = 没有感觉 -> 冷漠',
    instruction: `${defaultInstruction} apathy 要读准，反转感要出来。`,
  },
  {
    id: 'word-project',
    text: 'pathetic 不是路径复杂，它是让人产生怜悯感，所以是可怜的。',
    emotionInstruction: '像一下激起怜悯，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'pathetic = 引发怜悯感 -> 可怜的',
    instruction: `${defaultInstruction} pathetic 要读准，可怜的要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'pathology 后来变成病理学，因为疾病本来就和 suffering，痛苦状态连得很深。',
    emotionInstruction: '像把意义推进到医学场景，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'pathology = 痛苦状态研究 -> 病理',
    instruction: `${defaultInstruction} pathology 和 suffering 要读准，医学感要出来。`,
  },
  {
    id: 'word-eject',
    text: 'antipathy，就是对某人某物产生强烈反感。',
    emotionInstruction: '像情绪瞬间拧过去，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'antipathy = 反向感受 -> 反感',
    instruction: `${defaultInstruction} antipathy 要读准，反感要讲得干脆。`,
  },
  {
    id: 'word-abject',
    text: 'telepathy，很多人熟，就是隔着距离还能感受到对方想法，心灵感应。',
    emotionInstruction: '这里要带一点熟悉感，但节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'telepathy = 远距离感受 -> 心灵感应',
    instruction: `${defaultInstruction} telepathy 要读准，心灵感应要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'sociopath 也别拆错，它是对别人感受明显缺失的人，常指反社会人格者。',
    emotionInstruction: '像做最后一个认知钉子，节奏干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'sociopath = 缺失他人感受 -> 反社会人格者',
    instruction: `${defaultInstruction} sociopath 要读准，结尾要稳。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，sympathy 是一起感受，empathy 是代入感受，apathy 是没有感受，pathology 是痛苦状态。',
    emotionInstruction: '快速总览，把 path 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'sympathy / empathy / apathy，都围着 feeling 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，这里的 path，不是路，是 feeling 和 suffering。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'path = feeling / suffering',
    instruction: `${defaultInstruction} 总结要稳，feeling 和 suffering 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 path，先问一句，它是在讲感受，还是在讲痛苦状态。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 path，先想：它在讲哪种感受？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

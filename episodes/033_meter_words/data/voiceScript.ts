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
    text: '看到 meter，别只会想到米。三秒内看懂这串词都在测量什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 meter 别只会想到米',
    instruction: `${defaultInstruction} meter 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'diameter，perimeter，symmetry，geometry，barometer。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'diameter / perimeter / symmetry / geometry / barometer',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，barometer 和 symmetry 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有一个 meter 或 metr，核心意思就是 measure，测量。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 meter / metr = measure / 测量',
    instruction: `${defaultInstruction} meter 和 metr 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'meter，metr，核心意思就是 measure，测量。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'meter / metr = measure / 测量',
    instruction: `${defaultInstruction} meter 和 metr 要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'diameter，dia 是穿过，加 meter 测量，穿过圆心测量，就是直径。',
    emotionInstruction: '像一下把词义点亮，穿过圆心这个画面要出来。',
    speedHint: 'fast-clear',
    subtitle: 'diameter = 穿过测 -> 直径',
    instruction: `${defaultInstruction} diameter 和 dia 要读准，直径的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'perimeter，peri 是周围，加 meter 测量，测量一圈，就是周长。',
    emotionInstruction: '像绕一圈扫描，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'perimeter = 绕一圈测 -> 周长',
    instruction: `${defaultInstruction} perimeter 要读准，周长要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'symmetry，sym 是相同，加 metr 测量，说两边一样，就是对称。',
    emotionInstruction: '像镜像对照一样，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'symmetry = 测出来一样 -> 对称',
    instruction: `${defaultInstruction} symmetry 要读准，对称的对比感要清楚。`,
  },
  {
    id: 'word-project',
    text: 'geometry，geo 是大地，加 metr，大地上测量出的法则，就是几何。',
    emotionInstruction: '像从土地里长出几何图形，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'geometry = 大地测量 -> 几何',
    instruction: `${defaultInstruction} geometry 和 geo 要读准，几何的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'barometer，baro 是压力，加 meter，用来测气压的工具，就是气压计。',
    emotionInstruction: '像仪表盘指针在动，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'barometer = 测压力 -> 气压计',
    instruction: `${defaultInstruction} barometer 要读准，气压计要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'speedometer，speed 就是速度，meter 就是测量，合起来就是速度计。',
    emotionInstruction: '像车速表指针在飙升，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'speedometer = 测速度 -> 速度计',
    instruction: `${defaultInstruction} speedometer 要读准，速度感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'parameter，para 是在旁边，加 meter，在旁边衡量和设定边界，就是参数。',
    emotionInstruction: '像在画边界线，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'parameter = 在旁边量 -> 参数',
    instruction: `${defaultInstruction} parameter 和 para 要读准，参数要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'metric 也一样，来自 metre 测量，所以是公制的、一套度量标准。',
    emotionInstruction: '像最后一个通用钉子，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'metric = 度量体系 -> 公制 / 标准',
    instruction: `${defaultInstruction} metric 要读准，公制标准要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，diameter 是穿过测，perimeter 是绕一圈测，symmetry 是对着测，都离不开 measure。',
    emotionInstruction: '快速总览，把 meter 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'diameter / perimeter / symmetry，都围着 measure 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，meter，metr 就是 measure，测量。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'meter / metr = measure / 测量',
    instruction: `${defaultInstruction} 总结要稳，meter 和 metr 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 meter 或 metr，先问一句，它到底在测量什么。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 meter / metr，先想：它在量什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

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
    text: '看到 scope，别只会想到望远镜。三秒内看懂这串词都在观察什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 scope 别只会想望远镜',
    instruction: `${defaultInstruction} scope 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'telescope，microscope，periscope，stethoscope，kaleidoscope。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'telescope / microscope / periscope / stethoscope / kaleidoscope',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，kaleidoscope 和 stethoscope 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有一个 scope，核心意思就是 look，看，观察。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 scope = look / 看',
    instruction: `${defaultInstruction} scope 和 look 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'scope，核心意思就是 look，看，观察。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'scope = look / 看',
    instruction: `${defaultInstruction} scope 要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'telescope，tele 是 far 远，加 scope 看，往远处看的东西，就是望远镜。',
    emotionInstruction: '像把镜头推到远处，画面要出来。',
    speedHint: 'fast-clear',
    subtitle: 'telescope = 往远处看 -> 望远镜',
    instruction: `${defaultInstruction} telescope 和 tele 要读准，望远镜的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'microscope，micro 是 small 微小，加 scope 看，看微小东西的，就是显微镜。',
    emotionInstruction: '像把镜头缩小到微观世界，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'microscope = 看微小 -> 显微镜',
    instruction: `${defaultInstruction} microscope 和 micro 要读准，显微镜要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'periscope，peri 是 around 周围，加 scope 看，往周围看的，就是潜望镜。',
    emotionInstruction: '像潜望镜从水下探出来看，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'periscope = 往周围看 -> 潜望镜',
    instruction: `${defaultInstruction} periscope 和 peri 要读准，潜望镜的对比感要清楚。`,
  },
  {
    id: 'word-project',
    text: 'stethoscope，stetho 是 chest 胸口，加 scope，看胸腔内部，就是听诊器。',
    emotionInstruction: '像医生把听诊器贴到胸口，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'stethoscope = 看胸腔 -> 听诊器',
    instruction: `${defaultInstruction} stethoscope 要读准，听诊器的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'kaleidoscope，kalos 是 beautiful 美，eidos 是 form 形状，加 scope，看美的形状，就是万花筒。',
    emotionInstruction: '像万花筒在旋转，色彩炸开，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'kaleidoscope = 看美形 -> 万花筒',
    instruction: `${defaultInstruction} kaleidoscope 要读准，万花筒要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'horoscope，horo 是 hour 时辰，加 scope，看时辰星象，就是星座运势。',
    emotionInstruction: '像看星星排版命运，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'horoscope = 看时辰 -> 星座运势',
    instruction: `${defaultInstruction} horoscope 要读准，星座运势要出来。`,
  },
  {
    id: 'word-abject',
    text: 'scope 本身做名词，就是你观察的范围，你的眼界、覆盖面。',
    emotionInstruction: '像把镜头拉远看全局，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'scope = 观察范围 -> 范围 / 眼界',
    instruction: `${defaultInstruction} scope 要读准，范围眼界要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'macroscopic，macro 是 large 大，加 scopic 看，站在大尺度看，就是宏观的。',
    emotionInstruction: '像最后一个钉子，从宏观视角俯瞰，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'macroscopic = 大尺度看 -> 宏观的',
    instruction: `${defaultInstruction} macroscopic 和 macro 要读准，宏观要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，telescope 是远看，microscope 是微观看，periscope 是绕一圈看，都离不开 look。',
    emotionInstruction: '快速总览，把 scope 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'telescope / microscope / periscope，都围着 look 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，scope 就是 look，看，观察。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'scope = look / 看',
    instruction: `${defaultInstruction} 总结要稳，scope 和 look 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 scope，先问一句，它是在往哪看，从哪个角度观察。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 scope，先想：从哪个角度看？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

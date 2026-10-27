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
    text: '看到 bio，别只会想到 biology，三秒内把这串词全连到生命上。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 bio 别只会想 biology',
    instruction: `${defaultInstruction} bio 和 biology 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'biology，biography，biodegradable，biodiversity，antibiotic。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'biology / biography / biodegradable / biodiversity / antibiotic',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，biodegradable 和 biodiversity 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '看起来跨度很大，底层却都围着 bio，life，生命。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都连着 life / 生命',
    instruction: `${defaultInstruction} bio 和 life 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'bio，核心意思就是 life，生命。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'bio = life / 生命',
    instruction: `${defaultInstruction} bio 和 life 要读准，语气要像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'biology，就是 study 加上 life，所以它是研究生命的学科，生物学。',
    emotionInstruction: '像把词义一下拆开，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'biology = 研究生命 -> 生物学',
    instruction: `${defaultInstruction} biology 和 study 要读准，生物学结尾要利落。`,
  },
  {
    id: 'word-object',
    text: 'biography，graphy 是写，bio 是生命，合起来就是把一个人的生命写下来，传记。',
    emotionInstruction: '像拆词公式，节奏推进但别拖。',
    speedHint: 'fast-clear',
    subtitle: 'biography = 写生命经历 -> 传记',
    instruction: `${defaultInstruction} biography，graphy 和 bio 都要读准，传记要落点。`,
  },
  {
    id: 'word-subject',
    text: 'biodegradable，就是能被生命系统慢慢分解掉，所以叫可生物降解的。',
    emotionInstruction: '语气要像看见东西慢慢被自然吃掉，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'biodegradable = 能被生命分解 -> 可生物降解',
    instruction: `${defaultInstruction} biodegradable 要读准，可生物降解要清楚。`,
  },
  {
    id: 'word-project',
    text: 'biodiversity，就是很多不同生命一起存在，所以是生物多样性。',
    emotionInstruction: '画面感要开阔，像一下看到很多生命形态。',
    speedHint: 'fast-clear',
    subtitle: 'biodiversity = 很多生命并存 -> 生物多样性',
    instruction: `${defaultInstruction} biodiversity 要读准，多样性要讲得干脆。`,
  },
  {
    id: 'word-inject',
    text: 'antibiotic 要反着记，anti 是对抗，bio 是生命，所以它是对抗细菌生命的抗生素。',
    emotionInstruction: '这里要有一点反转提醒，帮助记忆。',
    speedHint: 'fast-clear',
    subtitle: 'antibiotic = 对抗微生物生命 -> 抗生素',
    instruction: `${defaultInstruction} antibiotic 和 anti 要读准，反转感要出来。`,
  },
  {
    id: 'word-eject',
    text: 'symbiosis，就是不同生命绑在一起一起活，所以叫共生。',
    emotionInstruction: '短促但有连接感，像两种生命贴在一起。',
    speedHint: 'fast-clear',
    subtitle: 'symbiosis = 不同生命一起活 -> 共生',
    instruction: `${defaultInstruction} symbiosis 要读准，共生要清楚有力。`,
  },
  {
    id: 'word-abject',
    text: 'microbiome，就是你身体里一整群很小很小的生命系统，微生物群系。',
    emotionInstruction: '带一点微观感，但仍要保持推进速度。',
    speedHint: 'fast-clear',
    subtitle: 'microbiome = 身体里的微小生命群 -> 微生物群系',
    instruction: `${defaultInstruction} microbiome 要读准，微生物群系要讲清楚。`,
  },
  {
    id: 'word-deject',
    text: 'biochemistry，就是研究生命体里面怎么发生化学反应，所以是生物化学。',
    emotionInstruction: '像把镜头推进到生命体内部，节奏干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'biochemistry = 生命体里的化学 -> 生物化学',
    instruction: `${defaultInstruction} biochemistry 要读准，生物化学要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，biology 是研究生命，biography 是写生命，biodiversity 是很多生命一起在场，antibiotic 是对抗微生物生命。',
    emotionInstruction: '快速总览，把 bio 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'biology / biography / biodiversity，都围着 life 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，bio 等于 life，生命。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'bio = life / 生命',
    instruction: `${defaultInstruction} bio 和 life 要读准，总结要稳。`,
  },
  {
    id: 'outro',
    text: '下次看到 bio，先问一句，它和哪一种生命有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 bio，先想：它和哪种生命有关？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

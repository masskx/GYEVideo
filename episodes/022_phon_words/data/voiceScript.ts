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
    text: 'phone 不只是你手里的手机，它背后其实是声音本身。',
    emotionInstruction: '开头像突然纠正一个日常误解，短促有悬念。',
    speedHint: 'very-fast-clear',
    subtitle: 'phone 不只是“手机”',
    instruction: `${defaultInstruction} phone 要读准，开头要强，要有纠错感。`,
  },
  {
    id: 'flash-words',
    text: 'phone，microphone，phonics，symphony，cacophony。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'phone / microphone / phonics / symphony / cacophony',
    instruction: `${defaultInstruction} 英文之间略停顿，phone、microphone、phonics 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 phon，sound，voice，声音。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都围着“声音”',
    instruction: `${defaultInstruction} phon、sound、voice 要读准，要有揭示感。`,
  },
  {
    id: 'root-ject',
    text: 'phon，核心意思就是 sound，voice，声音。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'phon = sound / voice / 声音',
    instruction: `${defaultInstruction} phon、sound、voice 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'phone，本来就是传声音的东西，所以重点不在机器，重点在声音被送过去。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'phone = 传声音 → 电话',
    instruction: `${defaultInstruction} phone 要读准，电话要讲得干净有力。`,
  },
  {
    id: 'word-object',
    text: 'microphone，micro 是小，phone 是声音，把小声音抓出来放大，就是麦克风。',
    emotionInstruction: '把麦克风讲成把细小声音拉到你耳边。',
    speedHint: 'fast-clear',
    subtitle: 'microphone = 放大小声音 → 麦克风',
    instruction: `${defaultInstruction} microphone 要读准，麦克风要落点。`,
  },
  {
    id: 'word-subject',
    text: 'phonics，就是字母该发什么声音的规则，所以是自然拼读。',
    emotionInstruction: '像把发音规则一下讲透。',
    speedHint: 'fast-clear',
    subtitle: 'phonics = 声音规则 → 自然拼读',
    instruction: `${defaultInstruction} phonics 要读准，自然拼读要短促清晰。`,
  },
  {
    id: 'word-project',
    text: 'symphony，sym 是 together，一起，phony 是声音，很多声音一起响，就是交响乐。',
    emotionInstruction: '把交响乐讲成多层声音一起铺开。',
    speedHint: 'fast-clear',
    subtitle: 'symphony = 声音一起响 → 交响乐',
    instruction: `${defaultInstruction} symphony 要读准，交响乐要有展开感。`,
  },
  {
    id: 'word-inject',
    text: 'cacophony，caco 是坏，phony 是声音，坏声音挤成一团，就是刺耳噪音。',
    emotionInstruction: '把噪音讲成声音打架。',
    speedHint: 'fast-clear',
    subtitle: 'cacophony = 坏声音挤一团 → 刺耳噪音',
    instruction: `${defaultInstruction} cacophony 要读准，刺耳噪音要落点。`,
  },
  {
    id: 'word-eject',
    text: 'euphony，eu 是好，phony 是声音，好听的声音排在一起，就是悦耳。',
    emotionInstruction: '语气轻一点，像耳朵突然舒服下来。',
    speedHint: 'fast-clear',
    subtitle: 'euphony = 好听的声音 → 悦耳',
    instruction: `${defaultInstruction} euphony 要读准，悦耳要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'xylophone，就是敲一下就会响的木琴，所以你一看到这个词就能听见声音。',
    emotionInstruction: '简洁一点，给出敲击出声的画面。',
    speedHint: 'fast-clear',
    subtitle: 'xylophone = 敲出来的声音 → 木琴',
    instruction: `${defaultInstruction} xylophone 要读准，木琴要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'phonograph，就是把声音写下来，录下来，留住的机器，所以是留声机。',
    emotionInstruction: '轻快收住，但要把记录声音的感觉讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'phonograph = 把声音记下来 → 留声机',
    instruction: `${defaultInstruction} phonograph 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来，phone 是传声音，microphone 是放大声音，symphony 是声音合在一起，cacophony 是坏声音挤在一起。',
    emotionInstruction: '快速总览，把声音这条线连起来。',
    speedHint: 'fast',
    subtitle: 'phone / symphony / cacophony，都围着 sound 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，phon 等于 sound，voice，声音。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'phon = sound / voice: 声音',
    instruction: `${defaultInstruction} 总结要稳，phon、sound、voice 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 phon，先想，这个词在讲什么声音。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 phon，先想：这是什么声音？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

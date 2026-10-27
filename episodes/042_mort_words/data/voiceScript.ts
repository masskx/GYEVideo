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
    text: 'mortal 你可能一直不知道它在说什么。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: 'mortal 你可能一直不知道它在说什么',
    instruction: `${defaultInstruction} mort 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'mortal，immortal，mortgage，mortician，mortify。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'mortal / immortal / mortgage / mortician / mortify',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，mortgage 和 mortician 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '这些词，其实都在讲同一个死亡信号。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '这些词，其实都在讲同一个死亡信号',
    instruction: `${defaultInstruction} mort death 要读准，揭示感要强。`,
  },
  {
    id: 'root-mort',
    text: '抓住它。mort，就是 death，死亡。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'mort = death，死亡。',
    instruction: `${defaultInstruction} mort 要读准，语气像下定义。`,
  },
  {
    id: 'word-mortal',
    text: 'mortal，mort 是死亡，al 是形容词，会死的，就是凡人、终有一死的。',
    emotionInstruction: '像沙漏提醒生命有限，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'mortal = 会死的 -> 凡人',
    instruction: `${defaultInstruction} mortal 要读准，凡人的落点要干脆。`,
  },
  {
    id: 'word-immortal',
    text: 'immortal，im 是 not，mortal 是凡人，不是凡人，所以是不朽的、永生不灭的。',
    emotionInstruction: '像一束永不熄灭的光，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'immortal = 不死的 -> 不朽的',
    instruction: `${defaultInstruction} immortal 要读准，不朽要清楚。`,
  },
  {
    id: 'word-mortgage',
    text: 'mortgage，mort 是死亡，gage 是 pledge 抵押，死亡抵押，债务还清抵押才死，所以是抵押贷款。',
    emotionInstruction: '像一份终身契约被钉在墙上，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'mortgage = 死亡抵押 -> 抵押贷款',
    instruction: `${defaultInstruction} mortgage 要读准，抵押贷款要清楚。`,
  },
  {
    id: 'word-mortician',
    text: 'mortician，mort 是死亡，ician 是做……的人，处理和死亡相关事务的人，就是殡仪师。',
    emotionInstruction: '像一个严肃的送别，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'mortician = 处理死亡的人 -> 殡仪师',
    instruction: `${defaultInstruction} mortician 要读准，殡仪师的落点要干脆。`,
  },
  {
    id: 'word-mortify',
    text: 'mortify，mort 是死亡，ify 是使……，使一个人难堪到想死，就是使羞耻、使难堪万分。',
    emotionInstruction: '像一个人满脸通红钻到地缝里，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'mortify = 羞耻到想死 -> 使难堪',
    instruction: `${defaultInstruction} mortify 要读准，羞耻感要清楚。`,
  },
  {
    id: 'word-postmortem',
    text: 'postmortem，post 是 after 之后，mortem 是死亡，死之后做的事，就是尸检、事后分析。',
    emotionInstruction: '像一个法医在复盘，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'postmortem = 死后 -> 尸检 / 事后分析',
    instruction: `${defaultInstruction} postmortem 要读准，事后分析感要出来。`,
  },
  {
    id: 'word-morgue',
    text: 'morgue，也是 mort 变过来的，遗体暂时停放的地方，就是太平间。',
    emotionInstruction: '像一扇沉重的门缓缓关上，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'morgue = 停尸处 -> 太平间',
    instruction: `${defaultInstruction} morgue 要读准，太平间要清楚。`,
  },
  {
    id: 'word-mortuary',
    text: 'mortuary 也一样，mort 是死亡，ary 是地方，和死亡有关的地方，就是殡仪馆。',
    emotionInstruction: '像最后一站，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'mortuary = 与死亡相关的地方 -> 殡仪馆',
    instruction: `${defaultInstruction} mortuary 要读准，殡仪馆要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，mortal 是会死的，immortal 是不死的，mortgage 是死亡做抵押，都离不开 death。',
    emotionInstruction: '快速总览，把 mort 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'mortal / immortal / mortgage，都围着 death 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，mort 就是 death，死亡。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'mort = death / 死亡',
    instruction: `${defaultInstruction} 总结要稳，mort death 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 mort 的词，先问一句，它跟死亡本身有关，还是跟死亡带来的感觉有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 mort，先想：死什么？为什么死？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

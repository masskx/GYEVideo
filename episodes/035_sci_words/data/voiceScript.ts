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
    text: '看到 sci，别只会想到 science。三秒内看懂这串词都跟知道和认知有关。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 sci 别只会想 science',
    instruction: `${defaultInstruction} sci 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'science，conscious，conscience，omniscient，prescient。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'science / conscious / conscience / omniscient / prescient',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，conscience 和 omniscient 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有一个 sci，核心意思就是 know，知道，认知。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 sci = know / 知道',
    instruction: `${defaultInstruction} sci 和 know 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'sci，核心意思就是 know，知道，认知。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'sci = know / 知道',
    instruction: `${defaultInstruction} sci 要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'science 最基础，它就是知识的体系，通过知道和认知建立起来的，就是科学。',
    emotionInstruction: '像把知识体系一下点亮，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'science = 知识体系 -> 科学',
    instruction: `${defaultInstruction} science 要读准，科学的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'conscious，con 是 with 伴随，加 sci 知道，自己跟着自己知道，就是有意识的。',
    emotionInstruction: '像觉醒一样，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'conscious = 伴随知道 -> 有意识的',
    instruction: `${defaultInstruction} conscious 要读准，有意识的要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'unconscious 就好办了，un 是 not，不 conscious，就是无意识的、昏迷的。',
    emotionInstruction: '像做一个反转钩子，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'unconscious = 无意识 -> 昏迷 / 不自觉',
    instruction: `${defaultInstruction} unconscious 要读准，对比感要清楚。`,
  },
  {
    id: 'word-project',
    text: 'conscience 也是 con 加 sci，但不是一般知道，是内心知道对错，就是良心。',
    emotionInstruction: '像心里有一个声音在判断，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'conscience = 内心知道对错 -> 良心',
    instruction: `${defaultInstruction} conscience 要读准，良心的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'omniscient，omni 是 all 所有，加 sci 知道，什么都知道，就是无所不知的。',
    emotionInstruction: '像上帝视角俯瞰一切，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'omniscient = 什么都知道 -> 无所不知',
    instruction: `${defaultInstruction} omniscient 和 omni 要读准，无所不知要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'prescient，pre 是 before 提前，加 sci 知道，提前知道，就是预知的、有先见之明的。',
    emotionInstruction: '像预测未来一样，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'prescient = 提前知道 -> 预知的',
    instruction: `${defaultInstruction} prescient 要读准，预知感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'nescient，ne 是 not，加 sci 知道，就是不 know，所以是无知的。',
    emotionInstruction: '像反过来拆一个否定词，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'nescient = 不知道 -> 无知的',
    instruction: `${defaultInstruction} nescient 要读准，无知要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'subconscious，sub 是 under 下面，加 conscious，意识下面那一层，就是潜意识的。',
    emotionInstruction: '像最后一层冰山露出水面，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'subconscious = 意识之下 -> 潜意识的',
    instruction: `${defaultInstruction} subconscious 要读准，潜意识要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，conscious 是有意识，conscience 是内心知道，omniscient 是什么都知道，都离不开 know。',
    emotionInstruction: '快速总览，把 sci 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'conscious / conscience / omniscient，都围着 know 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，sci 就是 know，知道，认知。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'sci = know / 知道',
    instruction: `${defaultInstruction} 总结要稳，sci 和 know 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 sci 的词，先问一句，它跟知道还是跟认知有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 sci，先想：知道什么？怎么认知？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];

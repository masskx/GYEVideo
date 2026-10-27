export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
  // English word -> what speech-to-text hears for a correct pronunciation (set after listening).
  asrAccept?: Record<string, string>;
};

// Roots are spelled out letter by letter in `text` (V I S): CosyVoice reads a bare "vis" as /vaɪs/.
const defaultInstruction = '中文口播，像一位边写板书边讲的好老师：清楚、亲切、有条理，面向高中生，英文单词读准读清楚。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'title',
    text: '今天在白板上，只讲一个字：看。',
    emotionInstruction: '平静开场，像拿起马克笔。',
    speedHint: 'medium-clear',
    subtitle: '今天在白板上，只讲一个字：看',
    instruction: defaultInstruction,
  },
  {
    id: 'root',
    text: '词根 V I S 和 V I D，意思都是 see，看。',
    emotionInstruction: '圈出重点的笃定感。',
    speedHint: 'medium-clear',
    subtitle: 'vis / vid = see，看',
    instruction: defaultInstruction,
  },
  {
    id: 'w-visit',
    text: 'visit：V I S 看，加上 it 去，去看，就是参观、拜访。',
    emotionInstruction: '边写边讲，节奏均匀。',
    speedHint: 'fast-clear',
    subtitle: 'visit：vis 看 + it 去 → 去看 → 参观；拜访',
    instruction: defaultInstruction,
  },
  {
    id: 'w-vision',
    text: 'vision，看的能力，是视力；看得远，就是远见。',
    emotionInstruction: '第二个意思稍微放慢，带一点启发。',
    speedHint: 'fast-clear',
    subtitle: 'vision：看的能力 → 视力；远见',
    instruction: defaultInstruction,
  },
  {
    id: 'w-visible',
    text: 'visible，能被看见的，可见的。',
    emotionInstruction: '短句，干净。',
    speedHint: 'fast-clear',
    subtitle: 'visible：能被看见的 → 可见的',
    instruction: defaultInstruction,
  },
  {
    id: 'w-evidence',
    text: 'evidence，e 向外，让人看得见的东西，就是证据。',
    emotionInstruction: '像揭开一张底牌。',
    speedHint: 'fast-clear',
    subtitle: 'evidence：e 向外 + vid 看 → 让人看得见的东西 → 证据',
    instruction: defaultInstruction,
  },
  {
    id: 'twist-q',
    text: '最意外的是 provide。提供，和看有什么关系？',
    emotionInstruction: '故意制造疑问，停一下。',
    speedHint: 'medium-clear',
    subtitle: '最意外的是 provide：提供，和“看”有什么关系？',
    instruction: defaultInstruction,
  },
  {
    id: 'twist-a',
    text: 'pro 向前，V I D 看：提前看到，所以预先准备，就是提供。',
    emotionInstruction: '恍然大悟的语气，一步一步推出来。',
    speedHint: 'fast-clear',
    subtitle: 'pro 向前 + vid 看 → 提前看到 → 预先准备 → 提供',
    instruction: defaultInstruction,
  },
  {
    id: 'overview',
    text: '五个高考词，一个词根：看。',
    emotionInstruction: '收拢全图，满足感。',
    speedHint: 'medium-clear',
    subtitle: '五个高考词，一个词根：看',
    instruction: defaultInstruction,
  },
  {
    id: 'homework',
    text: '最后一题贴在白板上了，答案写在评论区。',
    emotionInstruction: '轻松收尾，留个作业。',
    speedHint: 'fast-clear',
    subtitle: '最后一题贴在白板上，答案写在评论区',
    instruction: defaultInstruction,
  },
];

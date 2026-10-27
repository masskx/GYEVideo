export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-ject',
  meaning: '投 / 扔',
  explanation: '由 ject 派生出“投出、抛出、注入、目标、主题”等含义。',
};

export const words: RootWord[] = [
  {word: 'reject', phonetic: '/rɪˈdʒekt/', partOfSpeech: 'v.', meaning: '拒绝；排斥'},
  {word: 'object', phonetic: '/ˈɒbdʒekt/', partOfSpeech: 'n.', meaning: '物体；目标'},
  {word: 'subject', phonetic: '/ˈsʌbdʒekt/', partOfSpeech: 'n.', meaning: '主题；学科'},
  {word: 'project', phonetic: '/ˈprɒdʒekt/', partOfSpeech: 'v.', meaning: '投影；预测'},
  {word: 'inject', phonetic: '/ɪnˈdʒekt/', partOfSpeech: 'v.', meaning: '注射；注入'},
  {word: 'eject', phonetic: '/iˈdʒekt/', partOfSpeech: 'v.', meaning: '弹出；驱逐'},
  {word: 'abject', phonetic: '/ˈæbdʒekt/', partOfSpeech: 'adj.', meaning: '卑劣的；可怜的'},
  {word: 'deject', phonetic: '/dɪˈdʒekt/', partOfSpeech: 'v.', meaning: '使沮丧'},
];

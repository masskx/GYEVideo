export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-tain / -ten',
  meaning: 'hold / 握住，保持',
  explanation:
    'tain 和 ten 像一切都围着"握住、保持"转：contain 是握在一起，maintain 是握着不放，obtain 是握住到手，retain 是往回握住，sustain 是撑住。',
};

export const words: RootWord[] = [
  {word: 'contain', phonetic: '/kənˈteɪn/', partOfSpeech: 'v.', meaning: '包含；容纳；控制'},
  {word: 'maintain', phonetic: '/meɪnˈteɪn/', partOfSpeech: 'v.', meaning: '维持；保持；维护'},
  {word: 'obtain', phonetic: '/əbˈteɪn/', partOfSpeech: 'v.', meaning: '获得；得到'},
  {word: 'retain', phonetic: '/rɪˈteɪn/', partOfSpeech: 'v.', meaning: '保留；保持；记住'},
  {word: 'sustain', phonetic: '/səˈsteɪn/', partOfSpeech: 'v.', meaning: '支撑；维持；承受'},
  {word: 'entertain', phonetic: '/ˌentərˈteɪn/', partOfSpeech: 'v.', meaning: '娱乐；招待；使感兴趣'},
  {word: 'detain', phonetic: '/dɪˈteɪn/', partOfSpeech: 'v.', meaning: '拘留；扣留；耽搁'},
  {word: 'content', phonetic: '/ˈkɑːntent/', partOfSpeech: 'n./adj.', meaning: '内容；满足的；满意的'},
];

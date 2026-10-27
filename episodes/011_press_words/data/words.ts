export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-press',
  meaning: 'press / 压，按',
  explanation:
    'press 像一只手往下按：压在一起就是压缩，往下压就是压制，往外压出来就是表达，压进脑子里就留下印象。',
};

export const words: RootWord[] = [
  {word: 'press', phonetic: '/pres/', partOfSpeech: 'v./n.', meaning: '压，按；新闻界'},
  {word: 'compress', phonetic: '/kəmˈpres/', partOfSpeech: 'v.', meaning: '压缩；压到一起'},
  {word: 'suppress', phonetic: '/səˈpres/', partOfSpeech: 'v.', meaning: '压制，镇压；压下去'},
  {word: 'express', phonetic: '/ɪkˈspres/', partOfSpeech: 'v.', meaning: '表达；把想法推出去'},
  {word: 'depress', phonetic: '/dɪˈpres/', partOfSpeech: 'v.', meaning: '使沮丧；往下压'},
  {word: 'impress', phonetic: '/ɪmˈpres/', partOfSpeech: 'v.', meaning: '给人印象；压进脑子里'},
  {word: 'pressure', phonetic: '/ˈpreʃər/', partOfSpeech: 'n.', meaning: '压力；被压的力量'},
  {word: 'impression', phonetic: '/ɪmˈpreʃn/', partOfSpeech: 'n.', meaning: '印象；压出来的印记'},
];

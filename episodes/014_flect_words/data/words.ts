export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-flect / -flex',
  meaning: 'bend / 弯曲',
  explanation:
    'flect 和 flex 都像一条线被弯了一下：弯就是 flex，能弯就是 flexible，弯回去就是 reflect，弯开就是 deflect，声音拐弯就是 inflect。',
};

export const words: RootWord[] = [
  {word: 'flex', phonetic: '/fleks/', partOfSpeech: 'v./n.', meaning: '弯曲；伸缩'},
  {word: 'flexible', phonetic: '/ˈfleksəbl/', partOfSpeech: 'adj.', meaning: '灵活的；能弯的'},
  {word: 'reflect', phonetic: '/rɪˈflekt/', partOfSpeech: 'v.', meaning: '反射，反映；弯回去'},
  {word: 'reflection', phonetic: '/rɪˈflekʃn/', partOfSpeech: 'n.', meaning: '反射；倒影；思考'},
  {word: 'deflect', phonetic: '/dɪˈflekt/', partOfSpeech: 'v.', meaning: '使偏转；弯开'},
  {word: 'inflect', phonetic: '/ɪnˈflekt/', partOfSpeech: 'v.', meaning: '变调；让声音拐弯'},
  {word: 'reflex', phonetic: '/ˈriːfleks/', partOfSpeech: 'n.', meaning: '反射动作；自动弯回'},
  {word: 'reflexive', phonetic: '/rɪˈfleksɪv/', partOfSpeech: 'adj.', meaning: '反身的；反射性的'},
];

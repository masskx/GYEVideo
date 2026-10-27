export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-tract',
  meaning: 'pull / 拉，拖',
  explanation: 'tract 像一只手在拉：拉过来、拉出去、拉到一起、拉走注意力，方向一变，词义就变。',
};

export const words: RootWord[] = [
  {word: 'attract', phonetic: '/əˈtrækt/', partOfSpeech: 'v.', meaning: '吸引；拉过来'},
  {word: 'extract', phonetic: '/ɪkˈstrækt/', partOfSpeech: 'v.', meaning: '提取；拉出来'},
  {word: 'contract', phonetic: '/kənˈtrækt/', partOfSpeech: 'v./n.', meaning: '收缩；合同'},
  {word: 'subtract', phonetic: '/səbˈtrækt/', partOfSpeech: 'v.', meaning: '减去；拉走一部分'},
  {word: 'distract', phonetic: '/dɪˈstrækt/', partOfSpeech: 'v.', meaning: '分散注意力；拉开'},
  {word: 'retract', phonetic: '/rɪˈtrækt/', partOfSpeech: 'v.', meaning: '收回；拉回来'},
  {word: 'traction', phonetic: '/ˈtrækʃn/', partOfSpeech: 'n.', meaning: '牵引力；拉力'},
  {word: 'tractor', phonetic: '/ˈtræktər/', partOfSpeech: 'n.', meaning: '拖拉机；用来拉的机器'},
];

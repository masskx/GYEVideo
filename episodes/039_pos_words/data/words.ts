export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-pos / -pon',
  meaning: 'put / place / 放置',
  explanation:
    'pos / pon 这条线，本质都在说放。position 是放出来的位置，deposit 是放下去，oppose 是放到对面，postpone 是放到后面。',
};

export const words: RootWord[] = [
  {word: 'position', rootChunk: 'posit', phonetic: '/pəˈzɪʃən/', partOfSpeech: 'n./v.', meaning: '位置；姿态；放置'},
  {word: 'deposit', rootChunk: 'posit', phonetic: '/dɪˈpɑːzɪt/', partOfSpeech: 'v./n.', meaning: '存放；存款；押金'},
  {word: 'compose', rootChunk: 'pose', phonetic: '/kəmˈpoʊz/', partOfSpeech: 'v.', meaning: '组成；创作；使镇定'},
  {word: 'expose', rootChunk: 'pose', phonetic: '/ɪkˈspoʊz/', partOfSpeech: 'v.', meaning: '暴露；揭露；使接触'},
  {word: 'oppose', rootChunk: 'pose', phonetic: '/əˈpoʊz/', partOfSpeech: 'v.', meaning: '反对；对抗'},
  {word: 'propose', rootChunk: 'pose', phonetic: '/prəˈpoʊz/', partOfSpeech: 'v.', meaning: '提议；提出；求婚'},
  {word: 'postpone', rootChunk: 'pone', phonetic: '/poʊstˈpoʊn/', partOfSpeech: 'v.', meaning: '推迟；延后'},
  {word: 'component', rootChunk: 'ponen', phonetic: '/kəmˈpoʊnənt/', partOfSpeech: 'n.', meaning: '组成部分；零件；成分'},
];

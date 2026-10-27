export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-script / -scrib',
  meaning: 'write / 写',
  explanation: 'script 和 scrib 都围绕“写”：写下来、描述出来、签名订阅、医生写方子、手写稿。',
};

export const words: RootWord[] = [
  {word: 'script', phonetic: '/skript/', partOfSpeech: 'n.', meaning: '剧本；写好的文本'},
  {word: 'describe', phonetic: '/dɪˈskraɪb/', partOfSpeech: 'v.', meaning: '描述；写下来说明'},
  {word: 'subscribe', phonetic: '/səbˈskraɪb/', partOfSpeech: 'v.', meaning: '订阅；签名同意'},
  {word: 'prescription', phonetic: '/prɪˈskrɪpʃn/', partOfSpeech: 'n.', meaning: '处方；提前写好的医嘱'},
  {word: 'manuscript', phonetic: '/ˈmænjuskrɪpt/', partOfSpeech: 'n.', meaning: '手稿；手写文本'},
  {word: 'inscribe', phonetic: '/ɪnˈskraɪb/', partOfSpeech: 'v.', meaning: '题写；刻写进去'},
  {word: 'transcribe', phonetic: '/trænˈskraɪb/', partOfSpeech: 'v.', meaning: '转录；照着写下来'},
  {word: 'scribble', phonetic: '/ˈskrɪbl/', partOfSpeech: 'v.', meaning: '潦草地写；乱写'},
];

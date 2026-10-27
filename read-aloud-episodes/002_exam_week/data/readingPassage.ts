export type StoryTextToken = {
  type: 'text';
  text: string;
};

export type StoryWordToken = {
  type: 'word';
  wordId: string;
};

export type StoryToken = StoryTextToken | StoryWordToken;

export type StoryLine = {
  id: string;
  tokens: StoryToken[];
};

export type ReadingTargetWord = {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  scenePhrase: string;
  sceneMeaning: string;
  order: number;
};

export type ReadingPassage = {
  episodeId: string;
  title: string;
  topicLabel: string;
  challengeLabel: string;
  sourceText: string;
  sceneHook: string;
  memoryLine: string;
  storyLines: StoryLine[];
  targetWords: ReadingTargetWord[];
};

export const readingPassage: ReadingPassage = {
  episodeId: '002_exam_week',
  title: '期末周脑子宕机，12 个词记住崩溃感',
  topicLabel: '情景式背单词',
  challengeLabel: '30秒记12词',
  sourceText:
    '大学期末考试周里，overwhelm, procrastinate, prioritize, absorb, anxiety, cram, collapse, coherent, drained, scrape, recover, persist 这些词都有真实画面。',
  sceneHook: '一个大学生从期末周崩溃边缘，把自己一点点拽回来。',
  memoryLine: '压垮 -> 拖延 -> 硬背 -> 崩溃 -> 继续撑',
  storyLines: [
    {
      id: 'l1',
      tokens: [
        {type: 'text', text: '期末周，复习范围 '},
        {type: 'word', wordId: 'overwhelm'},
        {type: 'text', text: ' 我，越慌越 '},
        {type: 'word', wordId: 'procrastinate'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l2',
      tokens: [
        {type: 'text', text: '打开书，先 '},
        {type: 'word', wordId: 'prioritize'},
        {type: 'text', text: ' 重点，不然全都 '},
        {type: 'word', wordId: 'absorb'},
        {type: 'text', text: ' 不进脑子。'},
      ],
    },
    {
      id: 'l3',
      tokens: [
        {type: 'text', text: '群聊一刷，'},
        {type: 'word', wordId: 'anxiety'},
        {type: 'text', text: ' 拉满，只能通宵 '},
        {type: 'word', wordId: 'cram'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l4',
      tokens: [
        {type: 'text', text: '凌晨三点，脑子快 '},
        {type: 'word', wordId: 'collapse'},
        {type: 'text', text: '，答案也不 '},
        {type: 'word', wordId: 'coherent'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l5',
      tokens: [
        {type: 'text', text: '考完直接 '},
        {type: 'word', wordId: 'drained'},
        {type: 'text', text: '，只求 '},
        {type: 'word', wordId: 'scrape'},
        {type: 'text', text: ' 过线。'},
      ],
    },
    {
      id: 'l6',
      tokens: [
        {type: 'text', text: '睡一觉 '},
        {type: 'word', wordId: 'recover'},
        {type: 'text', text: '，下一科继续 '},
        {type: 'word', wordId: 'persist'},
        {type: 'text', text: '。'},
      ],
    },
  ],
  targetWords: [
    {
      id: 'overwhelm',
      word: 'overwhelm',
      phonetic: '/ˌoʊvərˈwelm/',
      partOfSpeech: 'v.',
      meaning: '压倒，使不知所措',
      scenePhrase: '复习范围压过来',
      sceneMeaning: '不是题多，是多到脑子先投降。',
      order: 1,
    },
    {
      id: 'procrastinate',
      word: 'procrastinate',
      phonetic: '/proʊˈkræstɪneɪt/',
      partOfSpeech: 'v.',
      meaning: '拖延',
      scenePhrase: '越慌越拖',
      sceneMeaning: '明知道该学，但手还是点开手机。',
      order: 2,
    },
    {
      id: 'prioritize',
      word: 'prioritize',
      phonetic: '/praɪˈɔːrətaɪz/',
      partOfSpeech: 'v.',
      meaning: '优先处理',
      scenePhrase: '先抓重点',
      sceneMeaning: '救命时刻不能平均用力。',
      order: 3,
    },
    {
      id: 'absorb',
      word: 'absorb',
      phonetic: '/əbˈzɔːrb/',
      partOfSpeech: 'v.',
      meaning: '吸收，理解',
      scenePhrase: '知识进不去脑子',
      sceneMeaning: '看了不等于学进去了。',
      order: 4,
    },
    {
      id: 'anxiety',
      word: 'anxiety',
      phonetic: '/æŋˈzaɪəti/',
      partOfSpeech: 'n.',
      meaning: '焦虑',
      scenePhrase: '群聊越看越慌',
      sceneMeaning: '别人一句复习完了，就能把你吓醒。',
      order: 5,
    },
    {
      id: 'cram',
      word: 'cram',
      phonetic: '/kræm/',
      partOfSpeech: 'v.',
      meaning: '临时猛学，突击',
      scenePhrase: '通宵抱佛脚',
      sceneMeaning: '短时间硬塞知识进脑子。',
      order: 6,
    },
    {
      id: 'collapse',
      word: 'collapse',
      phonetic: '/kəˈlæps/',
      partOfSpeech: 'v./n.',
      meaning: '崩溃，垮掉',
      scenePhrase: '脑子快垮了',
      sceneMeaning: '不是累，是系统快关机。',
      order: 7,
    },
    {
      id: 'coherent',
      word: 'coherent',
      phonetic: '/koʊˈhɪrənt/',
      partOfSpeech: 'adj.',
      meaning: '连贯的，清楚的',
      scenePhrase: '答案说不成句',
      sceneMeaning: '每个字都认识，但组织不起来。',
      order: 8,
    },
    {
      id: 'drained',
      word: 'drained',
      phonetic: '/dreɪnd/',
      partOfSpeech: 'adj.',
      meaning: '精疲力竭的',
      scenePhrase: '考完被榨干',
      sceneMeaning: '身体和情绪都没电了。',
      order: 9,
    },
    {
      id: 'scrape',
      word: 'scrape',
      phonetic: '/skreɪp/',
      partOfSpeech: 'v.',
      meaning: '勉强通过',
      scenePhrase: '低空飘过',
      sceneMeaning: '不求高分，只求别挂。',
      order: 10,
    },
    {
      id: 'recover',
      word: 'recover',
      phonetic: '/rɪˈkʌvər/',
      partOfSpeech: 'v.',
      meaning: '恢复',
      scenePhrase: '睡醒回血',
      sceneMeaning: '状态一点点从废掉里回来。',
      order: 11,
    },
    {
      id: 'persist',
      word: 'persist',
      phonetic: '/pərˈsɪst/',
      partOfSpeech: 'v.',
      meaning: '坚持，持续',
      scenePhrase: '下一科继续撑',
      sceneMeaning: '不是热血，是还没考完只能继续。',
      order: 12,
    },
  ],
};

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
  episodeId: '004_group_project',
  title: '小组作业全落我头上，12 个词记住这种窒息',
  topicLabel: '情景式背单词',
  challengeLabel: '28秒记12词',
  sourceText:
    '大学生小组作业翻车现场：assigned、contribute、deadline、overwhelmed、ghosted、solo、panic、resentment、submit、credit、exhausted、survive 串起一次被坑的完整情绪链。',
  sceneHook: '任务刚分下来大家都说会做，真到动手时只剩你一个人扛。',
  memoryLine: '分任务 -> 没人动 -> 催消失 -> 一人扛 -> 慌+怨 -> 提交 -> 功劳均摊 -> 活下来',
  storyLines: [
    {
      id: 'l1',
      tokens: [
        {type: 'text', text: '小组作业刚 '},
        {type: 'word', wordId: 'assigned'},
        {type: 'text', text: '，群里却没人 '},
        {type: 'word', wordId: 'contribute'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l2',
      tokens: [
        {type: 'word', wordId: 'deadline'},
        {type: 'text', text: ' 逼近，你已经 '},
        {type: 'word', wordId: 'overwhelmed'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l3',
      tokens: [
        {type: 'text', text: '催进度全被 '},
        {type: 'word', wordId: 'ghosted'},
        {type: 'text', text: '，只能 '},
        {type: 'word', wordId: 'solo'},
        {type: 'text', text: ' 扛。'},
      ],
    },
    {
      id: 'l4',
      tokens: [
        {type: 'word', wordId: 'panic'},
        {type: 'text', text: ' 和 '},
        {type: 'word', wordId: 'resentment'},
        {type: 'text', text: ' 一起上头。'},
      ],
    },
    {
      id: 'l5',
      tokens: [
        {type: 'text', text: '熬夜 '},
        {type: 'word', wordId: 'submit'},
        {type: 'text', text: '，大家平分 '},
        {type: 'word', wordId: 'credit'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l6',
      tokens: [
        {type: 'text', text: '你 '},
        {type: 'word', wordId: 'exhausted'},
        {type: 'text', text: ' 到极点，但还是 '},
        {type: 'word', wordId: 'survive'},
        {type: 'text', text: ' 了。'},
      ],
    },
  ],
  targetWords: [
    {
      id: 'assigned',
      word: 'assigned',
      phonetic: '/əˈsaɪnd/',
      partOfSpeech: 'v.',
      meaning: '分配，布置',
      scenePhrase: '任务被布置下来',
      sceneMeaning: '老师一发布，所有人说好好做，故事从这里开始。',
      order: 1,
    },
    {
      id: 'contribute',
      word: 'contribute',
      phonetic: '/kənˈtrɪbjuːt/',
      partOfSpeech: 'v.',
      meaning: '贡献，出力',
      scenePhrase: '只有我想认真做',
      sceneMeaning: '说好一起做，最后真的想出力的只有一个人。',
      order: 2,
    },
    {
      id: 'deadline',
      word: 'deadline',
      phonetic: '/ˈdedlaɪn/',
      partOfSpeech: 'n.',
      meaning: '截止日期',
      scenePhrase: '压力开始堆积',
      sceneMeaning: '倒计时滴答响，别人还没发一个字。',
      order: 3,
    },
    {
      id: 'overwhelmed',
      word: 'overwhelmed',
      phonetic: '/ˌoʊvərˈwelmd/',
      partOfSpeech: 'adj.',
      meaning: '被压垮了',
      scenePhrase: '一个人扛所有人的活',
      sceneMeaning: '不只是事情多，是那种被人放弃后的双重重量。',
      order: 4,
    },
    {
      id: 'ghosted',
      word: 'ghosted',
      phonetic: '/ˈɡoʊstɪd/',
      partOfSpeech: 'v.',
      meaning: '被消失，被无视',
      scenePhrase: '催了没人回',
      sceneMeaning: '消息发出去，对方看到了，就是不回。',
      order: 5,
    },
    {
      id: 'solo',
      word: 'solo',
      phonetic: '/ˈsoʊloʊ/',
      partOfSpeech: 'adv./adj.',
      meaning: '单独，一个人',
      scenePhrase: '一个人写完全部',
      sceneMeaning: '不是自愿的单飞，是被逼的。',
      order: 6,
    },
    {
      id: 'panic',
      word: 'panic',
      phonetic: '/ˈpænɪk/',
      partOfSpeech: 'n.',
      meaning: '慌乱，恐慌',
      scenePhrase: '截止前夜的心跳',
      sceneMeaning: '不是正常紧张，是那种快撑不住的感觉。',
      order: 7,
    },
    {
      id: 'resentment',
      word: 'resentment',
      phonetic: '/rɪˈzentmənt/',
      partOfSpeech: 'n.',
      meaning: '积怨，不满',
      scenePhrase: '凭什么全是我做',
      sceneMeaning: '说不出口，但一直压在心里。',
      order: 8,
    },
    {
      id: 'submit',
      word: 'submit',
      phonetic: '/səbˈmɪt/',
      partOfSpeech: 'v.',
      meaning: '提交',
      scenePhrase: '终于上传成功',
      sceneMeaning: '按下提交那一刻，又累又解脱。',
      order: 9,
    },
    {
      id: 'credit',
      word: 'credit',
      phonetic: '/ˈkredɪt/',
      partOfSpeech: 'n.',
      meaning: '学分，功劳',
      scenePhrase: '大家平分了',
      sceneMeaning: '你做了 100%，所有人拿了同样的分。',
      order: 10,
    },
    {
      id: 'exhausted',
      word: 'exhausted',
      phonetic: '/ɪɡˈzɔːstɪd/',
      partOfSpeech: 'adj.',
      meaning: '彻底耗尽了',
      scenePhrase: '交完作业的那种空',
      sceneMeaning: '不只是累，是那种被掏空的感觉。',
      order: 11,
    },
    {
      id: 'survive',
      word: 'survive',
      phonetic: '/sərˈvaɪv/',
      partOfSpeech: 'v.',
      meaning: '熬过去，活下来',
      scenePhrase: '这次又撑过来了',
      sceneMeaning: '不是胜利，是一种带着疲惫的坚持。',
      order: 12,
    },
  ],
};

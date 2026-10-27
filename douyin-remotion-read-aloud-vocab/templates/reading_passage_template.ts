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

export const readingPassage = {
  episodeId: '<episode_id>',
  title: '<short title>',
  topicLabel: '情景式背单词',
  challengeLabel: '25秒记12词',
  sourceText: '<source or scene summary>',
  sceneHook: '<why this scene is relatable>',
  memoryLine: '<final memory chain>',
  storyLines: [] as StoryLine[],
  targetWords: [] as ReadingTargetWord[],
};

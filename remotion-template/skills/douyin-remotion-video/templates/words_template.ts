export type EpisodeItem = {
  id: string;
  keyword: string;
  phonetic?: string;
  label?: string;
  meaning: string;
  explanation: string;
};

export const episodeInfo = {
  title: '<Episode title>',
  coreKeyword: '<Core word root, affix, contrast, or memory formula>',
  meaning: '<Short Chinese meaning>',
  explanation: '<One-sentence explanation>',
};

export const episodeItems: EpisodeItem[] = [
  {
    id: 'item-1',
    keyword: '<keyword>',
    phonetic: '<optional phonetic>',
    label: '<optional part of speech or category>',
    meaning: '<short meaning>',
    explanation: '<short spoken explanation>',
  },
];

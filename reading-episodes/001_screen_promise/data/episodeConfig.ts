export const episodeConfig: EpisodeConfig = {
  type: 'reading-picture-book',
  exam: 'gaokao',
  episodeId: '001_screen_promise',
  exportBaseName: '001_screen_promise',
  durationTargetSeconds: 65,
  width: 1080,
  height: 1920,
  fps: 30,
  // The score is synthesized per episode (npm run audio); bgmId is only the fallback.
  bgmId: 'tech_003',
  bgmVolume: 0.45,
  bgmDuckingFactor: 0.55,
  voiceVolume: 1.0,
  sfxVolume: 0.45,
  cover: {
    creatorName: '小猪盖被',
    badgeText: '英文绘本精读',
    headline: '小猪和半夜的屏幕',
    subHeadline: '一个英文小故事，6 个高考词',
    retentionPrompt: '读完来答一道阅读题',
    highlightWords: ['promise', 'distracted', 'exhausted', 'determined', 'routine', 'achieve'],
  },
};

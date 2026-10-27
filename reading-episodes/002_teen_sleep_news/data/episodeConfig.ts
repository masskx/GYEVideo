export const episodeConfig: EpisodeConfig = {
  type: 'reading-caption-news',
  episodeId: '002_teen_sleep_news',
  exportBaseName: '002_teen_sleep_news',
  durationTargetSeconds: 60,
  width: 1080,
  height: 1920,
  fps: 30,
  // The score is synthesized per episode (npm run audio); bgmId is only the fallback.
  bgmId: 'tech_004',
  bgmVolume: 0.45,
  bgmDuckingFactor: 0.55,
  voiceVolume: 1.0,
  sfxVolume: 0.5,
  cover: {
    creatorName: '小猪盖被',
    badgeText: '双语新闻阅读',
    headline: '只有 1/4 的高中生睡够了',
    subHeadline: 'Why Teens Need More Sleep',
    retentionPrompt: '你每天睡几个小时？',
    highlightWords: ['expert', 'average', 'store', 'memory', 'actually'],
  },
};

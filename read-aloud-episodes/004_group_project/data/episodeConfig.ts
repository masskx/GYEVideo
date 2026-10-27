import type {EpisodeConfig} from '../../../remotion-template/src/data/episodeConfig';

export const episodeConfig: EpisodeConfig = {
  type: 'read-aloud-vocab',
  episodeId: '004_group_project',
  exportBaseName: '004_group_project',
  durationTargetSeconds: 28,
  width: 960,
  height: 720,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.16,
  bgmSafetyCap: 0.2,
  bgmDuckingFactor: 0.72,
  voiceVolume: 1,
  sfxVolume: 0.12,
  cover: {
    creatorName: '小猪盖被',
    badgeText: '情景式背单词',
    headline: '小组作业全落我头上',
    subHeadline: '大学生窒息现场，28秒记12词',
    memoryLine: '分任务 -> 没人动 -> 催消失 -> 一人扛 -> 提交 -> 活下来',
    retentionPrompt: '中文故事嵌英文词，刷到就记住',
    highlightWords: ['ghosted', 'overwhelmed', 'resentment', 'survive'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};

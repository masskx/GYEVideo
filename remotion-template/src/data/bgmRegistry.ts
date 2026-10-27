export type BgmType = 'energetic' | 'light' | 'suspense' | 'tech' | 'raw';

export type BgmRegistryItem = {
  id: string;
  path: string;
  type: BgmType;
  source: 'local';
  recommendedVolume: number;
  description: string;
  licenseNote: string;
};

const licenseNote = 'Local asset. Please confirm commercial license before publishing.';

export const bgmRegistry = {
  tech_001: {
    id: 'tech_001',
    path: 'bgm/tech/tech_001.mp3',
    type: 'tech',
    source: 'local',
    recommendedVolume: 0.13,
    description: '科技感英语词汇讲解背景音乐',
    licenseNote,
  },
  tech_002: {
    id: 'tech_002',
    path: 'bgm/tech/tech_002.mp3',
    type: 'tech',
    source: 'local',
    recommendedVolume: 0.13,
    description: '科技感英语词汇讲解背景音乐',
    licenseNote,
  },
  suspense_001: {
    id: 'suspense_001',
    path: 'bgm/suspense/suspense_001.mp3',
    type: 'suspense',
    source: 'local',
    recommendedVolume: 0.12,
    description: '悬念开头英语词汇讲解背景音乐',
    licenseNote,
  },
  suspense_002: {
    id: 'suspense_002',
    path: 'bgm/suspense/suspense_002.mp3',
    type: 'suspense',
    source: 'local',
    recommendedVolume: 0.12,
    description: '悬念开头英语词汇讲解背景音乐',
    licenseNote,
  },
  suspense_003: {
    id: 'suspense_003',
    path: 'bgm/suspense/suspense_003.mp3',
    type: 'suspense',
    source: 'local',
    recommendedVolume: 0.12,
    description: '悬念开头英语词汇讲解背景音乐',
    licenseNote,
  },
  tech_003: {
    id: 'tech_003',
    path: 'bgm/tech/tech_003.mp3',
    type: 'tech',
    source: 'local',
    recommendedVolume: 0.13,
    description: '科技感英语词汇讲解背景音乐',
    licenseNote,
  },
  tech_004: {
    id: 'tech_004',
    path: 'bgm/tech/tech_004.mp3',
    type: 'tech',
    source: 'local',
    recommendedVolume: 0.13,
    description: '科技感英语词汇讲解背景音乐',
    licenseNote,
  },
  tech_005: {
    id: 'tech_005',
    path: 'bgm/tech/tech_005.mp3',
    type: 'tech',
    source: 'local',
    recommendedVolume: 0.13,
    description: '科技感英语词汇讲解背景音乐',
    licenseNote,
  },
  tech_006: {
    id: 'tech_006',
    path: 'bgm/tech/tech_006.mp3',
    type: 'tech',
    source: 'local',
    recommendedVolume: 0.13,
    description: '科技感英语词汇讲解背景音乐',
    licenseNote,
  },
} as const satisfies Record<string, BgmRegistryItem>;

export type BgmId = keyof typeof bgmRegistry;

export const bgmIds = Object.keys(bgmRegistry) as BgmId[];

export const getDefaultBgmId = (): BgmId | undefined => {
  if ('energetic_001' in bgmRegistry) {
    return 'energetic_001' as BgmId;
  }

  return bgmIds[0];
};

const getIdsByType = (type: BgmType): BgmId[] => {
  return bgmIds.filter((id) => bgmRegistry[id].type === type);
};

const pickLastByType = (type: BgmType): BgmId | undefined => {
  return getIdsByType(type).at(-1);
};

const getFastScore = (speedHints: string[]) => {
  return speedHints.reduce((score, speedHint) => {
    if (speedHint.includes('very-fast')) {
      return score + 2;
    }

    if (speedHint.includes('fast')) {
      return score + 1;
    }

    return score;
  }, 0);
};

export const getAutoBgmId = ({
  configuredId,
  hookType,
  speedHints,
}: {
  configuredId?: string;
  hookType?: string;
  speedHints?: string[];
}): BgmId | undefined => {
  if (configuredId && configuredId in bgmRegistry) {
    return configuredId as BgmId;
  }

  const hints = speedHints ?? [];
  const fastScore = getFastScore(hints);
  const firstSegmentIsVeryFast = hints[0]?.includes('very-fast') ?? false;
  const prefersSuspense = firstSegmentIsVeryFast && ['misconception', 'mistake_correction', 'exam_panic'].includes(hookType ?? '');

  if (prefersSuspense) {
    return pickLastByType('suspense') ?? pickLastByType('tech') ?? getDefaultBgmId();
  }

  if (fastScore >= Math.max(4, Math.ceil(hints.length * 0.6))) {
    return pickLastByType('tech') ?? pickLastByType('energetic') ?? getDefaultBgmId();
  }

  return pickLastByType('tech') ?? pickLastByType('light') ?? getDefaultBgmId();
};

export const getBgmById = (id: string | undefined): BgmRegistryItem | undefined => {
  if (!id) {
    return undefined;
  }

  return bgmRegistry[id as BgmId];
};

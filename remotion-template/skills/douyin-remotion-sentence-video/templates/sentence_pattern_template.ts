export type ChinglishTrapEpisode = {
  episodeId: string;
  contentType: 'chinglish-trap';
  sentencePattern?: string;
  trap: {
    wrongExpression: string;
    intendedMeaning: string;
    wrongMeaning?: string;
    whyItFails: string;
  };
  fix: {
    naturalExpression: string;
    alternatives?: string[];
    zh: string;
    usageScene: string;
  };
  teachingPoint: {
    simpleRule: string;
    avoidSaying: string;
    sayThis: string;
  };
  visualPlan: {
    openingType: 'direct-slap' | 'guess-trap' | 'wrong-meaning-twist' | 'native-fix-slam';
    wrongVisual: string;
    fixVisual: string;
    contrastLock: string;
  };
  visualBeats: Array<{
    segmentId: string;
    scene: 'trap-open' | 'wrong-smash' | 'meaning-punch' | 'native-fix' | 'usage-scene' | 'lock';
    primaryText: string;
    secondaryText?: string;
    motion: string;
    sfx?: string;
    wrongState?: 'normal' | 'crossed' | 'glitched' | 'crushed';
    rightState?: 'hidden' | 'revealing' | 'locked';
    cameraMotion?: 'static' | 'push-in' | 'whip' | 'shake';
  }>;
  cover: {
    mainTitle: string;
    wrongLine: string;
    rightLine: string;
  };
};

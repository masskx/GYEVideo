import React from 'react';
import {Audio, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {episodeConfig} from '../data/episodeConfig';
import {getBgmById, getAutoBgmId} from '../data/bgmRegistry';
import {voiceScript} from '../data/voiceScript';
import {getBgmVolume} from '../utils/audioMixing';

const warnedBgmIds = new Set<string>();

const warnMissingBgm = (id: string | undefined) => {
  const key = id ?? '__empty__';
  if (warnedBgmIds.has(key)) {
    return;
  }

  warnedBgmIds.add(key);
  console.warn(
    `[bgm] BGM "${id ?? '(empty)'}" is not registered. Skipping background music.`,
  );
};

export const BackgroundMusic: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const selectedId = getAutoBgmId({
    configuredId: episodeConfig.bgmId,
    hookType: episodeConfig.hook?.type,
    speedHints: voiceScript.map((line) => line.speedHint),
  });
  const bgm = getBgmById(selectedId);

  if (!bgm) {
    warnMissingBgm(selectedId);
    return null;
  }

  const configuredVolume = episodeConfig.bgmVolume ?? bgm.recommendedVolume;
  const defaultSafetyCap =
    episodeConfig.type === 'sentence-pattern' ? 0.34 : episodeConfig.type === 'read-aloud-vocab' ? 0.22 : 0.32;
  const safetyCap = episodeConfig.bgmSafetyCap ?? defaultSafetyCap;
  const baseVolume = Math.min(configuredVolume, safetyCap);
  const volume = getBgmVolume({frame, fps, baseVolume});

  return <Audio src={staticFile(bgm.path)} loop volume={volume} />;
};

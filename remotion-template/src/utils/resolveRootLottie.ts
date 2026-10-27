import {episodeConfig, type LottiePosition} from '../data/episodeConfig';
import {rootInfo} from '../data/words';
import {getLottieForRoot} from '../config/rootLottieMap';

type RootInfoLike = {
  root?: string;
  roots?: string[];
  wordRoot?: string;
  prefix?: string;
  suffix?: string;
  morphemes?: string[];
  wordParts?: string[];
  lottie?: {
    fileName?: string;
    visible?: boolean;
    position?: LottiePosition;
  };
};

type EpisodeConfigLike = typeof episodeConfig & {
  lottie?: {
    fileName?: string;
    visible?: boolean;
    position?: LottiePosition;
  };
};

const pickFirstRootToken = (value?: string | null): string | null => {
  if (!value) {
    return null;
  }

  const cleaned = value
    .replace(/[()]/g, ' ')
    .replace(/-/g, ' ')
    .split(/[\/,，|]/)
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean)[0];

  if (!cleaned) {
    return null;
  }

  const alpha = cleaned.match(/[a-z]+/g)?.join('') ?? '';
  return alpha || null;
};

const inferPrimaryRoot = (info: RootInfoLike): string | null => {
  const candidates: Array<string | undefined | null> = [
    info.wordRoot,
    info.root,
    info.roots?.[0],
    info.prefix,
    info.suffix,
    info.morphemes?.[0],
    info.wordParts?.[0],
  ];

  for (const candidate of candidates) {
    const token = pickFirstRootToken(candidate);
    if (token) {
      return token;
    }
  }

  return null;
};

export const resolveRootLottieConfig = () => {
  const typedRootInfo = rootInfo as RootInfoLike;
  const typedEpisodeConfig = episodeConfig as EpisodeConfigLike;

  const fileName =
    typedEpisodeConfig.lottie?.fileName ??
    typedRootInfo.lottie?.fileName ??
    getLottieForRoot(inferPrimaryRoot(typedRootInfo) ?? undefined);

  const visible = typedEpisodeConfig.lottie?.visible ?? typedRootInfo.lottie?.visible ?? true;
  const position = typedEpisodeConfig.lottie?.position ?? typedRootInfo.lottie?.position ?? 'right-bottom';

  return {
    fileName,
    visible: Boolean(fileName) && visible,
    position,
  };
};

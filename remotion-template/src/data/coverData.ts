import {getAnimalIconById} from './animalIconRegistry';
import {episodeConfig} from './episodeConfig';
import {rootInfo, words} from './words';

const DEFAULT_CREATOR_NAME = '小猪盖被';
const DEFAULT_BADGE_TEXT = '3秒记词根';
// 'cute_pig' is no longer an icon: any pig id renders as the brand pig (src/brand/BrandAvatar.tsx).
const DEFAULT_ACCENT_ANIMAL = 'cute_pig';

type CompatibleEpisodeConfig = {
  hook?: {
    mainText?: string;
    subText?: string;
    flashWords?: string[];
  };
  cover?: {
    creatorName?: string;
    badgeText?: string;
    headline?: string;
    subHeadline?: string;
    memoryLine?: string;
    retentionPrompt?: string;
    highlightWords?: string[];
    accentAnimalId?: string;
    creatorAnimalId?: string;
  };
};

const compatibleEpisodeConfig = episodeConfig as CompatibleEpisodeConfig;
const coverConfig = compatibleEpisodeConfig.cover;
const hookConfig = compatibleEpisodeConfig.hook;

const normalizeText = (text: string | undefined) => {
  if (!text) {
    return '';
  }

  return text.replace(/`/g, '').replace(/\s+/g, ' ').trim();
};

const toRootToken = () => normalizeText(rootInfo.root).replace(/-/g, '').replace(/\s+/g, ' ').trim();

const deriveHeadline = () => {
  const configured = normalizeText(coverConfig?.headline);
  if (configured) {
    return configured;
  }

  const hookMain = normalizeText(hookConfig?.mainText);
  if (hookMain) {
    return hookMain;
  }

  return `抓住 ${toRootToken()}，一眼串起一组词`;
};

const deriveSubHeadline = () => {
  const configured = normalizeText(coverConfig?.subHeadline);
  if (configured) {
    return configured;
  }

  const hookSub = normalizeText(hookConfig?.subText);
  if (hookSub) {
    return hookSub;
  }

  return '别再一个个死记，先记住真正的词根意思';
};

const deriveMemoryLine = () => {
  const configured = normalizeText(coverConfig?.memoryLine);
  if (configured) {
    return configured;
  }

  return `看到 ${toRootToken()}，先想 ${normalizeText(rootInfo.meaning)}`;
};

const deriveHighlightWords = () => {
  const configured = coverConfig?.highlightWords
    ?.map((word: string) => normalizeText(word))
    .filter(Boolean);

  if (configured && configured.length > 0) {
    return configured.slice(0, 3);
  }

  const hookWords = hookConfig?.flashWords?.map((word: string) => normalizeText(word)).filter(Boolean);
  if (hookWords && hookWords.length > 0) {
    return hookWords.slice(0, 3);
  }

  return words.slice(0, 3).map((word) => word.word);
};

const pickAnimalId = (candidate: string | undefined, fallback: string) => {
  if (candidate && getAnimalIconById(candidate)) {
    return candidate;
  }

  return fallback;
};

export const coverData = {
  creatorName: normalizeText(coverConfig?.creatorName) || DEFAULT_CREATOR_NAME,
  badgeText: normalizeText(coverConfig?.badgeText) || DEFAULT_BADGE_TEXT,
  headline: deriveHeadline(),
  subHeadline: deriveSubHeadline(),
  memoryLine: deriveMemoryLine(),
  retentionPrompt: normalizeText(coverConfig?.retentionPrompt),
  highlightWords: deriveHighlightWords(),
  accentAnimalId: pickAnimalId(coverConfig?.accentAnimalId, DEFAULT_ACCENT_ANIMAL),
  creatorAnimalId: pickAnimalId(coverConfig?.creatorAnimalId, DEFAULT_ACCENT_ANIMAL),
  rootText: toRootToken(),
  rootMeaning: normalizeText(rootInfo.meaning),
};

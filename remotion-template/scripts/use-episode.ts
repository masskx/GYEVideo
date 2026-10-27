import {cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {basename, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const factoryDir = resolve(templateDir, '..');
const cliArgs = process.argv.slice(2).filter((arg) => arg && !arg.startsWith('--'));
const episodeArg = cliArgs.at(-1) ?? process.env.EPISODE;

if (!episodeArg) {
  console.error('Usage: npm run episode:use -- ../episodes/001_ject_words_douyin_v1');
  console.error('Or set EPISODE=../episodes/001_ject_words_douyin_v1');
  process.exit(1);
}

const episodeDir = resolve(templateDir, episodeArg);
const dataDir = join(episodeDir, 'data');
const audioDir = join(episodeDir, 'audio');

if (!existsSync(episodeDir)) {
  console.error(`Episode not found: ${episodeDir}`);
  process.exit(1);
}

if (!existsSync(dataDir)) {
  console.error(`Episode data folder not found: ${dataDir}`);
  process.exit(1);
}

const targetDataDir = join(templateDir, 'src', 'data');
const targetAudioDir = join(templateDir, 'public', 'audio');
const activeEpisodePath = join(templateDir, '.active-episode.json');

const deriveExportBaseName = (episodeSlug: string) => {
  const parts = episodeSlug.split('_');
  const lastPart = parts.at(-1);

  if (lastPart && /^v\d+$/i.test(lastPart)) {
    if (parts.length >= 5) {
      return parts.slice(0, -2).join('_');
    }

    return parts.slice(0, -1).join('_');
  }

  return episodeSlug;
};

const inferEpisodeType = (sourceContent: string) => {
  if (sourceContent.includes("type: 'sentence-pattern'")) {
    return 'sentence-pattern';
  }

  if (sourceContent.includes("type: 'read-aloud-vocab'")) {
    return 'read-aloud-vocab';
  }

  return 'root-word';
};

const CANONICAL_EPISODE_CONFIG_TYPES = `export type HookType =
  | 'misconception'
  | 'stop_hard_memorizing'
  | 'three_second_challenge'
  | 'mistake_correction'
  | 'exam_panic'
  | 'word_flash'
  | 'sentence_conflict'
  | 'emotion_release'
  | 'speaking_upgrade';

export type HookTone = 'urgent' | 'curious' | 'exam' | 'playful' | 'serious';

export type HookConfig = {
  type: HookType;
  mainText: string;
  subText: string;
  shockText: string;
  flashWords: string[];
  rootText?: string;
  tone: HookTone;
};

export type CoverConfig = {
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

export type LottiePosition = 'left-bottom' | 'right-bottom' | 'center-bg';

export type LottieConfig = {
  fileName?: string;
  visible?: boolean;
  position?: LottiePosition;
};

export type EpisodeConfig = {
  type: 'root-word' | 'sentence-pattern' | 'read-aloud-vocab';
  episodeId: string;
  exportBaseName: string;
  durationTargetSeconds?: number;
  width?: number;
  height?: number;
  fps?: number;
  bgmId?: string;
  bgmVolume: number;
  bgmSafetyCap?: number;
  bgmDuckingFactor?: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
  cover?: CoverConfig;
  lottie?: LottieConfig;
};
`;

const patchEpisodeConfigContent = (sourceContent: string) => {
  const marker = 'export const episodeConfig';
  const markerIndex = sourceContent.indexOf(marker);

  if (markerIndex === -1) {
    return sourceContent;
  }

  const objectPart = sourceContent.slice(markerIndex).trimStart();
  const activeEpisodeSlug = basename(episodeDir);
  const inferredType = inferEpisodeType(sourceContent);
  const exportBaseName = deriveExportBaseName(activeEpisodeSlug);
  const metadataLines = [
    objectPart.includes('type:') ? null : `  type: '${inferredType}',`,
    objectPart.includes('episodeId:') ? null : `  episodeId: '${activeEpisodeSlug}',`,
    objectPart.includes('exportBaseName:') ? null : `  exportBaseName: '${exportBaseName}',`,
  ].filter(Boolean);

  const patchedObjectPart =
    metadataLines.length === 0
      ? objectPart
      : objectPart.replace(
          /export const episodeConfig:\s*EpisodeConfig\s*=\s*{/,
          (match) => `${match}\n${metadataLines.join('\n')}`,
        );

  return `${CANONICAL_EPISODE_CONFIG_TYPES}\n${patchedObjectPart}\n`;
};

mkdirSync(targetDataDir, {recursive: true});
mkdirSync(targetAudioDir, {recursive: true});

for (const file of [
  'voiceScript.ts',
  'words.ts',
  'sentencePattern.ts',
  'subtitles.ts',
  'readingPassage.ts',
  'generatedVoiceTimeline.ts',
  'episodeConfig.ts',
]) {
  const source = join(dataDir, file);
  if (existsSync(source)) {
    if (file === 'episodeConfig.ts') {
      writeFileSync(join(targetDataDir, file), patchEpisodeConfigContent(readFileSync(source, 'utf8')), 'utf8');
      continue;
    }

    cpSync(source, join(targetDataDir, file));
  }
}

if (existsSync(audioDir)) {
  if (existsSync(targetAudioDir)) {
    for (const entry of readdirSync(targetAudioDir)) {
      try {
        rmSync(join(targetAudioDir, entry), {
          recursive: true,
          force: true,
          maxRetries: 5,
          retryDelay: 200,
        });
      } catch (error) {
        console.warn(`Skipping cleanup for locked audio path: ${entry}`, error);
      }
    }
  }

  cpSync(audioDir, targetAudioDir, {recursive: true});

  for (const file of ['main-voice.mp3', 'segments.txt']) {
    const source = join(audioDir, file);
    if (existsSync(source)) {
      cpSync(source, join(targetAudioDir, file));
    }
  }
}

const episodeSlug = basename(episodeDir);
writeFileSync(
  activeEpisodePath,
  JSON.stringify(
    {
      episodeDir,
      episodeSlug,
      exportBaseName: deriveExportBaseName(episodeSlug),
    },
    null,
    2,
  ),
  'utf8',
);

console.log(`Synced episode into template: ${episodeDir.replace(factoryDir, '..')}`);

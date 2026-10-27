import {copyFileSync, existsSync, mkdirSync, readFileSync, rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {episodeConfig} from '../src/data/episodeConfig';
import {READ_ALOUD_TIMELINE, readAloudSecondsToFrames} from '../src/readAloudTimeline';
import {SENTENCE_TIMELINE, secondsToFrames} from '../src/sentenceTimeline';

export type RenderMode = 'both' | 'video' | 'cover';

type ActiveEpisodeMeta = {
  episodeDir: string;
  episodeSlug: string;
  exportBaseName: string;
};

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const workspaceDir = fileURLToPath(new URL('../..', import.meta.url));
const activeEpisodePath = join(templateDir, '.active-episode.json');

export const runRender = (renderMode: RenderMode) => {
  if (!existsSync(activeEpisodePath)) {
    console.error('No active episode found. Run `npm run episode:use -- ../episodes/<episode>` first.');
    process.exit(1);
  }

  const activeEpisode = existsSync(activeEpisodePath)
    ? (JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as ActiveEpisodeMeta)
    : null;
  const outDir = join(templateDir, 'out');
  const exportBaseName = episodeConfig.exportBaseName ?? activeEpisode?.exportBaseName ?? episodeConfig.episodeId;
  const exportsDir =
    episodeConfig.type === 'sentence-pattern'
      ? join(workspaceDir, 'sentence-episodes', exportBaseName, 'exports')
      : episodeConfig.type === 'read-aloud-vocab'
        ? join(workspaceDir, 'read-aloud-episodes', exportBaseName, 'exports')
      : join(activeEpisode!.episodeDir, 'exports');
  const videoComposition =
    episodeConfig.type === 'sentence-pattern'
      ? 'SentencePatternVideo'
      : episodeConfig.type === 'read-aloud-vocab'
        ? 'ReadAloudVocabTemplate'
        : 'RootWordTemplate';
  const coverComposition =
    episodeConfig.type === 'sentence-pattern'
      ? 'SentenceCover'
      : episodeConfig.type === 'read-aloud-vocab'
        ? 'ReadAloudCover'
        : 'DouyinCover';
  const videoOutputPath = join(outDir, `${exportBaseName}.mp4`);
  const coverOutputPath = join(outDir, `${exportBaseName}_cover.png`);
  const finalVideoPath = join(exportsDir, `${exportBaseName}.mp4`);
  const finalCoverPath = join(exportsDir, `${exportBaseName}_cover.png`);
  const remotionBin = join(
    templateDir,
    'node_modules',
    '.bin',
    process.platform === 'win32' ? 'remotion.cmd' : 'remotion',
  );

  mkdirSync(outDir, {recursive: true});
  mkdirSync(exportsDir, {recursive: true});

  const renderSentencePreflight = () => {
    const qaDir = join(outDir, 'qa', exportBaseName);
    mkdirSync(qaDir, {recursive: true});

    const checkpoints = [
      {name: '01-hook', frame: secondsToFrames(SENTENCE_TIMELINE.hookStart + 1.0)},
      {name: '02-pattern', frame: secondsToFrames(SENTENCE_TIMELINE.patternStart + 0.8)},
      {name: '03-usage', frame: secondsToFrames(SENTENCE_TIMELINE.reuseStart + 0.8)},
      {name: '04-lock', frame: secondsToFrames(SENTENCE_TIMELINE.lockStart + 0.8)},
      {name: '05-outro', frame: secondsToFrames(SENTENCE_TIMELINE.outroStart + 0.2)},
    ];

    for (const checkpoint of checkpoints) {
      runRemotion([
        'still',
        'src/index.ts',
        videoComposition,
        join(qaDir, `${checkpoint.name}.png`),
        `--frame=${checkpoint.frame}`,
        '--scale=0.35',
        '--image-format=png',
      ]);
    }

    console.log(`Sentence QA stills exported to: ${qaDir}`);
    console.log('Pre-export sentence QA checklist:');
    console.log('- No component overlap or double-layer scene cards.');
    console.log('- No large empty layout blocks in compare/summary scenes.');
    console.log('- Bottom subtitle safe area stays clear of essential content.');
    console.log('- Usage scene and lock scene both remain readable in still frames.');
  };

  const runRemotion = (args: string[]) => {
    const result =
      process.platform === 'win32'
        ? spawnSync(remotionBin, args, {
            cwd: templateDir,
            stdio: 'inherit',
            shell: true,
          })
        : spawnSync(remotionBin, args, {
            cwd: templateDir,
            stdio: 'inherit',
            shell: false,
          });

    if (result.error) {
      console.error(result.error);
      process.exit(1);
    }

    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  };

  const renderReadAloudPreflight = () => {
    const qaDir = join(outDir, 'qa', exportBaseName);
    mkdirSync(qaDir, {recursive: true});

    const checkpoints = [
      {name: '01-opening', frame: readAloudSecondsToFrames(1)},
      {name: '02-first-word', frame: readAloudSecondsToFrames(3)},
      {name: '03-mid-word', frame: readAloudSecondsToFrames(14)},
      {name: '04-late-word', frame: readAloudSecondsToFrames(Math.max(READ_ALOUD_TIMELINE.durationSeconds - 5, 1))},
      {name: '05-ending', frame: readAloudSecondsToFrames(Math.max(READ_ALOUD_TIMELINE.durationSeconds - 2, 1))},
    ];

    for (const checkpoint of checkpoints) {
      runRemotion([
        'still',
        'src/index.ts',
        videoComposition,
        join(qaDir, `${checkpoint.name}.png`),
        `--frame=${checkpoint.frame}`,
        '--scale=0.5',
        '--image-format=png',
      ]);
    }

    console.log(`Read-aloud QA stills exported to: ${qaDir}`);
    console.log('Pre-export read-aloud QA checklist:');
    console.log('- Chinese story board is the main visual, not an English reading page.');
    console.log('- Embedded English words, revealed glosses, bottom word card, top progress, and player bar are visible.');
    console.log('- Voice reads the mixed Chinese-English copy directly; there is no extra spoken teaching hook.');
    console.log('- The total duration stays close to the 25-35 second short-video target.');
  };

  if (episodeConfig.type === 'sentence-pattern' && (renderMode === 'both' || renderMode === 'video')) {
    renderSentencePreflight();
  }

  if (episodeConfig.type === 'read-aloud-vocab' && (renderMode === 'both' || renderMode === 'video')) {
    renderReadAloudPreflight();
  }

  if (renderMode === 'both' || renderMode === 'video') {
    rmSync(videoOutputPath, {force: true});
    runRemotion(['render', 'src/index.ts', videoComposition, videoOutputPath, '--codec=h264', '--concurrency=2']);
    copyFileSync(videoOutputPath, finalVideoPath);
    console.log(`Video exported to: ${finalVideoPath}`);
  }

  if (renderMode === 'both' || renderMode === 'cover') {
    rmSync(coverOutputPath, {force: true});
    runRemotion([
      'still',
      'src/index.ts',
      coverComposition,
      coverOutputPath,
      '--frame=0',
      '--image-format=png',
    ]);
    copyFileSync(coverOutputPath, finalCoverPath);
    console.log(`Cover exported to: ${finalCoverPath}`);
  }
};

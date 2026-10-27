import {copyFileSync, existsSync, mkdirSync, readFileSync, rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {toFrame} from '../src/core/timeline';
import {episodeConfig} from '../src/data/episodeConfig';
import {SENTENCE_TIMELINE, secondsToFrames} from '../src/sentenceTimeline';
import {isTemplate, TEMPLATES} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';
import {writeQaReport} from './qa-report';

export type RenderMode = 'both' | 'video' | 'cover';

type ActiveEpisodeMeta = {
  episodeDir: string;
  episodeSlug: string;
  exportBaseName: string;
};

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const workspaceDir = fileURLToPath(new URL('../..', import.meta.url));
const activeEpisodePath = join(templateDir, '.active-episode.json');

const LEGACY_COMPOSITIONS = {
  'root-word': {video: 'RootWordTemplate', cover: 'DouyinCover'},
  'sentence-pattern': {video: 'SentencePatternVideo', cover: 'SentenceCover'},
} as const;

export const runRender = (renderMode: RenderMode) => {
  if (!existsSync(activeEpisodePath)) {
    console.error('No active episode found. Run `npm run episode:use -- ../episodes/<episode>` first.');
    process.exit(1);
  }

  const activeEpisode = JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as ActiveEpisodeMeta;
  const type = episodeConfig.type;
  const template = isTemplate(type) ? TEMPLATES[type] : null;
  const runtime = isTemplate(type) ? RUNTIMES[type] : undefined;
  if (template && !runtime) {
    console.error(`Template ${type} is registered but not built (src/templates/timelines.ts).`);
    process.exit(1);
  }

  const outDir = join(templateDir, 'out');
  const exportBaseName = episodeConfig.exportBaseName ?? activeEpisode.exportBaseName ?? episodeConfig.episodeId;
  const exportsDir =
    type === 'sentence-pattern' ? join(workspaceDir, 'sentence-episodes', exportBaseName, 'exports') : join(activeEpisode.episodeDir, 'exports');
  const videoComposition = template ? template.video : LEGACY_COMPOSITIONS[type as keyof typeof LEGACY_COMPOSITIONS].video;
  const coverComposition = template ? template.cover : LEGACY_COMPOSITIONS[type as keyof typeof LEGACY_COMPOSITIONS].cover;
  const videoOutputPath = join(outDir, `${exportBaseName}.mp4`);
  const coverOutputPath = join(outDir, `${exportBaseName}_cover.png`);
  const finalVideoPath = join(exportsDir, `${exportBaseName}.mp4`);
  const finalCoverPath = join(exportsDir, `${exportBaseName}_cover.png`);
  const qaDir = join(outDir, 'qa', exportBaseName);
  const remotionBin = join(templateDir, 'node_modules', '.bin', process.platform === 'win32' ? 'remotion.cmd' : 'remotion');

  mkdirSync(outDir, {recursive: true});
  mkdirSync(exportsDir, {recursive: true});

  const runRemotion = (args: string[]) => {
    const result = spawnSync(remotionBin, args, {cwd: templateDir, stdio: 'inherit', shell: process.platform === 'win32'});
    if (result.error) {
      console.error(result.error);
      process.exit(1);
    }
    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  };

  const renderSentencePreflight = () => {
    mkdirSync(qaDir, {recursive: true});
    const checkpoints = [
      {name: '01-hook', frame: secondsToFrames(SENTENCE_TIMELINE.hookStart + 1.0)},
      {name: '02-pattern', frame: secondsToFrames(SENTENCE_TIMELINE.patternStart + 0.8)},
      {name: '03-usage', frame: secondsToFrames(SENTENCE_TIMELINE.reuseStart + 0.8)},
      {name: '04-lock', frame: secondsToFrames(SENTENCE_TIMELINE.lockStart + 0.8)},
      {name: '05-outro', frame: secondsToFrames(SENTENCE_TIMELINE.outroStart + 0.2)},
    ];
    for (const checkpoint of checkpoints) {
      runRemotion(['still', 'src/index.ts', videoComposition, join(qaDir, `${checkpoint.name}.png`), `--frame=${checkpoint.frame}`, '--scale=0.35', '--image-format=png']);
    }
    console.log(`Sentence QA stills exported to: ${qaDir}`);
  };

  // One still per scene, taken once its last line has been spoken: the per-scene review sheet.
  const renderTemplatePreflight = () => {
    mkdirSync(qaDir, {recursive: true});
    for (const timing of runtime!.timeline.scenes) {
      const lastLine = timing.lines[timing.lines.length - 1];
      const frame = toFrame(Math.min(timing.end - 0.1, lastLine ? lastLine.end : timing.end - 0.1));
      runRemotion([
        'still',
        'src/index.ts',
        videoComposition,
        join(qaDir, `${String(timing.index + 1).padStart(2, '0')}-${timing.scene.id}.png`),
        `--frame=${frame}`,
        '--scale=0.4',
        '--image-format=png',
      ]);
    }
    console.log(`QA stills (one per scene) exported to: ${qaDir}`);
    console.log(`Review them against ${template!.skill}/references/qa_checklist.md and skills/_shared/HOUSE_RULES.md.`);
  };

  // Two-pass loudnorm to -14 LUFS, resample, then a -1.5 dB limiter (headroom for AAC overshoot); the picture is copied untouched.
  const normalizeLoudness = (input: string, output: string) => {
    const measure = spawnSync('ffmpeg', ['-hide_banner', '-i', input, '-af', 'loudnorm=I=-14:TP=-1:LRA=11:print_format=json', '-f', 'null', '-'], {
      encoding: 'utf8',
    });
    const json = measure.stderr.slice(measure.stderr.lastIndexOf('{'));
    const stats = JSON.parse(json) as Record<string, string>;
    const filter = `loudnorm=I=-14:TP=-1:LRA=11:measured_I=${stats.input_i}:measured_TP=${stats.input_tp}:measured_LRA=${stats.input_lra}:measured_thresh=${stats.input_thresh}:offset=${stats.target_offset}:linear=true,aresample=48000,alimiter=limit=0.84:level=false`;
    const result = spawnSync('ffmpeg', ['-y', '-v', 'error', '-i', input, '-c:v', 'copy', '-af', filter, '-ar', '48000', '-c:a', 'aac', '-b:a', '192k', output], {
      stdio: 'inherit',
    });
    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
    console.log(`Loudness: measured ${stats.input_i} LUFS, normalized to -14 LUFS`);
  };

  if (renderMode === 'both' || renderMode === 'video') {
    if (template) {
      renderTemplatePreflight();
    } else if (type === 'sentence-pattern') {
      renderSentencePreflight();
    }

    rmSync(videoOutputPath, {force: true});
    runRemotion(['render', 'src/index.ts', videoComposition, videoOutputPath, '--codec=h264', '--crf=20', '--concurrency=2']);
    if (template) {
      const rawPath = videoOutputPath.replace(/\.mp4$/, '.raw.mp4');
      copyFileSync(videoOutputPath, rawPath);
      normalizeLoudness(rawPath, videoOutputPath);
      rmSync(rawPath, {force: true});
    }
    copyFileSync(videoOutputPath, finalVideoPath);
    console.log(`Video exported to: ${finalVideoPath}`);

    if (template) {
      // A failed measurement still exports cover and copy, but the command exits 1 (npm run produce stops).
      if (!writeQaReport({video: finalVideoPath, exportsDir, baseName: exportBaseName, template, timeline: runtime!.timeline})) {
        process.exitCode = 1;
      }
    }
  }

  if (renderMode === 'both' || renderMode === 'cover') {
    rmSync(coverOutputPath, {force: true});
    runRemotion(['still', 'src/index.ts', coverComposition, coverOutputPath, '--frame=0', '--image-format=png']);
    copyFileSync(coverOutputPath, finalCoverPath);
    console.log(`Cover exported to: ${finalCoverPath}`);
  }
};

import {execFileSync} from 'node:child_process';
import {cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import ts from 'typescript';
import {BRAND} from '../src/brand/brand';
import {ttsRate} from '../src/core/pace';
import {loadProjectEnv} from './load-env';

type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

type DashScopeResponse = {
  output?: {
    audio?: {
      url?: string;
      data?: string;
    };
  };
  request_id?: string;
  code?: string;
  message?: string;
};

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const audioDir = join(rootDir, 'public', 'audio');
const segmentsDir = join(audioDir, 'segments');
const voiceScriptPath = join(rootDir, 'src', 'data', 'voiceScript.ts');
const generatedTimelinePath = join(rootDir, 'src', 'data', 'generatedVoiceTimeline.ts');
const concatListPath = join(audioDir, 'segments.txt');
const mainVoicePath = join(audioDir, 'main-voice.mp3');
const activeEpisodePath = join(rootDir, '.active-episode.json');

const endpoint =
  process.env.DASHSCOPE_TTS_ENDPOINT ??
  'https://dashscope.aliyuncs.com/api/v1/services/audio/tts/SpeechSynthesizer';
// One narrator for the whole account (src/brand/brand.ts); .env may not change it.
const model = BRAND.voice.model;
const voice = BRAND.voice.voice;
const format = process.env.DASHSCOPE_TTS_FORMAT ?? 'mp3';
const sampleRate = Number(process.env.DASHSCOPE_TTS_SAMPLE_RATE ?? 48000);
const useInstruction = process.env.DASHSCOPE_TTS_USE_INSTRUCTION !== 'false';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithRetry = async (url: string, init: RequestInit, label: string, attempts = 5) => {
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fetch(url, init);
    } catch (error) {
      lastError = error;
      const isLast = attempt === attempts;
      console.warn(`[fetch] ${label} attempt ${attempt}/${attempts} failed`);
      if (isLast) {
        break;
      }

      await sleep(600 * attempt);
    }
  }

  throw lastError;
};

// Base rate per speedHint × the episode's pace (src/core/pace.ts).
const rateBySpeedHint = (speedHint: string) => ttsRate(speedHint);

const normalizeInstruction = (line: VoiceScriptLine) => {
  const combined = `${line.instruction} ${line.emotionInstruction}`;
  return combined.replace(/\s+/g, ' ').slice(0, 96);
};

const ensureTool = (tool: string) => {
  try {
    execFileSync(tool, ['-version'], {stdio: 'ignore'});
  } catch {
    throw new Error(
      `${tool} is required. Install FFmpeg from https://ffmpeg.org/download.html or with: winget install Gyan.FFmpeg`,
    );
  }
};

const escapeText = (value: string) => value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

const loadVoiceScript = async (): Promise<VoiceScriptLine[]> => {
  const source = readFileSync(voiceScriptPath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: voiceScriptPath,
  });

  const tempDir = mkdtempSync(join(tmpdir(), 'douyin-voice-script-'));
  const tempFilePath = join(tempDir, `voiceScript.${Date.now()}.mjs`);
  writeFileSync(tempFilePath, transpiled.outputText, 'utf8');

  try {
    const mod = (await import(pathToFileURL(tempFilePath).href)) as {voiceScript: VoiceScriptLine[]};
    return mod.voiceScript;
  } finally {
    rmSync(tempDir, {recursive: true, force: true});
  }
};

const synthesize = async (line: VoiceScriptLine, outputPath: string, allowInstruction: boolean) => {
  const apiKey = process.env.DASHSCOPE_API_KEY;
  if (!apiKey) {
    throw new Error('DASHSCOPE_API_KEY is not set. Set it before running npm run voice.');
  }

  const input: Record<string, unknown> = {
    text: line.text,
    voice,
    format,
    sample_rate: sampleRate,
    rate: rateBySpeedHint(line.speedHint),
    volume: 88,
    language_hints: ['zh', 'en'],
  };

  if (allowInstruction) {
    input.instruction = normalizeInstruction(line);
  }

  const response = await fetchWithRetry(
    endpoint,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        input,
      }),
    },
    `tts:${line.id}`,
  );

  const raw = await response.text();
  let payload: DashScopeResponse;

  try {
    payload = JSON.parse(raw) as DashScopeResponse;
  } catch {
    throw new Error(`DashScope returned non-JSON response (${response.status}): ${raw.slice(0, 240)}`);
  }

  if (!response.ok || payload.code) {
    throw new Error(
      `DashScope TTS failed for ${line.id}: ${payload.code ?? response.status} ${payload.message ?? raw}`,
    );
  }

  const audioUrl = payload.output?.audio?.url;
  const audioData = payload.output?.audio?.data;

  if (audioData) {
    writeFileSync(outputPath, Buffer.from(audioData, 'base64'));
    return;
  }

  if (!audioUrl) {
    throw new Error(`DashScope TTS response for ${line.id} did not include audio url or data.`);
  }

  const audioResponse = await fetchWithRetry(audioUrl, {}, `audio:${line.id}`);
  if (!audioResponse.ok) {
    throw new Error(`Failed to download audio for ${line.id}: ${audioResponse.status}`);
  }

  const bytes = Buffer.from(await audioResponse.arrayBuffer());
  writeFileSync(outputPath, bytes);
};

const getDurationSeconds = (filePath: string) => {
  const output = execFileSync('ffprobe', [
    '-v',
    'error',
    '-show_entries',
    'format=duration',
    '-of',
    'default=noprint_wrappers=1:nokey=1',
    filePath,
  ]).toString('utf8');

  const duration = Number(output.trim());
  if (!Number.isFinite(duration)) {
    throw new Error(`Could not read duration for ${filePath}`);
  }

  return duration;
};

const concatAudio = (segmentPaths: string[]) => {
  const list = segmentPaths
    .map((segmentPath) => `file '${segmentPath.replace(/\\/g, '/')}'`)
    .join('\n');
  writeFileSync(concatListPath, list, 'utf8');

  execFileSync(
    'ffmpeg',
    ['-y', '-f', 'concat', '-safe', '0', '-i', concatListPath, '-c', 'copy', mainVoicePath],
    {stdio: 'inherit'},
  );
};

const writeTimeline = (
  lines: VoiceScriptLine[],
  durations: number[],
  segmentPaths: string[],
) => {
  let cursor = 0;
  const items = lines.map((line, index) => {
    const start = Number(cursor.toFixed(3));
    const end = Number((cursor + durations[index]).toFixed(3));
    cursor = end;

    return {
      id: line.id,
      start,
      end,
      text: line.subtitle,
      spoken: line.text,
      rate: rateBySpeedHint(line.speedHint),
      audio: `/audio/segments/${segmentPaths[index].split(/[\\/]/).pop()}`,
    };
  });

  const source = `export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  spoken?: string; // the TTS text this audio was made from (npm run produce re-voices when it changes)
  rate?: number; // the TTS rate it was made at (changes with the pace)
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
${items
  .map(
    (item) => `  {
    id: \`${escapeText(item.id)}\`,
    start: ${item.start},
    end: ${item.end},
    text: \`${escapeText(item.text)}\`,
    spoken: \`${escapeText(item.spoken)}\`,
    rate: ${item.rate},
    audio: \`${escapeText(item.audio)}\`,
  },`,
  )
  .join('\n')}
];
`;

  writeFileSync(generatedTimelinePath, source, 'utf8');
};

const persistToActiveEpisode = () => {
  if (!existsSync(activeEpisodePath)) {
    return;
  }

  const activeEpisode = JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as {
    episodeDir?: string;
  };
  const episodeDir = activeEpisode.episodeDir;

  if (!episodeDir) {
    return;
  }

  const targetAudioDir = join(episodeDir, 'audio');
  const targetDataDir = join(episodeDir, 'data');

  mkdirSync(targetAudioDir, {recursive: true});
  mkdirSync(targetDataDir, {recursive: true});

  cpSync(audioDir, targetAudioDir, {recursive: true, force: true});
  cpSync(generatedTimelinePath, join(targetDataDir, 'generatedVoiceTimeline.ts'), {force: true});
};

const main = async () => {
  loadProjectEnv();
  for (const [key, brand] of [['DASHSCOPE_TTS_MODEL', model], ['DASHSCOPE_TTS_VOICE', voice]] as const) {
    if (process.env[key] && process.env[key] !== brand) {
      throw new Error(`${key}=${process.env[key]} overrides the brand voice (${brand}). Remove it from .env: every video uses ${model} / ${voice}.`);
    }
  }
  ensureTool('ffmpeg');
  ensureTool('ffprobe');

  mkdirSync(segmentsDir, {recursive: true});
  mkdirSync(audioDir, {recursive: true});

  if (!existsSync(voiceScriptPath)) {
    throw new Error(`Missing input file: ${voiceScriptPath}`);
  }

  const lines = await loadVoiceScript();
  const segmentPaths: string[] = [];

  for (const [index, line] of lines.entries()) {
    const filename = `${String(index + 1).padStart(3, '0')}.${format}`;
    const outputPath = join(segmentsDir, filename);
    segmentPaths.push(outputPath);

    console.log(`[tts] ${filename} ${line.id}`);
    try {
      await synthesize(line, outputPath, useInstruction);
    } catch (error) {
      if (!useInstruction) {
        throw error;
      }

      console.warn(`[tts] retry without instruction for ${line.id}`);
      await synthesize(line, outputPath, false);
    }
  }

  const durations = segmentPaths.map(getDurationSeconds);
  concatAudio(segmentPaths);
  writeTimeline(lines, durations, segmentPaths);
  persistToActiveEpisode();

  console.log(`[done] wrote ${mainVoicePath}`);
  console.log(`[done] wrote ${generatedTimelinePath}`);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

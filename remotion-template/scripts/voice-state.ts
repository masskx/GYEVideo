import {existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {baseRate, ttsRate} from '../src/core/pace';
import {episodeConfig} from '../src/data/episodeConfig';
import {generatedVoiceTimeline} from '../src/data/generatedVoiceTimeline';
import {voiceScript} from '../src/data/voiceScript';

// Used by npm run produce: voice lines with no audio yet (audio is not committed, so a fresh clone has
// none), audio made from different text, or at another speed (the pace changed).
const publicDir = join(fileURLToPath(new URL('..', import.meta.url)), 'public');
const made = new Map(generatedVoiceTimeline.map((item) => [item.id, item as {text: string; spoken?: string; rate?: number; audio: string}]));
const stale = voiceScript
  .filter((line) => {
    const item = made.get(line.id);
    return (
      !item ||
      item.text !== line.subtitle ||
      (item.spoken !== undefined && item.spoken !== line.text) ||
      // Audio made before paces existed was made at the relaxed rate.
      Math.abs((item.rate ?? baseRate(line.speedHint)) - ttsRate(line.speedHint)) > 0.005 ||
      !existsSync(join(publicDir, item.audio.replace(/^\//, '')))
    );
  })
  .map((line) => line.id);
console.log(JSON.stringify({stale, type: episodeConfig.type}));

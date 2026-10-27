import {mkdirSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {generatedVoiceTimeline} from '../src/data/generatedVoiceTimeline';
import {voiceScript} from '../src/data/voiceScript';

// Writes out/voice_lines.json for scripts/voice-check.py: every line's text, its audio file and the
// optional `asrAccept` map (English word -> what speech-to-text hears for a correct pronunciation).
const templateDir = fileURLToPath(new URL('..', import.meta.url));
const audio = new Map(generatedVoiceTimeline.map((item) => [item.id, item.audio]));
const lines = voiceScript.map((line) => ({
  id: line.id,
  text: line.text,
  audio: audio.get(line.id) ?? null,
  asrAccept: (line as {asrAccept?: Record<string, string>}).asrAccept ?? {},
}));
mkdirSync(join(templateDir, 'out'), {recursive: true});
writeFileSync(join(templateDir, 'out', 'voice_lines.json'), JSON.stringify(lines, null, 2), 'utf8');

import {execFileSync, spawnSync} from 'node:child_process';
import {rmSync, writeFileSync} from 'node:fs';
import {SR, Stereo} from './synth';

// WAV / MP3 output shared by the SFX kit and the score.

export const writeWav = (path: string, data: Stereo | Float32Array) => {
  const channels = data instanceof Float32Array ? 1 : 2;
  const frames = data instanceof Float32Array ? data.length : data.l.length;
  const buffer = Buffer.alloc(44 + frames * channels * 2);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + frames * channels * 2, 4);
  buffer.write('WAVEfmt ', 8);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(SR, 24);
  buffer.writeUInt32LE(SR * channels * 2, 28);
  buffer.writeUInt16LE(channels * 2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(frames * channels * 2, 40);
  let offset = 44;
  for (let i = 0; i < frames; i++) {
    const samples = data instanceof Float32Array ? [data[i]] : [data.l[i], data.r[i]];
    for (const s of samples) {
      buffer.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s)) * 32767), offset);
      offset += 2;
    }
  }
  writeFileSync(path, buffer);
};

export const toMp3 = (wavPath: string, mp3Path: string) => {
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', wavPath, '-codec:a', 'libmp3lame', '-q:a', '2', mp3Path]);
  rmSync(wavPath, {force: true});
};

// Two-pass EBU R128 normalisation to a fixed loudness, so every score sits at the same level under the
// voice. Returns the loudness measured before normalising.
export const toMp3AtLoudness = (wavPath: string, mp3Path: string, lufs = -16, truePeak = -1.5) => {
  const base = `loudnorm=I=${lufs}:TP=${truePeak}:LRA=11`;
  const first = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', wavPath, '-af', `${base}:print_format=json`, '-f', 'null', '-'], {encoding: 'utf8'});
  const text = first.stderr ?? '';
  const m = JSON.parse(text.slice(text.lastIndexOf('{'), text.lastIndexOf('}') + 1)) as Record<string, string>;
  const filter = `${base}:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true,aresample=${SR}`;
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', wavPath, '-af', filter, '-codec:a', 'libmp3lame', '-q:a', '2', mp3Path]);
  rmSync(wavPath, {force: true});
  return Number(m.input_i);
};

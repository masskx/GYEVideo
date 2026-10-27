// Standard MIDI File writer (type 1). The score is written as MIDI so it can be rendered by FluidSynth
// with any local SoundFont, opened in a DAW, or kept as the episode's editable "sheet music".

export type MidiNote = {t: number; dur: number; pitch: number; vel: number};
export type MidiTrack = {name: string; channel: number; program: number; notes: MidiNote[]};

const PPQ = 480;

const varLen = (value: number) => {
  const bytes = [value & 0x7f];
  while ((value >>= 7)) bytes.unshift((value & 0x7f) | 0x80);
  return bytes;
};

const chunk = (type: string, data: number[]) => {
  const out = Buffer.alloc(8 + data.length);
  out.write(type, 0, 'ascii');
  out.writeUInt32BE(data.length, 4);
  Buffer.from(data).copy(out, 8);
  return out;
};

const trackChunk = (events: {tick: number; bytes: number[]}[]) => {
  events.sort((a, b) => a.tick - b.tick || (a.bytes[0] & 0xf0) - (b.bytes[0] & 0xf0)); // note-offs (0x80) before note-ons (0x90)
  const data: number[] = [];
  let last = 0;
  for (const event of events) {
    data.push(...varLen(Math.max(0, event.tick - last)), ...event.bytes);
    last = Math.max(last, event.tick);
  }
  data.push(0x00, 0xff, 0x2f, 0x00);
  return chunk('MTrk', data);
};

export const writeMidi = (tracks: MidiTrack[], bpm: number): Buffer => {
  const ticks = (seconds: number) => Math.round((seconds * bpm * PPQ) / 60);
  const tempo = Math.round(60_000_000 / bpm);
  const conductor = trackChunk([
    {tick: 0, bytes: [0xff, 0x51, 0x03, (tempo >> 16) & 0xff, (tempo >> 8) & 0xff, tempo & 0xff]},
    {tick: 0, bytes: [0xff, 0x58, 0x04, 0x04, 0x02, 0x18, 0x08]},
  ]);
  const body = tracks.map((track) => {
    const ch = track.channel & 0x0f;
    const name = Array.from(Buffer.from(track.name, 'utf8'));
    const events: {tick: number; bytes: number[]}[] = [
      {tick: 0, bytes: [0xff, 0x03, ...varLen(name.length), ...name]},
      {tick: 0, bytes: [0xc0 | ch, track.program & 0x7f]},
    ];
    for (const note of track.notes) {
      const on = ticks(note.t);
      const off = Math.max(on + 1, ticks(note.t + note.dur));
      const pitch = Math.max(0, Math.min(127, Math.round(note.pitch)));
      const vel = Math.max(1, Math.min(127, Math.round(note.vel)));
      events.push({tick: on, bytes: [0x90 | ch, pitch, vel]}, {tick: off, bytes: [0x80 | ch, pitch, 0]});
    }
    return trackChunk(events);
  });
  const header = chunk('MThd', [0, 1, 0, tracks.length + 1, (PPQ >> 8) & 0xff, PPQ & 0xff]);
  return Buffer.concat([header, conductor, ...body]);
};

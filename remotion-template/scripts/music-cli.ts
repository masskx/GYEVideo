import {mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import type {SceneBase, Timeline} from '../src/core/timeline';
import {toMp3AtLoudness, writeWav} from './audio/io';
import {available} from './music/backends';
import {makeMusic, writeMusicFiles} from './music/engine';
import {Role, STYLES, TEMPLATE_STYLES, Tempo} from './music/styles';
import type {KeyName} from './music/theory';

// npm run music -- --list
// npm run music -- --preview <style> [--tempo slow|mid|fast] [--bpm 124] [--key C] [--seconds 40]
//                  [--backend auto|soundfont|samples|synth] [--kit <name>] [--stems]
//
// Audition a style without an episode: a made-up timeline (intro → hook → verses → build → drop →
// break → payoff → outro, with narration gaps) is scored and written to out/music/.
// Episode scores are made by `npm run audio` (or `npm run produce`).

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const args = process.argv.slice(2);
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i < 0 ? undefined : args[i + 1];
};

if (args.includes('--list') || !args.includes('--preview')) {
  const have = available();
  console.log('Styles (tempo ranges slow / mid / fast):');
  for (const style of Object.values(STYLES)) {
    console.log(`  ${style.id.padEnd(12)} ${style.bpm.slow.join('–')} / ${style.bpm.mid.join('–')} / ${style.bpm.fast.join('–')} BPM  ${style.label}`);
  }
  console.log('\nTemplate defaults (relaxed / standard / fast pace):');
  for (const [palette, map] of Object.entries(TEMPLATE_STYLES)) console.log(`  ${palette.padEnd(13)} ${map.slow} / ${map.mid} / ${map.fast}`);
  console.log('\nBackends on this machine:');
  console.log(`  soundfont  ${have.soundfont && have.fluidsynth ? `yes — ${have.soundfont}` : `no (${have.fluidsynth ? 'no .sf2 found' : 'FluidSynth not installed'})`}`);
  console.log(`  samples    ${have.kits.length ? `kits: ${have.kits.join(', ')}` : 'no kits in shared-assets/music-kits/'}`);
  console.log('  synth      yes (built in)');
  if (!args.includes('--preview')) console.log('\nPreview one: npm run music -- --preview pop-bounce --tempo fast');
  if (!args.includes('--preview')) process.exit(0);
}

const styleId = flag('preview')!;
if (!STYLES[styleId]) {
  console.error(`Unknown style "${styleId}". Styles: ${Object.keys(STYLES).join(', ')}`);
  process.exit(1);
}
const style = STYLES[styleId];
const tempo = (flag('tempo') ?? 'fast') as Tempo;
const bpm = Number(flag('bpm') ?? Math.round((style.bpm[tempo][0] + style.bpm[tempo][1]) / 2));
const key = (flag('key') ?? 'C') as KeyName;
const seconds = Number(flag('seconds') ?? 40);

// A made-up timeline in bars, snapped like a real one, with a narrator talking 70 % of each section.
const bar = (60 / bpm) * 4;
const plan: [Role, number][] = [
  ['intro', 1],
  ['hook', 2],
  ['verse', 2],
  ['verse', 2],
  ['build', 1],
  ['drop', 2],
  ['break', 1],
  ['payoff', 1],
  ['outro', 2],
];
const totalBars = plan.reduce((sum, [, n]) => sum + n, 0);
const scale = seconds / (totalBars * bar);
let cursor = 0;
const scenes = plan.map(([role, bars], index) => {
  const start = cursor;
  cursor += Math.max(1, Math.round(bars * scale)) * bar;
  return {scene: {id: `${role}${index}`, kind: role, lines: []}, index, start, end: cursor, lines: [], cues: []};
});
const lines = scenes.map((s) => ({start: s.start + 0.2, end: s.start + 0.2 + (s.end - s.start) * 0.7}));
const payoff = scenes.find((s) => s.scene.kind === 'payoff')!;
const timeline = {
  scenes,
  lines,
  silences: [{from: payoff.start - 0.6, to: payoff.start}],
  duration: cursor,
} as unknown as Timeline<SceneBase>;

const outDir = join(templateDir, 'out', 'music');
mkdirSync(outDir, {recursive: true});
const base = `preview_${styleId}_${tempo}${flag('backend') ? `_${flag('backend')}` : ''}`;
const result = makeMusic({
  timeline,
  palette: 'preview',
  bpm,
  key,
  tempo,
  style: styleId,
  kit: flag('kit'),
  backend: (flag('backend') as 'auto') ?? 'auto',
  seed: base,
  workDir: join(outDir, `.work_${base}`),
  stemsDir: args.includes('--stems') ? join(outDir, `${base}_stems`) : undefined,
});
const wav = join(outDir, `${base}.wav`);
writeWav(wav, result.mix);
const measured = toMp3AtLoudness(wav, join(outDir, `${base}.mp3`));
writeMusicFiles(outDir, base, result);
console.log(result.report);
console.log(`Wrote ${join(outDir, `${base}.mp3`)} (${measured.toFixed(1)} LUFS before normalising to −16), .mid and _music.md`);

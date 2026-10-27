import {spawnSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
import {join} from 'node:path';
import type {SceneBase, Timeline} from '../src/core/timeline';
import type {TemplateInfo} from '../src/templates/registry';
import {lengthRange} from '../src/core/pace';

// Measured checks on the final MP4, written next to it as <base>_qa.md plus a contact sheet.
// Run automatically by `npm run render`; `npm run qa` re-runs it on the existing export.

type Check = {name: string; pass: boolean; detail: string};

const ffmpeg = (args: string[]) => spawnSync('ffmpeg', ['-hide_banner', ...args], {encoding: 'utf8', maxBuffer: 64 * 1024 * 1024});

export const writeQaReport = ({
  video,
  exportsDir,
  baseName,
  template,
  timeline,
}: {
  video: string;
  exportsDir: string;
  baseName: string;
  template: TemplateInfo;
  timeline: Timeline<SceneBase>;
}) => {
  const checks: Check[] = [];

  const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:stream=width,height', '-of', 'json', video], {encoding: 'utf8'});
  const info = JSON.parse(probe.stdout || '{}') as {format?: {duration?: string}; streams?: {width?: number; height?: number}[]};
  const duration = Number(info.format?.duration ?? 0);
  const size = info.streams?.find((stream) => stream.width)?.width;
  const height = info.streams?.find((stream) => stream.height)?.height;
  const [minS, maxS] = lengthRange(template.targetSeconds);
  checks.push({name: 'Frame size 1080×1920', pass: size === 1080 && height === 1920, detail: `${size}×${height}`});
  checks.push({name: `Length ${minS}–${maxS} s`, pass: duration >= minS && duration <= maxS, detail: `${duration.toFixed(1)} s`});

  const loud = ffmpeg(['-i', video, '-af', 'ebur128=peak=true', '-f', 'null', '-']).stderr;
  const integrated = Number(loud.match(/I:\s+(-?[\d.]+) LUFS/g)?.pop()?.match(/-?[\d.]+/)?.[0] ?? NaN);
  const peak = Number(loud.match(/Peak:\s+(-?[\d.]+) dBFS/g)?.pop()?.match(/-?[\d.]+/)?.[0] ?? NaN);
  checks.push({name: 'Loudness −14 LUFS ±0.5', pass: Math.abs(integrated + 14) <= 0.5, detail: `${integrated} LUFS`});
  checks.push({name: 'Peak ≤ −0.5 dBFS', pass: peak <= -0.5, detail: `${peak} dBFS`});

  const black = ffmpeg(['-i', video, '-vf', 'blackdetect=d=0.1:pix_th=0.05', '-an', '-f', 'null', '-']).stderr;
  const blackCount = (black.match(/black_start/g) ?? []).length;
  checks.push({name: 'No black frames', pass: blackCount === 0, detail: `${blackCount} found`});

  const lastLineEnd = timeline.lines.length ? timeline.lines[timeline.lines.length - 1].end : 0;
  checks.push({name: 'Voice ends before the video', pass: lastLineEnd < duration, detail: `last line ends at ${lastLineEnd.toFixed(1)} s`});

  const sheet = join(exportsDir, `${baseName}_contact_sheet.jpg`);
  const cols = 11;
  const rows = Math.ceil(duration / 2 / cols) || 1;
  ffmpeg(['-y', '-v', 'error', '-i', video, '-vf', `fps=0.5,scale=216:384,tile=${cols}x${rows}`, '-frames:v', '1', sheet]);

  const passed = checks.every((check) => check.pass);
  const report = `# QA: ${baseName}

Template: \`${template.id}\` (${template.title}) · ${passed ? '**PASS**' : '**FAIL**'}

| Check | Result | Measured |
|---|---|---|
${checks.map((check) => `| ${check.name} | ${check.pass ? 'pass' : '**FAIL**'} | ${check.detail} |`).join('\n')}

Contact sheet (one frame every 2 s): \`${baseName}_contact_sheet.jpg\`.
Scene stills: \`remotion-template/out/qa/${baseName}/\`.

## Still to check by eye
- Every frame shows the template's look (see ${template.skill}/references/style.md).
- Nothing essential under the caption or behind the Douyin buttons (safe area in skills/_shared/HOUSE_RULES.md).
- The pig is the brand pig only, unaltered.
- Voice check passed (\`npm run voice:check\`).
`;
  writeFileSync(join(exportsDir, `${baseName}_qa.md`), report, 'utf8');
  console.log(`QA ${passed ? 'PASS' : 'FAIL'}: ${join(exportsDir, `${baseName}_qa.md`)}`);
  for (const check of checks) {
    console.log(`  ${check.pass ? 'ok  ' : 'FAIL'} ${check.name}: ${check.detail}`);
  }
  return passed;
};

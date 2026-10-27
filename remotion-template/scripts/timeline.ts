import {episodeConfig} from '../src/data/episodeConfig';
import {isTemplate, TEMPLATES} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';
import {lengthRange, PACE} from '../src/core/pace';

// npm run timeline — the scene table of the active episode: where the seconds go, before rendering.
const type = episodeConfig.type;
if (!isTemplate(type) || !RUNTIMES[type]) {
  console.error(`npm run timeline supports the template lines only (active type: ${type}).`);
  process.exit(1);
}
const {timeline} = RUNTIMES[type]!;
const [min, max] = lengthRange(TEMPLATES[type].targetSeconds);
for (const scene of timeline.scenes) {
  console.log(`${scene.scene.id.padEnd(16)} ${scene.scene.kind.padEnd(14)} ${scene.start.toFixed(1).padStart(5)}  ${(scene.end - scene.start).toFixed(1).padStart(4)} s  ${scene.scene.lines.join(', ')}`);
}
const ok = timeline.duration >= min && timeline.duration <= max;
const speech = timeline.lines.reduce((sum, line) => sum + (line.end - line.start), 0);
console.log(`total ${timeline.duration.toFixed(1)} s (pace ${PACE.id}, target ${min}–${max} s)${ok ? '' : '  ← outside the target'}`);
console.log(`voice ${speech.toFixed(1)} s = ${Math.round((speech / timeline.duration) * 100)} % of the runtime; no voice for ${(timeline.duration - speech).toFixed(1)} s`);

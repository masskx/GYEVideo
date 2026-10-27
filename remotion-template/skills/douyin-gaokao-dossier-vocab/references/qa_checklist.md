# QA checklist (one fix round, then check once more)

Record each result in the episode's `notes.md`.

## Content

- [ ] Every word tagged 课标 / 拓展; at most one 拓展.
- [ ] Each exhibit shows parts, literal meaning, word + phonetic, exam meaning, collocation.
- [ ] The hook question is solved by the root, labelled `高考风格原创练习题` (or a real 真题 with year and source).
- [ ] Homework has one clearly correct option; its answer is in `_publish_notes.md` for the pinned comment.

## Voice

- [ ] Every line transcribed with speech-to-text; any English word or key Chinese word that comes back as a different word has been rewritten and regenerated.
- [ ] Total length 55–66 s (check `DOSSIER_DURATION`, or the scene table below).

Scene table (from `remotion-template/`):

```powershell
npx.cmd tsx -e "import {DOSSIER_SCENES as S, DOSSIER_DURATION as D} from './src/dossier/schedule'; S.forEach(s => console.log(s.scene.id, s.start.toFixed(1), (s.end - s.start).toFixed(1))); console.log('total', D.toFixed(1))"
```

## Picture

- [ ] Contact sheet (one frame every 2 s) and the per-scene stills in `out/qa/<id>/`: paper, dots or a stamp visible in every frame; no gradients or soft shadows on content.
- [ ] Nothing essential under the caption pill (y > 1470) or behind the Douyin buttons (x > 930, y 900–1500).
- [ ] No stamp clipped at the frame edge at full size.
- [ ] A 0.2 s strip of the verdict stamp: slam, shake, flash and the pig's reaction on the same beat.
- [ ] Dot wipes fully cover at the cut (no hard switch visible).
- [ ] No black frames (`ffmpeg -i <mp4> -vf blackdetect=d=0.1:pix_th=0.05 -an -f null -`).

## Sound

- [ ] Integrated loudness −14 LUFS ±0.5, peak ≤ −0.5 dBFS (`ffmpeg -i <mp4> -af ebur128=peak=true -f null -`).
- [ ] Voice clearly above the music while speaking (about 12 dB; `bgmDuckingFactor` 0.6).
- [ ] The score empties before the verdict and the stamp is the first sound after the silence.
- [ ] Every stamp, card, wipe and flash has its sound.

## Originality

- [ ] Compared with the previous dossier episode on structure, opening, signature shot, camera path, score shape, ending: at least three differ.
- [ ] The cover reads at thumbnail size: headline, root, one stamp, the pig.

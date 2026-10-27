# Directing method (every template)

Adapted from the lemo-opuscar `DIRECTOR.md` method (MIT, notice in `LICENSE-lemo-opuscar.txt`) for 60-second vertical teaching videos. The templates already implement the mechanics; this is how to use them.

## 1. Treatment before data

Write `TREATMENT.md` (template: `templates/TREATMENT_template.md`, or the template skill's own) before touching `data/`. Three candidate structures, the one chosen and why, the hook, the signature shot, the ending, the cue map and the sound table. The data, the cues and the score follow the treatment, not the other way round.

## 2. One timeline drives everything

Each template has one schedule (`src/<template>/schedule.ts`, built on `src/core/timeline.ts`). It places voice lines from their real TTS durations, adds read-time holds, snaps scene starts to the half beat of the score's BPM and emits named cues. Pictures, SFX and the score all read those cues. So:

- change timing in data (`lineMeta.pauseBefore`, `holdAfter`, `cueAt`), never with hard-coded frame numbers;
- after `npm run voice`, the timeline and `npm run audio` follow the new durations automatically.

## 3. Read time

A caption stays on screen at least `max(1.8 s, speech + 0.6 s)`; reading templates use longer tails. Never shorten holds to hit the length; cut words from the narration instead.

## 4. The first three seconds

The first frame is already the content: the question, the rule, the story's first picture, the headline. No greeting, no logo sting, no "今天我们来学". The title pops within the first second.

## 5. Sound on every action

Every entrance, stamp, wipe, write or flip has a named SFX cue. Silence is a cue too: empty the music before the payoff (verdict, answer, last page), then hit it.

## 6. Originality check

The look of a template is the brand; the film must not repeat. Before writing data, compare with the previous episode of the same template on six points: **structure, opening image, signature shot, camera path, score shape, ending**. At least three must differ (`TREATMENT.md` §9). Rotate templates with `npm run plan` so the feed alternates looks as well.

## 7. Verify like a viewer

- Transcribe every line (`npm run voice:check`): what the viewer hears must match what the screen says.
- Look at the contact sheet and the per-scene stills, then a 0.2 s strip around the signature moment.
- One fix round, then check once more. Record what you changed in `notes.md`.

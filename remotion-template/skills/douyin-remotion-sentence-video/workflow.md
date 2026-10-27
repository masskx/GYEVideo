# Workflow

## 0. Pick The Mode

If the user explicitly asks for:

- sentence skeleton
- pattern drill
- slot replacement

then use sentence skeleton mode.

Otherwise default to:

- `Chinglish Trap Mode`

## 1. Trap Diagnosis First

Before code, answer:

`What is the wrong expression?`

Then:

`What did the learner mean?`

Then:

`What does it actually sound like or what makes it wrong?`

Then:

`What should they say instead?`

If these four answers are weak, stop and fix the plan.

## 1.5. Hook Audit Before Brief Lock

Before locking the brief, answer:

1. what is the first pain-point line?
2. what appears on screen in the first 1 second?
3. what appears on screen by second 3?
4. is the viewer seeing a pain point, or just a title?
5. would this opening still work if muted?

If the first 3 seconds are only:

- the wrong phrase
- a title card
- a quiz card
- a knowledge label

then fail the opening and rewrite it.

## 2. Build The Episode Brief

Every brief must include:

- first pain-point line
- first-3-second beat plan
- wrong expression
- intended meaning
- wrong meaning or why it fails
- natural fix
- one short teaching point
- one real usage scene
- ending lock plan
- hero correction line
- optional secondary alternatives only if they do not crowd the hero correction
- follow reason: social pain, identity gain, comment bait, series pull, or persona pull
- creator attitude for this episode
- anti-template variation note compared with recent episodes

## 3. Batch Mix

If the user asks for 5 videos and gives no narrower direction, default mix:

- 2 direct-translation crashes
- 1 classic Chinglish
- 1 one-word misuse
- 1 over-simple expression upgrade

Also force variation across:

- opening shell
- emotional temperature
- scene type
- ending lock style
- comment bait intensity

If 2 adjacent episodes share the same opening shell and same ending shell, rewrite one.

## 4. Pre-Code Plan

Before touching project files, write:

1. first pain-point line
2. first 3 second visual/voice beats
3. wrong expression
4. contrast line
5. native fix
6. one-line why
7. usage scene
8. wrong vs right lock
9. which word-skill-style motion language is being borrowed
10. how the final lock frame avoids empty-box composition
11. which 4 opening visual actions happen inside the first 3 seconds
12. where the first layout-level screen rebalance happens
13. how the wrong phrase is punished visually
14. how the correct phrase slams in visually
15. how BGM pulse and voice ducking are expected to feel in the opening
16. why someone would follow after this clip instead of only saving this one tip
17. what makes this episode structurally different from the previous one
18. which single correction is the hero line and by what second it first appears

## 5. Write Data Files

Create or update:

- `src/data/sentencePattern.ts`
- `src/data/voiceScript.ts`
- `src/data/episodeConfig.ts`
- `src/data/generatedVoiceTimeline.ts` after TTS
- `src/timeline.ts` if scene timing is derived there

The Chinglish core should be:

`wrongExpression -> whyWrong -> naturalExpression`

`episodeConfig.ts` should default to:

- `bgmVolume: 0.33`
- allowed setup window `0.32` to `0.34`
- stronger ducking during active voice instead of lowering the configured BGM bed

## 6. Visual Flow

Default Chinglish flow:

1. `ChinglishTrapOpeningScene`
2. `WrongExpressionScene`
3. `WrongMeaningTwistScene`
4. `NativeFixSlamScene`
5. `UsageSceneCard`
6. `WrongRightLockScene`

For every scene, also answer:

- what is the dominant object?
- what is moving?
- what is the word-skill equivalent scene energy?
- if paused, does the frame still look like a video instead of a card?
- what changes when the current voice line changes?
- what layout-level motion prevents this scene from becoming subtitle-only motion?

Motion lock:

- every 0.5 to 1.2 seconds needs one visible beat
- every 2 seconds needs a clear screen change
- every 2 to 3 beats needs one composition rebalance or scene-state switch
- if narration continues, the main canvas must continue evolving too
- no beat may contain overlapping large-text layers that fight for the same focal area

Stickiness lock:

- each episode should contain at least one follow trigger
- follow triggers can be persona sting, social truth, comment bait, or next-episode pull
- do not let the whole batch rely on the same follow trigger

Audio lock:

- BGM should be obvious enough to carry edit pulse
- default configured BGM target is `0.33`
- keep BGM in the `0.32` to `0.34` window unless the user explicitly asks otherwise
- preserve speech clarity with ducking, not by collapsing the BGM bed

## 6.5. Voice And Timeline Sync

After voice generation:

- measure real segment durations
- write `src/data/generatedVoiceTimeline.ts`
- stretch hook visuals with real audio instead of fixed 3-second assumptions
- drive compare-board rebalances, replacement hits, and lock-frame timing from the generated timeline
- do not let long TTS lines leave a static frame with only subtitle changes

## 6.8. Anti-Template Pass

Before approval, compare the draft against recent episodes.

Reject or rewrite if:

- the opening shell is obviously reused
- the scene shell is obviously reused
- the ending lock uses the same compare mechanic again
- the same emotional temperature appears 3 videos in a row
- the same cover-title grammar repeats too often
- the creator voice feels generic instead of recognizable
- the first usable English fix lands after 12 seconds
- the hero correction is buried inside a multi-option slash list too early
- any key frame contains visible text overlap, clipping, or stacked focal collisions

## 7. QA

Checklist:

- does the first line hit a Chinese pain point, not just show a phrase?
- if muted, does the first 3 seconds still communicate the trap?
- does the opening feel like Douyin stop-scroll content instead of a title slide?
- does each major frame have a clear dominant object?
- does any large container leave obvious dead space?
- does the ending compare scene look like content, not placeholder boxes?
- is the motion language strong enough to match the word skill?
- does the episode actually feel cut to rhythm, not just animated?
- is the BGM energetic enough to support a Douyin feel?
- is the configured BGM still in the `0.32` to `0.34` default window?
- does ducking preserve voice clarity without flattening the beat?
- does this episode give a reason to follow, not just a reason to learn?
- if this sits next to the last 3 clips, does it still feel fresh?
- is the creator attitude recognizable instead of generic?
- is there at least one comment trigger or social sting worth reacting to?
- is there a clear wrong expression?
- is there a clear correct expression?
- does the first usable correct expression arrive early enough?
- is one hero correction visually dominant before secondary variants appear?
- is the contrast strong enough?
- is the teaching point short and clear?
- does the viewer know when to use the fix?
- does it still feel like a scrollable short video?

## 8. Export

Only render if the user asked to render.
If the user is reviewing the brief or voice script, stop there first.

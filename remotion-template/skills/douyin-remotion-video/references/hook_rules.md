# Hook Rules

## Purpose

The first three seconds must stop the viewer from swiping. Do not treat the hook as a decorative intro. It is a rhythm system: interruption, fast information impact, conflict, root reveal, payoff.

## First Three Seconds

- `0.0-0.3s`: hard interruption. Use a hard cut, slam zoom, yellow flash, or large text immediately. No slow fade-in.
- `0.3-0.9s`: flash 3-5 related English words quickly.
- `0.9-1.6s`: show conflict copy, such as "你可能一直背错方向了" or "别再一个个死记了".
- `1.6-2.4s`: slam the root, prefix, suffix, pattern, or core rule into the center.
- `2.4-3.0s`: state the payoff, such as "记住 port，一串词就通了".

## Hook Types

- `misconception`: breaks a common wrong belief.
- `stop_hard_memorizing`: tells the viewer to stop memorizing isolated words.
- `three_second_challenge`: asks for three seconds and promises a compact memory win.
- `mistake_correction`: corrects a common spelling, meaning, root, or pronunciation mistake.
- `exam_panic`: frames the pattern as useful under test pressure.
- `word_flash`: opens with a rapid burst of related words before revealing the rule.

## Forbidden

- No normal PPT title page.
- No first two seconds with only small text.
- No slow fade-in at the opening hit.
- No vague value proposition without visible English words.
- No remote SFX, BGM, images, or icons during Remotion render.

## Copy Templates

- `stop_hard_memorizing`: "别再硬背单词了" / "它们都藏着同一个词根" / "抓住词根，一组词一起记".
- `three_second_challenge`: "给我 3 秒" / "让你记住 5 个 {root} 单词" / "3 秒建立这组词的记忆钩子".
- `misconception`: "这个词不是你想的那样" / "你可能一直背错方向了" / "看懂规律，一串词就通了".
- `mistake_correction`: "这个词你可能一直拆错了" / "先看词根，再看意思".
- `exam_panic`: "考试看到这组词别慌" / "先认词根，再判断词义".
- `word_flash`: flash words first, then hit the shared root or pattern.

## Visual Rhythm

- Main hook text should occupy roughly 30-50% of the frame.
- Use black/yellow high contrast, big typography, punch zoom, quick word flash, slight shake, and yellow flash.
- Every 0.3-0.6s needs a visible state change.
- Keep the hook short and sharp. Do not stretch one idea across all three seconds.
- After TTS generation, never assume the hook still lasts exactly three seconds. If `generatedVoiceTimeline.ts` stretches `hook`, `flash-words`, or `same-root`, the Hook scene must keep visuals alive until the actual `root-*` or pattern reveal segment starts.
- `flash-words` must remain visible for the full real `flash-words` audio segment. Do not let the scene return `null` while the active subtitle is still `flash-words`.
- The conflict line must remain visible for the real `same-root`, `pattern-reveal`, or equivalent audio segment. Empty frames with only subtitles are a failed hook QA.

## SFX

- `0.0s`: hit or bass-hit for the opening interruption.
- `0.3-0.9s`: click or glitch for word flashes.
- `1.6s`: bass-hit for the root or rule slam.
- `2.4s`: whoosh or small-hit for the payoff line.
- Use only local files. If SFX files are missing, skip them cleanly instead of breaking render.
- Keep SFX below the voice. Use `sfxVolume` from `episodeConfig.ts`.

## Animal Icon

- Use at most one animal icon in the hook.
- Prefer shocked or confused emotions at the opening hit.
- Duration should usually be `0.5-1.2s`.
- Do not cover the hook text, flash words, root formula, or subtitle bar.
- If the topic is serious or exam-focused, reduce icon presence.

## Export QA

- Does the first 0.5s interrupt scrolling?
- Does a large text hit appear within 1s?
- Do 3-5 related words flash before the explanation starts?
- After real TTS, do frames around 3s, 5s, 8s, and right before the root reveal still show matching visuals?
- During `flash-words`, are the related English words visible, not just subtitles?
- During `same-root` or conflict narration, is the conflict text visible, not a blank background?
- Is there conflict or curiosity before 2s?
- Is there a clear payoff before 3s?
- Does it avoid looking like a PPT title page?
- Are SFX present where local files exist, and are they not harsh?
- Is any animal icon brief, relevant, and non-blocking?

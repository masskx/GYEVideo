# Example: `-ject` Word Root Episode

## Source Idea

Teach the English root `-ject`, meaning `throw / 投出去`, through related words:

- reject
- object
- subject
- project
- inject
- eject
- abject
- deject

## Core Promise

The viewer stops memorizing these words separately and remembers one shared action:

`ject = throw / 投出去`

## Why It Can Retain

- It attacks a common pain: learners memorize these words separately.
- It gives an instant memory shortcut instead of slow explanation.
- It creates a "wait, these are all connected?" moment before the teaching starts.

## Final Structure

1. Hook: `别再硬背单词了`
2. Fast flash: `reject / project / inject / object / subject`
3. Conflict: `它们都藏着同一个词根`
4. Root slam: `-ject`
5. Word-by-word explanation:
   - `reject`: 投回去 -> 拒绝、排斥
   - `object`: 投到眼前 -> 物体、目标
   - `subject`: 放到下面讨论 -> 主题、学科
   - `project`: 向前投 -> 投射、项目
   - `inject`: 往里面投 -> 注射、注入
   - `eject`: 向外投出 -> 弹出、驱逐
   - `abject`: 抛到低处 -> 卑劣、可怜
   - `deject`: 情绪往下 -> 使沮丧
6. Grid: all words connect to center `-ject`
7. Summary: `ject = throw / 投出去`
8. Outro: one final memory question or mini challenge

## Implemented Files In The Project

- `src/data/words.ts`
- `src/data/voiceScript.ts`
- `src/data/generatedVoiceTimeline.ts`
- `src/timeline.ts`
- `src/utils/motion.ts`
- `src/scenes/HookScene.tsx`
- `src/components/RootWordTitle.tsx`
- `src/components/WordGridScene.tsx`
- `src/components/SummaryScene.tsx`
- `src/components/SubtitleBar.tsx`
- `scripts/generate-voice.ts`

## Lessons Learned

- Do not hardcode flash-word switching as "every N frames" after voice generation.
- Use segment progress from `generatedVoiceTimeline` for long or variable-length TTS sections.
- DashScope `instruction` may fail for some combinations; retry without it rather than putting instructions into spoken text.
- Real TTS duration may be much longer than the intended script duration. The video should follow real audio, then the script can be tightened in the next pass.
- The same visual shell should not be reused unchanged across a long batch, even when the root-learning structure is similar.

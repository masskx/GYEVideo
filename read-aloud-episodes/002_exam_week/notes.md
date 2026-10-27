# Notes

## BGM

- bgmId: tech_006
- bgmVolume: 0.16
- bgmDuckingFactor: 0.72
- licenseNote: Local asset. Please confirm commercial license before publishing.

## QA Checklist

- Use `npm.cmd run episode:use -- ../read-aloud-episodes/002_exam_week`.
- Use `npm.cmd run voice` to regenerate the real word-by-word timeline.
- Use `cmd /c node_modules\.bin\tsc.cmd --noEmit`.
- Use `npm.cmd run render` for final video, cover, caption, and publish notes.
- Confirm the visual is a high-density Chinese story board, not an English reading page.
- Confirm the voice directly reads the mixed copy; it must not add a teaching hook or separate spoken explanations.
- Confirm each embedded English word switches the bottom explanation card at the matching timeline segment.
- Confirm inline glosses reveal progressively.
- Confirm final duration is 25-35 seconds; compress voice copy if it runs long.

## Final QA

- `npm.cmd run episode:use -- ../read-aloud-episodes/002_exam_week`: passed.
- `npm.cmd run voice`: passed; real timeline and `main-voice.mp3` generated.
- `cmd /c node_modules\.bin\tsc.cmd --noEmit`: passed.
- `quick_validate.py douyin-remotion-read-aloud-vocab`: passed with `PYTHONUTF8=1`.
- `npm.cmd run render`: passed.
- Final video: 960x720, 30fps, about 33.97 seconds.
- Contact sheet confirms high-density Chinese story board, embedded word highlights, bottom word card switching, and bottom player bar.

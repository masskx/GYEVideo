"""Synthesize narration with Piper, write an audio-derived timeline, copy shared media.

Usage: python3 -I scripts/prepare-media.py <path-to-piper-voice.onnx>
Mirrors the factory's own approach: every line is synthesized, measured with
ffprobe, and the visuals are timed from the real durations.
"""
import json
import shutil
import subprocess
import sys
import wave
from pathlib import Path

root = Path(__file__).resolve().parent.parent
voice_model = sys.argv[1]
narration = json.loads((root / "narration.json").read_text(encoding="utf-8"))
out_dir = root / "public" / "voice"
out_dir.mkdir(parents=True, exist_ok=True)


def duration(path: Path) -> float:
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
        check=True, capture_output=True, text=True,
    )
    return float(result.stdout.strip())


timeline = {"fps": narration["fps"], "scenes": []}
cursor = 0.0
for scene in narration["scenes"]:
    scene_start = cursor
    local = 0.35
    lines = []
    for index, line in enumerate(scene["lines"]):
        name = f"{scene['id']}_{index}.wav"
        path = out_dir / name
        subprocess.run(
            [sys.executable, "-m", "piper", "-m", voice_model, "--length-scale", "0.94",
             "--sentence-silence", "0", "-f", str(path)],
            input=line["say"], text=True, check=True, capture_output=True,
        )
        length = duration(path)
        lines.append({"file": f"voice/{name}", "caption": line["caption"], "start": round(local, 3), "duration": round(length, 3)})
        local += length + narration["sentenceGap"]
    scene_duration = local - narration["sentenceGap"] + narration["sceneTail"]
    timeline["scenes"].append({"id": scene["id"], "start": round(scene_start, 3), "duration": round(scene_duration, 3), "lines": lines})
    cursor += scene_duration

timeline["total"] = round(cursor + 1.2, 3)

shared = root.parent / "shared-assets"
bgm_target = root / "public" / "bgm" / "tech_001.mp3"
bgm_target.parent.mkdir(parents=True, exist_ok=True)
shutil.copyfile(shared / "bgm" / "tech" / "tech_001.mp3", bgm_target)

icon_dir = root / "public" / "icons"
icon_dir.mkdir(parents=True, exist_ok=True)
for icon in ["cute_cat", "cute_dog", "cute_bee", "cute_bird", "cute_chick", "cute_crab", "cute_dinosaur", "cute_chameleon"]:
    shutil.copyfile(shared / "icons" / "animals" / f"{icon}.svg", icon_dir / f"{icon}.svg")

(root / "src" / "timeline.json").write_text(json.dumps(timeline, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"Wrote {len(timeline['scenes'])} scenes, total {timeline['total']}s")

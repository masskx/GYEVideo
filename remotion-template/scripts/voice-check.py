"""Speech-to-text check of every narration line (npm run voice:check).

Transcribes every voice segment with faster-whisper (model "medium" by default) and compares it
with src/data/voiceScript.ts (via out/voice_lines.json, written by scripts/dump-voice-lines.ts):
  - every English word in the line must be heard (case-insensitive, exact spelling);
  - Chinese is compared as toneless pinyin, so same-sounding characters pass
    (往回 heard as 网回) but a different word fails (结案 heard as 请按).
A correct pronunciation the model keeps hearing differently (British "port" heard as "pot") is
accepted per line with `asrAccept: {port: 'pot'}` in voiceScript.ts, after a person has listened.
Exit code 1 when any line fails. Needs: pip install faster-whisper pypinyin numpy (ffmpeg on PATH).
"""
import difflib
import json
import re
import subprocess
import sys
from pathlib import Path

import numpy as np
from faster_whisper import WhisperModel
from pypinyin import lazy_pinyin

ROOT = Path(__file__).resolve().parent.parent
LINES = ROOT / "out" / "voice_lines.json"
PINYIN_PASS = 0.8


def load_lines():
    return json.loads(LINES.read_text(encoding="utf-8"))


def decode(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(path), "-f", "s16le", "-ac", "1", "-ar", "16000", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768


def pinyin(text):
    return " ".join(lazy_pinyin(re.sub(r"[^一-鿿]", "", text)))


def english(text):
    return [w.lower() for w in re.findall(r"[A-Za-z][A-Za-z'’-]*", text)]


def expected_words(text):
    """English words of a line; spelled-out letters ("V I S") count as one word ("vis")."""
    spelled = re.compile(r"(?<![A-Za-z])([A-Za-z](?:[ ]+[A-Za-z])+)(?![A-Za-z])")
    words = ["".join(m.group(1).split()).lower() for m in spelled.finditer(text)]
    words += english(spelled.sub(" ", text))
    return list(dict.fromkeys(words))


def main():
    lines = load_lines()
    model = WhisperModel(sys.argv[1] if len(sys.argv) > 1 else "medium", device="cpu", compute_type="int8")
    results, failed = [], 0
    for line in lines:
        line_id, text, audio, accept = line["id"], line["text"], line["audio"], {k.lower(): v.lower() for k, v in line["asrAccept"].items()}
        if not audio:
            results.append({"id": line_id, "ok": False, "reason": "no audio (run npm run voice)"})
            failed += 1
            continue
        mostly_english = len(re.sub(r"[^一-鿿]", "", text)) < len(english(" ".join(english(text)))) / 2
        segments, _ = model.transcribe(decode(ROOT / "public" / audio.lstrip("/")), language="en" if mostly_english else "zh", beam_size=5)
        heard = "".join(s.text for s in segments)
        heard_words = set(english(heard))
        compact = re.sub(r"[^a-z]", "", heard.lower())
        # One- and two-letter words (a prefix like "e") only need to appear somewhere in what was heard.
        missing = [
            w
            for w in expected_words(text)
            if w not in heard_words and not (len(w) <= 3 and w in compact) and not (w in accept and accept[w] in heard.lower())
        ]
        zh_ratio = difflib.SequenceMatcher(None, pinyin(text), pinyin(heard)).ratio() if pinyin(text) else 1.0
        ok = not missing and zh_ratio >= PINYIN_PASS
        failed += 0 if ok else 1
        results.append({"id": line_id, "ok": ok, "text": text, "heard": heard.strip(), "missingEnglish": missing, "pinyinMatch": round(zh_ratio, 2)})
        print(("ok    " if ok else "FAIL  ") + f"{line_id}: heard “{heard.strip()}”" + (f"  missing {missing}" if missing else "") + (f"  pinyin {zh_ratio:.2f}" if zh_ratio < 1 else ""))
    out = ROOT / "out" / "voice_check.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{len(lines) - failed}/{len(lines)} lines pass. Report: {out}")
    if failed:
        print("Fix: rewrite the failing line (move an isolated English word away from the start, give TTS a phonetic spelling in `text`, change the wording), then npm run voice again.")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()

"""Generate the Halftone Dossier paper texture (multiplied over every frame).

Usage: python -I scripts/make-dossier-paper.py   (needs numpy and pillow)
Writes public/dossier/paper.jpg: warm mottling, fine fibre noise, a vignette and a centre fold.
"""
from pathlib import Path

import numpy as np
from PIL import Image

W, H = 1080, 1920
rng = np.random.default_rng(20261027)


def smooth_noise(cell: int) -> np.ndarray:
    small = rng.random((H // cell + 2, W // cell + 2)).astype(np.float32)
    img = Image.fromarray((small * 255).astype(np.uint8)).resize((W + 2 * cell, H + 2 * cell), Image.BICUBIC)
    return np.asarray(img, dtype=np.float32)[cell : cell + H, cell : cell + W] / 255.0


mottle = 0.55 * smooth_noise(160) + 0.3 * smooth_noise(48) + 0.15 * smooth_noise(12)
fibre = rng.random((H, W)).astype(np.float32)
y, x = np.mgrid[0:H, 0:W].astype(np.float32)
vignette = 1 - 0.16 * np.clip(((x - W / 2) / (W / 2)) ** 2 + ((y - H / 2) / (H / 2)) ** 2 - 0.25, 0, None)
fold = 1 - 0.05 * np.exp(-(((y - H / 2) / 3.0) ** 2)) + 0.03 * np.exp(-(((y - H / 2 - 6) / 5.0) ** 2))

shade = (0.955 + 0.045 * mottle + 0.02 * (fibre - 0.5)) * vignette * fold
warm = np.array([1.0, 0.985, 0.955], dtype=np.float32)
rgb = np.clip(shade[..., None] * warm * 255, 0, 255).astype(np.uint8)

out = Path(__file__).resolve().parent.parent / "public" / "dossier" / "paper.jpg"
Image.fromarray(rgb).save(out, quality=88)
print(f"wrote {out}")

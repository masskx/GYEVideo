# Animal Icon Rules

## Purpose

- Animal avatars are emotional rhythm accents, not decorative clutter.
- Use them to strengthen a hook, misconception reveal, root reveal, or final memory beat.
- A 20-30 second episode should usually use 2-4 animal icon moments.
- If the topic feels serious or research-like, reduce usage or skip icons.

## Asset Source

- Prefer local assets from `public/assets/icons/animals/`.
- Keep shared copies in `shared-assets/icons/animals/`.
- Preserve original files under `raw/`.
- Register usable icons in `src/data/animalIconRegistry.ts`.
- Do not load animal icons from remote URLs during Remotion preview or render.

## Scene Matching

- Hook: use `confused` or `shocked` icons.
- Misconception: use `confused`, `shocked`, or light `reaction` icons.
- Root explanation: use `thinking` or `neutral` icons.
- Summary: use `happy` or `excited` icons.

## Placement

- Icons must not cover English keywords, word-splitting formulas, or the bottom subtitle bar.
- Keep icons near upper corners or side margins.
- Do not place icons in the center when the current word or root is on screen.
- Use drop shadows or subtle outlines so icons remain readable on the black background.

## Motion

- Motion should be cute but restrained.
- Typical duration: `0.5-1.5s`.
- Prefer short variants such as `pop`, `shake`, `peek`, `float`, `bounce`, or `reaction`.
- Do not leave icons on screen continuously.
- Avoid making the episode feel like children's animation; it should still feel like a Douyin knowledge video.

## QA

Before delivery, check:

- Icons do not cover subtitles.
- Icons do not cover English keywords or formulas.
- Icons appear only a few times.
- Icon emotion matches the spoken beat.
- The black/yellow high-speed English-learning style remains intact.

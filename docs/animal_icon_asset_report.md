# Animal Icon Asset Report

## Source

Copied icon assets from:

```text
F:\抖音英语卡片视频\矢量图标素材
```

Original files were not deleted or modified.

## Destinations

Renderable Remotion assets:

```text
remotion-template/public/assets/icons/animals/
remotion-template/public/assets/icons/animals/raw/
```

Shared asset library:

```text
shared-assets/icons/animals/
shared-assets/icons/animals/raw/
```

## Counts

- Supported formats scanned: `.svg`, `.png`, `.webp`
- Total icon files recognized: 46
- Successfully organized: 46
- Copy failures: 0
- Raw originals preserved in each `raw/` folder: 46

## Unknown Animal Types

Could not confidently identify the animal type from filename:

```text
F:\抖音英语卡片视频\矢量图标素材\kedaya.svg -> animal_001.svg
```

## Registered IDs

`animalIconRegistry.ts` now registers:

```text
cute_chameleon, cute_elephant, cute_seal, cute_fish, cute_raccoon,
cute_chick, cute_whale, cute_dinosaur, cute_horse, cute_sheep,
cute_bee, cute_squid, cute_crab, cute_frog, cute_snake, cute_lion,
cute_rabbit, cute_turtle, cute_fish_002, cute_dog, cute_cat,
cute_bird, cute_duck, cute_cat_002, cute_dog_002,
cute_cat_003, cute_dog_003, cute_hamster, cute_dog_004,
cute_dog_005, cute_dog_006, cute_cat_004,
cute_dog_007, cute_cat_005, animal_001, cute_dog_008,
cute_dog_009, cute_cat_006, cute_cat_007, cute_cat_008,
cute_dog_010, cute_cat_009, cute_cat_010, cute_sheep_002
```

`cute_pig` and `cute_pig_002` were removed (their SVGs too): the only pig is the locked brand pig, `remotion-template/src/brand/BrandPig.tsx`. Legacy covers that still say `cute_pig` render the brand pig through `BrandAvatar`.

Registry path:

```text
remotion-template/src/data/animalIconRegistry.ts
```

## Current Episode Trial Usage

The current Remotion template now includes three short animal icon moments:

- Hook: `cute_cat`, `shake`, near the upper-right area.
- Root reveal: `cute_rabbit`, `peek`, near the upper-left area.
- Summary: `cute_dog`, `bounce`, near the upper-right area.

Each moment is shorter than 1.5 seconds and is positioned away from the bottom subtitle bar and central English keyword area.

## How To Use In New Episodes

1. Choose an icon from `animalIconRegistry.ts`.
2. Add a short `AnimatedAnimalIcon` moment at a strong emotional beat.
3. Prefer:
   - Hook or misconception: shocked/confused icons.
   - Root reveal or explanation: thinking/neutral icons.
   - Summary or outro: happy/excited icons.
4. Keep each icon moment between 0.5 and 1.5 seconds.
5. Do not cover English keywords, word-root formulas, or subtitles.
6. Do not load icons from remote URLs during Remotion rendering.

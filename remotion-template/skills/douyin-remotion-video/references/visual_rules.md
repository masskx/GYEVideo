# Visual Rules

## Style Target

The look is a Douyin/TikTok English vocabulary explainer, not a slide deck:

- Black/yellow high contrast.
- Large center keywords.
- Fast, confident motion.
- Clean information density.
- Slight tension from glow, noise, scanlines, and quick cuts.
- No cartoon styling, no childish icons, no ordinary classroom PPT feeling.

## Color System

Use one shared theme file when possible:

```ts
export const THEME = {
  background: '#050505',
  background2: '#101010',
  yellow: '#FFD43B',
  white: '#F8F8F8',
  gray: '#9CA3AF',
  red: '#FF4D4D',
} as const;
```

Rules:

- Yellow is for current keyword, active state, progress, and impact flashes.
- White is for main Chinese explanation.
- Gray is for phonetics, inactive labels, and supporting metadata.
- Red is reserved for warnings, wrong answers, negation, or contrast.

## Typography

- Use bold sans-serif: `Inter`, `Arial`, `Microsoft YaHei`, `PingFang SC`, `Noto Sans CJK SC`.
- Main keyword: 100-170 px, very bold.
- Chinese explanation: 44-64 px in focus scenes.
- Subtitle bar: 26-30 px, bold, centered.
- Phonetics: smaller and gray, never competing with the main word.
- Avoid negative letter spacing and viewport-based font scaling.

## Background

The background should feel alive but not decorative:

- Base: `#050505`.
- Secondary dark gradient: `#101010`.
- Dark yellow radial glow behind the current focus.
- Subtle grid layer.
- Very faint scanlines.
- Tiny particle drift.
- Low-opacity noise texture.
- Strong vignette or inset shadow to keep the center readable.

## Layout

Each screen should have one dominant idea:

- Intro hook: one large Chinese English-learning claim.
- Flash words: one large word at center, small word strip below.
- Root/affix/pattern reveal: huge root or formula in center, explanation below.
- Word explanation: huge English word left/center, phonetic as gray helper, Chinese meaning large.
- Grid scene: center root with word cards around it and thin glowing lines.
- Summary: huge memory formula, no clutter.

Avoid putting all content on screen at once. Inactive content should be dimmed.

For the 046-style root-word grid:

- Lay out cards symmetrically according to the actual word count.
- For 7 words, use a balanced 4-over-3 arrangement with the lower row centered.
- For 6 words, use 3-over-3 or another centered symmetric layout.
- Never leave a visible empty eighth slot just because the template can hold 8 cards.
- Connector lines must sit behind cards and connect edge-to-edge, not center-to-center through text.
- Long words such as `orthodontist` must shrink inside grid cards instead of being clipped or hidden.

## Motion

Use shared helpers instead of ad hoc interpolation in every component:

- `slamIn`: hard entrance with vertical movement.
- `punchZoom`: impact zoom on key reveals.
- `shake`: short hit shake for emphasis.
- `beatPulse`: subtle active pulse.
- `flashOpacity`: 2-3 frame yellow transition flash.
- `highlightSweep`: yellow sweep under keyword.
- `quickCut`: rapid opacity/draw-on transitions.

Motion should be confident and short. Avoid slow easing that feels like slides.

## Remotion Component Pattern

Recommended components:

- `ParticleBackground`
- `IntroSequence`
- `RootWordTitle`
- `WordCard`
- `WordGridScene`
- `SummaryScene`
- `SubtitleBar`
- `YellowFlash`

Keep scene components visually expressive, but keep timing decisions in `timeline.ts`.

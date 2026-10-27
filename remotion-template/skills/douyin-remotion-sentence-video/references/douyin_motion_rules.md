# Douyin Motion Rules

Default motion library should include:

## Impact

- punchZoom
- microShake
- screenFlash
- redStamp
- yellowSlam
- bounceIn
- textPop
- typeHit
- glitchCut
- crushDown
- swipeSmash

## Transition

- fastCut
- whipPan
- flashCut
- zoomCut
- cardThrow
- chatPop
- errorBlink

## Background

- moving grain
- scanline drift
- yellow glow pulse
- danger red pulse for wrong expression
- subtle camera push
- parallax grid

## SFX

Each strong beat should support:

- hit
- error
- glitch
- whoosh
- pop
- send
- stamp

## Sentence Skill Motion Lock

The sentence skill must use the motion library with role separation:

- wrong expression: shake, crushDown, redStamp, glitchCut, errorBlink
- wrong meaning twist: zoomCut, flashCut, microShake, swipeSmash
- natural fix reveal: yellowSlam, punchZoom, textPop, highlightSweep
- scene reuse: chatPop, cardThrow, whipPan, subtle camera push
- final wrong-vs-right lock: snap-center, compare-board rebalance, payoff pulse

Required behavior:

- motion should be tied to generated voice beats
- every key spoken phrase should trigger a visible response
- the first 3 seconds should contain at least 4 visible actions
- do not let a scene survive on subtitle animation alone

# Episode Brief

- `episodeId`: `001_good_good_study`
- `contentType`: `chinglish-trap`
- `wrongExpression`: `Good good study, day day up.`
- `intendedMeaning`: `好好学习，天天向上。`
- `wrongMeaning`: `这不是地道英语，只是中文逐字换皮。`
- `whyItFails`: `英文不会把中文四个字直接硬拼成四个英文块。`
- `naturalExpression`: `Study hard and make progress every day.`
- `alternatives`: `Keep learning. Keep improving.`
- `simpleRule`: `中文口号要重组意思，不要逐字硬翻。`
- `usageScene`: `鼓励朋友坚持学习，或者写在成长向 caption 里。`
- `openingType`: `pain-point-slap`
- `coverTitle`: `Good good study 真不是英语`
- `caption`: `你以为自己在说英语，其实是在把中文硬翻。`

## Hook Audit

- `reasonToCare`: `很多人都说过这句，看到开头会立刻代入“我是不是也这么说过”。`
- `notJustPhraseReveal`: `先给中文痛点，再甩错误表达，再立刻反转，不让前3秒变成标题卡。`
- `mutedStillWorks`: `就算静音，也能从“你还在把中文硬翻成英文？”和“这不是英语，只是中文换皮”看懂重点。`

## Visual Plan

- `0.0-0.9s`: pain-point slam
  - `text`: `你还在把中文硬翻成英文？`
  - `motion`: `flashCut + punchZoom`
  - `sfx`: `error`
- `0.9-2.2s`: wrong phrase reveal
  - `text`: `Good good study, day day up?`
  - `motion`: `slamDown + microShake`
  - `sfx`: `hit`
- `2.2-4.0s`: verdict slam
  - `text`: `这不是英语 / 只是中文换皮`
  - `motion`: `redStamp + glitchCut`
  - `sfx`: `stamp`
- `4.0-6.5s`: social consequence hit
  - `text`: `老外可能听懂 / 但一听就知道你在直译`
  - `motion`: `crushDown + underlineHit`
- `6.5-9.2s`: quick judgment line
  - `text`: `能当梗 / 别当正式英语`
  - `motion`: `fastCut + textPop`
- `9.2-13.8s`: formal fix slam
  - `text`: `Study hard and make progress every day.`
  - `motion`: `yellowSlam + wordReveal`
- `13.8-17.8s`: short spoken fix
  - `text`: `Keep learning. / Keep improving.`
  - `motion`: `messageSend + glowSweep`
- `17.8-22.2s`: usage scene
  - `text`: `鼓励朋友 / 或者写 caption / 就发 Keep learning. Keep improving.`
  - `motion`: `chatPop + subtle bounce`
- `22.2-27.2s`: final wrong vs right lock
  - `wrong`: `Good good study, day day up.`
  - `right`: `Keep learning. Keep improving.`
  - `motion`: `swipeSmash + final lock`

# Episode Brief

- `episodeId`: `011_open_the_light`
- `contentType`: `chinglish-trap`
- `wrongExpression`: `Open the light.`
- `intendedMeaning`: `你想说的是“开灯”。`
- `wrongMeaning`: `这不是地道英语，而是把中文“开”直接套成了 open。`
- `whyItFails`: `英语里灯是被 turn on，不是被 open。`
- `naturalExpression`: `Turn on the light.`
- `alternatives`: `Switch on the light.`
- `simpleRule`: `说设备启动、灯亮起来，优先想 turn on。`
- `usageScene`: `屋里太暗，提醒别人开灯；或者你自己一进门顺手说一句。`
- `openingType`: `wrong-expression-slam`
- `coverTitle`: `Open the light 不是开灯`
- `caption`: `你以为自己在说英语，其实是在把中文动词硬套进去。`

## Hook Audit

- `reasonToCare`: `“开灯”是高频生活表达，很多人第一反应真会说成 Open the light。`
- `notJustPhraseReveal`: `开头不先讲规则，直接把错句打到脸上，再立刻给替换答案。`
- `mutedStillWorks`: `就算静音，也能从红叉错句、yellow slam 正确句和 wrong vs right 看懂重点。`

## First 3 Seconds

1. `0.0-1.0s`
   `text`: `Open the light?`
   `motion`: `red cross + punchZoom + shake`
   `sfx`: `alarm hit`
2. `1.0-2.2s`
   `text`: `想说开灯，别这样说`
   `motion`: `glitch crush + strike-through`
   `sfx`: `glitch`
3. `2.2-3.0s`
   `text`: `这句一听就像中式硬翻`
   `motion`: `warning stamp + text smash`
   `sfx`: `stamp`

## Scene Metaphor

错误表达像一块按错了的开关面板，被红叉、裂纹和震动不断打断；正确表达像黄灯一下通电，整句被点亮。

## Slot Swap Design

- `Slot A / Wrong`: `Open the light.`
- `Slot B / Right`: `Turn on the light.`
- 核心替换不是换单词，而是把“中文的开”换成“英语里让设备启动的说法”。

## Drill Lines

- `Wrong`: `Open the light.`
- `Right`: `Turn on the light.`
- `Memory`: `开灯先想 turn on，不要硬套 open。`

## Visual Plan

- `0.0-3.0s`: wrong expression hard slam
- `3.0-8.5s`: why it sounds wrong
- `8.5-11.8s`: main fix yellow slam
- `11.8-14.8s`: optional native alternative
- `14.8-18.8s`: real room-use scene
- `18.8-22.5s`: final wrong vs right lock

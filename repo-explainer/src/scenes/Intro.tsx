import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {lineFrame, SceneTiming} from '../timeline';
import {FONT_STACK, THEME} from '../theme';
import {Arrow, Card, Chip, clamp, Count, Kicker, Mono, Reveal, Title, Y} from '../ui';

type SceneProps = {scene: SceneTiming};

export const HookScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const stats = [
    {value: 83, label: 'episodes', at: lineFrame(scene, 1, 0)},
    {value: 3, label: 'content lines', at: lineFrame(scene, 1, 0.3)},
    {value: 1, label: 'Remotion template', at: lineFrame(scene, 1, 0.62)},
  ];
  const glow = interpolate(Math.sin(frame / 9), [-1, 1], [0.35, 0.7]);

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 80px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40}}>
      <Reveal at={2} from="left">
        <Kicker>抖音英语卡片视频工厂</Kicker>
      </Reveal>
      <Reveal at={6} from="slam">
        <Title size={170} style={{color: THEME.yellow, textShadow: `0 0 60px rgba(255, 212, 59, ${glow})`}}>
          GYEVideo
        </Title>
      </Reveal>
      <Reveal at={18}>
        <Title size={64} style={{color: THEME.white}}>
          A factory for Douyin
          <br />
          English-learning shorts
        </Title>
      </Reveal>
      <div style={{display: 'flex', flexDirection: 'column', gap: 26, marginTop: 50}}>
        {stats.map((stat) => (
          <Reveal key={stat.label} at={stat.at} from="right">
            <Card active={frame >= stat.at} style={{display: 'flex', alignItems: 'baseline', gap: 30, padding: '26px 40px'}}>
              <div style={{fontFamily: FONT_STACK, fontSize: 120, fontWeight: 900, color: THEME.yellow, minWidth: 170}}>
                <Count to={stat.value} at={stat.at} length={stat.value > 10 ? 24 : 6} />
              </div>
              <div style={{fontFamily: FONT_STACK, fontSize: 54, fontWeight: 800, color: THEME.white}}>{stat.label}</div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const packages = [
  {path: 'episodes/046_man_words', tag: 'root word'},
  {path: 'sentence-episodes/018_long_time_no_see', tag: 'sentence'},
  {path: 'read-aloud-episodes/001_prevalent_habits', tag: 'read-aloud'},
];

export const CoreScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const second = lineFrame(scene, 1, 0);
  const strike = interpolate(frame, [lineFrame(scene, 0, 0.35), lineFrame(scene, 0, 0.65)], [0, 1], clamp);

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 70px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Reveal at={2}>
        <Kicker>The core rule</Kicker>
      </Reveal>
      <Reveal at={6} from="slam" style={{marginTop: 26, position: 'relative'}}>
        <Title size={58} style={{textAlign: 'center', whiteSpace: 'nowrap'}}>
          <span style={{color: THEME.red}}>✕</span> copy the Remotion project
        </Title>
        <div
          style={{
            position: 'absolute',
            left: '9%',
            top: '52%',
            height: 10,
            width: `${strike * 82}%`,
            background: THEME.red,
            borderRadius: 5,
            boxShadow: '0 0 20px rgba(255, 77, 77, 0.8)',
          }}
        />
      </Reveal>

      <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 70, width: '100%'}}>
        {packages.map((item, index) => (
          <Reveal key={item.path} at={second + index * 6} from="left">
            <Card style={{padding: '22px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Mono size={30}>{item.path}/</Mono>
              <Chip style={{fontSize: 22, padding: '6px 16px'}}>{item.tag}</Chip>
            </Card>
          </Reveal>
        ))}
      </div>
      <Arrow at={second + 22} />
      <Reveal at={second + 30} from="scale" style={{width: '100%'}}>
        <Card active style={{textAlign: 'center', padding: '36px 30px'}}>
          <Mono size={46} color={THEME.yellow} style={{fontWeight: 700}}>
            remotion-template/
          </Mono>
          <div style={{fontFamily: FONT_STACK, fontSize: 30, color: THEME.gray, marginTop: 12}}>the one and only template</div>
        </Card>
      </Reveal>
      <Arrow at={lineFrame(scene, 1, 0.65)} />
      <Reveal at={lineFrame(scene, 1, 0.72)} from="up">
        <div style={{display: 'flex', gap: 16}}>
          {['.mp4', 'cover.png', 'caption.txt'].map((name) => (
            <Chip key={name} active>
              {name}
            </Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

const lines = [
  {count: 59, title: 'Word roots', zh: '词根单词', folder: 'episodes/', sample: '-ject  -port  -spect  …  -man  -alt'},
  {count: 20, title: 'Sentences', zh: '句型 · 中式英语纠错', folder: 'sentence-episodes/', sample: 'add oil  ·  long time no see'},
  {count: 4, title: 'Scene vocab', zh: '情景记单词跟读', folder: 'read-aloud-episodes/', sample: 'exam week  ·  group project'},
];

export const LinesScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const ats = [lineFrame(scene, 1, 0), lineFrame(scene, 1, 0.3), lineFrame(scene, 1, 0.68)];

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 70px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 34}}>
      <Reveal at={2}>
        <Title size={88}>
          Three <Y>content lines</Y>
        </Title>
      </Reveal>
      {lines.map((line, index) => (
        <Reveal key={line.title} at={ats[index]} from="right">
          <Card active={frame >= ats[index]} style={{display: 'flex', alignItems: 'center', gap: 36, padding: '34px 38px'}}>
            <div style={{fontFamily: FONT_STACK, fontSize: 130, fontWeight: 900, color: THEME.yellow, width: 190, textAlign: 'center'}}>
              <Count to={line.count} at={ats[index]} length={line.count > 10 ? 20 : 6} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <div style={{fontFamily: FONT_STACK, fontSize: 54, fontWeight: 900, color: THEME.white}}>{line.title}</div>
              <div style={{fontFamily: FONT_STACK, fontSize: 32, fontWeight: 700, color: THEME.yellow}}>{line.zh}</div>
              <Mono size={26} color={THEME.gray}>
                {line.folder}
              </Mono>
              <div style={{fontFamily: FONT_STACK, fontSize: 26, color: THEME.gray}}>{line.sample}</div>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
};

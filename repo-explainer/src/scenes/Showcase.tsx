import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {lineFrame, SceneTiming} from '../timeline';
import {FONT_STACK, THEME} from '../theme';
import {Card, Chip, clamp, Kicker, Mono, Reveal, StillSequence, Title, Y} from '../ui';

type SceneProps = {scene: SceneTiming};

const ROOTS = [
  'ject', 'port', 'spect', 'vis', 'aud', 'dict', 'script', 'tract', 'press', 'form', 'struct', 'flect', 'rupt',
  'mit', 'tend', 'voc', 'pel', 'cede', 'log', 'phon', 'photo', 'graph', 'tele', 'auto', 'bio', 'geo', 'chron',
  'path', 'psych', 'therm', 'meter', 'scope', 'sci', 'cred', 'fac', 'cap', 'pos', 'tain', 'viv', 'mort', 'gen',
  'nat', 'corp', 'man', 'ped', 'dent', 'cardi', 'derm', 'aqua', 'mar', 'pyro', 'luc', 'vac', 'plen', 'min',
  'magn', 'alt',
];

const RootMarquee: React.FC = () => {
  const frame = useCurrentFrame();
  const row = [...ROOTS, ...ROOTS];
  return (
    <div style={{overflow: 'hidden', width: '100%', maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)'}}>
      <div style={{display: 'flex', gap: 14, transform: `translateX(${-frame * 3.2}px)`}}>
        {row.map((root, index) => (
          <Chip key={`${root}-${index}`} active={root === 'man'} style={{fontSize: 28}}>
            -{root}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export const RootScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const beats = [
    {label: 'Hook', at: lineFrame(scene, 1, 0)},
    {label: 'Orbit', at: lineFrame(scene, 1, 0.2)},
    {label: 'Root', at: lineFrame(scene, 1, 0.45)},
    {label: 'Cards', at: lineFrame(scene, 1, 0.62)},
    {label: 'Grid', at: lineFrame(scene, 1, 0.82)},
  ];
  const benchmark = lineFrame(scene, 2, 0);

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 70px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30}}>
      <Reveal at={2} from="left">
        <Kicker>Line 1 · episodes/ · 词根</Kicker>
      </Reveal>
      <Reveal at={lineFrame(scene, 0, 0.6)} from="slam">
        <Title size={96}>
          <Y>man / manu</Y> = hand
        </Title>
      </Reveal>
      <Reveal at={6} from="scale">
        <StillSequence
          width={940}
          items={[
            {src: 'root_20', at: 0},
            {src: 'root_120', at: beats[1].at},
            {src: 'root_450', at: beats[2].at},
            {src: 'root_800', at: beats[3].at},
            {src: 'root_1680', at: benchmark},
          ]}
        />
      </Reveal>
      <div style={{display: 'flex', gap: 12, justifyContent: 'space-between'}}>
        {beats.map((beat, index) => {
          const next = beats[index + 1]?.at ?? benchmark;
          return (
            <Reveal key={beat.label} at={beat.at} from="up">
              <Chip active={frame >= beat.at && frame < next} style={{fontSize: 32, padding: '14px 26px'}}>
                {beat.label}
              </Chip>
            </Reveal>
          );
        })}
      </div>
      <Reveal at={benchmark} from="slam">
        <Card active style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 34px'}}>
          <Mono size={36} color={THEME.yellow} style={{fontWeight: 700}}>
            046_man_words
          </Mono>
          <div style={{fontFamily: FONT_STACK, fontSize: 34, fontWeight: 800, color: THEME.white}}>= visual benchmark</div>
        </Card>
      </Reveal>
      <Reveal at={10}>
        <RootMarquee />
      </Reveal>
    </div>
  );
};

export const SentenceScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const steps = [
    {icon: '✕', label: 'Wrong expression', sub: 'punished on screen', color: THEME.red, at: lineFrame(scene, 1, 0)},
    {icon: '↻', label: 'Meaning twist', sub: 'what they actually hear', color: THEME.yellow, at: lineFrame(scene, 1, 0.38)},
    {icon: '✓', label: 'Native fix', sub: 'slams in', color: THEME.green, at: lineFrame(scene, 1, 0.68)},
    {icon: '■', label: 'Use it · lock it', sub: 'wrong vs right', color: THEME.yellow, at: lineFrame(scene, 2, 0)},
  ];
  const compare = lineFrame(scene, 2, 0);

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 60px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30}}>
      <Reveal at={2} from="left">
        <Kicker>Line 2 · sentence-episodes/ · 句型</Kicker>
      </Reveal>
      <Reveal at={6} from="slam">
        <Title size={92}>
          <Y>Chinglish Trap</Y> mode
        </Title>
      </Reveal>
      <div style={{display: 'flex', gap: 34, alignItems: 'flex-start'}}>
        <Reveal at={8} from="left">
          <StillSequence
            width={470}
            items={[
              {src: 'sent_15', at: 0},
              {src: 'sent_250', at: steps[1].at},
              {src: 'sent_900', at: steps[2].at},
              {src: 'sent_1100', at: compare},
            ]}
          />
        </Reveal>
        <div style={{display: 'flex', flexDirection: 'column', gap: 22, flex: 1, paddingTop: 20}}>
          {steps.map((step, index) => {
            const next = steps[index + 1]?.at ?? Infinity;
            const active = frame >= step.at && frame < next;
            return (
              <Reveal key={step.label} at={step.at} from="right">
                <Card active={active} style={{padding: '24px 26px', display: 'flex', gap: 22, alignItems: 'center'}}>
                  <div style={{fontFamily: FONT_STACK, fontSize: 56, fontWeight: 900, color: step.color, width: 56, textAlign: 'center'}}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{fontFamily: FONT_STACK, fontSize: 36, fontWeight: 900, color: THEME.white}}>{step.label}</div>
                    <div style={{fontFamily: FONT_STACK, fontSize: 25, color: THEME.gray, marginTop: 4}}>{step.sub}</div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Reveal at={compare} from="up">
        <Card style={{display: 'flex', flexDirection: 'column', gap: 16, padding: '26px 34px'}}>
          <div style={{fontFamily: FONT_STACK, fontSize: 34, fontWeight: 800, color: THEME.gray}}>
            friends → <span style={{color: THEME.white}}>Long time no see!</span>
          </div>
          <div style={{fontFamily: FONT_STACK, fontSize: 40, fontWeight: 900, color: THEME.gray}}>
            client → <Y>It&apos;s been a while.</Y>
          </div>
        </Card>
      </Reveal>
    </div>
  );
};

const STORY: ({text: string} | {word: string; gloss: string; phonetic: string; pos: string; scene: string})[] = [
  {text: '当熬夜成了我 '},
  {word: 'prevalent', gloss: '普遍的，盛行的', phonetic: '/ˈprevələnt/', pos: 'adj.', scene: '熬夜成了普遍日常'},
  {text: ' 的日常，每晚对手机的 '},
  {word: 'obsessed', gloss: '着迷的，沉迷的', phonetic: '/əbˈsest/', pos: 'adj.', scene: '被手机抓住注意力'},
  {text: ' 都会让我忘掉被早八支配的 '},
  {word: 'dread', gloss: '恐惧，害怕', phonetic: '/dred/', pos: 'n./v.', scene: '一想到早八就发怵'},
  {text: '。闹钟一响，直接 '},
  {word: 'shatter', gloss: '粉碎，打碎', phonetic: '/ˈʃætər/', pos: 'v.', scene: '闹钟粉碎美梦'},
  {text: ' 美梦。'},
];

export const ReadAloudScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const words = STORY.filter((token): token is Extract<(typeof STORY)[number], {word: string}> => 'word' in token);
  const cycleStart = lineFrame(scene, 1, 0);
  const cycleEnd = lineFrame(scene, 1, 1);
  const activeIndex =
    frame < cycleStart
      ? -1
      : Math.min(words.length - 1, Math.floor(interpolate(frame, [cycleStart, cycleEnd], [0, words.length], clamp)));
  const activeWord = activeIndex >= 0 ? words[activeIndex] : null;

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 70px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30}}>
      <Reveal at={2} from="left">
        <Kicker>Line 3 · read-aloud-episodes/ · 情景跟读</Kicker>
      </Reveal>
      <Reveal at={6} from="scale">
        <StillSequence
          width={940}
          items={[
            {src: 'read_120', at: 0},
            {src: 'read_500', at: lineFrame(scene, 0, 0.7)},
          ]}
        />
      </Reveal>
      <Reveal at={lineFrame(scene, 0, 0.5)} from="up">
        <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
          <Chip active>25–35 s</Chip>
          <Chip active>10–12 words</Chip>
          <Chip>中文读中文 · 英文读英文</Chip>
        </div>
      </Reveal>
      <Reveal at={cycleStart - 6} from="up">
        <Card style={{padding: '28px 32px', background: '#FFF8DC', border: `3px solid ${THEME.yellow}`}}>
          <div style={{fontFamily: FONT_STACK, fontSize: 34, fontWeight: 700, color: '#1F1F1F', lineHeight: 1.9}}>
            {STORY.map((token, index) => {
              if ('text' in token) {
                return <span key={index}>{token.text}</span>;
              }
              const active = activeWord?.word === token.word;
              return (
                <span
                  key={index}
                  style={{
                    padding: '2px 10px',
                    margin: '0 2px',
                    borderRadius: 8,
                    border: '3px solid #1F1F1F',
                    background: active ? THEME.yellow : '#FFFDF2',
                    boxShadow: active ? '0 6px 0 #1F1F1F' : 'none',
                    fontWeight: 900,
                  }}
                >
                  {token.word}
                </span>
              );
            })}
          </div>
        </Card>
      </Reveal>
      {activeWord ? (
        <Card active style={{display: 'flex', gap: 30, alignItems: 'center', padding: '26px 34px'}}>
          <div style={{minWidth: 300}}>
            <div style={{fontFamily: FONT_STACK, fontSize: 56, fontWeight: 900, color: THEME.yellow}}>{activeWord.word}</div>
            <div style={{fontFamily: FONT_STACK, fontSize: 28, color: THEME.gray}}>
              {activeWord.phonetic} {activeWord.pos}
            </div>
          </div>
          <div style={{borderLeft: `4px solid ${THEME.yellow}`, paddingLeft: 28}}>
            <div style={{fontFamily: FONT_STACK, fontSize: 42, fontWeight: 900, color: THEME.white}}>{activeWord.gloss}</div>
            <div style={{fontFamily: FONT_STACK, fontSize: 28, color: THEME.gray, marginTop: 6}}>{activeWord.scene}</div>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

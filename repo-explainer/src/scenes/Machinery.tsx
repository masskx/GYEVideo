import React from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {lineFrame, SceneTiming} from '../timeline';
import {FONT_STACK, MONO_STACK, THEME} from '../theme';
import {Card, Chip, clamp, Kicker, Mono, Reveal, Still, Title, Y} from '../ui';

type SceneProps = {scene: SceneTiming};

const TREE: {text: string; note?: string; depth: number; key?: boolean}[] = [
  {text: 'episodes/046_man_words/', depth: 0, key: true},
  {text: 'brief.md', note: 'hook · audience · key words', depth: 1},
  {text: 'data/', depth: 1, key: true},
  {text: 'episodeConfig.ts', note: 'type · BGM · hook', depth: 2},
  {text: 'voiceScript.ts', note: 'every spoken line', depth: 2},
  {text: 'words.ts', note: 'or sentencePattern / readingPassage', depth: 2},
  {text: 'generatedVoiceTimeline.ts', note: 'real timing', depth: 2},
  {text: 'audio/', note: 'generated', depth: 1},
  {text: 'exports/', note: 'mp4 · cover · caption', depth: 1},
  {text: 'notes.md', note: 'QA record', depth: 1},
];

export const PackageScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const start = lineFrame(scene, 0, 0.4);
  const end = lineFrame(scene, 1, 0.92);
  const step = (end - start) / TREE.length;

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 60px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 34}}>
      <Reveal at={2} from="left">
        <Kicker>Anatomy of an episode</Kicker>
      </Reveal>
      <Reveal at={6}>
        <Title size={84}>
          Same <Y>shape</Y>, every time
        </Title>
      </Reveal>
      <Card style={{padding: '36px 34px', display: 'flex', flexDirection: 'column', gap: 18}}>
        {TREE.map((row, index) => {
          const at = start + index * step;
          const opacity = interpolate(frame, [at, at + 6], [0, 1], clamp);
          const lit = frame >= at && frame < at + step + 4;
          return (
            <div key={row.text} style={{opacity, display: 'flex', alignItems: 'baseline', gap: 18, paddingLeft: row.depth * 46}}>
              <span style={{fontFamily: MONO_STACK, fontSize: 30, color: THEME.dim}}>{row.depth === 0 ? '▸' : '├─'}</span>
              <span
                style={{
                  fontFamily: MONO_STACK,
                  fontSize: 34,
                  fontWeight: row.key ? 700 : 400,
                  color: lit || row.key ? THEME.yellow : THEME.white,
                }}
              >
                {row.text}
              </span>
              {row.note ? <span style={{fontFamily: FONT_STACK, fontSize: 25, color: THEME.gray}}>{row.note}</span> : null}
            </div>
          );
        })}
      </Card>
      <Reveal at={lineFrame(scene, 1, 0.5)} from="up">
        <Card style={{padding: '24px 30px'}}>
          <pre style={{margin: 0, fontFamily: MONO_STACK, fontSize: 26, lineHeight: 1.5, color: THEME.white}}>
            <span style={{color: THEME.gray}}>{'// voiceScript.ts'}</span>
            {'\n{\n  id: '}
            <span style={{color: THEME.yellow}}>&apos;hook&apos;</span>
            {',\n  text: '}
            <span style={{color: THEME.green}}>&apos;manage，你可能一直不知道它在说什么。&apos;</span>
            {',\n  speedHint: '}
            <span style={{color: THEME.yellow}}>&apos;very-fast-clear&apos;</span>
            {',\n}'}
          </pre>
        </Card>
      </Reveal>
    </div>
  );
};

const STEPS = [
  {cmd: 'npm run episode:use -- ../episodes/046_man_words', what: 'sync the package into the template'},
  {cmd: 'npm run voice', what: 'TTS + timing'},
  {cmd: 'npm run preview', what: 'Remotion Studio'},
  {cmd: 'npm run render', what: 'export the release package'},
];

export const PipelineScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const ats = [lineFrame(scene, 1, 0), lineFrame(scene, 2, 0), lineFrame(scene, 3, 0), lineFrame(scene, 3, 0.3)];
  const voiceFlow = ['voiceScript.ts', 'CosyVoice', 'ffprobe', 'timeline'];

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 60px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26}}>
      <Reveal at={2} from="left">
        <Kicker>Pipeline</Kicker>
      </Reveal>
      <Reveal at={6}>
        <Title size={84}>
          <Y>Four</Y> commands
        </Title>
      </Reveal>
      {STEPS.map((step, index) => {
        const next = ats[index + 1] ?? Infinity;
        const active = frame >= ats[index] && frame < next;
        return (
          <Reveal key={step.cmd} at={index === 0 ? 10 : 10 + index * 5} from="left">
            <Card active={active} style={{padding: '24px 28px', opacity: frame >= ats[index] ? 1 : 0.45}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <div
                  style={{
                    fontFamily: FONT_STACK,
                    fontSize: 34,
                    fontWeight: 900,
                    width: 58,
                    height: 58,
                    borderRadius: 29,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: active ? THEME.yellow : 'rgba(248,248,248,0.1)',
                    color: active ? THEME.background : THEME.white,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div>
                  <Mono size={index === 0 ? 27 : 34} color={THEME.yellow}>
                    $ {step.cmd}
                  </Mono>
                  <div style={{fontFamily: FONT_STACK, fontSize: 27, color: THEME.gray, marginTop: 6}}>{step.what}</div>
                </div>
              </div>
              {index === 1 && frame >= ats[1] ? (
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, flexWrap: 'wrap'}}>
                  {voiceFlow.map((item, i) => (
                    <Reveal key={item} at={ats[1] + i * 14} from="scale" style={{display: 'flex', alignItems: 'center', gap: 10}}>
                      <Chip active={i === voiceFlow.length - 1} style={{fontSize: 25, padding: '8px 16px'}}>
                        {item}
                      </Chip>
                      {i < voiceFlow.length - 1 ? <span style={{color: THEME.yellow, fontSize: 30, fontWeight: 900}}>→</span> : null}
                    </Reveal>
                  ))}
                </div>
              ) : null}
              {index === 3 && frame >= ats[3] ? (
                <div style={{display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap'}}>
                  {['.mp4', '_cover.png', '_caption.txt', '_publish_notes.md'].map((item, i) => (
                    <Reveal key={item} at={ats[3] + i * 8} from="scale">
                      <Chip active style={{fontSize: 25, padding: '8px 16px'}}>
                        {item}
                      </Chip>
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </Card>
          </Reveal>
        );
      })}
      <Reveal at={ats[1] + 30} from="up">
        <div style={{fontFamily: FONT_STACK, fontSize: 30, color: THEME.gray, textAlign: 'center'}}>
          DashScope · cosyvoice-v3-flash · voice <span style={{color: THEME.white}}>longanhuan</span> · 48 kHz
        </div>
      </Reveal>
    </div>
  );
};

const SKILLS = [
  {name: 'douyin-remotion-video', refs: 8, what: 'word roots'},
  {name: 'douyin-remotion-sentence-video', refs: 29, what: 'sentences'},
  {name: 'douyin-remotion-read-aloud-vocab', refs: 4, what: 'scene vocab'},
];

const RULES = [
  'hook_rules', 'rhythm_rules', 'subtitle_rules', 'voice_rules', 'anti_ppt_rules', 'boring_video_killer_rules',
  'earworm_rules', 'chinglish_trap_rules', 'frame_fill_rules', 'micro_drama_rules', 'ending_rules',
  'kinetic_visual_rules', 'scene_first_rules', 'audio_rules', 'icon_rules', 'quality_rules',
];

export const SkillsScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const rulesAt = lineFrame(scene, 1, 0.2);
  const highlight = ['anti_ppt_rules', 'boring_video_killer_rules'];
  const highlightAt = lineFrame(scene, 1, 0.68);

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 60px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26}}>
      <Reveal at={2} from="left">
        <Kicker>Rules as code</Kicker>
      </Reveal>
      <Reveal at={6}>
        <Title size={80}>
          Skills for <Y>AI agents</Y>
        </Title>
      </Reveal>
      {SKILLS.map((skill, index) => (
        <Reveal key={skill.name} at={lineFrame(scene, 0, 0.3) + index * 7} from="right">
          <Card style={{padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <Mono size={30} color={THEME.yellow}>
                {skill.name}
              </Mono>
              <div style={{fontFamily: FONT_STACK, fontSize: 26, color: THEME.gray, marginTop: 4}}>
                SKILL.md · workflow · prompts · templates · {skill.what}
              </div>
            </div>
            <div style={{fontFamily: FONT_STACK, fontSize: 44, fontWeight: 900, color: THEME.white}}>{skill.refs}</div>
          </Card>
        </Reveal>
      ))}
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 10}}>
        {RULES.map((rule, index) => {
          const lit = highlight.includes(rule) && frame >= highlightAt;
          return (
            <Reveal key={rule} at={rulesAt + index * 2} from="scale">
              <Chip active={lit} style={{fontFamily: MONO_STACK, fontSize: 24, padding: '8px 16px', fontWeight: 400}}>
                {rule}.md
              </Chip>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

const ICONS = ['cute_cat', 'cute_dog', 'cute_bee', 'cute_bird', 'cute_chick', 'cute_crab', 'cute_dinosaur', 'cute_chameleon'];
const QA = ['tsc --noEmit passes', 'contact sheet vs 046', 'no text overflow', 'BGM ducked under voice'];

export const AssetsScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const qaStart = lineFrame(scene, 1, 0.1);
  const qaStep = (lineFrame(scene, 1, 0.95) - qaStart) / QA.length;

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 60px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26}}>
      <Reveal at={2} from="left">
        <Kicker>shared-assets/ · content bank</Kicker>
      </Reveal>
      <div style={{display: 'flex', gap: 22}}>
        <Reveal at={6} from="left" style={{flex: 1}}>
          <Card style={{padding: '24px 26px', height: 250}}>
            <div style={{fontFamily: FONT_STACK, fontSize: 32, fontWeight: 900, color: THEME.white}}>BGM</div>
            <div style={{fontFamily: FONT_STACK, fontSize: 24, color: THEME.gray}}>suspense · tech</div>
            <div style={{display: 'flex', alignItems: 'flex-end', gap: 7, height: 110, marginTop: 18}}>
              {Array.from({length: 16}).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 14,
                    borderRadius: 4,
                    background: THEME.yellow,
                    height: 20 + Math.abs(Math.sin(frame / 6 + i * 0.9)) * 86,
                  }}
                />
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal at={12} from="right" style={{flex: 1.3}}>
          <Card style={{padding: '24px 26px', height: 250}}>
            <div style={{fontFamily: FONT_STACK, fontSize: 32, fontWeight: 900, color: THEME.white}}>
              <Y>47</Y> animal icons
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 18}}>
              {ICONS.map((icon, i) => (
                <Img
                  key={icon}
                  src={staticFile(`icons/${icon}.svg`)}
                  style={{width: 66, height: 66, transform: `translateY(${Math.sin(frame / 8 + i) * 6}px)`}}
                />
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
      <Reveal at={lineFrame(scene, 0, 0.55)} from="up">
        <Card style={{padding: '26px 30px', background: '#FFF8DC', border: `3px solid ${THEME.yellow}`}}>
          <div style={{fontFamily: FONT_STACK, fontSize: 30, fontWeight: 900, color: '#1F1F1F'}}>大学生活真实情绪故事100篇 · 100 stories</div>
          <div style={{fontFamily: FONT_STACK, fontSize: 28, fontWeight: 800, color: '#1F1F1F', marginTop: 14}}>001｜署名排在最后的人</div>
          <div style={{fontFamily: FONT_STACK, fontSize: 25, color: '#444', marginTop: 8, lineHeight: 1.5}}>
            周一组长说他会整合报告。周四他突然失联，展示只剩一天……
          </div>
        </Card>
      </Reveal>
      <Reveal at={qaStart - 6} from="up">
        <Card active style={{padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: 16}}>
          <div style={{fontFamily: FONT_STACK, fontSize: 34, fontWeight: 900, color: THEME.yellow}}>Before anything ships</div>
          {QA.map((item, index) => {
            const at = qaStart + index * qaStep;
            const done = frame >= at;
            return (
              <div key={item} style={{display: 'flex', alignItems: 'center', gap: 18, opacity: done ? 1 : 0.35}}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    border: `3px solid ${THEME.green}`,
                    background: done ? THEME.green : 'transparent',
                    color: THEME.background,
                    fontSize: 32,
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_STACK,
                  }}
                >
                  {done ? '✓' : ''}
                </div>
                <div style={{fontFamily: FONT_STACK, fontSize: 34, fontWeight: 800, color: THEME.white}}>{item}</div>
              </div>
            );
          })}
        </Card>
      </Reveal>
    </div>
  );
};

export const OutroScene: React.FC<SceneProps> = ({scene}) => {
  const frame = useCurrentFrame();
  const second = lineFrame(scene, 1, 0);
  const finale = lineFrame(scene, 1, 0.72);
  const ignored = ['exports/', 'audio/', '.env  (DASHSCOPE_API_KEY)'];
  const quick = ['npm ci', 'npm run episode:use -- …', 'npm run voice', 'npm run render'];

  return (
    <div style={{position: 'absolute', inset: 0, padding: '170px 60px 330px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26}}>
      <Reveal at={2} from="left">
        <Kicker color={THEME.red}>Not in git · .gitignore</Kicker>
      </Reveal>
      <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
        {ignored.map((item, index) => (
          <Reveal key={item} at={8 + index * 8} from="scale">
            <Chip style={{fontFamily: MONO_STACK, fontWeight: 400, textDecoration: 'line-through', color: THEME.gray}}>{item}</Chip>
          </Reveal>
        ))}
      </div>
      <Reveal at={second} from="up">
        <Card style={{padding: '26px 30px', display: 'flex', flexDirection: 'column', gap: 12}}>
          {quick.map((cmd, index) => (
            <Reveal key={cmd} at={second + index * 10} from="left">
              <Mono size={34} color={THEME.yellow}>
                $ {cmd}
              </Mono>
            </Reveal>
          ))}
        </Card>
      </Reveal>
      <div style={{position: 'relative', height: 560, marginTop: 10}}>
        {[
          {src: 'root_cover', rotate: -8, x: 130},
          {src: 'read_cover', rotate: 8, x: 530},
        ].map((cover, index) => (
          <Reveal key={cover.src} at={second + 16 + index * 6} from="up" style={{position: 'absolute', left: cover.x, top: 0}}>
            <Still src={cover.src} width={300} style={{transform: `rotate(${cover.rotate}deg)`}} />
          </Reveal>
        ))}
        <Reveal at={finale} from="slam" style={{position: 'absolute', left: 0, right: 0, top: 190, textAlign: 'center'}}>
          <Title
            size={150}
            style={{
              color: THEME.yellow,
              textShadow: `0 0 50px rgba(255, 212, 59, ${interpolate(Math.sin(frame / 8), [-1, 1], [0.4, 0.9])}), 0 10px 0 #000`,
            }}
          >
            GYEVideo
          </Title>
        </Reveal>
      </div>
    </div>
  );
};

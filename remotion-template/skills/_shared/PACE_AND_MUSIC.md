# Pace and music

One setting, `pace`, decides how fast an episode moves. The background music follows that pace and the episode's timeline. It is composed and rendered on your machine (no online service, no downloaded tracks), from code, from a local SoundFont, or from your own WAV samples.

---

## 1. Pace

### Why

Measured on the reference episodes before paces existed:
- 25–30 % of each video had no narration (13–21 s of dead air);
- the voice ran at 2.6–3.8 syllables per second.

Douyin / TikTok study videos run at about 4.5 syllables per second with almost no gaps. The `fast` pace closes that gap.

### The three paces (`src/core/pace.ts`)

| | `relaxed` | `standard` | `fast` (default for new episodes) |
|---|---|---|---|
| For | long explanations, 精读 | general | Douyin / TikTok feeds |
| Voice speed (× the line's speedHint) | 1.00 | 1.08 | 1.15 |
| Caption tail after each line | 100 % of the template's | 70 % | 40 % |
| Gap before a scene's first line | 100 % | 70 % | 45 % |
| Pauses before payoffs (`pauseBefore`) | 100 % | 75 % | 55 % |
| Minimum caption time | 1.8 s | 1.5 s | 1.2 s |
| Target length | template range × 1.0 | × 0.85–0.9 | × 0.7–0.8 |
| Music | slow tempo, energy low | mid | fast tempo, energy high |

The length range for a template at a pace is printed by `npm run timeline` and enforced by `npm run check`. At `fast` the ranges are:
- vocab-dossier 39–54 s;
- game show and whiteboard 35–53 s;
- reading templates 35–58 s.

Set it in `data/episodeConfig.ts`:

```ts
pace: 'fast',   // 'relaxed' | 'standard' | 'fast'; a missing field means relaxed (older episodes)
```

`npm run new … --pace fast` writes it (fast is the default). Changing the pace changes the voice speed, so `npm run produce` re-voices the episode by itself (the voice timeline records the rate each line was made at).

### Writing for `fast`

- The first second is content: the question, the word, the headline. No greeting.
- One idea per line, one breath per line: about 18 Chinese characters or 14 English words at most.
- Don't add pauses back to "slow it down". Use one `pauseBefore` before the payoff (the answer, the verdict), and let the music drop out there.
- `npm run timeline` prints how much of the runtime has narration. At `fast` it should be about 80–90 %.

---

## 2. Music engine (`scripts/music/`)

```
video timeline ──► compose.ts ──────────────► backends.ts ─────────► engine.ts mix ─────► score.mp3 (−16 LUFS)
(scenes, lines,    sections + energy,          soundfont (FluidSynth)  sidechain, voice              score.mid
 silences)         chords, bass, drums,        samples (your WAVs)     pocket, reverb,               <id>_music.md
                   melody, fills, risers       synth (built in)        compressor
```

### What it does with the video

- **Style from template and pace.** Each template has a default style per pace (table below). An episode may name another.
- **Tempo from the data.** `score.bpm` is also the grid the scenes snap to, so cuts land on the beat. It must sit in the style's range for the pace; `npm run audio` warns otherwise.
- **Sections follow the scenes.** Every scene kind has a role (hook, verse, build, drop, break, payoff, outro), and the role and pace set the energy (1–4). Energy decides which layers play: pad and chords → bass → drums → arpeggio and melody.
- **Transitions.**
  - a drum fill in the beat before every scene change;
  - a crash on high-energy cuts;
  - a riser into drops and payoffs, plus an impact;
  - a snare roll and riser into every silence, then silence;
  - a final stinger.
- **Harmony and melody.**
  - progressions per style (the "lift" progression in hooks and drops), voice-led chords;
  - a seeded two-bar motif, repeated and fitted to the chords, so every episode has its own hook that you can hum;
  - the same episode always gets the same music.
- **Mix for narration.**
  - the melody and arpeggio duck under the voice;
  - the music's 0.8–3.5 kHz speech band dips while someone talks (the voice pocket);
  - sidechain ducking to the kick, shared reverb, bus compression;
  - every score is mastered to −16 LUFS (true peak −1.5 dB), so music beds are equally loud across episodes.

### Styles

| Style | Slow / mid / fast BPM | Sound | Template default |
|---|---|---|---|
| `pop-bounce` | 108–114 / 116–122 / 124–132 | four-on-the-floor pop, piano stabs, brass hook, claps | game show (all paces) |
| `spy-funk` | 98–104 / 106–112 / 114–122 | minor dorian groove, clav stabs, muted trumpet | dossier (fast) |
| `noir-swing` | 92–98 / 100–108 / 110–118 | brushed jazz, walking bass, vibraphone | dossier (relaxed, standard) |
| `lofi-study` | 80–86 / 88–94 / 96–102 | swung boom-bap, Rhodes, kalimba | whiteboard (relaxed, standard) |
| `chill-pop` | 96–102 / 104–110 / 112–120 | plucked guitar, marimba, soft four-on-the-floor | whiteboard (fast) |
| `storybook` | 80–88 / 90–98 / 100–110 | pizzicato, celesta, glockenspiel | picture book (relaxed, standard) |
| `ukulele-pop` | 96–104 / 106–114 / 116–124 | strummed nylon, claps, flute lead | picture book (fast) |
| `news-pulse` | 100–106 / 108–116 / 118–128 | 8th-note synth pulse, sub bass, tight drums | caption news (all paces) |
| `trap-hype` | 128–134 / 136–142 / 144–150 | half-time 808 beat, rolling hats | none (choose it for very fast edits) |

`npm run music -- --list` prints this table and which backends this machine has.

### Episode data

```ts
score: {bpm: 128, key: 'C'},                         // the defaults: style from template + pace
score: {bpm: 146, key: 'A', style: 'trap-hype'},     // another style
score: {bpm: 124, key: 'F', kit: 'my-pop-kit'},      // your own samples for the slots the kit has
```

Keys: C, D, E, F, G, A, Bb. Change the key or tempo from the previous episode of the template (originality §9).

### Backends: all local

Each track uses the best one available: **your samples** (if the kit has that slot) → **SoundFont** → **built-in synth**. The report (`exports/<id>_music.md`) lists what each track used.

| Backend | Sounds like | Needs |
|---|---|---|
| `soundfont` | real General MIDI instruments and drum kits | FluidSynth + a `.sf2` file |
| `samples` | whatever you record or own | WAV files in `shared-assets/music-kits/<kit>/` |
| `synth` | clean electronic versions of every instrument | nothing (built in) |

**Install FluidSynth and a SoundFont (recommended):**

- Windows: download the latest release from github.com/FluidSynth/fluidsynth/releases, unzip it, and add its `bin` folder to PATH (or set `MUSIC_FLUIDSYNTH=C:\path\to\fluidsynth.exe`).
- macOS: `brew install fluid-synth`.
- Linux: `sudo apt install fluidsynth fluid-soundfont-gm`.
- SoundFont: a General MIDI `.sf2`, for example FluidR3_GM (MIT licence) or GeneralUser GS. Put it in `shared-assets/soundfonts/` (gitignored is fine; it is large), or set `MUSIC_SOUNDFONT` to its path. Linux packages install FluidR3 in `/usr/share/sounds/sf2/`, which is found automatically.

Run `npm run doctor`: the "Music: SoundFont" line must say `ok`.

**Your own sample kit:** a folder `shared-assets/music-kits/<kit>/` with any of:

- drums: `kick*.wav`, `snare*.wav`, `clap*.wav`, `rim*.wav`, `hat*.wav`, `openhat*.wav`, `ride*.wav`, `shaker*.wav`, `tom*.wav`, `crash*.wav`, `perc*.wav`. Several files for one drum alternate (round robin).
- pitched instruments: `<role>_<note>.wav` with role `bass`, `chords`, `pad`, `lead` or `arp`, e.g. `bass_C2.wav`, `lead_A4.wav`. Add more notes for better quality; the nearest sample is pitch-shifted.

Use it with `score.kit` in the data, `--kit` in the preview, or `MUSIC_KIT=<kit>` for every episode. Only use samples you own or that are licensed royalty-free for commercial video.

Force one backend for a run with `MUSIC_BACKEND=synth|soundfont|samples`.

### Commands

```powershell
npm.cmd run music -- --list                                        # styles, template defaults, backends
npm.cmd run music -- --preview pop-bounce --tempo fast             # audition a style (out/music/)
npm.cmd run music -- --preview trap-hype --tempo fast --stems      # plus one WAV per track
npm.cmd run music -- --preview chill-pop --kit my-kit --backend samples
npm.cmd run audio                                                  # the episode's score (produce runs it)
```

An episode's `npm run audio` writes:
- `public/audio/score.mp3`;
- `score.mid` (open it in any DAW, or re-render it with another SoundFont);
- `exports/<id>_music.md`: style, tempo, key, backends per track, and the section plan with energy.

### Adding a style (developers)

Add an entry to `STYLES` in `scripts/music/styles.ts`:
- mode and progressions;
- BPM per tempo;
- drum patterns per energy (16-step strings: `X` accent, `x` hit, `o` medium, `.` ghost, `-` rest) and a fill;
- bass, comp and arp figures;
- a melody rhythm (32 steps);
- instruments (GM program + synth voice) and mix levels.

Then run `npm run music -- --preview <id>` at all three tempos. To make it a template default, add it to `TEMPLATE_STYLES`.

import type {ModeName} from './theory';

// The style library. A style is everything that makes the score sound like one genre: tempo per pace,
// mode and progressions, drum grammar per energy level, bass and comping figures, melody rhythm,
// instruments (General MIDI program for SoundFont rendering + a built-in synth fallback) and mix.
//
// Pattern strings: one character per 16th note, 16 per bar (32 = two bars).
//   X accent · x hit · o medium · . ghost · - rest

export type Tempo = 'slow' | 'mid' | 'fast';
export type DrumId = 'kick' | 'snare' | 'clap' | 'rim' | 'hat' | 'openHat' | 'ride' | 'shaker' | 'tom' | 'crash' | 'perc';
export type DrumPattern = Partial<Record<DrumId, string>>;
export type SynthVoice = 'epiano' | 'piano' | 'pluck' | 'pad' | 'strings' | 'bass' | 'sub808' | 'pizz' | 'marimba' | 'bell' | 'musicbox' | 'brass' | 'square' | 'pulse' | 'kalimba' | 'organ';
export type Instrument = {gm: number; synth: SynthVoice; octave?: number};
export type BassFigure = 'root8' | 'offbeat' | 'walking' | 'sub808' | 'pop' | 'pulse16' | 'halfnote';
export type CompFigure = 'block' | 'stabs' | 'pop-piano' | 'charleston' | 'strum' | 'pulse8' | 'none';
export type ArpFigure = 'up16' | 'updown8' | 'none';

export type Style = {
  id: string;
  label: string;
  mood: string;
  mode: ModeName;
  progressions: {main: string; lift: string}; // lift = hooks and drops
  bpm: Record<Tempo, [number, number]>;
  swing: number; // 0 straight … 0.33 heavy (delay of the off 16ths, as a fraction of a 16th)
  drumKit: {gm: number}; // GM drum-kit program on channel 10 (0 standard, 16 power, 25 TR-808, 32 jazz, 40 brush)
  drums: Record<1 | 2 | 3 | 4, DrumPattern>; // by energy
  fill: DrumPattern; // the last beat before a scene change (4 steps)
  bass: BassFigure;
  comp: CompFigure;
  arp: ArpFigure;
  melody: {rhythm: string; low: number; high: number}; // 32-step onset pattern (two bars), MIDI range
  instruments: {bass: Instrument; chords: Instrument; pad: Instrument; lead: Instrument; arp: Instrument};
  mix: {sidechain: number; reverb: number; drums: number; bass: number; chords: number; pad: number; lead: number; arp: number};
};

const four = 'X---x---X---x---';

export const STYLES: Record<string, Style> = {
  'pop-bounce': {
    id: 'pop-bounce',
    label: 'Pop bounce — bright four-on-the-floor pop for game shows and hooks',
    mood: 'bright, playful, competitive',
    mode: 'major',
    progressions: {main: 'I V vi IV', lift: 'IV V iii vi'},
    bpm: {slow: [108, 114], mid: [116, 122], fast: [124, 132]},
    swing: 0,
    drumKit: {gm: 16},
    drums: {
      1: {hat: '--x---x---x---x-'},
      2: {kick: four, hat: '--x---x---x---x-', clap: '----x-------x---'},
      3: {kick: four, clap: '----X-------X---', hat: '--x---x---x---x-', shaker: 'o.o.o.o.o.o.o.o.'},
      4: {kick: four, clap: '----X-------X---', snare: '------------o--.', hat: 'x-x-x-x-x-x-x-x-', openHat: '--o---o---o---o-', shaker: 'o.o.o.o.o.o.o.o.'},
    },
    fill: {snare: 'xxxX', kick: 'x---'},
    bass: 'offbeat',
    comp: 'stabs',
    arp: 'up16',
    melody: {rhythm: 'x--x--x---x-x---x--x--x-x-------', low: 67, high: 84},
    instruments: {
      bass: {gm: 38, synth: 'bass'},
      chords: {gm: 0, synth: 'piano'},
      pad: {gm: 89, synth: 'pad'},
      lead: {gm: 62, synth: 'brass'},
      arp: {gm: 9, synth: 'bell'},
    },
    mix: {sidechain: 0.45, reverb: 0.18, drums: 0.9, bass: 0.8, chords: 0.5, pad: 0.28, lead: 0.5, arp: 0.3},
  },
  'trap-hype': {
    id: 'trap-hype',
    label: 'Trap hype — half-time 808 beat with rolling hats, the sound of fast TikTok edits',
    mood: 'confident, urgent, modern',
    mode: 'minor',
    progressions: {main: 'i VI III VII', lift: 'i iv VI V'},
    bpm: {slow: [128, 134], mid: [136, 142], fast: [144, 150]},
    swing: 0,
    drumKit: {gm: 25},
    drums: {
      1: {hat: 'x-x-x-x-x-x-x-x-'},
      2: {kick: 'X------x--x-----', hat: 'x-x-x-x-x-x-x-x-'},
      3: {kick: 'X------x--x-----', clap: '--------X-------', hat: 'x-x-x-xxx-x-x-x-'},
      4: {kick: 'X------x--x--x--', clap: '--------X-------', snare: '--------x------.', hat: 'x-xxx-x-x-xxxxx-', openHat: '------o---------', perc: '---o-------o----'},
    },
    fill: {hat: 'xxxx', clap: '---X'},
    bass: 'sub808',
    comp: 'block',
    arp: 'updown8',
    melody: {rhythm: 'x--x---x--x-----x--x---x-x------', low: 70, high: 86},
    instruments: {
      bass: {gm: 38, synth: 'sub808'},
      chords: {gm: 90, synth: 'pad'},
      pad: {gm: 91, synth: 'pad'},
      lead: {gm: 80, synth: 'square'},
      arp: {gm: 10, synth: 'musicbox'},
    },
    mix: {sidechain: 0.3, reverb: 0.22, drums: 0.95, bass: 0.9, chords: 0.3, pad: 0.25, lead: 0.4, arp: 0.3},
  },
  'spy-funk': {
    id: 'spy-funk',
    label: 'Spy funk — minor-key detective groove with stabs and a tight backbeat',
    mood: 'mysterious, clever, moving',
    mode: 'dorian',
    progressions: {main: 'i7 iv7 i7 v7', lift: 'i7 VII VI v7'},
    bpm: {slow: [98, 104], mid: [106, 112], fast: [114, 122]},
    swing: 0.08,
    drumKit: {gm: 0},
    drums: {
      1: {hat: 'x-o-x-o-x-o-x-o-'},
      2: {kick: 'X-----x---x-----', hat: 'x-o-x-o-x-o-x-o-', rim: '----x-------x---'},
      3: {kick: 'X-----x---x--x--', snare: '----X--.----X---', hat: 'x.o.x.o.x.o.x.o.'},
      4: {kick: 'X-----x---x--x--', snare: '----X--.-.--X--.', hat: 'xxoxxxoxxxoxxxox', openHat: '--------------o-', perc: '--o-------o-----'},
    },
    fill: {snare: 'x.xX', tom: '--x-'},
    bass: 'pop',
    comp: 'stabs',
    arp: 'none',
    melody: {rhythm: 'x---x-x---------x-x---x-x-------', low: 62, high: 79},
    instruments: {
      bass: {gm: 33, synth: 'bass'},
      chords: {gm: 7, synth: 'epiano'},
      pad: {gm: 48, synth: 'strings'},
      lead: {gm: 59, synth: 'brass'},
      arp: {gm: 11, synth: 'bell'},
    },
    mix: {sidechain: 0.2, reverb: 0.2, drums: 0.85, bass: 0.85, chords: 0.45, pad: 0.25, lead: 0.45, arp: 0.25},
  },
  'noir-swing': {
    id: 'noir-swing',
    label: 'Noir swing — brushed jazz with walking bass and vibraphone for case files',
    mood: 'smoky, curious, smart',
    mode: 'minor',
    progressions: {main: 'i7 iv7 VII7 III7', lift: 'VI7 ii7 v7 i7'},
    bpm: {slow: [92, 98], mid: [100, 108], fast: [110, 118]},
    swing: 0.3,
    drumKit: {gm: 40},
    drums: {
      1: {ride: 'x--.x--.x--.x--.'},
      2: {ride: 'x--.x--.x--.x--.', hat: '----x-------x---'},
      3: {kick: 'x-------x-------', ride: 'x--.x--.x--.x--.', hat: '----x-------x---', snare: '------.-------.-'},
      4: {kick: 'x-----.-x-----.-', ride: 'X--xX--xX--xX--x', hat: '----x-------x---', snare: '---.--.----.-.x-'},
    },
    fill: {snare: '.x.X', tom: 'x---'},
    bass: 'walking',
    comp: 'charleston',
    arp: 'none',
    melody: {rhythm: 'x--x----x-x-----x-----x-x--x----', low: 64, high: 81},
    instruments: {
      bass: {gm: 32, synth: 'bass'},
      chords: {gm: 4, synth: 'epiano'},
      pad: {gm: 49, synth: 'strings'},
      lead: {gm: 11, synth: 'bell'},
      arp: {gm: 11, synth: 'bell'},
    },
    mix: {sidechain: 0.05, reverb: 0.3, drums: 0.75, bass: 0.9, chords: 0.5, pad: 0.2, lead: 0.45, arp: 0.2},
  },
  'lofi-study': {
    id: 'lofi-study',
    label: 'Lo-fi study — swung boom-bap, warm keys, made for thinking at a whiteboard',
    mood: 'calm, focused, warm',
    mode: 'major',
    progressions: {main: 'IV7 iii7 ii7 I7', lift: 'vi7 ii7 V7 I7'},
    bpm: {slow: [80, 86], mid: [88, 94], fast: [96, 102]},
    swing: 0.22,
    drumKit: {gm: 32},
    drums: {
      1: {hat: 'x-x-x-x-x-x-x-x-'},
      2: {kick: 'X-----x---x-----', hat: 'x-x-x-x-x-x-x-x-'},
      3: {kick: 'X-----x---x-----', snare: '----X-------X---', hat: 'x-o-x-o-x-o-x-o-'},
      4: {kick: 'X-----x-.-x---.-', snare: '----X-------X--.', hat: 'x-o-x-o-x-o-x-oo', shaker: '..o...o...o...o.'},
    },
    fill: {snare: '--.x'},
    bass: 'halfnote',
    comp: 'block',
    arp: 'none',
    melody: {rhythm: 'x-----x---x-----x---x-----------', low: 64, high: 79},
    instruments: {
      bass: {gm: 33, synth: 'bass'},
      chords: {gm: 4, synth: 'epiano'},
      pad: {gm: 89, synth: 'pad'},
      lead: {gm: 11, synth: 'bell'},
      arp: {gm: 108, synth: 'kalimba'},
    },
    mix: {sidechain: 0.15, reverb: 0.25, drums: 0.7, bass: 0.8, chords: 0.55, pad: 0.25, lead: 0.4, arp: 0.25},
  },
  'chill-pop': {
    id: 'chill-pop',
    label: 'Chill pop — light, quick and friendly; plucks, claps and a soft four-on-the-floor',
    mood: 'light, optimistic, clear',
    mode: 'major',
    progressions: {main: 'I vi IV V', lift: 'IV V iii vi'},
    bpm: {slow: [96, 102], mid: [104, 110], fast: [112, 120]},
    swing: 0.05,
    drumKit: {gm: 0},
    drums: {
      1: {shaker: 'o.o.o.o.o.o.o.o.'},
      2: {kick: 'X-------X-------', shaker: 'o.o.o.o.o.o.o.o.', clap: '----x-------x---'},
      3: {kick: 'X---x---X---x---', clap: '----X-------X---', hat: '--x---x---x---x-', shaker: 'o.o.o.o.o.o.o.o.'},
      4: {kick: 'X---x---X---x-x-', clap: '----X-------X---', hat: 'x-x-x-x-x-x-x-x-', shaker: 'o.o.o.o.o.o.o.o.', perc: '-------o-------o'},
    },
    fill: {clap: 'x.xX'},
    bass: 'root8',
    comp: 'strum',
    arp: 'up16',
    melody: {rhythm: 'x-x---x---x-x---x-x---x-x-------', low: 67, high: 84},
    instruments: {
      bass: {gm: 33, synth: 'bass'},
      chords: {gm: 24, synth: 'pluck'},
      pad: {gm: 89, synth: 'pad'},
      lead: {gm: 12, synth: 'marimba'},
      arp: {gm: 108, synth: 'kalimba'},
    },
    mix: {sidechain: 0.25, reverb: 0.2, drums: 0.8, bass: 0.8, chords: 0.5, pad: 0.25, lead: 0.45, arp: 0.3},
  },
  storybook: {
    id: 'storybook',
    label: 'Storybook — pizzicato, celesta and glockenspiel for picture books',
    mood: 'gentle, warm, curious',
    mode: 'major',
    progressions: {main: 'I IV I V', lift: 'vi IV I V'},
    bpm: {slow: [80, 88], mid: [90, 98], fast: [100, 110]},
    swing: 0.1,
    drumKit: {gm: 48},
    drums: {
      1: {perc: 'x-------x-------'},
      2: {kick: 'x-------x-------', perc: '----x-------x---'},
      3: {kick: 'x-------x-------', perc: '----x-------x---', shaker: 'o.o.o.o.o.o.o.o.'},
      4: {kick: 'x---x---x---x---', clap: '----x-------x---', shaker: 'o.o.o.o.o.o.o.o.', perc: '--o-------o-----'},
    },
    fill: {perc: 'x.xx'},
    bass: 'halfnote',
    comp: 'pop-piano',
    arp: 'updown8',
    melody: {rhythm: 'x-x-x---x-x-x---x---x---x-------', low: 72, high: 88},
    instruments: {
      bass: {gm: 45, synth: 'pizz'},
      chords: {gm: 45, synth: 'pizz'},
      pad: {gm: 48, synth: 'strings'},
      lead: {gm: 8, synth: 'musicbox'},
      arp: {gm: 9, synth: 'bell'},
    },
    mix: {sidechain: 0, reverb: 0.3, drums: 0.6, bass: 0.7, chords: 0.5, pad: 0.25, lead: 0.45, arp: 0.25},
  },
  'ukulele-pop': {
    id: 'ukulele-pop',
    label: 'Ukulele pop — strummed nylon, claps and a flute hook for upbeat stories',
    mood: 'sunny, quick, friendly',
    mode: 'major',
    progressions: {main: 'I V vi IV', lift: 'IV I V vi'},
    bpm: {slow: [96, 104], mid: [106, 114], fast: [116, 124]},
    swing: 0.12,
    drumKit: {gm: 8},
    drums: {
      1: {shaker: 'o.o.o.o.o.o.o.o.'},
      2: {kick: 'X-------X-------', clap: '----x-------x---', shaker: 'o.o.o.o.o.o.o.o.'},
      3: {kick: 'X-----x-X-------', clap: '----X-------X---', shaker: 'o.o.o.o.o.o.o.o.'},
      4: {kick: 'X-----x-X-x-----', clap: '----X-------X---', shaker: 'x.o.x.o.x.o.x.o.', perc: '--o-----------o-'},
    },
    fill: {clap: 'xxxX'},
    bass: 'pop',
    comp: 'strum',
    arp: 'none',
    melody: {rhythm: 'x-x-x-----x-x---x-x-x---x-------', low: 72, high: 88},
    instruments: {
      bass: {gm: 32, synth: 'bass'},
      chords: {gm: 24, synth: 'pluck'},
      pad: {gm: 48, synth: 'strings'},
      lead: {gm: 73, synth: 'square'},
      arp: {gm: 12, synth: 'marimba'},
    },
    mix: {sidechain: 0.1, reverb: 0.2, drums: 0.75, bass: 0.8, chords: 0.55, pad: 0.2, lead: 0.4, arp: 0.3},
  },
  'news-pulse': {
    id: 'news-pulse',
    label: 'News pulse — driving 8th-note synth pulse, sub bass and tight drums for data stories',
    mood: 'focused, serious, forward',
    mode: 'minor',
    progressions: {main: 'i VI III VII', lift: 'VI VII i i'},
    bpm: {slow: [100, 106], mid: [108, 116], fast: [118, 128]},
    swing: 0,
    drumKit: {gm: 24},
    drums: {
      1: {hat: 'x-x-x-x-x-x-x-x-'},
      2: {kick: 'X-------X-------', hat: 'x-x-x-x-x-x-x-x-'},
      3: {kick: 'X-------X-x-----', snare: '----X-------X---', hat: 'x-x-x-x-x-x-x-x-'},
      4: {kick: 'X---x---X-x-x---', snare: '----X-------X---', hat: 'xxxxxxxxxxxxxxxx', openHat: '--------------o-'},
    },
    fill: {snare: 'xxxX', tom: 'x-x-'},
    bass: 'pulse16',
    comp: 'pulse8',
    arp: 'up16',
    melody: {rhythm: 'x-------x---x---x-------x-x-----', low: 64, high: 81},
    instruments: {
      bass: {gm: 39, synth: 'sub808'},
      chords: {gm: 81, synth: 'pulse'},
      pad: {gm: 89, synth: 'pad'},
      lead: {gm: 81, synth: 'pulse'},
      arp: {gm: 82, synth: 'pluck'},
    },
    mix: {sidechain: 0.35, reverb: 0.15, drums: 0.85, bass: 0.85, chords: 0.35, pad: 0.25, lead: 0.35, arp: 0.25},
  },
};

// Default style for each template palette at each tempo (pace). An episode may name another style.
export const TEMPLATE_STYLES: Record<string, Record<Tempo, string>> = {
  dossier: {slow: 'noir-swing', mid: 'noir-swing', fast: 'spy-funk'},
  'game-show': {slow: 'pop-bounce', mid: 'pop-bounce', fast: 'pop-bounce'},
  whiteboard: {slow: 'lofi-study', mid: 'lofi-study', fast: 'chill-pop'},
  'picture-book': {slow: 'storybook', mid: 'storybook', fast: 'ukulele-pop'},
  'caption-news': {slow: 'news-pulse', mid: 'news-pulse', fast: 'news-pulse'},
};

// Scene kind → section role, per template palette. Roles set the energy and the transitions.
export type Role = 'intro' | 'hook' | 'verse' | 'build' | 'drop' | 'break' | 'payoff' | 'outro';
export const TEMPLATE_ROLES: Record<string, Record<string, Role>> = {
  dossier: {'cloze-case': 'hook', fingerprint: 'build', 'root-reveal': 'drop', exhibit: 'verse', 'evidence-board': 'build', solve: 'payoff', homework: 'outro'},
  'game-show': {title: 'hook', 'root-card': 'build', round: 'verse', lightning: 'drop', report: 'payoff', bonus: 'outro'},
  whiteboard: {title: 'intro', root: 'build', branch: 'verse', twist: 'break', overview: 'drop', homework: 'outro'},
  'picture-book': {cover: 'intro', page: 'verse', words: 'build', question: 'break', end: 'outro'},
  'caption-news': {headline: 'hook', chunk: 'verse', question: 'break', recap: 'outro'},
  // npm run music -- --preview: the made-up timeline's scene kinds are the role names.
  preview: {intro: 'intro', hook: 'hook', verse: 'verse', build: 'build', drop: 'drop', break: 'break', payoff: 'payoff', outro: 'outro'},
};

export const tempoForBpm = (style: Style, bpm: number): Tempo =>
  (['fast', 'mid', 'slow'] as Tempo[]).find((tempo) => bpm >= style.bpm[tempo][0] - 2) ?? 'slow';

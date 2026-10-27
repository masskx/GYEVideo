export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `headline`,
    start: 0,
    end: 2.184,
    text: `Why teens need more sleep.`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `c1`,
    start: 2.184,
    end: 7.728,
    text: `Experts say teenagers aged 13 to 18 need 8 to 10 hours of sleep a night.`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `c2`,
    start: 7.728,
    end: 13.968,
    text: `But in the United States, only about 1 in 4 high school students get 8 hours on an average school night.`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `c3`,
    start: 13.968,
    end: 17.688,
    text: `During sleep, the brain stores what we learned during the day.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `c4`,
    start: 17.688,
    end: 21.648,
    text: `So staying up late to study can actually make your memory worse.`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `c5`,
    start: 21.648,
    end: 25.44,
    text: `Putting your phone away an hour before bed is a simple first step.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `question`,
    start: 25.44,
    end: 28.872,
    text: `Question: what is the passage mainly about?`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `answer`,
    start: 28.872,
    end: 32.616,
    text: `The answer is C. Enough sleep matters for teens.`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `recap`,
    start: 32.616,
    end: 37.248,
    text: `Key words: expert, average, store, memory, actually.`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `signoff`,
    start: 37.248,
    end: 40.368,
    text: `Tell us how many hours you sleep, in the comments.`,
    audio: `/audio/segments/010.mp3`,
  },
];

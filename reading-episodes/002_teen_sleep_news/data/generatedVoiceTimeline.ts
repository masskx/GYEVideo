export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  spoken?: string; // the TTS text this audio was made from (npm run produce re-voices when it changes)
  rate?: number; // the TTS rate it was made at (changes with the pace)
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `headline`,
    start: 0,
    end: 1.92,
    text: `Why teens need more sleep.`,
    spoken: `Why teens need more sleep.`,
    rate: 1.15,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `c1`,
    start: 1.92,
    end: 6.744,
    text: `Experts say teenagers aged 13 to 18 need 8 to 10 hours of sleep a night.`,
    spoken: `Experts say teenagers aged thirteen to eighteen need eight to ten hours of sleep a night.`,
    rate: 1.15,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `c2`,
    start: 6.744,
    end: 12.168,
    text: `But in the United States, only about 1 in 4 high school students get 8 hours on an average school night.`,
    spoken: `But in the United States, only about one in four high school students get eight hours on an average school night.`,
    rate: 1.15,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `c3`,
    start: 12.168,
    end: 15.408,
    text: `During sleep, the brain stores what we learned during the day.`,
    spoken: `During sleep, the brain stores what we learned during the day.`,
    rate: 1.15,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `c4`,
    start: 15.408,
    end: 18.864,
    text: `So staying up late to study can actually make your memory worse.`,
    spoken: `So staying up late to study can actually make your memory worse.`,
    rate: 1.15,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `c5`,
    start: 18.864,
    end: 22.176,
    text: `Putting your phone away an hour before bed is a simple first step.`,
    spoken: `Putting your phone away an hour before bed is a simple first step.`,
    rate: 1.15,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `question`,
    start: 22.176,
    end: 25.176,
    text: `Question: what is the passage mainly about?`,
    spoken: `Question: what is the passage mainly about?`,
    rate: 1.15,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `answer`,
    start: 25.176,
    end: 28.44,
    text: `The answer is C. Enough sleep matters for teens.`,
    spoken: `The answer is C. Enough sleep matters for teens.`,
    rate: 1.15,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `recap`,
    start: 28.44,
    end: 32.472,
    text: `Key words: expert, average, store, memory, actually.`,
    spoken: `Key words: expert, average, store, memory, actually.`,
    rate: 1.15,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `signoff`,
    start: 32.472,
    end: 35.184,
    text: `Tell us how many hours you sleep, in the comments.`,
    spoken: `Tell us how many hours you sleep, in the comments.`,
    rate: 1.15,
    audio: `/audio/segments/010.mp3`,
  },
];

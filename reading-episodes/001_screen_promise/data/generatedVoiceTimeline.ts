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
    id: `title`,
    start: 0,
    end: 2.16,
    text: `Little Pig and the Midnight Screen.`,
    spoken: `Little Pig and the Midnight Screen.`,
    rate: 1.15,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `p1-a`,
    start: 2.16,
    end: 6.048,
    text: `Every night, Little Pig made the same promise: just ten more minutes.`,
    spoken: `Every night, Little Pig made the same promise: just ten more minutes.`,
    rate: 1.15,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `p1-b`,
    start: 6.048,
    end: 8.664,
    text: `But the bright screen always had one more video.`,
    spoken: `But the bright screen always had one more video.`,
    rate: 1.15,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `p2-a`,
    start: 8.664,
    end: 12.6,
    text: `At midnight, he was still scrolling, too distracted to notice the time.`,
    spoken: `At midnight, he was still scrolling, too distracted to notice the time.`,
    rate: 1.15,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `p3-a`,
    start: 12.6,
    end: 16.368,
    text: `The next morning, he felt exhausted in class and missed half of the lesson.`,
    spoken: `The next morning, he felt exhausted in class and missed half of the lesson.`,
    rate: 1.15,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `p4-a`,
    start: 16.368,
    end: 19.152,
    text: `That evening, Little Pig was determined to change.`,
    spoken: `That evening, Little Pig was determined to change.`,
    rate: 1.15,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `p4-b`,
    start: 19.152,
    end: 21.072,
    text: `He put his phone in another room.`,
    spoken: `He put his phone in another room.`,
    rate: 1.15,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `p5-a`,
    start: 21.072,
    end: 23.496,
    text: `A week later, his new routine had worked.`,
    spoken: `A week later, his new routine had worked.`,
    rate: 1.15,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `p5-b`,
    start: 23.496,
    end: 26.448,
    text: `He woke up early and felt ready to achieve his goals.`,
    spoken: `He woke up early and felt ready to achieve his goals.`,
    rate: 1.15,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `words`,
    start: 26.448,
    end: 32.808,
    text: `Here are the six words from the story: promise, distracted, exhausted, determined, routine, achieve.`,
    spoken: `Here are the six words from the story: promise, distracted, exhausted, determined, routine, achieve.`,
    rate: 1.15,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `question`,
    start: 32.808,
    end: 35.976,
    text: `Question: why did Little Pig miss half of the lesson?`,
    spoken: `Question: why did Little Pig miss half of the lesson?`,
    rate: 1.15,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `answer`,
    start: 35.976,
    end: 39.672,
    text: `The answer is B. He felt exhausted after staying up late.`,
    spoken: `The answer is B. He felt exhausted after staying up late.`,
    rate: 1.15,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `end`,
    start: 39.672,
    end: 42.696,
    text: `The end. What would you do? Tell us in the comments.`,
    spoken: `The end. What would you do? Tell us in the comments.`,
    rate: 1.15,
    audio: `/audio/segments/013.mp3`,
  },
];

export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
  // English word -> what speech-to-text hears for a correct pronunciation (set after listening).
  asrAccept?: Record<string, string>;
};

// The passage is read in English like a short news report; the Chinese is on screen only.
const news = 'Read in clear, steady English like a calm news reporter for teenage learners: natural pace, every word distinct, numbers stressed.';

// Numbers are spelled out in `text` (the voice misreads digits in English) and kept as digits in `subtitle`.
const line = (id: string, text: string, emotionInstruction: string, subtitle = text, asrAccept?: Record<string, string>): VoiceScriptLine => ({
  id,
  text,
  emotionInstruction,
  speedHint: 'medium',
  subtitle,
  instruction: news,
  ...(asrAccept ? {asrAccept} : {}),
});

export const voiceScript: VoiceScriptLine[] = [
  line('headline', 'Why teens need more sleep.', 'A headline: short and firm.'),
  line(
    'c1',
    'Experts say teenagers aged thirteen to eighteen need eight to ten hours of sleep a night.',
    'Informative.',
    'Experts say teenagers aged 13 to 18 need 8 to 10 hours of sleep a night.',
    {aged: 'age'},
  ),
  line(
    'c2',
    'But in the United States, only about one in four high school students get eight hours on an average school night.',
    'Stress the number.',
    'But in the United States, only about 1 in 4 high school students get 8 hours on an average school night.',
  ),
  line('c3', 'During sleep, the brain stores what we learned during the day.', 'Calm explanation.'),
  line('c4', 'So staying up late to study can actually make your memory worse.', 'A gentle warning.'),
  line('c5', 'Putting your phone away an hour before bed is a simple first step.', 'Encouraging.'),
  line('question', 'Question: what is the passage mainly about?', 'Like a teacher asking.'),
  line('answer', 'The answer is C. Enough sleep matters for teens.', 'Confident.'),
  line('recap', 'Key words: expert, average, store, memory, actually.', 'Clear, one word at a time.', undefined, {key: 'keyword', words: 'keyword'}),
  line('signoff', 'Tell us how many hours you sleep, in the comments.', 'Friendly.'),
];

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

// The story is read in English, sentence by sentence; the subtitle is the sentence printed on the page.
const story = 'Read in clear, warm English like a picture-book storyteller for teenage learners: calm, natural pace, every word distinct.';

const line = (id: string, text: string, emotionInstruction: string, speedHint = 'medium'): VoiceScriptLine => ({
  id,
  text,
  emotionInstruction,
  speedHint,
  subtitle: text,
  instruction: story,
});

export const voiceScript: VoiceScriptLine[] = [
  line('title', 'Little Pig and the Midnight Screen.', 'Like opening a book.'),
  line('p1-a', 'Every night, Little Pig made the same promise: just ten more minutes.', 'Gentle, a little playful.'),
  line('p1-b', 'But the bright screen always had one more video.', 'A small sigh.'),
  line('p2-a', 'At midnight, he was still scrolling, too distracted to notice the time.', 'Slower, sleepy.'),
  line('p3-a', 'The next morning, he felt exhausted in class and missed half of the lesson.', 'Tired, a little sad.'),
  line('p4-a', 'That evening, Little Pig was determined to change.', 'Firm and hopeful.'),
  line('p4-b', 'He put his phone in another room.', 'Simple, decisive.'),
  line('p5-a', 'A week later, his new routine had worked.', 'Warm, pleased.'),
  line('p5-b', 'He woke up early and felt ready to achieve his goals.', 'Bright and happy.'),
  line('words', 'Here are the six words from the story: promise, distracted, exhausted, determined, routine, achieve.', 'Clear, one word at a time.'),
  line('question', 'Question: why did Little Pig miss half of the lesson?', 'Like a teacher asking the class.'),
  line('answer', 'The answer is B. He felt exhausted after staying up late.', 'Confident.'),
  line('end', 'The end. What would you do? Tell us in the comments.', 'Friendly sign-off.'),
];

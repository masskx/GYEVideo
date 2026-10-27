// 小猪盖被 brand constants shared by every template. Change them here only.
export const BRAND = {
  creatorName: '小猪盖被',
  // The pig's name when it appears as a character (picture-book stories, game-show host).
  pigName: {zh: '小猪', en: 'Xiaozhu'},
  // One narrator for the whole account (DashScope CosyVoice); it reads Chinese and English.
  voice: {model: 'cosyvoice-v3-flash', voice: 'longanhuan'},
} as const;

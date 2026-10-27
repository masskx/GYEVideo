export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'photo 不只是“照片”'},
  {start: 2.5, end: 4, text: 'photo = light / 光'},
  {start: 4, end: 7, text: 'photo / photograph / photography / photosynthesis / photogenic'},
  {start: 7, end: 9, text: '它们都围着“光”'},
  {start: 9, end: 11, text: 'photo = 光留下图像 → 照片'},
  {start: 11, end: 13, text: 'photograph = 把光记下来 → 照片 / 拍摄'},
  {start: 13, end: 15, text: 'photography = 用光成像 → 摄影'},
  {start: 15, end: 17, text: 'photosynthesis = 借光合成 → 光合作用'},
  {start: 17, end: 19, text: 'photogenic = 一见光就好看 → 上镜'},
  {start: 19, end: 22, text: 'photo = light: 光'},
  {start: 22, end: 24, text: '看到 photo，先想：这里的光做了什么？'},
];

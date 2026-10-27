export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: '别再硬背单词，先抓住词根。'},
  {start: 0.8, end: 1.6, text: 'reject、project、inject，其实都藏着同一个结构。'},
  {start: 1.6, end: 2.5, text: '它们都藏着同一个词根。'},
  {start: 2.5, end: 4, text: '-ject = throw，核心动作是“投出去”。'},
  {start: 4, end: 5.4, text: 'reject：把东西投回去，就是拒绝、排斥。'},
  {start: 5.4, end: 6.8, text: 'object：被投到眼前的东西，是物体，也是目标。'},
  {start: 6.8, end: 8.2, text: 'subject：放到下面讨论的，就是主题或学科。'},
  {start: 8.2, end: 9.6, text: 'project：向前投出去，所以是投影、预测。'},
  {start: 9.6, end: 11, text: 'inject：往里面投，就是注射、注入。'},
  {start: 11, end: 12.4, text: 'eject：向外投出，就是弹出、驱逐。'},
  {start: 12.4, end: 13.8, text: 'abject：被抛到低处，引申为卑劣、可怜。'},
  {start: 13.8, end: 15, text: 'deject：情绪被往下扔，就是使沮丧。'},
  {start: 15, end: 19, text: '八个单词，全部连回 ject 这个核心动作。'},
  {start: 19, end: 22, text: '记住：ject = throw / 投出去。'},
  {start: 22, end: 24, text: '下次遇到生词，先拆词根。'},
];

export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `hook`,
    start: 0,
    end: 5.544,
    text: `看到 geo 别只会想 geography`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 5.544,
    end: 10.968,
    text: `geography / geology / geometry / geothermal / geopolitics`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 10.968,
    end: 15.528,
    text: `它们都连着 earth / 地球，土地`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 15.528,
    end: 19.632,
    text: `geo = earth / 地球，土地`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 19.632,
    end: 26.256,
    text: `geography = 描述地球地表 -> 地理学`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 26.256,
    end: 32.064,
    text: `geology = 研究地球岩层 -> 地质学`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 32.064,
    end: 37.608,
    text: `geometry = 土地测量 -> 几何学`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 37.608,
    end: 41.88,
    text: `geothermal = 来自地球热能 -> 地热的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 41.88,
    end: 48.168,
    text: `geocentric = 以地球为中心`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 48.168,
    end: 54.864,
    text: `geopolitics = 地理位置影响政治 -> 地缘政治`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 54.864,
    end: 59.112,
    text: `geotag = 标上地理位置 -> 地理标签`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 59.112,
    end: 63.84,
    text: `geosphere = 地球固体圈层`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 63.84,
    end: 73.584,
    text: `geography / geology / geometry，都围着 earth 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 73.584,
    end: 77.664,
    text: `geo = earth / 地球，土地`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 77.664,
    end: 83.304,
    text: `看到 geo，先想：它和地球或土地有什么关系？`,
    audio: `/audio/segments/015.mp3`,
  },
];

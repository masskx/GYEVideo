export const rootLottieMap: Record<string, string> = {
  port: 'carry-box.json',
  scrib: 'writing.json',
  script: 'writing.json',
  vis: 'eye.json',
  vid: 'eye.json',
  aud: 'sound-wave.json',
  phon: 'sound-wave.json',
  tract: 'pulling.json',
  struct: 'building.json',
  rupt: 'break.json',
  dict: 'speaking.json',
  spect: 'search-eye.json',
  graph: 'writing.json',
  bio: 'life.json',
  geo: 'earth.json',
};

export const getLottieForRoot = (root?: string): string | null => {
  if (!root) {
    return null;
  }

  return rootLottieMap[root.toLowerCase()] ?? null;
};

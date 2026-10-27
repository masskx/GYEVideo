import {useEffect, useState} from 'react';
import {continueRender, delayRender, staticFile} from 'remotion';

// Every font a template may use. All are OFL (public/fonts/README.md); CJK faces are subset to
// GB2312 (public/fonts/charset-gb2312.txt), Latin faces to Latin + IPA.
export const FONT_REGISTRY = {
  serifBlack: {family: 'GYSerifBlack', file: 'NotoSerifSC-Black-gb2312.woff2', weight: '900'},
  sansBlack: {family: 'GYSansBlack', file: 'NotoSansSC-Black-gb2312.woff2', weight: '900'},
  sansMedium: {family: 'GYSansMedium', file: 'NotoSansSC-Medium-gb2312.woff2', weight: '500'},
  bagel: {family: 'GYBagel', file: 'BagelFatOne-Latin.woff2', weight: '400'},
  kuaile: {family: 'GYKuaiLe', file: 'ZCOOLKuaiLe-gb2312.woff2', weight: '400'},
  mono: {family: 'GYMono', file: 'JetBrainsMono-ExtraBold.woff2', weight: '800'},
  fredoka: {family: 'GYFredoka', file: 'Fredoka-Bold-latin.woff2', weight: '700'},
  caveat: {family: 'GYCaveat', file: 'Caveat-Bold-latin.woff2', weight: '700'},
  nunito: {family: 'GYNunito', file: 'Nunito-ExtraBold-latin.woff2', weight: '800'},
  interBlack: {family: 'GYInterBlack', file: 'Inter-Black-latin.woff2', weight: '900'},
  interSemi: {family: 'GYInterSemi', file: 'Inter-SemiBold-latin.woff2', weight: '600'},
} as const;

export type FontKey = keyof typeof FONT_REGISTRY;

// A CSS font stack: the listed faces in order (a Latin face first, then a CJK face for Chinese glyphs).
export const stack = (...keys: FontKey[]) => [...keys.map((key) => `"${FONT_REGISTRY[key].family}"`), 'sans-serif'].join(', ');

const loaded = new Map<FontKey, Promise<void>>();
const loadFont = (key: FontKey) => {
  let promise = loaded.get(key);
  if (!promise) {
    const {family, file, weight} = FONT_REGISTRY[key];
    const face = new FontFace(family, `url(${staticFile(`fonts/${file}`)})`, {weight, display: 'block'});
    promise = face.load().then((ready) => {
      document.fonts.add(ready);
    });
    loaded.set(key, promise);
  }
  return promise;
};

// Text is laid out per character in several templates, so nothing renders before the real fonts are in.
export const useFonts = (keys: FontKey[]) => {
  const [handle] = useState(() => delayRender(`fonts ${keys.join(',')}`));
  useEffect(() => {
    Promise.all(keys.map(loadFont))
      .then(() => continueRender(handle))
      .catch((error) => {
        console.error(error);
        continueRender(handle);
      });
    // keys is a constant list per template
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle]);
};

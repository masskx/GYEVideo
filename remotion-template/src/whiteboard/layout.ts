import {whiteboard, WhiteboardWord} from '../data/whiteboard';

// Board-space layout (px). The board is larger than the frame; the camera travels over it.
export const BOARD = {w: 2160, h: 3900};
export const ROOT_POS = {x: 1080, y: 1720};
export const ROOT_RADIUS = 300;
export const TITLE_POS = {x: 160, y: 190};

// Branch slots in order: top-left, top-right, bottom-left, bottom-right, bottom-centre, top-centre.
const SLOTS = [
  {x: 540, y: 760},
  {x: 1620, y: 760},
  {x: 500, y: 2420},
  {x: 1660, y: 2420},
  {x: 1080, y: 2980},
  {x: 1080, y: 480},
];

// The twist word always takes the bottom-centre slot (it needs room for the eraser); the others fill in order.
export const slotOf = (word: WhiteboardWord) => {
  if (word.twist) {
    return SLOTS[4];
  }
  const plain = whiteboard.words.filter((w) => !w.twist);
  const index = plain.indexOf(word);
  return SLOTS[index < 4 ? index : 5];
};

export const HOMEWORK_POS = {x: 1080, y: 3560};

// Arrow from the root circle's edge to just above the branch's word.
export const arrowFor = (word: WhiteboardWord) => {
  const slot = slotOf(word);
  // Top branches: arrive under the example line; bottom branches: arrive above the word.
  const target = {x: slot.x, y: slot.y + (slot.y < ROOT_POS.y ? 530 : -110)};
  const dx = target.x - ROOT_POS.x;
  const dy = target.y - ROOT_POS.y;
  const length = Math.hypot(dx, dy);
  const ux = dx / length;
  const uy = dy / length;
  return {
    from: {x: ROOT_POS.x + ux * (ROOT_RADIUS + 30), y: ROOT_POS.y + uy * (ROOT_RADIUS * 0.72 + 30)},
    to: {x: target.x - ux * 40, y: target.y - uy * 40},
  };
};

export type CameraStop = {x: number; y: number; z: number};

type Box = [number, number, number, number]; // left, top, right, bottom

const union = (a: Box, b: Box): Box => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])];

// Frame a board box inside the content area (980 × 1250 px of the frame), never closer than maxZ.
const frameBox = ([l, t, r, b]: Box, maxZ: number): CameraStop => ({
  x: (l + r) / 2,
  y: (t + b) / 2,
  z: Math.min(maxZ, 980 / (r - l), 1250 / (b - t)),
});

const blockBox = (word: WhiteboardWord): Box => {
  const slot = slotOf(word);
  return [slot.x - 430, slot.y - 110, slot.x + 430, slot.y + 520];
};
const ROOT_BOX: Box = [ROOT_POS.x - ROOT_RADIUS * 1.15, ROOT_POS.y - ROOT_RADIUS * 0.8, ROOT_POS.x + ROOT_RADIUS * 1.15, ROOT_POS.y + ROOT_RADIUS * 0.8];

// Where the camera rests for each scene kind.
export const cameraFor = (kind: string, word?: WhiteboardWord): CameraStop => {
  switch (kind) {
    case 'title':
      return frameBox([TITLE_POS.x - 60, TITLE_POS.y - 60, TITLE_POS.x + 1100, TITLE_POS.y + 1200], 1.0);
    case 'root':
      return frameBox(union(ROOT_BOX, [ROOT_POS.x - 450, ROOT_POS.y - 400, ROOT_POS.x + 450, ROOT_POS.y + 400]), 1.1);
    case 'branch':
      return frameBox(union(blockBox(word!), ROOT_BOX), 0.95);
    case 'twist':
      return frameBox(blockBox(word!), 1.0);
    case 'overview':
      return {x: BOARD.w / 2, y: 1960, z: 0.49};
    case 'homework':
      return frameBox([HOMEWORK_POS.x - 680, HOMEWORK_POS.y - 290, HOMEWORK_POS.x + 680, HOMEWORK_POS.y + 300], 0.9);
    default:
      return {x: ROOT_POS.x, y: ROOT_POS.y, z: 0.6};
  }
};

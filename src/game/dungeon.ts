import type { RoomKind } from "./types";
import { BIOMES } from "./data/biomes";
import { pick, randInt, rngFrom, type Rng, shuffle } from "./rng";

export const TILE = 64;
export const ROOM_W = 17;
export const ROOM_H = 13;
export const WORLD_W = ROOM_W * TILE;
export const WORLD_H = ROOM_H * TILE;

export type DoorDir = "n" | "e" | "s" | "w";

export type Room = {
  id: number;
  gx: number;
  gy: number;
  kind: RoomKind;
  cleared: boolean;
  seen: boolean;
  doors: Record<DoorDir, number | null>;
  waves: number;
};

export type FloorState = {
  index: number;
  biome: (typeof BIOMES)[number];
  rooms: Room[];
  startId: number;
  bossId: number;
  current: number;
};

const DIRS: { d: DoorDir; dx: number; dy: number; opp: DoorDir }[] = [
  { d: "n", dx: 0, dy: -1, opp: "s" },
  { d: "e", dx: 1, dy: 0, opp: "w" },
  { d: "s", dx: 0, dy: 1, opp: "n" },
  { d: "w", dx: -1, dy: 0, opp: "e" },
];

function emptyDoors(): Record<DoorDir, number | null> {
  return { n: null, e: null, s: null, w: null };
}

function wavesFor(kind: RoomKind, index: number) {
  if (kind === "start") return 1;
  if (kind === "combat") return 3 + Math.floor(index / 2);
  if (kind === "elite") return 2;
  if (kind === "boss") return 1;
  return 0;
}

export function generateFloor(seed: string, index: number, heat: number): FloorState {
  const rng = rngFrom(seed, 0x9e3779b9 ^ (index * 7919));
  const biome = BIOMES[Math.min(index, BIOMES.length - 1)]!;
  const count = 8 + Math.min(4, index) + (heat >= 3 ? 1 : 0);
  const rooms: Room[] = [];
  const occ = new Map<string, number>();

  const add = (gx: number, gy: number, kind: RoomKind): Room => {
    const r: Room = {
      id: rooms.length,
      gx,
      gy,
      kind,
      cleared: false,
      seen: kind === "start",
      doors: emptyDoors(),
      waves: wavesFor(kind, index),
    };
    rooms.push(r);
    occ.set(`${gx},${gy}`, r.id);
    return r;
  };

  add(0, 0, "start");
  const frontier: Room[] = [rooms[0]!];
  while (rooms.length < count) {
    const from = pick(rng, frontier);
    const opts = shuffle(rng, DIRS).filter((d) => !occ.has(`${from.gx + d.dx},${from.gy + d.dy}`));
    if (!opts.length) {
      const idx = frontier.indexOf(from);
      if (idx >= 0) frontier.splice(idx, 1);
      if (!frontier.length) break;
      continue;
    }
    const d = opts[0]!;
    const nxt = add(from.gx + d.dx, from.gy + d.dy, "combat");
    from.doors[d.d] = nxt.id;
    nxt.doors[d.opp] = from.id;
    frontier.push(nxt);
  }

  const dist = (r: Room) => Math.abs(r.gx) + Math.abs(r.gy);
  const byDist = rooms.slice().sort((a, b) => dist(b) - dist(a));
  const specials: RoomKind[] = ["boss", "shop", "treasure", "shrine", "elite", "rest"];
  if (heat >= 5) specials.push("elite");
  let si = 0;
  for (const r of byDist) {
    if (r.kind !== "combat") continue;
    if (si >= specials.length) break;
    r.kind = specials[si++]!;
    r.waves = wavesFor(r.kind, index);
  }
  const boss = rooms.find((r) => r.kind === "boss") ?? rooms[rooms.length - 1]!;
  boss.kind = "boss";
  boss.waves = 1;

  return { index, biome, rooms, startId: 0, bossId: boss.id, current: 0 };
}

export function doorWorld(dir: DoorDir) {
  const midx = WORLD_W / 2;
  const midy = WORLD_H / 2;
  if (dir === "n") return { x: midx, y: TILE * 0.7 };
  if (dir === "s") return { x: midx, y: WORLD_H - TILE * 0.7 };
  if (dir === "w") return { x: TILE * 0.7, y: midy };
  return { x: WORLD_W - TILE * 0.7, y: midy };
}

export function spawnPoint(rng: Rng, pad = 140) {
  return {
    x: randInt(rng, pad, WORLD_W - pad),
    y: randInt(rng, pad, WORLD_H - pad),
  };
}

export function inBounds(x: number, y: number, r = 16) {
  return x > TILE + r && x < WORLD_W - TILE - r && y > TILE + r && y < WORLD_H - TILE - r;
}

export function clampToRoom(x: number, y: number, r = 16) {
  return {
    x: Math.max(TILE + r, Math.min(WORLD_W - TILE - r, x)),
    y: Math.max(TILE + r, Math.min(WORLD_H - TILE - r, y)),
  };
}

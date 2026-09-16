export function xmur3(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^= h >>> 16) >>> 0;
}

export function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function rng() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Rng = () => number;

export function rngFrom(seed: string | number, salt = 0): Rng {
  const n = typeof seed === "number" ? seed : xmur3(seed);
  return mulberry32((n ^ salt) >>> 0);
}

export function randRange(rng: Rng, a: number, b: number) {
  return a + rng() * (b - a);
}

export function randInt(rng: Rng, a: number, b: number) {
  return Math.floor(randRange(rng, a, b + 1));
}

export function pick<T>(rng: Rng, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length)]!;
}

export function shuffle<T>(rng: Rng, arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function chance(rng: Rng, p: number) {
  return rng() < p;
}

export function newSeed(): string {
  const adj = ["Ashen", "Hollow", "Cinder", "Grave", "Silent", "Iron", "Dawn", "Night"];
  const noun = ["Kiln", "Crypt", "Crown", "Vault", "Hall", "Well", "Gate", "Pyre"];
  const n = Math.floor(Math.random() * 9000 + 1000);
  return `${adj[Math.floor(Math.random() * adj.length)]}-${noun[Math.floor(Math.random() * noun.length)]}-${n}`;
}

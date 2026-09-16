import type { ClassId } from "./types";

export type Sheet = {
  img: HTMLCanvasElement | HTMLImageElement;
  cols: number;
  rows: number;
  cw: number;
  ch: number;
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed ${src}`));
    img.src = src;
  });
}

/** Punch leftover chroma-key magenta without eating fire, cloth, or stone. */
function punchMagenta(img: HTMLImageElement): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = img.naturalWidth || img.width;
  c.height = img.naturalHeight || img.height;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return c;
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, c.width, c.height);
  const d = data.data;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i]!;
    const g = d[i + 1]!;
    const b = d[i + 2]!;
    const a = d[i + 3]!;
    if (a === 0) continue;
    const mag = Math.min(r, b) - g;
    if (r > 210 && b > 210 && g < 70 && mag > 90) {
      d[i + 3] = 0;
      continue;
    }
    if (r > 190 && b > 190 && g < 90 && mag > 70) {
      d[i + 3] = Math.round(a * 0.15);
    }
  }
  ctx.putImageData(data, 0, 0);
  return c;
}

function sheet(img: HTMLImageElement, cols: number, rows: number, key = true): Sheet {
  const src = key ? punchMagenta(img) : img;
  const w = "width" in src ? src.width : img.width;
  const h = "height" in src ? src.height : img.height;
  return { img: src, cols, rows, cw: w / cols, ch: h / rows };
}

export class Sprites {
  heroes: Record<ClassId, Sheet> = {} as Record<ClassId, Sheet>;
  portraits: Record<ClassId, HTMLImageElement> = {} as Record<ClassId, HTMLImageElement>;
  packs: Record<string, Sheet> = {};
  icons: Record<string, Sheet> = {};
  fx: Record<string, Sheet> = {};
  tiles: Record<string, HTMLImageElement> = {};
  props: Sheet | null = null;
  title: HTMLImageElement | null = null;
  ready = false;
  private inflight: Promise<void> | null = null;

  async load(onProgress: (p: number) => void) {
    if (this.ready) {
      onProgress(1);
      return;
    }
    if (this.inflight) return this.inflight;
    this.inflight = this.loadAll(onProgress);
    await this.inflight;
  }

  private async loadAll(onProgress: (p: number) => void) {
    const classes: ClassId[] = [
      "ashguard",
      "cinderbow",
      "pyrelock",
      "nightveil",
      "dawnwarden",
      "gravekin",
      "stormcall",
      "ironfist",
    ];
    const jobs: Array<() => Promise<void>> = [];
    const add = (fn: () => Promise<void>) => jobs.push(fn);

    add(async () => {
      this.title = await loadImage("/game/title.jpg");
    });
    for (const id of classes) {
      add(async () => {
        this.heroes[id] = sheet(await loadImage(`/game/heroes/${id}.png`), 4, 4);
      });
      add(async () => {
        this.portraits[id] = await loadImage(`/game/portraits/${id}.jpg`);
      });
    }
    for (const p of ["pack1", "pack2", "pack3", "bosses"] as const) {
      add(async () => {
        this.packs[p] = sheet(await loadImage(`/game/enemies/${p}.png`), 3, 3);
      });
    }
    for (const p of ["weapons", "armor", "relics", "relics2"] as const) {
      add(async () => {
        this.icons[p] = sheet(await loadImage(`/game/icons/${p}.png`), 4, 4);
      });
    }
    for (const p of ["fireball", "impact", "arrow", "lightning", "slash"] as const) {
      add(async () => {
        this.fx[p] = sheet(await loadImage(`/game/fx/${p}.png`), 2, 2);
      });
    }
    for (const p of ["crypt", "bone", "frost", "foundry", "void", "garden", "tide", "wall"] as const) {
      add(async () => {
        this.tiles[p] = await loadImage(`/game/tiles/${p}.jpg`);
      });
    }
    add(async () => {
      this.props = sheet(await loadImage("/game/props/set.png"), 2, 2);
    });

    let done = 0;
    const first = jobs[0]!;
    try {
      await first();
    } catch (err) {
      console.warn(err);
    }
    done += 1;
    onProgress(done / jobs.length);

    await Promise.all(
      jobs.slice(1).map(async (job) => {
        try {
          await job();
        } catch (err) {
          console.warn(err);
        }
        done += 1;
        onProgress(done / jobs.length);
      }),
    );
    this.ready = true;
    onProgress(1);
  }
}

export function drawFrame(
  ctx: CanvasRenderingContext2D,
  s: Sheet,
  index: number,
  x: number,
  y: number,
  size: number,
  rot = 0,
) {
  const col = index % s.cols;
  const row = Math.floor(index / s.cols) % s.rows;
  const dw = size;
  const dh = size * (s.ch / s.cw);
  ctx.save();
  ctx.translate(x, y);
  if (rot) ctx.rotate(rot);
  ctx.drawImage(s.img, col * s.cw, row * s.ch, s.cw, s.ch, -dw / 2, -dh / 2, dw, dh);
  ctx.restore();
}

export function facingIndex(aim: number): number {
  const a = ((aim + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (a > -Math.PI / 4 && a <= Math.PI / 4) return 2;
  if (a > Math.PI / 4 && a <= (Math.PI * 3) / 4) return 0;
  if (a < -Math.PI / 4 && a >= (-Math.PI * 3) / 4) return 3;
  return 1;
}

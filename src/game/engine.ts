import { ACHIEVEMENTS, TALENTS } from "./data/talents";
import { BIOMES } from "./data/biomes";
import { CLASSES, CLASS_BY_ID } from "./data/classes";
import { ENEMIES, ENEMY_BY_ID } from "./data/enemies";
import { ITEMS, ITEM_BY_ID } from "./data/items";
import { UPGRADES } from "./data/upgrades";
import { GameAudio } from "./audio";
import {
  clampToRoom,
  doorWorld,
  generateFloor,
  inBounds,
  spawnPoint,
  TILE,
  WORLD_H,
  WORLD_W,
  type FloorState,
  type Room,
} from "./dungeon";
import { Input } from "./input";
import { chance, mulberry32, pick, randInt, randRange, rngFrom, shuffle, type Rng } from "./rng";
import { loadMeta, loadRun, saveMeta, saveRun, type MetaSave, type RunSave } from "./save";
import { drawFrame, facingIndex, Sprites } from "./sprites";
import {
  addStats,
  STAT_ZERO,
  type ClassId,
  type EnemyDef,
  type ItemDef,
  type Rarity,
  type ScreenId,
  type Stats,
  type UpgradeDef,
} from "./types";

const STEP = 1 / 60;
type Ent = { x: number; y: number; r: number; hp: number; max: number; vx: number; vy: number };
type Enemy = Ent & {
  def: EnemyDef;
  cd: number;
  flash: number;
  elite: boolean;
  dead: boolean;
  aim: number;
};
type Bullet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  dmg: number;
  pierce: number;
  life: number;
  r: number;
  friendly: boolean;
  kind: string;
  rot: number;
};
type Pickup = { x: number; y: number; kind: "xp" | "gold" | "hp" | "item"; val: number; item?: string; t: number };
type Particle = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; color: string };
type Float = { x: number; y: number; t: number; text: string; color: string };
type Choice = { kind: "upgrade" | "item"; upgrade?: UpgradeDef; item?: ItemDef };

export type MinimapRoom = { gx: number; gy: number; kind: string; current: boolean; cleared: boolean; seen: boolean };

export type Hud = {
  screen: ScreenId;
  loadP: number;
  toast: string;
  hp: number;
  maxHp: number;
  shield: number;
  xp: number;
  xpTo: number;
  level: number;
  gold: number;
  ashes: number;
  wave: number;
  waves: number;
  roomKind: string;
  floorName: string;
  floor: number;
  time: number;
  classId: ClassId | null;
  skillCd: number;
  skillMax: number;
  dash: number;
  dashMax: number;
  choices: Choice[];
  shop: { item: ItemDef; price: number }[];
  chest: ItemDef | null;
  shrine: string;
  inventory: ItemDef[];
  seed: string;
  heat: number;
  minimap: MinimapRoom[];
  meta: MetaSave;
  kills: number;
  endless: boolean;
  daily: boolean;
  classes: typeof CLASSES;
  itemsCount: number;
  enemiesCount: number;
  collected: number;
  discovered: number;
  credits: number;
};

function xpToLevel(lv: number) {
  return Math.floor(14 * Math.pow(lv, 1.32));
}

function rarityRoll(rng: Rng, luck: number): Rarity {
  const l = luck / 100;
  const r = rng();
  if (r < 0.012 + l * 0.01) return "mythic";
  if (r < 0.04 + l * 0.03) return "legendary";
  if (r < 0.12 + l * 0.05) return "epic";
  if (r < 0.28 + l * 0.08) return "rare";
  if (r < 0.55 + l * 0.1) return "uncommon";
  return "common";
}

export class Emberwake {
  screen: ScreenId = "title";
  returnTo: ScreenId = "title";
  loadP = 0;
  toast = "";
  toastT = 0;
  meta: MetaSave = loadMeta();
  sprites = new Sprites();
  input = new Input();
  audio = new GameAudio();
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  w = 1280;
  h = 720;
  acc = 0;
  last = 0;
  trauma = 0;
  hitstop = 0;
  raf = 0;
  booted = false;
  seed = "";
  classId: ClassId | null = null;
  heat = 0;
  daily = false;
  endless = false;
  floor: FloorState | null = null;
  player = this.blankPlayer();
  enemies: Enemy[] = [];
  bullets: Bullet[] = [];
  pickups: Pickup[] = [];
  particles: Particle[] = [];
  floats: Float[] = [];
  cam = { x: WORLD_W / 2, y: WORLD_H / 2 };
  wave = 0;
  waveT = 0;
  fireCd = 0;
  skillCd = 0;
  dashCd = 0;
  dashT = 0;
  invuln = 0;
  time = 0;
  kills = 0;
  inventory: string[] = [];
  upgrades: string[] = [];
  choices: Choice[] = [];
  shop: { item: ItemDef; price: number }[] = [];
  chest: ItemDef | null = null;
  shrine = "";
  credits = 0;
  listeners = new Set<() => void>();
  rng: Rng = mulberry32(1);
  lootRng: Rng = mulberry32(2);
  hudAcc = 0;
  hudCache: Hud | null = null;

  blankPlayer() {
    return {
      x: WORLD_W / 2,
      y: WORLD_H / 2,
      vx: 0,
      vy: 0,
      hp: 100,
      maxHp: 100,
      shield: 0,
      aim: 0,
      stats: { ...STAT_ZERO },
      xp: 0,
      level: 1,
      gold: 0,
      facing: 0,
      walk: 0,
    };
  }

  subscribe(fn: () => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  emit() {
    this.hudCache = null;
    for (const f of this.listeners) f();
  }

  async boot(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.resize();
    if (this.booted) {
      this.installProbe();
      return;
    }
    this.booted = true;
    this.input.attach(canvas);
    window.addEventListener("resize", () => this.resize());
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.flushSave();
      else this.audio.unlock();
    });
    this.screen = "title";
    this.emit();
    this.loop(performance.now());
    this.installProbe();
    if (!this.sprites.ready) {
      void this.sprites.load((p) => {
        this.loadP = p;
        this.emit();
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const r = this.canvas.getBoundingClientRect();
    this.w = Math.max(1, r.width);
    this.h = Math.max(1, r.height);
    this.canvas.width = Math.floor(this.w * dpr);
    this.canvas.height = Math.floor(this.h * dpr);
    this.ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  unlock() {
    this.audio.unlock();
    this.audio.apply(this.meta.settings);
  }

  openSettings() {
    if (this.screen !== "settings") this.returnTo = this.screen;
    this.screen = "settings";
    this.emit();
  }

  closeSettings() {
    this.screen = this.returnTo || "title";
    this.emit();
  }

  loop = (t: number) => {
    this.raf = requestAnimationFrame(this.loop);
    const dt = Math.min(0.1, (t - (this.last || t)) / 1000);
    this.last = t;
    this.acc += dt;
    while (this.acc >= STEP) {
      this.acc -= STEP;
      if (this.hitstop > 0) this.hitstop -= STEP;
      else this.step(STEP);
    }
    this.draw();
  };

  step(dt: number) {
    if (this.toastT > 0) {
      this.toastT -= dt;
      if (this.toastT <= 0) this.toast = "";
    }
    this.audio.tick(dt);
    if (this.screen === "credits") {
      this.credits += dt * 28;
      this.hudAcc += dt;
      if (this.hudAcc > 0.05) {
        this.hudAcc = 0;
        this.emit();
      }
      return;
    }
    if (this.screen === "playing") this.stepPlay(dt);
    if (this.input.consumePause() && this.screen === "playing") {
      this.screen = "paused";
      this.flushSave();
      this.emit();
    } else if (this.input.consumePause() && this.screen === "paused") {
      this.screen = "playing";
      this.emit();
    }
  }

  stats(): Stats {
    const cls = CLASS_BY_ID[this.classId ?? "ashguard"];
    let s = { ...cls.stats };
    for (const t of TALENTS) {
      const r = this.meta.talents[t.id] ?? 0;
      if (r) s = addStats(s, Object.fromEntries(Object.entries(t.stats).map(([k, v]) => [k, (v ?? 0) * r])));
    }
    for (const id of this.inventory) {
      const it = ITEM_BY_ID[id];
      if (it) s = addStats(s, it.stats);
    }
    for (const id of this.upgrades) {
      const u = UPGRADES.find((x) => x.id === id);
      if (u) s = addStats(s, u.stats);
    }
    const missing = 1 - this.player.hp / Math.max(1, this.player.maxHp);
    if (this.classId === "ironfist") s = addStats(s, { damage: missing * 12, fireRate: missing * 0.6 });
    return s;
  }

  beginRun(opts: { classId: ClassId; seed: string; heat: number; daily: boolean; endless?: boolean }) {
    this.unlock();
    this.classId = opts.classId;
    this.seed = opts.seed;
    this.heat = opts.heat;
    this.daily = opts.daily;
    this.endless = !!opts.endless;
    this.rng = rngFrom(opts.seed, 11);
    this.lootRng = rngFrom(opts.seed, 99);
    this.inventory = [];
    this.upgrades = [];
    this.kills = 0;
    this.time = 0;
    this.player = this.blankPlayer();
    const st = this.stats();
    this.player.maxHp = st.maxHp;
    this.player.hp = st.maxHp;
    this.player.shield = st.shield;
    this.player.stats = st;
    this.player.gold = 0;
    this.player.xp = 0;
    this.player.level = 1;
    this.meta.runs += 1;
    this.loadFloor(0);
    this.screen = "playing";
    this.say(`The ${CLASS_BY_ID[opts.classId].name} descends.`);
    saveMeta(this.meta);
    this.flushSave();
    this.emit();
  }

  resumeRun() {
    const r = loadRun();
    if (!r) return false;
    this.classId = r.classId;
    this.seed = r.seed;
    this.heat = r.heat;
    this.daily = r.daily;
    this.endless = r.endless;
    this.inventory = r.inventory;
    this.upgrades = r.upgrades;
    this.kills = r.kills;
    this.time = r.time;
    this.player = this.blankPlayer();
    this.player.hp = r.hp;
    this.player.xp = r.xp;
    this.player.level = r.level;
    this.player.gold = r.gold;
    this.player.stats = this.stats();
    this.player.maxHp = this.player.stats.maxHp;
    this.loadFloor(r.floor);
    if (this.floor) {
      this.floor.current = r.room;
      for (const id of r.cleared) {
        const rm = this.floor.rooms[id];
        if (rm) rm.cleared = true;
      }
    }
    this.enterRoom(this.floor!.rooms[this.floor!.current]!, true);
    this.screen = "playing";
    this.say("The crypt remembers you.");
    this.emit();
    return true;
  }

  loadFloor(index: number) {
    const idx = this.endless && index >= BIOMES.length ? ((index - 1) % (BIOMES.length - 1)) + 1 : index;
    this.floor = generateFloor(this.seed, idx, this.heat);
    this.enterRoom(this.floor.rooms[this.floor.startId]!, false);
  }

  enterRoom(room: Room, fromSave: boolean) {
    if (!this.floor) return;
    this.floor.current = room.id;
    room.seen = true;
    this.enemies = [];
    this.bullets = [];
    this.pickups = [];
    this.wave = 0;
    this.waveT = room.cleared ? 0 : 0.6;
    this.player.x = WORLD_W / 2;
    this.player.y = WORLD_H / 2;
    this.cam.x = this.player.x;
    this.cam.y = this.player.y;
    if (room.kind === "shop" && !fromSave) this.openShop();
    if (room.kind === "treasure" && !fromSave) this.openChest();
    if (room.kind === "shrine" && !fromSave) this.openShrine();
    if (room.kind === "rest" && !fromSave) {
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + this.player.maxHp * 0.35);
      this.say("You rest. The ash settles.");
      room.cleared = true;
    }
    this.flushSave();
    this.emit();
  }

  currentRoom(): Room | null {
    if (!this.floor) return null;
    return this.floor.rooms[this.floor.current] ?? null;
  }

  stepPlay(dt: number) {
    const room = this.currentRoom();
    if (!room || !this.classId) return;
    this.time += dt;
    this.trauma = Math.max(0, this.trauma - dt * 1.8);
    this.invuln = Math.max(0, this.invuln - dt);
    this.dashT = Math.max(0, this.dashT - dt);
    this.dashCd = Math.max(0, this.dashCd - dt);
    this.skillCd = Math.max(0, this.skillCd - dt);
    this.fireCd = Math.max(0, this.fireCd - dt);
    const st = this.stats();
    this.player.stats = st;
    this.player.maxHp = st.maxHp;
    this.player.hp = Math.min(this.player.hp + st.regen * dt, this.player.maxHp);

    const mv = this.input.moveVec();
    const speed = st.speed * (this.dashT > 0 ? 2.6 : 1);
    this.player.vx = mv.x * speed;
    this.player.vy = mv.y * speed;
    this.player.x += this.player.vx * dt;
    this.player.y += this.player.vy * dt;
    const cl = clampToRoom(this.player.x, this.player.y, 18);
    this.player.x = cl.x;
    this.player.y = cl.y;
    if (mv.x || mv.y) this.player.walk += dt * 8;
    else this.player.walk = 0;

    const rect = this.canvas?.getBoundingClientRect();
    if (rect) {
      const sx = this.input.mouse.x - rect.left;
      const sy = this.input.mouse.y - rect.top;
      const wx = this.cam.x + (sx - this.w / 2);
      const wy = this.cam.y + (sy - this.h / 2);
      this.input.mouse.worldX = wx;
      this.input.mouse.worldY = wy;
      let ax = wx - this.player.x;
      let ay = wy - this.player.y;
      if (this.input.aimStick.active) {
        ax = this.input.aimStick.x;
        ay = this.input.aimStick.y;
      }
      if (this.meta.settings.autoAim || this.enemies.length) {
        if (this.meta.settings.autoAim || (!this.input.mouse.down && Math.hypot(ax, ay) < 8)) {
          let best: Enemy | null = null;
          let bd = 1e9;
          for (const e of this.enemies) {
            if (e.dead) continue;
            const d = (e.x - this.player.x) ** 2 + (e.y - this.player.y) ** 2;
            if (d < bd) {
              bd = d;
              best = e;
            }
          }
          if (best) {
            ax = best.x - this.player.x;
            ay = best.y - this.player.y;
          }
        }
      }
      this.player.aim = Math.atan2(ay, ax);
    }

    if (this.input.consumeDash() && this.dashCd <= 0) {
      this.dashT = 0.18;
      this.dashCd = Math.max(0.45, 0.9 * (1 - st.cdr));
      this.invuln = Math.max(this.invuln, 0.18);
      this.audio.dash();
      this.burst(this.player.x, this.player.y, "#ece6dc", 10);
    }
    if (this.input.consumeSkill() && this.skillCd <= 0) this.castSkill();

    const hostiles = this.enemies.some((e) => !e.dead);
    const wantFire = this.input.firing() || this.input.aimStick.active || (this.meta.settings.autoFire && hostiles);
    if (wantFire && this.fireCd <= 0) this.fire();

    if (!room.cleared && (room.kind === "combat" || room.kind === "elite" || room.kind === "boss" || room.kind === "start")) {
      const alive = this.enemies.filter((e) => !e.dead).length;
      if (alive === 0) {
        this.waveT -= dt;
        if (this.waveT <= 0) {
          if (this.wave >= room.waves) {
            room.cleared = true;
            this.audio.level();
            this.say(room.kind === "boss" ? "The vault stills." : "The host is broken.");
            this.grant("first-blood");
            if (room.kind === "boss") this.grant("first-boss");
            this.flushSave();
          } else {
            this.wave += 1;
            this.spawnWave(room);
            this.waveT = 0.8;
          }
        }
      }
    }

    this.stepEnemies(dt, st);
    this.stepBullets(dt);
    this.stepPickups(dt, st);

    const look = 70;
    const tx = this.player.x + Math.cos(this.player.aim) * look;
    const ty = this.player.y + Math.sin(this.player.aim) * look;
    const k = 1 - Math.exp(-5 * dt);
    this.cam.x += (tx - this.cam.x) * k;
    this.cam.y += (ty - this.cam.y) * k;

    if (room.cleared) this.tryDoors();
    if (this.player.hp <= 0) this.die();

    this.hudAcc += dt;
    if (this.hudAcc > 0.12) {
      this.hudAcc = 0;
      this.emit();
    }
  }

  tryDoors() {
    const room = this.currentRoom();
    if (!room || !this.floor) return;
    const dirs = ["n", "e", "s", "w"] as const;
    for (const d of dirs) {
      const nid = room.doors[d];
      if (nid == null) continue;
      const p = doorWorld(d);
      if (Math.hypot(this.player.x - p.x, this.player.y - p.y) < 42) {
        if (room.kind === "boss") {
          if (this.floor.biome.id === "crown" && !this.endless) {
            this.win();
            return;
          }
          this.loadFloor(this.floor.index + 1);
          this.say(`${this.floor.biome.name}.`);
          return;
        }
        this.enterRoom(this.floor.rooms[nid]!, false);
        return;
      }
    }
  }

  fire() {
    const st = this.stats();
    const cls = CLASS_BY_ID[this.classId!];
    this.fireCd = 1 / Math.max(0.4, st.fireRate);
    this.audio.shoot();
    const n = Math.max(1, Math.round(st.projCount));
    for (let i = 0; i < n; i++) {
      const spread = (i - (n - 1) / 2) * st.spread;
      const a = this.player.aim + spread;
      const melee = cls.melee;
      const spd = melee ? 380 : st.projSpeed;
      this.bullets.push({
        x: this.player.x + Math.cos(a) * 22,
        y: this.player.y + Math.sin(a) * 22,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        dmg: st.damage,
        pierce: melee ? 2 + st.pierce : st.pierce,
        life: melee ? 0.16 : 0.9,
        r: melee ? 16 * st.area : 8 * st.area,
        friendly: true,
        kind: cls.proj,
        rot: a,
      });
    }
  }

  castSkill() {
    const cls = CLASS_BY_ID[this.classId!];
    const st = this.stats();
    this.skillCd = Math.max(3.5, 8 * (1 - st.cdr));
    this.audio.dash();
    this.trauma = Math.min(1, this.trauma + 0.45);
    if (cls.id === "ashguard" || cls.id === "dawnwarden") {
      this.player.shield += 30 + st.shield * 0.3;
      this.invuln = 0.6;
      for (const e of this.enemies) {
        if (e.dead) continue;
        const dx = e.x - this.player.x;
        const dy = e.y - this.player.y;
        if (dx * dx + dy * dy < 180 * 180) this.hurtEnemy(e, st.damage * 1.4, true);
      }
    } else if (cls.id === "pyrelock" || cls.id === "ironfist" || cls.id === "stormcall") {
      for (const e of this.enemies) {
        if (e.dead) continue;
        const dx = e.x - this.player.x;
        const dy = e.y - this.player.y;
        if (dx * dx + dy * dy < 210 * 210) this.hurtEnemy(e, st.damage * 2.2, true);
      }
      this.burst(this.player.x, this.player.y, "#c45c3a", 28);
    } else if (cls.id === "gravekin") {
      for (let i = 0; i < 8; i++) {
        const a = this.player.aim + (i - 3.5) * 0.18;
        this.bullets.push({
          x: this.player.x,
          y: this.player.y,
          vx: Math.cos(a) * 420,
          vy: Math.sin(a) * 420,
          dmg: st.damage * 0.8,
          pierce: 2,
          life: 0.8,
          r: 8,
          friendly: true,
          kind: "bone",
          rot: a,
        });
      }
    } else if (cls.id === "nightveil") {
      this.dashT = 0.28;
      this.invuln = 0.28;
      this.player.x += Math.cos(this.player.aim) * 140;
      this.player.y += Math.sin(this.player.aim) * 140;
      const cl = clampToRoom(this.player.x, this.player.y, 18);
      this.player.x = cl.x;
      this.player.y = cl.y;
    } else {
      this.fire();
      this.fire();
    }
    this.say(cls.skill);
  }

  spawnWave(room: Room) {
    const biome = this.floor!.biome.id;
    const local = ENEMIES.filter((e) => !e.boss && e.biomes.includes(biome));
    const use = local.length ? local : ENEMIES.filter((e) => !e.boss && !e.elite);
    if (room.kind === "start") {
      for (let i = 0; i < 5; i++) {
        const p = spawnPoint(this.rng, 170);
        this.spawnEnemy(i % 2 ? "ash-rat" : "crypt-bat", p.x, p.y, false);
      }
      return;
    }
    const n = 6 + this.floor!.index * 2 + this.wave * 2 + this.heat + (room.kind === "elite" ? 3 : 0);
    if (room.kind === "boss") {
      const boss = ENEMY_BY_ID[this.floor!.biome.boss];
      if (boss) this.spawnEnemy(boss.id, WORLD_W / 2, WORLD_H / 2 - 80, false);
      for (let i = 0; i < 4; i++) {
        const p = spawnPoint(this.rng, 160);
        this.spawnEnemy(pick(this.rng, use).id, p.x, p.y, false);
      }
      return;
    }
    for (let i = 0; i < n; i++) {
      const def = pick(this.rng, use);
      const elite = room.kind === "elite" && i === 0;
      const edge = randInt(this.rng, 0, 3);
      let x = WORLD_W / 2;
      let y = WORLD_H / 2;
      if (edge === 0) {
        x = randRange(this.rng, 80, WORLD_W - 80);
        y = 90;
      } else if (edge === 1) {
        x = WORLD_W - 90;
        y = randRange(this.rng, 80, WORLD_H - 80);
      } else if (edge === 2) {
        x = randRange(this.rng, 80, WORLD_W - 80);
        y = WORLD_H - 90;
      } else {
        x = 90;
        y = randRange(this.rng, 80, WORLD_H - 80);
      }
      this.spawnEnemy(def.id, x, y, elite);
    }
  }

  spawnEnemy(id: string, x: number, y: number, elite: boolean) {
    const def = ENEMY_BY_ID[id];
    if (!def) return;
    const heatHp = 1 + this.heat * 0.12;
    const hp = def.hp * heatHp * (elite ? 2.2 : 1) * (1 + this.floor!.index * 0.18);
    this.enemies.push({
      x,
      y,
      r: def.radius * (elite ? 1.2 : 1),
      hp,
      max: hp,
      vx: 0,
      vy: 0,
      def,
      cd: randRange(this.rng, 0.2, 1),
      flash: 0,
      elite: elite || !!def.elite,
      dead: false,
      aim: 0,
    });
    if (!this.meta.discovered.includes(id)) {
      this.meta.discovered = [...this.meta.discovered, id];
      if (this.meta.discovered.length >= 50) this.grant("codex50");
    }
  }

  stepEnemies(dt: number, st: Stats) {
    const px = this.player.x;
    const py = this.player.y;
    for (const e of this.enemies) {
      if (e.dead) continue;
      e.flash = Math.max(0, e.flash - dt);
      const dx = px - e.x;
      const dy = py - e.y;
      const dist = Math.hypot(dx, dy) || 1;
      const nx = dx / dist;
      const ny = dy / dist;
      e.aim = Math.atan2(dy, dx);
      const spd = e.def.speed * (1 + this.heat * 0.08);
      const b = e.def.behavior;
      if (b === "kite" && dist < 180) {
        e.vx = -nx * spd;
        e.vy = -ny * spd;
      } else if (b === "circle") {
        e.vx = -ny * spd + nx * spd * 0.3;
        e.vy = nx * spd + ny * spd * 0.3;
      } else if (b === "fly") {
        e.vx = nx * spd * 1.15;
        e.vy = ny * spd * 1.15;
      } else if (b === "tank") {
        e.vx = nx * spd * 0.85;
        e.vy = ny * spd * 0.85;
      } else {
        e.vx = nx * spd;
        e.vy = ny * spd;
      }
      if (b === "dash" && dist < 220 && e.cd <= 0) {
        e.vx = nx * spd * 4;
        e.vy = ny * spd * 4;
        e.cd = 1.6;
      }
      for (const o of this.enemies) {
        if (o === e || o.dead) continue;
        const ox = e.x - o.x;
        const oy = e.y - o.y;
        const od = Math.hypot(ox, oy) || 1;
        if (od < e.r + o.r + 6) {
          e.vx += (ox / od) * 40;
          e.vy += (oy / od) * 40;
        }
      }
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      const cl = clampToRoom(e.x, e.y, e.r);
      e.x = cl.x;
      e.y = cl.y;
      e.cd -= dt;
      if ((b === "shoot" || b === "kite" || b === "summon" || e.def.boss) && e.cd <= 0 && dist < (e.def.shootRange ?? 280)) {
        e.cd = (e.def.shootCd ?? 1.4) * (e.def.boss ? 0.85 : 1);
        const a = e.aim;
        this.bullets.push({
          x: e.x,
          y: e.y,
          vx: Math.cos(a) * 220,
          vy: Math.sin(a) * 220,
          dmg: e.def.damage * 0.7,
          pierce: 0,
          life: 2.2,
          r: 7,
          friendly: false,
          kind: "fireball",
          rot: a,
        });
        if (b === "summon" && this.enemies.length < 40) this.spawnEnemy("ash-rat", e.x + 20, e.y, false);
      }
      if (b === "heal" && e.cd <= 0) {
        e.cd = 2;
        for (const o of this.enemies) {
          if (o.dead) continue;
          if ((o.x - e.x) ** 2 + (o.y - e.y) ** 2 < 160 * 160) o.hp = Math.min(o.max, o.hp + 12);
        }
      }
      if (dist < e.r + 16 && this.invuln <= 0) {
        if (b === "explode") {
          this.hurtPlayer(e.def.damage * 1.6);
          this.killEnemy(e, st);
        } else {
          this.hurtPlayer(e.def.damage);
          if (st.thorns) this.hurtEnemy(e, st.thorns, false);
        }
      }
    }
    this.enemies = this.enemies.filter((e) => !e.dead || e.flash > 0);
  }

  stepBullets(dt: number) {
    for (const b of this.bullets) {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.life -= dt;
      b.rot = Math.atan2(b.vy, b.vx);
      if (!inBounds(b.x, b.y, 4)) b.life = 0;
      if (b.friendly) {
        for (const e of this.enemies) {
          if (e.dead) continue;
          if ((e.x - b.x) ** 2 + (e.y - b.y) ** 2 < (e.r + b.r) ** 2) {
            this.hurtEnemy(e, b.dmg, true);
            b.pierce -= 1;
            if (b.pierce < 0) b.life = 0;
          }
        }
      } else if (this.invuln <= 0) {
        if ((this.player.x - b.x) ** 2 + (this.player.y - b.y) ** 2 < (18 + b.r) ** 2) {
          this.hurtPlayer(b.dmg);
          b.life = 0;
        }
      }
    }
    this.bullets = this.bullets.filter((b) => b.life > 0);
  }

  stepPickups(dt: number, st: Stats) {
    const magnet = 70 + st.pickupRange;
    for (const p of this.pickups) {
      p.t += dt;
      const dx = this.player.x - p.x;
      const dy = this.player.y - p.y;
      const d = Math.hypot(dx, dy);
      if (d < magnet) {
        p.x += dx * dt * 6;
        p.y += dy * dt * 6;
      }
      if (d < 22) {
        p.t = 99;
        if (p.kind === "xp") this.gainXp(p.val);
        if (p.kind === "gold") this.player.gold += Math.round(p.val * st.goldGain);
        if (p.kind === "hp") this.player.hp = Math.min(this.player.maxHp, this.player.hp + p.val);
        if (p.kind === "item" && p.item) this.giveItem(p.item);
        this.audio.pickup();
      }
    }
    this.pickups = this.pickups.filter((p) => p.t < 12);
    for (const p of this.particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0).slice(-380);
    for (const f of this.floats) f.t -= dt;
    this.floats = this.floats.filter((f) => f.t > 0).slice(-40);
  }

  hurtEnemy(e: Enemy, dmg: number, critable: boolean) {
    const st = this.player.stats;
    let d = dmg;
    let crit = false;
    if (critable && this.rng() < st.critChance) {
      d *= st.critDamage;
      crit = true;
    }
    e.hp -= d;
    e.flash = 0.08;
    this.hitstop = Math.max(this.hitstop, crit ? 0.045 : 0.02);
    this.trauma = Math.min(1, this.trauma + (crit ? 0.22 : 0.08));
    this.floats.push({ x: e.x, y: e.y - 20, t: 0.6, text: `${Math.round(d)}`, color: crit ? "#c4a15a" : "#ece6dc" });
    this.audio.hit();
    if (st.lifesteal) this.player.hp = Math.min(this.player.maxHp, this.player.hp + d * st.lifesteal);
    if (e.hp <= 0) this.killEnemy(e, st);
  }

  killEnemy(e: Enemy, st: Stats) {
    if (e.dead) return;
    e.dead = true;
    e.flash = 0.12;
    this.kills += 1;
    this.meta.kills += 1;
    this.burst(e.x, e.y, "#c45c3a", e.def.boss ? 36 : 12);
    this.pickups.push({ x: e.x, y: e.y, kind: "xp", val: e.def.xp * st.xpGain, t: 0 });
    if (chance(this.lootRng, 0.55)) this.pickups.push({ x: e.x + 8, y: e.y, kind: "gold", val: e.def.gold, t: 0 });
    if (chance(this.lootRng, 0.04 + st.luck / 400)) {
      const it = this.rollItem();
      this.pickups.push({ x: e.x, y: e.y - 10, kind: "item", val: 0, item: it.id, t: 0 });
    }
    if (e.def.behavior === "split") {
      for (let i = 0; i < 2; i++) this.spawnEnemy("ash-rat", e.x + randRange(this.rng, -16, 16), e.y + randRange(this.rng, -16, 16), false);
    }
    if (e.elite) this.grant("elite");
  }

  hurtPlayer(raw: number) {
    if (this.invuln > 0) return;
    const st = this.player.stats;
    const dmg = Math.max(1, raw * (100 / (100 + st.armor)));
    if (this.player.shield > 0) {
      this.player.shield -= dmg;
      if (this.player.shield < 0) {
        this.player.hp += this.player.shield;
        this.player.shield = 0;
      }
    } else this.player.hp -= dmg;
    this.invuln = 0.35;
    this.trauma = Math.min(1, this.trauma + 0.4);
    this.audio.hurt();
    this.burst(this.player.x, this.player.y, "#c45c3a", 8);
  }

  gainXp(v: number) {
    this.player.xp += v;
    while (this.player.xp >= xpToLevel(this.player.level)) {
      this.player.xp -= xpToLevel(this.player.level);
      this.player.level += 1;
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 12);
      this.openLevelUp();
      if (this.player.level >= 10) this.grant("level10");
      if (this.player.level >= 20) this.grant("level20");
    }
  }

  openLevelUp() {
    this.audio.level();
    const pool = shuffle(this.lootRng, UPGRADES.slice());
    this.choices = pool.slice(0, 3).map((u) => ({ kind: "upgrade", upgrade: u }));
    this.screen = "levelup";
    this.emit();
  }

  pickChoice(i: number) {
    const c = this.choices[i];
    if (!c) return;
    if (c.upgrade) this.upgrades.push(c.upgrade.id);
    if (c.item) this.giveItem(c.item.id);
    this.choices = [];
    this.screen = "playing";
    this.flushSave();
    this.emit();
  }

  openShop() {
    this.shop = [0, 1, 2, 3].map(() => {
      const it = this.rollItem();
      const price = { common: 18, uncommon: 32, rare: 48, epic: 70, legendary: 110, mythic: 160 }[it.rarity];
      return { item: it, price };
    });
    this.screen = "shop";
    this.emit();
  }

  buy(i: number) {
    const s = this.shop[i];
    if (!s || this.player.gold < s.price) {
      this.say("Not enough gold.");
      return;
    }
    this.player.gold -= s.price;
    this.giveItem(s.item.id);
    this.shop.splice(i, 1);
    this.grant("shopper");
    this.emit();
  }

  closeShop() {
    const room = this.currentRoom();
    if (room) room.cleared = true;
    this.screen = "playing";
    this.flushSave();
    this.emit();
  }

  openChest() {
    this.chest = this.rollItem("rare");
    this.screen = "chest";
    this.emit();
  }

  takeChest() {
    if (this.chest) this.giveItem(this.chest.id);
    this.chest = null;
    const room = this.currentRoom();
    if (room) room.cleared = true;
    this.screen = "playing";
    this.flushSave();
    this.emit();
  }

  openShrine() {
    const opts = [
      "The shrine drinks 20 gold and mends you.",
      "A pact: +damage, -health.",
      "The names remember you. +luck.",
      "Ash rains. Gain 40 ashes, lose a third of your gold.",
    ];
    this.shrine = pick(this.lootRng, opts);
    this.screen = "shrine";
    this.emit();
  }

  useShrine() {
    if (this.shrine.includes("mends")) {
      this.player.gold = Math.max(0, this.player.gold - 20);
      this.player.hp = this.player.maxHp;
    } else if (this.shrine.includes("pact")) {
      this.upgrades.push("glass");
    } else if (this.shrine.includes("names")) {
      this.upgrades.push("luck");
    } else {
      this.meta.ashes += 40;
      this.player.gold = Math.floor(this.player.gold * 0.66);
    }
    this.grant("shrine");
    const room = this.currentRoom();
    if (room) room.cleared = true;
    this.screen = "playing";
    this.flushSave();
    saveMeta(this.meta);
    this.emit();
  }

  rollItem(min?: Rarity): ItemDef {
    const st = this.player.stats;
    let r = rarityRoll(this.lootRng, st.luck);
    const order: Rarity[] = ["common", "uncommon", "rare", "epic", "legendary", "mythic"];
    if (min && order.indexOf(r) < order.indexOf(min)) r = min;
    const pool = ITEMS.filter((i) => i.rarity === r);
    return pick(this.lootRng, pool.length ? pool : ITEMS);
  }

  giveItem(id: string) {
    this.inventory.push(id);
    if (!this.meta.collected.includes(id)) this.meta.collected = [...this.meta.collected, id];
    if (this.inventory.length >= 20) this.grant("stash");
    if (this.meta.collected.length >= 100) this.grant("loot100");
    const it = ITEM_BY_ID[id];
    if (it) this.say(it.name);
    saveMeta(this.meta);
  }

  burst(x: number, y: number, color: string, n: number) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 40 + Math.random() * 120;
      this.particles.push({
        x,
        y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        life: 0.35 + Math.random() * 0.3,
        max: 0.5,
        size: 2 + Math.random() * 3,
        color,
      });
    }
  }

  say(t: string) {
    this.toast = t;
    this.toastT = 2.4;
    this.emit();
  }

  grant(id: string) {
    if (this.meta.achievements.includes(id)) return;
    const a = ACHIEVEMENTS.find((x) => x.id === id);
    if (!a) return;
    this.meta.achievements.push(id);
    this.meta.ashes += a.ashes;
    this.say(`Rite complete — ${a.name}`);
    saveMeta(this.meta);
  }

  die() {
    this.audio.die();
    const reward = 12 + this.floor!.index * 8 + Math.floor(this.kills / 8) + this.heat * 6;
    this.meta.ashes += reward;
    saveMeta(this.meta);
    saveRun(null);
    this.screen = "gameover";
    this.emit();
  }

  win() {
    if (!this.classId) return;
    this.meta.wins[this.classId] = (this.meta.wins[this.classId] ?? 0) + 1;
    this.meta.bestHeat = Math.max(this.meta.bestHeat, this.heat);
    this.meta.ashes += 80 + this.heat * 20;
    this.grant("crown");
    if (this.heat >= 3) this.grant("heat3");
    if (this.heat >= 8) this.grant("heat8");
    if (CLASSES.every((c) => (this.meta.wins[c.id] ?? 0) > 0)) this.grant("all-class");
    if (this.daily) this.grant("daily");
    saveMeta(this.meta);
    saveRun(null);
    this.credits = 0;
    this.screen = "victory";
    this.emit();
  }

  buyTalent(id: string) {
    const t = TALENTS.find((x) => x.id === id);
    if (!t) return;
    const r = this.meta.talents[id] ?? 0;
    if (r >= t.max) return;
    const cost = t.cost * (r + 1);
    if (this.meta.ashes < cost) {
      this.say("Not enough ash.");
      return;
    }
    this.meta.ashes -= cost;
    this.meta.talents[id] = r + 1;
    saveMeta(this.meta);
    this.audio.ui();
    this.emit();
  }

  unlockClass(id: ClassId) {
    const c = CLASS_BY_ID[id];
    if (this.meta.unlocked.includes(id)) return;
    if (this.meta.ashes < c.unlock) {
      this.say("Not enough ash.");
      return;
    }
    this.meta.ashes -= c.unlock;
    this.meta.unlocked.push(id);
    saveMeta(this.meta);
    this.emit();
  }

  flushSave() {
    if (!this.classId || !this.floor) return;
    if (this.screen !== "playing" && this.screen !== "paused" && this.screen !== "levelup") return;
    const run: RunSave = {
      version: 1,
      seed: this.seed,
      classId: this.classId,
      heat: this.heat,
      daily: this.daily,
      endless: this.endless,
      floor: this.floor.index,
      room: this.floor.current,
      hp: this.player.hp,
      xp: this.player.xp,
      level: this.player.level,
      gold: this.player.gold,
      kills: this.kills,
      time: this.time,
      inventory: this.inventory,
      upgrades: this.upgrades,
      wave: this.wave,
      cleared: this.floor.rooms.filter((r) => r.cleared).map((r) => r.id),
      shrineUsed: [],
    };
    saveRun(run);
    saveMeta(this.meta);
  }

  dailySeed() {
    const d = new Date();
    return `Daily-${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.fillStyle = "#0c0b0a";
    ctx.fillRect(0, 0, this.w, this.h);
    if (
      this.screen === "loading" ||
      this.screen === "title" ||
      this.screen === "sanctum" ||
      this.screen === "class" ||
      this.screen === "codex" ||
      this.screen === "settings" ||
      this.screen === "credits" ||
      this.screen === "gameover" ||
      this.screen === "victory"
    ) {
      this.drawBackdrop(ctx);
      return;
    }
    this.drawWorld(ctx);
  }

  drawBackdrop(ctx: CanvasRenderingContext2D) {
    const img = this.sprites.title;
    if (img) {
      const scale = Math.max(this.w / img.width, this.h / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.globalAlpha = 0.55;
      ctx.drawImage(img, (this.w - dw) / 2, (this.h - dh) / 2, dw, dh);
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "rgba(12,11,10,0.45)";
    ctx.fillRect(0, 0, this.w, this.h);
  }

  drawWorld(ctx: CanvasRenderingContext2D) {
    const shake = this.meta.settings.reducedMotion ? 0 : this.trauma * this.trauma * 14 * this.meta.settings.shake;
    const ox = (Math.random() - 0.5) * shake;
    const oy = (Math.random() - 0.5) * shake;
    ctx.save();
    ctx.translate(this.w / 2 - this.cam.x + ox, this.h / 2 - this.cam.y + oy);
    const biome = this.floor?.biome;
    const tile = biome ? this.sprites.tiles[biome.tile] : this.sprites.tiles.crypt;
    const wall = this.sprites.tiles.wall;
    const room = this.currentRoom();

    if (tile) {
      const pat = ctx.createPattern(tile, "repeat");
      if (pat) {
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
      }
    } else {
      ctx.fillStyle = "#1a1612";
      ctx.fillRect(0, 0, WORLD_W, WORLD_H);
    }
    ctx.fillStyle = biome?.ambient ?? "rgba(12,11,10,0.22)";
    ctx.globalAlpha = 0.28;
    ctx.fillRect(0, 0, WORLD_W, WORLD_H);
    ctx.globalAlpha = 1;

    const t = TILE;
    if (wall) {
      const wpat = ctx.createPattern(wall, "repeat");
      if (wpat) ctx.fillStyle = wpat;
    } else ctx.fillStyle = "#2a241e";
    ctx.fillRect(0, 0, WORLD_W, t);
    ctx.fillRect(0, WORLD_H - t, WORLD_W, t);
    ctx.fillRect(0, 0, t, WORLD_H);
    ctx.fillRect(WORLD_W - t, 0, t, WORLD_H);

    if (room) {
      for (const d of ["n", "e", "s", "w"] as const) {
        if (room.doors[d] == null) continue;
        const p = doorWorld(d);
        const gap = 52;
        if (tile) {
          const pat = ctx.createPattern(tile, "repeat");
          if (pat) ctx.fillStyle = pat;
        } else ctx.fillStyle = "#1a1612";
        if (d === "n" || d === "s") ctx.fillRect(p.x - gap, p.y - t * 0.55, gap * 2, t * 1.1);
        else ctx.fillRect(p.x - t * 0.55, p.y - gap, t * 1.1, gap * 2);
        ctx.beginPath();
        ctx.fillStyle = room.cleared ? "rgba(236,230,220,0.85)" : "rgba(111,105,98,0.7)";
        ctx.arc(p.x, p.y, room.cleared ? 14 : 10, 0, Math.PI * 2);
        ctx.fill();
        if (room.cleared) {
          ctx.strokeStyle = "rgba(196,161,90,0.7)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      if (this.sprites.props) {
        if (room.kind === "treasure") drawFrame(ctx, this.sprites.props, room.cleared ? 1 : 0, WORLD_W / 2, WORLD_H / 2, 72);
        if (room.kind === "shrine") drawFrame(ctx, this.sprites.props, 2, WORLD_W / 2, WORLD_H / 2, 72);
        if (room.kind === "shop") drawFrame(ctx, this.sprites.props, 3, WORLD_W / 2, WORLD_H / 2, 80);
        if (room.kind === "rest") drawFrame(ctx, this.sprites.props, 2, WORLD_W / 2, WORLD_H / 2 + 20, 64);
      }
    }

    for (const p of this.pickups) {
      ctx.fillStyle = p.kind === "xp" ? "#7d9a6a" : p.kind === "gold" ? "#c4a15a" : p.kind === "hp" ? "#c45c3a" : "#d8d2c8";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.kind === "item" ? 8 : 5, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const b of this.bullets) {
      this.drawBullet(ctx, b);
    }
    for (const e of this.enemies) {
      if (e.dead && e.flash <= 0) continue;
      const pack = this.sprites.packs[e.def.pack];
      const size = e.def.boss ? 110 : e.elite ? 64 : 48;
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.ellipse(e.x, e.y + size * 0.32, size * 0.28, 7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = e.elite ? "rgba(196,161,90,0.75)" : "rgba(196,92,58,0.55)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(e.x, e.y + 2, size * 0.38, 0, Math.PI * 2);
      ctx.stroke();
      if (e.flash > 0) ctx.filter = "brightness(2.2)";
      if (e.def.color) ctx.globalAlpha = 0.95;
      if (pack) drawFrame(ctx, pack, e.def.sprite, e.x, e.y, size, 0);
      else {
        ctx.fillStyle = e.def.color ?? "#8a4a3a";
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      const bw = size * 0.7;
      ctx.fillStyle = "#2c2925";
      ctx.fillRect(e.x - bw / 2, e.y - size * 0.55, bw, 4);
      ctx.fillStyle = e.elite ? "#c4a15a" : "#c45c3a";
      ctx.fillRect(e.x - bw / 2, e.y - size * 0.55, bw * (e.hp / e.max), 4);
    }
    if (this.classId) {
      const hero = this.sprites.heroes[this.classId];
      const dir = facingIndex(this.player.aim);
      const wf = Math.abs(this.player.vx) + Math.abs(this.player.vy) > 8 ? Math.floor(this.player.walk) % 4 : 0;
      const idx = dir * 4 + wf;
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.beginPath();
      ctx.ellipse(this.player.x, this.player.y + 22, 16, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(236,230,220,0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.player.x, this.player.y + 4, 22, 0, Math.PI * 2);
      ctx.stroke();
      if (this.invuln > 0) ctx.globalAlpha = 0.55;
      if (hero) drawFrame(ctx, hero, idx, this.player.x, this.player.y, 64);
      else {
        ctx.fillStyle = "#ece6dc";
        ctx.beginPath();
        ctx.arc(this.player.x, this.player.y, 16, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    for (const p of this.particles) {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      ctx.globalAlpha = 1;
    }
    ctx.font = "600 13px IBM Plex Sans, sans-serif";
    for (const f of this.floats) {
      ctx.globalAlpha = Math.max(0, f.t);
      ctx.fillStyle = f.color;
      ctx.textAlign = "center";
      ctx.fillText(f.text, f.x, f.y - (0.6 - f.t) * 28);
      ctx.globalAlpha = 1;
    }

    const g = ctx.createRadialGradient(this.player.x, this.player.y, 80, this.player.x, this.player.y, 520);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(8,7,6,0.55)");
    ctx.fillStyle = g;
    ctx.fillRect(-40, -40, WORLD_W + 80, WORLD_H + 80);
    ctx.restore();
  }

  drawBullet(ctx: CanvasRenderingContext2D, b: Bullet) {
    if (b.kind === "slash") {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);
      ctx.strokeStyle = b.friendly ? "rgba(236,230,220,0.92)" : "rgba(196,92,58,0.9)";
      ctx.lineWidth = 3.5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(0, 0, b.r * 1.15, -0.75, 0.75);
      ctx.stroke();
      ctx.restore();
      return;
    }
    const fx = this.sprites.fx[b.kind] ?? this.sprites.fx[b.friendly ? "arrow" : "fireball"];
    ctx.save();
    ctx.translate(b.x, b.y);
    const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, b.r * 2.2);
    glow.addColorStop(0, b.friendly ? "rgba(236,230,220,0.95)" : "rgba(196,92,58,0.95)");
    glow.addColorStop(1, "rgba(196,92,58,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, b.r * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    if (fx) {
      const frame = Math.floor((1 - b.life) * 4) % 4;
      drawFrame(ctx, fx, frame, b.x, b.y, Math.max(16, b.r * 2.4), b.rot);
    }
  }

  hud(): Hud {
    if (this.hudCache) return this.hudCache;
    const st = this.player.stats.maxHp ? this.player.stats : this.stats();
    const room = this.currentRoom();
    this.hudCache = {
      screen: this.screen,
      loadP: this.loadP,
      toast: this.toast,
      hp: this.player.hp,
      maxHp: this.player.maxHp || st.maxHp,
      shield: this.player.shield,
      xp: this.player.xp,
      xpTo: xpToLevel(this.player.level),
      level: this.player.level,
      gold: this.player.gold,
      ashes: this.meta.ashes,
      wave: this.wave,
      waves: room?.waves ?? 0,
      roomKind: room?.kind ?? "",
      floorName: this.floor?.biome.name ?? "",
      floor: (this.floor?.index ?? 0) + 1,
      time: this.time,
      classId: this.classId,
      skillCd: this.skillCd,
      skillMax: 8,
      dash: this.dashCd,
      dashMax: 0.9,
      choices: this.choices,
      shop: this.shop,
      chest: this.chest,
      shrine: this.shrine,
      inventory: this.inventory.map((id) => ITEM_BY_ID[id]).filter(Boolean) as ItemDef[],
      seed: this.seed,
      heat: this.heat,
      minimap: (this.floor?.rooms ?? []).map((r) => ({
        gx: r.gx,
        gy: r.gy,
        kind: r.kind,
        current: r.id === this.floor?.current,
        cleared: r.cleared,
        seen: r.seen,
      })),
      meta: this.meta,
      kills: this.kills,
      endless: this.endless,
      daily: this.daily,
      classes: CLASSES,
      itemsCount: ITEMS.length,
      enemiesCount: ENEMIES.length,
      collected: this.meta.collected.length,
      discovered: this.meta.discovered.length,
      credits: this.credits,
    };
    return this.hudCache;
  }

  installProbe() {
    const self = this;
    (window as unknown as { __controlsTest: unknown }).__controlsTest = {
      getYaw: () => Math.atan2(-self.player.vy, self.player.vx || 0.0001),
      getSpeed: () => Math.hypot(self.player.vx, self.player.vy),
      setKeys: (codes: string[]) => self.input.setKeys(codes),
      getPos: () => ({ x: self.player.x, y: self.player.y }),
    };
  }
}

export const game = new Emberwake();

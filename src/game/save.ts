import type { ClassId, ScreenId } from "./types";
import { TALENTS } from "./data/talents";

export const SAVE_VERSION = 1;
const META_KEY = "emberwake-meta-v1";
const RUN_KEY = "emberwake-run-v1";
const BACKUP_KEY = "emberwake-meta-bak";

export type Settings = {
  master: number;
  music: number;
  sfx: number;
  shake: number;
  autoAim: boolean;
  autoFire: boolean;
  reducedMotion: boolean;
};

export type MetaSave = {
  version: number;
  ashes: number;
  talents: Record<string, number>;
  unlocked: ClassId[];
  discovered: string[];
  collected: string[];
  achievements: string[];
  wins: Partial<Record<ClassId, number>>;
  bestHeat: number;
  runs: number;
  kills: number;
  settings: Settings;
};

export type RunSave = {
  version: number;
  seed: string;
  classId: ClassId;
  heat: number;
  daily: boolean;
  endless: boolean;
  floor: number;
  room: number;
  hp: number;
  xp: number;
  level: number;
  gold: number;
  kills: number;
  time: number;
  inventory: string[];
  upgrades: string[];
  wave: number;
  cleared: number[];
  shrineUsed: number[];
};

export const DEFAULT_SETTINGS: Settings = {
  master: 0.8,
  music: 0.35,
  sfx: 0.8,
  shake: 0.7,
  autoAim: false,
  autoFire: true,
  reducedMotion: false,
};

export function defaultMeta(): MetaSave {
  return {
    version: SAVE_VERSION,
    ashes: 0,
    talents: Object.fromEntries(TALENTS.map((t) => [t.id, 0])),
    unlocked: ["ashguard", "cinderbow", "pyrelock"],
    discovered: [],
    collected: [],
    achievements: [],
    wins: {},
    bestHeat: 0,
    runs: 0,
    kills: 0,
    settings: { ...DEFAULT_SETTINGS },
  };
}

function migrateMeta(raw: MetaSave): MetaSave {
  const d = defaultMeta();
  return {
    ...d,
    ...raw,
    version: SAVE_VERSION,
    settings: { ...d.settings, ...(raw.settings ?? {}) },
    talents: { ...d.talents, ...(raw.talents ?? {}) },
    unlocked: raw.unlocked?.length ? raw.unlocked : d.unlocked,
  };
}

export function loadMeta(): MetaSave {
  try {
    if (typeof localStorage === "undefined") return defaultMeta();
    const t = localStorage.getItem(META_KEY);
    if (!t) return defaultMeta();
    return migrateMeta(JSON.parse(t) as MetaSave);
  } catch {
    try {
      const b = localStorage.getItem(BACKUP_KEY);
      if (b) return migrateMeta(JSON.parse(b) as MetaSave);
    } catch {
      /* ignore */
    }
    return defaultMeta();
  }
}

export function saveMeta(meta: MetaSave) {
  try {
    if (typeof localStorage === "undefined") return;
    const prev = localStorage.getItem(META_KEY);
    if (prev) localStorage.setItem(BACKUP_KEY, prev);
    localStorage.setItem(META_KEY, JSON.stringify({ ...meta, version: SAVE_VERSION }));
  } catch {
    /* quota / private mode */
  }
}

export function loadRun(): RunSave | null {
  try {
    if (typeof localStorage === "undefined") return null;
    const t = localStorage.getItem(RUN_KEY);
    if (!t) return null;
    const r = JSON.parse(t) as RunSave;
    if (r.version !== SAVE_VERSION) return null;
    return r;
  } catch {
    return null;
  }
}

export function saveRun(run: RunSave | null) {
  try {
    if (typeof localStorage === "undefined") return;
    if (!run) localStorage.removeItem(RUN_KEY);
    else localStorage.setItem(RUN_KEY, JSON.stringify({ ...run, version: SAVE_VERSION }));
  } catch {
    /* ignore */
  }
}

export type UiSnapshot = {
  screen: ScreenId;
  loading: number;
  toast: string;
};

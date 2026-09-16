export type ScreenId =
  | "loading"
  | "title"
  | "sanctum"
  | "class"
  | "playing"
  | "paused"
  | "levelup"
  | "shop"
  | "chest"
  | "shrine"
  | "map"
  | "codex"
  | "settings"
  | "gameover"
  | "victory"
  | "credits";

export type ClassId =
  | "ashguard"
  | "cinderbow"
  | "pyrelock"
  | "nightveil"
  | "dawnwarden"
  | "gravekin"
  | "stormcall"
  | "ironfist";

export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic";

export type ItemSlot =
  | "weapon"
  | "armor"
  | "helm"
  | "boots"
  | "ring"
  | "amulet"
  | "relic"
  | "consumable"
  | "rune";

export type RoomKind =
  | "start"
  | "combat"
  | "elite"
  | "treasure"
  | "shop"
  | "shrine"
  | "rest"
  | "boss";

export type EnemyBehavior =
  | "seek"
  | "shoot"
  | "explode"
  | "circle"
  | "dash"
  | "split"
  | "summon"
  | "kite"
  | "tank"
  | "fly"
  | "heal";

export type StatKey =
  | "maxHp"
  | "armor"
  | "speed"
  | "damage"
  | "fireRate"
  | "projSpeed"
  | "projCount"
  | "pierce"
  | "spread"
  | "area"
  | "critChance"
  | "critDamage"
  | "lifesteal"
  | "pickupRange"
  | "dashCharges"
  | "cdr"
  | "luck"
  | "xpGain"
  | "goldGain"
  | "thorns"
  | "regen"
  | "shield";

export type Stats = Record<StatKey, number>;

export type ItemDef = {
  id: string;
  name: string;
  slot: ItemSlot;
  rarity: Rarity;
  iconSheet: "weapons" | "armor" | "relics" | "relics2";
  iconIndex: number;
  stats: Partial<Stats>;
  tags: string[];
  desc: string;
  unique?: boolean;
};

export type EnemyDef = {
  id: string;
  name: string;
  pack: "pack1" | "pack2" | "pack3" | "bosses";
  sprite: number;
  hp: number;
  speed: number;
  damage: number;
  radius: number;
  xp: number;
  gold: number;
  behavior: EnemyBehavior;
  biomes: string[];
  elite?: boolean;
  boss?: boolean;
  shootRange?: number;
  shootCd?: number;
  color?: string;
};

export type ClassDef = {
  id: ClassId;
  name: string;
  title: string;
  blurb: string;
  role: string;
  unlock: number;
  color: string;
  stats: Stats;
  weapon: string;
  skill: string;
  skillDesc: string;
  proj: "slash" | "arrow" | "fireball" | "lightning" | "bone";
  melee: boolean;
};

export type UpgradeDef = {
  id: string;
  name: string;
  desc: string;
  rarity: Rarity;
  stats: Partial<Stats>;
  tags: string[];
};

export type TalentDef = {
  id: string;
  name: string;
  desc: string;
  max: number;
  cost: number;
  stats: Partial<Stats>;
};

export type AchievementDef = {
  id: string;
  name: string;
  desc: string;
  ashes: number;
};

export type BiomeDef = {
  id: string;
  name: string;
  tile: string;
  tint: string;
  ambient: string;
  boss: string;
};

export type HeatMod = {
  id: string;
  name: string;
  desc: string;
  rank: number;
};

export const STAT_ZERO: Stats = {
  maxHp: 0,
  armor: 0,
  speed: 0,
  damage: 0,
  fireRate: 0,
  projSpeed: 0,
  projCount: 0,
  pierce: 0,
  spread: 0,
  area: 0,
  critChance: 0,
  critDamage: 0,
  lifesteal: 0,
  pickupRange: 0,
  dashCharges: 0,
  cdr: 0,
  luck: 0,
  xpGain: 0,
  goldGain: 0,
  thorns: 0,
  regen: 0,
  shield: 0,
};

export function addStats(a: Stats, b: Partial<Stats>): Stats {
  const o = { ...a };
  for (const k of Object.keys(b) as StatKey[]) {
    o[k] = (o[k] ?? 0) + (b[k] ?? 0);
  }
  return o;
}

export const RARITY_COLOR: Record<Rarity, string> = {
  common: "#b8b2a8",
  uncommon: "#7d9a6a",
  rare: "#6a8caa",
  epic: "#9a7ab0",
  legendary: "#c4a15a",
  mythic: "#c45c3a",
};

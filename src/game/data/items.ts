import type { ItemDef, ItemSlot, Rarity, Stats } from "../types";

type Stem = {
  stem: string;
  slot: ItemSlot;
  sheet: ItemDef["iconSheet"];
  icon: number;
  tags: string[];
  stats: Partial<Stats>;
  desc: string;
};

const STEMS: Stem[] = [
  { stem: "Ashbrand", slot: "weapon", sheet: "weapons", icon: 0, tags: ["slash", "fire"], stats: { damage: 6 }, desc: "A kiln-forged greatsword." },
  { stem: "Cinderbow", slot: "weapon", sheet: "weapons", icon: 1, tags: ["bow"], stats: { damage: 5, pierce: 1 }, desc: "Living ember longbow." },
  { stem: "Pyrestaff", slot: "weapon", sheet: "weapons", icon: 2, tags: ["fire", "staff"], stats: { damage: 7, area: 0.1 }, desc: "Staff of the first flame." },
  { stem: "Nightfangs", slot: "weapon", sheet: "weapons", icon: 3, tags: ["slash", "crit"], stats: { critChance: 0.06, damage: 4 }, desc: "Twin daggers of the veil." },
  { stem: "Dawnmace", slot: "weapon", sheet: "weapons", icon: 4, tags: ["holy"], stats: { damage: 5, regen: 0.4 }, desc: "Sunburst mace." },
  { stem: "Bonescepter", slot: "weapon", sheet: "weapons", icon: 5, tags: ["bone"], stats: { damage: 4, luck: 3 }, desc: "A named femur, still loyal." },
  { stem: "Stormrod", slot: "weapon", sheet: "weapons", icon: 6, tags: ["lightning"], stats: { pierce: 1, damage: 5 }, desc: "Copper lightning rod." },
  { stem: "Ironwraps", slot: "weapon", sheet: "weapons", icon: 7, tags: ["fist"], stats: { damage: 6, lifesteal: 0.02 }, desc: "Wrapped fists." },
  { stem: "Spear of Kilns", slot: "weapon", sheet: "weapons", icon: 8, tags: ["pierce"], stats: { pierce: 2, damage: 5 }, desc: "Long kiln spear." },
  { stem: "Ashcross", slot: "weapon", sheet: "weapons", icon: 9, tags: ["bow"], stats: { fireRate: 0.3, damage: 4 }, desc: "Compact crossbow." },
  { stem: "Graveaxe", slot: "weapon", sheet: "weapons", icon: 10, tags: ["slash"], stats: { damage: 8, fireRate: -0.2 }, desc: "Heavy burial axe." },
  { stem: "Cinderwand", slot: "weapon", sheet: "weapons", icon: 11, tags: ["fire"], stats: { projSpeed: 40, damage: 4 }, desc: "A wand of banked coals." },
  { stem: "Chainflail", slot: "weapon", sheet: "weapons", icon: 12, tags: ["area"], stats: { area: 0.15, damage: 5 }, desc: "Spinning iron flail." },
  { stem: "Reapscythe", slot: "weapon", sheet: "weapons", icon: 13, tags: ["slash"], stats: { lifesteal: 0.04, damage: 6 }, desc: "Harvests more than wheat." },
  { stem: "Anvilhammer", slot: "weapon", sheet: "weapons", icon: 14, tags: ["blunt"], stats: { damage: 9, speed: -8 }, desc: "Foundry sledge." },
  { stem: "Boltlock", slot: "weapon", sheet: "weapons", icon: 15, tags: ["pierce"], stats: { projSpeed: 80, damage: 5 }, desc: "Pistol-crossbow." },
  { stem: "Ashhelm", slot: "helm", sheet: "armor", icon: 0, tags: ["armor"], stats: { armor: 3, maxHp: 8 }, desc: "Closed kiln helm." },
  { stem: "Graveplate", slot: "armor", sheet: "armor", icon: 1, tags: ["armor"], stats: { armor: 6, maxHp: 18 }, desc: "Heavy burial plate." },
  { stem: "Cindercloak", slot: "armor", sheet: "armor", icon: 2, tags: ["evasion"], stats: { speed: 12, armor: 2 }, desc: "Scorched travel cloak." },
  { stem: "Vaultboots", slot: "boots", sheet: "armor", icon: 3, tags: ["move"], stats: { speed: 18, dashCharges: 0.2 }, desc: "Quiet stone boots." },
  { stem: "Emberband", slot: "ring", sheet: "armor", icon: 4, tags: ["fire"], stats: { damage: 3, critChance: 0.04 }, desc: "Warm gold ring." },
  { stem: "Lanternheart", slot: "amulet", sheet: "armor", icon: 5, tags: ["holy"], stats: { regen: 0.6, shield: 8 }, desc: "Amulet of last light." },
  { stem: "Bulwark", slot: "armor", sheet: "armor", icon: 6, tags: ["block"], stats: { armor: 8, thorns: 3 }, desc: "Tower of the kiln." },
  { stem: "Ashsash", slot: "armor", sheet: "armor", icon: 7, tags: ["utility"], stats: { cdr: 0.06, luck: 4 }, desc: "Belt of spare knives." },
  { stem: "Kilngloves", slot: "armor", sheet: "armor", icon: 8, tags: ["grip"], stats: { fireRate: 0.25, damage: 2 }, desc: "Heat-proof gloves." },
  { stem: "Nightcowl", slot: "helm", sheet: "armor", icon: 9, tags: ["crit"], stats: { critChance: 0.08, speed: 6 }, desc: "Assassin's hood." },
  { stem: "Pauldrons of Duty", slot: "armor", sheet: "armor", icon: 10, tags: ["armor"], stats: { armor: 4, maxHp: 12 }, desc: "Warden's shoulders." },
  { stem: "Greaves of March", slot: "boots", sheet: "armor", icon: 11, tags: ["move"], stats: { speed: 10, armor: 2 }, desc: "Long-march greaves." },
  { stem: "Ashcrown", slot: "helm", sheet: "armor", icon: 12, tags: ["royal"], stats: { luck: 8, xpGain: 0.1 }, desc: "A cracked lesser crown." },
  { stem: "Waylantern", slot: "relic", sheet: "armor", icon: 13, tags: ["light"], stats: { pickupRange: 30, luck: 3 }, desc: "Lights pickups in the dark." },
  { stem: "Bone Mask", slot: "helm", sheet: "armor", icon: 14, tags: ["bone"], stats: { lifesteal: 0.03, damage: 3 }, desc: "Face of a forgotten name." },
  { stem: "Reliquary Satchel", slot: "relic", sheet: "armor", icon: 15, tags: ["gold"], stats: { goldGain: 0.15, luck: 5 }, desc: "Coins find their way in." },
  { stem: "Heart of the First Kiln", slot: "relic", sheet: "relics", icon: 4, tags: ["unique", "fire"], stats: { damage: 8, area: 0.2 }, desc: "The kiln still beats." },
  { stem: "Cracked Skull Charm", slot: "relic", sheet: "relics", icon: 5, tags: ["unique"], stats: { maxHp: 25, thorns: 5 }, desc: "Remembers every blow." },
  { stem: "Rune of Opening", slot: "rune", sheet: "relics", icon: 6, tags: ["rune"], stats: { luck: 6, goldGain: 0.1 }, desc: "Doors prefer you." },
  { stem: "Ember Gem", slot: "rune", sheet: "relics", icon: 7, tags: ["fire"], stats: { damage: 4, critDamage: 0.2 }, desc: "Cut from cooled slag." },
  { stem: "Frost Crystal", slot: "rune", sheet: "relics", icon: 8, tags: ["ice"], stats: { armor: 3, projSpeed: 40 }, desc: "Slows what it touches." },
  { stem: "Void Orb", slot: "relic", sheet: "relics", icon: 9, tags: ["void"], stats: { pierce: 1, area: 0.12 }, desc: "Looks back." },
  { stem: "Nameless Scroll", slot: "consumable", sheet: "relics", icon: 10, tags: ["xp"], stats: { xpGain: 0.2 }, desc: "A page of someone else's life." },
  { stem: "Skeleton Key", slot: "relic", sheet: "relics", icon: 11, tags: ["keys"], stats: { luck: 10 }, desc: "Opens more than locks." },
  { stem: "Blessing Chalice", slot: "relic", sheet: "relics", icon: 13, tags: ["holy"], stats: { regen: 1.2, shield: 15 }, desc: "Never empty for the worthy." },
  { stem: "Cursed Idol", slot: "relic", sheet: "relics", icon: 14, tags: ["curse"], stats: { damage: 10, maxHp: -15 }, desc: "Power with a price." },
  { stem: "Phoenix Feather", slot: "relic", sheet: "relics", icon: 15, tags: ["revive"], stats: { regen: 0.8, maxHp: 10 }, desc: "Almost a second life." },
  { stem: "Hourglass of Rooms", slot: "relic", sheet: "relics2", icon: 0, tags: ["time"], stats: { cdr: 0.1, fireRate: 0.2 }, desc: "Waves hesitate." },
  { stem: "Crypt Compass", slot: "relic", sheet: "relics2", icon: 1, tags: ["map"], stats: { luck: 7, pickupRange: 20 }, desc: "Points to what you need." },
  { stem: "Locked Grimoire", slot: "relic", sheet: "relics2", icon: 2, tags: ["magic"], stats: { damage: 5, projCount: 1 }, desc: "Still teaching, still shut." },
  { stem: "Wolf Fang", slot: "relic", sheet: "relics2", icon: 3, tags: ["crit"], stats: { critChance: 0.1, speed: 8 }, desc: "Bite of the pack." },
  { stem: "Moth Wing", slot: "relic", sheet: "relics2", icon: 4, tags: ["fly"], stats: { speed: 16, dashCharges: 0.3 }, desc: "Dust of the lantern." },
  { stem: "Iron Nail", slot: "rune", sheet: "relics2", icon: 5, tags: ["pierce"], stats: { pierce: 1, damage: 3 }, desc: "Driven through a god once." },
  { stem: "Last Candle", slot: "relic", sheet: "relics2", icon: 6, tags: ["light"], stats: { regen: 0.5, shield: 10 }, desc: "Will not go out." },
  { stem: "Loaded Dice", slot: "relic", sheet: "relics2", icon: 7, tags: ["luck"], stats: { luck: 14, goldGain: 0.12 }, desc: "The crypts already cheated." },
  { stem: "Mirror Shard", slot: "relic", sheet: "relics2", icon: 8, tags: ["reflect"], stats: { thorns: 8, armor: 2 }, desc: "Shows the blow back." },
  { stem: "Warding Bell", slot: "relic", sheet: "relics2", icon: 9, tags: ["holy"], stats: { area: 0.1, shield: 12 }, desc: "Rings when death is near." },
  { stem: "Grave Chain", slot: "relic", sheet: "relics2", icon: 10, tags: ["control"], stats: { armor: 4, damage: 3 }, desc: "Binds what should stay down." },
  { stem: "Kiln Seed", slot: "relic", sheet: "relics2", icon: 11, tags: ["garden"], stats: { regen: 0.7, maxHp: 12 }, desc: "Grows in ash." },
  { stem: "Judgement Scale", slot: "relic", sheet: "relics2", icon: 12, tags: ["balance"], stats: { critDamage: 0.3, armor: 3 }, desc: "Weighs your restraint." },
  { stem: "War Horn", slot: "relic", sheet: "relics2", icon: 13, tags: ["war"], stats: { damage: 6, fireRate: 0.2 }, desc: "The host answers." },
  { stem: "Tear Gem", slot: "amulet", sheet: "relics2", icon: 14, tags: ["holy"], stats: { lifesteal: 0.05, regen: 0.4 }, desc: "A saint's last grief." },
  { stem: "Black Rose", slot: "amulet", sheet: "relics2", icon: 15, tags: ["night"], stats: { critChance: 0.07, lifesteal: 0.03 }, desc: "Blooms only in vaults." },
  { stem: "Red Flask", slot: "consumable", sheet: "relics", icon: 0, tags: ["heal"], stats: { maxHp: 10 }, desc: "A swallow of life." },
  { stem: "Blue Vial", slot: "consumable", sheet: "relics", icon: 1, tags: ["mana"], stats: { cdr: 0.08, fireRate: 0.15 }, desc: "Cools the mind." },
  { stem: "Green Elixir", slot: "consumable", sheet: "relics", icon: 2, tags: ["body"], stats: { regen: 1, speed: 8 }, desc: "Bitter, effective." },
  { stem: "Coin Purse", slot: "relic", sheet: "relics", icon: 3, tags: ["gold"], stats: { goldGain: 0.2 }, desc: "Never quite empty." },
  { stem: "Quiet Blade", slot: "weapon", sheet: "weapons", icon: 3, tags: ["crit"], stats: { critChance: 0.09, damage: 4 }, desc: "Makes no sound leaving." },
  { stem: "Saltbrand", slot: "weapon", sheet: "weapons", icon: 0, tags: ["holy"], stats: { damage: 5, thorns: 2 }, desc: "Wards the drowned." },
  { stem: "Tidehook", slot: "weapon", sheet: "weapons", icon: 8, tags: ["tide"], stats: { pickupRange: 25, damage: 5 }, desc: "Pulls more than fish." },
  { stem: "Slagaxe", slot: "weapon", sheet: "weapons", icon: 10, tags: ["fire"], stats: { damage: 7, area: 0.08 }, desc: "Still warm from the pour." },
  { stem: "Frostbit", slot: "weapon", sheet: "weapons", icon: 11, tags: ["ice"], stats: { projSpeed: 30, damage: 5 }, desc: "A wand of hoarfrost." },
  { stem: "Voidneedle", slot: "weapon", sheet: "weapons", icon: 15, tags: ["void"], stats: { pierce: 2, damage: 4 }, desc: "Ignores what is solid." },
  { stem: "Garden Thorn", slot: "weapon", sheet: "weapons", icon: 8, tags: ["garden"], stats: { thorns: 4, damage: 4 }, desc: "Grows after every kill." },
  { stem: "Crownspike", slot: "weapon", sheet: "weapons", icon: 0, tags: ["royal"], stats: { damage: 8, luck: 4 }, desc: "A shard of the ash crown." },
  { stem: "Monk's Wrap", slot: "weapon", sheet: "weapons", icon: 7, tags: ["fist"], stats: { fireRate: 0.35, damage: 3 }, desc: "Simple, endless." },
  { stem: "Choir Bell", slot: "weapon", sheet: "weapons", icon: 4, tags: ["holy"], stats: { area: 0.18, damage: 4 }, desc: "Rings through bone." },
  { stem: "Ratcatcher", slot: "weapon", sheet: "weapons", icon: 9, tags: ["utility"], stats: { pickupRange: 40, damage: 3 }, desc: "Never misses vermin." },
  { stem: "Long Vigil", slot: "weapon", sheet: "weapons", icon: 1, tags: ["bow"], stats: { pierce: 2, damage: 5 }, desc: "The night watch bow." },
  { stem: "Sootmail", slot: "armor", sheet: "armor", icon: 1, tags: ["armor"], stats: { armor: 5, maxHp: 14 }, desc: "Mail blackened by kilns." },
  { stem: "Frostmantle", slot: "armor", sheet: "armor", icon: 2, tags: ["ice"], stats: { armor: 3, speed: 8 }, desc: "Holds the vault's cold." },
  { stem: "Tideplate", slot: "armor", sheet: "armor", icon: 1, tags: ["tide"], stats: { maxHp: 22, regen: 0.3 }, desc: "Barnacled and loyal." },
  { stem: "Voidweave", slot: "armor", sheet: "armor", icon: 2, tags: ["void"], stats: { dashCharges: 0.4, armor: 2 }, desc: "Cloth that isn't quite there." },
  { stem: "Rosehelm", slot: "helm", sheet: "armor", icon: 0, tags: ["garden"], stats: { luck: 5, armor: 2 }, desc: "Thorns for a visor." },
  { stem: "Foundry Visor", slot: "helm", sheet: "armor", icon: 0, tags: ["fire"], stats: { armor: 4, damage: 2 }, desc: "Sees heat as color." },
  { stem: "Catacomb Boots", slot: "boots", sheet: "armor", icon: 3, tags: ["bone"], stats: { speed: 14, armor: 1 }, desc: "Know every step of the dead." },
  { stem: "Ring of Names", slot: "ring", sheet: "armor", icon: 4, tags: ["summon"], stats: { luck: 6, xpGain: 0.08 }, desc: "Remembers the fallen." },
  { stem: "Ring of Hunger", slot: "ring", sheet: "armor", icon: 4, tags: ["life"], stats: { lifesteal: 0.06, damage: 2 }, desc: "Feeds when you do." },
  { stem: "Amulet of March", slot: "amulet", sheet: "armor", icon: 5, tags: ["move"], stats: { speed: 10, maxHp: 8 }, desc: "The road continues." },
  { stem: "Amulet of Silence", slot: "amulet", sheet: "armor", icon: 5, tags: ["night"], stats: { critChance: 0.05, cdr: 0.05 }, desc: "Quiets the crypt." },
  { stem: "Warden's Oath", slot: "relic", sheet: "relics", icon: 4, tags: ["unique"], stats: { armor: 6, regen: 0.6 }, desc: "You will not leave them." },
  { stem: "First Spark", slot: "relic", sheet: "relics", icon: 7, tags: ["unique", "fire"], stats: { area: 0.25, damage: 5 }, desc: "The kiln's childhood." },
  { stem: "Last Watch", slot: "relic", sheet: "relics2", icon: 6, tags: ["unique"], stats: { shield: 20, regen: 0.5 }, desc: "Someone kept it burning." },
  { stem: "Hollow Crown", slot: "helm", sheet: "armor", icon: 12, tags: ["unique", "royal"], stats: { luck: 12, damage: 6, maxHp: -8 }, desc: "Fits no living brow well." },
  { stem: "Book of Rooms", slot: "relic", sheet: "relics2", icon: 2, tags: ["unique"], stats: { xpGain: 0.15, luck: 8 }, desc: "The dungeon, annotated." },
  { stem: "Mercy", slot: "weapon", sheet: "weapons", icon: 4, tags: ["unique", "holy"], stats: { damage: 6, regen: 0.8, lifesteal: 0.03 }, desc: "A mace that heals what it does not finish." },
  { stem: "Hunger", slot: "weapon", sheet: "weapons", icon: 13, tags: ["unique"], stats: { lifesteal: 0.08, damage: 7 }, desc: "A scythe that will not rest." },
  { stem: "The Quiet Law", slot: "weapon", sheet: "weapons", icon: 0, tags: ["unique"], stats: { damage: 10, fireRate: -0.3, critDamage: 0.4 }, desc: "One cut is enough." },
];

const VARIANTS: { id: string; rarity: Rarity; prefix: string; suffix: string; mult: number; extra: Partial<Stats> }[] = [
  { id: "plain", rarity: "common", prefix: "", suffix: "", mult: 1, extra: {} },
  { id: "keen", rarity: "uncommon", prefix: "Keen ", suffix: "", mult: 1.18, extra: { critChance: 0.03 } },
  { id: "cinder", rarity: "rare", prefix: "", suffix: " of Cinders", mult: 1.32, extra: { damage: 2 } },
  { id: "elder", rarity: "epic", prefix: "Elder ", suffix: "", mult: 1.5, extra: { luck: 3 } },
  { id: "last", rarity: "legendary", prefix: "", suffix: ", Last Light", mult: 1.75, extra: { area: 0.08, regen: 0.2 } },
  { id: "myth", rarity: "mythic", prefix: "Mythic ", suffix: "", mult: 2.05, extra: { damage: 4, luck: 5 } },
];

function scaleStats(s: Partial<Stats>, m: number): Partial<Stats> {
  const o: Partial<Stats> = {};
  for (const [k, v] of Object.entries(s)) {
    if (typeof v === "number") {
      const scaled = Math.abs(v) < 1 ? Math.round(v * m * 100) / 100 : Math.round(v * m);
      (o as Record<string, number>)[k] = scaled;
    }
  }
  return o;
}

export function buildItemCatalog(): ItemDef[] {
  const items: ItemDef[] = [];
  const seen = new Set<string>();
  let n = 0;
  for (const stem of STEMS) {
    for (const v of VARIANTS) {
      const name = `${v.prefix}${stem.stem}${v.suffix}`;
      if (seen.has(name)) continue;
      seen.add(name);
      const stats = { ...scaleStats(stem.stats, v.mult), ...v.extra };
      items.push({
        id: `it-${n++}`,
        name,
        slot: stem.slot,
        rarity: v.rarity,
        iconSheet: stem.sheet,
        iconIndex: stem.icon,
        stats,
        tags: stem.tags,
        desc: stem.desc,
        unique: stem.tags.includes("unique") && v.id === "plain",
      });
    }
  }
  return items;
}

export const ITEMS = buildItemCatalog();
export const ITEM_BY_ID = Object.fromEntries(ITEMS.map((i) => [i.id, i]));

if (ITEMS.length < 500) {
  throw new Error(`Need 500 items, got ${ITEMS.length}`);
}

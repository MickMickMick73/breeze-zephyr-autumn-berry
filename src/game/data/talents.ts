import type { TalentDef, AchievementDef } from "../types";

export const TALENTS: TalentDef[] = [
  { id: "iron-root", name: "Iron Root", desc: "+8 max health per rank.", max: 8, cost: 40, stats: { maxHp: 8 } },
  { id: "kiln-edge", name: "Kiln Edge", desc: "+2 damage per rank.", max: 8, cost: 50, stats: { damage: 2 } },
  { id: "quick-step", name: "Quick Step", desc: "+6 speed per rank.", max: 6, cost: 45, stats: { speed: 6 } },
  { id: "thick-hide", name: "Thick Hide", desc: "+2 armor per rank.", max: 6, cost: 50, stats: { armor: 2 } },
  { id: "blood-tax", name: "Blood Tax", desc: "+1% lifesteal per rank.", max: 5, cost: 70, stats: { lifesteal: 0.01 } },
  { id: "open-hand", name: "Open Hand", desc: "+4 luck per rank.", max: 5, cost: 55, stats: { luck: 4 } },
  { id: "scholar", name: "Deep Study", desc: "+5% XP per rank.", max: 5, cost: 40, stats: { xpGain: 0.05 } },
  { id: "merchant", name: "Ledger", desc: "+6% gold per rank.", max: 5, cost: 40, stats: { goldGain: 0.06 } },
  { id: "second-wind", name: "Second Wind", desc: "+0.3 regen per rank.", max: 6, cost: 45, stats: { regen: 0.3 } },
  { id: "long-arm", name: "Long Arm", desc: "+12 pickup range per rank.", max: 5, cost: 30, stats: { pickupRange: 12 } },
  { id: "focus", name: "Quiet Mind", desc: "+3% cooldown reduction per rank.", max: 5, cost: 60, stats: { cdr: 0.03 } },
  { id: "keen", name: "Keen", desc: "+2% crit chance per rank.", max: 5, cost: 65, stats: { critChance: 0.02 } },
];

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "first-blood", name: "First Blood", desc: "Clear any combat room.", ashes: 15 },
  { id: "first-boss", name: "Kilnfallen", desc: "Defeat a floor boss.", ashes: 40 },
  { id: "crown", name: "Crownbreaker", desc: "Defeat the Ashen Monarch.", ashes: 120 },
  { id: "stash", name: "Hoarder", desc: "Hold 20 items in one run.", ashes: 25 },
  { id: "rich", name: "Deep Pockets", desc: "Carry 400 gold at once.", ashes: 25 },
  { id: "level10", name: "Tempered", desc: "Reach level 10 in a run.", ashes: 20 },
  { id: "level20", name: "Hardened", desc: "Reach level 20 in a run.", ashes: 40 },
  { id: "heat3", name: "Pact of Three", desc: "Win a run at Heat 3+.", ashes: 80 },
  { id: "heat8", name: "Scorched", desc: "Win a run at Heat 8+.", ashes: 150 },
  { id: "all-class", name: "Eight Names", desc: "Win once with every class.", ashes: 200 },
  { id: "codex50", name: "Bestiary", desc: "Discover 50 enemies.", ashes: 50 },
  { id: "loot100", name: "Reliquary", desc: "Collect 100 unique items across runs.", ashes: 50 },
  { id: "dash-kill", name: "Through Them", desc: "Kill 50 foes with a dash.", ashes: 20 },
  { id: "no-hit-boss", name: "Untouched", desc: "Defeat a boss without taking a hit.", ashes: 60 },
  { id: "endless10", name: "Unending", desc: "Survive 10 endless floors.", ashes: 80 },
  { id: "shopper", name: "Patron", desc: "Buy 25 shop items.", ashes: 20 },
  { id: "shrine", name: "Superstitious", desc: "Use 15 shrines.", ashes: 15 },
  { id: "elite", name: "Champion", desc: "Slay 20 elites.", ashes: 30 },
  { id: "daily", name: "Rite of the Day", desc: "Complete a daily seed.", ashes: 40 },
  { id: "deathless", name: "Unbroken", desc: "Clear a floor without dropping below 30% HP.", ashes: 35 },
];

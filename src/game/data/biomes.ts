import type { BiomeDef, HeatMod } from "../types";

export const BIOMES: BiomeDef[] = [
  { id: "crypt", name: "Ember Crypts", tile: "crypt", tint: "#3a2a22", ambient: "#1a1410", boss: "ash-titan" },
  { id: "bone", name: "Bone Catacombs", tile: "bone", tint: "#3a3834", ambient: "#181614", boss: "bone-queen" },
  { id: "garden", name: "Ash Gardens", tile: "garden", tint: "#2a3224", ambient: "#121610", boss: "thorn-dryad" },
  { id: "frost", name: "Frozen Vault", tile: "frost", tint: "#24303a", ambient: "#101418", boss: "ice-colossus" },
  { id: "tide", name: "Sunken Reliquary", tile: "tide", tint: "#1c3032", ambient: "#0e1618", boss: "drowned-priest" },
  { id: "foundry", name: "Iron Foundry", tile: "foundry", tint: "#3a2820", ambient: "#16110e", boss: "furnace-golem" },
  { id: "void", name: "Void Sanctum", tile: "void", tint: "#1c1828", ambient: "#0c0a12", boss: "eye-cluster" },
  { id: "crown", name: "Crown Chamber", tile: "crypt", tint: "#402820", ambient: "#140e0c", boss: "ash-monarch" },
];

export const HEAT: HeatMod[] = [
  { id: "harder", name: "Hardened Host", desc: "Enemies have +12% health per rank.", rank: 1 },
  { id: "faster", name: "Hunted", desc: "Enemies move +8% faster per rank.", rank: 1 },
  { id: "swarm", name: "Swarming", desc: "+1 extra foe per wave per rank.", rank: 1 },
  { id: "frail", name: "Glass Pact", desc: "You have 10% less max health per rank.", rank: 1 },
  { id: "scarcity", name: "Scarcity", desc: "Gold and healing shrines are rarer.", rank: 1 },
  { id: "elites", name: "Champions", desc: "Elite rooms appear more often.", rank: 1 },
  { id: "mending", name: "No Mending", desc: "Natural regen is halved.", rank: 1 },
  { id: "deadline", name: "Deadline", desc: "Waves arrive 15% sooner.", rank: 1 },
];

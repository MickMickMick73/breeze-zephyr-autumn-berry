import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DoTtGEQL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TALENTS = [
	{
		id: "iron-root",
		name: "Iron Root",
		desc: "+8 max health per rank.",
		max: 8,
		cost: 40,
		stats: { maxHp: 8 }
	},
	{
		id: "kiln-edge",
		name: "Kiln Edge",
		desc: "+2 damage per rank.",
		max: 8,
		cost: 50,
		stats: { damage: 2 }
	},
	{
		id: "quick-step",
		name: "Quick Step",
		desc: "+6 speed per rank.",
		max: 6,
		cost: 45,
		stats: { speed: 6 }
	},
	{
		id: "thick-hide",
		name: "Thick Hide",
		desc: "+2 armor per rank.",
		max: 6,
		cost: 50,
		stats: { armor: 2 }
	},
	{
		id: "blood-tax",
		name: "Blood Tax",
		desc: "+1% lifesteal per rank.",
		max: 5,
		cost: 70,
		stats: { lifesteal: .01 }
	},
	{
		id: "open-hand",
		name: "Open Hand",
		desc: "+4 luck per rank.",
		max: 5,
		cost: 55,
		stats: { luck: 4 }
	},
	{
		id: "scholar",
		name: "Deep Study",
		desc: "+5% XP per rank.",
		max: 5,
		cost: 40,
		stats: { xpGain: .05 }
	},
	{
		id: "merchant",
		name: "Ledger",
		desc: "+6% gold per rank.",
		max: 5,
		cost: 40,
		stats: { goldGain: .06 }
	},
	{
		id: "second-wind",
		name: "Second Wind",
		desc: "+0.3 regen per rank.",
		max: 6,
		cost: 45,
		stats: { regen: .3 }
	},
	{
		id: "long-arm",
		name: "Long Arm",
		desc: "+12 pickup range per rank.",
		max: 5,
		cost: 30,
		stats: { pickupRange: 12 }
	},
	{
		id: "focus",
		name: "Quiet Mind",
		desc: "+3% cooldown reduction per rank.",
		max: 5,
		cost: 60,
		stats: { cdr: .03 }
	},
	{
		id: "keen",
		name: "Keen",
		desc: "+2% crit chance per rank.",
		max: 5,
		cost: 65,
		stats: { critChance: .02 }
	}
];
var ACHIEVEMENTS = [
	{
		id: "first-blood",
		name: "First Blood",
		desc: "Clear any combat room.",
		ashes: 15
	},
	{
		id: "first-boss",
		name: "Kilnfallen",
		desc: "Defeat a floor boss.",
		ashes: 40
	},
	{
		id: "crown",
		name: "Crownbreaker",
		desc: "Defeat the Ashen Monarch.",
		ashes: 120
	},
	{
		id: "stash",
		name: "Hoarder",
		desc: "Hold 20 items in one run.",
		ashes: 25
	},
	{
		id: "rich",
		name: "Deep Pockets",
		desc: "Carry 400 gold at once.",
		ashes: 25
	},
	{
		id: "level10",
		name: "Tempered",
		desc: "Reach level 10 in a run.",
		ashes: 20
	},
	{
		id: "level20",
		name: "Hardened",
		desc: "Reach level 20 in a run.",
		ashes: 40
	},
	{
		id: "heat3",
		name: "Pact of Three",
		desc: "Win a run at Heat 3+.",
		ashes: 80
	},
	{
		id: "heat8",
		name: "Scorched",
		desc: "Win a run at Heat 8+.",
		ashes: 150
	},
	{
		id: "all-class",
		name: "Eight Names",
		desc: "Win once with every class.",
		ashes: 200
	},
	{
		id: "codex50",
		name: "Bestiary",
		desc: "Discover 50 enemies.",
		ashes: 50
	},
	{
		id: "loot100",
		name: "Reliquary",
		desc: "Collect 100 unique items across runs.",
		ashes: 50
	},
	{
		id: "dash-kill",
		name: "Through Them",
		desc: "Kill 50 foes with a dash.",
		ashes: 20
	},
	{
		id: "no-hit-boss",
		name: "Untouched",
		desc: "Defeat a boss without taking a hit.",
		ashes: 60
	},
	{
		id: "endless10",
		name: "Unending",
		desc: "Survive 10 endless floors.",
		ashes: 80
	},
	{
		id: "shopper",
		name: "Patron",
		desc: "Buy 25 shop items.",
		ashes: 20
	},
	{
		id: "shrine",
		name: "Superstitious",
		desc: "Use 15 shrines.",
		ashes: 15
	},
	{
		id: "elite",
		name: "Champion",
		desc: "Slay 20 elites.",
		ashes: 30
	},
	{
		id: "daily",
		name: "Rite of the Day",
		desc: "Complete a daily seed.",
		ashes: 40
	},
	{
		id: "deathless",
		name: "Unbroken",
		desc: "Clear a floor without dropping below 30% HP.",
		ashes: 35
	}
];
var BIOMES = [
	{
		id: "crypt",
		name: "Ember Crypts",
		tile: "crypt",
		tint: "#3a2a22",
		ambient: "#1a1410",
		boss: "ash-titan"
	},
	{
		id: "bone",
		name: "Bone Catacombs",
		tile: "bone",
		tint: "#3a3834",
		ambient: "#181614",
		boss: "bone-queen"
	},
	{
		id: "garden",
		name: "Ash Gardens",
		tile: "garden",
		tint: "#2a3224",
		ambient: "#121610",
		boss: "thorn-dryad"
	},
	{
		id: "frost",
		name: "Frozen Vault",
		tile: "frost",
		tint: "#24303a",
		ambient: "#101418",
		boss: "ice-colossus"
	},
	{
		id: "tide",
		name: "Sunken Reliquary",
		tile: "tide",
		tint: "#1c3032",
		ambient: "#0e1618",
		boss: "drowned-priest"
	},
	{
		id: "foundry",
		name: "Iron Foundry",
		tile: "foundry",
		tint: "#3a2820",
		ambient: "#16110e",
		boss: "furnace-golem"
	},
	{
		id: "void",
		name: "Void Sanctum",
		tile: "void",
		tint: "#1c1828",
		ambient: "#0c0a12",
		boss: "eye-cluster"
	},
	{
		id: "crown",
		name: "Crown Chamber",
		tile: "crypt",
		tint: "#402820",
		ambient: "#140e0c",
		boss: "ash-monarch"
	}
];
var HEAT = [
	{
		id: "harder",
		name: "Hardened Host",
		desc: "Enemies have +12% health per rank.",
		rank: 1
	},
	{
		id: "faster",
		name: "Hunted",
		desc: "Enemies move +8% faster per rank.",
		rank: 1
	},
	{
		id: "swarm",
		name: "Swarming",
		desc: "+1 extra foe per wave per rank.",
		rank: 1
	},
	{
		id: "frail",
		name: "Glass Pact",
		desc: "You have 10% less max health per rank.",
		rank: 1
	},
	{
		id: "scarcity",
		name: "Scarcity",
		desc: "Gold and healing shrines are rarer.",
		rank: 1
	},
	{
		id: "elites",
		name: "Champions",
		desc: "Elite rooms appear more often.",
		rank: 1
	},
	{
		id: "mending",
		name: "No Mending",
		desc: "Natural regen is halved.",
		rank: 1
	},
	{
		id: "deadline",
		name: "Deadline",
		desc: "Waves arrive 15% sooner.",
		rank: 1
	}
];
var base = (over) => ({
	maxHp: 100,
	armor: 0,
	speed: 210,
	damage: 14,
	fireRate: 2.2,
	projSpeed: 520,
	projCount: 1,
	pierce: 0,
	spread: .08,
	area: 1,
	critChance: .08,
	critDamage: 1.6,
	lifesteal: 0,
	pickupRange: 70,
	dashCharges: 1,
	cdr: 0,
	luck: 0,
	xpGain: 1,
	goldGain: 1,
	thorns: 0,
	regen: .4,
	shield: 0,
	...over
});
var CLASSES = [
	{
		id: "ashguard",
		name: "Ashguard",
		title: "Warden of the Kiln",
		blurb: "Holds the line with a kiln-forged brand. Slow, implacable, built to outlast the wave.",
		role: "Guardian",
		unlock: 0,
		color: "#b8b2a8",
		stats: base({
			maxHp: 150,
			armor: 8,
			speed: 185,
			damage: 18,
			fireRate: 1.7,
			area: 1.2,
			thorns: 4
		}),
		weapon: "Kilnbrand",
		skill: "Bulwark",
		skillDesc: "Raise a shield that absorbs hits and taunts nearby foes for a short breath.",
		proj: "slash",
		melee: true
	},
	{
		id: "cinderbow",
		name: "Cinderbow",
		title: "Ashwind Archer",
		blurb: "Long shots of living ember. Keeps distance, punches through ranks.",
		role: "Marksman",
		unlock: 0,
		color: "#c45c3a",
		stats: base({
			maxHp: 90,
			speed: 230,
			damage: 16,
			fireRate: 2.6,
			projSpeed: 680,
			pierce: 1,
			critChance: .14
		}),
		weapon: "Cinder Longbow",
		skill: "Volley",
		skillDesc: "Loose a fan of piercing ember arrows.",
		proj: "arrow",
		melee: false
	},
	{
		id: "pyrelock",
		name: "Pyrelock",
		title: "First Flame",
		blurb: "Glass cannon. Wide fire, short life, beautiful ruin.",
		role: "Destroyer",
		unlock: 0,
		color: "#c45c3a",
		stats: base({
			maxHp: 75,
			speed: 200,
			damage: 22,
			fireRate: 1.6,
			area: 1.45,
			projSpeed: 420,
			spread: .14
		}),
		weapon: "Smolderstaff",
		skill: "Pyre",
		skillDesc: "Detonate a ring of fire around you.",
		proj: "fireball",
		melee: false
	},
	{
		id: "nightveil",
		name: "Nightveil",
		title: "Quiet Blade",
		blurb: "Dashes through gaps. Lives on crits and poison-quick cuts.",
		role: "Assassin",
		unlock: 120,
		color: "#8a8680",
		stats: base({
			maxHp: 85,
			speed: 255,
			damage: 13,
			fireRate: 3.4,
			critChance: .28,
			critDamage: 2.1,
			dashCharges: 2,
			lifesteal: .04
		}),
		weapon: "Twin Shivs",
		skill: "Umbral Step",
		skillDesc: "Dash twice as far and strike everything you pass.",
		proj: "slash",
		melee: true
	},
	{
		id: "dawnwarden",
		name: "Dawnwarden",
		title: "Lantern Saint",
		blurb: "Heals in the dark. A paladin of the last light still burning.",
		role: "Warden",
		unlock: 200,
		color: "#ece6dc",
		stats: base({
			maxHp: 125,
			armor: 5,
			damage: 12,
			fireRate: 2,
			regen: 2.2,
			shield: 20,
			area: 1.1
		}),
		weapon: "Sun-mace",
		skill: "Aegis",
		skillDesc: "Pulse a healing ward that also knocks foes back.",
		proj: "lightning",
		melee: false
	},
	{
		id: "gravekin",
		name: "Gravekin",
		title: "Keeper of Names",
		blurb: "Raises the fallen as brief allies. Slow, clever, never alone.",
		role: "Summoner",
		unlock: 320,
		color: "#7d9a6a",
		stats: base({
			maxHp: 95,
			speed: 195,
			damage: 11,
			fireRate: 2,
			projCount: 2,
			pierce: 1,
			luck: 8
		}),
		weapon: "Bone Scepter",
		skill: "Raise",
		skillDesc: "Call two ash-wights that fight for you.",
		proj: "bone",
		melee: false
	},
	{
		id: "stormcall",
		name: "Stormcall",
		title: "Vault Lightning",
		blurb: "Chain bolts leap between the packed. Built for the late swarm.",
		role: "Channeler",
		unlock: 480,
		color: "#6a8caa",
		stats: base({
			maxHp: 88,
			speed: 215,
			damage: 15,
			fireRate: 2.4,
			pierce: 3,
			projSpeed: 760,
			critChance: .12
		}),
		weapon: "Copper Rods",
		skill: "Tempest",
		skillDesc: "A storm disk that chains to nearby enemies.",
		proj: "lightning",
		melee: false
	},
	{
		id: "ironfist",
		name: "Ironfist",
		title: "Unbroken",
		blurb: "No weapon but the body. Rage grows as health falls.",
		role: "Berserker",
		unlock: 640,
		color: "#c45c3a",
		stats: base({
			maxHp: 140,
			armor: 3,
			speed: 220,
			damage: 20,
			fireRate: 2.8,
			area: 1.25,
			lifesteal: .06,
			thorns: 6
		}),
		weapon: "Iron Wraps",
		skill: "Break",
		skillDesc: "Slam the ground. Nearby foes are stunned and shredded.",
		proj: "slash",
		melee: true
	}
];
var CLASS_BY_ID = Object.fromEntries(CLASSES.map((c) => [c.id, c]));
var ENEMIES = [
	{
		id: "ash-rat",
		name: "Ash Rat",
		pack: "pack1",
		sprite: 0,
		hp: 18,
		speed: 95,
		damage: 6,
		radius: 12,
		xp: 4,
		gold: 1,
		behavior: "seek",
		biomes: ["crypt", "garden"]
	},
	{
		id: "bone-walker",
		name: "Bone Walker",
		pack: "pack1",
		sprite: 1,
		hp: 34,
		speed: 70,
		damage: 9,
		radius: 14,
		xp: 7,
		gold: 2,
		behavior: "seek",
		biomes: ["bone", "crypt"]
	},
	{
		id: "ember-imp",
		name: "Ember Imp",
		pack: "pack1",
		sprite: 2,
		hp: 22,
		speed: 110,
		damage: 7,
		radius: 12,
		xp: 6,
		gold: 2,
		behavior: "kite",
		biomes: ["crypt", "foundry"],
		shootRange: 240,
		shootCd: 1.4
	},
	{
		id: "crypt-bat",
		name: "Crypt Bat",
		pack: "pack1",
		sprite: 3,
		hp: 16,
		speed: 130,
		damage: 5,
		radius: 11,
		xp: 5,
		gold: 1,
		behavior: "fly",
		biomes: ["crypt", "void"]
	},
	{
		id: "wailing-shade",
		name: "Wailing Shade",
		pack: "pack1",
		sprite: 4,
		hp: 28,
		speed: 80,
		damage: 10,
		radius: 14,
		xp: 8,
		gold: 2,
		behavior: "circle",
		biomes: ["void", "bone"]
	},
	{
		id: "cultist",
		name: "Kiln Cultist",
		pack: "pack1",
		sprite: 5,
		hp: 40,
		speed: 85,
		damage: 11,
		radius: 14,
		xp: 10,
		gold: 3,
		behavior: "seek",
		biomes: ["crypt", "void"]
	},
	{
		id: "stone-golem",
		name: "Ash Golem",
		pack: "pack1",
		sprite: 6,
		hp: 90,
		speed: 45,
		damage: 16,
		radius: 18,
		xp: 16,
		gold: 5,
		behavior: "tank",
		biomes: ["crypt", "foundry"]
	},
	{
		id: "ochre-slime",
		name: "Ochre Slime",
		pack: "pack1",
		sprite: 7,
		hp: 30,
		speed: 55,
		damage: 8,
		radius: 15,
		xp: 7,
		gold: 2,
		behavior: "split",
		biomes: ["garden", "tide"]
	},
	{
		id: "crypt-spider",
		name: "Crypt Spider",
		pack: "pack1",
		sprite: 8,
		hp: 24,
		speed: 120,
		damage: 8,
		radius: 12,
		xp: 6,
		gold: 2,
		behavior: "dash",
		biomes: ["crypt", "bone"]
	},
	{
		id: "armored-wight",
		name: "Armored Wight",
		pack: "pack2",
		sprite: 0,
		hp: 70,
		speed: 60,
		damage: 14,
		radius: 16,
		xp: 14,
		gold: 4,
		behavior: "tank",
		biomes: ["bone", "foundry"]
	},
	{
		id: "bone-archer",
		name: "Bone Archer",
		pack: "pack2",
		sprite: 1,
		hp: 32,
		speed: 75,
		damage: 9,
		radius: 13,
		xp: 9,
		gold: 3,
		behavior: "shoot",
		biomes: ["bone", "frost"],
		shootRange: 320,
		shootCd: 1.6
	},
	{
		id: "bomber-beetle",
		name: "Bomber Beetle",
		pack: "pack2",
		sprite: 2,
		hp: 26,
		speed: 100,
		damage: 22,
		radius: 13,
		xp: 8,
		gold: 2,
		behavior: "explode",
		biomes: ["garden", "foundry"]
	},
	{
		id: "frost-wraith",
		name: "Frost Wraith",
		pack: "pack2",
		sprite: 3,
		hp: 38,
		speed: 90,
		damage: 12,
		radius: 14,
		xp: 11,
		gold: 3,
		behavior: "kite",
		biomes: ["frost", "void"],
		shootRange: 260,
		shootCd: 1.3
	},
	{
		id: "drowned-sailor",
		name: "Drowned Sailor",
		pack: "pack2",
		sprite: 4,
		hp: 48,
		speed: 65,
		damage: 13,
		radius: 15,
		xp: 10,
		gold: 3,
		behavior: "seek",
		biomes: ["tide"]
	},
	{
		id: "automaton",
		name: "Foundry Automaton",
		pack: "pack2",
		sprite: 5,
		hp: 80,
		speed: 55,
		damage: 15,
		radius: 16,
		xp: 15,
		gold: 5,
		behavior: "tank",
		biomes: ["foundry"]
	},
	{
		id: "void-acolyte",
		name: "Void Acolyte",
		pack: "pack2",
		sprite: 6,
		hp: 36,
		speed: 88,
		damage: 11,
		radius: 13,
		xp: 12,
		gold: 4,
		behavior: "shoot",
		biomes: ["void", "crown"],
		shootRange: 300,
		shootCd: 1.2
	},
	{
		id: "plague-toad",
		name: "Plague Toad",
		pack: "pack2",
		sprite: 7,
		hp: 44,
		speed: 70,
		damage: 12,
		radius: 15,
		xp: 9,
		gold: 3,
		behavior: "split",
		biomes: ["garden", "tide"]
	},
	{
		id: "horned-brute",
		name: "Horned Brute",
		pack: "pack2",
		sprite: 8,
		hp: 110,
		speed: 80,
		damage: 20,
		radius: 18,
		xp: 20,
		gold: 6,
		behavior: "dash",
		biomes: ["foundry", "crown"],
		elite: true
	},
	{
		id: "ash-moth",
		name: "Ash Moth",
		pack: "pack3",
		sprite: 0,
		hp: 14,
		speed: 140,
		damage: 5,
		radius: 11,
		xp: 4,
		gold: 1,
		behavior: "fly",
		biomes: ["garden", "crypt"]
	},
	{
		id: "bone-hound",
		name: "Bone Hound",
		pack: "pack3",
		sprite: 1,
		hp: 36,
		speed: 125,
		damage: 11,
		radius: 14,
		xp: 8,
		gold: 2,
		behavior: "dash",
		biomes: ["bone", "crypt"]
	},
	{
		id: "cinder-elemental",
		name: "Cinder Elemental",
		pack: "pack3",
		sprite: 2,
		hp: 50,
		speed: 75,
		damage: 14,
		radius: 15,
		xp: 13,
		gold: 4,
		behavior: "shoot",
		biomes: ["foundry", "crypt"],
		shootRange: 220,
		shootCd: 1.1
	},
	{
		id: "crypt-ghoul",
		name: "Crypt Ghoul",
		pack: "pack3",
		sprite: 3,
		hp: 42,
		speed: 95,
		damage: 12,
		radius: 14,
		xp: 9,
		gold: 2,
		behavior: "seek",
		biomes: ["crypt", "bone"]
	},
	{
		id: "lantern-wisp",
		name: "Lantern Wisp",
		pack: "pack3",
		sprite: 4,
		hp: 20,
		speed: 100,
		damage: 8,
		radius: 12,
		xp: 7,
		gold: 3,
		behavior: "heal",
		biomes: ["void", "crown"]
	},
	{
		id: "grave-knight",
		name: "Grave Knight",
		pack: "pack3",
		sprite: 5,
		hp: 95,
		speed: 70,
		damage: 18,
		radius: 16,
		xp: 18,
		gold: 6,
		behavior: "tank",
		biomes: ["bone", "crown"],
		elite: true
	},
	{
		id: "ice-scarab",
		name: "Ice Scarab",
		pack: "pack3",
		sprite: 6,
		hp: 28,
		speed: 105,
		damage: 9,
		radius: 12,
		xp: 7,
		gold: 2,
		behavior: "seek",
		biomes: ["frost"]
	},
	{
		id: "rust-scorpion",
		name: "Rust Scorpion",
		pack: "pack3",
		sprite: 7,
		hp: 46,
		speed: 90,
		damage: 15,
		radius: 14,
		xp: 11,
		gold: 3,
		behavior: "dash",
		biomes: ["foundry", "garden"]
	},
	{
		id: "crown-sentinel",
		name: "Crown Sentinel",
		pack: "pack3",
		sprite: 8,
		hp: 120,
		speed: 60,
		damage: 19,
		radius: 17,
		xp: 22,
		gold: 7,
		behavior: "shoot",
		biomes: ["crown"],
		elite: true,
		shootRange: 280,
		shootCd: 1.5
	},
	{
		id: "cinder-rat",
		name: "Cinder Rat",
		pack: "pack1",
		sprite: 0,
		hp: 22,
		speed: 110,
		damage: 7,
		radius: 12,
		xp: 5,
		gold: 1,
		behavior: "seek",
		biomes: ["foundry"],
		color: "#c45c3a"
	},
	{
		id: "frost-rat",
		name: "Frost Rat",
		pack: "pack1",
		sprite: 0,
		hp: 20,
		speed: 100,
		damage: 6,
		radius: 12,
		xp: 5,
		gold: 1,
		behavior: "seek",
		biomes: ["frost"],
		color: "#8ab4c8"
	},
	{
		id: "void-bat",
		name: "Void Bat",
		pack: "pack1",
		sprite: 3,
		hp: 18,
		speed: 145,
		damage: 7,
		radius: 11,
		xp: 6,
		gold: 2,
		behavior: "fly",
		biomes: ["void"],
		color: "#6a5a88"
	},
	{
		id: "tide-slime",
		name: "Tide Slime",
		pack: "pack1",
		sprite: 7,
		hp: 34,
		speed: 50,
		damage: 9,
		radius: 16,
		xp: 8,
		gold: 2,
		behavior: "split",
		biomes: ["tide"],
		color: "#3a8a88"
	},
	{
		id: "garden-spider",
		name: "Thorn Spider",
		pack: "pack1",
		sprite: 8,
		hp: 26,
		speed: 125,
		damage: 9,
		radius: 12,
		xp: 7,
		gold: 2,
		behavior: "dash",
		biomes: ["garden"],
		color: "#6a8a4a"
	},
	{
		id: "elite-imp",
		name: "Ember Herald",
		pack: "pack1",
		sprite: 2,
		hp: 80,
		speed: 120,
		damage: 14,
		radius: 15,
		xp: 22,
		gold: 8,
		behavior: "shoot",
		biomes: ["crypt", "foundry"],
		elite: true,
		shootRange: 280,
		shootCd: .9,
		color: "#e07040"
	},
	{
		id: "elite-shade",
		name: "Choir Shade",
		pack: "pack1",
		sprite: 4,
		hp: 70,
		speed: 95,
		damage: 16,
		radius: 16,
		xp: 20,
		gold: 7,
		behavior: "circle",
		biomes: ["void", "bone"],
		elite: true
	},
	{
		id: "elite-cultist",
		name: "High Cultist",
		pack: "pack1",
		sprite: 5,
		hp: 88,
		speed: 90,
		damage: 15,
		radius: 15,
		xp: 24,
		gold: 8,
		behavior: "summon",
		biomes: [
			"crypt",
			"void",
			"crown"
		],
		elite: true,
		shootRange: 260,
		shootCd: 2.2
	},
	{
		id: "elite-golem",
		name: "Kiln Colossus",
		pack: "pack1",
		sprite: 6,
		hp: 180,
		speed: 40,
		damage: 24,
		radius: 22,
		xp: 32,
		gold: 12,
		behavior: "tank",
		biomes: ["crypt", "foundry"],
		elite: true
	},
	{
		id: "elite-wight",
		name: "Shield Wight",
		pack: "pack2",
		sprite: 0,
		hp: 140,
		speed: 55,
		damage: 18,
		radius: 18,
		xp: 26,
		gold: 9,
		behavior: "tank",
		biomes: ["bone"],
		elite: true
	},
	{
		id: "elite-archer",
		name: "Deathmark Archer",
		pack: "pack2",
		sprite: 1,
		hp: 64,
		speed: 80,
		damage: 14,
		radius: 14,
		xp: 18,
		gold: 6,
		behavior: "shoot",
		biomes: ["bone", "frost"],
		elite: true,
		shootRange: 380,
		shootCd: 1.1
	},
	{
		id: "elite-beetle",
		name: "Siege Beetle",
		pack: "pack2",
		sprite: 2,
		hp: 70,
		speed: 90,
		damage: 32,
		radius: 16,
		xp: 18,
		gold: 6,
		behavior: "explode",
		biomes: ["foundry", "garden"],
		elite: true
	},
	{
		id: "elite-wraith",
		name: "Blizzard Wraith",
		pack: "pack2",
		sprite: 3,
		hp: 85,
		speed: 100,
		damage: 16,
		radius: 15,
		xp: 22,
		gold: 8,
		behavior: "kite",
		biomes: ["frost"],
		elite: true,
		shootRange: 300,
		shootCd: .9
	},
	{
		id: "elite-automaton",
		name: "Forge Captain",
		pack: "pack2",
		sprite: 5,
		hp: 160,
		speed: 58,
		damage: 22,
		radius: 18,
		xp: 30,
		gold: 11,
		behavior: "shoot",
		biomes: ["foundry"],
		elite: true,
		shootRange: 260,
		shootCd: 1.4
	},
	{
		id: "elite-hound",
		name: "Pack Alpha",
		pack: "pack3",
		sprite: 1,
		hp: 90,
		speed: 140,
		damage: 16,
		radius: 16,
		xp: 20,
		gold: 7,
		behavior: "dash",
		biomes: ["bone", "crypt"],
		elite: true
	},
	{
		id: "elite-ghoul",
		name: "Hungering Ghoul",
		pack: "pack3",
		sprite: 3,
		hp: 100,
		speed: 110,
		damage: 17,
		radius: 16,
		xp: 21,
		gold: 7,
		behavior: "seek",
		biomes: ["crypt"],
		elite: true
	},
	{
		id: "elite-scorpion",
		name: "Slag Scorpion",
		pack: "pack3",
		sprite: 7,
		hp: 110,
		speed: 95,
		damage: 20,
		radius: 16,
		xp: 24,
		gold: 8,
		behavior: "dash",
		biomes: ["foundry"],
		elite: true
	},
	{
		id: "ash-titan",
		name: "Ash Titan",
		pack: "bosses",
		sprite: 0,
		hp: 1400,
		speed: 50,
		damage: 28,
		radius: 36,
		xp: 200,
		gold: 40,
		behavior: "tank",
		biomes: ["crypt"],
		boss: true,
		shootRange: 280,
		shootCd: 1.8
	},
	{
		id: "bone-queen",
		name: "Bone Queen",
		pack: "bosses",
		sprite: 1,
		hp: 1600,
		speed: 55,
		damage: 24,
		radius: 34,
		xp: 220,
		gold: 44,
		behavior: "summon",
		biomes: ["bone"],
		boss: true,
		shootRange: 320,
		shootCd: 1.4
	},
	{
		id: "thorn-dryad",
		name: "Thorn Dryad",
		pack: "bosses",
		sprite: 2,
		hp: 1500,
		speed: 70,
		damage: 22,
		radius: 32,
		xp: 210,
		gold: 42,
		behavior: "circle",
		biomes: ["garden"],
		boss: true,
		shootRange: 260,
		shootCd: 1.2
	},
	{
		id: "ice-colossus",
		name: "Ice Colossus",
		pack: "bosses",
		sprite: 3,
		hp: 1900,
		speed: 42,
		damage: 30,
		radius: 38,
		xp: 240,
		gold: 48,
		behavior: "tank",
		biomes: ["frost"],
		boss: true,
		shootRange: 300,
		shootCd: 2
	},
	{
		id: "drowned-priest",
		name: "Drowned Priest",
		pack: "bosses",
		sprite: 4,
		hp: 1700,
		speed: 60,
		damage: 26,
		radius: 34,
		xp: 230,
		gold: 46,
		behavior: "shoot",
		biomes: ["tide"],
		boss: true,
		shootRange: 340,
		shootCd: 1.1
	},
	{
		id: "furnace-golem",
		name: "Furnace Golem",
		pack: "bosses",
		sprite: 5,
		hp: 2100,
		speed: 40,
		damage: 32,
		radius: 40,
		xp: 260,
		gold: 52,
		behavior: "explode",
		biomes: ["foundry"],
		boss: true,
		shootRange: 240,
		shootCd: 1.6
	},
	{
		id: "eye-cluster",
		name: "Void Eye",
		pack: "bosses",
		sprite: 6,
		hp: 1800,
		speed: 65,
		damage: 25,
		radius: 34,
		xp: 250,
		gold: 50,
		behavior: "kite",
		biomes: ["void"],
		boss: true,
		shootRange: 360,
		shootCd: .9
	},
	{
		id: "ash-monarch",
		name: "Ashen Monarch",
		pack: "bosses",
		sprite: 7,
		hp: 2800,
		speed: 58,
		damage: 34,
		radius: 38,
		xp: 400,
		gold: 80,
		behavior: "summon",
		biomes: ["crown"],
		boss: true,
		shootRange: 320,
		shootCd: 1
	}
];
var ENEMY_BY_ID = Object.fromEntries(ENEMIES.map((e) => [e.id, e]));
if (ENEMIES.length < 50) throw new Error(`Need 50 enemies, got ${ENEMIES.length}`);
var STEMS = [
	{
		stem: "Ashbrand",
		slot: "weapon",
		sheet: "weapons",
		icon: 0,
		tags: ["slash", "fire"],
		stats: { damage: 6 },
		desc: "A kiln-forged greatsword."
	},
	{
		stem: "Cinderbow",
		slot: "weapon",
		sheet: "weapons",
		icon: 1,
		tags: ["bow"],
		stats: {
			damage: 5,
			pierce: 1
		},
		desc: "Living ember longbow."
	},
	{
		stem: "Pyrestaff",
		slot: "weapon",
		sheet: "weapons",
		icon: 2,
		tags: ["fire", "staff"],
		stats: {
			damage: 7,
			area: .1
		},
		desc: "Staff of the first flame."
	},
	{
		stem: "Nightfangs",
		slot: "weapon",
		sheet: "weapons",
		icon: 3,
		tags: ["slash", "crit"],
		stats: {
			critChance: .06,
			damage: 4
		},
		desc: "Twin daggers of the veil."
	},
	{
		stem: "Dawnmace",
		slot: "weapon",
		sheet: "weapons",
		icon: 4,
		tags: ["holy"],
		stats: {
			damage: 5,
			regen: .4
		},
		desc: "Sunburst mace."
	},
	{
		stem: "Bonescepter",
		slot: "weapon",
		sheet: "weapons",
		icon: 5,
		tags: ["bone"],
		stats: {
			damage: 4,
			luck: 3
		},
		desc: "A named femur, still loyal."
	},
	{
		stem: "Stormrod",
		slot: "weapon",
		sheet: "weapons",
		icon: 6,
		tags: ["lightning"],
		stats: {
			pierce: 1,
			damage: 5
		},
		desc: "Copper lightning rod."
	},
	{
		stem: "Ironwraps",
		slot: "weapon",
		sheet: "weapons",
		icon: 7,
		tags: ["fist"],
		stats: {
			damage: 6,
			lifesteal: .02
		},
		desc: "Wrapped fists."
	},
	{
		stem: "Spear of Kilns",
		slot: "weapon",
		sheet: "weapons",
		icon: 8,
		tags: ["pierce"],
		stats: {
			pierce: 2,
			damage: 5
		},
		desc: "Long kiln spear."
	},
	{
		stem: "Ashcross",
		slot: "weapon",
		sheet: "weapons",
		icon: 9,
		tags: ["bow"],
		stats: {
			fireRate: .3,
			damage: 4
		},
		desc: "Compact crossbow."
	},
	{
		stem: "Graveaxe",
		slot: "weapon",
		sheet: "weapons",
		icon: 10,
		tags: ["slash"],
		stats: {
			damage: 8,
			fireRate: -.2
		},
		desc: "Heavy burial axe."
	},
	{
		stem: "Cinderwand",
		slot: "weapon",
		sheet: "weapons",
		icon: 11,
		tags: ["fire"],
		stats: {
			projSpeed: 40,
			damage: 4
		},
		desc: "A wand of banked coals."
	},
	{
		stem: "Chainflail",
		slot: "weapon",
		sheet: "weapons",
		icon: 12,
		tags: ["area"],
		stats: {
			area: .15,
			damage: 5
		},
		desc: "Spinning iron flail."
	},
	{
		stem: "Reapscythe",
		slot: "weapon",
		sheet: "weapons",
		icon: 13,
		tags: ["slash"],
		stats: {
			lifesteal: .04,
			damage: 6
		},
		desc: "Harvests more than wheat."
	},
	{
		stem: "Anvilhammer",
		slot: "weapon",
		sheet: "weapons",
		icon: 14,
		tags: ["blunt"],
		stats: {
			damage: 9,
			speed: -8
		},
		desc: "Foundry sledge."
	},
	{
		stem: "Boltlock",
		slot: "weapon",
		sheet: "weapons",
		icon: 15,
		tags: ["pierce"],
		stats: {
			projSpeed: 80,
			damage: 5
		},
		desc: "Pistol-crossbow."
	},
	{
		stem: "Ashhelm",
		slot: "helm",
		sheet: "armor",
		icon: 0,
		tags: ["armor"],
		stats: {
			armor: 3,
			maxHp: 8
		},
		desc: "Closed kiln helm."
	},
	{
		stem: "Graveplate",
		slot: "armor",
		sheet: "armor",
		icon: 1,
		tags: ["armor"],
		stats: {
			armor: 6,
			maxHp: 18
		},
		desc: "Heavy burial plate."
	},
	{
		stem: "Cindercloak",
		slot: "armor",
		sheet: "armor",
		icon: 2,
		tags: ["evasion"],
		stats: {
			speed: 12,
			armor: 2
		},
		desc: "Scorched travel cloak."
	},
	{
		stem: "Vaultboots",
		slot: "boots",
		sheet: "armor",
		icon: 3,
		tags: ["move"],
		stats: {
			speed: 18,
			dashCharges: .2
		},
		desc: "Quiet stone boots."
	},
	{
		stem: "Emberband",
		slot: "ring",
		sheet: "armor",
		icon: 4,
		tags: ["fire"],
		stats: {
			damage: 3,
			critChance: .04
		},
		desc: "Warm gold ring."
	},
	{
		stem: "Lanternheart",
		slot: "amulet",
		sheet: "armor",
		icon: 5,
		tags: ["holy"],
		stats: {
			regen: .6,
			shield: 8
		},
		desc: "Amulet of last light."
	},
	{
		stem: "Bulwark",
		slot: "armor",
		sheet: "armor",
		icon: 6,
		tags: ["block"],
		stats: {
			armor: 8,
			thorns: 3
		},
		desc: "Tower of the kiln."
	},
	{
		stem: "Ashsash",
		slot: "armor",
		sheet: "armor",
		icon: 7,
		tags: ["utility"],
		stats: {
			cdr: .06,
			luck: 4
		},
		desc: "Belt of spare knives."
	},
	{
		stem: "Kilngloves",
		slot: "armor",
		sheet: "armor",
		icon: 8,
		tags: ["grip"],
		stats: {
			fireRate: .25,
			damage: 2
		},
		desc: "Heat-proof gloves."
	},
	{
		stem: "Nightcowl",
		slot: "helm",
		sheet: "armor",
		icon: 9,
		tags: ["crit"],
		stats: {
			critChance: .08,
			speed: 6
		},
		desc: "Assassin's hood."
	},
	{
		stem: "Pauldrons of Duty",
		slot: "armor",
		sheet: "armor",
		icon: 10,
		tags: ["armor"],
		stats: {
			armor: 4,
			maxHp: 12
		},
		desc: "Warden's shoulders."
	},
	{
		stem: "Greaves of March",
		slot: "boots",
		sheet: "armor",
		icon: 11,
		tags: ["move"],
		stats: {
			speed: 10,
			armor: 2
		},
		desc: "Long-march greaves."
	},
	{
		stem: "Ashcrown",
		slot: "helm",
		sheet: "armor",
		icon: 12,
		tags: ["royal"],
		stats: {
			luck: 8,
			xpGain: .1
		},
		desc: "A cracked lesser crown."
	},
	{
		stem: "Waylantern",
		slot: "relic",
		sheet: "armor",
		icon: 13,
		tags: ["light"],
		stats: {
			pickupRange: 30,
			luck: 3
		},
		desc: "Lights pickups in the dark."
	},
	{
		stem: "Bone Mask",
		slot: "helm",
		sheet: "armor",
		icon: 14,
		tags: ["bone"],
		stats: {
			lifesteal: .03,
			damage: 3
		},
		desc: "Face of a forgotten name."
	},
	{
		stem: "Reliquary Satchel",
		slot: "relic",
		sheet: "armor",
		icon: 15,
		tags: ["gold"],
		stats: {
			goldGain: .15,
			luck: 5
		},
		desc: "Coins find their way in."
	},
	{
		stem: "Heart of the First Kiln",
		slot: "relic",
		sheet: "relics",
		icon: 4,
		tags: ["unique", "fire"],
		stats: {
			damage: 8,
			area: .2
		},
		desc: "The kiln still beats."
	},
	{
		stem: "Cracked Skull Charm",
		slot: "relic",
		sheet: "relics",
		icon: 5,
		tags: ["unique"],
		stats: {
			maxHp: 25,
			thorns: 5
		},
		desc: "Remembers every blow."
	},
	{
		stem: "Rune of Opening",
		slot: "rune",
		sheet: "relics",
		icon: 6,
		tags: ["rune"],
		stats: {
			luck: 6,
			goldGain: .1
		},
		desc: "Doors prefer you."
	},
	{
		stem: "Ember Gem",
		slot: "rune",
		sheet: "relics",
		icon: 7,
		tags: ["fire"],
		stats: {
			damage: 4,
			critDamage: .2
		},
		desc: "Cut from cooled slag."
	},
	{
		stem: "Frost Crystal",
		slot: "rune",
		sheet: "relics",
		icon: 8,
		tags: ["ice"],
		stats: {
			armor: 3,
			projSpeed: 40
		},
		desc: "Slows what it touches."
	},
	{
		stem: "Void Orb",
		slot: "relic",
		sheet: "relics",
		icon: 9,
		tags: ["void"],
		stats: {
			pierce: 1,
			area: .12
		},
		desc: "Looks back."
	},
	{
		stem: "Nameless Scroll",
		slot: "consumable",
		sheet: "relics",
		icon: 10,
		tags: ["xp"],
		stats: { xpGain: .2 },
		desc: "A page of someone else's life."
	},
	{
		stem: "Skeleton Key",
		slot: "relic",
		sheet: "relics",
		icon: 11,
		tags: ["keys"],
		stats: { luck: 10 },
		desc: "Opens more than locks."
	},
	{
		stem: "Blessing Chalice",
		slot: "relic",
		sheet: "relics",
		icon: 13,
		tags: ["holy"],
		stats: {
			regen: 1.2,
			shield: 15
		},
		desc: "Never empty for the worthy."
	},
	{
		stem: "Cursed Idol",
		slot: "relic",
		sheet: "relics",
		icon: 14,
		tags: ["curse"],
		stats: {
			damage: 10,
			maxHp: -15
		},
		desc: "Power with a price."
	},
	{
		stem: "Phoenix Feather",
		slot: "relic",
		sheet: "relics",
		icon: 15,
		tags: ["revive"],
		stats: {
			regen: .8,
			maxHp: 10
		},
		desc: "Almost a second life."
	},
	{
		stem: "Hourglass of Rooms",
		slot: "relic",
		sheet: "relics2",
		icon: 0,
		tags: ["time"],
		stats: {
			cdr: .1,
			fireRate: .2
		},
		desc: "Waves hesitate."
	},
	{
		stem: "Crypt Compass",
		slot: "relic",
		sheet: "relics2",
		icon: 1,
		tags: ["map"],
		stats: {
			luck: 7,
			pickupRange: 20
		},
		desc: "Points to what you need."
	},
	{
		stem: "Locked Grimoire",
		slot: "relic",
		sheet: "relics2",
		icon: 2,
		tags: ["magic"],
		stats: {
			damage: 5,
			projCount: 1
		},
		desc: "Still teaching, still shut."
	},
	{
		stem: "Wolf Fang",
		slot: "relic",
		sheet: "relics2",
		icon: 3,
		tags: ["crit"],
		stats: {
			critChance: .1,
			speed: 8
		},
		desc: "Bite of the pack."
	},
	{
		stem: "Moth Wing",
		slot: "relic",
		sheet: "relics2",
		icon: 4,
		tags: ["fly"],
		stats: {
			speed: 16,
			dashCharges: .3
		},
		desc: "Dust of the lantern."
	},
	{
		stem: "Iron Nail",
		slot: "rune",
		sheet: "relics2",
		icon: 5,
		tags: ["pierce"],
		stats: {
			pierce: 1,
			damage: 3
		},
		desc: "Driven through a god once."
	},
	{
		stem: "Last Candle",
		slot: "relic",
		sheet: "relics2",
		icon: 6,
		tags: ["light"],
		stats: {
			regen: .5,
			shield: 10
		},
		desc: "Will not go out."
	},
	{
		stem: "Loaded Dice",
		slot: "relic",
		sheet: "relics2",
		icon: 7,
		tags: ["luck"],
		stats: {
			luck: 14,
			goldGain: .12
		},
		desc: "The crypts already cheated."
	},
	{
		stem: "Mirror Shard",
		slot: "relic",
		sheet: "relics2",
		icon: 8,
		tags: ["reflect"],
		stats: {
			thorns: 8,
			armor: 2
		},
		desc: "Shows the blow back."
	},
	{
		stem: "Warding Bell",
		slot: "relic",
		sheet: "relics2",
		icon: 9,
		tags: ["holy"],
		stats: {
			area: .1,
			shield: 12
		},
		desc: "Rings when death is near."
	},
	{
		stem: "Grave Chain",
		slot: "relic",
		sheet: "relics2",
		icon: 10,
		tags: ["control"],
		stats: {
			armor: 4,
			damage: 3
		},
		desc: "Binds what should stay down."
	},
	{
		stem: "Kiln Seed",
		slot: "relic",
		sheet: "relics2",
		icon: 11,
		tags: ["garden"],
		stats: {
			regen: .7,
			maxHp: 12
		},
		desc: "Grows in ash."
	},
	{
		stem: "Judgement Scale",
		slot: "relic",
		sheet: "relics2",
		icon: 12,
		tags: ["balance"],
		stats: {
			critDamage: .3,
			armor: 3
		},
		desc: "Weighs your restraint."
	},
	{
		stem: "War Horn",
		slot: "relic",
		sheet: "relics2",
		icon: 13,
		tags: ["war"],
		stats: {
			damage: 6,
			fireRate: .2
		},
		desc: "The host answers."
	},
	{
		stem: "Tear Gem",
		slot: "amulet",
		sheet: "relics2",
		icon: 14,
		tags: ["holy"],
		stats: {
			lifesteal: .05,
			regen: .4
		},
		desc: "A saint's last grief."
	},
	{
		stem: "Black Rose",
		slot: "amulet",
		sheet: "relics2",
		icon: 15,
		tags: ["night"],
		stats: {
			critChance: .07,
			lifesteal: .03
		},
		desc: "Blooms only in vaults."
	},
	{
		stem: "Red Flask",
		slot: "consumable",
		sheet: "relics",
		icon: 0,
		tags: ["heal"],
		stats: { maxHp: 10 },
		desc: "A swallow of life."
	},
	{
		stem: "Blue Vial",
		slot: "consumable",
		sheet: "relics",
		icon: 1,
		tags: ["mana"],
		stats: {
			cdr: .08,
			fireRate: .15
		},
		desc: "Cools the mind."
	},
	{
		stem: "Green Elixir",
		slot: "consumable",
		sheet: "relics",
		icon: 2,
		tags: ["body"],
		stats: {
			regen: 1,
			speed: 8
		},
		desc: "Bitter, effective."
	},
	{
		stem: "Coin Purse",
		slot: "relic",
		sheet: "relics",
		icon: 3,
		tags: ["gold"],
		stats: { goldGain: .2 },
		desc: "Never quite empty."
	},
	{
		stem: "Quiet Blade",
		slot: "weapon",
		sheet: "weapons",
		icon: 3,
		tags: ["crit"],
		stats: {
			critChance: .09,
			damage: 4
		},
		desc: "Makes no sound leaving."
	},
	{
		stem: "Saltbrand",
		slot: "weapon",
		sheet: "weapons",
		icon: 0,
		tags: ["holy"],
		stats: {
			damage: 5,
			thorns: 2
		},
		desc: "Wards the drowned."
	},
	{
		stem: "Tidehook",
		slot: "weapon",
		sheet: "weapons",
		icon: 8,
		tags: ["tide"],
		stats: {
			pickupRange: 25,
			damage: 5
		},
		desc: "Pulls more than fish."
	},
	{
		stem: "Slagaxe",
		slot: "weapon",
		sheet: "weapons",
		icon: 10,
		tags: ["fire"],
		stats: {
			damage: 7,
			area: .08
		},
		desc: "Still warm from the pour."
	},
	{
		stem: "Frostbit",
		slot: "weapon",
		sheet: "weapons",
		icon: 11,
		tags: ["ice"],
		stats: {
			projSpeed: 30,
			damage: 5
		},
		desc: "A wand of hoarfrost."
	},
	{
		stem: "Voidneedle",
		slot: "weapon",
		sheet: "weapons",
		icon: 15,
		tags: ["void"],
		stats: {
			pierce: 2,
			damage: 4
		},
		desc: "Ignores what is solid."
	},
	{
		stem: "Garden Thorn",
		slot: "weapon",
		sheet: "weapons",
		icon: 8,
		tags: ["garden"],
		stats: {
			thorns: 4,
			damage: 4
		},
		desc: "Grows after every kill."
	},
	{
		stem: "Crownspike",
		slot: "weapon",
		sheet: "weapons",
		icon: 0,
		tags: ["royal"],
		stats: {
			damage: 8,
			luck: 4
		},
		desc: "A shard of the ash crown."
	},
	{
		stem: "Monk's Wrap",
		slot: "weapon",
		sheet: "weapons",
		icon: 7,
		tags: ["fist"],
		stats: {
			fireRate: .35,
			damage: 3
		},
		desc: "Simple, endless."
	},
	{
		stem: "Choir Bell",
		slot: "weapon",
		sheet: "weapons",
		icon: 4,
		tags: ["holy"],
		stats: {
			area: .18,
			damage: 4
		},
		desc: "Rings through bone."
	},
	{
		stem: "Ratcatcher",
		slot: "weapon",
		sheet: "weapons",
		icon: 9,
		tags: ["utility"],
		stats: {
			pickupRange: 40,
			damage: 3
		},
		desc: "Never misses vermin."
	},
	{
		stem: "Long Vigil",
		slot: "weapon",
		sheet: "weapons",
		icon: 1,
		tags: ["bow"],
		stats: {
			pierce: 2,
			damage: 5
		},
		desc: "The night watch bow."
	},
	{
		stem: "Sootmail",
		slot: "armor",
		sheet: "armor",
		icon: 1,
		tags: ["armor"],
		stats: {
			armor: 5,
			maxHp: 14
		},
		desc: "Mail blackened by kilns."
	},
	{
		stem: "Frostmantle",
		slot: "armor",
		sheet: "armor",
		icon: 2,
		tags: ["ice"],
		stats: {
			armor: 3,
			speed: 8
		},
		desc: "Holds the vault's cold."
	},
	{
		stem: "Tideplate",
		slot: "armor",
		sheet: "armor",
		icon: 1,
		tags: ["tide"],
		stats: {
			maxHp: 22,
			regen: .3
		},
		desc: "Barnacled and loyal."
	},
	{
		stem: "Voidweave",
		slot: "armor",
		sheet: "armor",
		icon: 2,
		tags: ["void"],
		stats: {
			dashCharges: .4,
			armor: 2
		},
		desc: "Cloth that isn't quite there."
	},
	{
		stem: "Rosehelm",
		slot: "helm",
		sheet: "armor",
		icon: 0,
		tags: ["garden"],
		stats: {
			luck: 5,
			armor: 2
		},
		desc: "Thorns for a visor."
	},
	{
		stem: "Foundry Visor",
		slot: "helm",
		sheet: "armor",
		icon: 0,
		tags: ["fire"],
		stats: {
			armor: 4,
			damage: 2
		},
		desc: "Sees heat as color."
	},
	{
		stem: "Catacomb Boots",
		slot: "boots",
		sheet: "armor",
		icon: 3,
		tags: ["bone"],
		stats: {
			speed: 14,
			armor: 1
		},
		desc: "Know every step of the dead."
	},
	{
		stem: "Ring of Names",
		slot: "ring",
		sheet: "armor",
		icon: 4,
		tags: ["summon"],
		stats: {
			luck: 6,
			xpGain: .08
		},
		desc: "Remembers the fallen."
	},
	{
		stem: "Ring of Hunger",
		slot: "ring",
		sheet: "armor",
		icon: 4,
		tags: ["life"],
		stats: {
			lifesteal: .06,
			damage: 2
		},
		desc: "Feeds when you do."
	},
	{
		stem: "Amulet of March",
		slot: "amulet",
		sheet: "armor",
		icon: 5,
		tags: ["move"],
		stats: {
			speed: 10,
			maxHp: 8
		},
		desc: "The road continues."
	},
	{
		stem: "Amulet of Silence",
		slot: "amulet",
		sheet: "armor",
		icon: 5,
		tags: ["night"],
		stats: {
			critChance: .05,
			cdr: .05
		},
		desc: "Quiets the crypt."
	},
	{
		stem: "Warden's Oath",
		slot: "relic",
		sheet: "relics",
		icon: 4,
		tags: ["unique"],
		stats: {
			armor: 6,
			regen: .6
		},
		desc: "You will not leave them."
	},
	{
		stem: "First Spark",
		slot: "relic",
		sheet: "relics",
		icon: 7,
		tags: ["unique", "fire"],
		stats: {
			area: .25,
			damage: 5
		},
		desc: "The kiln's childhood."
	},
	{
		stem: "Last Watch",
		slot: "relic",
		sheet: "relics2",
		icon: 6,
		tags: ["unique"],
		stats: {
			shield: 20,
			regen: .5
		},
		desc: "Someone kept it burning."
	},
	{
		stem: "Hollow Crown",
		slot: "helm",
		sheet: "armor",
		icon: 12,
		tags: ["unique", "royal"],
		stats: {
			luck: 12,
			damage: 6,
			maxHp: -8
		},
		desc: "Fits no living brow well."
	},
	{
		stem: "Book of Rooms",
		slot: "relic",
		sheet: "relics2",
		icon: 2,
		tags: ["unique"],
		stats: {
			xpGain: .15,
			luck: 8
		},
		desc: "The dungeon, annotated."
	},
	{
		stem: "Mercy",
		slot: "weapon",
		sheet: "weapons",
		icon: 4,
		tags: ["unique", "holy"],
		stats: {
			damage: 6,
			regen: .8,
			lifesteal: .03
		},
		desc: "A mace that heals what it does not finish."
	},
	{
		stem: "Hunger",
		slot: "weapon",
		sheet: "weapons",
		icon: 13,
		tags: ["unique"],
		stats: {
			lifesteal: .08,
			damage: 7
		},
		desc: "A scythe that will not rest."
	},
	{
		stem: "The Quiet Law",
		slot: "weapon",
		sheet: "weapons",
		icon: 0,
		tags: ["unique"],
		stats: {
			damage: 10,
			fireRate: -.3,
			critDamage: .4
		},
		desc: "One cut is enough."
	}
];
var VARIANTS = [
	{
		id: "plain",
		rarity: "common",
		prefix: "",
		suffix: "",
		mult: 1,
		extra: {}
	},
	{
		id: "keen",
		rarity: "uncommon",
		prefix: "Keen ",
		suffix: "",
		mult: 1.18,
		extra: { critChance: .03 }
	},
	{
		id: "cinder",
		rarity: "rare",
		prefix: "",
		suffix: " of Cinders",
		mult: 1.32,
		extra: { damage: 2 }
	},
	{
		id: "elder",
		rarity: "epic",
		prefix: "Elder ",
		suffix: "",
		mult: 1.5,
		extra: { luck: 3 }
	},
	{
		id: "last",
		rarity: "legendary",
		prefix: "",
		suffix: ", Last Light",
		mult: 1.75,
		extra: {
			area: .08,
			regen: .2
		}
	},
	{
		id: "myth",
		rarity: "mythic",
		prefix: "Mythic ",
		suffix: "",
		mult: 2.05,
		extra: {
			damage: 4,
			luck: 5
		}
	}
];
function scaleStats(s, m) {
	const o = {};
	for (const [k, v] of Object.entries(s)) if (typeof v === "number") o[k] = Math.abs(v) < 1 ? Math.round(v * m * 100) / 100 : Math.round(v * m);
	return o;
}
function buildItemCatalog() {
	const items = [];
	const seen = /* @__PURE__ */ new Set();
	let n = 0;
	for (const stem of STEMS) for (const v of VARIANTS) {
		const name = `${v.prefix}${stem.stem}${v.suffix}`;
		if (seen.has(name)) continue;
		seen.add(name);
		const stats = {
			...scaleStats(stem.stats, v.mult),
			...v.extra
		};
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
			unique: stem.tags.includes("unique") && v.id === "plain"
		});
	}
	return items;
}
var ITEMS = buildItemCatalog();
var ITEM_BY_ID = Object.fromEntries(ITEMS.map((i) => [i.id, i]));
if (ITEMS.length < 500) throw new Error(`Need 500 items, got ${ITEMS.length}`);
var UPGRADES = [
	{
		id: "might",
		name: "Might",
		desc: "+18% damage.",
		rarity: "common",
		stats: { damage: 4 },
		tags: ["offense"]
	},
	{
		id: "haste",
		name: "Haste",
		desc: "+12% attack speed.",
		rarity: "common",
		stats: { fireRate: .3 },
		tags: ["offense"]
	},
	{
		id: "vital",
		name: "Vitality",
		desc: "+25 max health.",
		rarity: "common",
		stats: { maxHp: 25 },
		tags: ["defense"]
	},
	{
		id: "greaves",
		name: "Quick Greaves",
		desc: "+14 movement speed.",
		rarity: "common",
		stats: { speed: 14 },
		tags: ["move"]
	},
	{
		id: "armor",
		name: "Plate",
		desc: "+5 armor.",
		rarity: "common",
		stats: { armor: 5 },
		tags: ["defense"]
	},
	{
		id: "pickup",
		name: "Magnet",
		desc: "Pickup radius grows.",
		rarity: "common",
		stats: { pickupRange: 40 },
		tags: ["utility"]
	},
	{
		id: "luck",
		name: "Fortune",
		desc: "+8 luck.",
		rarity: "uncommon",
		stats: { luck: 8 },
		tags: ["luck"]
	},
	{
		id: "pierce",
		name: "Pierce",
		desc: "Projectiles pierce +1.",
		rarity: "uncommon",
		stats: { pierce: 1 },
		tags: ["offense"]
	},
	{
		id: "multishot",
		name: "Split Shot",
		desc: "Fire +1 projectile.",
		rarity: "rare",
		stats: {
			projCount: 1,
			spread: .06
		},
		tags: ["offense"]
	},
	{
		id: "crit",
		name: "Keen Eye",
		desc: "+8% crit chance.",
		rarity: "uncommon",
		stats: { critChance: .08 },
		tags: ["crit"]
	},
	{
		id: "critd",
		name: "Execute",
		desc: "+40% crit damage.",
		rarity: "rare",
		stats: { critDamage: .4 },
		tags: ["crit"]
	},
	{
		id: "life",
		name: "Blood Tithe",
		desc: "+4% lifesteal.",
		rarity: "rare",
		stats: { lifesteal: .04 },
		tags: ["life"]
	},
	{
		id: "area",
		name: "Widen",
		desc: "+18% area.",
		rarity: "uncommon",
		stats: { area: .18 },
		tags: ["area"]
	},
	{
		id: "regen",
		name: "Mending",
		desc: "+1.2 health regen.",
		rarity: "uncommon",
		stats: { regen: 1.2 },
		tags: ["defense"]
	},
	{
		id: "thorns",
		name: "Briar",
		desc: "+6 thorns.",
		rarity: "uncommon",
		stats: { thorns: 6 },
		tags: ["defense"]
	},
	{
		id: "gold",
		name: "Gilded",
		desc: "+20% gold find.",
		rarity: "common",
		stats: { goldGain: .2 },
		tags: ["gold"]
	},
	{
		id: "xp",
		name: "Scholar",
		desc: "+15% experience.",
		rarity: "common",
		stats: { xpGain: .15 },
		tags: ["xp"]
	},
	{
		id: "dash",
		name: "Second Wind",
		desc: "+1 dash charge.",
		rarity: "rare",
		stats: { dashCharges: 1 },
		tags: ["move"]
	},
	{
		id: "cdr",
		name: "Focus",
		desc: "Skill cooldown -12%.",
		rarity: "uncommon",
		stats: { cdr: .12 },
		tags: ["skill"]
	},
	{
		id: "shield",
		name: "Aegis",
		desc: "+20 shield.",
		rarity: "uncommon",
		stats: { shield: 20 },
		tags: ["defense"]
	},
	{
		id: "velocity",
		name: "Swift Shot",
		desc: "+80 projectile speed.",
		rarity: "common",
		stats: { projSpeed: 80 },
		tags: ["offense"]
	},
	{
		id: "spread",
		name: "Fan",
		desc: "Wider cone, more coverage.",
		rarity: "common",
		stats: { spread: .1 },
		tags: ["offense"]
	},
	{
		id: "glass",
		name: "Glass Pact",
		desc: "+30% damage, -20 health.",
		rarity: "epic",
		stats: {
			damage: 8,
			maxHp: -20
		},
		tags: ["risk"]
	},
	{
		id: "colossus",
		name: "Colossus",
		desc: "+60 health, -10 speed.",
		rarity: "rare",
		stats: {
			maxHp: 60,
			speed: -10
		},
		tags: ["defense"]
	},
	{
		id: "berserk",
		name: "Berserk",
		desc: "+25% attack speed and +10 speed.",
		rarity: "epic",
		stats: {
			fireRate: .5,
			speed: 10
		},
		tags: ["offense"]
	},
	{
		id: "harvest",
		name: "Harvest",
		desc: "+8% lifesteal and +10% gold.",
		rarity: "epic",
		stats: {
			lifesteal: .08,
			goldGain: .1
		},
		tags: ["life"]
	},
	{
		id: "storm",
		name: "Tempest",
		desc: "+2 pierce and +1 projectile.",
		rarity: "legendary",
		stats: {
			pierce: 2,
			projCount: 1
		},
		tags: ["offense"]
	},
	{
		id: "saint",
		name: "Saint",
		desc: "+2 regen and +15 shield.",
		rarity: "rare",
		stats: {
			regen: 2,
			shield: 15
		},
		tags: ["holy"]
	},
	{
		id: "shadow",
		name: "Shadowstep",
		desc: "+1 dash and +8% crit.",
		rarity: "epic",
		stats: {
			dashCharges: 1,
			critChance: .08
		},
		tags: ["night"]
	},
	{
		id: "crown",
		name: "Crownlight",
		desc: "+12 luck, +10% XP.",
		rarity: "legendary",
		stats: {
			luck: 12,
			xpGain: .1
		},
		tags: ["royal"]
	}
];
var GameAudio = class {
	ctx = null;
	master = null;
	music = null;
	sfx = null;
	muted = false;
	musicTimer = 0;
	settings = null;
	unlock() {
		if (!this.ctx) {
			const Ctx = window.AudioContext || window.webkitAudioContext;
			this.ctx = new Ctx({ latencyHint: "interactive" });
			this.master = this.ctx.createGain();
			this.music = this.ctx.createGain();
			this.sfx = this.ctx.createGain();
			this.music.connect(this.master);
			this.sfx.connect(this.master);
			this.master.connect(this.ctx.destination);
			this.apply(this.settings);
		}
		if (this.ctx.state === "suspended") this.ctx.resume();
	}
	apply(s) {
		this.settings = s;
		if (!this.master || !this.music || !this.sfx || !s) return;
		const m = s.master * s.master;
		this.master.gain.setTargetAtTime(this.muted ? 0 : m, this.ctx.currentTime, .02);
		this.music.gain.setTargetAtTime(s.music * s.music, this.ctx.currentTime, .04);
		this.sfx.gain.setTargetAtTime(s.sfx * s.sfx, this.ctx.currentTime, .02);
	}
	tone(freq, dur, type, vol = .12, slide = 0) {
		if (!this.ctx || !this.sfx) return;
		const t = this.ctx.currentTime;
		const o = this.ctx.createOscillator();
		const g = this.ctx.createGain();
		o.type = type;
		o.frequency.setValueAtTime(freq, t);
		if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
		g.gain.setValueAtTime(vol, t);
		g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
		o.connect(g);
		g.connect(this.sfx);
		o.start(t);
		o.stop(t + dur + .02);
		o.onended = () => {
			o.disconnect();
			g.disconnect();
		};
	}
	noise(dur, vol = .1) {
		if (!this.ctx || !this.sfx) return;
		const n = Math.floor(this.ctx.sampleRate * dur);
		const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
		const d = buf.getChannelData(0);
		for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
		const src = this.ctx.createBufferSource();
		src.buffer = buf;
		const g = this.ctx.createGain();
		const t = this.ctx.currentTime;
		g.gain.setValueAtTime(vol, t);
		g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
		const f = this.ctx.createBiquadFilter();
		f.type = "lowpass";
		f.frequency.value = 900;
		src.connect(f);
		f.connect(g);
		g.connect(this.sfx);
		src.start(t);
		src.stop(t + dur);
	}
	hit() {
		this.noise(.08, .09);
		this.tone(180 + Math.random() * 40, .07, "square", .05, -80);
	}
	shoot() {
		this.tone(420 + Math.random() * 80, .05, "square", .04, -220);
	}
	dash() {
		this.tone(140, .12, "sawtooth", .05, 200);
	}
	pickup() {
		this.tone(660, .08, "triangle", .06, 220);
	}
	level() {
		this.tone(330, .12, "triangle", .07, 200);
		this.tone(495, .16, "triangle", .05, 260);
	}
	hurt() {
		this.noise(.12, .12);
		this.tone(90, .16, "sawtooth", .07, -40);
	}
	die() {
		this.noise(.3, .14);
		this.tone(70, .4, "sawtooth", .08, -50);
	}
	ui() {
		this.tone(520, .05, "triangle", .05);
	}
	tick(dt) {
		if (!this.ctx || !this.music) return;
		this.musicTimer += dt;
		if (this.musicTimer > 2.4) {
			this.musicTimer = 0;
			const t = this.ctx.currentTime;
			const notes = [
				110,
				138.59,
				164.81,
				146.83
			];
			const n = notes[Math.floor(Math.random() * notes.length)];
			const o = this.ctx.createOscillator();
			const g = this.ctx.createGain();
			o.type = "sine";
			o.frequency.value = n;
			g.gain.setValueAtTime(1e-4, t);
			g.gain.exponentialRampToValueAtTime(.035, t + .2);
			g.gain.exponentialRampToValueAtTime(1e-4, t + 2.1);
			o.connect(g);
			g.connect(this.music);
			o.start(t);
			o.stop(t + 2.2);
		}
	}
};
function xmur3(str) {
	let h = 1779033703 ^ str.length;
	for (let i = 0; i < str.length; i++) {
		h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
		h = h << 13 | h >>> 19;
	}
	h = Math.imul(h ^ h >>> 16, 2246822507);
	h = Math.imul(h ^ h >>> 13, 3266489909);
	return (h ^= h >>> 16) >>> 0;
}
function mulberry32(seed) {
	let s = seed >>> 0;
	return function rng() {
		s |= 0;
		s = s + 1831565813 | 0;
		let t = Math.imul(s ^ s >>> 15, 1 | s);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function rngFrom(seed, salt = 0) {
	return mulberry32(((typeof seed === "number" ? seed : xmur3(seed)) ^ salt) >>> 0);
}
function randRange(rng, a, b) {
	return a + rng() * (b - a);
}
function randInt(rng, a, b) {
	return Math.floor(randRange(rng, a, b + 1));
}
function pick(rng, arr) {
	return arr[Math.floor(rng() * arr.length)];
}
function shuffle(rng, arr) {
	const a = arr.slice();
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function chance(rng, p) {
	return rng() < p;
}
function newSeed() {
	const adj = [
		"Ashen",
		"Hollow",
		"Cinder",
		"Grave",
		"Silent",
		"Iron",
		"Dawn",
		"Night"
	];
	const noun = [
		"Kiln",
		"Crypt",
		"Crown",
		"Vault",
		"Hall",
		"Well",
		"Gate",
		"Pyre"
	];
	const n = Math.floor(Math.random() * 9e3 + 1e3);
	return `${adj[Math.floor(Math.random() * adj.length)]}-${noun[Math.floor(Math.random() * noun.length)]}-${n}`;
}
var WORLD_W = 1088;
var DIRS = [
	{
		d: "n",
		dx: 0,
		dy: -1,
		opp: "s"
	},
	{
		d: "e",
		dx: 1,
		dy: 0,
		opp: "w"
	},
	{
		d: "s",
		dx: 0,
		dy: 1,
		opp: "n"
	},
	{
		d: "w",
		dx: -1,
		dy: 0,
		opp: "e"
	}
];
function emptyDoors() {
	return {
		n: null,
		e: null,
		s: null,
		w: null
	};
}
function wavesFor(kind, index) {
	if (kind === "start") return 1;
	if (kind === "combat") return 3 + Math.floor(index / 2);
	if (kind === "elite") return 2;
	if (kind === "boss") return 1;
	return 0;
}
function generateFloor(seed, index, heat) {
	const rng = rngFrom(seed, 2654435769 ^ index * 7919);
	const biome = BIOMES[Math.min(index, BIOMES.length - 1)];
	const count = 8 + Math.min(4, index) + (heat >= 3 ? 1 : 0);
	const rooms = [];
	const occ = /* @__PURE__ */ new Map();
	const add = (gx, gy, kind) => {
		const r = {
			id: rooms.length,
			gx,
			gy,
			kind,
			cleared: false,
			seen: kind === "start",
			doors: emptyDoors(),
			waves: wavesFor(kind, index)
		};
		rooms.push(r);
		occ.set(`${gx},${gy}`, r.id);
		return r;
	};
	add(0, 0, "start");
	const frontier = [rooms[0]];
	while (rooms.length < count) {
		const from = pick(rng, frontier);
		const opts = shuffle(rng, DIRS).filter((d) => !occ.has(`${from.gx + d.dx},${from.gy + d.dy}`));
		if (!opts.length) {
			const idx = frontier.indexOf(from);
			if (idx >= 0) frontier.splice(idx, 1);
			if (!frontier.length) break;
			continue;
		}
		const d = opts[0];
		const nxt = add(from.gx + d.dx, from.gy + d.dy, "combat");
		from.doors[d.d] = nxt.id;
		nxt.doors[d.opp] = from.id;
		frontier.push(nxt);
	}
	const dist = (r) => Math.abs(r.gx) + Math.abs(r.gy);
	const byDist = rooms.slice().sort((a, b) => dist(b) - dist(a));
	const specials = [
		"boss",
		"shop",
		"treasure",
		"shrine",
		"elite",
		"rest"
	];
	if (heat >= 5) specials.push("elite");
	let si = 0;
	for (const r of byDist) {
		if (r.kind !== "combat") continue;
		if (si >= specials.length) break;
		r.kind = specials[si++];
		r.waves = wavesFor(r.kind, index);
	}
	const boss = rooms.find((r) => r.kind === "boss") ?? rooms[rooms.length - 1];
	boss.kind = "boss";
	boss.waves = 1;
	return {
		index,
		biome,
		rooms,
		startId: 0,
		bossId: boss.id,
		current: 0
	};
}
function doorWorld(dir) {
	const midx = WORLD_W / 2;
	const midy = 416;
	if (dir === "n") return {
		x: midx,
		y: 44.8
	};
	if (dir === "s") return {
		x: midx,
		y: 787.2
	};
	if (dir === "w") return {
		x: 44.8,
		y: midy
	};
	return {
		x: WORLD_W - 44.8,
		y: midy
	};
}
function spawnPoint(rng, pad = 140) {
	return {
		x: randInt(rng, pad, WORLD_W - pad),
		y: randInt(rng, pad, 832 - pad)
	};
}
function inBounds(x, y, r = 16) {
	return x > 64 + r && x < 1024 - r && y > 64 + r && y < 768 - r;
}
function clampToRoom(x, y, r = 16) {
	return {
		x: Math.max(64 + r, Math.min(1024 - r, x)),
		y: Math.max(64 + r, Math.min(768 - r, y))
	};
}
var Input = class {
	keys = /* @__PURE__ */ new Set();
	mouse = {
		x: 0,
		y: 0,
		down: false,
		worldX: 0,
		worldY: 0
	};
	moveStick = {
		x: 0,
		y: 0,
		active: false
	};
	aimStick = {
		x: 0,
		y: 0,
		active: false
	};
	dashPressed = false;
	skillPressed = false;
	pausePressed = false;
	interactPressed = false;
	injected = null;
	el = null;
	keysBound = false;
	attach(el) {
		if (this.el === el) return;
		this.detachPointer();
		this.el = el;
		if (!this.keysBound) {
			window.addEventListener("keydown", this.onKeyDown);
			window.addEventListener("keyup", this.onKeyUp);
			window.addEventListener("blur", this.clear);
			document.addEventListener("visibilitychange", () => {
				if (document.hidden) this.clear();
			});
			this.keysBound = true;
		}
		el.addEventListener("pointerdown", this.onPointerDown);
		el.addEventListener("pointermove", this.onPointerMove);
		el.addEventListener("pointerup", this.onPointerUp);
		el.addEventListener("pointercancel", this.onPointerUp);
		el.addEventListener("contextmenu", (e) => e.preventDefault());
	}
	detachPointer() {
		if (!this.el) return;
		this.el.removeEventListener("pointerdown", this.onPointerDown);
		this.el.removeEventListener("pointermove", this.onPointerMove);
		this.el.removeEventListener("pointerup", this.onPointerUp);
		this.el.removeEventListener("pointercancel", this.onPointerUp);
	}
	detach() {
		window.removeEventListener("keydown", this.onKeyDown);
		window.removeEventListener("keyup", this.onKeyUp);
		window.removeEventListener("blur", this.clear);
	}
	onKeyDown = (e) => {
		if (e.repeat) return;
		this.keys.add(e.code);
		if (e.code === "Space") {
			this.dashPressed = true;
			e.preventDefault();
		}
		if (e.code === "KeyQ" || e.code === "ShiftLeft") this.skillPressed = true;
		if (e.code === "KeyE" || e.code === "KeyF") this.interactPressed = true;
		if (e.code === "Escape" || e.code === "KeyP") this.pausePressed = true;
	};
	onKeyUp = (e) => {
		this.keys.delete(e.code);
	};
	onPointerDown = (e) => {
		if (e.button === 0) this.mouse.down = true;
		this.mouse.x = e.clientX;
		this.mouse.y = e.clientY;
		this.el?.setPointerCapture(e.pointerId);
	};
	onPointerMove = (e) => {
		this.mouse.x = e.clientX;
		this.mouse.y = e.clientY;
	};
	onPointerUp = (e) => {
		if (e.button === 0 || e.type !== "pointerdown") this.mouse.down = false;
	};
	clear = () => {
		this.keys.clear();
		this.mouse.down = false;
		this.moveStick.active = false;
		this.aimStick.active = false;
	};
	consumeDash() {
		const v = this.dashPressed;
		this.dashPressed = false;
		return v;
	}
	consumeSkill() {
		const v = this.skillPressed;
		this.skillPressed = false;
		return v;
	}
	consumePause() {
		const v = this.pausePressed;
		this.pausePressed = false;
		return v;
	}
	consumeInteract() {
		const v = this.interactPressed;
		this.interactPressed = false;
		return v;
	}
	held(code) {
		this.injected ?? [...this.keys];
		if (this.injected) return this.injected.includes(code);
		return this.keys.has(code);
	}
	moveVec() {
		let x = 0;
		let y = 0;
		if (this.moveStick.active) {
			x += this.moveStick.x;
			y += this.moveStick.y;
		}
		if (this.held("KeyA") || this.held("ArrowLeft")) x -= 1;
		if (this.held("KeyD") || this.held("ArrowRight")) x += 1;
		if (this.held("KeyW") || this.held("ArrowUp")) y -= 1;
		if (this.held("KeyS") || this.held("ArrowDown")) y += 1;
		const len = Math.hypot(x, y);
		if (len < .2) return {
			x: 0,
			y: 0
		};
		return {
			x: x / len,
			y: y / len
		};
	}
	firing() {
		return this.mouse.down || this.aimStick.active || this.held("KeyJ");
	}
	setKeys(codes) {
		this.injected = codes;
		this.keys = new Set(codes);
	}
};
var META_KEY = "emberwake-meta-v1";
var RUN_KEY = "emberwake-run-v1";
var BACKUP_KEY = "emberwake-meta-bak";
var DEFAULT_SETTINGS = {
	master: .8,
	music: .35,
	sfx: .8,
	shake: .7,
	autoAim: false,
	autoFire: true,
	reducedMotion: false
};
function defaultMeta() {
	return {
		version: 1,
		ashes: 0,
		talents: Object.fromEntries(TALENTS.map((t) => [t.id, 0])),
		unlocked: [
			"ashguard",
			"cinderbow",
			"pyrelock"
		],
		discovered: [],
		collected: [],
		achievements: [],
		wins: {},
		bestHeat: 0,
		runs: 0,
		kills: 0,
		settings: { ...DEFAULT_SETTINGS }
	};
}
function migrateMeta(raw) {
	const d = defaultMeta();
	return {
		...d,
		...raw,
		version: 1,
		settings: {
			...d.settings,
			...raw.settings ?? {}
		},
		talents: {
			...d.talents,
			...raw.talents ?? {}
		},
		unlocked: raw.unlocked?.length ? raw.unlocked : d.unlocked
	};
}
function loadMeta() {
	try {
		if (typeof localStorage === "undefined") return defaultMeta();
		const t = localStorage.getItem(META_KEY);
		if (!t) return defaultMeta();
		return migrateMeta(JSON.parse(t));
	} catch {
		try {
			const b = localStorage.getItem(BACKUP_KEY);
			if (b) return migrateMeta(JSON.parse(b));
		} catch {}
		return defaultMeta();
	}
}
function saveMeta(meta) {
	try {
		if (typeof localStorage === "undefined") return;
		const prev = localStorage.getItem(META_KEY);
		if (prev) localStorage.setItem(BACKUP_KEY, prev);
		localStorage.setItem(META_KEY, JSON.stringify({
			...meta,
			version: 1
		}));
	} catch {}
}
function loadRun() {
	try {
		if (typeof localStorage === "undefined") return null;
		const t = localStorage.getItem(RUN_KEY);
		if (!t) return null;
		const r = JSON.parse(t);
		if (r.version !== 1) return null;
		return r;
	} catch {
		return null;
	}
}
function saveRun(run) {
	try {
		if (typeof localStorage === "undefined") return;
		if (!run) localStorage.removeItem(RUN_KEY);
		else localStorage.setItem(RUN_KEY, JSON.stringify({
			...run,
			version: 1
		}));
	} catch {}
}
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error(`Failed ${src}`));
		img.src = src;
	});
}
/** Punch leftover chroma-key magenta without eating fire, cloth, or stone. */
function punchMagenta(img) {
	const c = document.createElement("canvas");
	c.width = img.naturalWidth || img.width;
	c.height = img.naturalHeight || img.height;
	const ctx = c.getContext("2d", { willReadFrequently: true });
	if (!ctx) return c;
	ctx.drawImage(img, 0, 0);
	const data = ctx.getImageData(0, 0, c.width, c.height);
	const d = data.data;
	for (let i = 0; i < d.length; i += 4) {
		const r = d[i];
		const g = d[i + 1];
		const b = d[i + 2];
		const a = d[i + 3];
		if (a === 0) continue;
		const mag = Math.min(r, b) - g;
		if (r > 210 && b > 210 && g < 70 && mag > 90) {
			d[i + 3] = 0;
			continue;
		}
		if (r > 190 && b > 190 && g < 90 && mag > 70) d[i + 3] = Math.round(a * .15);
	}
	ctx.putImageData(data, 0, 0);
	return c;
}
function sheet(img, cols, rows, key = true) {
	const src = key ? punchMagenta(img) : img;
	const w = "width" in src ? src.width : img.width;
	const h = "height" in src ? src.height : img.height;
	return {
		img: src,
		cols,
		rows,
		cw: w / cols,
		ch: h / rows
	};
}
var Sprites = class {
	heroes = {};
	portraits = {};
	packs = {};
	icons = {};
	fx = {};
	tiles = {};
	props = null;
	title = null;
	ready = false;
	inflight = null;
	async load(onProgress) {
		if (this.ready) {
			onProgress(1);
			return;
		}
		if (this.inflight) return this.inflight;
		this.inflight = this.loadAll(onProgress);
		await this.inflight;
	}
	async loadAll(onProgress) {
		const classes = [
			"ashguard",
			"cinderbow",
			"pyrelock",
			"nightveil",
			"dawnwarden",
			"gravekin",
			"stormcall",
			"ironfist"
		];
		const jobs = [];
		const add = (fn) => jobs.push(fn);
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
		for (const p of [
			"pack1",
			"pack2",
			"pack3",
			"bosses"
		]) add(async () => {
			this.packs[p] = sheet(await loadImage(`/game/enemies/${p}.png`), 3, 3);
		});
		for (const p of [
			"weapons",
			"armor",
			"relics",
			"relics2"
		]) add(async () => {
			this.icons[p] = sheet(await loadImage(`/game/icons/${p}.png`), 4, 4);
		});
		for (const p of [
			"fireball",
			"impact",
			"arrow",
			"lightning",
			"slash"
		]) add(async () => {
			this.fx[p] = sheet(await loadImage(`/game/fx/${p}.png`), 2, 2);
		});
		for (const p of [
			"crypt",
			"bone",
			"frost",
			"foundry",
			"void",
			"garden",
			"tide",
			"wall"
		]) add(async () => {
			this.tiles[p] = await loadImage(`/game/tiles/${p}.jpg`);
		});
		add(async () => {
			this.props = sheet(await loadImage("/game/props/set.png"), 2, 2);
		});
		let done = 0;
		const first = jobs[0];
		try {
			await first();
		} catch (err) {
			console.warn(err);
		}
		done += 1;
		onProgress(done / jobs.length);
		await Promise.all(jobs.slice(1).map(async (job) => {
			try {
				await job();
			} catch (err) {
				console.warn(err);
			}
			done += 1;
			onProgress(done / jobs.length);
		}));
		this.ready = true;
		onProgress(1);
	}
};
function drawFrame(ctx, s, index, x, y, size, rot = 0) {
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
function facingIndex(aim) {
	const a = (aim + Math.PI) % (Math.PI * 2) - Math.PI;
	if (a > -Math.PI / 4 && a <= Math.PI / 4) return 2;
	if (a > Math.PI / 4 && a <= Math.PI * 3 / 4) return 0;
	if (a < -Math.PI / 4 && a >= -Math.PI * 3 / 4) return 3;
	return 1;
}
var STAT_ZERO = {
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
	shield: 0
};
function addStats(a, b) {
	const o = { ...a };
	for (const k of Object.keys(b)) o[k] = (o[k] ?? 0) + (b[k] ?? 0);
	return o;
}
var RARITY_COLOR = {
	common: "#b8b2a8",
	uncommon: "#7d9a6a",
	rare: "#6a8caa",
	epic: "#9a7ab0",
	legendary: "#c4a15a",
	mythic: "#c45c3a"
};
var STEP = 1 / 60;
function xpToLevel(lv) {
	return Math.floor(14 * Math.pow(lv, 1.32));
}
function rarityRoll(rng, luck) {
	const l = luck / 100;
	const r = rng();
	if (r < .012 + l * .01) return "mythic";
	if (r < .04 + l * .03) return "legendary";
	if (r < .12 + l * .05) return "epic";
	if (r < .28 + l * .08) return "rare";
	if (r < .55 + l * .1) return "uncommon";
	return "common";
}
var Emberwake = class {
	screen = "title";
	returnTo = "title";
	loadP = 0;
	toast = "";
	toastT = 0;
	meta = loadMeta();
	sprites = new Sprites();
	input = new Input();
	audio = new GameAudio();
	canvas = null;
	ctx = null;
	w = 1280;
	h = 720;
	acc = 0;
	last = 0;
	trauma = 0;
	hitstop = 0;
	raf = 0;
	booted = false;
	seed = "";
	classId = null;
	heat = 0;
	daily = false;
	endless = false;
	floor = null;
	player = this.blankPlayer();
	enemies = [];
	bullets = [];
	pickups = [];
	particles = [];
	floats = [];
	cam = {
		x: WORLD_W / 2,
		y: 416
	};
	wave = 0;
	waveT = 0;
	fireCd = 0;
	skillCd = 0;
	dashCd = 0;
	dashT = 0;
	invuln = 0;
	time = 0;
	kills = 0;
	inventory = [];
	upgrades = [];
	choices = [];
	shop = [];
	chest = null;
	shrine = "";
	credits = 0;
	listeners = /* @__PURE__ */ new Set();
	rng = mulberry32(1);
	lootRng = mulberry32(2);
	hudAcc = 0;
	hudCache = null;
	blankPlayer() {
		return {
			x: WORLD_W / 2,
			y: 416,
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
			walk: 0
		};
	}
	subscribe(fn) {
		this.listeners.add(fn);
		return () => this.listeners.delete(fn);
	}
	emit() {
		this.hudCache = null;
		for (const f of this.listeners) f();
	}
	async boot(canvas) {
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
		if (!this.sprites.ready) this.sprites.load((p) => {
			this.loadP = p;
			this.emit();
		});
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
	loop = (t) => {
		this.raf = requestAnimationFrame(this.loop);
		const dt = Math.min(.1, (t - (this.last || t)) / 1e3);
		this.last = t;
		this.acc += dt;
		while (this.acc >= STEP) {
			this.acc -= STEP;
			if (this.hitstop > 0) this.hitstop -= STEP;
			else this.step(STEP);
		}
		this.draw();
	};
	step(dt) {
		if (this.toastT > 0) {
			this.toastT -= dt;
			if (this.toastT <= 0) this.toast = "";
		}
		this.audio.tick(dt);
		if (this.screen === "credits") {
			this.credits += dt * 28;
			this.hudAcc += dt;
			if (this.hudAcc > .05) {
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
	stats() {
		let s = { ...CLASS_BY_ID[this.classId ?? "ashguard"].stats };
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
		if (this.classId === "ironfist") s = addStats(s, {
			damage: missing * 12,
			fireRate: missing * .6
		});
		return s;
	}
	beginRun(opts) {
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
		this.enterRoom(this.floor.rooms[this.floor.current], true);
		this.screen = "playing";
		this.say("The crypt remembers you.");
		this.emit();
		return true;
	}
	loadFloor(index) {
		const idx = this.endless && index >= BIOMES.length ? (index - 1) % (BIOMES.length - 1) + 1 : index;
		this.floor = generateFloor(this.seed, idx, this.heat);
		this.enterRoom(this.floor.rooms[this.floor.startId], false);
	}
	enterRoom(room, fromSave) {
		if (!this.floor) return;
		this.floor.current = room.id;
		room.seen = true;
		this.enemies = [];
		this.bullets = [];
		this.pickups = [];
		this.wave = 0;
		this.waveT = room.cleared ? 0 : .6;
		this.player.x = WORLD_W / 2;
		this.player.y = 416;
		this.cam.x = this.player.x;
		this.cam.y = this.player.y;
		if (room.kind === "shop" && !fromSave) this.openShop();
		if (room.kind === "treasure" && !fromSave) this.openChest();
		if (room.kind === "shrine" && !fromSave) this.openShrine();
		if (room.kind === "rest" && !fromSave) {
			this.player.hp = Math.min(this.player.maxHp, this.player.hp + this.player.maxHp * .35);
			this.say("You rest. The ash settles.");
			room.cleared = true;
		}
		this.flushSave();
		this.emit();
	}
	currentRoom() {
		if (!this.floor) return null;
		return this.floor.rooms[this.floor.current] ?? null;
	}
	stepPlay(dt) {
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
				if (this.meta.settings.autoAim || !this.input.mouse.down && Math.hypot(ax, ay) < 8) {
					let best = null;
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
			this.dashT = .18;
			this.dashCd = Math.max(.45, .9 * (1 - st.cdr));
			this.invuln = Math.max(this.invuln, .18);
			this.audio.dash();
			this.burst(this.player.x, this.player.y, "#ece6dc", 10);
		}
		if (this.input.consumeSkill() && this.skillCd <= 0) this.castSkill();
		const hostiles = this.enemies.some((e) => !e.dead);
		if ((this.input.firing() || this.input.aimStick.active || this.meta.settings.autoFire && hostiles) && this.fireCd <= 0) this.fire();
		if (!room.cleared && (room.kind === "combat" || room.kind === "elite" || room.kind === "boss" || room.kind === "start")) {
			if (this.enemies.filter((e) => !e.dead).length === 0) {
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
						this.waveT = .8;
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
		if (this.hudAcc > .12) {
			this.hudAcc = 0;
			this.emit();
		}
	}
	tryDoors() {
		const room = this.currentRoom();
		if (!room || !this.floor) return;
		for (const d of [
			"n",
			"e",
			"s",
			"w"
		]) {
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
				this.enterRoom(this.floor.rooms[nid], false);
				return;
			}
		}
	}
	fire() {
		const st = this.stats();
		const cls = CLASS_BY_ID[this.classId];
		this.fireCd = 1 / Math.max(.4, st.fireRate);
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
				life: melee ? .16 : .9,
				r: melee ? 16 * st.area : 8 * st.area,
				friendly: true,
				kind: cls.proj,
				rot: a
			});
		}
	}
	castSkill() {
		const cls = CLASS_BY_ID[this.classId];
		const st = this.stats();
		this.skillCd = Math.max(3.5, 8 * (1 - st.cdr));
		this.audio.dash();
		this.trauma = Math.min(1, this.trauma + .45);
		if (cls.id === "ashguard" || cls.id === "dawnwarden") {
			this.player.shield += 30 + st.shield * .3;
			this.invuln = .6;
			for (const e of this.enemies) {
				if (e.dead) continue;
				const dx = e.x - this.player.x;
				const dy = e.y - this.player.y;
				if (dx * dx + dy * dy < 32400) this.hurtEnemy(e, st.damage * 1.4, true);
			}
		} else if (cls.id === "pyrelock" || cls.id === "ironfist" || cls.id === "stormcall") {
			for (const e of this.enemies) {
				if (e.dead) continue;
				const dx = e.x - this.player.x;
				const dy = e.y - this.player.y;
				if (dx * dx + dy * dy < 44100) this.hurtEnemy(e, st.damage * 2.2, true);
			}
			this.burst(this.player.x, this.player.y, "#c45c3a", 28);
		} else if (cls.id === "gravekin") for (let i = 0; i < 8; i++) {
			const a = this.player.aim + (i - 3.5) * .18;
			this.bullets.push({
				x: this.player.x,
				y: this.player.y,
				vx: Math.cos(a) * 420,
				vy: Math.sin(a) * 420,
				dmg: st.damage * .8,
				pierce: 2,
				life: .8,
				r: 8,
				friendly: true,
				kind: "bone",
				rot: a
			});
		}
		else if (cls.id === "nightveil") {
			this.dashT = .28;
			this.invuln = .28;
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
	spawnWave(room) {
		const biome = this.floor.biome.id;
		const local = ENEMIES.filter((e) => !e.boss && e.biomes.includes(biome));
		const use = local.length ? local : ENEMIES.filter((e) => !e.boss && !e.elite);
		if (room.kind === "start") {
			for (let i = 0; i < 5; i++) {
				const p = spawnPoint(this.rng, 170);
				this.spawnEnemy(i % 2 ? "ash-rat" : "crypt-bat", p.x, p.y, false);
			}
			return;
		}
		const n = 6 + this.floor.index * 2 + this.wave * 2 + this.heat + (room.kind === "elite" ? 3 : 0);
		if (room.kind === "boss") {
			const boss = ENEMY_BY_ID[this.floor.biome.boss];
			if (boss) this.spawnEnemy(boss.id, WORLD_W / 2, 336, false);
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
			let y = 416;
			if (edge === 0) {
				x = randRange(this.rng, 80, WORLD_W - 80);
				y = 90;
			} else if (edge === 1) {
				x = WORLD_W - 90;
				y = randRange(this.rng, 80, 752);
			} else if (edge === 2) {
				x = randRange(this.rng, 80, WORLD_W - 80);
				y = 742;
			} else {
				x = 90;
				y = randRange(this.rng, 80, 752);
			}
			this.spawnEnemy(def.id, x, y, elite);
		}
	}
	spawnEnemy(id, x, y, elite) {
		const def = ENEMY_BY_ID[id];
		if (!def) return;
		const heatHp = 1 + this.heat * .12;
		const hp = def.hp * heatHp * (elite ? 2.2 : 1) * (1 + this.floor.index * .18);
		this.enemies.push({
			x,
			y,
			r: def.radius * (elite ? 1.2 : 1),
			hp,
			max: hp,
			vx: 0,
			vy: 0,
			def,
			cd: randRange(this.rng, .2, 1),
			flash: 0,
			elite: elite || !!def.elite,
			dead: false,
			aim: 0
		});
		if (!this.meta.discovered.includes(id)) {
			this.meta.discovered = [...this.meta.discovered, id];
			if (this.meta.discovered.length >= 50) this.grant("codex50");
		}
	}
	stepEnemies(dt, st) {
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
			const spd = e.def.speed * (1 + this.heat * .08);
			const b = e.def.behavior;
			if (b === "kite" && dist < 180) {
				e.vx = -nx * spd;
				e.vy = -ny * spd;
			} else if (b === "circle") {
				e.vx = -ny * spd + nx * spd * .3;
				e.vy = nx * spd + ny * spd * .3;
			} else if (b === "fly") {
				e.vx = nx * spd * 1.15;
				e.vy = ny * spd * 1.15;
			} else if (b === "tank") {
				e.vx = nx * spd * .85;
				e.vy = ny * spd * .85;
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
					e.vx += ox / od * 40;
					e.vy += oy / od * 40;
				}
			}
			e.x += e.vx * dt;
			e.y += e.vy * dt;
			const cl = clampToRoom(e.x, e.y, e.r);
			e.x = cl.x;
			e.y = cl.y;
			e.cd -= dt;
			if ((b === "shoot" || b === "kite" || b === "summon" || e.def.boss) && e.cd <= 0 && dist < (e.def.shootRange ?? 280)) {
				e.cd = (e.def.shootCd ?? 1.4) * (e.def.boss ? .85 : 1);
				const a = e.aim;
				this.bullets.push({
					x: e.x,
					y: e.y,
					vx: Math.cos(a) * 220,
					vy: Math.sin(a) * 220,
					dmg: e.def.damage * .7,
					pierce: 0,
					life: 2.2,
					r: 7,
					friendly: false,
					kind: "fireball",
					rot: a
				});
				if (b === "summon" && this.enemies.length < 40) this.spawnEnemy("ash-rat", e.x + 20, e.y, false);
			}
			if (b === "heal" && e.cd <= 0) {
				e.cd = 2;
				for (const o of this.enemies) {
					if (o.dead) continue;
					if ((o.x - e.x) ** 2 + (o.y - e.y) ** 2 < 25600) o.hp = Math.min(o.max, o.hp + 12);
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
	stepBullets(dt) {
		for (const b of this.bullets) {
			b.x += b.vx * dt;
			b.y += b.vy * dt;
			b.life -= dt;
			b.rot = Math.atan2(b.vy, b.vx);
			if (!inBounds(b.x, b.y, 4)) b.life = 0;
			if (b.friendly) for (const e of this.enemies) {
				if (e.dead) continue;
				if ((e.x - b.x) ** 2 + (e.y - b.y) ** 2 < (e.r + b.r) ** 2) {
					this.hurtEnemy(e, b.dmg, true);
					b.pierce -= 1;
					if (b.pierce < 0) b.life = 0;
				}
			}
			else if (this.invuln <= 0) {
				if ((this.player.x - b.x) ** 2 + (this.player.y - b.y) ** 2 < (18 + b.r) ** 2) {
					this.hurtPlayer(b.dmg);
					b.life = 0;
				}
			}
		}
		this.bullets = this.bullets.filter((b) => b.life > 0);
	}
	stepPickups(dt, st) {
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
	hurtEnemy(e, dmg, critable) {
		const st = this.player.stats;
		let d = dmg;
		let crit = false;
		if (critable && this.rng() < st.critChance) {
			d *= st.critDamage;
			crit = true;
		}
		e.hp -= d;
		e.flash = .08;
		this.hitstop = Math.max(this.hitstop, crit ? .045 : .02);
		this.trauma = Math.min(1, this.trauma + (crit ? .22 : .08));
		this.floats.push({
			x: e.x,
			y: e.y - 20,
			t: .6,
			text: `${Math.round(d)}`,
			color: crit ? "#c4a15a" : "#ece6dc"
		});
		this.audio.hit();
		if (st.lifesteal) this.player.hp = Math.min(this.player.maxHp, this.player.hp + d * st.lifesteal);
		if (e.hp <= 0) this.killEnemy(e, st);
	}
	killEnemy(e, st) {
		if (e.dead) return;
		e.dead = true;
		e.flash = .12;
		this.kills += 1;
		this.meta.kills += 1;
		this.burst(e.x, e.y, "#c45c3a", e.def.boss ? 36 : 12);
		this.pickups.push({
			x: e.x,
			y: e.y,
			kind: "xp",
			val: e.def.xp * st.xpGain,
			t: 0
		});
		if (chance(this.lootRng, .55)) this.pickups.push({
			x: e.x + 8,
			y: e.y,
			kind: "gold",
			val: e.def.gold,
			t: 0
		});
		if (chance(this.lootRng, .04 + st.luck / 400)) {
			const it = this.rollItem();
			this.pickups.push({
				x: e.x,
				y: e.y - 10,
				kind: "item",
				val: 0,
				item: it.id,
				t: 0
			});
		}
		if (e.def.behavior === "split") for (let i = 0; i < 2; i++) this.spawnEnemy("ash-rat", e.x + randRange(this.rng, -16, 16), e.y + randRange(this.rng, -16, 16), false);
		if (e.elite) this.grant("elite");
	}
	hurtPlayer(raw) {
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
		this.invuln = .35;
		this.trauma = Math.min(1, this.trauma + .4);
		this.audio.hurt();
		this.burst(this.player.x, this.player.y, "#c45c3a", 8);
	}
	gainXp(v) {
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
		this.choices = pool.slice(0, 3).map((u) => ({
			kind: "upgrade",
			upgrade: u
		}));
		this.screen = "levelup";
		this.emit();
	}
	pickChoice(i) {
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
		this.shop = [
			0,
			1,
			2,
			3
		].map(() => {
			const it = this.rollItem();
			return {
				item: it,
				price: {
					common: 18,
					uncommon: 32,
					rare: 48,
					epic: 70,
					legendary: 110,
					mythic: 160
				}[it.rarity]
			};
		});
		this.screen = "shop";
		this.emit();
	}
	buy(i) {
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
			"Ash rains. Gain 40 ashes, lose a third of your gold."
		];
		this.shrine = pick(this.lootRng, opts);
		this.screen = "shrine";
		this.emit();
	}
	useShrine() {
		if (this.shrine.includes("mends")) {
			this.player.gold = Math.max(0, this.player.gold - 20);
			this.player.hp = this.player.maxHp;
		} else if (this.shrine.includes("pact")) this.upgrades.push("glass");
		else if (this.shrine.includes("names")) this.upgrades.push("luck");
		else {
			this.meta.ashes += 40;
			this.player.gold = Math.floor(this.player.gold * .66);
		}
		this.grant("shrine");
		const room = this.currentRoom();
		if (room) room.cleared = true;
		this.screen = "playing";
		this.flushSave();
		saveMeta(this.meta);
		this.emit();
	}
	rollItem(min) {
		const st = this.player.stats;
		let r = rarityRoll(this.lootRng, st.luck);
		const order = [
			"common",
			"uncommon",
			"rare",
			"epic",
			"legendary",
			"mythic"
		];
		if (min && order.indexOf(r) < order.indexOf(min)) r = min;
		const pool = ITEMS.filter((i) => i.rarity === r);
		return pick(this.lootRng, pool.length ? pool : ITEMS);
	}
	giveItem(id) {
		this.inventory.push(id);
		if (!this.meta.collected.includes(id)) this.meta.collected = [...this.meta.collected, id];
		if (this.inventory.length >= 20) this.grant("stash");
		if (this.meta.collected.length >= 100) this.grant("loot100");
		const it = ITEM_BY_ID[id];
		if (it) this.say(it.name);
		saveMeta(this.meta);
	}
	burst(x, y, color, n) {
		for (let i = 0; i < n; i++) {
			const a = Math.random() * Math.PI * 2;
			const s = 40 + Math.random() * 120;
			this.particles.push({
				x,
				y,
				vx: Math.cos(a) * s,
				vy: Math.sin(a) * s,
				life: .35 + Math.random() * .3,
				max: .5,
				size: 2 + Math.random() * 3,
				color
			});
		}
	}
	say(t) {
		this.toast = t;
		this.toastT = 2.4;
		this.emit();
	}
	grant(id) {
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
		const reward = 12 + this.floor.index * 8 + Math.floor(this.kills / 8) + this.heat * 6;
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
	buyTalent(id) {
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
	unlockClass(id) {
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
		saveRun({
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
			shrineUsed: []
		});
		saveMeta(this.meta);
	}
	dailySeed() {
		const d = /* @__PURE__ */ new Date();
		return `Daily-${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
	}
	draw() {
		const ctx = this.ctx;
		if (!ctx) return;
		ctx.fillStyle = "#0c0b0a";
		ctx.fillRect(0, 0, this.w, this.h);
		if (this.screen === "loading" || this.screen === "title" || this.screen === "sanctum" || this.screen === "class" || this.screen === "codex" || this.screen === "settings" || this.screen === "credits" || this.screen === "gameover" || this.screen === "victory") {
			this.drawBackdrop(ctx);
			return;
		}
		this.drawWorld(ctx);
	}
	drawBackdrop(ctx) {
		const img = this.sprites.title;
		if (img) {
			const scale = Math.max(this.w / img.width, this.h / img.height);
			const dw = img.width * scale;
			const dh = img.height * scale;
			ctx.globalAlpha = .55;
			ctx.drawImage(img, (this.w - dw) / 2, (this.h - dh) / 2, dw, dh);
			ctx.globalAlpha = 1;
		}
		ctx.fillStyle = "rgba(12,11,10,0.45)";
		ctx.fillRect(0, 0, this.w, this.h);
	}
	drawWorld(ctx) {
		const shake = this.meta.settings.reducedMotion ? 0 : this.trauma * this.trauma * 14 * this.meta.settings.shake;
		const ox = (Math.random() - .5) * shake;
		const oy = (Math.random() - .5) * shake;
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
				ctx.fillRect(0, 0, WORLD_W, 832);
			}
		} else {
			ctx.fillStyle = "#1a1612";
			ctx.fillRect(0, 0, WORLD_W, 832);
		}
		ctx.fillStyle = biome?.ambient ?? "rgba(12,11,10,0.22)";
		ctx.globalAlpha = .28;
		ctx.fillRect(0, 0, WORLD_W, 832);
		ctx.globalAlpha = 1;
		const t = 64;
		if (wall) {
			const wpat = ctx.createPattern(wall, "repeat");
			if (wpat) ctx.fillStyle = wpat;
		} else ctx.fillStyle = "#2a241e";
		ctx.fillRect(0, 0, WORLD_W, t);
		ctx.fillRect(0, 768, WORLD_W, t);
		ctx.fillRect(0, 0, t, 832);
		ctx.fillRect(WORLD_W - t, 0, t, 832);
		if (room) {
			for (const d of [
				"n",
				"e",
				"s",
				"w"
			]) {
				if (room.doors[d] == null) continue;
				const p = doorWorld(d);
				const gap = 52;
				if (tile) {
					const pat = ctx.createPattern(tile, "repeat");
					if (pat) ctx.fillStyle = pat;
				} else ctx.fillStyle = "#1a1612";
				if (d === "n" || d === "s") ctx.fillRect(p.x - gap, p.y - t * .55, 104, t * 1.1);
				else ctx.fillRect(p.x - t * .55, p.y - gap, t * 1.1, 104);
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
				if (room.kind === "treasure") drawFrame(ctx, this.sprites.props, room.cleared ? 1 : 0, WORLD_W / 2, 416, 72);
				if (room.kind === "shrine") drawFrame(ctx, this.sprites.props, 2, WORLD_W / 2, 416, 72);
				if (room.kind === "shop") drawFrame(ctx, this.sprites.props, 3, WORLD_W / 2, 416, 80);
				if (room.kind === "rest") drawFrame(ctx, this.sprites.props, 2, WORLD_W / 2, 436, 64);
			}
		}
		for (const p of this.pickups) {
			ctx.fillStyle = p.kind === "xp" ? "#7d9a6a" : p.kind === "gold" ? "#c4a15a" : p.kind === "hp" ? "#c45c3a" : "#d8d2c8";
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.kind === "item" ? 8 : 5, 0, Math.PI * 2);
			ctx.fill();
		}
		for (const b of this.bullets) this.drawBullet(ctx, b);
		for (const e of this.enemies) {
			if (e.dead && e.flash <= 0) continue;
			const pack = this.sprites.packs[e.def.pack];
			const size = e.def.boss ? 110 : e.elite ? 64 : 48;
			ctx.save();
			ctx.fillStyle = "rgba(0,0,0,0.35)";
			ctx.beginPath();
			ctx.ellipse(e.x, e.y + size * .32, size * .28, 7, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = e.elite ? "rgba(196,161,90,0.75)" : "rgba(196,92,58,0.55)";
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.arc(e.x, e.y + 2, size * .38, 0, Math.PI * 2);
			ctx.stroke();
			if (e.flash > 0) ctx.filter = "brightness(2.2)";
			if (e.def.color) ctx.globalAlpha = .95;
			if (pack) drawFrame(ctx, pack, e.def.sprite, e.x, e.y, size, 0);
			else {
				ctx.fillStyle = e.def.color ?? "#8a4a3a";
				ctx.beginPath();
				ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.restore();
			const bw = size * .7;
			ctx.fillStyle = "#2c2925";
			ctx.fillRect(e.x - bw / 2, e.y - size * .55, bw, 4);
			ctx.fillStyle = e.elite ? "#c4a15a" : "#c45c3a";
			ctx.fillRect(e.x - bw / 2, e.y - size * .55, bw * (e.hp / e.max), 4);
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
			if (this.invuln > 0) ctx.globalAlpha = .55;
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
			ctx.fillText(f.text, f.x, f.y - (.6 - f.t) * 28);
			ctx.globalAlpha = 1;
		}
		const g = ctx.createRadialGradient(this.player.x, this.player.y, 80, this.player.x, this.player.y, 520);
		g.addColorStop(0, "rgba(0,0,0,0)");
		g.addColorStop(1, "rgba(8,7,6,0.55)");
		ctx.fillStyle = g;
		ctx.fillRect(-40, -40, WORLD_W + 80, 912);
		ctx.restore();
	}
	drawBullet(ctx, b) {
		if (b.kind === "slash") {
			ctx.save();
			ctx.translate(b.x, b.y);
			ctx.rotate(b.rot);
			ctx.strokeStyle = b.friendly ? "rgba(236,230,220,0.92)" : "rgba(196,92,58,0.9)";
			ctx.lineWidth = 3.5;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.arc(0, 0, b.r * 1.15, -.75, .75);
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
		if (fx) drawFrame(ctx, fx, Math.floor((1 - b.life) * 4) % 4, b.x, b.y, Math.max(16, b.r * 2.4), b.rot);
	}
	hud() {
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
			dashMax: .9,
			choices: this.choices,
			shop: this.shop,
			chest: this.chest,
			shrine: this.shrine,
			inventory: this.inventory.map((id) => ITEM_BY_ID[id]).filter(Boolean),
			seed: this.seed,
			heat: this.heat,
			minimap: (this.floor?.rooms ?? []).map((r) => ({
				gx: r.gx,
				gy: r.gy,
				kind: r.kind,
				current: r.id === this.floor?.current,
				cleared: r.cleared,
				seen: r.seen
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
			credits: this.credits
		};
		return this.hudCache;
	}
	installProbe() {
		const self = this;
		window.__controlsTest = {
			getYaw: () => Math.atan2(-self.player.vy, self.player.vx || 1e-4),
			getSpeed: () => Math.hypot(self.player.vx, self.player.vy),
			setKeys: (codes) => self.input.setKeys(codes),
			getPos: () => ({
				x: self.player.x,
				y: self.player.y
			})
		};
	}
};
var game = new Emberwake();
function Panel({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-xl border border-border bg-surface/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ${className}`,
		children
	});
}
function Btn({ children, onClick, primary, disabled, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled,
		onClick: () => {
			game.unlock();
			game.audio.ui();
			onClick();
		},
		className: `min-h-11 rounded-md px-4 text-sm font-medium tracking-wide transition-transform duration-150 enabled:active:scale-[0.98] disabled:opacity-40 ${primary ? "bg-accent text-accent-fg" : "border border-border bg-raised text-fg"} ${wide ? "w-full" : ""}`,
		children
	});
}
function Icon({ sheet, index, size = 40 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block shrink-0 rounded-sm bg-raised",
		style: {
			width: size,
			height: size,
			backgroundImage: `url(/game/icons/${sheet}.png)`,
			backgroundSize: `${size * 4}px ${size * 4}px`,
			backgroundPosition: `${-(index % 4) * size}px ${-Math.floor(index / 4) * size}px`
		}
	});
}
function Overlay({ hud }) {
	const [seed, setSeed] = (0, import_react.useState)(newSeed());
	const [heat, setHeat] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)("ashguard");
	const [tab, setTab] = (0, import_react.useState)("rites");
	const hasRun = typeof window !== "undefined" && !!loadRun();
	(0, import_react.useEffect)(() => {
		const onVis = () => {
			if (document.hidden) game.flushSave();
		};
		document.addEventListener("visibilitychange", onVis);
		return () => document.removeEventListener("visibilitychange", onVis);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 flex flex-col",
		children: [
			hud.screen === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { p: hud.loadP }),
			hud.screen === "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				hasRun,
				loadP: hud.loadP,
				onContinue: () => {
					game.unlock();
					if (!game.resumeRun()) game.screen = "sanctum";
					game.emit();
				}
			}),
			hud.screen === "sanctum" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sanctum, { hud }),
			hud.screen === "class" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassSelect, {
				hud,
				seed,
				setSeed,
				heat,
				setHeat,
				picked,
				setPicked
			}),
			hud.screen === "codex" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Codex, {
				hud,
				tab,
				setTab
			}),
			hud.screen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { hud }),
			hud.screen === "credits" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credits, { y: hud.credits }),
			hud.screen === "playing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudBar, { hud }),
			hud.screen === "paused" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { hud }),
			hud.screen === "levelup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelUp, { hud }),
			hud.screen === "shop" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shop, { hud }),
			hud.screen === "chest" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chest, { hud }),
			hud.screen === "shrine" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shrine, { hud }),
			hud.screen === "gameover" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameOver, { hud }),
			hud.screen === "victory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Victory, { hud }),
			hud.toast && hud.screen !== "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-24 left-1/2 z-20 -translate-x-1/2 rounded-md border border-border bg-surface/90 px-4 py-2 text-sm text-fg",
				children: hud.toast
			}),
			(hud.screen === "playing" || hud.screen === "paused") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Touch, { hud })
		]
	});
}
function Loading({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto flex h-full flex-col items-center justify-center gap-6 bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl tracking-display text-fg",
				children: "Emberwake"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "The kiln remembers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 w-56 overflow-hidden rounded-full bg-raised",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-300",
					style: { width: `${Math.round(p * 100)}%` }
				})
			})
		]
	});
}
function Title({ hasRun, loadP, onContinue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto flex h-full flex-col items-center justify-end gap-4 overflow-y-auto bg-gradient-to-t from-bg via-bg/70 to-transparent px-6 pb-8 pt-16 sm:gap-5 sm:pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-70",
				src: "/game/intro.mp4",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-display text-fg sm:text-5xl md:text-7xl",
				children: "Emberwake"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-center text-sm text-muted",
				children: "Eight wardens. Fifty hosts. Five hundred relics. A crypt that never repeats."
			}),
			loadP < 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 w-48 overflow-hidden rounded-full bg-raised",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent",
					style: { width: `${Math.round(loadP * 100)}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full max-w-sm flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: true,
						wide: true,
						onClick: () => {
							game.screen = "class";
							game.emit();
						},
						children: "New descent"
					}),
					hasRun && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: onContinue,
						children: "Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => {
							game.screen = "sanctum";
							game.emit();
						},
						children: "Sanctum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							wide: true,
							onClick: () => {
								game.screen = "codex";
								game.emit();
							},
							children: "Codex"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							wide: true,
							onClick: () => game.openSettings(),
							children: "Settings"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => {
							game.credits = 0;
							game.screen = "credits";
							game.emit();
						},
						children: "Credits"
					})
				]
			})
		]
	});
}
function Sanctum({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full flex-col overflow-auto bg-bg/80 p-5 pt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-3xl flex-col gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-fg",
						children: "Sanctum"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Spend ash. Temper the next descent."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm text-accent",
						children: [hud.ashes, " ash"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: TALENTS.map((t) => {
						const r = hud.meta.talents[t.id] ?? 0;
						const cost = t.cost * (r + 1);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "flex items-center justify-between gap-3 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									t.desc,
									" ",
									r,
									"/",
									t.max
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								disabled: r >= t.max || hud.ashes < cost,
								onClick: () => game.buyTalent(t.id),
								children: r >= t.max ? "Max" : `${cost}`
							})]
						}, t.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: true,
						wide: true,
						onClick: () => {
							game.screen = "class";
							game.emit();
						},
						children: "Descend"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => {
							game.screen = "title";
							game.emit();
						},
						children: "Back"
					})]
				})
			]
		})
	});
}
function ClassSelect({ hud, seed, setSeed, heat, setHeat, picked, setPicked }) {
	const c = CLASS_BY_ID[picked];
	const locked = !hud.meta.unlocked.includes(picked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full flex-col overflow-auto bg-bg/85 p-4 pt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-5xl flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "Choose a warden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 md:grid-cols-4",
					children: hud.classes.map((cl) => {
						const open = hud.meta.unlocked.includes(cl.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPicked(cl.id),
							className: `overflow-hidden rounded-lg border text-left ${picked === cl.id ? "border-accent" : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: `/game/portraits/${cl.id}.jpg`,
								alt: "",
								className: `h-28 w-full object-cover ${open ? "" : "grayscale"}`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-surface px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: cl.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: open ? cl.role : `${cl.unlock} ash`
								})]
							})]
						}, cl.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "flex flex-col gap-3 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/game/portraits/${c.id}.jpg`,
						alt: "",
						className: "h-40 w-full rounded-md object-cover md:w-56"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: c.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									c.weapon,
									" · ",
									c.skill,
									": ",
									c.skillDesc
								]
							}),
							locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
									onClick: () => game.unlockClass(c.id),
									children: [
										"Unlock for ",
										c.unlock,
										" ash"
									]
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-muted",
							children: ["Seed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: seed,
								onChange: (e) => setSeed(e.target.value),
								className: "mt-1 min-h-11 w-full rounded-md border border-border bg-raised px-3 text-sm text-fg"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-muted",
							children: [
								"Heat ",
								heat,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 0,
									max: 15,
									value: heat,
									onChange: (e) => setHeat(Number(e.target.value)),
									className: "mt-3 w-full"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-subtle",
									children: HEAT.map((h) => h.name).slice(0, Math.min(8, heat || 1)).join(" · ")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-end gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
									primary: true,
									disabled: locked,
									onClick: () => game.beginRun({
										classId: picked,
										seed,
										heat,
										daily: false
									}),
									children: "Descend"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
									disabled: locked,
									onClick: () => game.beginRun({
										classId: picked,
										seed: game.dailySeed(),
										heat,
										daily: true
									}),
									children: "Daily rite"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
									disabled: locked,
									onClick: () => game.beginRun({
										classId: picked,
										seed,
										heat,
										daily: false,
										endless: true
									}),
									children: "Endless crypts"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					onClick: () => {
						game.screen = "title";
						game.emit();
					},
					children: "Back"
				})
			]
		})
	});
}
function HudBar({ hud }) {
	const hp = Math.max(0, hud.hp / Math.max(1, hud.maxHp));
	const cls = hud.classId ? CLASS_BY_ID[hud.classId] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute left-3 top-3 right-3 flex flex-col gap-2 md:right-auto md:w-80",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-surface/80 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm text-fg",
							children: cls?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono",
							children: [
								hud.floorName,
								" · F",
								hud.floor
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 overflow-hidden rounded-full bg-raised",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-ember",
							style: { width: `${hp * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 h-1.5 overflow-hidden rounded-full bg-raised",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-ok",
							style: { width: `${hud.xp / Math.max(1, hud.xpTo) * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between font-mono text-[11px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								Math.ceil(hud.hp),
								"/",
								Math.ceil(hud.maxHp)
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Lv ", hud.level] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [hud.gold, "g"] }),
							hud.waves > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Wave ",
								hud.wave,
								"/",
								hud.waves
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-3 font-mono text-[11px] text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Dash ", hud.dash > .05 ? hud.dash.toFixed(1) : "ready"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								cls?.skill ?? "Skill",
								" ",
								hud.skillCd > .05 ? hud.skillCd.toFixed(1) : "ready"
							] }),
							hud.heat > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Heat ", hud.heat] })
						]
					}),
					hud.inventory.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1",
						children: hud.inventory.slice(0, 10).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							sheet: it.iconSheet,
							index: it.iconIndex,
							size: 22
						}, it.id + i))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto absolute right-3 top-3 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				onClick: () => {
					game.screen = "paused";
					game.flushSave();
					game.emit();
				},
				children: "Pause"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute right-3 top-3 hidden md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimap, { rooms: hud.minimap })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-[11px] text-subtle md:block",
			children: "WASD move · mouse aim · click fire · Space dash · Q skill · Esc pause"
		})
	] });
}
function Minimap({ rooms }) {
	if (!rooms.length) return null;
	const s = 14;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md border border-border bg-surface/80 p-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			style: {
				width: 126,
				height: 126
			},
			children: rooms.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute rounded-[2px]",
				style: {
					width: 11,
					height: 11,
					left: (r.gx + 4) * s,
					top: (r.gy + 4) * s,
					background: r.current ? "#ece6dc" : r.cleared ? "#7d9a6a" : r.seen ? "#6f6962" : "#2c2925"
				}
			}, i))
		})
	});
}
function Pause({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Paused"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: [
						"Seed ",
						hud.seed,
						" · Heat ",
						hud.heat,
						" · autosaved"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							primary: true,
							wide: true,
							onClick: () => {
								game.screen = "playing";
								game.emit();
							},
							children: "Resume"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							wide: true,
							onClick: () => game.openSettings(),
							children: "Settings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							wide: true,
							onClick: () => {
								game.flushSave();
								game.screen = "title";
								game.emit();
							},
							children: "Save and quit"
						})
					]
				})
			]
		})
	});
}
function LevelUp({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-end justify-center bg-bg/50 p-4 pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid w-full max-w-3xl gap-3 md:grid-cols-3",
			children: hud.choices.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => game.pickChoice(i),
				className: "rounded-lg border border-border bg-surface p-4 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-muted",
						children: c.upgrade?.rarity
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: c.upgrade?.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: c.upgrade?.desc
					})
				]
			}, i))
		})
	});
}
function Shop({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Ashmarket"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [hud.gold, " gold"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-2",
					children: hud.shop.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => game.buy(i),
						className: "flex items-center gap-3 rounded-md border border-border bg-raised p-3 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								sheet: s.item.iconSheet,
								index: s.item.iconIndex
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									style: { color: RARITY_COLOR[s.item.rarity] },
									children: s.item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: s.item.desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-sm",
								children: [s.price, "g"]
							})
						]
					}, s.item.id + i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => game.closeShop(),
						children: "Leave"
					})
				})
			]
		})
	});
}
function Chest({ hud }) {
	const it = hud.chest;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-sm text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "A chest"
				}),
				it && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							sheet: it.iconSheet,
							index: it.iconIndex,
							size: 64
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: { color: RARITY_COLOR[it.rarity] },
							children: it.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: it.desc
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: true,
						wide: true,
						onClick: () => game.takeChest(),
						children: "Take it"
					})
				})
			]
		})
	});
}
function Shrine({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Shrine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: hud.shrine
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: true,
						wide: true,
						onClick: () => game.useShrine(),
						children: "Accept"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => {
							const room = game.currentRoom();
							if (room) room.cleared = true;
							game.screen = "playing";
							game.emit();
						},
						children: "Walk on"
					})]
				})
			]
		})
	});
}
function GameOver({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/80 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "Fallen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						hud.kills,
						" slain · ",
						Math.floor(hud.time),
						"s · Floor ",
						hud.floor
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: true,
						wide: true,
						onClick: () => {
							game.screen = "class";
							game.emit();
						},
						children: "Descend again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => {
							game.screen = "title";
							game.emit();
						},
						children: "Title"
					})]
				})
			]
		})
	});
}
function Victory({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/80 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "The crown cools"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"You walked out. Heat ",
						hud.heat,
						". ",
						hud.kills,
						" slain."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: true,
						wide: true,
						onClick: () => {
							if (!hud.classId) return;
							game.beginRun({
								classId: hud.classId,
								seed: hud.seed + "+e",
								heat: hud.heat,
								daily: false,
								endless: true
							});
						},
						children: "Endless crypts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => {
							game.credits = 0;
							game.screen = "credits";
							game.emit();
						},
						children: "Credits"
					})]
				})
			]
		})
	});
}
function Credits({ y }) {
	const lines = [
		"Emberwake",
		"A crypt of ash and names",
		"",
		"Wardens",
		"Ashguard · Cinderbow · Pyrelock · Nightveil",
		"Dawnwarden · Gravekin · Stormcall · Ironfist",
		"",
		"Systems",
		`${ITEMS.length} relics  ·  ${ENEMIES.length} hosts  ·  8 biomes`,
		"Seeded rooms  ·  Heat pacts  ·  Sanctum talents",
		"",
		"With thanks to the long descent:",
		"Isaac, Gungeon, Hades, Survivors, Brotato",
		"",
		"Made with Grok",
		"",
		"The kiln is never empty."
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto relative h-full overflow-hidden bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 text-center",
			style: { transform: `translateY(${220 - y}px)` },
			children: lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mx-auto max-w-md px-4 ${i === 0 ? "font-display text-4xl" : "text-sm text-muted"} py-2`,
				children: l || "\xA0"
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-6 left-1/2 -translate-x-1/2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				onClick: () => {
					game.screen = "title";
					game.emit();
				},
				children: "Title"
			})
		})]
	});
}
function Codex({ hud, tab, setTab }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full flex-col overflow-auto bg-bg p-4 pt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "Codex"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: [
						"rites",
						"bestiary",
						"reliquary"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						primary: tab === t,
						onClick: () => setTab(t),
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2",
					children: [
						tab === "rites" && ACHIEVEMENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: hud.meta.achievements.includes(a.id) ? a.name : "Unknown rite"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: hud.meta.achievements.includes(a.id) ? a.desc : "Not yet."
							})]
						}, a.id)),
						tab === "bestiary" && ENEMIES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "flex items-center justify-between p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: hud.meta.discovered.includes(e.id) ? e.name : "????"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: e.behavior
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-subtle",
								children: e.boss ? "Boss" : e.elite ? "Elite" : "Host"
							})]
						}, e.id)),
						tab === "reliquary" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									hud.collected,
									" / ",
									hud.itemsCount,
									" relics known. ",
									hud.discovered,
									" / ",
									hud.enemiesCount,
									" hosts named."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: ITEMS.filter((i) => hud.meta.collected.includes(i.id)).slice(0, 48).map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
									className: "flex items-center gap-2 p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										sheet: it.iconSheet,
										index: it.iconIndex,
										size: 32
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										style: { color: RARITY_COLOR[it.rarity] },
										children: it.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-subtle",
										children: it.desc
									})] })]
								}, it.id))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => {
							game.screen = "title";
							game.emit();
						},
						children: "Back"
					})
				})
			]
		})
	});
}
function Settings({ hud }) {
	const s = hud.meta.settings;
	const set = (k, v) => {
		game.meta.settings = {
			...s,
			[k]: v
		};
		game.audio.apply(game.meta.settings);
		saveMeta(game.meta);
		game.emit();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto flex h-full items-center justify-center bg-bg/80 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Settings"
				}),
				[
					"master",
					"music",
					"sfx",
					"shake"
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 block text-xs text-muted",
					children: [k, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 1,
						step: .01,
						value: s[k],
						onChange: (e) => set(k, Number(e.target.value)),
						className: "mt-2 w-full"
					})]
				}, k)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: s.autoFire,
						onChange: (e) => set("autoFire", e.target.checked)
					}), "Auto fire"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-2 flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: s.autoAim,
						onChange: (e) => set("autoAim", e.target.checked)
					}), "Auto aim"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-2 flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: s.reducedMotion,
						onChange: (e) => set("reducedMotion", e.target.checked)
					}), "Reduce motion"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						wide: true,
						onClick: () => game.closeSettings(),
						children: "Back"
					})
				})
			]
		})
	});
}
function Touch({ hud }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-x-0 bottom-4 flex items-end justify-between px-4 md:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stick, { on: (x, y, a) => {
				game.input.moveStick = {
					x,
					y,
					active: a
				};
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-14 w-14 rounded-full border border-border bg-surface/80 text-xs",
					onPointerDown: () => {
						game.input.skillPressed = true;
					},
					children: hud.classId ? CLASS_BY_ID[hud.classId].skill : "Skill"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-14 w-14 rounded-full border border-border bg-surface/80 text-xs",
					onPointerDown: () => {
						game.input.dashPressed = true;
					},
					children: "Dash"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stick, { on: (x, y, a) => {
				game.input.aimStick = {
					x,
					y,
					active: a
				};
			} })
		]
	});
}
function Stick({ on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-auto h-28 w-28 rounded-full border border-border bg-surface/50",
		onPointerDown: (e) => {
			const r = e.currentTarget.getBoundingClientRect();
			const handle = (ev) => {
				const x = (ev.clientX - r.left) / r.width * 2 - 1;
				const y = (ev.clientY - r.top) / r.height * 2 - 1;
				const l = Math.hypot(x, y) || 1;
				on(x / Math.max(1, l), y / Math.max(1, l), true);
			};
			handle(e.nativeEvent);
			const up = () => {
				on(0, 0, false);
				window.removeEventListener("pointermove", handle);
				window.removeEventListener("pointerup", up);
			};
			window.addEventListener("pointermove", handle);
			window.addEventListener("pointerup", up);
		}
	});
}
var serverHud = game.hud();
function GameApp() {
	const canvasRef = (0, import_react.useRef)(null);
	const hud = (0, import_react.useSyncExternalStore)((cb) => game.subscribe(cb), () => game.hud(), () => serverHud);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		game.boot(canvas);
		const onHide = () => game.flushSave();
		window.addEventListener("pagehide", onHide);
		return () => window.removeEventListener("pagehide", onHide);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 h-full w-full touch-none",
			style: { touchAction: "none" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, { hud })]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };

import { useEffect, useState } from "react";
import { ACHIEVEMENTS, TALENTS } from "@/game/data/talents";
import { ENEMIES } from "@/game/data/enemies";
import { ITEMS } from "@/game/data/items";
import { game, type Hud } from "@/game/engine";
import { loadRun, saveMeta } from "@/game/save";
import { newSeed } from "@/game/rng";
import { CLASS_BY_ID } from "@/game/data/classes";
import { RARITY_COLOR, type ClassId } from "@/game/types";
import { HEAT } from "@/game/data/biomes";

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

function Btn({
  children,
  onClick,
  primary,
  disabled,
  wide,
}: {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        game.unlock();
        game.audio.ui();
        onClick();
      }}
      className={`min-h-11 rounded-md px-4 text-sm font-medium tracking-wide transition-transform duration-150 enabled:active:scale-[0.98] disabled:opacity-40 ${
        primary ? "bg-accent text-accent-fg" : "border border-border bg-raised text-fg"
      } ${wide ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}

function Icon({ sheet, index, size = 40 }: { sheet: string; index: number; size?: number }) {
  return (
    <span
      className="inline-block shrink-0 rounded-sm bg-raised"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(/game/icons/${sheet}.png)`,
        backgroundSize: `${size * 4}px ${size * 4}px`,
        backgroundPosition: `${-(index % 4) * size}px ${-Math.floor(index / 4) * size}px`,
      }}
    />
  );
}

export function Overlay({ hud }: { hud: Hud }) {
  const [seed, setSeed] = useState(newSeed());
  const [heat, setHeat] = useState(0);
  const [picked, setPicked] = useState<ClassId>("ashguard");
  const [tab, setTab] = useState<"rites" | "bestiary" | "reliquary">("rites");
  const hasRun = typeof window !== "undefined" && !!loadRun();

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) game.flushSave();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col">
      {hud.screen === "loading" && <Loading p={hud.loadP} />}
      {hud.screen === "title" && (
        <Title
          hasRun={hasRun}
          loadP={hud.loadP}
          onContinue={() => {
            game.unlock();
            if (!game.resumeRun()) game.screen = "sanctum";
            game.emit();
          }}
        />
      )}
      {hud.screen === "sanctum" && <Sanctum hud={hud} />}
      {hud.screen === "class" && (
        <ClassSelect
          hud={hud}
          seed={seed}
          setSeed={setSeed}
          heat={heat}
          setHeat={setHeat}
          picked={picked}
          setPicked={setPicked}
        />
      )}
      {hud.screen === "codex" && <Codex hud={hud} tab={tab} setTab={setTab} />}
      {hud.screen === "settings" && <Settings hud={hud} />}
      {hud.screen === "credits" && <Credits y={hud.credits} />}
      {hud.screen === "playing" && <HudBar hud={hud} />}
      {hud.screen === "paused" && <Pause hud={hud} />}
      {hud.screen === "levelup" && <LevelUp hud={hud} />}
      {hud.screen === "shop" && <Shop hud={hud} />}
      {hud.screen === "chest" && <Chest hud={hud} />}
      {hud.screen === "shrine" && <Shrine hud={hud} />}
      {hud.screen === "gameover" && <GameOver hud={hud} />}
      {hud.screen === "victory" && <Victory hud={hud} />}
      {hud.toast && hud.screen !== "loading" && (
        <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 -translate-x-1/2 rounded-md border border-border bg-surface/90 px-4 py-2 text-sm text-fg">
          {hud.toast}
        </div>
      )}
      {(hud.screen === "playing" || hud.screen === "paused") && <Touch hud={hud} />}
    </div>
  );
}

function Loading({ p }: { p: number }) {
  return (
    <div className="pointer-events-auto flex h-full flex-col items-center justify-center gap-6 bg-bg">
      <p className="font-display text-4xl tracking-display text-fg">Emberwake</p>
      <p className="text-sm text-muted">The kiln remembers.</p>
      <div className="h-1 w-56 overflow-hidden rounded-full bg-raised">
        <div className="h-full bg-accent transition-[width] duration-300" style={{ width: `${Math.round(p * 100)}%` }} />
      </div>
    </div>
  );
}

function Title({ hasRun, loadP, onContinue }: { hasRun: boolean; loadP: number; onContinue: () => void }) {
  return (
    <div className="pointer-events-auto flex h-full flex-col items-center justify-end gap-4 overflow-y-auto bg-gradient-to-t from-bg via-bg/70 to-transparent px-6 pb-8 pt-16 sm:gap-5 sm:pb-16">
      <video
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        src="/game/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <h1 className="font-display text-4xl tracking-display text-fg sm:text-5xl md:text-7xl">Emberwake</h1>
      <p className="max-w-md text-center text-sm text-muted">
        Eight wardens. Fifty hosts. Five hundred relics. A crypt that never repeats.
      </p>
      {loadP < 1 && (
        <div className="h-0.5 w-48 overflow-hidden rounded-full bg-raised">
          <div className="h-full bg-accent" style={{ width: `${Math.round(loadP * 100)}%` }} />
        </div>
      )}
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Btn
          primary
          wide
          onClick={() => {
            game.screen = "class";
            game.emit();
          }}
        >
          New descent
        </Btn>
        {hasRun && (
          <Btn wide onClick={onContinue}>
            Resume
          </Btn>
        )}
        <Btn
          wide
          onClick={() => {
            game.screen = "sanctum";
            game.emit();
          }}
        >
          Sanctum
        </Btn>
        <div className="flex gap-2">
          <Btn
            wide
            onClick={() => {
              game.screen = "codex";
              game.emit();
            }}
          >
            Codex
          </Btn>
          <Btn
            wide
            onClick={() => game.openSettings()}
          >
            Settings
          </Btn>
        </div>
        <Btn
          wide
          onClick={() => {
            game.credits = 0;
            game.screen = "credits";
            game.emit();
          }}
        >
          Credits
        </Btn>
      </div>
    </div>
  );
}

function Sanctum({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full flex-col overflow-auto bg-bg/80 p-5 pt-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-3xl text-fg">Sanctum</p>
            <p className="text-sm text-muted">Spend ash. Temper the next descent.</p>
          </div>
          <p className="font-mono text-sm text-accent">{hud.ashes} ash</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {TALENTS.map((t) => {
            const r = hud.meta.talents[t.id] ?? 0;
            const cost = t.cost * (r + 1);
            return (
              <Panel key={t.id} className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.desc} {r}/{t.max}
                  </p>
                </div>
                <Btn disabled={r >= t.max || hud.ashes < cost} onClick={() => game.buyTalent(t.id)}>
                  {r >= t.max ? "Max" : `${cost}`}
                </Btn>
              </Panel>
            );
          })}
        </div>
        <div className="flex gap-2">
          <Btn
            primary
            wide
            onClick={() => {
              game.screen = "class";
              game.emit();
            }}
          >
            Descend
          </Btn>
          <Btn
            wide
            onClick={() => {
              game.screen = "title";
              game.emit();
            }}
          >
            Back
          </Btn>
        </div>
      </div>
    </div>
  );
}

function ClassSelect({
  hud,
  seed,
  setSeed,
  heat,
  setHeat,
  picked,
  setPicked,
}: {
  hud: Hud;
  seed: string;
  setSeed: (s: string) => void;
  heat: number;
  setHeat: (n: number) => void;
  picked: ClassId;
  setPicked: (c: ClassId) => void;
}) {
  const c = CLASS_BY_ID[picked];
  const locked = !hud.meta.unlocked.includes(picked);
  return (
    <div className="pointer-events-auto flex h-full flex-col overflow-auto bg-bg/85 p-4 pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <p className="font-display text-3xl">Choose a warden</p>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {hud.classes.map((cl) => {
            const open = hud.meta.unlocked.includes(cl.id);
            return (
              <button
                key={cl.id}
                type="button"
                onClick={() => setPicked(cl.id)}
                className={`overflow-hidden rounded-lg border text-left ${
                  picked === cl.id ? "border-accent" : "border-border"
                }`}
              >
                <img src={`/game/portraits/${cl.id}.jpg`} alt="" className={`h-28 w-full object-cover ${open ? "" : "grayscale"}`} />
                <div className="bg-surface px-3 py-2">
                  <p className="text-sm font-medium">{cl.name}</p>
                  <p className="text-xs text-muted">{open ? cl.role : `${cl.unlock} ash`}</p>
                </div>
              </button>
            );
          })}
        </div>
        <Panel className="flex flex-col gap-3 md:flex-row">
          <img src={`/game/portraits/${c.id}.jpg`} alt="" className="h-40 w-full rounded-md object-cover md:w-56" />
          <div className="flex-1">
            <p className="font-display text-2xl">{c.name}</p>
            <p className="text-sm text-muted">{c.title}</p>
            <p className="mt-2 text-sm">{c.blurb}</p>
            <p className="mt-2 text-xs text-muted">
              {c.weapon} · {c.skill}: {c.skillDesc}
            </p>
            {locked && (
              <div className="mt-3">
                <Btn onClick={() => game.unlockClass(c.id)}>Unlock for {c.unlock} ash</Btn>
              </div>
            )}
          </div>
        </Panel>
        <div className="grid gap-3 md:grid-cols-3">
          <label className="text-xs text-muted">
            Seed
            <input
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              className="mt-1 min-h-11 w-full rounded-md border border-border bg-raised px-3 text-sm text-fg"
            />
          </label>
          <label className="text-xs text-muted">
            Heat {heat}
            <input
              type="range"
              min={0}
              max={15}
              value={heat}
              onChange={(e) => setHeat(Number(e.target.value))}
              className="mt-3 w-full"
            />
            <span className="block text-[11px] text-subtle">{HEAT.map((h) => h.name).slice(0, Math.min(8, heat || 1)).join(" · ")}</span>
          </label>
          <div className="flex flex-col justify-end gap-2">
            <Btn
              primary
              disabled={locked}
              onClick={() => game.beginRun({ classId: picked, seed, heat, daily: false })}
            >
              Descend
            </Btn>
            <Btn
              disabled={locked}
              onClick={() => game.beginRun({ classId: picked, seed: game.dailySeed(), heat, daily: true })}
            >
              Daily rite
            </Btn>
            <Btn
              disabled={locked}
              onClick={() => game.beginRun({ classId: picked, seed, heat, daily: false, endless: true })}
            >
              Endless crypts
            </Btn>
          </div>
        </div>
        <Btn
          onClick={() => {
            game.screen = "title";
            game.emit();
          }}
        >
          Back
        </Btn>
      </div>
    </div>
  );
}

function HudBar({ hud }: { hud: Hud }) {
  const hp = Math.max(0, hud.hp / Math.max(1, hud.maxHp));
  const cls = hud.classId ? CLASS_BY_ID[hud.classId] : null;
  return (
    <>
      <div className="pointer-events-none absolute left-3 top-3 right-3 flex flex-col gap-2 md:right-auto md:w-80">
        <div className="rounded-lg border border-border bg-surface/80 p-3">
          <div className="flex items-baseline justify-between text-xs text-muted">
            <span className="font-display text-sm text-fg">{cls?.name}</span>
            <span className="font-mono">
              {hud.floorName} · F{hud.floor}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-raised">
            <div className="h-full bg-ember" style={{ width: `${hp * 100}%` }} />
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-raised">
            <div className="h-full bg-ok" style={{ width: `${(hud.xp / Math.max(1, hud.xpTo)) * 100}%` }} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[11px] text-muted">
            <span>
              {Math.ceil(hud.hp)}/{Math.ceil(hud.maxHp)}
            </span>
            <span>Lv {hud.level}</span>
            <span>{hud.gold}g</span>
            {hud.waves > 0 && (
              <span>
                Wave {hud.wave}/{hud.waves}
              </span>
            )}
          </div>
          <div className="mt-2 flex gap-3 font-mono text-[11px] text-subtle">
            <span>Dash {hud.dash > 0.05 ? hud.dash.toFixed(1) : "ready"}</span>
            <span>
              {cls?.skill ?? "Skill"} {hud.skillCd > 0.05 ? hud.skillCd.toFixed(1) : "ready"}
            </span>
            {hud.heat > 0 && <span>Heat {hud.heat}</span>}
          </div>
          {hud.inventory.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {hud.inventory.slice(0, 10).map((it, i) => (
                <Icon key={it.id + i} sheet={it.iconSheet} index={it.iconIndex} size={22} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-auto absolute right-3 top-3 md:hidden">
        <Btn
          onClick={() => {
            game.screen = "paused";
            game.flushSave();
            game.emit();
          }}
        >
          Pause
        </Btn>
      </div>
      <div className="pointer-events-none absolute right-3 top-3 hidden md:block">
        <Minimap rooms={hud.minimap} />
      </div>
      <p className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-[11px] text-subtle md:block">
        WASD move · mouse aim · click fire · Space dash · Q skill · Esc pause
      </p>
    </>
  );
}

function Minimap({ rooms }: { rooms: Hud["minimap"] }) {
  if (!rooms.length) return null;
  const s = 14;
  return (
    <div className="rounded-md border border-border bg-surface/80 p-2">
      <div className="relative" style={{ width: 9 * s, height: 9 * s }}>
        {rooms.map((r, i) => (
          <div
            key={i}
            className="absolute rounded-[2px]"
            style={{
              width: s - 3,
              height: s - 3,
              left: (r.gx + 4) * s,
              top: (r.gy + 4) * s,
              background: r.current ? "#ece6dc" : r.cleared ? "#7d9a6a" : r.seen ? "#6f6962" : "#2c2925",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Pause({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4">
      <Panel className="w-full max-w-sm">
        <p className="font-display text-2xl">Paused</p>
        <p className="mt-1 text-xs text-muted">
          Seed {hud.seed} · Heat {hud.heat} · autosaved
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Btn
            primary
            wide
            onClick={() => {
              game.screen = "playing";
              game.emit();
            }}
          >
            Resume
          </Btn>
          <Btn wide onClick={() => game.openSettings()}>
            Settings
          </Btn>
          <Btn
            wide
            onClick={() => {
              game.flushSave();
              game.screen = "title";
              game.emit();
            }}
          >
            Save and quit
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function LevelUp({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full items-end justify-center bg-bg/50 p-4 pb-8">
      <div className="grid w-full max-w-3xl gap-3 md:grid-cols-3">
        {hud.choices.map((c, i) => (
          <button
            key={i}
            type="button"
            onClick={() => game.pickChoice(i)}
            className="rounded-lg border border-border bg-surface p-4 text-left"
          >
            <p className="text-xs uppercase tracking-wide text-muted">{c.upgrade?.rarity}</p>
            <p className="font-display text-xl">{c.upgrade?.name}</p>
            <p className="mt-2 text-sm text-muted">{c.upgrade?.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function Shop({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4">
      <Panel className="w-full max-w-lg">
        <p className="font-display text-2xl">Ashmarket</p>
        <p className="text-sm text-muted">{hud.gold} gold</p>
        <div className="mt-4 grid gap-2">
          {hud.shop.map((s, i) => (
            <button
              key={s.item.id + i}
              type="button"
              onClick={() => game.buy(i)}
              className="flex items-center gap-3 rounded-md border border-border bg-raised p-3 text-left"
            >
              <Icon sheet={s.item.iconSheet} index={s.item.iconIndex} />
              <div className="flex-1">
                <p className="text-sm" style={{ color: RARITY_COLOR[s.item.rarity] }}>
                  {s.item.name}
                </p>
                <p className="text-xs text-muted">{s.item.desc}</p>
              </div>
              <span className="font-mono text-sm">{s.price}g</span>
            </button>
          ))}
        </div>
        <div className="mt-4">
          <Btn wide onClick={() => game.closeShop()}>
            Leave
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function Chest({ hud }: { hud: Hud }) {
  const it = hud.chest;
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4">
      <Panel className="w-full max-w-sm text-center">
        <p className="font-display text-2xl">A chest</p>
        {it && (
          <div className="mt-4 flex flex-col items-center gap-2">
            <Icon sheet={it.iconSheet} index={it.iconIndex} size={64} />
            <p style={{ color: RARITY_COLOR[it.rarity] }}>{it.name}</p>
            <p className="text-sm text-muted">{it.desc}</p>
          </div>
        )}
        <div className="mt-4">
          <Btn primary wide onClick={() => game.takeChest()}>
            Take it
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function Shrine({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/70 p-4">
      <Panel className="w-full max-w-sm">
        <p className="font-display text-2xl">Shrine</p>
        <p className="mt-2 text-sm text-muted">{hud.shrine}</p>
        <div className="mt-4 flex gap-2">
          <Btn primary wide onClick={() => game.useShrine()}>
            Accept
          </Btn>
          <Btn
            wide
            onClick={() => {
              const room = game.currentRoom();
              if (room) room.cleared = true;
              game.screen = "playing";
              game.emit();
            }}
          >
            Walk on
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function GameOver({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/80 p-4">
      <Panel className="w-full max-w-sm">
        <p className="font-display text-3xl">Fallen</p>
        <p className="mt-2 text-sm text-muted">
          {hud.kills} slain · {Math.floor(hud.time)}s · Floor {hud.floor}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Btn
            primary
            wide
            onClick={() => {
              game.screen = "class";
              game.emit();
            }}
          >
            Descend again
          </Btn>
          <Btn
            wide
            onClick={() => {
              game.screen = "title";
              game.emit();
            }}
          >
            Title
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function Victory({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/80 p-4">
      <Panel className="w-full max-w-sm">
        <p className="font-display text-3xl">The crown cools</p>
        <p className="mt-2 text-sm text-muted">You walked out. Heat {hud.heat}. {hud.kills} slain.</p>
        <div className="mt-4 flex flex-col gap-2">
          <Btn
            primary
            wide
            onClick={() => {
              if (!hud.classId) return;
              game.beginRun({ classId: hud.classId, seed: hud.seed + "+e", heat: hud.heat, daily: false, endless: true });
            }}
          >
            Endless crypts
          </Btn>
          <Btn
            wide
            onClick={() => {
              game.credits = 0;
              game.screen = "credits";
              game.emit();
            }}
          >
            Credits
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function Credits({ y }: { y: number }) {
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
    "The kiln is never empty.",
  ];
  return (
    <div className="pointer-events-auto relative h-full overflow-hidden bg-bg">
      <div className="absolute inset-x-0 text-center" style={{ transform: `translateY(${220 - y}px)` }}>
        {lines.map((l, i) => (
          <p key={i} className={`mx-auto max-w-md px-4 ${i === 0 ? "font-display text-4xl" : "text-sm text-muted"} py-2`}>
            {l || "\u00a0"}
          </p>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Btn
          onClick={() => {
            game.screen = "title";
            game.emit();
          }}
        >
          Title
        </Btn>
      </div>
    </div>
  );
}

function Codex({ hud, tab, setTab }: { hud: Hud; tab: "rites" | "bestiary" | "reliquary"; setTab: (t: "rites" | "bestiary" | "reliquary") => void }) {
  return (
    <div className="pointer-events-auto flex h-full flex-col overflow-auto bg-bg p-4 pt-8">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-display text-3xl">Codex</p>
        <div className="mt-3 flex gap-2">
          {(["rites", "bestiary", "reliquary"] as const).map((t) => (
            <Btn key={t} primary={tab === t} onClick={() => setTab(t)}>
              {t}
            </Btn>
          ))}
        </div>
        <div className="mt-4 grid gap-2">
          {tab === "rites" &&
            ACHIEVEMENTS.map((a) => (
              <Panel key={a.id} className="p-3">
                <p className="text-sm">{hud.meta.achievements.includes(a.id) ? a.name : "Unknown rite"}</p>
                <p className="text-xs text-muted">{hud.meta.achievements.includes(a.id) ? a.desc : "Not yet."}</p>
              </Panel>
            ))}
          {tab === "bestiary" &&
            ENEMIES.map((e) => (
              <Panel key={e.id} className="flex items-center justify-between p-3">
                <div>
                  <p className="text-sm">{hud.meta.discovered.includes(e.id) ? e.name : "????"}</p>
                  <p className="text-xs text-muted">{e.behavior}</p>
                </div>
                <span className="text-xs text-subtle">{e.boss ? "Boss" : e.elite ? "Elite" : "Host"}</span>
              </Panel>
            ))}
          {tab === "reliquary" && (
            <div className="grid gap-2">
              <p className="text-sm text-muted">
                {hud.collected} / {hud.itemsCount} relics known. {hud.discovered} / {hud.enemiesCount} hosts named.
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ITEMS.filter((i) => hud.meta.collected.includes(i.id))
                  .slice(0, 48)
                  .map((it) => (
                    <Panel key={it.id} className="flex items-center gap-2 p-2">
                      <Icon sheet={it.iconSheet} index={it.iconIndex} size={32} />
                      <div>
                        <p className="text-xs" style={{ color: RARITY_COLOR[it.rarity] }}>
                          {it.name}
                        </p>
                        <p className="text-[11px] text-subtle">{it.desc}</p>
                      </div>
                    </Panel>
                  ))}
              </div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <Btn
            onClick={() => {
              game.screen = "title";
              game.emit();
            }}
          >
            Back
          </Btn>
        </div>
      </div>
    </div>
  );
}

function Settings({ hud }: { hud: Hud }) {
  const s = hud.meta.settings;
  const set = (k: keyof typeof s, v: number | boolean) => {
    game.meta.settings = { ...s, [k]: v };
    game.audio.apply(game.meta.settings);
    saveMeta(game.meta);
    game.emit();
  };
  return (
    <div className="pointer-events-auto flex h-full items-center justify-center bg-bg/80 p-4">
      <Panel className="w-full max-w-md">
        <p className="font-display text-2xl">Settings</p>
        {(["master", "music", "sfx", "shake"] as const).map((k) => (
          <label key={k} className="mt-3 block text-xs text-muted">
            {k}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={s[k]}
              onChange={(e) => set(k, Number(e.target.value))}
              className="mt-2 w-full"
            />
          </label>
        ))}
        <label className="mt-3 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={s.autoFire} onChange={(e) => set("autoFire", e.target.checked)} />
          Auto fire
        </label>
        <label className="mt-2 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={s.autoAim} onChange={(e) => set("autoAim", e.target.checked)} />
          Auto aim
        </label>
        <label className="mt-2 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={s.reducedMotion} onChange={(e) => set("reducedMotion", e.target.checked)} />
          Reduce motion
        </label>
        <div className="mt-4">
          <Btn wide onClick={() => game.closeSettings()}>
            Back
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function Touch({ hud }: { hud: Hud }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-end justify-between px-4 md:hidden">
      <Stick
        on={(x, y, a) => {
          game.input.moveStick = { x, y, active: a };
        }}
      />
      <div className="pointer-events-auto flex flex-col gap-2">
        <button
          type="button"
          className="h-14 w-14 rounded-full border border-border bg-surface/80 text-xs"
          onPointerDown={() => {
            game.input.skillPressed = true;
          }}
        >
          {hud.classId ? CLASS_BY_ID[hud.classId].skill : "Skill"}
        </button>
        <button
          type="button"
          className="h-14 w-14 rounded-full border border-border bg-surface/80 text-xs"
          onPointerDown={() => {
            game.input.dashPressed = true;
          }}
        >
          Dash
        </button>
      </div>
      <Stick
        on={(x, y, a) => {
          game.input.aimStick = { x, y, active: a };
        }}
      />
    </div>
  );
}

function Stick({ on }: { on: (x: number, y: number, active: boolean) => void }) {
  return (
    <div
      className="pointer-events-auto h-28 w-28 rounded-full border border-border bg-surface/50"
      onPointerDown={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const handle = (ev: PointerEvent) => {
          const x = (ev.clientX - r.left) / r.width * 2 - 1;
          const y = (ev.clientY - r.top) / r.height * 2 - 1;
          const l = Math.hypot(x, y) || 1;
          const nx = x / Math.max(1, l);
          const ny = y / Math.max(1, l);
          on(nx, ny, true);
        };
        handle(e.nativeEvent);
        const up = () => {
          on(0, 0, false);
          window.removeEventListener("pointermove", handle);
          window.removeEventListener("pointerup", up);
        };
        window.addEventListener("pointermove", handle);
        window.addEventListener("pointerup", up);
      }}
    />
  );
}

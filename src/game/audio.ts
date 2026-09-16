import type { Settings } from "./save";

export class GameAudio {
  ctx: AudioContext | null = null;
  master: GainNode | null = null;
  music: GainNode | null = null;
  sfx: GainNode | null = null;
  muted = false;
  private musicTimer = 0;
  private settings: Settings | null = null;

  unlock() {
    if (!this.ctx) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new Ctx({ latencyHint: "interactive" });
      this.master = this.ctx.createGain();
      this.music = this.ctx.createGain();
      this.sfx = this.ctx.createGain();
      this.music.connect(this.master);
      this.sfx.connect(this.master);
      this.master.connect(this.ctx.destination);
      this.apply(this.settings);
    }
    if (this.ctx.state === "suspended") void this.ctx.resume();
  }

  apply(s: Settings | null) {
    this.settings = s;
    if (!this.master || !this.music || !this.sfx || !s) return;
    const m = s.master * s.master;
    this.master.gain.setTargetAtTime(this.muted ? 0 : m, this.ctx!.currentTime, 0.02);
    this.music.gain.setTargetAtTime(s.music * s.music, this.ctx!.currentTime, 0.04);
    this.sfx.gain.setTargetAtTime(s.sfx * s.sfx, this.ctx!.currentTime, 0.02);
  }

  tone(freq: number, dur: number, type: OscillatorType, vol = 0.12, slide = 0) {
    if (!this.ctx || !this.sfx) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.sfx);
    o.start(t);
    o.stop(t + dur + 0.02);
    o.onended = () => {
      o.disconnect();
      g.disconnect();
    };
  }

  noise(dur: number, vol = 0.1) {
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
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
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
    this.noise(0.08, 0.09);
    this.tone(180 + Math.random() * 40, 0.07, "square", 0.05, -80);
  }
  shoot() {
    this.tone(420 + Math.random() * 80, 0.05, "square", 0.04, -220);
  }
  dash() {
    this.tone(140, 0.12, "sawtooth", 0.05, 200);
  }
  pickup() {
    this.tone(660, 0.08, "triangle", 0.06, 220);
  }
  level() {
    this.tone(330, 0.12, "triangle", 0.07, 200);
    this.tone(495, 0.16, "triangle", 0.05, 260);
  }
  hurt() {
    this.noise(0.12, 0.12);
    this.tone(90, 0.16, "sawtooth", 0.07, -40);
  }
  die() {
    this.noise(0.3, 0.14);
    this.tone(70, 0.4, "sawtooth", 0.08, -50);
  }
  ui() {
    this.tone(520, 0.05, "triangle", 0.05);
  }

  tick(dt: number) {
    if (!this.ctx || !this.music) return;
    this.musicTimer += dt;
    if (this.musicTimer > 2.4) {
      this.musicTimer = 0;
      const t = this.ctx.currentTime;
      const notes = [110, 138.59, 164.81, 146.83];
      const n = notes[Math.floor(Math.random() * notes.length)]!;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = "sine";
      o.frequency.value = n;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.035, t + 0.2);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.1);
      o.connect(g);
      g.connect(this.music);
      o.start(t);
      o.stop(t + 2.2);
    }
  }
}

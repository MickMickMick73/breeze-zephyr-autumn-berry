export type Stick = { x: number; y: number; active: boolean };

export class Input {
  keys = new Set<string>();
  mouse = { x: 0, y: 0, down: false, worldX: 0, worldY: 0 };
  moveStick: Stick = { x: 0, y: 0, active: false };
  aimStick: Stick = { x: 0, y: 0, active: false };
  dashPressed = false;
  skillPressed = false;
  pausePressed = false;
  interactPressed = false;
  injected: string[] | null = null;
  private el: HTMLElement | null = null;
  private keysBound = false;

  attach(el: HTMLElement) {
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

  private detachPointer() {
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

  private onKeyDown = (e: KeyboardEvent) => {
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

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };

  private onPointerDown = (e: PointerEvent) => {
    if (e.button === 0) this.mouse.down = true;
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
    this.el?.setPointerCapture(e.pointerId);
  };

  private onPointerMove = (e: PointerEvent) => {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  };

  private onPointerUp = (e: PointerEvent) => {
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

  held(code: string) {
    const src = this.injected ?? [...this.keys];
    if (this.injected) return this.injected.includes(code);
    return this.keys.has(code);
  }

  moveVec(): { x: number; y: number } {
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
    if (len < 0.2) return { x: 0, y: 0 };
    return { x: x / len, y: y / len };
  }

  firing() {
    return this.mouse.down || this.aimStick.active || this.held("KeyJ");
  }

  setKeys(codes: string[]) {
    this.injected = codes;
    this.keys = new Set(codes);
  }
}

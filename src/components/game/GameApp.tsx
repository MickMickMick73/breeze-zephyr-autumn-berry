import { useEffect, useRef, useSyncExternalStore } from "react";
import { game } from "@/game/engine";
import { Overlay } from "./Overlay";

const serverHud = game.hud();

export function GameApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hud = useSyncExternalStore(
    (cb) => game.subscribe(cb),
    () => game.hud(),
    () => serverHud,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    void game.boot(canvas);
    const onHide = () => game.flushSave();
    window.addEventListener("pagehide", onHide);
    return () => window.removeEventListener("pagehide", onHide);
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-bg text-fg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none"
        style={{ touchAction: "none" }}
      />
      <Overlay hud={hud} />
    </div>
  );
}

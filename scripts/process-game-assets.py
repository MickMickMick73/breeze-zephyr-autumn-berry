#!/usr/bin/env python3
"""Copy Imagine outputs into public/game and chroma-key sprite sheets."""
from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

from PIL import Image

ROOT = Path("/workspace")
ART = ROOT / "artifacts" / "imagine_images"
KEEP = ROOT / "assets" / "sprites" / "keep"
VID = ROOT / "artifacts" / "imagine_videos"
PUB = ROOT / "public" / "game"
RAW = ROOT / "assets" / "sprites" / "raw"
PROC = ROOT / ".grok" / "skills" / "generate2dsprite" / "scripts" / "generate2dsprite.py"

HEROES = {
    "ashguard": "f2ffd5e6-1e6e-4f29-b21a-52178c06d582.jpg",
    "cinderbow": "4ca37784-7d43-47e4-8997-30f8984c8230.jpg",
    "pyrelock": "b34168f7-a8e4-4236-9dfc-8a0b2a92ed1a.jpg",
    "nightveil": "c5e110bf-2751-43c9-bb43-48a377fa109b.jpg",
    "dawnwarden": "14a78285-128e-497f-badf-6fe4ca24c570.jpg",
    "gravekin": "cda26be1-256f-467f-b522-1344b865d455.jpg",
    "stormcall": "63c95646-7a96-4edb-8ba6-029e53fdf3e0.jpg",
    "ironfist": "ed2a664c-f80e-43de-9cc2-57f13b82accf.jpg",
}

SHEETS = {
    "enemies/pack1": ("7b0cfb5f-ad90-44be-83b3-f676e789dbae.jpg", 3, 3, 128, "feet", "largest"),
    "enemies/pack2": ("a333f40c-1a92-47ea-805b-e64df39b8549.jpg", 3, 3, 128, "feet", "largest"),
    "enemies/pack3": ("a5b3f788-4cfa-47c4-8bb4-2dff3464f4f6.jpg", 3, 3, 128, "feet", "largest"),
    "enemies/bosses": ("68582ce6-ad0d-43a9-a739-75a753baef48.jpg", 3, 3, 160, "feet", "largest"),
    "icons/weapons": ("a4ea4c05-f13d-4845-b309-4f44e6d4cc96.jpg", 4, 4, 96, "center", "largest"),
    "icons/armor": ("0b0cade5-4f51-4957-b43c-a35daf00481a.jpg", 4, 4, 96, "center", "largest"),
    "icons/relics": ("da4b5da5-8a73-4348-a1a6-46d51b51d018.jpg", 4, 4, 96, "center", "largest"),
    "icons/relics2": ("2741693d-0d14-44cd-bf7f-7e199398e7ed.jpg", 4, 4, 96, "center", "largest"),
    "fx/fireball": ("f8eafa8f-4490-43d4-8e00-d86ea9fa594e.jpg", 2, 2, 64, "center", "all"),
    "fx/impact": ("1b4fa0af-f724-4f0d-b328-91886eebff06.jpg", 2, 2, 80, "center", "all"),
    "fx/arrow": ("e7efd49d-1ff0-4783-93e0-fabbbea421a7.jpg", 2, 2, 64, "center", "all"),
    "fx/lightning": ("13f1b1cb-7133-4acc-a72a-a17422f6f558.jpg", 2, 2, 64, "center", "all"),
    "fx/slash": ("0a931bdf-fabb-4214-a405-20ba65923df4.jpg", 2, 2, 80, "center", "all"),
    "props/set": ("b37740d8-9ec0-4a36-baed-e1076811b313.jpg", 2, 2, 128, "center", "largest"),
}

TILES = {
    "crypt": "9c6c2b62-baed-47f7-9010-503ec44e1155.jpg",
    "bone": "bc3a61e4-85ed-4835-8912-e9c8327b5691.jpg",
    "frost": "38ccd566-2b01-4121-b5e2-41dcf04973f1.jpg",
    "foundry": "e18d0e72-3046-43ce-b4ab-1d7fab0cdc42.jpg",
    "void": "22122d7e-2bfc-4c68-84ab-c170d952b893.jpg",
    "garden": "72ccfebd-517a-453d-b39e-51a5db39cfed.jpg",
    "tide": "f5013c2a-8149-4b97-aabf-50ddc69e1f5d.jpg",
    "wall": "0e18b668-a7b7-4014-a267-f46c0e5f4bbf.jpg",
}

PORTRAITS = "20608092-35e8-4ae3-b54f-6550c23f062a.jpg"
TITLE = "580966cb-9637-4e7d-96d7-c1769e39b7d5.jpg"
INTRO = "8aebfefc-7fb9-47ac-b087-e4a77ef95b35.mp4"
CLASSES = [
    "ashguard",
    "cinderbow",
    "pyrelock",
    "nightveil",
    "dawnwarden",
    "gravekin",
    "stormcall",
    "ironfist",
]


def find(name: str) -> Path:
    for folder in (KEEP, ART):
        p = folder / name
        if p.exists():
            return p
    raise FileNotFoundError(name)


def run_process(src: Path, out: Path, rows: int, cols: int, cell: int, align: str, component: str) -> None:
    out.mkdir(parents=True, exist_ok=True)
    cmd = [
        "python3",
        str(PROC),
        "process",
        "--input",
        str(src),
        "--target",
        "asset",
        "--mode",
        "sheet",
        "--rows",
        str(rows),
        "--cols",
        str(cols),
        "--output-dir",
        str(out),
        "--cell-size",
        str(cell),
        "--align",
        align,
        "--component-mode",
        component,
        "--shared-scale",
        "--threshold",
        "48",
        "--edge-threshold",
        "72",
    ]
    subprocess.check_call(cmd)


def copy_sheet(processed: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    src = processed / "sheet-transparent.png"
    if src.exists():
        shutil.copy2(src, dest)
        print("wrote", dest)
    else:
        print("MISSING sheet", processed)


def slice_portraits() -> None:
    img = Image.open(find(PORTRAITS)).convert("RGB")
    w, h = img.size
    cols, rows = 4, 2
    cw, ch = w // cols, h // rows
    out = PUB / "portraits"
    out.mkdir(parents=True, exist_ok=True)
    i = 0
    for r in range(rows):
        for c in range(cols):
            crop = img.crop((c * cw, r * ch, (c + 1) * cw, (r + 1) * ch))
            crop.save(out / f"{CLASSES[i]}.jpg", quality=90)
            i += 1


def main() -> None:
    PUB.mkdir(parents=True, exist_ok=True)
    RAW.mkdir(parents=True, exist_ok=True)

    Image.open(find(TITLE)).convert("RGB").save(PUB / "title.jpg", quality=90)
    intro_src = VID / INTRO
    if not intro_src.exists():
        intro_src = PUB / INTRO
    if intro_src.exists():
        shutil.copy2(intro_src, PUB / "intro.mp4")

    tiles_dir = PUB / "tiles"
    tiles_dir.mkdir(parents=True, exist_ok=True)
    for name, fname in TILES.items():
        im = Image.open(find(fname)).convert("RGB").resize((256, 256), Image.Resampling.LANCZOS)
        im.save(tiles_dir / f"{name}.jpg", quality=90)

    slice_portraits()

    for name, fname in HEROES.items():
        src = find(fname)
        raw_png = RAW / f"{name}.png"
        Image.open(src).convert("RGBA").save(raw_png)
        out = ROOT / "assets" / "sprites" / "heroes" / name
        cmd = [
            "python3",
            str(PROC),
            "process",
            "--input",
            str(raw_png),
            "--target",
            "player",
            "--mode",
            "player_sheet",
            "--output-dir",
            str(out),
            "--cell-size",
            "128",
            "--align",
            "feet",
            "--component-mode",
            "largest",
            "--shared-scale",
            "--threshold",
            "48",
            "--edge-threshold",
            "72",
        ]
        subprocess.check_call(cmd)
        dest = PUB / "heroes"
        dest.mkdir(parents=True, exist_ok=True)
        copy_sheet(out, dest / f"{name}.png")

    for key, (fname, rows, cols, cell, align, component) in SHEETS.items():
        src = find(fname)
        raw_png = RAW / f"{key.replace('/', '-')}.png"
        raw_png.parent.mkdir(parents=True, exist_ok=True)
        Image.open(src).convert("RGBA").save(raw_png)
        out = ROOT / "assets" / "sprites" / key
        run_process(raw_png, out, rows, cols, cell, align, component)
        dest = PUB / f"{key}.png"
        copy_sheet(out, dest)

    print("done")


if __name__ == "__main__":
    main()

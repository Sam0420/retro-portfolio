import kaboom from "kaboom";

export function initGame(canvas: HTMLCanvasElement) {
  const k = kaboom({
    width: 640,
    height: 360,
    scale: 2,
    background: [0, 0, 0],
    canvas, // <-- use the real canvas
  });

  const {
    loadSprite, add, sprite, pos, area, body, onKeyDown, addLevel
  } = k;

  // --- assets ---
  loadSprite("player", "https://i.imgur.com/Wb1qfhK.png");
  loadSprite("tileset", "https://i.imgur.com/9g3FUnE.png", { sliceX: 8, sliceY: 8 });

  // --- map ---
  const map = [
    "==========",
    "=        =",
    "=        =",
    "=        =",
    "=        =",
    "==========",
  ];
  const tileSize = 16;

  addLevel(map, {
    tileWidth: tileSize,
    tileHeight: tileSize,
    tiles: {
      "=": () => [sprite("tileset", { frame: 3 }), area(), body({ isStatic: true })],
      " ": () => [sprite("tileset", { frame: 0 })],
    },
  });

  // --- player ---
  const player = add([sprite("player"), pos(32, 32), area(), body()]);

  // --- controls ---
  onKeyDown("left", () => player.move(-120, 0));
  onKeyDown("right", () => player.move(120, 0));
  onKeyDown("up", () => player.move(0, -120));
  onKeyDown("down", () => player.move(0, 120));

  // return context in case you want to add scenes later
  return k;
}
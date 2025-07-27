import kaboom from "kaboom";

// Initialize kaboom and assign it to variable k
const k = kaboom({
  width: 640,
  height: 360,
  scale: 2,
  background: [0, 0, 0],
  canvas: document.getElementById("game") as HTMLCanvasElement,
});

// Use destructuring  to get acess to kaboom function
const { loadSprite, add, sprite, pos, area, body, onKeyDown, z } = k;

// Load a test sprite
loadSprite("player", "https://i.imgur.com/Wb1qfhK.png");

// Load a title sheet
loadSprite("tileset", "https://i.imgur.com/9g3FUnE.png", {
  sliceX: 8,
  sliceY: 8,
});

const map = [
  "==========",
  "=        =",
  "=        =",
  "=        =",
  "=        =",
  "==========",
];

const tileSize = 16;

k.addLevel(map, {
  tileWidth: tileSize,
  tileHeight: tileSize,
  tiles: {
    "=": () => [
      sprite("tileset", { frame: 3 }),
      area(),
      body({ isStatic: true }),
    ],
    " ": () => [sprite("tileset", { frame: 0 })],
  },
});
// Add the player
const player = add([
  sprite("player"),
  pos(32, 32),
  area(),
  body(),
  z(1),
]);

// Movement
onKeyDown("left", () => player.move(-120, 0));
onKeyDown("right", () => player.move(120, 0));
onKeyDown("up", () => player.move(0, -120));
onKeyDown("down", () => player.move(0, 120));
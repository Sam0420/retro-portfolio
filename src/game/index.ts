import kaboom from "kaboom";

// Initialize kaboom and store all helper functions
const k = kaboom({
  width: 640,
  height: 360,
  scale: 2,
  background: [0, 0, 0],
  canvas: document.getElementById("game") as HTMLCanvasElement,
});

// Use destructuring to access kaboom methods
const { loadSprite, add, sprite, pos, area, body, onKeyDown } = k;

// Load a test sprite
loadSprite("player", "https://i.imgur.com/Wb1qfhK.png");

// Add the player
const player = add([
  sprite("player"),
  pos(100, 100),
  area(),
  body(),
]);

// Movement
onKeyDown("left", () => player.move(-120, 0));
onKeyDown("right", () => player.move(120, 0));
onKeyDown("up", () => player.move(0, -120));
onKeyDown("down", () => player.move(0, 120));
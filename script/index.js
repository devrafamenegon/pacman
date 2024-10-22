// index.js
const movementStrategy = new KeyboardMovementStrategy();
const pacman = new PacMan(50, 200, 30, 2, 600, 400, movementStrategy);

const game = new Game(pacman);
game.start();

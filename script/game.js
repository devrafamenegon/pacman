// game.js
class Game {
  constructor(pacman) {
    this.canvas = document.getElementById("pacmanCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.pacman = pacman;
  }

  start() {
    this.gameLoop();
  }

  gameLoop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.pacman.draw(this.ctx);
    this.pacman.move();
    requestAnimationFrame(() => this.gameLoop());
  }
}

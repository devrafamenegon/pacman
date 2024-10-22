// pacman.js
class PacMan {
  constructor(
    x,
    y,
    radius,
    speed,
    canvasWidth,
    canvasHeight,
    movementStrategy
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.mouthOpen = true;
    this.angle = 0.25;
    this.movementStrategy = movementStrategy;
    this.frameCount = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    let startAngle = this.mouthOpen ? this.angle * Math.PI : 0;
    let endAngle = this.mouthOpen ? (2 - this.angle) * Math.PI : 2 * Math.PI;
    ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
    ctx.lineTo(this.x, this.y);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    // Desenhar o olho do Pac-Man
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius / 3,
      this.y - this.radius / 4,
      this.radius / 8,
      0,
      2 * Math.PI
    );
    ctx.fill();

    if (this.frameCount % 30 === 0) {
      this.mouthOpen = !this.mouthOpen;
    }

    this.frameCount++;
  }

  move() {
    this.movementStrategy.move(this);
  }
}

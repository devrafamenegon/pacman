// movementStrategy.js
class MovementStrategy {
  move(pacman) {
    throw new Error("Este método deve ser implementado");
  }
}

class KeyboardMovementStrategy extends MovementStrategy {
  constructor() {
    super();
    this.directions = {
      ArrowUp: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
      w: { x: 0, y: -1 },
      s: { x: 0, y: 1 },
      a: { x: -1, y: 0 },
      d: { x: 1, y: 0 },
    };
    this.currentDirection = { x: 0, y: 0 };
    this.addKeyboardListeners();
  }

  addKeyboardListeners() {
    window.addEventListener("keydown", (event) => {
      if (this.directions[event.key]) {
        this.currentDirection = this.directions[event.key];
      }
    });
  }

  move(pacman) {
    pacman.x += this.currentDirection.x * pacman.speed;
    pacman.y += this.currentDirection.y * pacman.speed;

    if (pacman.x + pacman.radius > pacman.canvasWidth) {
      pacman.x = pacman.canvasWidth - pacman.radius;
      this.changeDirection();
    } else if (pacman.x - pacman.radius < 0) {
      pacman.x = pacman.radius;
      this.changeDirection();
    }

    if (pacman.y + pacman.radius > pacman.canvasHeight) {
      pacman.y = pacman.canvasHeight - pacman.radius;
      this.changeDirection();
    } else if (pacman.y - pacman.radius < 0) {
      pacman.y = pacman.radius;
      this.changeDirection();
    }
  }

  changeDirection() {
    const directionsKeys = Object.keys(this.directions);
    const randomKey =
      directionsKeys[Math.floor(Math.random() * directionsKeys.length)];
    this.currentDirection = this.directions[randomKey];
  }
}

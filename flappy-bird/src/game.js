import Level from './level.js';
// const Level = require('./level.js');

class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  animate() {
    const level = new Level(this.dimensions);
    level.drawBackground(this.ctx);
  }

  restart() {
    this.animate();
  }
}

// export default class FlappyBird {
//   constructor(canvas) {
//     this.ctx = canvas.getContext("2d");
//     this.dimensions = { width: canvas.width, height: canvas.height };
//   }
// }

export default FlappyBird;



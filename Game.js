
class Game {
  constructor() {
    this.cactuses = [];
    this.score = 0;
    this.setupCanvas();
    this.setupEntities();
  }

  setupCanvas() {
    this.canvas = document.getElementById('dinoCanvas');
    this.canvas.width = 1000;
    this.canvas.height = 400;
    this.context = this.canvas.getContext('2d');
    this.context.font = "25px Arial";
  }

  setupEntities() {
    this.player = new Player();
    this.terrain = new Terrain();
    this.cactuses.push(new Cactus(1000, () => {
      if (this.player.position.y == 294) {
        this.score = 0;
        this.cactuses.push(new Cactus);
        return (true);
      }
      return (false);
    }));
  }

  update() {
    this.context.clearRect(0, 0, 1000, 400);
    this.context.fillText(`SCORE: ${this.score++}`, 450, 50);
    this.context.fillText(`Press SpaceBar to jump!`, 370 , 100);
    this.terrain.draw(this.context);
    this.player.draw(this.context);
    this.cactuses.forEach((element) => {
      element.update(this.context);
    })
  }

  start() {
    setInterval(() => {
      this.update();
    }, 50);
  }
}

new Game().start();
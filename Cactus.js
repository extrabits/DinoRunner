
class Cactus extends Entity {
  constructor(spawnPoint, killCallback) {
    super(
      {x: spawnPoint, y: 294},
      {w: 102, h: 99},
      'images/cactus.png'
    );
    this.spawnPoint = spawnPoint;
    this.killPlayer = killCallback;
  }

  update(context) {
    this.draw(context);
    if ((this.position.x > 100 && this.position.x < 225) && this.killPlayer())
      this.position.x = this.spawnPoint;
    if (this.position.x)
      this.position.x -= 20;
    else
      this.position.x = this.spawnPoint;
  }
}
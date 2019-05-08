
class Terrain extends Entity {
  constructor() {
    super(
      {x: 0, y: 370},
      {w: 1000, h: 92},
      'images/terrain.png'
    );
    this.setRect({w: 1000, h: 95, x: 0, y: 0}, 20);
  }
}
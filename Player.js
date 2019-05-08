// OOP Inheritance
class Player extends Entity {
  constructor() {
    super(
      {x: 145, y: 294},
      {w: 92, h: 108},
      'images/dino.png'
      );
    this.setRect({w: 91, h: 108, x: 0, y: 0}, 91);
    this.isJumping = false;
    document.addEventListener("keyup", (e) => {
      if (e.keyCode != 32 || this.isJumping)
        return;
      this.position.y = 120;
      this.isJumping = true;
      setTimeout(() => {
        this.isJumping = false;
        this.position.y = 294;
      }, 400);
    }, false);
  }
}

class Entity {
  constructor(position, size, imageUri) {
    this.position = position;
    this.size = size;
    this.image = new Image(size.w, size.h);
    this.image.src = imageUri;
    this.rect = {w: size.w, h: size.w, x: 0, y: 0};
    this.animationOffset = 0;
  }

  setRect(rect, offset) {
    this.animationOffset = offset;
    this.rect = rect;
  }

  draw(context) {
    if (this.animationOffset) {
      if ((this.rect.x + this.animationOffset) >= this.size.w)
        this.rect.x = 0;
      else
        this.rect.x += this.animationOffset;
    }
    context.drawImage(
      this.image,
      this.rect.x,
      this.rect.y,
      this.rect.w,
      this.rect.h,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    );
  }
}
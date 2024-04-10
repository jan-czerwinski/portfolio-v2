import Vector2D from "./Vector2D";

class Boid {
  position: Vector2D;
  velocity: Vector2D;

  constructor(position: Vector2D, velocity: Vector2D) {
    this.position = position;
    this.velocity = velocity;
  }

  copy() {
    return new Boid(this.position, this.velocity);
  }
}
export default Boid;

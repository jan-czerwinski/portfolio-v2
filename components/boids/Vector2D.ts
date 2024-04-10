class Vector2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vector: Vector2D): Vector2D {
    return new Vector2D(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector: Vector2D): Vector2D {
    return new Vector2D(this.x - vector.x, this.y - vector.y);
  }

  multiply(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number): Vector2D {
    return new Vector2D(this.x / scalar, this.y / scalar);
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): Vector2D {
    const mag = this.magnitude();
    if (mag === 0) {
      return new Vector2D(0, 0);
    }
    return new Vector2D(this.x / mag, this.y / mag);
  }

  limit(max: number): Vector2D {
    const mag = this.magnitude();
    if (mag > max) {
      return this.normalize().multiply(max);
    }
    return this;
  }

  static distance(vector1: Vector2D, vector2: Vector2D): number {
    const dx = vector1.x - vector2.x;
    const dy = vector1.y - vector2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  static random(): Vector2D {
    const randomX = Math.random() * 2 - 1; // Random number between -1 and 1
    const randomY = Math.random() * 2 - 1; // Random number between -1 and 1
    return new Vector2D(randomX, randomY);
  }
}

export default Vector2D;

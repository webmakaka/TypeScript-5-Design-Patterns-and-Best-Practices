abstract class Shape {
  abstract getArea(): number

  constructor(public color: string) {}
}

class Square extends Shape {
  constructor(
    private sideLength: number,
    color: string,
  ) {
    super(color)

    this.sideLength = sideLength
  }

  getArea(): number {
    return this.sideLength * this.sideLength
  }
}

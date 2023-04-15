function Shape(width, height) {
  if (this.constructor == Shape) throw "Shape is an abstract Class";
  Object.defineProperties(this, {
    width: { value: width },
    height: { value: height },
    area: {
      value: function () {
        return this.width * this.height;
      },
    },
    perimeter: {
      value: function () {
        return (this.width + this.height) * 2;
      },
    },
    valueOf: {
      value: function () {
        return this.area();
      },
    },
    toString: {
      value: function () {
        return `width is: ${this.width}, height is: ${this.height}`;
      },
    },
  });
}

function Rectangle(width, height) {
  if (Rectangle.genratedRectangles === 1 && this.constructor == Rectangle)
    throw "only one object is allowed";
  Shape.call(this, width, height);
  if (this.constructor == Rectangle) Rectangle.genratedRectangles++;
}
Rectangle.genratedRectangles = 0;

function Square(dim) {
  if (Square.genratedSquares === 1) throw "only one object is allowed";
  Rectangle.call(this, dim, dim);
  Square.genratedSquares++;
}
Square.genratedSquares = 0;

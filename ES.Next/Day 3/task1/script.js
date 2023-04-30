class Polygon {
  constructor() {
    if (new.target === Polygon) {
      throw new Error("Polygon cannot be instantiated directly.");
    }
  }

  toString() {
    return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  draw(context) {
    context.fillRect(0, 120, this.width, this.height);
  }
}

class Square extends Polygon {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }

  draw(context) {
    context.fillRect(0, 200, this.side, this.side);
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  draw(context) {
    context.beginPath();
    context.arc(200, 100, this.radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }

  perimeter() {
    // Assuming it's an equilateral triangle
    return 3 * this.base;
  }

  draw(context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.base / 2, this.height);
    context.lineTo(-this.base / 2, this.height);
    context.closePath();
    context.fill();
  }
}

// Create canvas and context
const canvas = document.createElement("canvas");
canvas.width = canvas.height = 500;
document.body.appendChild(canvas);
const context = canvas.getContext("2d");

// Create shapes
const rectangle = new Rectangle(100, 50);
const square = new Square(75);
const circle = new Circle(50);
const triangle = new Triangle(100, 86.60254037844386467637231707529); // Height calculated based on equilateral triangle formula

// Draw shapes on canvas
rectangle.draw(context);
square.draw(context);
circle.draw(context);
triangle.draw(context);

// Display shape info in console
console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());

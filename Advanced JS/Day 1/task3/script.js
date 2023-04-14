function addNum() {
  if (!arguments.length) {
    throw new Error("Enter any number of parameters");
  } else {
    var sum = 0;
    for (const arg of arguments) {
      if (typeof arg !== "number") throw new Error("Invalid parameter type");
      sum += arg;
    }
    return sum;
  }
}

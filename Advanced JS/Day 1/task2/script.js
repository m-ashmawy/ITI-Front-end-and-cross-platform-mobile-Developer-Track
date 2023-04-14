function twoPar(a, b) {
  if (arguments.length === 2) {
    console.log("it's ok");
  } else {
    throw new Error("Send exactly two parameters");
  }
}

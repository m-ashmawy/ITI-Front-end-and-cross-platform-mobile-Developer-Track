function reverseArg() {
  if (!arguments.length) throw new Error("Enter any number of parameters");
  // else [].reverse.call(arguments);
  else [].reverse.apply(arguments);
  return [].join.bind(arguments)();
}

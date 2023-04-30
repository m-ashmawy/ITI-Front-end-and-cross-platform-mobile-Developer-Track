conditionizr.add("NoWebStorage", function () {
  !window.fakeStorage;
});
conditionizr.polyfill("./lib.js", ["NoWebStorage"]);

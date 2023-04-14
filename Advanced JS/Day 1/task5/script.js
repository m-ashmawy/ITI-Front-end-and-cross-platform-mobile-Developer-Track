var rect = new Object();
rect.width = 4;
rect.height = 5;
rect.area = function () {
  return this.width * this.height;
};
rect.perimeter = function () {
  return (this.width + this.height) * 2;
};
rect.displayInfo = function displayInfo() {
  var data = {};
  for (const key in this) {
    if (typeof this[key] !== "function") data[key] = this[key];
    else {
      if (this[key].name !== "displayInfo") data[key] = this[key]();
    }
  }
  console.table(data);
};
/*

















*/
// rect.displayInfo = function () {
//   console.table(this);
// };

// rect.displayInfo = function () {
//   console.table({
//     width: this.width,
//     height: this.height,
//     area: this.area(),
//     perimeter: this.perimeter(),
//   });
// };

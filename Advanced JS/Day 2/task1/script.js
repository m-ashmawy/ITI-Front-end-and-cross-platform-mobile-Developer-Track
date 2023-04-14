function List(start, step, end) {
  var values = [];
  var fillValues = function () {
    for (i = start; i <= end; i += step) {
      values.push(i);
    }
  };
  fillValues();

  this.getValues = function () {
    return values;
  };
  this.append = function (val) {
    if (val !== this.getValues()[this.getValues().length - 1] + step)
      throw new Error("Val Doesn't follow the sequence");
    values.push(val);
  };
  this.prepend = function (val) {
    if (val !== this.getValues()[0] - step)
      throw new Error("Val Doesn't follow the sequence");
    values.unshift(val);
  };
}
List.prototype.popVal = function () {
  if (!this.getValues().length) throw new Error("no values in the list");
  this.getValues().pop();
};
List.prototype.dequeue = function () {
  if (!this.getValues().length) throw new Error("no values in the list");
  this.getValues().shift();
};
/*







*/
var obj = new List(0, 2, 10);
console.log(obj.getValues());
// obj.append(13);
obj.append(12);
console.log(obj.getValues());
// obj.append(12);
obj.prepend(-2);
console.log(obj.getValues());
// obj.prepend(-1);
var obj2 = new List(0, 3, 12);
console.log(obj2.getValues());
obj2.popVal();
obj2.popVal();
console.log(obj2.getValues());
obj2.dequeue();
obj2.dequeue();
console.log(obj2.getValues());

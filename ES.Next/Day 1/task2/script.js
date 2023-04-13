let arr = [1, 2, 3, 4, 5];
function getMinMax(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}
let [min, max] = getMinMax(...arr);
console.log(`min is ${min}, max is ${max}`);

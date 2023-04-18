function* iterator() {
  let obj = {
    name: "MK",
    age: 29,
    address: "MNF",
  };
  yield* Object.entries(obj);
}
for (const [key, value] of iterator()) {
  console.log(key + " :: " + value);
}

// another way--------------------------------------------
// const myObject = {
//   name: "MK",
//   age: 29,
//   address: "MNF",
//   [Symbol.iterator]: function* () {
//     const keys = Object.keys(this);
//     for (const key of keys) {
//       yield { property: key, value: this[key] };
//     }
//   },
// };

// for (const { property, value } of myObject) {
//   console.log(`${property} :: ${value}`);
// }

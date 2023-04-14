obj = {
  id: "10",
  location: "giza",
  addr: "street 1",
  getSetGen: function () {
    for (var key in this) {
      var caller = this;
      if (typeof caller[key] !== "function")
        (function (currKey) {
          caller["set" + key] = function (newVal) {
            this[currKey] = newVal;
          };
          caller["get" + key] = function () {
            return this[currKey];
          };
        })(key);
    }
    return "Set and Get functions for your objects properties have been created successfully";
  },
};
var user = { name: "Ali", age: 10 };
/*

























*/

// obj = {
//   id: "10",
//   location: "giza",
//   addr: "street 1",
//   getSetGen: function () {
//     for (var key in this) {
//       if (typeof this[key] !== "function") {
//         this[`set${key}`] = (function (currKey) {
//           return function (newVal) {
//             this[currKey] = newVal;
//           };
//         })(key);
//         this[`get${key}`] = (function (currKey) {
//           return function () {
//             return this[currKey];
//           };
//         })(key);
//       }
//     }
//     return "Set and Get functions for your objects properties have been created successfully";
//   },
// };
// var user = { name: "Ali", age: 10 };

let obj = {
  [Symbol.match]: function (str) {
    return str.match(/[a-c]/gi);
  },
};
console.log("hi a,b,c,d,e".match(obj));

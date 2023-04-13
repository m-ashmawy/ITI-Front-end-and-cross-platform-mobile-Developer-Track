const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((ele) => typeof ele == "string"));
console.log(fruits.some((ele) => ele.startsWith("a")));
console.log(fruits.filter((ele) => ele.startsWith("s") || ele.startsWith("b")));
let likee = fruits.map((ele) => `I like ${ele}`);
console.log(likee);
fruits.forEach((ele) => console.log(`I like ${ele}`));

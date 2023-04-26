const express = require("express");
const app = express();

app.get("/:oper/*", (req, res) => {
  let [, oper, ...nums] = req.url.split("/");
  nums = nums.map((ele) => +ele);
  console.log(oper, nums);
  let result;
  switch (oper) {
    case "add":
      result = nums.reduce((acc, val) => acc + val, 0);
      break;
    case "sub":
      result = nums.reduce((acc, val) => acc - val);
      break;
    case "mult":
      result = nums.reduce((acc, val) => acc * val, 1);
      break;
    case "div":
      if (nums.includes(0, 1)) throw "cannot divide on zero";
      result = nums.reduce((acc, val) => acc / val);
      break;
    default:
      throw new Error(
        "Invalid operation. Please choose from 'add', 'sub', 'mult', or 'div'."
      );
  }
  console.log(result);
  let finalOutPut = `Result = ${result}`;
  res.send(finalOutPut);
});

// app.all("*", (req, res) => {
//   console.log(req.url);
//   res.send("Enter url as following 'localhost:7070/operation/num1/num2/num3'");
// });

app.listen(7070, () => {
  console.log("Listening on Port 7070");
});

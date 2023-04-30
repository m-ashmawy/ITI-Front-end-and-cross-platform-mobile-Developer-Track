//#region Requires
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let PORT = process.env.PORT || 7050;
//#endregion

//#region Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/assets"));
//#endregion

//#region mongoose configuration
mongoose.connect("mongodb://0.0.0.0:27017/School");
let schoolSchema = mongoose.Schema;
let studentsSchema = new schoolSchema({
  id: Number,
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  status: String,
  entry: String,
  city: String,
  state: String,
  zip: Number,
});
let students = mongoose.model("students", studentsSchema);
//#endregion

//#region Requests
mongoose.connection.on("error", () => {
  console.log("Error");
});
mongoose.connection.once("open", () => {
  console.log("connection success to database");
  app.get("/", async (req, res) => {
    let data = await students.find();
    let first = data[0];
    let keys = Object.keys(Object.entries(first)[2][1]);
    res.render("home.ejs", { keys, data });
  });

  app.post("/", async (req, res) => {
    let newStudent = new students(req.body);
    await newStudent.save();
    res.send("post finished");
  });

  app.put("/", async (req, res) => {
    console.log(req.body);
    await students.findByIdAndUpdate(
      { _id: "644b3bbef6eb0b78cc180f33" },
      req.body
    );
    res.send("put finished");
  });
});

//#endregion

app.listen(PORT, () => {
  console.log(`On port http://www.localhost:${PORT}`);
});

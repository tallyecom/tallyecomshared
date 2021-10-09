const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();

dotenv.config({ path: "./.env" });
require ('./db/conn');

app.use(express.json());

// router file acquired
app.use(require('./router/auth'))
app.use(require('./router/detail'))

// middleware
const middleware = async (req, res, next) => {
  console.log("Hello Middleware called");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello World! begginning of a new day, new world");
// });

app.get("/registration", (req, res) => {
  res.send("Registration Page");
});

app.get("/Aboutus", (req, res) => {
  res.send("About us");
});

app.get("/customerdata", middleware, (req, res) => {
  let numorders = 50;
  res.send("Orders Processed :" + numorders);
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});

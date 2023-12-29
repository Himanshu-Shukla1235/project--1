const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/himanshu-dynamic")
  .then(() => {
    console.log("connection is build to the database.....");
  })
  .catch((e) => {
    console.log("connection is not! build to the database");
    console.log(e);
  });

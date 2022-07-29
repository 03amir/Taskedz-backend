const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const todoRouter = require("./router/todo");
app.use(todoRouter);

//connecting to the database
const mongoURI =
  "mongodb+srv://amir03:amir2808@cluster0.a5lzl0n.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, () => {
  console.log("connected to the database yeahh");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("conneted to the server yeah!");
});

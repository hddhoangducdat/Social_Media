const express = require("express");
const authRoute = require("./src/routers/userRoute/authRoute");
const curdInfoRoute = require("./src/routers/userRoute/curdInfoRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected !");
  }
);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/authentication/user", authRoute);
app.use("/api/user", curdInfoRoute);

app.listen(3001, () => {
  console.log("Server up and running...");
});

const express = require("express");
require("express-async-errors");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");
var cors = require("cors");
// const bodyParser = require("body-parser");

const moviesRouter = require("./modules/movies/movies.routes");
const userRouter = require("./modules/users/user.routes");
const profileRouter = require("./modules/profiles/profiles.routes");
require("dotenv").config();

const app = express();

app.use(cors());

// parses req.body (internally with bodyParser)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection to mongodb
mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(() => {
    console.log("Connection to MongoDB is successfull!");
  })
  .catch((error) => {
    console.log("Connection to MongoDB failed!");
  });

//   Models initialization
require("./models/users.model");
require("./models/proflie.model");

// app.get("/api/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//   });
// });

app.use("/api/movies", moviesRouter);
app.use("/api/user", userRouter);
app.use("/api/profile", profileRouter);

app.get("/api", (req, res) => {
  res.send("API running!");
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: "Page Not Found",
  });
});
// Handle all errors
app.use(errorHandler);

// IF(process.env.NODE_ENV === "production");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const express = require("express");
require("express-async-errors");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");

const moviesRouter = require("./modules/movies/movies.routes");
require("dotenv").config();
const PORT = 8000;

const app = express();
// app.use(express.json());

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

// app.get("/api/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//   });
// });

app.use("/api/movies", moviesRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: "Page Not Found",
  });
});
// Handle all errors
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

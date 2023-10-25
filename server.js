const express = require("express");
require("express-async-errors");
const moviesRouter = require("./modules/movies/movies.routes");
const errorHandler = require("./handlers/errorHandler");

require("dotenv").config();
const PORT = 8000;
const app = express();
// app.use(express.json());

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

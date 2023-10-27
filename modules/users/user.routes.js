const express = require("express");
const registerUser = require("./controllers/registerUser");

// Set express Router for users
const userRouter = express.Router();

// Routes
userRouter.post("/register", registerUser);

module.exports = userRouter;

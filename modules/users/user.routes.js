const express = require("express");
const registerUser = require("./controllers/registerUser");
const loginUser = require("./controllers/loginUser");

// Set express Router for users
const userRouter = express.Router();

// Routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;

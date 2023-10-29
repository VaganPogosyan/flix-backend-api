const express = require("express");
const registerUser = require("./controllers/registerUser");
const loginUser = require("./controllers/loginUser");
const auth = require("../../middleware/auth");
const userHomepage = require("./controllers/userHomepage");

// Set express Router for users
const userRouter = express.Router();

// Routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Middleware
userRouter.use(auth);

// Proteced Routes
userRouter.get("/homepage", userHomepage);

module.exports = userRouter;

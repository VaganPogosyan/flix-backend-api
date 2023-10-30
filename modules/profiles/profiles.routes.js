const express = require("express");
const auth = require("../../middleware/auth");
const getAllProfiles = require("./controllers/getAllProfiles");
const createProfile = require("./controllers/createProfile");
const editProfile = require("./controllers/editProfile");
const getProfile = require("./controllers/getProfile");
const deleteProfile = require("./controllers/deleteProfile");
const addToWatchList = require("./controllers/addToWatchList");
const getWatchList = require("./controllers/getWatchList");

// Set express Router for users
const profileRouter = express.Router();

// Middleware
profileRouter.use(auth);

// Proteced Routes
profileRouter.get("/", getAllProfiles);
profileRouter.get("/:profile_id", getProfile);

profileRouter.post("/create_profile", createProfile);
profileRouter.post("/edit_profile/:profile_id", editProfile);
profileRouter.delete("/delete_profile/:profile_id", deleteProfile);

// Watchlist
profileRouter.get("/watchlist/:profile_id", getWatchList);
profileRouter.post("/add_to_watchlist/:profile_id/:movie_id", addToWatchList);

module.exports = profileRouter;

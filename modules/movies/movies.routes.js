const express = require("express");

// import routes
const getTrendingMovies = require("./controllers/getTrendingMovies");
const getTopRatedMovies = require("./controllers/getTopRatedMovies");
const getPopularMovies = require("./controllers/getPopularMovies");
const getTopRatedTVShows = require("./controllers/getTopRatedTvShows");
const getPopularTVShows = require("./controllers/getPopularTVShows");
const getGenres = require("./controllers/getGenres");
const getActionMovies = require("./controllers/getActionMovies");

// Set express Router for movies
const moviesRouter = express.Router();

// Routes:
moviesRouter.get("/trending", getTrendingMovies);
moviesRouter.get("/top_rated_movies", getTopRatedMovies);
moviesRouter.get("/popular_movies", getPopularMovies);
moviesRouter.get("/top_rated_tvshows", getTopRatedTVShows);
moviesRouter.get("/popular_tvshows", getPopularTVShows);

// By Genre
// moviesRouter.get("/genres", getGenres);
moviesRouter.get("/action_movies", getActionMovies);

module.exports = moviesRouter;

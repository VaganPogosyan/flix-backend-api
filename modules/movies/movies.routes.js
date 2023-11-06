const express = require("express");

// import routes
const getTrendingMovies = require("./controllers/getTrendingMovies");
const getTopRatedMovies = require("./controllers/getTopRatedMovies");
const getPopularMovies = require("./controllers/getPopularMovies");
const getTopRatedTVShows = require("./controllers/getTopRatedTVShows");
const getPopularTVShows = require("./controllers/getPopularTVShows");
const getGenres = require("./controllers/getGenres");
const getActionMovies = require("./controllers/getActionMovies");
const getComedyMovies = require("./controllers/getComedyMovies");
const getAdventureMovies = require("./controllers/getAdventureMovies");
const getAnimationMovies = require("./controllers/getAnimationMovies");
const getCrimeMovies = require("./controllers/getCrimeMovies");
const getDocumentaryMovies = require("./controllers/getDocumentaryMovies");
const getDramaMovies = require("./controllers/getDramaMovies");
const getFamilyMovies = require("./controllers/getFamilyMovies");
const getFantasyMovies = require("./controllers/getFantasyMovies");
const getHorrorMovies = require("./controllers/getHorrorMovies");
const getRomanceMovies = require("./controllers/getRomanceMovies");
const getScienceFictionMovies = require("./controllers/getScienceFictionMovies");
const getThrillerMovies = require("./controllers/getThrillerMovies");
const getWesternMovies = require("./controllers/getWesternMovies");
const getActionAdventureTVShows = require("./controllers/getActionAdventureTVShows");
const getRealityTVShows = require("./controllers/getRealityTVShows");
const getSciFiFantasyTVShows = require("./controllers/getSciFiFantasyTVShows");
const searchMovie = require("./controllers/searchMovie");
const getMovieById = require("./controllers/getMovieById");
const getVideos = require("./controllers/getVideos");
const getRandomTrendingMovie = require("./controllers/getRandomTrendingMovie");

// Set express Router for movies
const moviesRouter = express.Router();

// Routes:
moviesRouter.get("/trending", getTrendingMovies);
moviesRouter.get("/top_rated_movies", getTopRatedMovies);
moviesRouter.get("/popular_movies", getPopularMovies);
moviesRouter.get("/top_rated_tvshows", getTopRatedTVShows);
moviesRouter.get("/popular_tvshows", getPopularTVShows);

// moviesRouter.get("/genres", getGenres);

// By Genre
moviesRouter.get("/action_movies", getActionMovies);
moviesRouter.get("/adventure_movies", getAdventureMovies);
moviesRouter.get("/animation_movies", getAnimationMovies);
moviesRouter.get("/comedy_movies", getComedyMovies);
moviesRouter.get("/crime_movies", getCrimeMovies);
moviesRouter.get("/documentary_movies", getDocumentaryMovies);
moviesRouter.get("/drama_movies", getDramaMovies);
moviesRouter.get("/family_movies", getFamilyMovies);
moviesRouter.get("/fantasy_movies", getFantasyMovies);
moviesRouter.get("/horror_movies", getHorrorMovies);
moviesRouter.get("/romance_movies", getRomanceMovies);
moviesRouter.get("/science_fiction_movies", getScienceFictionMovies);
moviesRouter.get("/thriller_movies", getThrillerMovies);
moviesRouter.get("/western_movies", getWesternMovies);

// TV Shows by genre
moviesRouter.get("/action_adventure_tvshows", getActionAdventureTVShows);
moviesRouter.get("/reality_tvshows", getRealityTVShows);
moviesRouter.get("/scifi_fantasy_tvshows", getSciFiFantasyTVShows);

// Search movie by name
moviesRouter.get("/search", searchMovie);

// Get Movie By ID
moviesRouter.get("/movie/:movie_id", getMovieById);

// Get Random Movie
moviesRouter.get("/random_movie", getRandomTrendingMovie);

// Get Videos
moviesRouter.get("/:movie_or_tv/videos/:movie_id", getVideos);

module.exports = moviesRouter;
